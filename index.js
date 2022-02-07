const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const morgan = require('morgan');
const SocketIO = require('socket.io');
const path = require('path');
const tester = require('./routes/index');

const app = express();

// Setup:

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
const corsOptions = {
    origin: '*'
};

// Middlewares:

app.use(cors(corsOptions));
app.use(fileupload());
app.use(morgan('dev'));

// Routes:

app.use(tester);

// Startup:

const Server = app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});

// Socket.IO:

const io = SocketIO(Server);

io.on('connection', (socket) => {
    console.log('New Connection:', socket.id);
});