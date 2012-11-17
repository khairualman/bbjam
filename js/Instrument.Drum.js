Instrument.Drum = (function() {

    var sounds = [
        'chh.ogg',
        'cow.ogg',
        'kick.ogg',
        'ohh.ogg',
        'ride.ogg',
        'snare.ogg'
    ];


    var _addPadsToBody = function() {
        var body, sounds, audio_html, j, i;
        body = $$("body");
        for(i in sounds) {
            sound_ogg = sounds[i];
            for(j = 0; j < 4; j++) {
                pad_html = '<audio src="drumsamples/' + sound_ogg + '" id="' + sound_ogg + '"></audio>';
                pad_html += '<div class="drum_pad" id="' + sound_ogg + '">' + sound_ogg + '</div>';
                body.append(pad_html);
            }
        }
    };



    var init = function() {
        _addPadsToBody();
    };


    return {
        init: init
    };

})();
