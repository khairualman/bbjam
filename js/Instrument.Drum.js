Instrument.Drum = (function() {

    var SOUNDS = [ 'chh', 'cow', 'kick', 'ohh', 'ride', 'snare'];
    var COUNTERS = [];
    for(var j in SOUNDS) {
        COUNTERS[SOUNDS[j]] = 0;
    }

    var _addPadsToBody = function() {
        var body, audio_html, pad_html, j, i;
        body = $$("#game-zone");
        //body.html(' ');
        for(i in SOUNDS) {
            sound_ogg = SOUNDS[i];
            pad_html = "";
            for(j = 0; j < 4; j++) {
                body.append('<audio '+
                    'style="visibility:hidden" '+
                    'src="drumsamples/' + sound_ogg + '.ogg" '+
                    'preload="auto" '+
                    'data-counter="'+j+'" '+
                    'data-audio="' + sound_ogg + '">'+
                    '</audio>');
            }
        }
    };

    var _bindEvents = function() {
        var ogg;
        $$(".drum_pad").each(function() {
            $$(this).touch(function() {
                ogg = $$(this).attr("data-pad");
                _play(ogg);
            });
        });
    };

    var play_ogg = function(ogg) {
        var count = (COUNTERS[ogg]++) % 4;
        $$("[data-audio="+ogg+"][data-counter='"+count+"']")[0].play();
    };


    var _play = function(ogg) {
        //play_ogg(ogg);
        websocket.emit('play', {
            room_id: room_data.room_id,
            user_data: my_data,
            type: 'drum',
            sound: ogg
        });
    };

    var init = function() {
        _addPadsToBody();
        _bindEvents();
    };

    return {
        init: init,
        play_ogg: play_ogg
    };

})();
