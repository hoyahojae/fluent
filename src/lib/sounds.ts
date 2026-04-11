type SoundType = 'correct' | 'incorrect' | 'click' | 'levelup' | 'complete' | 'xp'

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  return audioCtx
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
  const ctx = getAudioContext()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(frequency, ctx.currentTime)
  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + duration)
}

function playNotes(notes: { freq: number; start: number; dur: number; type?: OscillatorType; vol?: number }[]) {
  for (const note of notes) {
    setTimeout(() => {
      playTone(note.freq, note.dur, note.type ?? 'sine', note.vol ?? 0.12)
    }, note.start * 1000)
  }
}

export function playSound(sound: SoundType) {
  try {
    switch (sound) {
      case 'correct':
        // 상승하는 두 음 (밝고 경쾌)
        playNotes([
          { freq: 523, start: 0, dur: 0.12, vol: 0.15 },      // C5
          { freq: 659, start: 0.08, dur: 0.15, vol: 0.15 },    // E5
          { freq: 784, start: 0.16, dur: 0.25, vol: 0.12 },    // G5
        ])
        break

      case 'incorrect':
        // 하강하는 두 음 (부드러운 경고)
        playNotes([
          { freq: 330, start: 0, dur: 0.15, type: 'triangle', vol: 0.12 },   // E4
          { freq: 262, start: 0.12, dur: 0.25, type: 'triangle', vol: 0.10 }, // C4
        ])
        break

      case 'click':
        // 짧은 클릭음
        playTone(800, 0.05, 'sine', 0.08)
        break

      case 'levelup':
        // 축하 팡파레 (상승하는 아르페지오)
        playNotes([
          { freq: 523, start: 0, dur: 0.15, vol: 0.12 },      // C5
          { freq: 659, start: 0.1, dur: 0.15, vol: 0.12 },     // E5
          { freq: 784, start: 0.2, dur: 0.15, vol: 0.12 },     // G5
          { freq: 1047, start: 0.3, dur: 0.4, vol: 0.15 },     // C6
          { freq: 784, start: 0.35, dur: 0.35, type: 'triangle', vol: 0.08 }, // G5 harmony
        ])
        break

      case 'complete':
        // 세션 완료 (따뜻한 코드)
        playNotes([
          { freq: 392, start: 0, dur: 0.2, vol: 0.10 },       // G4
          { freq: 494, start: 0.1, dur: 0.2, vol: 0.10 },      // B4
          { freq: 587, start: 0.2, dur: 0.2, vol: 0.12 },      // D5
          { freq: 784, start: 0.3, dur: 0.5, vol: 0.14 },      // G5
          { freq: 587, start: 0.35, dur: 0.45, type: 'triangle', vol: 0.07 }, // D5 harmony
        ])
        break

      case 'xp':
        // XP 획득 (짧은 코인 소리)
        playNotes([
          { freq: 987, start: 0, dur: 0.08, vol: 0.10 },       // B5
          { freq: 1319, start: 0.06, dur: 0.15, vol: 0.12 },    // E6
        ])
        break
    }
  } catch {
    // 오디오 실패 시 무시
  }
}
