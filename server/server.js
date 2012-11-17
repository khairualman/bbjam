
var server = require("socket.io").listen(6969);


var ROOMS = [];


server.sockets.on("connection", function(action) {
    action.on('start', enter_room);
    action.on('exit_room', exit_room);
});


var exit_room = function(data) {
    var room = ROOMS[data.room_id];
    var users = room.users;
    var new_users = [];
    for(var i in users) {
        if(users[i].name != data.name) {
            new_users.push(users[i]);
        }
    }
    room.users = new_users;
    console.error(room);
};


var enter_room = function(data) {
    if(!ROOMS[data.room_id]) {
        ROOMS[data.room_id] = {
            room_id: data.room_id,
            users: []
        };
    }
    var room = ROOMS[data.room_id];
    if(room.users.length < 4 ) {
        room.users.push({
            name: data.username,
            instrument: data.instrument,
            color: data.color
        });
        server.sockets.emit('start_in_room', {
            room: room,
            user: data.username
        });
        console.error(room);
    } else {
        _error_room_complete();
    }
};



var _error_room_complete = function() {
    console.error("La sala está llena !!");
};


