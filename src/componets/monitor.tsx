import { useEffect } from "react";
function Keyboard() {
  useEffect(() => {
    const keys = document.querySelectorAll(".key");

    const getKeyElement = (event: KeyboardEvent) => {
      return Array.from(keys).find((element) => {
        const keyElement = element as HTMLElement;
        const label = keyElement.innerText.trim();

        return (
          event.code === `Key${label}` ||
          keyElement.classList.contains(event.code)
        );
      }) as HTMLElement | undefined;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) {
        return;
      }

      const keyElement = getKeyElement(e);

      if (keyElement) {
        keyElement.classList.add("keyHover");
      }
      console.log(e.code);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keyElement = getKeyElement(e);

      if (keyElement) {
        keyElement.classList.remove("keyHover");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <>
      <div className="keyboard">
        <div className="row">
          <div className="key Escape function-key">esc</div>
          <div className="key F1 function-key">F1</div>
          <div className="key F2 function-key">F2</div>
          <div className="key F3 function-key">F3</div>
          <div className="key F4 function-key">F4</div>
          <div className="key F5 function-key">F5</div>
          <div className="key F6 function-key">F6</div>
          <div className="key F7 function-key">F7</div>
          <div className="key F8 function-key">F8</div>
          <div className="key F9 function-key">F9</div>
          <div className="key F10 function-key">F10</div>
          <div className="key F11 function-key">F11</div>
          <div className="key F12 function-key">F12</div>
          <div className="key Backspace eject-key">⏏</div>
        </div>

        <div className="row">
          <div className="key Backquote">`</div>
          <div className="key Digit1">1</div>
          <div className="key Digit2">2</div>
          <div className="key Digit3">3</div>
          <div className="key Digit4">4</div>
          <div className="key Digit5">5</div>
          <div className="key Digit6">6</div>
          <div className="key Digit7">7</div>
          <div className="key Digit8">8</div>
          <div className="key Digit9">9</div>
          <div className="key Digit0">0</div>
          <div className="key Minus">-</div>
          <div className="key Equal">=</div>
          <div className="key Delete delete-key">delete</div>
        </div>

        <div className="row">
          <div className="key Tab">tab</div>
          <div className="key">Q</div>
          <div className="key">W</div>
          <div className="key">E</div>
          <div className="key">R</div>
          <div className="key">T</div>
          <div className="key">Y</div>
          <div className="key">U</div>
          <div className="key">I</div>
          <div className="key">O</div>
          <div className="key">P</div>
          <div className="key BracketLeft">[</div>
          <div className="key BracketRight">]</div>
          <div className="key Backslash backslash-key">\</div>
        </div>

        <div className="row">
          <div className="key CapsLock">caps lock</div>
          <div className="key">A</div>
          <div className="key">S</div>
          <div className="key">D</div>
          <div className="key">F</div>
          <div className="key">G</div>
          <div className="key">H</div>
          <div className="key">J</div>
          <div className="key">K</div>
          <div className="key">L</div>
          <div className="key Semicolon">;</div>
          <div className="key Quote">'</div>
          <div className="key return-key Enter">Enter</div>
        </div>

        <div className="row">
          <div className="key ShiftLeft">shift</div>
          <div className="key">Z</div>
          <div className="key">X</div>
          <div className="key">C</div>
          <div className="key">V</div>
          <div className="key">B</div>
          <div className="key">N</div>
          <div className="key">M</div>
          <div className="key Comma">,</div>
          <div className="key Period">.</div>
          <div className="key Slash">/</div>
          <div className="key ShiftRight">shift</div>
        </div>

        <div className="row">
          <div className="key">fn</div>
          <div className="key ControlLeft">ctrl</div>
          <div className="key AltLeft">⌥</div>
          <div className="key command-key">⌘</div>
          <div className="key Space"></div>
          <div className="key command-key">⌘</div>
          <div className="key alt-key">⌥</div>
          <div className="key arrow-key">◀</div>
          <div className="key arrow-key">▼</div>
          <div className="key arrow-key">▲</div>
          <div className="key arrow-key">▶</div>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
