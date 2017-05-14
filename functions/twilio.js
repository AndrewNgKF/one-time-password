const twilio = require('twilio');

const accountSid = 'ACa2fec20e3d8804e9223779767663aa40';
const authToken = 'adefe81d4c43d3bba47f54a55cc29eca';

module.exports = new twilio.Twilio(accountSid, authToken);
