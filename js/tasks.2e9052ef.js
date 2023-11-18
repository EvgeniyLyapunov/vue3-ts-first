(self["webpackChunkvue3_first_app"]=self["webpackChunkvue3_first_app"]||[]).push([[716],{7957:function(t,e,n){"use strict";const i=n(702),s=n(1859),r=n(742);t.exports={XMLParser:s,XMLValidator:i,XMLBuilder:r}},4970:function(t,e,n){"use strict";n(560);const i=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s=i+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",r="["+i+"]["+s+"]*",o=new RegExp("^"+r+"$"),a=function(t,e){const n=[];let i=e.exec(t);while(i){const s=[];s.startIndex=e.lastIndex-i[0].length;const r=i.length;for(let t=0;t<r;t++)s.push(i[t]);n.push(s),i=e.exec(t)}return n},l=function(t){const e=o.exec(t);return!(null===e||"undefined"===typeof e)};e.isExist=function(t){return"undefined"!==typeof t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,n){if(e){const i=Object.keys(e),s=i.length;for(let r=0;r<s;r++)t[i[r]]="strict"===n?[e[i[r]]]:e[i[r]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=l,e.getAllMatches=a,e.nameRegexp=r},702:function(t,e,n){"use strict";n(560);const i=n(4970),s={allowBooleanAttributes:!1,unpairedTags:[]};function r(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function o(t,e){const n=e;for(;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{const i=t.substr(n,e-n);if(e>5&&"xml"===i)return g("InvalidXml","XML declaration allowed only at the start of the document.",N(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function a(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&(n--,0===n))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=Object.assign({},s,e);const n=[];let i=!1,l=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let s=0;s<t.length;s++)if("<"===t[s]&&"?"===t[s+1]){if(s+=2,s=o(t,s),s.err)return s}else{if("<"!==t[s]){if(r(t[s]))continue;return g("InvalidChar","char '"+t[s]+"' is not expected.",N(t,s))}{let u=s;if(s++,"!"===t[s]){s=a(t,s);continue}{let h=!1;"/"===t[s]&&(h=!0,s++);let d="";for(;s<t.length&&">"!==t[s]&&" "!==t[s]&&"\t"!==t[s]&&"\n"!==t[s]&&"\r"!==t[s];s++)d+=t[s];if(d=d.trim(),"/"===d[d.length-1]&&(d=d.substring(0,d.length-1),s--),!x(d)){let e;return e=0===d.trim().length?"Invalid space after '<'.":"Tag '"+d+"' is an invalid name.",g("InvalidTag",e,N(t,s))}const m=c(t,s);if(!1===m)return g("InvalidAttr","Attributes for '"+d+"' have open quote.",N(t,s));let b=m.value;if(s=m.index,"/"===b[b.length-1]){const n=s-b.length;b=b.substring(0,b.length-1);const r=p(b,e);if(!0!==r)return g(r.err.code,r.err.msg,N(t,n+r.err.line));i=!0}else if(h){if(!m.tagClosed)return g("InvalidTag","Closing tag '"+d+"' doesn't have proper closing.",N(t,s));if(b.trim().length>0)return g("InvalidTag","Closing tag '"+d+"' can't have attributes or invalid starting.",N(t,u));{const e=n.pop();if(d!==e.tagName){let n=N(t,e.tagStartPos);return g("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+n.line+", col "+n.col+") instead of closing tag '"+d+"'.",N(t,u))}0==n.length&&(l=!0)}}else{const r=p(b,e);if(!0!==r)return g(r.err.code,r.err.msg,N(t,s-b.length+r.err.line));if(!0===l)return g("InvalidXml","Multiple possible root nodes found.",N(t,s));-1!==e.unpairedTags.indexOf(d)||n.push({tagName:d,tagStartPos:u}),i=!0}for(s++;s<t.length;s++)if("<"===t[s]){if("!"===t[s+1]){s++,s=a(t,s);continue}if("?"!==t[s+1])break;if(s=o(t,++s),s.err)return s}else if("&"===t[s]){const e=f(t,s);if(-1==e)return g("InvalidChar","char '&' is not expected.",N(t,s));s=e}else if(!0===l&&!r(t[s]))return g("InvalidXml","Extra text at the end",N(t,s));"<"===t[s]&&s--}}}return i?1==n.length?g("InvalidTag","Unclosed tag '"+n[0].tagName+"'.",N(t,n[0].tagStartPos)):!(n.length>0)||g("InvalidXml","Invalid '"+JSON.stringify(n.map((t=>t.tagName)),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):g("InvalidXml","Start tag expected.",1)};const l='"',u="'";function c(t,e){let n="",i="",s=!1;for(;e<t.length;e++){if(t[e]===l||t[e]===u)""===i?i=t[e]:i!==t[e]||(i="");else if(">"===t[e]&&""===i){s=!0;break}n+=t[e]}return""===i&&{value:n,index:e,tagClosed:s}}const h=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function p(t,e){const n=i.getAllMatches(t,h),s={};for(let i=0;i<n.length;i++){if(0===n[i][1].length)return g("InvalidAttr","Attribute '"+n[i][2]+"' has no space in starting.",b(n[i]));if(void 0!==n[i][3]&&void 0===n[i][4])return g("InvalidAttr","Attribute '"+n[i][2]+"' is without value.",b(n[i]));if(void 0===n[i][3]&&!e.allowBooleanAttributes)return g("InvalidAttr","boolean attribute '"+n[i][2]+"' is not allowed.",b(n[i]));const t=n[i][2];if(!m(t))return g("InvalidAttr","Attribute '"+t+"' is an invalid name.",b(n[i]));if(s.hasOwnProperty(t))return g("InvalidAttr","Attribute '"+t+"' is repeated.",b(n[i]));s[t]=1}return!0}function d(t,e){let n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}function f(t,e){if(e++,";"===t[e])return-1;if("#"===t[e])return e++,d(t,e);let n=0;for(;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function g(t,e,n){return{err:{code:t,msg:e,line:n.line||n,col:n.col}}}function m(t){return i.isName(t)}function x(t){return i.isName(t)}function N(t,e){const n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function b(t){return t.startIndex+t[1].length}},742:function(t,e,n){"use strict";const i=n(8092),s={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function r(t){this.options=Object.assign({},s,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=l),this.processTextOrObjNode=o,this.options.format?(this.indentate=a,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function o(t,e,n){const i=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,i.attrStr,n):this.buildObjectNode(i.val,e,i.attrStr,n)}function a(t){return this.options.indentBy.repeat(t)}function l(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}r.prototype.build=function(t){return this.options.preserveOrder?i(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},r.prototype.j2x=function(t,e){let n="",i="";for(let s in t)if(Object.prototype.hasOwnProperty.call(t,s))if("undefined"===typeof t[s])this.isAttribute(s)&&(i+="");else if(null===t[s])this.isAttribute(s)?i+="":"?"===s[0]?i+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if(t[s]instanceof Date)i+=this.buildTextValNode(t[s],s,"",e);else if("object"!==typeof t[s]){const r=this.isAttribute(s);if(r)n+=this.buildAttrPairStr(r,""+t[s]);else if(s===this.options.textNodeName){let e=this.options.tagValueProcessor(s,""+t[s]);i+=this.replaceEntitiesValue(e)}else i+=this.buildTextValNode(t[s],s,"",e)}else if(Array.isArray(t[s])){const n=t[s].length;let r="";for(let o=0;o<n;o++){const n=t[s][o];"undefined"===typeof n||(null===n?"?"===s[0]?i+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+s+"/"+this.tagEndChar:"object"===typeof n?this.options.oneListGroup?r+=this.j2x(n,e+1).val:r+=this.processTextOrObjNode(n,s,e):r+=this.buildTextValNode(n,s,"",e))}this.options.oneListGroup&&(r=this.buildObjectNode(r,s,"",e)),i+=r}else if(this.options.attributesGroupName&&s===this.options.attributesGroupName){const e=Object.keys(t[s]),i=e.length;for(let r=0;r<i;r++)n+=this.buildAttrPairStr(e[r],""+t[s][e[r]])}else i+=this.processTextOrObjNode(t[s],s,e);return{attrStr:n,val:i}},r.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},r.prototype.buildObjectNode=function(t,e,n,i){if(""===t)return"?"===e[0]?this.indentate(i)+"<"+e+n+"?"+this.tagEndChar:this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let s="</"+e+this.tagEndChar,r="";return"?"===e[0]&&(r="?",s=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===r.length?this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(i)+"<"+e+n+r+this.tagEndChar+t+this.indentate(i)+s:this.indentate(i)+"<"+e+n+r+">"+t+s}},r.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},r.prototype.buildTextValNode=function(t,e,n,i){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(i)+"<"+e+n+"?"+this.tagEndChar;{let s=this.options.tagValueProcessor(e,t);return s=this.replaceEntitiesValue(s),""===s?this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+n+">"+s+"</"+e+this.tagEndChar}},r.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t},t.exports=r},8092:function(t){const e="\n";function n(t,n){let s="";return n.format&&n.indentBy.length>0&&(s=e),i(t,n,"",s)}function i(t,e,n,l){let u="",c=!1;for(let h=0;h<t.length;h++){const p=t[h],d=s(p);if(void 0===d)continue;let f="";if(f=0===n.length?d:`${n}.${d}`,d===e.textNodeName){let t=p[d];o(f,e)||(t=e.tagValueProcessor(d,t),t=a(t,e)),c&&(u+=l),u+=t,c=!1;continue}if(d===e.cdataPropName){c&&(u+=l),u+=`<![CDATA[${p[d][0][e.textNodeName]}]]>`,c=!1;continue}if(d===e.commentPropName){u+=l+`\x3c!--${p[d][0][e.textNodeName]}--\x3e`,c=!0;continue}if("?"===d[0]){const t=r(p[":@"],e),n="?xml"===d?"":l;let i=p[d][0][e.textNodeName];i=0!==i.length?" "+i:"",u+=n+`<${d}${i}${t}?>`,c=!0;continue}let g=l;""!==g&&(g+=e.indentBy);const m=r(p[":@"],e),x=l+`<${d}${m}`,N=i(p[d],e,f,g);-1!==e.unpairedTags.indexOf(d)?e.suppressUnpairedNode?u+=x+">":u+=x+"/>":N&&0!==N.length||!e.suppressEmptyNode?N&&N.endsWith(">")?u+=x+`>${N}${l}</${d}>`:(u+=x+">",N&&""!==l&&(N.includes("/>")||N.includes("</"))?u+=l+e.indentBy+N+l:u+=N,u+=`</${d}>`):u+=x+"/>",c=!0}return u}function s(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const i=e[n];if(t.hasOwnProperty(i)&&":@"!==i)return i}}function r(t,e){let n="";if(t&&!e.ignoreAttributes)for(let i in t){if(!t.hasOwnProperty(i))continue;let s=e.attributeValueProcessor(i,t[i]);s=a(s,e),!0===s&&e.suppressBooleanAttributes?n+=` ${i.substr(e.attributeNamePrefix.length)}`:n+=` ${i.substr(e.attributeNamePrefix.length)}="${s}"`}return n}function o(t,e){t=t.substr(0,t.length-e.textNodeName.length-1);let n=t.substr(t.lastIndexOf(".")+1);for(let i in e.stopNodes)if(e.stopNodes[i]===t||e.stopNodes[i]==="*."+n)return!0;return!1}function a(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const i=e.entities[n];t=t.replace(i.regex,i.val)}return t}t.exports=n},782:function(t,e,n){const i=n(4970);function s(t,e){const n={};if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");{e+=9;let i=1,s=!1,p=!1,d="";for(;e<t.length;e++)if("<"!==t[e]||p)if(">"===t[e]){if(p?"-"===t[e-1]&&"-"===t[e-2]&&(p=!1,i--):i--,0===i)break}else"["===t[e]?s=!0:d+=t[e];else{if(s&&a(t,e))e+=7,[entityName,val,e]=r(t,e+1),-1===val.indexOf("&")&&(n[h(entityName)]={regx:RegExp(`&${entityName};`,"g"),val:val});else if(s&&l(t,e))e+=8;else if(s&&u(t,e))e+=8;else if(s&&c(t,e))e+=9;else{if(!o)throw new Error("Invalid DOCTYPE");p=!0}i++,d=""}if(0!==i)throw new Error("Unclosed DOCTYPE")}return{entities:n,i:e}}function r(t,e){let n="";for(;e<t.length&&"'"!==t[e]&&'"'!==t[e];e++)n+=t[e];if(n=n.trim(),-1!==n.indexOf(" "))throw new Error("External entites are not supported");const i=t[e++];let s="";for(;e<t.length&&t[e]!==i;e++)s+=t[e];return[n,s,e]}function o(t,e){return"!"===t[e+1]&&"-"===t[e+2]&&"-"===t[e+3]}function a(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"N"===t[e+3]&&"T"===t[e+4]&&"I"===t[e+5]&&"T"===t[e+6]&&"Y"===t[e+7]}function l(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"L"===t[e+3]&&"E"===t[e+4]&&"M"===t[e+5]&&"E"===t[e+6]&&"N"===t[e+7]&&"T"===t[e+8]}function u(t,e){return"!"===t[e+1]&&"A"===t[e+2]&&"T"===t[e+3]&&"T"===t[e+4]&&"L"===t[e+5]&&"I"===t[e+6]&&"S"===t[e+7]&&"T"===t[e+8]}function c(t,e){return"!"===t[e+1]&&"N"===t[e+2]&&"O"===t[e+3]&&"T"===t[e+4]&&"A"===t[e+5]&&"T"===t[e+6]&&"I"===t[e+7]&&"O"===t[e+8]&&"N"===t[e+9]}function h(t){if(i.isName(t))return t;throw new Error(`Invalid entity name ${t}`)}t.exports=s},5712:function(t,e){const n={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}},i=function(t){return Object.assign({},n,t)};e.buildOptions=i,e.defaultOptions=n},155:function(t,e,n){"use strict";n(560);const i=n(4970),s=n(6148),r=n(782),o=n(6184);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,i.nameRegexp);class a{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"}},this.addExternalEntities=l,this.parseXml=d,this.parseTextData=u,this.resolveNameSpace=c,this.buildAttributesMap=p,this.isItStopNode=x,this.replaceEntitiesValue=g,this.readStopNodeData=E,this.saveTextToParentTag=m,this.addChild=f}}function l(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const i=e[n];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:t[i]}}}function u(t,e,n,i,s,r,o){if(void 0!==t&&(this.options.trimValues&&!i&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t));const i=this.options.tagValueProcessor(e,t,n,s,r);if(null===i||void 0===i)return t;if(typeof i!==typeof t||i!==t)return i;if(this.options.trimValues)return T(t,this.options.parseTagValue,this.options.numberParseOptions);{const e=t.trim();return e===t?T(t,this.options.parseTagValue,this.options.numberParseOptions):t}}}function c(t){if(this.options.removeNSPrefix){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}const h=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function p(t,e,n){if(!this.options.ignoreAttributes&&"string"===typeof t){const n=i.getAllMatches(t,h),s=n.length,r={};for(let t=0;t<s;t++){const i=this.resolveNameSpace(n[t][1]);let s=n[t][4],o=this.options.attributeNamePrefix+i;if(i.length)if(this.options.transformAttributeName&&(o=this.options.transformAttributeName(o)),"__proto__"===o&&(o="#__proto__"),void 0!==s){this.options.trimValues&&(s=s.trim()),s=this.replaceEntitiesValue(s);const t=this.options.attributeValueProcessor(i,s,e);r[o]=null===t||void 0===t?s:typeof t!==typeof s||t!==s?t:T(s,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(r[o]=!0)}if(!Object.keys(r).length)return;if(this.options.attributesGroupName){const t={};return t[this.options.attributesGroupName]=r,t}return r}}const d=function(t){t=t.replace(/\r\n?/g,"\n");const e=new s("!xml");let n=e,i="",o="";for(let a=0;a<t.length;a++){const l=t[a];if("<"===l)if("/"===t[a+1]){const e=b(t,">",a,"Closing Tag is not closed.");let s=t.substring(a+2,e).trim();if(this.options.removeNSPrefix){const t=s.indexOf(":");-1!==t&&(s=s.substr(t+1))}this.options.transformTagName&&(s=this.options.transformTagName(s)),n&&(i=this.saveTextToParentTag(i,n,o));const r=o.substring(o.lastIndexOf(".")+1);if(s&&-1!==this.options.unpairedTags.indexOf(s))throw new Error(`Unpaired tag can not be used as closing tag: </${s}>`);let l=0;r&&-1!==this.options.unpairedTags.indexOf(r)?(l=o.lastIndexOf(".",o.lastIndexOf(".")-1),this.tagsNodeStack.pop()):l=o.lastIndexOf("."),o=o.substring(0,l),n=this.tagsNodeStack.pop(),i="",a=e}else if("?"===t[a+1]){let e=v(t,a,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,n,o),this.options.ignoreDeclaration&&"?xml"===e.tagName||this.options.ignorePiTags);else{const t=new s(e.tagName);t.add(this.options.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&(t[":@"]=this.buildAttributesMap(e.tagExp,o,e.tagName)),this.addChild(n,t,o)}a=e.closeIndex+1}else if("!--"===t.substr(a+1,3)){const e=b(t,"--\x3e",a+4,"Comment is not closed.");if(this.options.commentPropName){const s=t.substring(a+4,e-2);i=this.saveTextToParentTag(i,n,o),n.add(this.options.commentPropName,[{[this.options.textNodeName]:s}])}a=e}else if("!D"===t.substr(a+1,2)){const e=r(t,a);this.docTypeEntities=e.entities,a=e.i}else if("!["===t.substr(a+1,2)){const e=b(t,"]]>",a,"CDATA is not closed.")-2,s=t.substring(a+9,e);if(i=this.saveTextToParentTag(i,n,o),this.options.cdataPropName)n.add(this.options.cdataPropName,[{[this.options.textNodeName]:s}]);else{let t=this.parseTextData(s,n.tagname,o,!0,!1,!0);void 0==t&&(t=""),n.add(this.options.textNodeName,t)}a=e+2}else{let r=v(t,a,this.options.removeNSPrefix),l=r.tagName;const u=r.rawTagName;let c=r.tagExp,h=r.attrExpPresent,p=r.closeIndex;this.options.transformTagName&&(l=this.options.transformTagName(l)),n&&i&&"!xml"!==n.tagname&&(i=this.saveTextToParentTag(i,n,o,!1));const d=n;if(d&&-1!==this.options.unpairedTags.indexOf(d.tagname)&&(n=this.tagsNodeStack.pop(),o=o.substring(0,o.lastIndexOf("."))),l!==e.tagname&&(o+=o?"."+l:l),this.isItStopNode(this.options.stopNodes,o,l)){let e="";if(c.length>0&&c.lastIndexOf("/")===c.length-1)a=r.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(l))a=r.closeIndex;else{const n=this.readStopNodeData(t,u,p+1);if(!n)throw new Error(`Unexpected end of ${u}`);a=n.i,e=n.tagContent}const i=new s(l);l!==c&&h&&(i[":@"]=this.buildAttributesMap(c,o,l)),e&&(e=this.parseTextData(e,l,o,!0,h,!0,!0)),o=o.substr(0,o.lastIndexOf(".")),i.add(this.options.textNodeName,e),this.addChild(n,i,o)}else{if(c.length>0&&c.lastIndexOf("/")===c.length-1){"/"===l[l.length-1]?(l=l.substr(0,l.length-1),o=o.substr(0,o.length-1),c=l):c=c.substr(0,c.length-1),this.options.transformTagName&&(l=this.options.transformTagName(l));const t=new s(l);l!==c&&h&&(t[":@"]=this.buildAttributesMap(c,o,l)),this.addChild(n,t,o),o=o.substr(0,o.lastIndexOf("."))}else{const t=new s(l);this.tagsNodeStack.push(n),l!==c&&h&&(t[":@"]=this.buildAttributesMap(c,o,l)),this.addChild(n,t,o),n=t}i="",a=p}}else i+=t[a]}return e.child};function f(t,e,n){const i=this.options.updateTag(e.tagname,n,e[":@"]);!1===i||("string"===typeof i?(e.tagname=i,t.addChild(e)):t.addChild(e))}const g=function(t){if(this.options.processEntities){for(let e in this.docTypeEntities){const n=this.docTypeEntities[e];t=t.replace(n.regx,n.val)}for(let e in this.lastEntities){const n=this.lastEntities[e];t=t.replace(n.regex,n.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){const n=this.htmlEntities[e];t=t.replace(n.regex,n.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function m(t,e,n,i){return t&&(void 0===i&&(i=0===Object.keys(e.child).length),t=this.parseTextData(t,e.tagname,n,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,i),void 0!==t&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function x(t,e,n){const i="*."+n;for(const s in t){const n=t[s];if(i===n||e===n)return!0}return!1}function N(t,e,n=">"){let i,s="";for(let r=e;r<t.length;r++){let e=t[r];if(i)e===i&&(i="");else if('"'===e||"'"===e)i=e;else if(e===n[0]){if(!n[1])return{data:s,index:r};if(t[r+1]===n[1])return{data:s,index:r}}else"\t"===e&&(e=" ");s+=e}}function b(t,e,n,i){const s=t.indexOf(e,n);if(-1===s)throw new Error(i);return s+e.length-1}function v(t,e,n,i=">"){const s=N(t,e+1,i);if(!s)return;let r=s.data;const o=s.index,a=r.search(/\s/);let l=r,u=!0;-1!==a&&(l=r.substr(0,a).replace(/\s\s*$/,""),r=r.substr(a+1));const c=l;if(n){const t=l.indexOf(":");-1!==t&&(l=l.substr(t+1),u=l!==s.data.substr(t+1))}return{tagName:l,tagExp:r,closeIndex:o,attrExpPresent:u,rawTagName:c}}function E(t,e,n){const i=n;let s=1;for(;n<t.length;n++)if("<"===t[n])if("/"===t[n+1]){const r=b(t,">",n,`${e} is not closed`);let o=t.substring(n+2,r).trim();if(o===e&&(s--,0===s))return{tagContent:t.substring(i,n),i:r};n=r}else if("?"===t[n+1]){const e=b(t,"?>",n+1,"StopNode is not closed.");n=e}else if("!--"===t.substr(n+1,3)){const e=b(t,"--\x3e",n+3,"StopNode is not closed.");n=e}else if("!["===t.substr(n+1,2)){const e=b(t,"]]>",n,"StopNode is not closed.")-2;n=e}else{const i=v(t,n,">");if(i){const t=i&&i.tagName;t===e&&"/"!==i.tagExp[i.tagExp.length-1]&&s++,n=i.closeIndex}}}function T(t,e,n){if(e&&"string"===typeof t){const e=t.trim();return"true"===e||"false"!==e&&o(t,n)}return i.isExist(t)?t:""}t.exports=a},1859:function(t,e,n){const{buildOptions:i}=n(5712),s=n(155),{prettify:r}=n(4169),o=n(702);class a{constructor(t){this.externalEntities={},this.options=i(t)}parse(t,e){if("string"===typeof t);else{if(!t.toString)throw new Error("XML data is accepted in String or Bytes[] form.");t=t.toString()}if(e){!0===e&&(e={});const n=o.validate(t,e);if(!0!==n)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}const n=new s(this.options);n.addExternalEntities(this.externalEntities);const i=n.parseXml(t);return this.options.preserveOrder||void 0===i?i:r(i,this.options)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}}t.exports=a},4169:function(t,e,n){"use strict";function i(t,e){return s(t,e)}function s(t,e,n){let i;const l={};for(let u=0;u<t.length;u++){const c=t[u],h=r(c);let p="";if(p=void 0===n?h:n+"."+h,h===e.textNodeName)void 0===i?i=c[h]:i+=""+c[h];else{if(void 0===h)continue;if(c[h]){let t=s(c[h],e,p);const n=a(t,e);c[":@"]?o(t,c[":@"],p,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==l[h]&&l.hasOwnProperty(h)?(Array.isArray(l[h])||(l[h]=[l[h]]),l[h].push(t)):e.isArray(h,p,n)?l[h]=[t]:l[h]=t}}}return"string"===typeof i?i.length>0&&(l[e.textNodeName]=i):void 0!==i&&(l[e.textNodeName]=i),l}function r(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const t=e[n];if(":@"!==t)return t}}function o(t,e,n,i){if(e){const s=Object.keys(e),r=s.length;for(let o=0;o<r;o++){const r=s[o];i.isArray(r,n+"."+r,!0,!0)?t[r]=[e[r]]:t[r]=e[r]}}}function a(t,e){const{textNodeName:n}=e,i=Object.keys(t).length;return 0===i||!(1!==i||!t[n]&&"boolean"!==typeof t[n]&&0!==t[n])}n(560),e.prettify=i},6148:function(t,e,n){"use strict";n(560);class i{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,[":@"]:t[":@"]}):this.child.push({[t.tagname]:t.child})}}t.exports=i},6184:function(t){const e=/^[-+]?0x[a-fA-F0-9]+$/,n=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const i={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function s(t,s={}){if(s=Object.assign({},i,s),!t||"string"!==typeof t)return t;let o=t.trim();if(void 0!==s.skipLike&&s.skipLike.test(o))return t;if(s.hex&&e.test(o))return Number.parseInt(o,16);{const e=n.exec(o);if(e){const n=e[1],i=e[2];let a=r(e[3]);const l=e[4]||e[6];if(!s.leadingZeros&&i.length>0&&n&&"."!==o[2])return t;if(!s.leadingZeros&&i.length>0&&!n&&"."!==o[1])return t;{const e=Number(o),r=""+e;return-1!==r.search(/[eE]/)||l?s.eNotation?e:t:-1!==o.indexOf(".")?"0"===r&&""===a||r===a||n&&r==="-"+a?e:t:i?a===r||n+a===r?e:t:o===r||o===n+r?e:t}}return t}}function r(t){return t&&-1!==t.indexOf(".")?(t=t.replace(/0+$/,""),"."===t?t="0":"."===t[0]?t="0"+t:"."===t[t.length-1]&&(t=t.substr(0,t.length-1)),t):t}t.exports=s},3578:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var i=n(3396),s=n(9242);const r={class:"c-tasks"},o=(0,i._)("h2",{class:"c-tasks__title"},"Current tasks",-1),a=(0,i._)("button",{class:"c-tasks__submit",type:"submit"},"Upload file",-1);function l(t,e,n,l,u,c){const h=(0,i.up)("TasksList");return(0,i.wg)(),(0,i.iD)("div",r,[o,(0,i._)("form",{onSubmit:e[1]||(e[1]=(0,s.iM)(((...e)=>t.submitFile&&t.submitFile(...e)),["prevent"])),class:"c-tasks__form"},[(0,i._)("input",{class:"c-tasks__input",type:"file",id:"file",onChange:e[0]||(e[0]=(...e)=>t.uploadFile&&t.uploadFile(...e))},null,32),a],32),(0,i.Wm)(h,{taskList:this.currentTasks},null,8,["taskList"])])}var u=n(7957),c=n(7139);const h={class:"task-list"},p={key:0,class:"task-item__head"},d=(0,i._)("span",{class:"task-item__cell task-item__cell-id"},"id",-1),f=(0,i._)("span",{class:"task-item__cell task-item__cell-name"},"name",-1),g=(0,i._)("span",{class:"task-item__cell task-item__cell-status"},"status",-1),m=(0,i._)("span",{class:"task-item__cell task-item__cell-department"},"department",-1),x=[d,f,g,m],N={class:"task-item__cell task-item__cell-id"},b={class:"task-item__cell task-item__cell-name"},v={class:"task-item__cell task-item__cell-status"},E={class:"task-item__cell task-item__cell-department"};function T(t,e,n,s,r,o){return(0,i.wg)(),(0,i.iD)("ul",h,[t.taskList.length>0?((0,i.wg)(),(0,i.iD)("li",p,x)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.taskList,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:"task-item"},[(0,i._)("span",N,(0,c.zw)(t.id),1),(0,i._)("span",b,(0,c.zw)(t.name),1),(0,i._)("span",v,(0,c.zw)(t.status),1),(0,i._)("span",E,(0,c.zw)(t.department),1)])))),128))])}var y=(0,i.aZ)({props:{taskList:{type:Array}}}),w=n(89);const _=(0,w.Z)(y,[["render",T]]);var O=_,k=(0,i.aZ)({components:{TasksList:O},data(){return{file:"",currentTasks:[]}},methods:{uploadFile(t){t.target.files&&(this.file=t.target.files[0])},submitFile(){if(!this.file)return;const t=new FileReader;t.onload=t=>{const e=t.target.result,n=new u.XMLParser,i=n.parse(e);this.currentTasks=i.currentTasks.task},t.readAsText(this.file)}}});const A=(0,w.Z)(k,[["render",l]]);var P=A}}]);
//# sourceMappingURL=tasks.2e9052ef.js.map