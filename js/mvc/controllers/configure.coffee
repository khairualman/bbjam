class ConfigureCtrl extends Monocle.Controller

    elements:
        "#user-name": "name"
        "#select_instrument": "instrument"
        "#select_color": "color"

    events:
        "tap a[data-action=start]": "onStart"

    constructor: ->
        super
        @select = _service

    _service = ->
        Lungo.Router.section("#configure")

    onStart: (event) ->
        parameters =
            name: @name.val()
            instrument: @instrument.val()
            color: @color.val()

        console.error parameters

__Controller.Configure = new ConfigureCtrl("section#configure article#configure-article")
