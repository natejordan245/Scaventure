const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const { readJsonFile } = require('./src/utils/fileUtils');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Scaventure API is running' });
});

// Data endpoints
app.get('/api/hunts', async (req, res) => {
  const data = await readJsonFile('hunts.json');
  res.json(data);
});

app.get('/api/users', async (req, res) => {
  const data = await readJsonFile('users.json');
  res.json(data);
});

app.get('/api/teams', async (req, res) => {
  const data = await readJsonFile('teams.json');
  res.json(data);
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    // Echo the message back
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 