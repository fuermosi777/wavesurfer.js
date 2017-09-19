'use strict';

// Create an instance
var wavesurfer = {};

// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {

    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        barWidth: 4,
        barRadius: 2,
        height: 40,
        normalize: true,
        pixelRatio: window.devicePixelRatio
    });


    // Load audio from URL
    wavesurfer.load('../media/demo.wav');


    // Play button
    var button = document.querySelector('[data-action="play"]');

    button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
