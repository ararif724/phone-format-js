!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).formatPhoneNumber=e()}}((function(){var e={"^93|^36|^60|^64|^27":["2","2","3","4"],"^355|^975|^387|^267|^855|^268|^371|^961|^382|^264|^389|^386":["3","2","3","3"],"^213|^237|^377":["3","1","2","2","2","2"],"^376|^508":["3","3","3"],"^244|^420|^240|^594|^224|^996|^352|^596|^351|^262|^250|^421":["3","3","3","3"],"^1":["1","3","3","4"],"^54|^52":["2","1","2","4","4"],"^374|^357|^232|^252":["3","2","6"],"^56|^61891":["2","1","4","4"],"^61|^51|^48|^40":["2","3","3","3"],"^43|^57|^92":["2","3","7"],"^994|^375":["3","2","3","2","2"],"^973|^506|^670|^503|^372|^502|^504|^852|^965|^266|^265|^356|^976|^505|^968|^507|^675|^974|^966":["3","4","4"],"^880":["3","4","6"],"^32":["2","3","2","2","2"],"^501|^673|^238|^599|^269|^679|^220|^245|^592|^354|^423|^960|^692|^674|^850|^680|^239|^248":["3","3","4"],"^229|^226|^257|^236|^235|^253|^689|^241|^222|^227":["3","2","2","2","2"],"^591|^350":["3","8"],"^55":["2","2","5","4"],"^359|^242|^385|^251|^233|^353|^972|^231|^218|^261|^258|^970|^221|^211":["3","2","3","4"],"^86|^62":["2","3","4","4"],"^682|^500|^686|^290|^685|^677":["3","5"],"^53":["2","1","7"],"^599|^230":["3","1","3","4"],"^45":["2","2","2","2","2"],"^593":["3","1","7"],"^20|^31":["2","1","8"],"^291":["3","1","3","3"],"^298|^299":["3","6"],"^358|^381":["3","2","7"],"^33":["2","1","2","2","2","2"],"^995":["3","3","2","2","2"],"^49":["2","3","8"],"^30|^81|^82":["2","2","4","4"],"^590|^254|^212|^595|^378":["3","3","6"],"^44":["2","4","6"],"^509|^223":["3","2","2","4"],"^91":["2","5","5"],"^98|^39|^63|^34":["2","3","3","4"],"^964|^234":["3","3","3","4"],"^962":["3","1","4","4"],"^856":["3","2","2","3","3"],"^370":["3","3","5"],"^262":["3","3","2","4"],"^373":["3","3","2","3"],"^95":["2","1","3","4"],"^977":["3","3","7"],"^687":["3","2","2","2"],"^683":["3","4"],"^672":["3","1","5"],"^47":["2","3","2","3"],"^64":["2","1","4","3"],"^7":["1","3","3","2","2"],"^65":["2","4","4"]};return function(n,t=" "){let f=(""+n).replace(/\D/g,"");for(const i in e)if(new RegExp(i).test(f)){var o="";for(const n of e[i])f.length>=n&&(o+=f.substring(0,n)+t,f=f.substring(n));return f.length>0&&(o+=f),(o="+"+o).replace(new RegExp(t+"$"),"")}return n}}));