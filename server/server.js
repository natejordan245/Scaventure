const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const { readJsonFile, writeJsonFile } = require('./src/utils/fileUtils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JWT secret
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Scaventure API is running' });
});

// User endpoints
app.post('/api/users/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usersData = await readJsonFile('users.json') || { users: [] };
    
    // Check if user exists
    if (usersData.users.some(user => user.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = {
      id: String(usersData.users.length + 1),
      username,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    usersData.users.push(newUser);
    await writeJsonFile('users.json', usersData);

    res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username, email } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const usersData = await readJsonFile('users.json') || { users: [] };
    
    const user = usersData.users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const data = await readJsonFile('users.json') || { users: [] };
    res.json(data);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Error reading users data' });
  }
});

// Hunt endpoints
app.post('/api/hunts', async (req, res) => {
  try {
    const huntData = req.body;
    const huntsData = await readJsonFile('hunts.json') || { hunts: [] };
    
    const newHunt = {
      id: String(huntsData.hunts.length + 1),
      ...huntData,
      createdAt: new Date().toISOString()
    };

    huntsData.hunts.push(newHunt);
    await writeJsonFile('hunts.json', huntsData);

    res.status(201).json(newHunt);
  } catch (error) {
    console.error('Create hunt error:', error);
    res.status(500).json({ error: 'Error creating hunt' });
  }
});

app.get('/api/hunts', async (req, res) => {
  try {
    const data = await readJsonFile('hunts.json') || { hunts: [] };
    res.json(data);
  } catch (error) {
    console.error('Get hunts error:', error);
    res.status(500).json({ error: 'Error reading hunts data' });
  }
});

// Team endpoints
app.post('/api/teams', async (req, res) => {
  try {
    const teamData = req.body;
    const teamsData = await readJsonFile('teams.json') || { teams: [] };
    
    const newTeam = {
      id: String(teamsData.teams.length + 1),
      ...teamData,
      createdAt: new Date().toISOString()
    };

    teamsData.teams.push(newTeam);
    await writeJsonFile('teams.json', teamsData);

    res.status(201).json(newTeam);
  } catch (error) {
    console.error('Create team error:', error);
    res.status(500).json({ error: 'Error creating team' });
  }
});

app.get('/api/teams', async (req, res) => {
  try {
    const data = await readJsonFile('teams.json') || { teams: [] };
    res.json(data);
  } catch (error) {
    console.error('Get teams error:', error);
    res.status(500).json({ error: 'Error reading teams data' });
  }
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