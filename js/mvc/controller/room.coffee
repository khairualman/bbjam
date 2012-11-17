class RoomCtrl extends Monocle.Controller

    events:
        "tap ul li": "onRoom"

    elements:
        "ul li": "items"

    constructor: ->
        super
        @lng = Lungo
        @init = _service

    onRoom: (event) ->
        console.error @items

__Controller.Rooms = new RoomCtrl("section#main article#main-article")
