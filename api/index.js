const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const Joi = require('joi');

const ideaSchema = require('./schemas/idea.schema');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
const cors = corsMiddleware({
  origins: ['*'],
});

function GETIdeas(req, res) {
  res.send(db.get('ideas').value());
}

function POSTIdeas(req, res) {
  const ideas = req.body;
  for (const _idea of ideas) {
    const idea = Joi.attempt(_idea, ideaSchema);
    db.get('ideas').push(idea).write();
  }
  res.send(200);
}

const server = restify.createServer();

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser());

server.get('/api/v1/ideas', GETIdeas);
server.post('/api/v1/ideas', POSTIdeas);

server.listen(4444, () => {
  db.defaults({ ideas: [] })
    .write();

  console.log('%s listening at %s', server.name, server.url);
});
