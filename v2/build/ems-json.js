/*csd*/define(function(require,exports,module){"use strict";var a=require("json");exports.load=function(c,e,d,b){var f=e.toUrl(c);require("ems-text!"+f,function(g){d(a.parse(g));});};});