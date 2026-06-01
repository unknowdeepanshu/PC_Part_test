import { useState } from "react";
import "./App.css";
import Keyboard from "./componets/keyboard/KeyboardOne";
import SelectLevel from "./componets/selectLevels/chooseLevel";
import LevelMode from "./componets/levels/levelMode";

function App() {
  const [Level, setlevel] = useState<string>("");
  return (
    <>
      <div className="font-mono flex items-center flex-col justify-center mb-10">
        {!Level ?
          <SelectLevel setlevel={setlevel} />
        : <LevelMode Levels={Level} />}
      </div>
      <div className="flex justify-center mb-10">
        <Keyboard />
      </div>
      <div className="ticks"></div>
      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <ul>
            <li>
              <a href="https://github.com/unknowdeepanshu" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>

            <li>
              <a href="https://x.com/DipanshuVi6799" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
