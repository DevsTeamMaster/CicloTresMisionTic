//To run server <npm run src/server.js>

const express = require('express');
const app = express();
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 8080);

var corsOptions = {
  origin: 'http://localhost:3000',
};

//Middlewares
app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use(require('./src/routes/productos.routes'));

//Starting server
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
