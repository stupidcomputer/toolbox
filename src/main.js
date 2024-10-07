function clickhandler() {
    const voice = new Wad({source: 'mic'});
    const tuner = new Wad.Poly();
    const pitchoutput = document.getElementById("pitch");

    tuner.setVolume(0);
    tuner.add(voice);

    voice.play();

    tuner.updatePitch();

    const logPitch = function() {
        console.log(tuner.pitch);
        pitch.innerHTML = tuner.pitch;
        requestAnimationFrame(logPitch);
    };
    logPitch();
}
$(document).ready(function() {
    $('.debugme').each(function () {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
    });
});