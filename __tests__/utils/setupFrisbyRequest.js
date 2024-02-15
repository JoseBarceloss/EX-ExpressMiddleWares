const frisby = require('frisby');

module.exports = () => frisby
  .globalSetup({
    request: {
      headers: {
        'Authorization': 'a398d2179df7a68e'
      }
    }
});