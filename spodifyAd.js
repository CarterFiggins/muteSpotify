// ==UserScript==
// @name         spotifyad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  mute spotify ads
// @author       You
// @match        *://open.spotify.com/*
// @icon         https://open.spotify.com/favicon.ico
// @grant        none
// ==/UserScript==
(function () {
  "use strict";

  console.log("Spodify ad silencer running");

  let muted = false;

  const adEvent = () => {
    const isAd =
      document.querySelectorAll('[data-testid="track-info-advertiser"]')
        .length > 0;
    const muteButton = document.getElementsByClassName(
      "volume-bar__icon-button"
    )[0];
    if (isAd && !muted) {
      muted = true;
      muteButton.click();
    }
    if (!isAd && muted) {
      muted = false;
      muteButton.click();
    }
  };

  setInterval(adEvent, 1000);
})();
