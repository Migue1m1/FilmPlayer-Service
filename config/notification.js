var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '477077',
    key: '1648f8446a947e8be0c6',
    secret: 'f2808990db8770320f26',
    cluster: 'us2',
    encrypted: true
});

module.exports = pusher;