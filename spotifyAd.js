// ==UserScript==
// @name         spotifyad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  mute spotify ads
// @author       Computing Fig
// @match        *://open.spotify.com/*
// @icon         https://open.spotify.com/favicon.ico
// @grant        none
// ==/UserScript==
(function () {
  "use strict";

  console.log("ad silencer running");
  let muted = false;

  const adEvent = () => {
    // looking for ads playing
    const isAd =
      document.querySelectorAll('[data-testid="track-info-advertiser"]')
        .length > 0 ||
      document.querySelectorAll('[data-testid="context-item-info-ad-title"]')
        .length > 0;

    const muteButton = document.getElementsByClassName(
      "volume-bar__icon-button"
    )[0];

    // mute ad
    if (isAd && !muted) {
      muted = true;
      muteButton.click();
    }
    // play music
    if (!isAd && muted) {
      muted = false;
      muteButton.click();
    }
  };

  // adEvent is ran every 500 milliseconds
  setInterval(adEvent, 500);
})();
