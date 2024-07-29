#!/usr/bin/node
import redis from 'redis';

//* Default Connection Behavior 'redis://localhost:6379'
const client = redis.createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const setNewSchool = (schoolName, value) => {
  /**
    * Sets a value for the key `schoolName` in Redis and displays a confirmation message.
    * @param {string} schoolName - The key to set in Redis.
    * @param {string} value - The value to set for the key.
    */
  client.SET(schoolName, value, redis.print);
};

const displaySchoolValue = (schoolName) => {
  client.GET(schoolName, (_err, reply) => {
    console.log(reply);
  });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
