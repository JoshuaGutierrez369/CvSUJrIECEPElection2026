(function () {
  "use strict";

  const audio = document.getElementById("site-bgm");
  const toggle = document.getElementById("bgm-toggle");
  if (!audio || !toggle) {
    return;
  }

  const VOLUME = 0.5;
  const iconOn = toggle.querySelector(".bgm-toggle__icon--on");
  const iconOff = toggle.querySelector(".bgm-toggle__icon--off");

  audio.volume = VOLUME;
  audio.muted = true;

  function setPlaying(isPlaying) {
    toggle.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isPlaying ? "Mute background music" : "Enable background music"
    );
    toggle.classList.toggle("is-playing", isPlaying);
    iconOn.hidden = !isPlaying;
    iconOff.hidden = isPlaying;
  }

  function enableMusic() {
    audio.muted = false;
    audio.volume = VOLUME;
    return audio.play().then(function () {
      setPlaying(true);
    });
  }

  function disableMusic() {
    audio.muted = true;
    setPlaying(false);
  }

  setPlaying(false);

  audio.play().catch(function () {
    /* Autoplay blocked until user interaction */
  });

  toggle.addEventListener("click", function () {
    if (toggle.classList.contains("is-playing")) {
      disableMusic();
      return;
    }

    enableMusic().catch(function () {
      disableMusic();
    });
  });
})();
