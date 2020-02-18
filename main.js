const path = require('path');
const PROTO_PATH = path.resolve(__dirname, 'rpc.proto');
const GRPCClient = require('node-grpc-client');
const myClient = new GRPCClient(PROTO_PATH, 'validatorrpcproto', 'NodeRPC', '127.0.0.1:4080');

myClient.runService('GetNodeInfo', {}, (err, res) => {
 if (res){
    console.log('Service response: ', res.PublicKey.toString('hex'));
    return;
 }
 console.log('Service request error: ', err);
});
