const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function testEndpoints() {
  try {
    // Test basic endpoint
    console.log('Testing basic endpoint...');
    const basicResponse = await axios.get('http://localhost:3000');
    console.log('Basic endpoint response:', basicResponse.data);

    // Test hunts endpoint
    console.log('\nTesting hunts endpoint...');
    const huntsResponse = await axios.get(`${BASE_URL}/hunts`);
    console.log('Hunts endpoint response:', huntsResponse.data);

    // Test users endpoint
    console.log('\nTesting users endpoint...');
    const usersResponse = await axios.get(`${BASE_URL}/users`);
    console.log('Users endpoint response:', usersResponse.data);

    // Test teams endpoint
    console.log('\nTesting teams endpoint...');
    const teamsResponse = await axios.get(`${BASE_URL}/teams`);
    console.log('Teams endpoint response:', teamsResponse.data);

    console.log('\nAll endpoints tested successfully!');
  } catch (error) {
    console.error('Error testing endpoints:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

testEndpoints(); 