App = ((lng, undefined_) ->

    _session = {}

    lng.init
        name: "BBJAM"
        version: "1.0"
        resources: ["js/mvc/sections/configure.html",
                    "js/mvc/sections/game.html"]

)(Lungo)

Lungo.ready ->


window.App = App
