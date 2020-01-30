const Express = require('express');
const App = Express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
App.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
App.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});