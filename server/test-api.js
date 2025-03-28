const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function testEndpoint(name, method, url, data = null) {
  try {
    console.log(`\n🔍 Testing ${name} endpoint (${method})...`);
    const config = {
      method,
      url,
      validateStatus: function (status) {
        return status >= 200 && status < 500; // Accept any status code less than 500
      }
    };

    if (method === 'POST') {
      config.data = data;
      config.headers = {
        'Content-Type': 'application/json'
      };
    }

    const response = await axios(config);
    
    if (response.status >= 400) {
      console.error(`❌ ${name} endpoint failed with status ${response.status}:`, response.data);
      return false;
    }
    
    console.log(`✅ ${name} endpoint:`, JSON.stringify(response.data, null, 2));
    return true;
  } catch (error) {
    console.error(`❌ Error testing ${name} endpoint:`, error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      console.error('No response received');
    }
    return false;
  }
}

async function testUserEndpoints() {
  const testUser = {
    username: 'testuser2',
    email: 'test2@example.com',
    password: 'password123'
  };

  const endpoints = [
    { name: 'Register User', method: 'post', url: `${BASE_URL}/users/register`, data: testUser },
    { name: 'Login User', method: 'post', url: `${BASE_URL}/users/login`, data: { email: testUser.email, password: testUser.password } },
    { name: 'Get Users', method: 'get', url: `${BASE_URL}/users` }
  ];

  let successCount = 0;
  for (const endpoint of endpoints) {
    const success = await testEndpoint(endpoint.name, endpoint.method, endpoint.url, endpoint.data);
    if (success) successCount++;
  }

  return successCount;
}

async function testHuntEndpoints() {
  const testHunt = {
    title: 'Test Hunt',
    description: 'A test scavenger hunt',
    difficulty: 'easy',
    duration: '30',
    rating: 4.0,
    price: 29.99,
    locations: [
      {
        name: 'Test Location',
        coordinates: {
          lat: 40.2338,
          lng: -111.6585
        }
      }
    ]
  };

  const endpoints = [
    { name: 'Create Hunt', method: 'post', url: `${BASE_URL}/hunts`, data: testHunt },
    { name: 'Get Hunts', method: 'get', url: `${BASE_URL}/hunts` }
  ];

  let successCount = 0;
  for (const endpoint of endpoints) {
    const success = await testEndpoint(endpoint.name, endpoint.method, endpoint.url, endpoint.data);
    if (success) successCount++;
  }

  return successCount;
}

async function testTeamEndpoints() {
  const testTeam = {
    name: 'Test Team',
    leaderId: '1',
    members: ['1']
  };

  const endpoints = [
    { name: 'Create Team', method: 'post', url: `${BASE_URL}/teams`, data: testTeam },
    { name: 'Get Teams', method: 'get', url: `${BASE_URL}/teams` }
  ];

  let successCount = 0;
  for (const endpoint of endpoints) {
    const success = await testEndpoint(endpoint.name, endpoint.method, endpoint.url, endpoint.data);
    if (success) successCount++;
  }

  return successCount;
}

async function runAllTests() {
  console.log('🚀 Starting comprehensive API tests...\n');

  // Test base endpoint
  const baseSuccess = await testEndpoint('Base', 'get', 'http://localhost:3000');
  
  // Test user endpoints
  console.log('\n👥 Testing User Endpoints...');
  const userSuccessCount = await testUserEndpoints();
  
  // Test hunt endpoints
  console.log('\n🎯 Testing Hunt Endpoints...');
  const huntSuccessCount = await testHuntEndpoints();
  
  // Test team endpoints
  console.log('\n👥 Testing Team Endpoints...');
  const teamSuccessCount = await testTeamEndpoints();

  // Print summary
  const totalTests = 8; // 1 base + 3 user + 2 hunt + 2 team
  const totalSuccess = baseSuccess + userSuccessCount + huntSuccessCount + teamSuccessCount;
  
  console.log('\n📊 Test Summary:');
  console.log(`Base endpoint: ${baseSuccess ? '✅' : '❌'}`);
  console.log(`User endpoints: ${userSuccessCount}/3 successful`);
  console.log(`Hunt endpoints: ${huntSuccessCount}/2 successful`);
  console.log(`Team endpoints: ${teamSuccessCount}/2 successful`);
  console.log(`\nTotal: ${totalSuccess}/${totalTests} endpoints successful`);
}

// Run all tests
runAllTests(); 