const Facebook = require('facebook-node-sdk');

const appId = '619596270295925';
const appSecret = '079230840d1910b07c21b650e497419e';

const facebook = new Facebook({ appId, secret: appSecret });


facebook.api('/me?fields=id,name', { access_token: '619596270295925|0_6viXAmSR81ADSimQlrhMBqMnY' }, function(res) {
    console.log('Response :' + res);
    if (!res || res.error) {
    console.error(!res ? 'Error occurred' : res.error);
    return;
  }
  
  console.log('Hello: ' + res.name);
});
