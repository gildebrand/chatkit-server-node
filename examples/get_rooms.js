var Chatkit = require('../target/index');

// var PusherPlatform = require('../node_modules/pusher-platform-node/target/index');

// Just for local testing where using self signed certs
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const baseClient = new PusherPlatform.BaseClient({
//   host: 'localhost',
//   port: 10443
// })

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:example',
  key: 'your:key'
});

chatkit.getRooms('ham')
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
