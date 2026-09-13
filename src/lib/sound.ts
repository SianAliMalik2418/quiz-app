let audioCtx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx) audioCtx = new AudioContextClass();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone(freq: number, startTime: number, duration: number, ctx: AudioContext, gainPeak = 0.15) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(gainPeak, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function playCorrect() {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  tone(523.25, now, 0.15, ctx);
  tone(659.25, now + 0.1, 0.15, ctx);
  tone(783.99, now + 0.2, 0.25, ctx);
}

export function playIncorrect() {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  tone(220, now, 0.2, ctx, 0.18);
  tone(164.81, now + 0.12, 0.3, ctx, 0.18);
}
