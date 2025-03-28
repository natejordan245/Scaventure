const axios = require('axios');

// Test HTTP endpoints
async function testHttpEndpoints() {
  console.log('Testing HTTP endpoints...\n');
  
  try {
    // Test hunts endpoint
    console.log('\nTesting hunts endpoint...');
    const huntsResponse = await axios.get('http://localhost:3000/api/hunts');
    console.log('Hunts endpoint response:', JSON.stringify(huntsResponse.data, null, 2));

    // Test users endpoint
    console.log('\nTesting users endpoint...');
    const usersResponse = await axios.get('http://localhost:3000/api/users');
    console.log('Users endpoint response:', JSON.stringify(usersResponse.data, null, 2));

    // Test teams endpoint
    console.log('\nTesting teams endpoint...');
    const teamsResponse = await axios.get('http://localhost:3000/api/teams');
    console.log('Teams endpoint response:', JSON.stringify(teamsResponse.data, null, 2));

    console.log('\nAll HTTP endpoints tested successfully!');
  } catch (error) {
    console.error('Error testing HTTP endpoints:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

// Run tests
testHttpEndpoints();