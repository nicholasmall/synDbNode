"use strict";

var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// txidIndex
// blockHeight

for (let i = 1; i < 101; i++) {
    console.log("CREATE TABLE `game_all_records" + i + "` (" +
        "`record_id` bigint COLLATE utf8_bin NOT NULL COMMENT '记录ID'," +
        "`id` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '赌注交易id ，赌注交易'," +
        "`Block_height` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '区块高度'," +
        "`pid` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '支付交易'," +
        "`serverSeedHashTxId` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL," +
        "`bet` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '赌额'," +
        "`deduction` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '赔额'," +
        "`diceceiling` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '骰子天花板'," +
        "`Lucky_Numbers` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '幸运数字'," +
        "`Win_lose` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '输赢'," +
        "`TIME` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '时间'," +
        "`state` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '支付状态'," +
        "`practical_bet` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '实际赔额'," +
        "`serverseedhash` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '哈希'," +
        "`server_seed_plain_text` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '种子'," +
        "`public_time` VARCHAR(256) COLLATE utf8_bin DEFAULT NULL COMMENT '公开时间'," +
        "`modifed_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间'," +
        "`created_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'," +
        "`is_deleted` tinyint(4) DEFAULT '0' COMMENT 'o/正常 ，1/删除'," +
        "PRIMARY KEY (`record_id`)) ENGINE=INNODB DEFAULT CHARSET=utf8 COLLATE=utf8_bin; ")
}


// array.forEach(function (f) {
//     array.forEach(function (l) {
// // console.log('create table BTC_ADDR_${f + l}(address VARCHAR(80),txId VARCHAR(256),outputIndex VARCHAR(10),txTime VARCHAR(20),txidIndex VARCHAR(10),blockHeight VARCHAR(10), UNIQUE KEY \'at_un_key\' (\'address\',\'txId\'));');
//
//
//     })
// });