function clickhandler() {
    const voice = new Wad({source: 'mic'});
    const tuner = new Wad.Poly();
    const pitchoutput = document.getElementById("higherfreq");
    const noteoutput = document.getElementById("detectednote");

    tuner.setVolume(0);
    tuner.add(voice);

    voice.play();

    tuner.updatePitch();

    const logPitch = function() {
        console.log(tuner.pitch);
        let pitch = tuner.pitch;
        if (pitch === undefined) {
            pitch = "??";
        } 
        
        let note = tuner.noteName;
        if(note === undefined) {
            note = "??";
        }
        pitchoutput.innerHTML = pitch;
        noteoutput.innerHTML = note;
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