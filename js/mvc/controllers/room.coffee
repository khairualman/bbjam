class RoomCtrl extends Monocle.Controller

    events:
        "tap div.list ul li": "onRoom"

    elements:
        "ul li.anchor": "item"

    constructor: ->
        super
        @lng = Lungo

    onRoom: (event) ->
        __Controller.Configure.select()

__Controller.Rooms = new RoomCtrl("section#main article#main-article")
