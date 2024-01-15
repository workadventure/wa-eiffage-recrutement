class S{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const I="https://unpkg.com/@workadventure/scripting-api-extra@1.4.8/dist";class ae{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new S(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function O(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(I+"/configuration.html"+e)}async function se(t,e){const n=await WA.room.getTiledMap(),r=new Map;return Q(n.layers,r,t,e),r}function Q(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(n&&o.name!==n||r&&!r.includes(a.name))continue;e.set(a.name,new ae(a))}}else o.type==="group"&&Q(o.layers,e,n,r)}let V;async function T(){return V===void 0&&(V=ie()),V}async function ie(){return ue(await WA.room.getTiledMap())}function ue(t){const e=new Map;return F(t.layers,"",e),e}function F(t,e,n){for(const r of t)r.type==="group"?F(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function Z(){const t=await T(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function le(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,s),r=Math.max(r,s));return{top:n,left:e,right:o+1,bottom:r+1}}function ee(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const s=le(a);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,L=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function _(t){return typeof t=="function"}function fe(t){return L(t)?"array":typeof t}function j(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(t,e){return t!=null&&typeof t=="object"&&e in t}function pe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var he=RegExp.prototype.test;function ge(t,e){return he.call(t,e)}var de=/\S/;function ye(t){return!ge(de,t)}var me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return me[n]})}var be=/\s*/,Ae=/\s+/,q=/\s*=/,we=/\s*\}/,We=/#|\^|\/|>|\{|&|=|!/;function Se(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],s=!1,i=!1,u="",c=0;function p(){if(s&&!i)for(;a.length;)delete o[a.pop()];else a=[];s=!1,i=!1}var d,m,B;function E(w){if(typeof w=="string"&&(w=w.split(Ae,2)),!L(w)||w.length!==2)throw new Error("Invalid tags: "+w);d=new RegExp(j(w[0])+"\\s*"),m=new RegExp("\\s*"+j(w[1])),B=new RegExp("\\s*"+j("}"+w[1]))}E(e||g.tags);for(var f=new k(t),v,l,y,P,R,W;!f.eos();){if(v=f.pos,y=f.scanUntil(d),y)for(var x=0,oe=y.length;x<oe;++x)P=y.charAt(x),ye(P)?(a.push(o.length),u+=P):(i=!0,n=!0,u+=" "),o.push(["text",P,v,v+1]),v+=1,P===`
`&&(p(),u="",c=0,n=!1);if(!f.scan(d))break;if(s=!0,l=f.scan(We)||"name",f.scan(be),l==="="?(y=f.scanUntil(q),f.scan(q),f.scanUntil(m)):l==="{"?(y=f.scanUntil(B),f.scan(we),f.scanUntil(m),l="&"):y=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(l==">"?R=[l,y,v,f.pos,u,c,n]:R=[l,y,v,f.pos],c++,o.push(R),l==="#"||l==="^")r.push(R);else if(l==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+y+'" at '+v);if(W[1]!==y)throw new Error('Unclosed section "'+W[1]+'" at '+v)}else l==="name"||l==="{"||l==="&"?i=!0:l==="="&&E(y)}if(p(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+f.pos);return Le(Ce(o))}function Ce(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Le(t){for(var e=[],n=e,r=[],o,a,s=0,i=t.length;s<i;++s)switch(o=t[s],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function k(t){this.string=t,this.tail=t,this.pos=0}k.prototype.eos=function(){return this.tail===""};k.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};k.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function C(t,e){this.view=t,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)};C.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,s,i,u=!1;o;){if(e.indexOf(".")>0)for(a=o.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(u=N(a,s[i])||pe(a,s[i])),a=a[s[i++]];else a=o.view[e],u=N(o.view,e);if(u){r=a;break}o=o.parent}n[e]=r}return _(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||g.tags).join(":"),a=typeof r<"u",s=a?r.get(o):void 0;return s==null&&(s=Se(e,n),a&&r.set(o,s)),s};h.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),s=this.parse(e,a),i=n instanceof C?n:new C(n,void 0);return this.renderTokens(s,i,r,e,o)};h.prototype.renderTokens=function(e,n,r,o,a){for(var s="",i,u,c,p=0,d=e.length;p<d;++p)c=void 0,i=e[p],u=i[0],u==="#"?c=this.renderSection(i,n,r,o,a):u==="^"?c=this.renderInverted(i,n,r,o,a):u===">"?c=this.renderPartial(i,n,r,a):u==="&"?c=this.unescapedValue(i,n):u==="name"?c=this.escapedValue(i,n,a):u==="text"&&(c=this.rawValue(i)),c!==void 0&&(s+=c);return s};h.prototype.renderSection=function(e,n,r,o,a){var s=this,i="",u=n.lookup(e[1]);function c(m){return s.render(m,n,r,a)}if(u){if(L(u))for(var p=0,d=u.length;p<d;++p)i+=this.renderTokens(e[4],n.push(u[p]),r,o,a);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],n.push(u),r,o,a);else if(_(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),c),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],n,r,o,a);return i}};h.prototype.renderInverted=function(e,n,r,o,a){var s=n.lookup(e[1]);if(!s||L(s)&&s.length===0)return this.renderTokens(e[4],n,r,o,a)};h.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=o+a[s]);return a.join(`
`)};h.prototype.renderPartial=function(e,n,r,o){if(r){var a=this.getConfigTags(o),s=_(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],u=e[5],c=e[4],p=s;u==0&&c&&(p=this.indentPartial(s,c,i));var d=this.parse(p,a);return this.renderTokens(d,n,r,p,o)}}};h.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||g.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===g.escape?String(a):o(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return L(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!L(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new h;g.clearCache=function(){return M.clearCache()};g.parse=function(e,n){return M.parse(e,n)};g.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+fe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)};g.escape=ve;g.Scanner=k;g.Context=C;g.Writer=h;class te{constructor(e,n){this.template=e,this.state=n,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(o)&&n.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function Ee(){var t;const e=await Z();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new te(o.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await z(n.name,o.name,s),a.onChange(async i=>{await z(n.name,o.name,i)})}}}async function Pe(){var t;const e=await T();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new te(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();K(n,a.name,i),s.onChange(u=>{K(n,a.name,u)})}}}async function z(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function K(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,U=0,D=0;function $(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Me(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Te(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=re(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ne(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=ne(t),n=ee(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(D-o,2))}function ke(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Me(t):Te(t),$(t)}),$(t)}function H(t,e,n,r){const o=t.name;let a,s,i=!1;const u=n.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const p=!!u;function d(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;a&&a.remove(),a=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function B(){let l;if(t.type==="tilelayer")l=ee(ne(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);l={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:l.right*32,y:l.top*32,width:32*3,height:32*4},allowApi:!0})}function E(){s&&(WA.room.website.delete(s.name),s=void 0)}function f(){if(i=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(n.getString("code")||n.getString("codeVariable"))){B();return}c&&(WA.state[e.name]?d():m())}function v(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),E()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(v)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),s&&WA.state[e.name]===!0&&E(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Be(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-U,2)+Math.pow(t.y-D,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Re(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Be(t)})}function X(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const a=n.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=n.name;WA.room.area.onEnter(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function xe(t){t=t??I;const e=await se();G=await T();for(const n of e.values())n.properties.get("door")&&ke(n),n.properties.get("bell")&&Re(n);for(const n of G.values()){const r=new S(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');H(n,s,r,t)}const a=r.getString("bellVariable");a&&n.type==="tilelayer"&&X(a,r,n)}for(const n of await Z()){const r=new S(n.properties),o=r.getString("doorVariable");if(o){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');H(n,s,r,t)}const a=r.getString("bellVariable");a&&X(a,r,n)}WA.player.onPlayerMove(n=>{U=n.x,D=n.y})}function Ve(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");je(n,e,r,o,a,s)}}function je(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ge(){const t=await T();for(const e of t.values()){const n=new S(e.properties);Ve(n,e.name)}}let Y;async function Ie(t){const e=await WA.room.getTiledMap();t=t??I,Y=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new S(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of Y.values()){const s=new S(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&_e(i.split(","),a.name,s)}}}function _e(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function s(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>O(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");a&&(u&&u==="onaction"?s():O(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ue(){return WA.onInit().then(()=>{xe().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Ie().catch(t=>console.error(t)),Pe().catch(t=>console.error(t)),Ee().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let b,A,J;WA.onInit().then(()=>{console.log("Scripting API ready"),WA.room.onEnterLayer("roofZone").subscribe(()=>{WA.room.hideLayer("Roof/roof1"),WA.room.hideLayer("Roof/roof2")}),WA.room.onLeaveLayer("roofZone").subscribe(()=>{WA.room.showLayer("Roof/roof1"),WA.room.showLayer("Roof/roof2")}),WA.room.area.onEnter("zonePopupHopital").subscribe(()=>{b||(b=WA.ui.openPopup("popupHopital",WA.state.txt_popup_hopital,[{label:"Fermer",className:"primary",callback:()=>{b==null||b.close(),b=null}}]))}),WA.room.area.onEnter("zoneBuilding").subscribe(()=>{A||(A=WA.ui.openPopup("popupBuilding",WA.state.txt_popup_building,[{label:"Voir la vidéo",className:"primary",callback:()=>{J=WA.state.lnk_building,WA.nav.openCoWebSite(J),A==null||A.close(),A=null}}]))}),WA.ui.actionBar.addButton({id:"help-btn",type:"action",imageSrc:"https://svgur.com/i/10Sh.svg",toolTip:"Aide",callback:()=>{WA.nav.openCoWebSite("https://hugoaverty.github.io/eiffage-UI/src/help.pdf")}}),WA.player.state.tutorialDone=!0,WA.ui.modal.closeModal(),setTimeout(()=>{WA.ui.modal.closeModal(),WA.ui.modal.openModal({src:"https://hugoaverty.github.io/eiffage-UI/src/",allow:"fullscreen",title:"Bienvenue",allowApi:!0,position:"center"})},1e3),WA.room.area.onLeave("zoneIntro").subscribe(()=>{WA.ui.modal.closeModal()}),WA.room.area.onLeave("zoneBuilding").subscribe(()=>{A==null||A.close(),A=null}),WA.room.area.onLeave("zonePopupHopital").subscribe(()=>{b==null||b.close(),b=null}),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));