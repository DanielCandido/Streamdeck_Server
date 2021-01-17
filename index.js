const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const robot = require("robotjs");

// Use a `\r\n` as a line terminator
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

SerialPort.list().then((list) => console.log(list))

const port = new SerialPort('COM4', {
    baudRate: 115200
});

//port.pipe(parser);

port.on('open', () => console.log('Port open'));

// parser.on('data', console.log);
port.on('data', function (data) {
    sendToLoopback(data);
});


// The parser will emit any string response


/**
 * This function uses the request lib to sendo request to api loopback
 * @param {*} data 
 */
function sendToLoopback(data) {
    if (data) {
        console.log(data.toString())
        if (data.toString() == 'A') {
            robot.keyTap('1', ['control', 'alt'])
        }
    } else {
        console.log('No datas !');
    }
}