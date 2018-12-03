"use strict";

var conf = require("../conf/conf");
var RpcApi = require("../utils/safedsaferpc");
var api = new RpcApi(conf.rpcconf);

var addressTxList = [];
api.safedCall("getinfo", function (err, blockHash) {
    if(err.code ===  -28){
        console.log(true)
    }
    console.log(typeof err);
    console.log(JSON.stringify(err) === '{}')
});