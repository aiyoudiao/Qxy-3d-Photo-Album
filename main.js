import { runScript } from "./share/tool";
import "./share/index.js";
import "./share/heart.js";
import "./share/cherry-blossom.js";
import "./style/cherry-blossom.css";
import "./style/3d.css";
import "./style/penguin.css";
import "./style/bg.css";
import "./style/lrtk.css";
import "./share/jquery.imgbox.js";

document.querySelector("head").innerHTML = `
    ${document.querySelector("head").innerHTML}
`;
document.querySelector("#app").innerHTML = `
<div id="jsi-cherry-container" class="container">
  <audio id="audio" autoplay="autoplay" loop>
        <source src="./love-qxy.mp3" type="audio/mp3" />
  </audio>
  <div id="mediaDiv">
    <div class="penguin ">
      <div class="cheek"></div>
      <div class="cheek"></div>
      <div class="eye"></div>
      <div class="eye"></div>
      <div class="beak"></div>
      <div class="foot"></div>
      <div class="foot"></div>
      <div class="arm"></div>
      <div class="arm"></div>
    </div>
  </div>
  <div class="penguin">
  <div class="cheek"></div>
  <div class="cheek"></div>
  <div class="eye"></div>
  <div class="eye"></div>
  <div class="beak"></div>
  <div class="foot"></div>
  <div class="foot"></div>
  <div class="arm"></div>
  <div class="arm"></div>
</div>

  <div id="container"></div>
  <div id="info"><b>大宝的专属相册</b><br /><span style="color:rgba(255,255,255, 0.9);">温馨提示：支持手势、鼠标旋转角度、滚轮放大或缩小</span></div>
  <div id="menu">
  <button id="table">单面</button>
  <button id="sphere" class="hover">球体</button>
  <button id="helix">螺旋</button>
  <button id="grid">多面</button>
  </div>
</div>
`;

window.addEventListener("load", function () {
  const music = document.querySelector("#audio");
  const hideInfo = () =>
    setTimeout(() => {
      let tip = document.querySelector("#info");
      if (tip.style.display === "none") {
        tip.style.display = "block";
      } else {
        tip.style.display = "none";
      }
      tip = null;
    }, 3000);
  const musicListener = (dom, eventName) => {
    dom.addEventListener(eventName, function () {
      if (music.paused) {
        music.play();
      } else {
        hideInfo();
      }
    });
  };
  hideInfo();
  musicListener(document.querySelector("#mediaDiv>.penguin"), "click");
  musicListener(document.querySelector("#mediaDiv>.penguin"), "touch");

  const scripts = document.querySelector("#app").querySelectorAll("script");
  [...scripts]
    .filter((script) => !script.id)
    .reduce((chain, script) => {
      return chain.then(() => runScript(script));
    }, Promise.resolve());
});
