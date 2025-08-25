import { useEffect, useRef } from "react";

const glyphs = [
  "ア","イ","ウ","エ","オ",
  "カ","キ","ク","ケ","コ",
  "サ","シ","ス","セ","ソ",
  "タ","チ","ツ","テ","ト",
  "ナ","ニ","ヌ","ネ","ノ",
  "ハ","ヒ","フ","ヘ","ホ",
  "マ","ミ","ム","メ","モ",
  "ヤ","ユ","ヨ","ー",
  "ラ","リ","ル","レ","ロ",
  "ワ","ヰ","ヱ","ヲ","ン",
  "ガ","ギ","グ","ゲ","ゴ",
  "ザ","ジ","ズ","ゼ","ゾ",
  "ダ","ヂ","ヅ","デ","ド",
  "バ","ビ","ブ","ベ","ボ",
  "パ","ピ","プ","ペ","ポ",
];

export default function DecoderText({ text, delay = 0, speed = 50, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = text.split("");
    const output = Array(letters.length).fill("");
    let frame = 0;
    let animation;

    const render = () => {
      const html = output
        .map((ch) => {
          if (ch === "") {
            // still decoding
            return `<span class="opacity-70">${glyphs[Math.floor(Math.random() * glyphs.length)]}</span>`;
          } else {
            return `<span>${ch}</span>`;
          }
        })
        .join("");
      containerRef.current.innerHTML = html;
    };

    const animate = () => {
      frame++;
      const progress = Math.floor(frame / (speed / 2)); // reveal one letter every few frames
      if (progress < letters.length) {
        output[progress] = letters[progress];
      }
      render();

      if (progress < letters.length - 1) {
        animation = requestAnimationFrame(animate);
      } else {
        // reveal rest instantly
        output.forEach((_, i) => (output[i] = letters[i]));
        render();
      }
    };

    const start = setTimeout(() => {
      animation = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(start);
      cancelAnimationFrame(animation);
    };
  }, [text, delay, speed]);

  return <span ref={containerRef} className={`decoder-text ${className}`}></span>;
}
