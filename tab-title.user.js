// ==UserScript==
// @name         YTM Tab Title Fix
// @namespace    https://github.com/ewen-lbh/youtube-music-fixes/
// @version      0.1
// @description  Change tab title to according to a scheme, and remove "(Original Mix)" from title name
// @author       Mx3
// @match        *://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let ch_title = function() {
        let scheme = "<title> by <artist>"
        let trackname = document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > yt-formatted-string').innerText
        trackname = trackname.replace('(Original Mix)', '')
        let artistname = document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > span > span.subtitle.style-scope.ytmusic-player-bar > yt-formatted-string > a:nth-child(1)').innerText
        let newt = scheme.replace('<artist>', artistname).replace('<title>', trackname)
        console.log('changing title to "'+newt+'"');
        document.title = newt
    }

    let el = document.querySelector('#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > yt-formatted-string')

    var oldTitle = document.title
    window.setInterval(function()
                       {
        if (document.title.includes('YouTube Music'))
        {
            ch_title()
        }
        oldTitle = document.title
    }, 1000); //check every second
})();
