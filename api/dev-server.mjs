// 로컬 개발용 TTS API 서버 (npm run dev:api)
import http from 'http'
import { Communicate } from 'edge-tts-universal'

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:3001')

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (url.pathname !== '/api/tts') {
    res.writeHead(404)
    res.end('Not found')
    return
  }

  const text = url.searchParams.get('text') || ''
  const voice = url.searchParams.get('voice') || 'en-US-AriaNeural'

  if (!text || text.length > 500) {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'text required (max 500)' }))
    return
  }

  try {
    const communicate = new Communicate(text, { voice, rate: '-5%' })
    const chunks = []

    for await (const chunk of communicate.stream()) {
      if (chunk.type === 'audio' && chunk.data) chunks.push(chunk.data)
    }

    const audio = Buffer.concat(chunks)
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': audio.length,
    })
    res.end(audio)
  } catch (err) {
    console.error('TTS error:', err)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'TTS failed' }))
  }
})

server.listen(3001, () => {
  console.log('TTS dev server running on http://localhost:3001')
})
