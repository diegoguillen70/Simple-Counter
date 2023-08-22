export function digitConvert(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const s = String(seconds).padStart(2, "0").split("");
  const m = String(minutes).padStart(2, "0").split("");
  const h = String(hours).padStart(1, "0").split("");

  return [h, m, s];
}
