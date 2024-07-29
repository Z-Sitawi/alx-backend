#!/usr/bin/node
import redis from 'redis';


//* Default Connection Behavior 'redis://localhost:6379'
const client = redis.createClient({url: 'redis://localhost:6379'});

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`); 
});

client.on('connect', () => {
    console.log('Redis client connected to the server');
});
