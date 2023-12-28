
const cursorMoveEvent = (io, socket) => {
    socket.on("cursor-move", (data) => {
        socket.broadcast.emit("cursor-move", data);
    })
}

const newStrokeEvent = (io, socket) => {
    socket.on("stroke-new", (stroke) => {
        socket.broadcast.emit("stroke-new", stroke);
    })
}

const currentStrokeEvent = (io, socket) => {
    socket.on("stroke-current", (data) => {
        socket.broadcast.emit("stroke-current", data);
    })
}

module.exports = { cursorMoveEvent, newStrokeEvent, currentStrokeEvent};