const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function scrambleText(
  element: HTMLElement,
  finalText: string,
  duration = 450
) {
  let frame = 0;
  const totalFrames = duration / 16.67;

  const interval = setInterval(() => {
    element.innerText = finalText
      .split("")
      .map((char, i) => {
        if (i < Math.floor((frame / totalFrames) * finalText.length)) {
          return char;
        }
        return char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join("");

    if (frame >= totalFrames) {
      clearInterval(interval);
      element.innerText = finalText;
    }
    frame++;
  }, 16.67);

  return () => clearInterval(interval);
}
