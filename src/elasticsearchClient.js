// require('dotenv').config(); // Load environment variables
require('dotenv').config({ path: './.env' });
const { Client } = require('@elastic/elasticsearch');

// Ensure ELASTICSEARCH_HOST is correctly loaded
if (!process.env.ELASTICSEARCH_HOST) {
  throw new Error('ELASTICSEARCH_HOST is not defined in the .env file');
}

console.log('Connecting to Elasticsearch at:', process.env.ELASTICSEARCH_HOST);


const client = new Client({
  node: process.env.ELASTICSEARCH_HOST,
  auth: process.env.ELASTICSEARCH_USERNAME
    ? {
        username: process.env.ELASTICSEARCH_USERNAME,
        password: process.env.ELASTICSEARCH_PASSWORD,
      }
    : undefined, // Skip auth if no username/password provided
});

module.exports = client;
