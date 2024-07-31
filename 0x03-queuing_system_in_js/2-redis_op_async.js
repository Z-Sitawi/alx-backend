#!/usr/bin/node
import redis from 'redis';

const { promisify } = require('util');

//* Default Connection Behavior 'redis://localhost:6379'
const client = redis.createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

const setNewSchool = (schoolName, value) => {
  /**
    * Sets a value for the key `schoolName` in Redis and displays a confirmation message.
    * @param {string} schoolName - The key to set in Redis.
    * @param {string} value - The value to set for the key.
    */

  client.SET(schoolName, value, redis.print);
};

const displaySchoolValue = async (schoolName) => {
  /**
   * Writes on the console a value of a given key
   * @param {string} schoolName - The key to get its value
   */

  console.log(await promisify(client.GET).bind(client)(schoolName));
};

client.on('connect', async () => {
  console.log('Redis client connected to the server');
});

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
