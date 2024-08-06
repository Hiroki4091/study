import _ from "lodash";

console.log(_.shuffle([1, 2, 3]));

// アンビアント宣言(必ず存在するため実際にあるかどうかの存在チェックはしないで)
declare var GLOBAL: any;

console.log(GLOBAL);