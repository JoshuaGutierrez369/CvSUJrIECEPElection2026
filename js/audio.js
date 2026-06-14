(function () {
  "use strict";

  var audio = document.getElementById("bgm-audio");
  var toggle = document.getElementById("bgm-toggle");
  if (!audio || !toggle) {
    return;
  }

  var iconOn = toggle.querySelector(".bgm-toggle__icon--on");
  var iconOff = toggle.querySelector(".bgm-toggle__icon--off");

  audio.volume = 0.5;
  audio.muted = true;

  function setPlaying(isPlaying) {
    toggle.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isPlaying ? "Mute background music" : "Enable background music"
    );
    toggle.classList.toggle("is-playing", isPlaying);
    if (iconOn) {
      iconOn.hidden = !isPlaying;
    }
    if (iconOff) {
      iconOff.hidden = isPlaying;
    }
  }

  function enableMusic() {
    audio.muted = false;
    var playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise
        .then(function () {
          setPlaying(true);
        })
        .catch(function () {
          setPlaying(false);
        });
      return;
    }
    setPlaying(true);
  }

  function disableMusic() {
    audio.pause();
    audio.muted = true;
    audio.currentTime = 0;
    setPlaying(false);
  }

  toggle.addEventListener("click", function () {
    if (audio.muted || audio.paused) {
      enableMusic();
      return;
    }
    disableMusic();
  });

  setPlaying(false);

  var autoplayPromise = audio.play();
  if (autoplayPromise && typeof autoplayPromise.catch === "function") {
    autoplayPromise.catch(function () {
      /* Autoplay blocked until user interaction. */
    });
  }
})();
