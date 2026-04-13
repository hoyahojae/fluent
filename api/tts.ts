import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Communicate } from 'edge-tts-universal'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const text = (req.query.text as string) || ''
  const voice = (req.query.voice as string) || 'en-US-AriaNeural'

  if (!text || text.length > 500) {
    return res.status(400).json({ error: 'text is required (max 500 chars)' })
  }

  try {
    const communicate = new Communicate(text, {
      voice,
      rate: '-5%',
      pitch: '+0Hz',
    })

    const chunks: Buffer[] = []

    for await (const chunk of communicate.stream()) {
      if (chunk.type === 'audio' && chunk.data) {
        chunks.push(chunk.data)
      }
    }

    const audioBuffer = Buffer.concat(chunks)

    res.setHeader('Content-Type', 'audio/mpeg')
    res.setHeader('Content-Length', audioBuffer.length)
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400')
    res.send(audioBuffer)
  } catch (err) {
    console.error('TTS error:', err)
    res.status(500).json({ error: 'TTS generation failed' })
  }
}
