"use strict";

var conf = require("../conf/conf");
var mysql = require("../utils/MysqlUtils");
var db = new mysql(conf.mysqlConf);

db.getCurrentBlockHeight(function (err, block) {
    console.log(block);
});