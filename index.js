const jsonserver = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonserver.create();
const router = jsonserver.router(path.join(__dirname, 'db.json'));
const defaults = jsonserver.defaults();

server.use(cors())
server.use(router);
server.use(defaults);
server.use(jsonserver.bodyParser)

const port = 8000;

server.listen(port, () => {
    console.log('running at ', port);
})