(()=>{var Zh=0,Yl=1,$h=2;var Ni=1,Jh=2,Ms=3,Nn=0,Ot=1,kt=2,Kn=0,Ss=1,Ui=2,Zl=3,$l=4,Kh=5;var Fi=100,Qh=101,jh=102,eu=103,tu=104,nu=200,iu=201,su=202,ru=203,Jl=204,Kl=205,ou=206,au=207,lu=208,cu=209,hu=210,uu=211,du=212,fu=213,pu=214,Mo=0,So=1,bo=2,ss=3,Eo=4,To=5,wo=6,Ao=7,Ql=0,mu=1,gu=2,Un=0,Er=1,Tr=2,wr=3,Oi=4,Ar=5,Rr=6,Cr=7;var jl=300,Bi=301,bs=302,ta=303,na=304,rs=1e3,In=1001,Ro=1002,Ft=1003,_u=1004;var Pr=1005;var zt=1006,ia=1007;var Tn=1008;var tn=1009,ec=1010,tc=1011,Es=1012,sa=1013,wn=1014,mn=1015,Et=1016,ra=1017,oa=1018,zi=1020,nc=35902,ic=35899,sc=1021,rc=1022,An=1023,Yn=1026,Qn=1027,aa=1028,la=1029,pi=1030,ca=1031;var ha=1033,Ir=33776,Lr=33777,Dr=33778,Nr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,va=37489,Ur=37490,ya=37491,Ma=37808,Sa=37809,ba=37810,Ea=37811,Ta=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,La=37819,Da=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,Ba=36283,za=36284,Fr=36285,ka=36286;var $s=2300,Co=2301,vo=2302,Dl=2303,Nl=2400,Ul=2401,Fl=2402;var xu=3200,oc=3201;var Ha=0,vu=1,jn="",Xt="srgb",Js="srgb-linear",Ks="linear",at="srgb";var yo=7680;var yu=519,Mu=512,Su=513,bu=514,ac=515,Eu=516,Tu=517,lc=518,cc=519,wu=35044;var hc="300 es",pn=2e3,os=2001;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Au(){let i=Qs("canvas");return i.style.display="block",i}var dh={},as=null;function uc(...i){let e="THREE."+i.shift();as?as("log",e,...i):console.log(e,...i)}function Ru(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Ru(i);let e="THREE."+i.shift();if(as)as("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Ru(i);let e="THREE."+i.shift();if(as)as("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ws(...i){let e=i.join(" ");e in dh||(dh[e]=!0,ze(...i))}function Cu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pu={[Mo]:Mo,[bo]:wo,[Eo]:Eo,[ss]:To,[So]:So,[wo]:bo,[Ao]:Ao,[To]:ss},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Xs=Math.PI/180,ls=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function dc(i,e){return(i%e+e)%e}function lf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cf(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function hf(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function uf(i,e=1){return e-Math.abs(dc(i,e*2)-e)}function df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mf(i,e){return i+Math.random()*(e-i)}function gf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(fh=i);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xf(i){return i*Xs}function vf(i){return i*ls}function yf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Iu(i,e){if(e.constructor===Float32Array)return i;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Lu(i,e){if(e.constructor===Float32Array)return i;let t=pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var mc={DEG2RAD:Xs,RAD2DEG:ls,generateUUID:ki,clamp:je,euclideanModulo:dc,mapLinear:lf,inverseLerp:cf,lerp:qs,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:xf,radToDeg:vf,isPowerOfTwo:yf,ceilPowerOfTwo:Mf,floorPowerOfTwo:fc,setQuaternionFromProperEuler:Sf,normalize:Lu,denormalize:Iu},Mc=class Mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;var oe=Mc,vt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==_){let p=l*u+c*f+h*_+d*v;p<0&&(u=-u,f=-f,_=-_,v=-v,p=-p);let m=1-a;if(p<.9995){let S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,l=l*m+u*a,c=c*m+f*a,h=h*m+_*a,d=d*m+v*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+_*a,d=d*m+v*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*f-c*u,e[t+1]=l*_+h*u+c*d-a*f,e[t+2]=c*_+h*f+a*u-l*d,e[t+3]=h*_-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sc=class Sc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;var P=Sc,hl=new P,ph=new vt,bc=class bc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],v=s[0],p=s[3],m=s[6],S=s[1],E=s[4],x=s[7],w=s[2],T=s[5],g=s[8];return r[0]=o*v+a*S+l*w,r[3]=o*p+a*E+l*T,r[6]=o*m+a*x+l*g,r[1]=c*v+h*S+d*w,r[4]=c*p+h*E+d*T,r[7]=c*m+h*x+d*g,r[2]=u*v+f*S+_*w,r[5]=u*p+f*E+_*T,r[8]=u*m+f*x+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,_=t*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ul.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bc.prototype.isMatrix3=!0;var Xe=bc,ul=new Xe,mh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:e,whitePoint:n,transfer:Ks,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var Qe=bf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gi,Po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=Qs("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ef=0,cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Tf=0,fl=new P,Kt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=zt,o=Tn,a=An,l=tn,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ki(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=jl;Kt.DEFAULT_ANISOTROPY=1;var Ec=class Ec{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,x=(f+1)/2,w=(m+1)/2,T=(h+u)/4,g=(d+v)/4,y=(_+p)/4;return E>x&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=g/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=y/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ec.prototype.isVector4=!0;var pt=Ec,Io=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xt=class extends Io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},js=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ea=class ea{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,_,v,p)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,_,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,_=c*h,v=c*d;t[0]=u+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,_=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=_*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=_*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+_,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Af)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Yr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Yr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Yr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Yr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],S=n[3],E=n[7],x=n[11],w=n[15],T=s[0],g=s[4],y=s[8],I=s[12],A=s[1],L=s[5],U=s[9],O=s[13],C=s[2],z=s[6],W=s[10],k=s[14],se=s[3],X=s[7],K=s[11],ne=s[15];return r[0]=o*T+a*A+l*C+c*se,r[4]=o*g+a*L+l*z+c*X,r[8]=o*y+a*U+l*W+c*K,r[12]=o*I+a*O+l*k+c*ne,r[1]=h*T+d*A+u*C+f*se,r[5]=h*g+d*L+u*z+f*X,r[9]=h*y+d*U+u*W+f*K,r[13]=h*I+d*O+u*k+f*ne,r[2]=_*T+v*A+p*C+m*se,r[6]=_*g+v*L+p*z+m*X,r[10]=_*y+v*U+p*W+m*K,r[14]=_*I+v*O+p*k+m*ne,r[3]=S*T+E*A+x*C+w*se,r[7]=S*g+E*L+x*z+w*X,r[11]=S*y+E*U+x*W+w*K,r[15]=S*I+E*O+x*k+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],v=e[7],p=e[11],m=e[15],S=l*f-c*u,E=a*f-c*d,x=a*u-l*d,w=o*f-c*h,T=o*u-l*h,g=o*d-a*h;return t*(v*S-p*E+m*x)-n*(_*S-p*w+m*T)+s*(_*E-v*w+m*g)-r*(_*x-v*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],v=e[13],p=e[14],m=e[15],S=t*a-n*o,E=t*l-s*o,x=t*c-r*o,w=n*l-s*a,T=n*c-r*a,g=s*c-r*l,y=h*v-d*_,I=h*p-u*_,A=h*m-f*_,L=d*p-u*v,U=d*m-f*v,O=u*m-f*p,C=S*O-E*U+x*L+w*A-T*I+g*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return e[0]=(a*O-l*U+c*L)*z,e[1]=(s*U-n*O-r*L)*z,e[2]=(v*g-p*T+m*w)*z,e[3]=(u*T-d*g-f*w)*z,e[4]=(l*A-o*O-c*I)*z,e[5]=(t*O-s*A+r*I)*z,e[6]=(p*x-_*g-m*E)*z,e[7]=(h*g-u*x+f*E)*z,e[8]=(o*U-a*A+c*y)*z,e[9]=(n*A-t*U-r*y)*z,e[10]=(_*T-v*x+m*S)*z,e[11]=(d*x-h*T-f*S)*z,e[12]=(a*I-o*L-l*y)*z,e[13]=(t*L-n*I+s*y)*z,e[14]=(v*E-_*w-p*S)*z,e[15]=(h*w-d*E+u*S)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,_=r*d,v=o*h,p=o*d,m=a*d,S=l*c,E=l*h,x=l*d,w=n.x,T=n.y,g=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+x)*w,s[2]=(_-E)*w,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(u+m))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(_+E)*g,s[9]=(p-S)*g,s[10]=(1-(u+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),l=Wi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let c=1/o,h=1/a,d=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===pn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===os)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===pn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===os)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ea.prototype.isMatrix4=!0;var $e=ea,Wi=new P,Mn=new $e,wf=new P(0,0,0),Af=new P(1,1,1),ii=new P,Yr=new P,nn=new P,_h=new $e,xh=new vt,yt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yt.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rf=0,vh=new P,Xi=new vt,Hn=new $e,Zr=new P,Os=new P,Cf=new P,Pf=new vt,yh=new P(1,0,0),Mh=new P(0,1,0),Sh=new P(0,0,1),bh={type:"added"},If={type:"removed"},qi={type:"childadded",child:null},pl={type:"childremoved",child:null},Yt=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new yt,n=new vt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Os,Zr,this.up):Hn.lookAt(Zr,Os,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),qi.child=e,this.dispatchEvent(qi),qi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(If),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new P(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lf={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=dc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Qe.workingToColorSpace(Wt.copy(this),e),Math.round(je(Wt.r*255,0,255))*65536+Math.round(je(Wt.g*255,0,255))*256+Math.round(je(Wt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Xt){Qe.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL($r);let n=qs(si.h,$r.h,t),s=qs(si.s,$r.s,t),r=qs(si.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Ne;Ne.NAMES=Du;var er=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wi=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yt,this.environmentIntensity=1,this.environmentRotation=new yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new P,Vn=new P,gl=new P,Gn=new P,Yi=new P,Zi=new P,Eh=new P,_l=new P,xl=new P,vl=new P,yl=new pt,Ml=new pt,Sl=new pt,li=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Vn.subVectors(n,t),gl.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(Vn),l=Sn.dot(gl),c=Vn.dot(Vn),h=Vn.dot(gl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Yi.subVectors(s,n),Zi.subVectors(r,n),_l.subVectors(e,n);let l=Yi.dot(_l),c=Zi.dot(_l);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,s);let h=Yi.dot(xl),d=Zi.dot(xl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Yi,o);vl.subVectors(e,r);let f=Yi.dot(vl),_=Zi.dot(vl);if(_>=0&&f<=_)return t.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Zi,a);let p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Eh.subVectors(r,s),a=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(Eh,a);let m=1/(p+v+u);return o=v*m,a=u*m,t.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Kr.subVectors(this.max,Bs),$i.subVectors(e.a,Bs),Ji.subVectors(e.b,Bs),Ki.subVectors(e.c,Bs),ri.subVectors(Ji,$i),oi.subVectors(Ki,Ji),Mi.subVectors($i,Ki);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!bl(t,$i,Ji,Ki,Kr)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,$i,Ji,Ki,Kr))?!1:(Qr.crossVectors(ri,oi),t=[Qr.x,Qr.y,Qr.z],bl(t,$i,Ji,Ki,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wn=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,Jr=new Dn,$i=new P,Ji=new P,Ki=new P,ri=new P,oi=new P,Mi=new P,Bs=new P,Kr=new P,Qr=new P,Si=new P;function bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Rt=new P,jr=new oe,Df=0,Ct=class extends Ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=e!==void 0?pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Iu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Lu(e,this.array)}};var tr=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nr=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nf=new Dn,zs=new P,El=new P,Zn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(El)),this.expandByPoint(zs.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Uf=0,fn=new $e,Tl=new Yt,Qi=new P,sn=new Dn,ks=new Dn,Ut=new P,Tt=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(sn.min,ks.min),sn.expandByPoint(Ut),Ut.addVectors(sn.max,ks.max),sn.expandByPoint(Ut)):(sn.expandByPoint(ks.min),sn.expandByPoint(ks.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Ut.add(Qi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;let h=new P,d=new P,u=new P,f=new oe,_=new oe,v=new oe,p=new P,m=new P;function S(I,A,L){c[I]=c[A]=c[L]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,I),_.fromBufferAttribute(r,A),v.fromBufferAttribute(r,L),d.sub(h),u.sub(h),_.sub(f),v.sub(f);let U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-_.y).multiplyScalar(U),m.copy(u).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(U),a[I].add(p),a[A].add(p),a[L].add(p),l[I].add(m),l[A].add(m),l[L].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,A=E.length;I<A;++I){let L=E[I],U=L.start,O=L.count;for(let C=U,z=U+O;C<z;C+=3)S(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let x=new P,w=new P,T=new P,g=new P;function y(I){T.fromBufferAttribute(s,I),g.copy(T);let A=a[I];x.copy(A),x.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(g,A);let U=w.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,A=n.count;I<A;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let _=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new Ct(u,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wl=new P,Ff=new P,Of=new Xe,rn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wl.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bf=0,$n=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ss,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xn=new P,Al=new P,eo=new P,to=new P,ds=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Al.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),to.copy(this.origin).sub(Al);let r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=to.dot(this.direction),l=-to.dot(eo),c=to.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Al).addScaledVector(eo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,_=t.x-o.x,v=t.y-o.y,p=t.z-o.z,m=n.x-o.x,S=n.y-o.y,E=n.z-o.z,x=Math.abs(l),w=Math.abs(c),T=Math.abs(h),g,y,I,A,L,U,O,C,z,W,k,se;if(x>=w&&x>=T?(I=l,U=d,z=_,se=m,l>=0?(g=c,y=h,A=u,L=f,O=v,C=p,W=S,k=E):(g=h,y=c,A=f,L=u,O=p,C=v,W=E,k=S)):w>=T?(I=c,U=u,z=v,se=S,c>=0?(g=h,y=l,A=f,L=d,O=p,C=_,W=E,k=m):(g=l,y=h,A=d,L=f,O=_,C=p,W=m,k=E)):(I=h,U=f,z=p,se=E,h>=0?(g=l,y=c,A=d,L=u,O=_,C=v,W=m,k=S):(g=c,y=l,A=u,L=d,O=v,C=_,W=S,k=m)),I===0)return null;let X=g/I,K=y/I,ne=1/I,Ae=A-X*U,$=L-K*U,B=O-X*z,Y=C-K*z,ie=W-X*se,de=k-K*se,re=ie*Y-de*B,Se=Ae*de-$*ie,ke=B*$-Y*Ae;if(s){if(re<0||Se<0||ke<0)return null}else if((re<0||Se<0||ke<0)&&(re>0||Se>0||ke>0))return null;let Re=re+Se+ke;if(Re===0)return null;let Ge=ne*(re*U+Se*z+ke*se);return(Re>0?Ge<0:Ge>0)?null:this.at(Ge/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fs=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new $e,bi=new ds,no=new Zn,wh=new P,io=new P,so=new P,ro=new P,Rl=new P,oo=new P,Ah=new P,ao=new P,ct=class extends Yt{constructor(e=new Tt,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Rl.fromBufferAttribute(d,e),o?oo.addScaledVector(Rl,h):oo.addScaledVector(Rl.sub(t),h))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(no.containsPoint(bi.origin)===!1&&(bi.intersectSphere(no,wh)===null||bi.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Th.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let p=u[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,w=E;x<w;x+=3){let T=a.getX(x),g=a.getX(x+1),y=a.getX(x+2);s=lo(this,m,e,n,c,h,d,T,g,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let S=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);s=lo(this,o,e,n,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let p=u[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,w=E;x<w;x+=3){let T=x,g=x+1,y=x+2;s=lo(this,m,e,n,c,h,d,T,g,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let S=p,E=p+1,x=p+2;s=lo(this,o,e,n,c,h,d,S,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function zf(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:i}}function lo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,io),i.getVertexPosition(l,so),i.getVertexPosition(c,ro);let h=zf(i,e,t,n,io,so,ro,Ah);if(h){let d=new P;li.getBarycoord(Ah,io,so,ro,d),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,d,new oe)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};li.getNormal(io,so,ro,u.normal),h.face=u,h.barycoord=d}return h}var Ai=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ft,h=Ft,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new $e,Rh=new $e,co=[],Ch=new Dn,kf=new $e,Hs=new ct,Vs=new Zn,Qt=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new En(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Ch.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Ch)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Vs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),Rh.multiplyMatrices(n,ji),Hs.matrixWorld=Rh,Hs.raycast(e,co);for(let o=0,a=co.length;o<a;o++){let l=co[o];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new En(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(s*this.count),s,this.count,aa,mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new Zn,Hf=new oe(.5,.5),ho=new P,ci=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],v=r[9],p=r[10],m=r[11],S=r[12],E=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,m-_,w-S).normalize(),s[1].setComponents(c+o,f+h,m+_,w+S).normalize(),s[2].setComponents(c+a,f+d,m+v,w+E).normalize(),s[3].setComponents(c-a,f-d,m-v,w-E).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,f-u,m-p,w-x).normalize();else if(s[4].setComponents(c-l,f-u,m-p,w-x).normalize(),t===pn)s[5].setComponents(c+l,f+u,m+p,w+x).normalize();else if(t===os)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=Hf.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ph=new $e,Do=class i{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ci),n[s].setFromProjectionMatrix(Ph,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ci),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var No=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ih=new $e,Ol=new ds,uo=new Zn,fo=new P,ir=class extends Yt{constructor(e=new Tt,t=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Ih.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(Ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=u,v=f;_<v;_++){let p=c.getX(_);fo.fromBufferAttribute(d,p),Lh(fo,p,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,v=f;_<v;_++)fo.fromBufferAttribute(d,_),Lh(fo,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lh(i,e,t,n,s,r,o){let a=Ol.distanceSqToPoint(i);if(a<t){let l=new P;Ol.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var sr=class extends Kt{constructor(e=[],t=Bi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ps=class extends Kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends Kt{constructor(e,t,n=wn,s,r,o,a=Ft,l=Ft,c,h=Yn,d=1){if(h!==Yn&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rr=class extends Jn{constructor(e,t=wn,n=Bi,s,r,o=Ft,a=Ft,l,c=Yn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},or=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function _(v,p,m,S,E,x,w,T,g,y,I){let A=x/g,L=w/y,U=x/2,O=w/2,C=T/2,z=g+1,W=y+1,k=0,se=0,X=new P;for(let K=0;K<W;K++){let ne=K*L-O;for(let Ae=0;Ae<z;Ae++){let $=Ae*A-U;X[v]=$*S,X[p]=ne*E,X[m]=C,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ae/g),d.push(1-K/y),k+=1}}for(let K=0;K<y;K++)for(let ne=0;ne<g;ne++){let Ae=u+ne+z*K,$=u+ne+z*(K+1),B=u+(ne+1)+z*(K+1),Y=u+(ne+1)+z*K;l.push(Ae,$,Y),l.push($,B,Y),se+=6}a.addGroup(f,se,I),f+=se,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ar=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},lr=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,v=[],p=n/2,m=0;S(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function S(){let x=new P,w=new P,T=0,g=(t-e)/n;for(let y=0;y<=r;y++){let I=[],A=y/r,L=A*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,C=O*l+a,z=Math.sin(C),W=Math.cos(C);w.x=L*z,w.y=-A*n+p,w.z=L*W,d.push(w.x,w.y,w.z),x.set(z,g,W).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-A),I.push(_++)}v.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let A=v[I][y],L=v[I+1][y],U=v[I+1][y+1],O=v[I][y+1];(e>0||I!==0)&&(h.push(A,L,O),T+=3),(t>0||I!==r-1)&&(h.push(L,U,O),T+=3)}c.addGroup(m,T,0),m+=T}function E(x){let w=_,T=new oe,g=new P,y=0,I=x===!0?e:t,A=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),_++;let L=_;for(let U=0;U<=s;U++){let C=U/s*l+a,z=Math.cos(C),W=Math.sin(C);g.x=I*W,g.y=p*A,g.z=I*z,d.push(g.x,g.y,g.z),u.push(0,A,0),T.x=z*.5+.5,T.y=W*.5*A+.5,f.push(T.x,T.y),_++}for(let U=0;U<s;U++){let O=w+U,C=L+U;x===!0?h.push(C,C+1,O):h.push(C+1,C,O),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Uo=class i extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let E=new P,x=new P,w=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],E),f(t[T+1],x),f(t[T+2],w),l(E,x,w,S)}function l(S,E,x,w){let T=w+1,g=[];for(let y=0;y<=T;y++){g[y]=[];let I=S.clone().lerp(x,y/T),A=E.clone().lerp(x,y/T),L=T-y;for(let U=0;U<=L;U++)U===0&&y===T?g[y][U]=I:g[y][U]=I.clone().lerp(A,U/L)}for(let y=0;y<T;y++)for(let I=0;I<2*(T-y)-1;I++){let A=Math.floor(I/2);I%2===0?(u(g[y][A+1]),u(g[y+1][A]),u(g[y][A])):(u(g[y][A+1]),u(g[y+1][A+1]),u(g[y+1][A]))}}function c(S){let E=new P;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(S),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let S=new P;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];let x=p(S)/2/Math.PI+.5,w=m(S)/Math.PI+.5;o.push(x,1-w)}_(),d()}function d(){for(let S=0;S<o.length;S+=6){let E=o[S+0],x=o[S+2],w=o[S+4],T=Math.max(E,x,w),g=Math.min(E,x,w);T>.9&&g<.1&&(E<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),w<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,E){let x=S*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function _(){let S=new P,E=new P,x=new P,w=new P,T=new oe,g=new oe,y=new oe;for(let I=0,A=0;I<r.length;I+=9,A+=6){S.set(r[I+0],r[I+1],r[I+2]),E.set(r[I+3],r[I+4],r[I+5]),x.set(r[I+6],r[I+7],r[I+8]),T.set(o[A+0],o[A+1]),g.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),w.copy(S).add(E).add(x).divideScalar(3);let L=p(w);v(T,A+0,S,L),v(g,A+2,E,L),v(y,A+4,x,L)}}function v(S,E,x,w){w<0&&S.x===1&&(o[E]=S.x-1),x.x===0&&x.z===0&&(o[E]=w/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],o=[],a=new P,l=new $e;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ms=class extends an{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fo=class extends ms{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Dh=new P,Nh=new P,Cl=new gc,Pl=new gc,Il=new gc,Oo=class extends an{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),c=Nh);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Cl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,v,p),Pl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,v,p),Il.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Pl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Il.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Cl.calc(l),Pl.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Vf(i,e){let t=1-i;return t*t*e}function Gf(i,e){return 2*(1-i)*i*e}function Wf(i,e){return i*i*e}function Ys(i,e,t,n){return Vf(i,e)+Gf(i,t)+Wf(i,n)}function Xf(i,e){let t=1-i;return t*t*t*e}function qf(i,e){let t=1-i;return 3*t*t*i*e}function Yf(i,e){return 3*(1-i)*i*i*e}function Zf(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return Xf(i,e)+qf(i,t)+Yf(i,n)+Zf(i,s)}var cr=class extends an{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends an{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y),Zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hr=class extends an{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends an{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends an{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends an{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y),Ys(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Uh(a,l.x,c.x,h.x,d.x),Uh(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Oo,CubicBezierCurve:cr,CubicBezierCurve3:Bo,EllipseCurve:ms,LineCurve:hr,LineCurve3:zo,QuadraticBezierCurve:ur,QuadraticBezierCurve3:ko,SplineCurve:dr}),Ho=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fr=class extends Ho{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new hr(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ur(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new cr(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new dr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ms(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hi=class extends fr{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fr().fromJSON(s))}return this}};function $f(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ep(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],_=i[u+1];f<a&&(a=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return pr(r,o,t,a,l,c,0),o}function Nu(i,e,t,n,s){let r;if(s===up(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Fh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Fh(o/n|0,i[o],i[o+1],r);return r&&gs(r,r.next)&&(gr(r),r=r.next),r}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gs(t,t.next)||St(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&rp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Kf(i,n,s,r):Jf(i)){e.push(l.i,i.i,c.i),gr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qf(Ri(i),e),pr(i,e,t,n,s,r,2)):o===2&&jf(i,e,t,n,s,r):pr(Ri(i),e,t,n,s,r,1);break}}}function Jf(i){let e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&Gs(s,a,r,l,o,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Kf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(St(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),_=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),m=zl(f,_,e,t,n),S=zl(v,p,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=m&&x&&x.z<=S;){if(E.x>=f&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&Gs(a,h,l,d,c,u,E.x,E.y)&&St(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Gs(a,h,l,d,c,u,x.x,x.y)&&St(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&Gs(a,h,l,d,c,u,E.x,E.y)&&St(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Gs(a,h,l,d,c,u,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!gs(n,s)&&Fu(n,t,t.next,s)&&mr(n,s)&&mr(s,n)&&(e.push(n.i,t.i,s.i),gr(t),gr(t.next),t=i=s),t=t.next}while(t!==i);return Ri(t)}function jf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lp(o,a)){let l=Ou(o,a);o=Ri(o,o.next),l=Ri(l,l.next),pr(o,e,t,n,s,r,0),pr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ep(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Nu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ap(c))}s.sort(tp);for(let r=0;r<s.length;r++)t=np(s[r],t);return t}function tp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function np(i,e){let t=ip(i,e);if(!t)return e;let n=Ou(t,i);return Ri(n,n.next),Ri(t,t.next)}function ip(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(gs(i,t))return t;do{if(gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Uu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);mr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&sp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function sp(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function rp(i,e,t,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,op(s)}function op(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function zl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ap(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Uu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Uu(i,e,t,n,s,r,o,a)}function lp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cp(i,e)&&(mr(i,e)&&mr(e,i)&&hp(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||gs(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gs(i,e){return i.x===e.x&&i.y===e.y}function Fu(i,e,t,n){let s=mo(St(i,e,t)),r=mo(St(i,e,n)),o=mo(St(t,n,i)),a=mo(St(t,n,e));return!!(s!==r&&o!==a||s===0&&po(i,t,e)||r===0&&po(i,n,e)||o===0&&po(t,i,n)||a===0&&po(t,e,n))}function po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mo(i){return i>0?1:i<0?-1:0}function cp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function hp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ou(i,e){let t=kl(i.i,i.x,i.y),n=kl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fh(i,e,t,n){let s=kl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hl=class{static triangulate(e,t,n=2){return $f(e,t,n)}},Ti=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Oh(e),Bh(n,e);let o=e.length;t.forEach(Oh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bh(n,t[l]);let a=Hl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ci=class i extends Tt{constructor(e=new hi([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:dp,E,x=!1,w,T,g,y;if(m){E=m.getSpacedPoints(h),x=!0,u=!1;let J=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,J),T=new P,g=new P,y=new P}u||(p=0,f=0,_=0,v=0);let I=a.extractPoints(c),A=I.shape,L=I.holes;if(!Ti.isClockWise(A)){A=A.reverse();for(let J=0,ce=L.length;J<ce;J++){let he=L[J];Ti.isClockWise(he)&&(L[J]=he.reverse())}}function O(J){let he=10000000000000001e-36,Te=J[0];for(let fe=1;fe<=J.length;fe++){let He=fe%J.length,Le=J[He],et=Le.x-Te.x,tt=Le.y-Te.y,ot=et*et+tt*tt,F=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(Te.x),Math.abs(Te.y)),wt=he*F*F;if(ot<=wt){J.splice(He,1),fe--;continue}Te=Le}}O(A),L.forEach(O);let C=L.length,z=A;for(let J=0;J<C;J++){let ce=L[J];A=A.concat(ce)}function W(J,ce,he){return ce||Ve("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ce,he)}let k=A.length;function se(J,ce,he){let Te,fe,He,Le=J.x-ce.x,et=J.y-ce.y,tt=he.x-J.x,ot=he.y-J.y,F=Le*Le+et*et,wt=Le*ot-et*tt;if(Math.abs(wt)>Number.EPSILON){let Ke=Math.sqrt(F),dt=Math.sqrt(tt*tt+ot*ot),ve=ce.x-et/Ke,bt=ce.y+Le/Ke,Be=he.x-ot/dt,We=he.y+tt/dt,R=((Be-ve)*ot-(We-bt)*tt)/(Le*ot-et*tt);Te=ve+Le*R-J.x,fe=bt+et*R-J.y;let M=Te*Te+fe*fe;if(M<=2)return new oe(Te,fe);He=Math.sqrt(M/2)}else{let Ke=!1;Le>Number.EPSILON?tt>Number.EPSILON&&(Ke=!0):Le<-Number.EPSILON?tt<-Number.EPSILON&&(Ke=!0):Math.sign(et)===Math.sign(ot)&&(Ke=!0),Ke?(Te=-et,fe=Le,He=Math.sqrt(F)):(Te=Le,fe=et,He=Math.sqrt(F/2))}return new oe(Te/He,fe/He)}let X=[];for(let J=0,ce=z.length,he=ce-1,Te=J+1;J<ce;J++,he++,Te++)he===ce&&(he=0),Te===ce&&(Te=0),X[J]=se(z[J],z[he],z[Te]);let K=[],ne,Ae=X.concat();for(let J=0,ce=C;J<ce;J++){let he=L[J];ne=[];for(let Te=0,fe=he.length,He=fe-1,Le=Te+1;Te<fe;Te++,He++,Le++)He===fe&&(He=0),Le===fe&&(Le=0),ne[Te]=se(he[Te],he[He],he[Le]);K.push(ne),Ae=Ae.concat(ne)}let $;if(p===0)$=Ti.triangulateShape(z,L);else{let J=[],ce=[];for(let he=0;he<p;he++){let Te=he/p,fe=f*Math.cos(Te*Math.PI/2),He=_*Math.sin(Te*Math.PI/2)+v;for(let Le=0,et=z.length;Le<et;Le++){let tt=W(z[Le],X[Le],He);Se(tt.x,tt.y,-fe),Te===0&&J.push(tt)}for(let Le=0,et=C;Le<et;Le++){let tt=L[Le];ne=K[Le];let ot=[];for(let F=0,wt=tt.length;F<wt;F++){let Ke=W(tt[F],ne[F],He);Se(Ke.x,Ke.y,-fe),Te===0&&ot.push(Ke)}Te===0&&ce.push(ot)}}$=Ti.triangulateShape(J,ce)}let B=$.length,Y=_+v;for(let J=0;J<k;J++){let ce=u?W(A[J],Ae[J],Y):A[J];x?(g.copy(w.normals[0]).multiplyScalar(ce.x),T.copy(w.binormals[0]).multiplyScalar(ce.y),y.copy(E[0]).add(g).add(T),Se(y.x,y.y,y.z)):Se(ce.x,ce.y,0)}for(let J=1;J<=h;J++)for(let ce=0;ce<k;ce++){let he=u?W(A[ce],Ae[ce],Y):A[ce];x?(g.copy(w.normals[J]).multiplyScalar(he.x),T.copy(w.binormals[J]).multiplyScalar(he.y),y.copy(E[J]).add(g).add(T),Se(y.x,y.y,y.z)):Se(he.x,he.y,d/h*J)}for(let J=p-1;J>=0;J--){let ce=J/p,he=f*Math.cos(ce*Math.PI/2),Te=_*Math.sin(ce*Math.PI/2)+v;for(let fe=0,He=z.length;fe<He;fe++){let Le=W(z[fe],X[fe],Te);Se(Le.x,Le.y,d+he)}for(let fe=0,He=L.length;fe<He;fe++){let Le=L[fe];ne=K[fe];for(let et=0,tt=Le.length;et<tt;et++){let ot=W(Le[et],ne[et],Te);x?Se(ot.x,ot.y+E[h-1].y,E[h-1].x+he):Se(ot.x,ot.y,d+he)}}}ie(),de();function ie(){let J=s.length/3;if(u){let ce=0,he=k*ce;for(let Te=0;Te<B;Te++){let fe=$[Te];ke(fe[2]+he,fe[1]+he,fe[0]+he)}ce=h+p*2,he=k*ce;for(let Te=0;Te<B;Te++){let fe=$[Te];ke(fe[0]+he,fe[1]+he,fe[2]+he)}}else{for(let ce=0;ce<B;ce++){let he=$[ce];ke(he[2],he[1],he[0])}for(let ce=0;ce<B;ce++){let he=$[ce];ke(he[0]+k*h,he[1]+k*h,he[2]+k*h)}}n.addGroup(J,s.length/3-J,0)}function de(){let J=s.length/3,ce=0;re(z,ce),ce+=z.length;for(let he=0,Te=L.length;he<Te;he++){let fe=L[he];re(fe,ce),ce+=fe.length}n.addGroup(J,s.length/3-J,1)}function re(J,ce){let he=J.length;for(;--he>=0;){let Te=he,fe=he-1;fe<0&&(fe=J.length-1);for(let He=0,Le=h+p*2;He<Le;He++){let et=k*He,tt=k*(He+1),ot=ce+Te+et,F=ce+fe+et,wt=ce+fe+tt,Ke=ce+Te+tt;Re(ot,F,wt,Ke)}}}function Se(J,ce,he){l.push(J),l.push(ce),l.push(he)}function ke(J,ce,he){Ge(J),Ge(ce),Ge(he);let Te=s.length/3,fe=S.generateTopUV(n,s,Te-3,Te-2,Te-1);Fe(fe[0]),Fe(fe[1]),Fe(fe[2])}function Re(J,ce,he,Te){Ge(J),Ge(ce),Ge(Te),Ge(ce),Ge(he),Ge(Te);let fe=s.length/3,He=S.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);Fe(He[0]),Fe(He[1]),Fe(He[3]),Fe(He[1]),Fe(He[2]),Fe(He[3])}function Ge(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Fe(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bl[s.type]().fromJSON(s)),new i(n,e.options)}},dp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],_=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-d),new oe(u,1-_),new oe(v,1-m)]:[new oe(a,1-l),new oe(h,1-d),new oe(f,1-_),new oe(p,1-m)]}};function fp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pi=class i extends Uo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zt=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],_=[],v=[],p=[];for(let m=0;m<h;m++){let S=m*u-o;for(let E=0;E<c;E++){let x=E*d-r;_.push(x,-S,0),v.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let E=S+c*m,x=S+c*(m+1),w=S+1+c*(m+1),T=S+1+c*m;f.push(E,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var _s=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){let S=[],E=m/n,x=o+E*a,w=e*Math.cos(x),T=Math.sqrt(e*e-w*w),g=0;m===0&&o===0?g=.5/t:m===n&&l===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){let I=y/t,A=s+I*r;d.x=-T*Math.cos(A),d.y=w,d.z=T*Math.sin(A),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(I+g,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let E=h[m][S+1],x=h[m][S],w=h[m+1][S],T=h[m+1][S+1];(m!==0||o>0)&&f.push(E,x,T),(m!==n-1||l<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zh(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let s in n)e[s]=n[s]}return e}function zh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _c(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Rn={clone:Hi,merge:$t},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,st=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xs=class extends st{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vs=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function go(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Go=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ul:r=e,a=2*t-n;break;case Fl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ul:o=e,l=2*n-t;break;case Fl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),v=_*_,p=v*_,m=-u*p+2*u*v-u*_,S=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*_+1,E=(-1-f)*p+(1.5+f)*v+.5*_,x=f*p-f*v;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+S*o[c+w]+E*o[l+w]+x*o[d+w];return r}},Wo=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Xo=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),v=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*_;return r}let u=a*2,f=e-1;for(let _=0;_!==a;++_){let v=o[c+_],p=o[l+_],m=f*u+_*2,S=d[m],E=d[m+1],x=e*u+_*2,w=h[x],T=h[x+1],g=xp(n,t,S,w,s);r[_]=Bu(g,v,E,T,p)}return r}};function Bu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _p(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function xp(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Bu(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=_p(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),go(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break;case Dl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return vo;case this.InterpolantFactoryMethodBezier:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;go(this.settings)&&(kh(this.settings.inTangents,e),kh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;go(this.settings)&&(Hh(this.settings.inTangents,e),Hh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&af(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[u+_]||v!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Hh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Co;var di=class extends ln{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=$s;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="color";var Zo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Zo.prototype.ValueTypeName="number";var $o=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends ln{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=$s;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new Ko,Qo=class{constructor(e){this.manager=e!==void 0?e:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ll=new $e,Vh=new P,Gh=new P,vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===os||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new P,xo=new vt,Pn=new P,yr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,xo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_o,xo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new P,Wh=new oe,Xh=new oe,qt=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vl=class extends vr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Mr=class extends xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ii=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gl=class extends vr{constructor(){super(new Ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Li=class extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ts=-90,ns=1,ys=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new qt(ts,ns,e,t);r.layers=this.layers,this.add(r);let o=new qt(ts,ns,e,t);o.layers=this.layers,this.add(o);let a=new qt(ts,ns,e,t);a.layers=this.layers,this.add(a);let l=new qt(ts,ns,e,t);l.layers=this.layers,this.add(l);let c=new qt(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},jo=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Di=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vp(){this._document.hidden===!1&&this.reset()}var xc="\\[\\]\\.:\\/",yp=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",Mp="[^"+xc.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",vc),bp=/(WCOD+)?/.source.replace("WCOD",Mp),Ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),wp=new RegExp("^"+Sp+bp+Ep+Tp+"$"),Ap=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(e){let t=wp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Wl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var qh=new $e,br=class{constructor(e,t,n=0,s=1/0){this.ray=new ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(e,t=!0,n=[]){return Xl(e,this,n,t),n.sort(Yh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xl(e[s],this,n,t);return n.sort(Yh),n}};function Yh(i,e){return i.distance-e.distance}function Xl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Xl(r[o],e,t,!0)}}var Tc=class Tc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Tc.prototype.isMatrix2=!0;var ql=Tc;function yc(i,e,t,n){let s=Rp(n);switch(t){case sc:return i*e;case aa:return i*e/s.components*s.byteLength;case la:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case ca:return i*e*2/s.components*s.byteLength;case rc:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case ha:return i*e*4/s.components*s.byteLength;case Ir:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case Ur:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ba:case za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fr:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(i){switch(i){case tn:case ec:return{byteLength:1,components:1};case Es:case tc:case Et:return{byteLength:2,components:1};case ra:case oa:return{byteLength:2,components:4};case wn:case sa:case mn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ad(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Ip,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:$p,color_fragment:Jp,color_pars_fragment:Kp,color_pars_vertex:Qp,color_vertex:jp,common:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:om,colorspace_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:ym,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Em,lights_phong_fragment:Tm,lights_phong_pars_fragment:wm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Im,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Jm,normal_pars_vertex:Km,normal_vertex:Qm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:vg,specularmap_fragment:yg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:bg,transmission_fragment:Eg,transmission_pars_fragment:Tg,uv_pars_fragment:wg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distance_vert:Bg,distance_frag:zg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Jg,meshnormal_frag:Kg,meshphong_vert:Qg,meshphong_frag:jg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},Ee={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},On={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};On.physical={uniforms:$t([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Va={r:0,b:0,g:0},h0=new $e,ld=new Xe;ld.set(-1,0,0,0,1,0,0,0,1);function u0(i,e,t,n,s,r){let o=new Ne(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let x=S.backgroundBlurriness>0;E=e.get(E,x)}return E}function _(S){let E=!1,x=f(S);x===null?p(o,a):x&&x.isColor&&(p(x,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,E){let x=f(E);x&&x.isCubeTexture?(c===void 0&&(c=new ct(new on(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:Hi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ld),c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ct(new Zt(2,2),new st({name:"BackgroundMaterial",uniforms:Hi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(Va,_c(i)),t.buffers.color.setClear(Va.r,Va.g,Va.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:_,addToRenderList:v,dispose:m}}function d0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,U,O,C,z){let W=!1,k=d(L,C,O,U);r!==k&&(r=k,c(r.object)),W=f(L,C,O,z),W&&_(L,C,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(L,U,O,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,U,O,C){let z=C.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let k=L.isInstancedMesh===!0?L.id:0,se=W[k];se===void 0&&(se={},W[k]=se);let X=se[O.id];X===void 0&&(X={},se[O.id]=X);let K=X[z];return K===void 0&&(K=u(l()),X[z]=K),K}function u(L){let U=[],O=[],C=[];for(let z=0;z<t;z++)U[z]=0,O[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,U,O,C){let z=r.attributes,W=U.attributes,k=0,se=O.getAttributes();for(let X in se)if(se[X].location>=0){let ne=z[X],Ae=W[X];if(Ae===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),ne===void 0||ne.attribute!==Ae||Ae&&ne.data!==Ae.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function _(L,U,O,C){let z={},W=U.attributes,k=0,se=O.getAttributes();for(let X in se)if(se[X].location>=0){let ne=W[X];ne===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let Ae={};Ae.attribute=ne,ne&&ne.data&&(Ae.data=ne.data),z[X]=Ae,k++}r.attributes=z,r.attributesNum=k,r.index=C}function v(){let L=r.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let O=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;O[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),z[L]!==U&&(i.vertexAttribDivisor(L,U),z[L]=U)}function S(){let L=r.newAttributes,U=r.enabledAttributes;for(let O=0,C=U.length;O<C;O++)U[O]!==L[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function E(L,U,O,C,z,W,k){k===!0?i.vertexAttribIPointer(L,U,O,z,W):i.vertexAttribPointer(L,U,O,C,z,W)}function x(L,U,O,C){v();let z=C.attributes,W=O.getAttributes(),k=U.defaultAttributeValues;for(let se in W){let X=W[se];if(X.location>=0){let K=z[se];if(K===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let ne=K.normalized,Ae=K.itemSize,$=e.get(K);if($===void 0)continue;let B=$.buffer,Y=$.type,ie=$.bytesPerElement,de=Y===i.INT||Y===i.UNSIGNED_INT||K.gpuType===sa;if(K.isInterleavedBufferAttribute){let re=K.data,Se=re.isInterleavedBuffer===!0?re.stride:re.itemSize,ke=K.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re,re.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Re=0;Re<X.locationSize;Re++)E(X.location+Re,Ae/X.locationSize,Y,ne,Se*ie,(ke+Ae/X.locationSize*Re)*ie,de)}else{if(K.isInstancedBufferAttribute){for(let re=0;re<X.locationSize;re++)m(X.location+re,K.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let re=0;re<X.locationSize;re++)p(X.location+re);i.bindBuffer(i.ARRAY_BUFFER,B);for(let re=0;re<X.locationSize;re++)E(X.location+re,Ae/X.locationSize,Y,ne,Ae*ie,Ae/X.locationSize*re*ie,de)}}else if(k!==void 0){let ne=k[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(X.location,ne);break;case 3:i.vertexAttrib3fv(X.location,ne);break;case 4:i.vertexAttrib4fv(X.location,ne);break;default:i.vertexAttrib1fv(X.location,ne)}}}}S()}function w(){I();for(let L in n){let U=n[L];for(let O in U){let C=U[O];for(let z in C){let W=C[z];for(let k in W)h(W[k].object),delete W[k];delete C[z]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let O in U){let C=U[O];for(let z in C){let W=C[z];for(let k in W)h(W[k].object),delete W[k];delete C[z]}}delete n[L.id]}function g(L){for(let U in n){let O=n[U];for(let C in O){let z=O[C];if(z[L.id]===void 0)continue;let W=z[L.id];for(let k in W)h(W[k].object),delete W[k];delete z[L.id]}}}function y(L){for(let U in n){let O=n[U],C=L.isInstancedMesh===!0?L.id:0,z=O[C];if(z!==void 0){for(let W in z){let k=z[W];for(let se in k)h(k[se].object),delete k[se];delete z[W]}delete O[C],Object.keys(O).length===0&&delete n[U]}}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function f0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function p0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==An&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let y=g===Et&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==tn&&g!==mn&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,maxSamples:w,samples:T}}function m0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new rn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,E=S*4,x=m.clippingState||null;l.value=x,x=h(_,u,E,f);for(let w=0;w!==E;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let m=f+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,x=f;E!==v;++E,x+=4)o.copy(d[E]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var zr=class extends xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new st({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Kn});r.uniforms.tEquirect.value=t;let o=new ct(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=zt),new ys(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ku=256,g0=3,_0=20,cd=256,hd=16,x0=3,v0=new P,y0=new Ne,ws=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ys(1,10,null),this._boxMesh=new ct(new on(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=v0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(y0));let p=new ys(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ku,fc(e))}_fromTexture(e,t){e.mapping===Bi||e.mapping===bs?this._setSize(e.image.length===0?ku:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hu(e,!1,!1),n=Math.log2(e)-g0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bi||e.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=M0(),this._integrationMaterial=S0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/hd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-x0)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(cd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=b0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Hu(i,e,t){return new zr(i,{minFilter:Tn,generateMipmaps:e,type:Et,colorSpace:Js,depthBuffer:t})}function kr(i,e,t){return new st({name:i,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:Ot,blending:Kn,depthTest:!1,depthWrite:!1})}function M0(){return kr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function S0(){return kr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b0(){return kr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Vu(){return kr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gu(){return kr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function E0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ta||f===na)if(e.has(u)){let _=e.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new zr(_.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===ta||f===na,v=f===Bi||f===bs;if(_||v){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ws(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return _&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new ws(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ta?u.mapping=Bi:f===na&&(u.mapping=bs),u}function l(u){let f=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function T0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ws("WebGLRenderer: "+n+" extension not supported."),s}}}function w0(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let v=r.get(_);v&&(e.remove(v),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(_){let v=_.attributes;for(let p in v)e.update(v[p],i.ARRAY_BUFFER)}function d(_){let v=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let S=v!==null?v.array.length:p.array.length/3-1,E=p.count>=65535?nr:tr,x=new E(Math.ceil(S/3)*6,1),w=x.array;if(v!==null){let g=v.array;m=v.version;for(let y=0,I=0;y<S;y+=3){let A=g[y+0],L=g[y+1],U=g[y+2];w[I++]=A,w[I++]=L,w[I++]=L,w[I++]=U,w[I++]=U,w[I++]=A}}else{m=p.version;for(let g=0,y=0;g<S;g+=3){let I=g+0,A=g+1,L=g+2;w[y++]=I,w[y++]=A,w[y++]=A,w[y++]=L,w[y++]=L,w[y++]=I}}x.version=m;let T=r.get(_);T&&e.remove(T),r.set(_,x)}function u(_){let v=r.get(_);if(v){let p=_.index;p!==null&&v.version<p.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let v=s[_].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function A0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function R0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let I=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let x=a.attributes.position.count*E,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*w*4*d),g=new js(T,x,w,d);g.type=mn,g.needsUpdate=!0;let y=E*4;for(let A=0;A<d;A++){let L=p[A],U=m[A],O=S[A],C=x*w*4*A;for(let z=0;z<L.count;z++){let W=z*y;f===!0&&(s.fromBufferAttribute(L,z),T[C+W+0]=s.x,T[C+W+1]=s.y,T[C+W+2]=s.z,T[C+W+3]=0),_===!0&&(s.fromBufferAttribute(U,z),T[C+W+4]=s.x,T[C+W+5]=s.y,T[C+W+6]=s.z,T[C+W+7]=0),v===!0&&(s.fromBufferAttribute(O,z),T[C+W+8]=s.x,T[C+W+9]=s.y,T[C+W+10]=s.z,T[C+W+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new oe(x,w)},n.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function P0(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var I0={[Er]:"LINEAR_TONE_MAPPING",[Tr]:"REINHARD_TONE_MAPPING",[wr]:"CINEON_TONE_MAPPING",[Oi]:"ACES_FILMIC_TONE_MAPPING",[Rr]:"AGX_TONE_MAPPING",[Cr]:"NEUTRAL_TONE_MAPPING",[Ar]:"CUSTOM_TONE_MAPPING"};function L0(i,e,t,n,s,r){let o=new xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Tt;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ct(h,d),f=new Ii(-1,1,1,-1,0,1),_=null,v=null,p=!1,m,S=null,E=[],x=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<E.length;g++){let y=E[g];y.setSize&&y.setSize(w,T)}},this.setEffects=function(w){E=w,x=E.length>0&&E[0].isRenderPass===!0;let T=o.width,g=o.height;E.length>0&&a===null&&(a=new xt(T,g,{type:Et,depthBuffer:!1,stencilBuffer:!1}),l=new xt(T,g,{type:Et,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&E.some(I=>I.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Jn(T,g),r===!0&&(c.format=Qn,c.type=zi)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let I=0;I<E.length;I++){let A=E[I];A.setSize&&A.setSize(T,g),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===Un&&E.length===0)return!1;if(S=T,T!==null){let g=T.width,y=T.height;(o.width!==g||o.height!==y)&&this.setSize(g,y)}return x===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Un,!0},this.hasRenderPass=function(){return x},this.end=function(w,T){w.toneMapping=m,p=!0;let g=o,y=a;for(let I=0;I<E.length;I++){let A=E[I];A.enabled!==!1&&(A.render(w,y,g,T),A.needsSwap!==!1&&(g=y,y=y===a?l:a))}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,d.defines={},Qe.getTransfer(_)===at&&(d.defines.SRGB_TRANSFER="");let I=I0[v];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(u,f),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var ud=new Kt,dd=new Jn(1,1),fd=new rr(1),pd=new js,md=new Lo,gd=new sr,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function As(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function D0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function O0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Lt(t,n)}}function B0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Lt(t,n)}}function z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Lt(t,n)}}function k0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function W0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function qa(i){return i.version===0&&(i.compareFunction=cc,i.needsUpdate=!0),i}function Z0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=qa(dd):r=ud,t.setTexture2D(e||r,s)}function $0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||md,s)}function J0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=qa(fd):r=gd,t.setTextureCube(e||r,s)}function K0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pd,s)}function Q0(i){switch(i){case 5126:return D0;case 35664:return N0;case 35665:return U0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}function j0(i,e){i.uniform1fv(this.addr,e)}function e_(i,e){let t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function t_(i,e){let t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function n_(i,e){let t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function i_(i,e){let t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s_(i,e){let t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r_(i,e){let t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o_(i,e){i.uniform1iv(this.addr,e)}function a_(i,e){i.uniform2iv(this.addr,e)}function l_(i,e){i.uniform3iv(this.addr,e)}function c_(i,e){i.uniform4iv(this.addr,e)}function h_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function p_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qa(dd):o=ud;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||md,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=qa(fd):o=gd;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function __(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pd,r[o])}function x_(i){switch(i){case 5126:return j0;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q0(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x_(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function $u(i,e){i.seq.push(e),i.map[e.id]=e}function v_(i,e,t){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),o=wc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$u(t,c===void 0?new Rc(a,i,e):new Cc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Pc(a),$u(t,d)),t=d}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);v_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y_=37297,M_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ku=new Xe;function b_(i){Qe._getMatrix(Ku,Qe.workingColorSpace,i);let e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ks:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),a)}else return r}function E_(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var T_={[Er]:"Linear",[Tr]:"Reinhard",[wr]:"Cineon",[Oi]:"ACESFilmic",[Rr]:"AgX",[Cr]:"Neutral",[Ar]:"Custom"};function w_(i,e){let t=T_[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new P;function A_(){Qe.getLuminanceCoefficients(Ga);let i=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function C_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Br(i){return i!==""}function ju(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(I_,L_)}function L_(i,e){let t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ic(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(D_,N_)}function N_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var U_={[Ni]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function F_(i){return U_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O_={[bs]:"ENVMAP_MODE_REFRACTION"};function B_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[mu]:"ENVMAP_BLENDING_MIX",[gu]:"ENVMAP_BLENDING_ADD"};function k_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=F_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=B_(t),d=k_(t),u=R_(t),f=C_(r),_=s.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Br).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(v=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?qe.tonemapping_pars_fragment:"",t.toneMapping!==Un?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=Ic(o),o=ju(o,t),o=ed(o,t),a=Ic(a),a=ju(a,t),a=ed(a,t),o=td(o),a=td(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+v+o,E=m+p+a,x=Ju(s,s.VERTEX_SHADER,S),w=Ju(s,s.FRAGMENT_SHADER,E);s.attachShader(_,x),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",C=L.trim(),z=U.trim(),W=O.trim(),k=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,x,w);else{let X=Qu(s,x,"vertex"),K=Qu(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+X+`
`+K)}else C!==""?ze("WebGLProgram: Program Info Log:",C):(z===""||W==="")&&(se=!1);se&&(A.diagnostics={runnable:k,programLog:C,vertexShader:{log:z,prefix:v},fragmentShader:{log:W,prefix:p}})}s.deleteShader(x),s.deleteShader(w),g=new Ts(s,_),y=P_(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,y_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=w,this}var V_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}};function G_(i){return i===pi||i===Ur||i===Fr}function W_(i,e,t,n,s,r){let o=new hs,a=new Lc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,y,I,A,L,U){let O=A.fog,C=L.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||z,W),se=u[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ne=K!==void 0?K.length:0,Ae=0;C.morphAttributes.position!==void 0&&(Ae=1),C.morphAttributes.normal!==void 0&&(Ae=2),C.morphAttributes.color!==void 0&&(Ae=3);let $,B,Y,ie;if(se){let be=On[se];$=be.vertexShader,B=be.fragmentShader}else{$=g.vertexShader,B=g.fragmentShader;let be=a.getVertexShaderStage(g),ht=a.getFragmentShaderStage(g);a.update(g,be,ht),Y=be.id,ie=ht.id}let de=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Se=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,Re=!!g.map,Ge=!!g.matcap,Fe=!!k,J=Fe&&k.isPMREMTexture===!0,ce=!!g.aoMap,he=!!g.lightMap,Te=!!g.bumpMap&&g.wireframe===!1,fe=!!g.normalMap,He=!!g.displacementMap,Le=!!g.emissiveMap,et=!!g.metalnessMap,tt=!!g.roughnessMap,ot=g.anisotropy>0,F=g.clearcoat>0,wt=g.diffuseRoughness>0,Ke=g.dispersion>0,dt=g.retroreflectivity>0,ve=g.iridescence>0,bt=g.sheen>0,Be=g.transmission>0,We=ot&&!!g.anisotropyMap,R=F&&!!g.clearcoatMap,M=F&&!!g.clearcoatNormalMap,V=F&&!!g.clearcoatRoughnessMap,ae=wt&&!!g.diffuseRoughnessMap,te=ve&&!!g.iridescenceMap,pe=ve&&!!g.iridescenceThicknessMap,ye=bt&&!!g.sheenColorMap,Q=bt&&!!g.sheenRoughnessMap,j=!!g.specularMap,ge=!!g.specularColorMap,D=!!g.specularIntensityMap,ee=Be&&!!g.transmissionMap,Z=Be&&!!g.thicknessMap,_e=!!g.gradientMap,ue=!!g.alphaMap,me=g.alphaTest>0,Ue=!!g.alphaHash,Je=!!g.extensions,le=Un;g.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(le=i.toneMapping);let Oe=J?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ze={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:$,fragmentShader:B,defines:g.defines,customVertexShaderID:Y,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Se,instancingColor:Se&&L.instanceColor!==null,instancingMorph:Se&&L.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:Ge,envMap:Fe,envMapMode:Fe&&k.mapping,envMapPMREM:J,envMapMaxLod:J?Oe.length-1:null,envMapSize:J?Oe[0].width:null,aoMap:ce,lightMap:he,bumpMap:Te,normalMap:fe,displacementMap:He,emissiveMap:Le,normalMapObjectSpace:fe&&g.normalMapType===vu,normalMapTangentSpace:fe&&g.normalMapType===Ha,packedNormalMap:fe&&g.normalMapType===Ha&&G_(g.normalMap.format),metalnessMap:et,roughnessMap:tt,anisotropy:ot,anisotropyMap:We,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:wt,diffuseRoughnessMap:ae,dispersion:Ke,retroreflection:dt,iridescence:ve,iridescenceMap:te,iridescenceThicknessMap:pe,sheen:bt,sheenColorMap:ye,sheenRoughnessMap:Q,specularMap:j,specularColorMap:ge,specularIntensityMap:D,transmission:Be,transmissionMap:ee,thicknessMap:Z,gradientMap:_e,opaque:g.transparent===!1&&g.blending===Ss&&g.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:Ue,combine:g.combine,mapUv:Re&&f(g.map.channel),aoMapUv:ce&&f(g.aoMap.channel),lightMapUv:he&&f(g.lightMap.channel),bumpMapUv:Te&&f(g.bumpMap.channel),normalMapUv:fe&&f(g.normalMap.channel),displacementMapUv:He&&f(g.displacementMap.channel),emissiveMapUv:Le&&f(g.emissiveMap.channel),metalnessMapUv:et&&f(g.metalnessMap.channel),roughnessMapUv:tt&&f(g.roughnessMap.channel),anisotropyMapUv:We&&f(g.anisotropyMap.channel),clearcoatMapUv:R&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(g.sheenRoughnessMap.channel),specularMapUv:j&&f(g.specularMap.channel),specularColorMapUv:ge&&f(g.specularColorMap.channel),specularIntensityMapUv:D&&f(g.specularIntensityMap.channel),transmissionMapUv:ee&&f(g.transmissionMap.channel),thicknessMapUv:Z&&f(g.thicknessMap.channel),alphaMapUv:ue&&f(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(fe||ot),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Re||ue),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ae,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&Qe.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:Le&&g.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kt,flipSided:g.side===Ot,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Je&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&g.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function v(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)y.push(I),y.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(p(y,g),m(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function p(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function m(g,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function S(g){let y=u[g.type],I;if(y){let A=On[y];I=Rn.clone(A.uniforms)}else I=g.uniforms;return I}function E(g,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new H_(i,y,g,s),c.push(I),h.set(y,I)),I}function x(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:S,acquireProgram:E,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:T}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,v,p,m){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=_,S.materialVariant=o(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function l(u,f,_,v,p,m,S){S.reversedDepth===!0&&(p=-p);let E=a(u,f,_,v,p,m);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(u,f,_,v,p,m){let S=a(u,f,_,v,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||q_),n.length>1&&n.sort(f||id),s.length>1&&s.sort(f||id)}function d(){for(let u=e,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new sd,i.set(n,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function $_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var J_=0;function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){let e=new Z_,t=$_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new $e,o=new $e;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,v=0,p=0,m=0,S=0,E=0,x=0,w=0,T=0,g=0,y=0,I=0,A=0;c.sort(K_);for(let U=0,O=c.length;U<O;U++){let C=c[U],z=C.color,W=C.intensity,k=C.distance,se=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pi?se=C.shadow.map.texture:se=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*W,d+=z.g*W,u+=z.b*W;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],W);A++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,ne=t.get(C);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=se;let Ae=K.getViewportCount();for(let $=0;$<Ae;$++)n.sunShadowMatrix[v+$]=K.getMatrix($),n.sunShadowCascade[v+$]=K._cascadeData[$];v+=Ae,_++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,ne=t.get(C);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=X,p++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(z).multiplyScalar(W),X.distance=k,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[S]=X;let K=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,K.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[S]=K.matrix,C.castShadow){let ne=t.get(C);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,n.spotShadow[S]=ne,n.spotShadowMap[S]=se,g++}S++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(z).multiplyScalar(W),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=X,E++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let K=C.shadow,ne=t.get(C);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=se,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(W),X.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[x]=X,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==x||L.numSunShadows!==_||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==g||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=x,L.numSunShadows=_,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=g,L.numSpotMaps=y,L.numLightProbes=A,n.version=J_++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0,p=0,m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let x=c[S];if(x.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(x.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(x.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function rd(i){let e=new Q_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function j_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rd(i),e.set(s,[a])):r>=o.length?(a=new rd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],ix=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],od=new $e,Or=new P,Ac=new P;function sx(i,e,t){let n=new ci,s=new oe,r=new oe,o=new pt,a=new vs,l=new Vo,c={},h=t.maxTextureSize,d={[Nn]:Ot,[Ot]:Nn,[kt]:kt},u=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Tt;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ct(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ni;let m=this.type;this.render=function(T,g,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Jh&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ni);let I=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==this.type;O&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=T.length;C<z;C++){let W=T[C],k=W.shadow;if(k===void 0){ze("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let se=k.getFrameExtents();s.multiply(se),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,k.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ms){if(W.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xt(s.x,s.y,{format:pi,type:Et,minFilter:zt,magFilter:zt,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Jn(s.x,s.y,mn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Yn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft}else W.isPointLight?(k.map=new zr(s.x),k.map.depthTexture=new rr(s.x,wn)):(k.map=new xt(s.x,s.y),k.map.depthTexture=new Jn(s.x,s.y,wn)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Yn,this.type===Ni?(k.map.depthTexture.compareFunction=X?lc:ac,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let K=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();W.isPointLight!==!0&&k.updateMatrices(W,y);let ne=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:y.layers;for(let Ae=0;Ae<K;Ae++){let $=k.getCamera(Ae);if(W.isPointLight){let B=k.camera,Y=k.matrix,ie=W.distance||B.far;ie!==B.far&&(B.far=ie,B.updateProjectionMatrix()),Or.setFromMatrixPosition(W.matrixWorld),B.position.copy(Or),Ac.copy(B.position),Ac.add(nx[Ae]),B.up.copy(ix[Ae]),B.lookAt(Ac),B.updateMatrixWorld(),Y.makeTranslation(-Or.x,-Or.y,-Or.z),od.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k._frustum.setFromProjectionMatrix(od,B.coordinateSystem,B.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(k.map),i.clear());let B=k.getViewport(Ae);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),U.viewport(o)}n=k.getFrustum(Ae),x(g,y,$,W,ne,this.type)}k.isPointLightShadow!==!0&&this.type===Ms&&S(k,y),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,A,L)};function S(T,g){let y=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new xt(s.x,s.y,{format:pi,type:Et}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,y,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,y,f,v,null)}function E(T,g,y,I){let A=null,L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=A.uuid,O=g.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let z=C[O];z===void 0&&(z=A.clone(),C[O]=z,g.addEventListener("dispose",w)),A=z}if(A.visible=g.visible,A.wireframe=g.wireframe,I===Ms?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:d[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=i.properties.get(A);U.light=y}return A}function x(T,g,y,I,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let C=e.update(T),z=T.material;if(Array.isArray(z)){let W=C.groups;for(let k=0,se=W.length;k<se;k++){let X=W[k],K=z[X.materialIndex];if(K&&K.visible){let ne=E(T,K,I,L);T.onBeforeShadow(i,T,g,y,C,ne,X),i.renderBufferDirect(y,null,C,ne,T,X),T.onAfterShadow(i,T,g,y,C,ne,X)}}}else if(z.visible){let W=E(T,z,I,L);T.onBeforeShadow(i,T,g,y,C,W,null),i.renderBufferDirect(y,null,C,W,T,null),T.onAfterShadow(i,T,g,y,C,W,null)}}let O=T.children;for(let C=0,z=O.length;C<z;C++)x(O[C],g,y,I,A,L)}function w(T){T.target.removeEventListener("dispose",w);for(let y in c){let I=c[y],A=T.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function rx(i,e){function t(){let D=!1,ee=new pt,Z=null,_e=new pt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){D=ue},setClear:function(ue,me,Ue,Je,le){le===!0&&(ue*=Je,me*=Je,Ue*=Je),ee.set(ue,me,Ue,Je),_e.equals(ee)===!1&&(i.clearColor(ue,me,Ue,Je),_e.copy(ee))},reset:function(){D=!1,Z=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,ee=!1,Z=null,_e=null,ue=null;return{setReversed:function(me){if(ee!==me){let Ue=e.get("EXT_clip_control");me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ee=me;let Je=ue;ue=null,this.setClear(Je)}},getReversed:function(){return ee},setTest:function(me){me?re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(me){Z!==me&&!D&&(i.depthMask(me),Z=me)},setFunc:function(me){if(ee&&(me=Pu[me]),_e!==me){switch(me){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=me}},setLocked:function(me){D=me},setClear:function(me){ue!==me&&(ue=me,ee&&(me=1-me),i.clearDepth(me))},reset:function(){D=!1,Z=null,_e=null,ue=null,ee=!1}}}function s(){let D=!1,ee=null,Z=null,_e=null,ue=null,me=null,Ue=null,Je=null,le=null;return{setTest:function(Oe){D||(Oe?re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!D&&(i.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,Ze,be){(Z!==Oe||_e!==Ze||ue!==be)&&(i.stencilFunc(Oe,Ze,be),Z=Oe,_e=Ze,ue=be)},setOp:function(Oe,Ze,be){(me!==Oe||Ue!==Ze||Je!==be)&&(i.stencilOp(Oe,Ze,be),me=Oe,Ue=Ze,Je=be)},setLocked:function(Oe){D=Oe},setClear:function(Oe){le!==Oe&&(i.clearStencil(Oe),le=Oe)},reset:function(){D=!1,ee=null,Z=null,_e=null,ue=null,me=null,Ue=null,Je=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],v=null,p=!1,m=null,S=null,E=null,x=null,w=null,T=null,g=null,y=new Ne(0,0,0),I=0,A=!1,L=null,U=null,O=null,C=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=se>=2);let K=null,ne={},Ae=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),B=new pt().fromArray(Ae),Y=new pt().fromArray($);function ie(D,ee,Z,_e){let ue=new Uint8Array(4),me=i.createTexture();i.bindTexture(D,me),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<Z;Ue++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ee+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return me}let de={};de[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(ss),Te(!1),fe(Yl),re(i.CULL_FACE),ce(Kn);function re(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ke(D,ee){return u[D]!==ee?(i.bindFramebuffer(D,ee),u[D]=ee,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Re(D,ee){let Z=_,_e=!1;if(D){Z=f.get(ee),Z===void 0&&(Z=[],f.set(ee,Z));let ue=D.textures;if(Z.length!==ue.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ue=ue.length;me<Ue;me++)Z[me]=i.COLOR_ATTACHMENT0+me;Z.length=ue.length,_e=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,_e=!0);_e&&i.drawBuffers(Z)}function Ge(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let Fe={[Fi]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[jh]:i.FUNC_REVERSE_SUBTRACT};Fe[eu]=i.MIN,Fe[tu]=i.MAX;let J={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(D,ee,Z,_e,ue,me,Ue,Je,le,Oe){if(D===Kn){p===!0&&(Se(i.BLEND),p=!1);return}if(p===!1&&(re(i.BLEND),p=!0),D!==Kh){if(D!==m||Oe!==A){if((S!==Fi||w!==Fi)&&(i.blendEquation(i.FUNC_ADD),S=Fi,w=Fi),Oe)switch(D){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",D);break}E=null,x=null,T=null,g=null,y.set(0,0,0),I=0,m=D,A=Oe}return}ue=ue||ee,me=me||Z,Ue=Ue||_e,(ee!==S||ue!==w)&&(i.blendEquationSeparate(Fe[ee],Fe[ue]),S=ee,w=ue),(Z!==E||_e!==x||me!==T||Ue!==g)&&(i.blendFuncSeparate(J[Z],J[_e],J[me],J[Ue]),E=Z,x=_e,T=me,g=Ue),(Je.equals(y)===!1||le!==I)&&(i.blendColor(Je.r,Je.g,Je.b,le),y.copy(Je),I=le),m=D,A=!1}function he(D,ee){D.side===kt?Se(i.CULL_FACE):re(i.CULL_FACE);let Z=D.side===Ot;ee&&(Z=!Z),Te(Z),D.blending===Ss&&D.transparent===!1?ce(Kn):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let _e=D.stencilWrite;a.setTest(_e),_e&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function fe(D){D!==Zh?(re(i.CULL_FACE),D!==U&&(D===Yl?i.cullFace(i.BACK):D===$h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=D}function He(D){D!==O&&(k&&i.lineWidth(D),O=D)}function Le(D,ee,Z){D?(re(i.POLYGON_OFFSET_FILL),(C!==ee||z!==Z)&&(C=ee,z=Z,o.getReversed()&&(ee=-ee,Z=-Z),i.polygonOffset(ee,Z))):Se(i.POLYGON_OFFSET_FILL)}function et(D){D?re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function tt(D){D===void 0&&(D=i.TEXTURE0+W-1),K!==D&&(i.activeTexture(D),K=D)}function ot(D,ee,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+W-1:Z=K);let _e=ne[Z];_e===void 0&&(_e={type:void 0,texture:void 0},ne[Z]=_e),(_e.type!==D||_e.texture!==ee)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(D,ee||de[D]),_e.type=D,_e.texture=ee)}function F(){let D=ne[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function wt(){try{i.compressedTexImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function Ke(){try{i.compressedTexImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function dt(){try{i.texSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ve(){try{i.texSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function We(){try{i.texStorage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function M(){try{i.texImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function V(){try{i.texImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ae(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function te(D,ee){d[D]!==ee&&(i.pixelStorei(D,ee),d[D]=ee)}function pe(D){B.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),B.copy(D))}function ye(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Q(D,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let _e=Z.get(D);_e===void 0&&(_e=i.getUniformBlockIndex(ee,D.name),i.uniformBlockBinding(ee,_e,_e),Z.set(D,_e))}function j(D,ee,Z){let ue=c.get(ee).get(D);l[ue]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,Z),l[ue]=Z)}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,ne={},u={},l={},f=new WeakMap,_=[],v=null,p=!1,m=null,S=null,E=null,x=null,w=null,T=null,g=null,y=new Ne(0,0,0),I=0,A=!1,L=null,U=null,O=null,C=null,z=null,B.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Se,bindFramebuffer:ke,drawBuffers:Re,useProgram:Ge,setBlending:ce,setMaterial:he,setFlipSided:Te,setCullFace:fe,setLineWidth:He,setPolygonOffset:Le,setScissorTest:et,activeTexture:tt,bindTexture:ot,unbindTexture:F,compressedTexImage2D:wt,compressedTexImage3D:Ke,texImage2D:M,texImage3D:V,pixelStorei:te,getParameter:ae,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:We,texStorage3D:R,texSubImage2D:dt,texSubImage3D:ve,compressedTexSubImage2D:bt,compressedTexSubImage3D:Be,scissor:pe,viewport:ye,reset:ge}}function ox(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,v=new FinalizationRegistry(R=>_.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return p?new OffscreenCanvas(R,M):Qs("canvas")}function S(R,M,V){let ae=1,te=We(R);if((te.width>V||te.height>V)&&(ae=V/Math.max(te.width,te.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(ae*te.width),ye=Math.floor(ae*te.height);u===void 0&&(u=m(pe,ye));let Q=M?m(pe,ye):u;return Q.width=pe,Q.height=ye,Q.getContext("2d").drawImage(R,0,0,pe,ye),ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+ye+")."),Q}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function E(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,M,V,ae,te,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;ae&&(ye=e.get("EXT_texture_norm16"),ye||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.R16_EXT),V===i.SHORT&&ye&&(Q=ye.R16_SNORM_EXT)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),M===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RG16_EXT),V===i.SHORT&&ye&&(Q=ye.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&(V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGB16_EXT),V===i.SHORT&&ye&&(Q=ye.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),M===i.RGBA){let j=pe?Ks:Qe.getTransfer(te);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=j===at?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGBA16_EXT),V===i.SHORT&&ye&&(Q=ye.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,M){let V;return R?M===null||M===wn||M===zi?V=i.DEPTH24_STENCIL8:M===mn?V=i.DEPTH32F_STENCIL8:M===Es&&(V=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wn||M===zi?V=i.DEPTH_COMPONENT24:M===mn?V=i.DEPTH_COMPONENT32F:M===Es&&(V=i.DEPTH_COMPONENT16),V}function y(R,M){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function I(R){let M=new WeakRef(R);n.get(R).__ref=M,_.add(M),v.register(R,M,M)}function A(R){let M=n.get(R).__ref;M!==void 0&&(_.delete(M),v.unregister(M))}function L(R){O(R.target)}function U(R){C(R.target)}function O(R){R.removeEventListener("dispose",L),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function C(R){R.removeEventListener("dispose",U),A(R),se(R)}function z(){for(let R of _){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?C(M):O(M))}_.clear(),d.clear()}function W(R){let M=n.get(R);if(M.__webglInit===void 0)return;let V=R.source,ae=f.get(V);if(ae){let te=ae[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&k(R),Object.keys(ae).length===0&&f.delete(V)}n.remove(R)}function k(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let V=R.source,ae=f.get(V);delete ae[M.__cacheKey],o.memory.textures--}function se(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&O(V),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let pe=0;pe<M.__webglFramebuffer[te].length;pe++)i.deleteFramebuffer(M.__webglFramebuffer[te][pe]);else i.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)i.deleteFramebuffer(M.__webglFramebuffer[te]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ae=R.textures;for(let te=0,pe=ae.length;te<pe;te++){let ye=n.get(ae[te]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(ae[te])}n.remove(R)}let X=0;function K(){X=0}function ne(){return X}function Ae(R){X=R}function $(){let R=X;return R>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function B(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){let V=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let ae=R.image;if(ae===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{he(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function ie(R,M){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){he(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function de(R,M){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){he(V,R,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function re(R,M){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Te(V,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}let Se={[rs]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},ke={[Ft]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},Re={[Mu]:i.NEVER,[cc]:i.ALWAYS,[Su]:i.LESS,[ac]:i.LEQUAL,[bu]:i.EQUAL,[lc]:i.GEQUAL,[Eu]:i.GREATER,[Tu]:i.NOTEQUAL};function Ge(R,M){if(M.type===mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zt||M.magFilter===ia||M.magFilter===Pr||M.magFilter===Tn||M.minFilter===zt||M.minFilter===ia||M.minFilter===Pr||M.minFilter===Tn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Se[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Se[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Se[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ke[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ke[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ft||M.minFilter!==Pr&&M.minFilter!==Tn||M.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Fe(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",L),I(M));let ae=M.source,te=f.get(ae);te===void 0&&(te={},f.set(ae,te));let pe=B(M);if(pe!==R.__cacheKey){te[pe]===void 0&&(te[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[pe].usedTimes++;let ye=te[R.__cacheKey];ye!==void 0&&(te[R.__cacheKey].usedTimes--,ye.usedTimes===0&&k(M)),R.__cacheKey=pe,R.__webglTexture=te[pe].texture}return V}function J(R,M,V){return Math.floor(Math.floor(R/V)/M)}function ce(R,M,V,ae){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,ae,M.data);else{pe.sort((D,ee)=>D.start-ee.start);let ye=0;for(let D=1;D<pe.length;D++){let ee=pe[ye],Z=pe[D],_e=ee.start+ee.count,ue=J(Z.start,M.width,4),me=J(ee.start,M.width,4);Z.start<=_e+1&&ue===me&&J(Z.start+Z.count-1,M.width,4)===ue?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++ye,pe[ye]=Z)}pe.length=ye+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let D=0,ee=pe.length;D<ee;D++){let Z=pe[D],_e=Math.floor(Z.start/4),ue=Math.ceil(Z.count/4),me=_e%M.width,Ue=Math.floor(_e/M.width),Je=ue,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(i.TEXTURE_2D,0,me,Ue,Je,le,V,ae,M.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function he(R,M,V){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);let te=Fe(R,M),pe=M.source;t.bindTexture(ae,R.__webglTexture,i.TEXTURE0+V);let ye=n.get(pe);if(pe.version!==ye.__version||te===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let le=Qe.getPrimaries(Qe.workingColorSpace),Oe=M.colorSpace===jn?null:Qe.getPrimaries(M.colorSpace),Ze=M.colorSpace===jn||le===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=S(M.image,!1,s.maxTextureSize);j=Be(M,j);let ge=r.convert(M.format,M.colorSpace),D=r.convert(M.type),ee=T(M.internalFormat,ge,D,M.normalized,M.colorSpace,M.isVideoTexture);Ge(ae,M);let Z,_e=M.mipmaps,ue=M.isVideoTexture!==!0,me=ye.__version===void 0||te===!0,Ue=pe.dataReady,Je=y(M,j);if(M.isDepthTexture)ee=g(M.format===Qn,M.type),me&&(ue?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,ge,D,null));else if(M.isDataTexture)if(_e.length>0){ue&&me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,_e[0].width,_e[0].height);for(let le=0,Oe=_e.length;le<Oe;le++)Z=_e[le],ue?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,ge,D,Z.data):t.texImage2D(i.TEXTURE_2D,le,ee,Z.width,Z.height,0,ge,D,Z.data);M.generateMipmaps=!1}else ue?(me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,j.width,j.height),Ue&&ce(M,j,ge,D)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,ge,D,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,ee,_e[0].width,_e[0].height,j.depth);for(let le=0,Oe=_e.length;le<Oe;le++)if(Z=_e[le],M.format!==An)if(ge!==null)if(ue){if(Ue)if(M.layerUpdates.size>0){let Ze=yc(Z.width,Z.height,M.format,M.type);for(let be of M.layerUpdates){let ht=Z.data.subarray(be*Ze/Z.data.BYTES_PER_ELEMENT,(be+1)*Ze/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,be,Z.width,Z.height,1,ge,ht)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,j.depth,ge,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,j.depth,0,Z.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,j.depth,ge,D,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,j.depth,0,ge,D,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&me&&t.texStorage2D(i.TEXTURE_2D,Je,ee,_e[0].width,_e[0].height);for(let le=0,Oe=_e.length;le<Oe;le++)Z=_e[le],M.format!==An?ge!==null?ue?Ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,ge,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ee,Z.width,Z.height,0,Z.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,ge,D,Z.data):t.texImage2D(i.TEXTURE_2D,le,ee,Z.width,Z.height,0,ge,D,Z.data)}else if(M.isDataArrayTexture)if(ue){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,ee,j.width,j.height,j.depth),Ue)if(M.layerUpdates.size>0){let le=yc(j.width,j.height,M.format,M.type);for(let Oe of M.layerUpdates){let Ze=j.data.subarray(Oe*le/j.data.BYTES_PER_ELEMENT,(Oe+1)*le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,j.width,j.height,1,ge,D,Ze)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ge,D,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,ge,D,j.data);else if(M.isData3DTexture)ue?(me&&t.texStorage3D(i.TEXTURE_3D,Je,ee,j.width,j.height,j.depth),Ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ge,D,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,ge,D,j.data);else if(M.isFramebufferTexture){if(me)if(ue)t.texStorage2D(i.TEXTURE_2D,Je,ee,j.width,j.height);else{let le=j.width,Oe=j.height;for(let Ze=0;Ze<Je;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,ee,le,Oe,0,ge,D,null),le>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),j.parentNode!==le){le.appendChild(j),d.add(M),le.onpaint=Oe=>{let Ze=Oe.changedElements;for(let be of d)Ze.includes(be.image)&&(be.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Ze=i.RGBA,be=i.RGBA,ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ze,be,ht,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(ue&&me){let le=We(_e[0]);t.texStorage2D(i.TEXTURE_2D,Je,ee,le.width,le.height)}for(let le=0,Oe=_e.length;le<Oe;le++)Z=_e[le],ue?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge,D,Z):t.texImage2D(i.TEXTURE_2D,le,ee,ge,D,Z);M.generateMipmaps=!1}else if(ue){if(me){let le=We(j);t.texStorage2D(i.TEXTURE_2D,Je,ee,le.width,le.height)}Ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,D,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,ge,D,j);E(M)&&M.mipmapsAutoUpdate===!0&&x(ae),ye.__version=pe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,V){if(M.image.length!==6)return;let ae=Fe(R,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let pe=n.get(te);if(te.version!==pe.__version||ae===!0){t.activeTexture(i.TEXTURE0+V);let ye=Qe.getPrimaries(Qe.workingColorSpace),Q=M.colorSpace===jn?null:Qe.getPrimaries(M.colorSpace),j=M.colorSpace===jn||ye===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ge=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let be=0;be<6;be++)!ge&&!D?ee[be]=S(M.image[be],!0,s.maxCubemapSize):ee[be]=D?M.image[be].image:M.image[be],ee[be]=Be(M,ee[be]);let Z=ee[0],_e=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),me=T(M.internalFormat,_e,ue,M.normalized,M.colorSpace),Ue=M.isVideoTexture!==!0,Je=pe.__version===void 0||ae===!0,le=te.dataReady,Oe=y(M,Z);Ge(i.TEXTURE_CUBE_MAP,M);let Ze;if(M.isDepthTexture){if(me=g(M.format===Qn,M.type),Je)if(Ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,me,Z.width,Z.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,Z.width,Z.height,0,_e,ue,null)}else if(ge){Ue&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,me,Z.width,Z.height);for(let be=0;be<6;be++){Ze=ee[be].mipmaps;for(let ht=0;ht<Ze.length;ht++){let Dt=Ze[ht];M.format!==An?_e!==null?Ue?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht,0,0,Dt.width,Dt.height,_e,Dt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht,me,Dt.width,Dt.height,0,Dt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht,0,0,Dt.width,Dt.height,_e,ue,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht,me,Dt.width,Dt.height,0,_e,ue,Dt.data)}}}else{if(Ze=M.mipmaps,Ue&&Je){Ze.length>0&&Oe++;let be=We(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,me,be.width,be.height)}for(let be=0;be<6;be++)if(D){Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ee[be].width,ee[be].height,_e,ue,ee[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,ee[be].width,ee[be].height,0,_e,ue,ee[be].data);for(let ht=0;ht<Ze.length;ht++){let ti=Ze[ht].image[be].image;Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht+1,0,0,ti.width,ti.height,_e,ue,ti.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht+1,me,ti.width,ti.height,0,_e,ue,ti.data)}}else{Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,_e,ue,ee[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,me,_e,ue,ee[be]);for(let ht=0;ht<Ze.length;ht++){let Dt=Ze[ht];Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht+1,0,0,_e,ue,Dt.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ht+1,me,_e,ue,Dt.image[be])}}}E(M)&&M.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),pe.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function fe(R,M,V,ae,te,pe){let ye=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),j=T(V.internalFormat,ye,Q,V.normalized,V.colorSpace),ge=n.get(M),D=n.get(V);if(D.__renderTarget=M,!ge.__hasExternalTextures){let ee=Math.max(1,M.width>>pe),Z=Math.max(1,M.height>>pe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,pe,j,ee,Z,M.depth,0,ye,Q,null):t.texImage2D(te,pe,j,ee,Z,0,ye,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ve(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,te,D.__webglTexture,0,dt(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,te,D.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(R,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let ae=M.depthTexture,te=ae&&ae.isDepthTexture?ae.type:null,pe=g(M.stencilBuffer,te),ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(M),pe,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(M),pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,R)}else{let ae=M.textures;for(let te=0;te<ae.length;te++){let pe=ae[te],ye=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),j=T(pe.internalFormat,ye,Q,pe.normalized,pe.colorSpace);ve(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(M),j,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,M,V){let ae=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(M.depthTexture);te.__renderTarget=M;let pe=ae?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||pe.width!==M.width||pe.height!==M.height)&&(pe.width=M.width,pe.height=M.height,M.depthTexture.needsUpdate=!0),ae?re(M.depthTexture,0):Y(M.depthTexture,0);let ye=te.__webglTexture,Q=dt(M),j=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ge=M.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yn)ve(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,j,ye,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ge,j,ye,0);else if(M.depthTexture.format===Qn)ve(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,j,ye,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ge,j,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){let M=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",te)};ae.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=ae}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ae=0;ae<6;ae++)Le(M.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?Le(M.__webglFramebuffer[0],R,0):Le(M.__webglFramebuffer,R,0);else if(V){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=i.createRenderbuffer(),He(M.__webglDepthbuffer[ae],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),He(M.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,M,V){let ae=n.get(R);M!==void 0&&fe(ae.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&et(R)}function ot(R){let M=R.texture,V=n.get(R),ae=n.get(M);R.addEventListener("dispose",U),I(R);let te=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,o.memory.textures++),pe){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let j=0;j<M.mipmaps.length;j++)V.__webglFramebuffer[Q][j]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Q=0,j=te.length;Q<j;Q++){let ge=n.get(te[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){let j=te[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let ge=r.convert(j.format,j.colorSpace),D=r.convert(j.type),ee=T(j.internalFormat,ge,D,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),Z=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),He(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)fe(V.__webglFramebuffer[Q][j],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else fe(V.__webglFramebuffer[Q],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);E(M)?x(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let Q=0,j=te.length;Q<j;Q++){let ge=te[Q],D=n.get(ge),ee=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,D.__webglTexture),Ge(ee,ge),fe(V.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+Q,ee,0),E(ge)&&x(ee)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,ae.__webglTexture),Ge(Q,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)fe(V.__webglFramebuffer[j],R,M,i.COLOR_ATTACHMENT0,Q,j);else fe(V.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,Q,0);E(M)?x(Q):M.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&et(R)}function F(R){let M=R.textures;for(let V=0,ae=M.length;V<ae;V++){let te=M[V];if(E(te)&&te.mipmapsAutoUpdate===!0){let pe=w(R),ye=n.get(te).__webglTexture;t.bindTexture(pe,ye),x(pe),t.unbindTexture()}}}let wt=[];function Ke(R){if(R.samples>0){if(ve(R)===!1){let M=R.textures,V=R.width,ae=R.height,te=i.COLOR_BUFFER_BIT,pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(R),Q=M.length>1;if(Q)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let D=n.get(M[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,V,ae,0,0,V,ae,te,i.NEAREST),l===!0&&(wt.length=0,wt.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&wt.push(pe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let D=n.get(M[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function dt(R){return Math.min(s.maxSamples,R.samples)}function ve(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Be(R,M){let V=R.colorSpace,ae=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Js&&V!==jn&&(Qe.getTransfer(V)===at?(ae!==An||te!==tn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",V)),M}function We(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.getTextureUnits=ne,this.setTextureUnits=Ae,this.setTexture2D=Y,this.setTexture2DArray=ie,this.setTexture3D=de,this.setTextureCube=re,this.rebindTextures=tt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve,this.dispose=z}function ax(i,e){function t(n,s=jn){let r,o=Qe.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===tc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Et)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===An)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===aa)return i.RED;if(n===la)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Ir||n===Lr||n===Dr||n===Nr)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===Ur||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===za||n===Fr||n===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new st({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,v=typeof XRWebGLBinding<"u",p=new Nc,m={},S=t.getContextAttributes(),E=null,x=null,w=[],T=[],g=new oe,y=null,I=null,A=new qt;A.viewport=new pt;let L=new qt;L.viewport=new pt;let U=[A,L],O=new jo,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=w[B];return Y===void 0&&(Y=new us,w[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=w[B];return Y===void 0&&(Y=new us,w[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=w[B];return Y===void 0&&(Y=new us,w[B]=Y),Y.getHandSpace()};function W(B){let Y=T.indexOf(B.inputSource);if(Y===-1)return;let ie=w[Y];ie!==void 0&&(ie.update(B.inputSource,B.frame,c||o),ie.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",se);for(let B=0;B<w.length;B++){let Y=T[B];Y!==null&&(T[B]=null,w[B].disconnect(Y))}C=null,z=null,p.reset();for(let B in m)delete m[B];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),I!==null){let B=I.camera;B.fov=I.fov,B.zoom=I.zoom,B.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,de=null,re=null;S.depth&&(re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Qn:Yn,de=S.stencil?zi:wn);let Se={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Se),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new xt(u.textureWidth,u.textureHeight,{format:An,type:tn,depthTexture:new Jn(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new xt(f.framebufferWidth,f.framebufferHeight,{format:An,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(B){for(let Y=0;Y<B.removed.length;Y++){let ie=B.removed[Y],de=T.indexOf(ie);de>=0&&(T[de]=null,w[de].disconnect(ie))}for(let Y=0;Y<B.added.length;Y++){let ie=B.added[Y],de=T.indexOf(ie);if(de===-1){for(let Se=0;Se<w.length;Se++)if(Se>=T.length){T.push(ie),de=Se;break}else if(T[Se]===null){T[Se]=ie,de=Se;break}if(de===-1)break}let re=w[de];re&&re.connect(ie)}}function X(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Y=B.near,ie=B.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),O.near=L.near=A.near=Y,O.far=L.far=A.far=ie,(C!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,z=O.far),O.layers.mask=B.layers.mask|6,A.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let de=B.parent,re=O.cameras;X(O,de);for(let Se=0;Se<re.length;Se++)X(re[Se],de);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&B.isPerspectiveCamera&&(I={camera:B,fov:B.fov,zoom:B.zoom}),K(B,O,de)};function K(B,Y,ie){ie===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ie.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ls*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(B){return m[B]};let ne=null;function Ae(B,Y){if(h=Y.getViewerPose(c||o),_=Y,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let de=!1;ie.length!==O.cameras.length&&(O.cameras.length=0,de=!0);for(let Re=0;Re<ie.length;Re++){let Ge=ie[Re],Fe=null;if(f!==null)Fe=f.getViewport(Ge);else{let ce=d.getViewSubImage(u,Ge);Fe=ce.viewport,Re===0&&(e.setRenderTargetTextures(x,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(x))}let J=U[Re];J===void 0&&(J=new qt,J.layers.enable(Re),J.viewport=new pt,U[Re]=J),J.matrix.fromArray(Ge.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ge.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Re===0&&(O.matrix.copy(J.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),de===!0&&O.cameras.push(J)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Re=d.getDepthInformation(ie[0]);Re&&Re.isValid&&Re.texture&&p.init(Re,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Re=0;Re<ie.length;Re++){let Ge=ie[Re].camera;if(Ge){let Fe=m[Ge];Fe||(Fe=new or,m[Ge]=Fe);let J=d.getCameraImage(Ge);Fe.sourceTexture=J}}}}for(let ie=0;ie<w.length;ie++){let de=T[ie],re=w[ie];de!==null&&re!==void 0&&re.update(de,Y,c||o)}ne&&ne(B,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}let $=new ad;$.setAnimationLoop(Ae),this.setAnimationLoop=function(B){ne=B},this.dispose=function(){}}},hx=new $e,_d=new Xe;_d.set(-1,0,0,0,1,0,0,0,1);function ux(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_c(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ot&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ot&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),E=S.envMap,x=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(_d),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,e,t,n){let s={},r={};function o(S,E){let x=E.program;n.uniformBlockBinding(S,x,s[S.id])}function a(S,E){let x=s[S.id];x===void 0&&(_(S),x=l(S),s[S.id]=x,S.addEventListener("dispose",p));let w=E.program;n.updateUBOMapping(S,w);let T=e.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let E=i.createBuffer(),x=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,x,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){let E=s[S.id],x=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,g=x.length;T<g;T++){let y=x[T];if(Array.isArray(y))for(let I=0,A=y.length;I<A;I++)h(y[I],T,I,w);else h(y,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,x,w){if(u(S,E,x,w)===!0){let T=S.__offset,g=S.value;if(Array.isArray(g)){let y=0;for(let I=0;I<g.length;I++){let A=g[I],L=v(A,!0);d(A,S.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function d(S,E,x){typeof S=="number"||typeof S=="boolean"?E[x]=S:S.isMatrix3?(E[x]=S.elements[0],E[x+1]=S.elements[1],E[x+2]=S.elements[2],E[x+3]=0,E[x+4]=S.elements[3],E[x+5]=S.elements[4],E[x+6]=S.elements[5],E[x+7]=0,E[x+8]=S.elements[6],E[x+9]=S.elements[7],E[x+10]=S.elements[8],E[x+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-x),x):S.toArray(E,x)}function u(S,E,x,w){let T=S.value,g=E+"_"+x;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let y=w[g],I=!1;for(let A=0;A<T.length;A++)f(T[A],y,A)===!0&&(I=!0);return I}return f(T,w,g)}function f(S,E,x){if(E[x]===void 0)return typeof S=="number"||typeof S=="boolean"?E[x]=S:ArrayBuffer.isView(S)?E[x]=S.slice():E[x]=S.clone(),!0;{let w=E[x];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return E[x]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(S){let E=S.uniforms,x=0,w=16;for(let g=0,y=E.length;g<y;g++){let I=Array.isArray(E[g])?E[g]:[E[g]];for(let A=0,L=I.length;A<L;A++){let U=I[A],O=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(E[g])||Array.isArray(U.value),z=x;for(let k=0,se=O.length;k<se;k++){let X=O[k],K=v(X,C),ne=x%w,Ae=ne%K.boundary,$=ne+Ae;x+=Ae,$!==0&&w-$<K.storage&&(x+=w-$),k===0&&(z=x),x+=K.storage}let W=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new W((x-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}let T=x%w;return T>0&&(x+=w-T),S.__size=x,S.__cache={},this}function v(S,E){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=16,x.storage=48):S.isMatrix4?(x.boundary=16,x.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(x.boundary=16,x.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(S){let E=S.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:m}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function px(){return Fn===null&&(Fn=new Ai(fx,16,16,pi,Et),Fn.name="DFG_LUT",Fn.minFilter=zt,Fn.magFilter=zt,Fn.wrapS=In,Fn.wrapT=In,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Wa=class{constructor(e={}){let{canvas:t=Au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=tn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=f,p=new Set([ha,ca,la]),m=new Set([tn,wn,Es,zi,ra,oa]),S=new Uint32Array(4),E=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,U=null,O=null,C=null,z=null;this._outputColorSpace=Xt;let W=0,k=0,se=null,X=-1,K=null,ne=new pt,Ae=new pt,$=null,B=new Ne(0),Y=0,ie=t.width,de=t.height,re=1,Se=null,ke=null,Re=new pt(0,0,ie,de),Ge=new pt(0,0,ie,de),Fe=!1,J=new ci,ce=new Do,he=!1,Te=!1,fe=new $e,He=new P,Le=new pt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function ot(){return se===null?re:1}let F=n;function wt(b,N){return t.getContext(b,N)}let Ke,dt,ve,bt,Be,We,R,M,V,ae,te,pe,ye,Q,j,ge,D,ee,Z,_e,ue,me,Ue;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let N="webgl2";if(F=wt(N,b),F===null)throw wt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(b){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ve("WebGLRenderer: "+b.message),b}function Je(){Ke=new T0(F),Ke.init(),ue=new ax(F,Ke),dt=new p0(F,Ke,e,ue),ve=new rx(F,Ke),dt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),O=F.createFramebuffer(),C=F.createFramebuffer(),z=F.createFramebuffer(),bt=new R0(F),Be=new X_,We=new ox(F,Ke,ve,Be,dt,ue,bt),R=new E0(A),M=new Pp(F),me=new d0(F,M),V=new w0(F,M,bt,me),ae=new P0(F,V,M,me,bt),ee=new C0(F,dt,We),j=new m0(Be),te=new W_(A,R,Ke,dt,me,j),pe=new ux(A,Be),ye=new Y_,Q=new j_(Ke),D=new u0(A,R,ve,ae,_,l),ge=new sx(A,ae,dt),Ue=new dx(F,bt,dt,ve),Z=new f0(F,Ke,bt),_e=new A0(F,Ke,bt),bt.programs=te.programs,A.capabilities=dt,A.extensions=Ke,A.properties=Be,A.renderLists=ye,A.shadowMap=ge,A.state=ve,A.info=bt}v!==tn&&(I=new L0(v,t.width,t.height,a,s,r));let le=new Uc(A,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(ie,de,!1))},this.getSize=function(b){return b.set(ie,de)},this.setSize=function(b,N,q=!0){if(le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,de=N,t.width=Math.floor(b*re),t.height=Math.floor(N*re),q===!0&&(t.style.width=b+"px",t.style.height=N+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(ie*re,de*re).floor()},this.setDrawingBufferSize=function(b,N,q){ie=b,de=N,re=q,t.width=Math.floor(b*q),t.height=Math.floor(N*q),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(v===tn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Re)},this.setViewport=function(b,N,q,H){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,N,q,H),ve.viewport(ne.copy(Re).multiplyScalar(ot()).round())},this.getScissor=function(b){return b.copy(Ge)},this.setScissor=function(b,N,q,H){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,N,q,H),ve.scissor(Ae.copy(Ge).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){ve.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){Se=b},this.setTransparentSort=function(b){ke=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,q=!0){let H=0;if(b){let G=!1;if(se!==null){let Me=se.texture.format;G=p.has(Me)}if(G){let Me=se.texture.type,Ce=m.has(Me),xe=D.getClearColor(),we=D.getClearAlpha(),De=xe.r,Ye=xe.g,nt=xe.b;Ce?(S[0]=De,S[1]=Ye,S[2]=nt,S[3]=we,F.clearBufferuiv(F.COLOR,0,S)):(E[0]=De,E[1]=Ye,E[2]=nt,E[3]=we,F.clearBufferiv(F.COLOR,0,E))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",be,!1),D.dispose(),ye.dispose(),Q.dispose(),We.dispose(),Be.dispose(),R.dispose(),ae.dispose(),V.dispose(),me.dispose(),Ue.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",nh),le.removeEventListener("sessionend",ih),xi.stop()};function Oe(b){b.preventDefault(),uc("WebGLRenderer: Context Lost."),L=!0}function Ze(){uc("WebGLRenderer: Context Restored."),L=!1;let b=bt.autoReset,N=ge.enabled,q=ge.autoUpdate,H=ge.needsUpdate,G=ge.type;Je(),bt.autoReset=b,ge.enabled=N,ge.autoUpdate=q,ge.needsUpdate=H,ge.type=G}function be(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let N=b.target;N.removeEventListener("dispose",ht),Dt(N)}function Dt(b){ti(b),Be.remove(b)}function ti(b){let N=Be.get(b).programs;N!==void 0&&(N.forEach(function(q){te.releaseProgram(q)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,q,H,G,Me){N===null&&(N=et);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=nf(b,N,q,H,G);ve.setMaterial(H,Ce);let we=q.index,De=1;if(H.wireframe===!0){if(we=V.getWireframeAttribute(q),we===void 0)return;De=2}let Ye=q.drawRange,nt=q.attributes.position,Pe=Ye.start*De,it=(Ye.start+Ye.count)*De;Me!==null&&(Pe=Math.max(Pe,Me.start*De),it=Math.min(it,(Me.start+Me.count)*De)),we!==null?(Pe=Math.max(Pe,0),it=Math.min(it,we.count)):nt!=null&&(Pe=Math.max(Pe,0),it=Math.min(it,nt.count));let At=it-Pe;if(At<0||At===1/0)return;me.setup(G,H,xe,q,we);let mt,ft=Z;if(we!==null&&(mt=M.get(we),ft=_e,ft.setIndex(mt)),G.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*ot()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(G.isLine){let Ht=H.linewidth;Ht===void 0&&(Ht=1),ve.setLineWidth(Ht*ot()),G.isLineSegments?ft.setMode(F.LINES):G.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else G.isPoints?ft.setMode(F.POINTS):G.isSprite&&ft.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ht=G._multiDrawStarts,Ie=G._multiDrawCounts,Jt=G._multiDrawCount,lt=we?M.get(we).bytesPerElement:1,vi=Be.get(H).currentProgram.getUniforms();for(let Vt=0;Vt<Jt;Vt++)vi.setValue(F,"_gl_DrawID",Vt),ft.render(Ht[Vt]/lt,Ie[Vt])}else if(G.isInstancedMesh)ft.renderInstances(Pe,At,G.count);else if(q.isInstancedBufferGeometry){let Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Ht);ft.renderInstances(Pe,At,Ie)}else ft.render(Pe,At)};function th(b,N,q,H){U!==null&&b.isNodeMaterial&&U.setObject(H,b),he===!0&&j.setState(b,q,!1),b.transparent===!0&&b.side===kt&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,Fs(b,N,H),b.side=Nn,b.needsUpdate=!0,Fs(b,N,H),b.side=kt):Fs(b,N,H)}this.compile=function(b,N,q=null){q===null&&(q=b),U!==null&&U.renderStart(b,N,q),T=Q.get(q),T.init(N),y.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,he=j.init(this.clippingPlanes,Te),he===!0&&j.setGlobalState(this.clippingPlanes,N),U!==null&&ge.render(T.state.shadowsArray,q,N);let H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Me=G.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){let xe=Me[Ce];th(xe,q,N,G),H.add(xe)}else th(Me,q,N,G),H.add(Me)}),T=y.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(b,N,q=null){let H=this.compile(b,N,q);return new Promise(G=>{function Me(){if(H.forEach(function(Ce){let we=Be.get(Ce).currentProgram;(we===void 0||we.isReady())&&H.delete(Ce)}),H.size===0){G(b);return}setTimeout(Me,10)}Ke.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ll=null;function ef(b){ll&&ll(b)}function nh(){xi.stop()}function ih(){xi.start()}let xi=new ad;xi.setAnimationLoop(ef),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(b){ll=b,le.setAnimationLoop(b),b===null?xi.stop():xi.start()},le.addEventListener("sessionstart",nh),le.addEventListener("sessionend",ih),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(b,N);let q=le.enabled===!0&&le.isPresenting===!0,H=I!==null&&(se===null||q)&&I.begin(A,se);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,N,se),T=Q.get(b,y.length),T.init(N),T.state.textureUnits=We.getTextureUnits(),y.push(T),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ce.setFromArrayCamera(N):J.setFromProjectionMatrix(fe,pn,N.reversedDepth),Te=this.localClippingEnabled,he=j.init(this.clippingPlanes,Te),w=ye.get(b,g.length),w.init(),g.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ce=A.xr.getDepthSensingMesh();Ce!==null&&cl(Ce,N,-1/0,A.sortObjects)}cl(b,N,0,A.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),A.sortObjects===!0&&w.sort(Se,ke),tt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,tt&&D.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),he===!0&&j.beginShadows();let G=T.state.shadowsArray;if(ge.render(G,b,N),he===!0&&j.endShadows(),(H&&I.hasRenderPass())===!1){let Ce=w.opaque,xe=w.transmissive;if(T.setupLights(),N.isArrayCamera){let we=N.cameras;if(xe.length>0)for(let De=0,Ye=we.length;De<Ye;De++){let nt=we[De];rh(Ce,xe,b,nt)}tt&&D.render(b);for(let De=0,Ye=we.length;De<Ye;De++){let nt=we[De];sh(w,b,nt,nt.viewport)}}else xe.length>0&&rh(Ce,xe,b,N),tt&&D.render(b),sh(w,b,N)}se!==null&&k===0&&(We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se)),H&&I.end(A),b.isScene===!0&&b.onAfterRender(A,b,N),me.resetDefaultState(),X=-1,K=null,y.pop(),y.length>0?(T=y[y.length-1],We.setTextureUnits(T.state.textureUnits),he===!0&&j.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,U!==null&&U.renderEnd()};function cl(b,N,q,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let Ce=N.isArrayCamera?ce:J;if(!b.frustumCulled||b.intersectsFrustum(Ce)){H&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);let xe=ae.update(b),we=b.material;we.visible&&w.push(b,xe,we,q,Le.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){let Ce=N.isArrayCamera?ce:J;if(!b.frustumCulled||b.intersectsFrustum(Ce)){let xe=ae.update(b),we=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Le.copy(xe.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){let De=xe.groups;for(let Ye=0,nt=De.length;Ye<nt;Ye++){let Pe=De[Ye],it=we[Pe.materialIndex];it&&it.visible&&w.push(b,xe,it,q,Le.z,Pe,N)}}else we.visible&&w.push(b,xe,we,q,Le.z,null,N)}}}let Me=b.children;for(let Ce=0,xe=Me.length;Ce<xe;Ce++)cl(Me[Ce],N,q,H)}function sh(b,N,q,H){let{opaque:G,transmissive:Me,transparent:Ce}=b;T.setupLightsView(q),he===!0&&j.setGlobalState(A.clippingPlanes,q),H&&ve.viewport(ne.copy(H)),G.length>0&&Xr(G,N,q),Me.length>0&&Xr(Me,N,q),Ce.length>0&&Xr(Ce,N,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function rh(b,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Pe=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new xt(1,1,{generateMipmaps:!0,type:Pe?Et:tn,minFilter:Tn,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let Me=T.state.transmissionRenderTarget[H.id],Ce=H.viewport||ne;Me.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),we=A.getActiveCubeFace(),De=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(B),Y=A.getClearAlpha(),Y<1&&A.setClearColor(16777215,.5),A.clear(),tt&&D.render(q);let Ye=A.toneMapping;A.toneMapping=Un;let nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),he===!0&&j.setGlobalState(A.clippingPlanes,H),Xr(b,q,H),We.updateMultisampleRenderTarget(Me),We.updateRenderTargetMipmap(Me),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let it=0,At=N.length;it<At;it++){let mt=N[it],{object:ft,geometry:Ht,material:Ie,group:Jt}=mt;if(Ie.side===kt&&ft.layers.test(H.layers)){let lt=Ie.side;Ie.side=Ot,Ie.needsUpdate=!0,oh(ft,q,H,Ht,Ie,Jt),Ie.side=lt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(We.updateMultisampleRenderTarget(Me),We.updateRenderTargetMipmap(Me))}A.setRenderTarget(xe,we,De),A.setClearColor(B,Y),nt!==void 0&&(H.viewport=nt),A.toneMapping=Ye}function Xr(b,N,q){let H=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Me=b.length;G<Me;G++){let Ce=b[G],{object:xe,geometry:we,group:De}=Ce,Ye=Ce.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),xe.layers.test(q.layers)&&oh(xe,N,q,we,Ye,De)}}function oh(b,N,q,H,G,Me){U!==null&&G.isNodeMaterial&&U.setObject(b,G),b.onBeforeRender(A,N,q,H,G,Me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(A,N,q,H,b,Me),G.transparent===!0&&G.side===kt&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,A.renderBufferDirect(q,N,H,G,b,Me),G.side=Nn,G.needsUpdate=!0,A.renderBufferDirect(q,N,H,G,b,Me),G.side=kt):A.renderBufferDirect(q,N,H,G,b,Me),b.onAfterRender(A,N,q,H,G,Me)}function ah(b){let N=0;for(let q of b)q.texture!==null&&N++;return N}function Fs(b,N,q){N.isScene!==!0&&(N=et);let H=Be.get(b),G=T.state.lights,Me=T.state.shadowsArray,Ce=G.state.version,xe=te.getParameters(b,G.state,Me,N,q,T.state.lightProbeGridArray),we=te.getProgramCacheKey(xe),De=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Ye=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=R.get(b.envMap||H.environment,Ye),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",ht),De=new Map,H.programs=De,H.programVariants=new Map);let nt=De.get(we);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Ce)return ch(b,xe),nt}else xe.uniforms=te.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,q,xe),b.onBeforeCompile(xe,A),nt=te.acquireProgram(xe,we),De.set(we,nt),H.uniforms=xe.uniforms;let Pe=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=j.uniform),ch(b,xe),H.needsLights=rf(b),H.lightsStateVersion=Ce,H.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=ah(T.state.lightProbeGridArray),H.currentProgram=nt,H.uniformsList=null,nt}function tf(b,N,q,H,G){let Me=Be.get(b),Ce=Me.currentProgram.id+","+H+","+G,xe=Me.programVariants.get(Ce);return xe===void 0?(xe=Fs(b,N,q),Me.programVariants.set(Ce,xe)):(Me.currentProgram=xe,Me.uniformsList=null,Me.outputColorSpace=H,Me.toneMapping=G),xe}function lh(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ch(b,N){let q=Be.get(b);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function nf(b,N,q,H,G){N.isScene!==!0&&(N=et),We.resetTextureUnits();let Me=N.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,xe=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qe.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=R.get(H.envMap||Ce,we),Ye=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,mt=Un;H.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(mt=A.toneMapping);let ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ht=ft!==void 0?ft.length:0,Ie=Be.get(H),Jt=T.state.lights;if(he===!0&&(Te===!0||b!==K)){let Mt=b===K&&H.id===X;j.setState(H,b,Mt)}let lt=!1,vi=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==Jt.state.version||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==De||H.fog===!0&&Ie.fog!==Me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==Ye||Ie.vertexTangents!==nt||Ie.morphTargets!==Pe||Ie.morphNormals!==it||Ie.morphColors!==At||Ie.morphTargetsCount!==Ht||Ie.numLightProbeGrids!==ah(T.state.lightProbeGridArray)?lt=!0:(Ie.outputColorSpace!==xe||Ie.toneMapping!==mt)&&(vi=!0):(lt=!0,Ie.__version=H.version);let Vt=Ie.currentProgram;(lt===!0||vi===!0)&&(Vt=vi===!0?tf(H,N,G,xe,mt):Fs(H,N,G),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Vt,Ie));let qr=!1,ni=!1,yi=!1,rt=Vt.getUniforms(),Bt=Ie.uniforms;if(ve.useProgram(Vt.program)&&(qr=!0,ni=!0,yi=!0),H.id!==X&&(X=H.id,ni=!0),qr||K!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),rt.setValue(F,"projectionMatrix",b.projectionMatrix),rt.setValue(F,"viewMatrix",b.matrixWorldInverse);let Nt=rt.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,He.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,ni=!0,yi=!0)}if(Ie.needsLights&&(Jt.state.sunShadowMap.length>0&&rt.setValue(F,"sunShadowMap",Jt.state.sunShadowMap,We),Jt.state.directionalShadowMap.length>0&&rt.setValue(F,"directionalShadowMap",Jt.state.directionalShadowMap,We),Jt.state.spotShadowMap.length>0&&rt.setValue(F,"spotShadowMap",Jt.state.spotShadowMap,We),Jt.state.pointShadowMap.length>0&&rt.setValue(F,"pointShadowMap",Jt.state.pointShadowMap,We)),G.isSkinnedMesh){rt.setOptional(F,G,"bindMatrix"),rt.setOptional(F,G,"bindMatrixInverse");let Mt=G.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),rt.setValue(F,"boneTexture",Mt.boneTexture,We))}G.isBatchedMesh&&(rt.setOptional(F,G,"batchingTexture"),rt.setValue(F,"batchingTexture",G._matricesTexture,We),rt.setOptional(F,G,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",G._indirectTexture,We),rt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",G._colorsTexture,We));let yn=q.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ee.update(G,q,Vt),(ni||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,rt.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Bt.envMapIntensity.value=N.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=px()),ni){if(rt.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&sf(Bt,yi),Me&&H.fog===!0&&pe.refreshFogUniforms(Bt,Me),pe.refreshMaterialUniforms(Bt,H,re,de,T.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Mt=x,Nt=0;for(let kn of T.state.lightProbeGridArray)kn.texture!==null&&(Mt.textures[Nt]=kn.texture,Mt.min[Nt]=kn.boundingBox.min,Mt.max[Nt]=kn.boundingBox.max,Mt.resolution[Nt]=kn.resolution,Nt++);for(let kn in Mt)Mt[kn].length=Nt;Bt.probesSH.value=Mt.textures,Bt.probesMin.value=Mt.min,Bt.probesMax.value=Mt.max,Bt.probesResolution.value=Mt.resolution}Ts.upload(F,lh(Ie),Bt,We)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ts.upload(F,lh(Ie),Bt,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(F,"center",G.center),rt.setValue(F,"modelViewMatrix",G.modelViewMatrix),rt.setValue(F,"normalMatrix",G.normalMatrix),rt.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Mt=H.uniformsGroups;for(let Nt=0,kn=Mt.length;Nt<kn;Nt++){let uh=Mt[Nt];Ue.update(uh,Vt),Ue.bind(uh,Vt)}}return Vt}function sf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function rf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(b,N,q){let H=Be.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Be.get(b.texture).__webglTexture=N,Be.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let q=Be.get(b);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,q=0){se=b,W=N,k=q;let H=null,G=!1,Me=!1;if(b){let xe=Be.get(b);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(b.viewport),Ae.copy(b.scissor),$=b.scissorTest,ve.viewport(ne),ve.scissor(Ae),ve.setScissorTest($),X=-1;return}else if(xe.__webglFramebuffer===void 0)We.setupRenderTarget(b);else if(xe.__hasExternalTextures)We.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ye=b.depthTexture;if(xe.__boundDepthTexture!==Ye){if(Ye!==null&&Be.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);let De=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[N])?H=De[N][q]:H=De[N],G=!0):b.samples>0&&We.useMultisampledRTT(b)===!1?H=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[q]:H=De,ne.copy(b.viewport),Ae.copy(b.scissor),$=b.scissorTest}else ne.copy(Re).multiplyScalar(re).floor(),Ae.copy(Ge).multiplyScalar(re).floor(),$=Fe;if(q!==0&&(H=O),ve.bindFramebuffer(F.FRAMEBUFFER,H)&&ve.drawBuffers(b,H),ve.viewport(ne),ve.scissor(Ae),ve.setScissorTest($),G){let xe=Be.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,q)}else if(Me){let xe=N;for(let we=0;we<b.textures.length;we++){let De=Be.get(b.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,De.__webglTexture,q,xe)}}else if(b!==null&&q!==0){let xe=Be.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,q)}X=-1};function hh(b){let N=Be.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=dt.textureFormatReadable(b.format),N.__typeReadable=dt.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,q,H,G,Me,Ce,xe=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){ve.bindFramebuffer(F.FRAMEBUFFER,we);try{let De=b.textures[xe],Ye=De.format,nt=De.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);let Pe=hh(De);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&q>=0&&q<=b.height-G&&F.readPixels(N,q,H,G,ue.convert(Ye),ue.convert(nt),Me)}finally{let De=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,N,q,H,G,Me,Ce,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(N>=0&&N<=b.width-H&&q>=0&&q<=b.height-G){ve.bindFramebuffer(F.FRAMEBUFFER,we);let De=b.textures[xe],Ye=De.format,nt=De.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe);let Pe=hh(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(N,q,H,G,ue.convert(Ye),ue.convert(nt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let At=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,At);let mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Cu(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(it),F.deleteSync(mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,q=0){let H=Math.pow(2,-q),G=Math.floor(b.image.width*H),Me=Math.floor(b.image.height*H),Ce=N!==null?N.x:0,xe=N!==null?N.y:0;We.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Ce,xe,G,Me),ve.unbindTexture()},this.copyTextureToTexture=function(b,N,q=null,H=null,G=0,Me=0){let Ce,xe,we,De,Ye,nt,Pe,it,At,mt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(q!==null)Ce=q.max.x-q.min.x,xe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ye=q.min.y,nt=q.isBox3?q.min.z:0;else{let rt=Math.pow(2,-G);Ce=Math.floor(mt.width*rt),xe=Math.floor(mt.height*rt),b.isDataArrayTexture?we=mt.depth:b.isData3DTexture?we=Math.floor(mt.depth*rt):we=1,De=0,Ye=0,nt=0}H!==null?(Pe=H.x,it=H.y,At=H.z):(Pe=0,it=0,At=0);let ft=ue.convert(N.format),Ht=ue.convert(N.type),Ie;N.isData3DTexture?(We.setTexture3D(N,0),Ie=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(We.setTexture2DArray(N,0),Ie=F.TEXTURE_2D_ARRAY):(We.setTexture2D(N,0),Ie=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let Jt=ve.getParameter(F.UNPACK_ROW_LENGTH),lt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=ve.getParameter(F.UNPACK_SKIP_PIXELS),Vt=ve.getParameter(F.UNPACK_SKIP_ROWS),qr=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,De),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,nt);let ni=b.isDataArrayTexture||b.isData3DTexture,yi=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let rt=Be.get(b),Bt=Be.get(N),yn=Be.get(rt.__renderTarget),Mt=Be.get(Bt.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<we;Nt++)ni&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,G,nt+Nt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(N).__webglTexture,Me,At+Nt)),F.blitFramebuffer(De,Ye,De+Ce,Ye+xe,Pe,it,Pe+Ce,it+xe,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Be.has(b)){let rt=Be.get(b),Bt=Be.get(N);ve.bindFramebuffer(F.READ_FRAMEBUFFER,C),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let yn=0;yn<we;yn++)ni?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rt.__webglTexture,G,nt+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rt.__webglTexture,G),yi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,Me,At+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,Me),G!==0?F.blitFramebuffer(De,Ye,De+Ce,Ye+xe,Pe,it,Pe+Ce,it+xe,F.COLOR_BUFFER_BIT,F.NEAREST):yi?F.copyTexSubImage3D(Ie,Me,Pe,it,At+yn,De,Ye,Ce,xe):F.copyTexSubImage2D(Ie,Me,Pe,it,De,Ye,Ce,xe);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yi?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Ie,Me,Pe,it,At,Ce,xe,we,ft,Ht,mt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,Me,Pe,it,At,Ce,xe,we,ft,mt.data):F.texSubImage3D(Ie,Me,Pe,it,At,Ce,xe,we,ft,Ht,mt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Pe,it,Ce,xe,ft,Ht,mt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Pe,it,mt.width,mt.height,ft,mt.data):F.texSubImage2D(F.TEXTURE_2D,Me,Pe,it,Ce,xe,ft,Ht,mt);ve.pixelStorei(F.UNPACK_ROW_LENGTH,Jt),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,qr),Me===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Ie),ve.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&We.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?We.setTextureCube(b,0):b.isData3DTexture?We.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?We.setTexture2DArray(b,0):We.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){W=0,k=0,se=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Fc=new P(.18,.11,-1).normalize(),Oc=new Ne(1,.72,.44),gt={z:-400,x0:-70,x1:110,bottom:-30,spring:60,ry:135,depth:80},mi=i=>i.toFixed(5),xd=i=>`vec3( ${mi(i.x??i.r)}, ${mi(i.y??i.g)}, ${mi(i.z??i.b)} )`,cn=`
	const vec3 SUN_DIR = ${xd(Fc)};
	const vec3 SUN_COLOR = ${xd(Oc)};
	const vec3 ATM_HAZE = vec3( 0.075, 0.09, 0.09 );
	const vec3 ATM_SUN = vec3( 1.05, 0.74, 0.42 );
	const float ATM_DENSITY = 0.0008;
	const float ATM_FALLOFF = 0.008;

	// \u6D1E\u53E3\u7684\u6709\u5411\u8DDD\u79BB\uFF1A\u8D1F\u6570\u5728\u6D1E\u91CC
	float archSDF( vec2 q ) {
		const float X0 = ${mi(gt.x0)};
		const float X1 = ${mi(gt.x1)};
		const float SP = ${mi(gt.spring)};
		const float RY = ${mi(gt.ry)};
		float cx = ( X0 + X1 ) * 0.5;
		float rx = ( X1 - X0 ) * 0.5;
		if ( q.y < SP ) return max( X0 - q.x, q.x - X1 );
		vec2 e = vec2( ( q.x - cx ) / rx, ( q.y - SP ) / RY );
		return ( length( e ) - 1.0 ) * min( rx, RY );
	}

	// \u8FD9\u4E2A\u70B9\u80FD\u4E0D\u80FD\u88AB\u592A\u9633\u76F4\u63A5\u7167\u5230\uFF1A\u4ECE\u8BE5\u70B9\u671D\u592A\u9633\u770B\uFF0C\u89C6\u7EBF\u662F\u5426\u7A7F\u8FC7\u6D1E\u53E3\u3002
	// \u53EA\u7528\u4E8E\u534A\u900F\u660E\u6811\u53F6\u3001\u7011\u5E03\u53D1\u5149\u3001\u6C34\u9762\u95EA\u5149\u8FD9\u4E9B\u4E0D\u8D70\u9634\u5F71\u8D34\u56FE\u7684\u6548\u679C\u3002
	float sunMask( vec3 p ) {
		const float AZ = ${mi(gt.z)};
		if ( p.z < AZ - 70.0 ) return 1.0;
		float t = ( AZ - p.z ) / SUN_DIR.z;
		if ( t < 0.0 ) return 1.0;
		vec2 q = p.xy + SUN_DIR.xy * t;
		return 1.0 - smoothstep( - 22.0, 8.0, archSDF( q ) );
	}

	float atmosDepth( vec3 wp ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float k = rd.y * ATM_FALLOFF;
		float integ = abs( k ) < 1e-5 ? dist : ( 1.0 - exp( - dist * k ) ) / k;
		return ATM_DENSITY * exp( - ro.y * ATM_FALLOFF ) * max( integ, 0.0 ) + dist * 0.00011;
	}

	vec3 atmosColor( vec3 rd ) {
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		return mix( ATM_HAZE, ATM_SUN, pow( s, 12.0 ) ) + ATM_SUN * pow( s, 80.0 ) * 1.2;
	}

	vec3 atmos( vec3 col, vec3 wp ) {
		float fogF = 1.0 - exp( - atmosDepth( wp ) );
		vec3 rd = normalize( wp - cameraPosition );
		return mix( col, atmosColor( rd ), fogF );
	}

	// \u7ED9\u53E0\u52A0\u6DF7\u5408\u7684\u53D1\u5149\u7269\u7528\uFF1A\u53EA\u505A\u8870\u51CF\uFF0C\u4E0D\u52A0\u96FE\u8272
	float atmosT( vec3 wp ) {
		return exp( - atmosDepth( wp ) );
	}
`;qe.fog_pars_vertex=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;qe.fog_vertex=`
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;qe.fog_pars_fragment=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
		${cn}
	#endif
`;qe.fog_fragment=`
	#ifdef USE_FOG
		gl_FragColor.rgb = atmos( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;function vd(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let h=Math.imul(e^e>>>15,1|e);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296},n=Array.from({length:256},(h,d)=>d);for(let h=255;h>0;h--){let d=Math.floor(t()*(h+1));[n[h],n[d]]=[n[d],n[h]]}let s=new Uint8Array(512);for(let h=0;h<512;h++)s[h]=n[h&255];let r=h=>h*h*h*(h*(h*6-15)+10),o=(h,d,u)=>h+(d-h)*u,a=(h,d,u,f)=>{h&=15;let _=h<8?d:u,v=h<4?u:h===12||h===14?d:f;return(h&1?-_:_)+(h&2?-v:v)};function l(h,d,u){let f=Math.floor(h),_=Math.floor(d),v=Math.floor(u),p=f&255,m=_&255,S=v&255;h-=f,d-=_,u-=v;let E=r(h),x=r(d),w=r(u),T=s[p]+m,g=s[T]+S,y=s[T+1]+S,I=s[p+1]+m,A=s[I]+S,L=s[I+1]+S;return o(o(o(a(s[g],h,d,u),a(s[A],h-1,d,u),E),o(a(s[y],h,d-1,u),a(s[L],h-1,d-1,u),E),x),o(o(a(s[g+1],h,d,u-1),a(s[A+1],h-1,d,u-1),E),o(a(s[y+1],h,d-1,u-1),a(s[L+1],h-1,d-1,u-1),E),x),w)}function c(h,d,u,f=4){let _=.5,v=1,p=0;for(let m=0;m<f;m++)p+=_*l(h*v,d*v,u*v),v*=2.03,_*=.5;return p}return{noise3:l,fbm:c,rnd:t}}var _n=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Ya(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l=[],c=new Map,h=[],d=["getX","getY","getZ","getW"],u=e*.5,f=Math.log10(1/e),_=Math.pow(10,f),v=u*_;for(let m=0;m<r;m++){let S=n?n.getX(m):m,E="";for(let x=0,w=a.length;x<w;x++){let T=a[x],g=i.getAttribute(T),y=g.itemSize;for(let I=0;I<y;I++)E+=`${Math.trunc(g[d[I]](S)*_+v)},`}E in t?h.push(t[E]):(l.push(S),t[E]=o,h.push(o),o++)}let p=i.clone();for(let m in i.attributes)p.setAttribute(m,yd(i.attributes[m],l,c));for(let m in i.morphAttributes)p.morphAttributes[m]=i.morphAttributes[m].map(S=>yd(S,l,c));return p.setIndex(h),p}function yd(i,e,t=new Map){let n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize,o=n?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=n?new s.constructor(l,r,s.meshPerAttribute):new i.constructor(l,i.itemSize,i.normalized,i.meshPerAttribute),o.setUsage(s.usage),n&&t.set(s,o)}let a=n?new i.constructor(o,i.itemSize,i.offset,i.normalized):o;return a.name=i.name,n||(a.gpuType=i.gpuType),a}var hn=`
float hash11( float p ) {
	p = fract( p * 0.1031 );
	p *= p + 33.33;
	p *= p + p;
	return fract( p );
}

float hash12( vec2 p ) {
	vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}

vec2 hash22( vec2 p ) {
	vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.xx + p3.yz ) * p3.zy );
}

float vnoise( vec2 p ) {
	vec2 i = floor( p );
	vec2 f = fract( p );
	vec2 u = f * f * ( 3.0 - 2.0 * f );
	float a = hash12( i );
	float b = hash12( i + vec2( 1.0, 0.0 ) );
	float c = hash12( i + vec2( 0.0, 1.0 ) );
	float d = hash12( i + vec2( 1.0, 1.0 ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y );
}

float fbm( vec2 p ) {
	float a = 0.5;
	float s = 0.0;
	for ( int i = 0; i < 5; i ++ ) {
		s += a * vnoise( p );
		p = p * 2.03 + vec2( 17.1, 9.2 );
		a *= 0.5;
	}
	return s;
}

float fbm3( vec2 p ) {
	float a = 0.5;
	float s = 0.0;
	for ( int i = 0; i < 3; i ++ ) {
		s += a * vnoise( p );
		p = p * 2.07 + vec2( 5.3, 11.7 );
		a *= 0.5;
	}
	return s;
}
`;function Za({bump:i=1,green:e=1,tint:t=1}={}){let n=new en({color:new Ne(t,t,t),roughness:.9,metalness:0});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRockN;`).replace("#include <beginnormal_vertex>",`
				#include <beginnormal_vertex>
				#ifdef USE_INSTANCING
					vRockN = normalize( mat3( modelMatrix ) * mat3( instanceMatrix ) * objectNormal );
				#else
					vRockN = normalize( mat3( modelMatrix ) * objectNormal );
				#endif
			`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRockN;
${hn}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec3 rkP = vFogWorldPos;
				vec3 rkN = normalize( vRockN );
				vec3 rkA = abs( rkN );
				rkA /= ( rkA.x + rkA.y + rkA.z + 1e-4 );
				float rkLow = fbm( rkP.zy * 0.035 ) * rkA.x + fbm( rkP.xz * 0.035 ) * rkA.y + fbm( rkP.xy * 0.035 ) * rkA.z;
				float rkFine = vnoise( rkP.zy * 0.45 ) * rkA.x + vnoise( rkP.xz * 0.45 ) * rkA.y + vnoise( rkP.xy * 0.45 ) * rkA.z;
				float rkStrata = 0.5 + 0.5 * sin( rkP.y * 0.22 + rkLow * 4.0 );
				vec3 rkCol = mix( vec3( 0.17, 0.145, 0.11 ), vec3( 0.46, 0.38, 0.28 ), clamp( rkStrata * 0.18 + rkLow * 0.9 + 0.15, 0.0, 1.0 ) );
				rkCol *= 0.7 + 0.55 * rkFine;
				float rkStain = smoothstep( 0.55, 0.85, vnoise( vec2( ( rkP.x + rkP.z ) * 0.12, rkP.y * 0.008 ) ) );
				rkCol *= 1.0 - 0.5 * rkStain;
				float rkCover = smoothstep( 0.2, 0.65, rkN.y + ( rkLow - 0.5 ) * 0.9 );
				rkCover = max( rkCover, smoothstep( 80.0, 5.0, rkP.y ) * smoothstep( 0.35, 0.6, rkLow + 0.1 * rkFine ) * 0.85 );
				rkCover *= ${e.toFixed(3)};
				vec3 rkMoss = mix( vec3( 0.045, 0.075, 0.02 ), vec3( 0.13, 0.19, 0.05 ), rkFine );
				diffuseColor.rgb *= mix( rkCol, rkMoss, rkCover );
				float rkJoint = vnoise( vec2( ( rkP.x * rkA.z + rkP.z * rkA.x ) * 0.22, rkP.y * 0.012 ) );
				float rkH = rkLow * 1.6 + rkFine * 1.0 + rkJoint * 1.4 * ( 1.0 - rkA.y );
				float rkRough = mix( 0.95, 0.85, rkCover ) - 0.2 * rkStain;
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = rkRough;").replace("#include <normal_fragment_maps>",`
				#include <normal_fragment_maps>
				{
					float rkDist = length( vViewPosition );
					float rkB = ${i.toFixed(3)} * ( 1.0 - smoothstep( 60.0, 450.0, rkDist ) );
					vec3 dpx = dFdx( - vViewPosition );
					vec3 dpy = dFdy( - vViewPosition );
					float dhx = dFdx( rkH ) * rkB;
					float dhy = dFdy( rkH ) * rkB;
					vec3 r1 = cross( dpy, normal );
					vec3 r2 = cross( normal, dpx );
					float det = dot( dpx, r1 ) * faceDirection;
					vec3 grd = sign( det ) * ( dhx * r1 + dhy * r2 );
					normal = normalize( abs( det ) * normal - grd );
				}
			`)},n.customProgramCacheKey=()=>`rock-${i}-${e}`,n}function Bc({map:i=null,alphaTest:e=0,side:t=Nn,transl:n=1.6,bump:s=.6,key:r="blob"}={}){let o=new en({color:16777215,roughness:.8,metalness:0,map:i,alphaTest:e,side:t});return o.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${hn}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec3 fP = vFogWorldPos;
				float fN = vnoise( fP.xy * 0.9 + fP.z * 0.7 ) * 0.5 + vnoise( fP.zy * 2.1 + fP.x * 0.3 ) * 0.5;
				diffuseColor.rgb *= 0.35 + 1.1 * fN * fN;
				float fH = fN;
			`).replace("#include <normal_fragment_maps>",`
				#include <normal_fragment_maps>
				{
					float fB = ${s.toFixed(3)} * ( 1.0 - smoothstep( 40.0, 300.0, length( vViewPosition ) ) );
					vec3 dpx = dFdx( - vViewPosition );
					vec3 dpy = dFdy( - vViewPosition );
					float dhx = dFdx( fH ) * fB;
					float dhy = dFdy( fH ) * fB;
					vec3 r1 = cross( dpy, normal );
					vec3 r2 = cross( normal, dpx );
					float det = dot( dpx, r1 ) * faceDirection;
					vec3 grd = sign( det ) * ( dhx * r1 + dhy * r2 );
					normal = normalize( abs( det ) * normal - grd );
				}
			`).replace("#include <opaque_fragment>",`
				{
					vec3 fV = normalize( cameraPosition - vFogWorldPos );
					float fBack = pow( clamp( dot( - fV, SUN_DIR ), 0.0, 1.0 ), 3.0 );
					float fRim = 0.25 + 0.75 * pow( 1.0 - clamp( abs( dot( normal, normalize( vViewPosition ) ) ), 0.0, 1.0 ), 2.0 );
					outgoingLight += diffuseColor.rgb * SUN_COLOR * fBack * fRim * sunMask( vFogWorldPos ) * ${n.toFixed(3)};
				}
				#include <opaque_fragment>
			`)},o.customProgramCacheKey=()=>`foliage-${r}-${n}-${s}`,o}function Md(i){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");for(let s=0;s<70;s++){let r=i()*Math.PI*2,o=18+i()*80,a=128+Math.cos(r)*o*.9,l=128+Math.sin(r)*o*.9,c=22+i()*26,h=8+i()*7;t.save(),t.translate(a,l),t.rotate(r+(i()-.5)*.9);let d=85+i()*30,u=16+i()*20;t.fillStyle=`hsl(${d}, ${45+i()*25}%, ${u}%)`,t.beginPath(),t.ellipse(0,0,c,h,0,0,Math.PI*2),t.fill(),t.strokeStyle=`hsla(${d}, 50%, ${u*.6}%, 0.8)`,t.lineWidth=1.5,t.beginPath(),t.moveTo(-c,0),t.lineTo(c,0),t.stroke(),t.restore()}let n=new ps(e);return n.colorSpace=Xt,n.anisotropy=4,n}function Sd(i,e){let t=new Uint8Array(i*i*4),n=[[4,.5],[8,.25],[16,.125],[32,.0625]],s=[0,1].map(()=>n.map(([a])=>Float32Array.from({length:a*a},()=>e()))),r=a=>a*a*(3-2*a);for(let a=0;a<i;a++)for(let l=0;l<i;l++){for(let c=0;c<2;c++){let h=0,d=0;n.forEach(([u,f],_)=>{let v=s[c][_],p=l/i*u,m=a/i*u,S=Math.floor(p),E=Math.floor(m),x=r(p-S),w=r(m-E),T=S%u,g=(S+1)%u,y=E%u,I=(E+1)%u,A=v[y*u+T]+(v[y*u+g]-v[y*u+T])*x,L=v[I*u+T]+(v[I*u+g]-v[I*u+T])*x;h+=f*(A+(L-A)*w),d+=f}),t[(a*i+l)*4+c]=Math.round(h/d*255)}t[(a*i+l)*4+3]=255}let o=new Ai(t,i,i);return o.wrapS=o.wrapT=rs,o.magFilter=zt,o.minFilter=Tn,o.generateMipmaps=!0,o.needsUpdate=!0,o}function bd(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.15,"rgba(255,255,255,0.55)"),t.addColorStop(.45,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ps(i);return n.colorSpace=Xt,n}function Ed(i,e,t){let n=new Pt,s=gt.z,r=$=>{let B=$/17-Math.floor($/17);return _n(.55,.85,B)*(1-_n(.85,1,B))},o=($,B,Y,ie)=>{let re=i.fbm($*.0055,B*.0055*.7,Y*.0055,4),Se=i.fbm($*.0055+19.1,B*.0055*.7+7.3,Y*.0055+3.7,4),ke=i.fbm($*.0055+41.7,B*.0055+13.1,Y*.0055+29.3,3),Re=1-Math.abs(i.noise3($*.022,B*.035,Y*.022)),Ge=r(B+i.noise3($*.01,.3,Y*.01)*30),Fe=i.noise3($*.08,B*.08,Y*.08)*2.5,J=i.noise3($*.08+5.2,B*.08+1.3,Y*.08+7.7)*2.5;return[(re*46+(Re-.5)*12+Ge*2.2+Fe)*ie,ke*14*ie,(Se*46+(Re-.5)*12+Ge*2.2+J)*ie]},a=($,B,Y,ie)=>{let de=o($,B,Y,ie);return[$+de[0],B+de[1],Y+de[2]]};function l($,B,Y,ie){let de=new Float32Array(($+1)*(B+1)*3),re=0;for(let Fe=0;Fe<=B;Fe++)for(let J=0;J<=$;J++){let ce=Y(J/$,Fe/B);de[re++]=ce[0],de[re++]=ce[1],de[re++]=ce[2]}let Se=Fe=>{let J=[];for(let ce=0;ce<B;ce++)for(let he=0;he<$;he++){let Te=ce*($+1)+he,fe=Te+1,He=Te+$+1,Le=He+1;Fe?J.push(Te,fe,He,fe,Le,He):J.push(Te,He,fe,fe,He,Le)}return J},ke=new Tt;ke.setAttribute("position",new Ct(de,3)),ke.setIndex(Se(!1)),ke.computeVertexNormals();let Re=ke.attributes.normal,Ge=0;for(let Fe=0;Fe<Re.count;Fe+=17){let J=ie(de[Fe*3],de[Fe*3+1],de[Fe*3+2]);Ge+=Re.getX(Fe)*J[0]+Re.getY(Fe)*J[1]+Re.getZ(Fe)*J[2]}return Ge<0&&(ke.setIndex(Se(!0)),ke.computeVertexNormals()),ke.computeBoundingSphere(),ke}let c=Za({bump:1}),h=($,B=c)=>{let Y=new ct($,B);return Y.castShadow=!0,Y.receiveShadow=!0,n.add(Y),Y},d=(gt.x0+gt.x1)/2,u=(gt.x1-gt.x0)/2,f=gt.spring-gt.bottom,_=Math.PI*Math.sqrt((u*u+gt.ry*gt.ry)/2),v=f*2+_,p=$=>{let B=$*v;if(B<f)return{x:gt.x0,y:gt.bottom+B,nx:-1,ny:0};if(B>f+_)return{x:gt.x1,y:gt.spring-(B-f-_),nx:1,ny:0};let Y=Math.PI*(1-(B-f)/_),ie=d+u*Math.cos(Y),de=gt.spring+gt.ry*Math.sin(Y),re=Math.cos(Y)/u,Se=Math.sin(Y)/gt.ry,ke=Math.hypot(re,Se);return{x:ie,y:de,nx:re/ke,ny:Se/ke}},m=.5,S=430,E=h(l(220,56,($,B)=>{let Y=p($),ie=S*Math.pow(B,1.7);return a(Y.x+Y.nx*ie,Y.y+Y.ny*ie,s+ie*.12,m)},()=>[0,0,1])),x=h(l(220,22,($,B)=>{let Y=p($);return a(Y.x,Y.y,s-gt.depth*B,m)},($,B)=>[d-$,gt.spring+20-B,0])),w=$=>Math.pow(_n(s,230,$),.85),T=$=>40*Math.pow(Math.min(1,Math.max(0,$/460)),2),g=$=>32*(1-_n(-35,50,$)),y=($,B)=>gt.x0-125*w($)+T(B)+g(B),I=($,B)=>gt.x1+110*w($)-T(B)-g(B),A=s-40,L=230,U=$=>(B,Y)=>{let ie=A+(L-A)*B,de=-40+510*Y,re=$<0?y(ie,de):I(ie,de);return a(re,de,ie,1)},O=h(l(t.wallRes[0],t.wallRes[1],U(-1),()=>[1,0,0])),C=h(l(t.wallRes[0],t.wallRes[1],U(1),()=>[-1,0,0])),z=[{z:-268,top:7},{z:-298,top:13},{z:-327,top:19},{z:-357,top:25},{z:-388,top:31}],W=[];for(let $ of z){let B=y($.z,10)-40,Y=I($.z,10)+40,ie=36,de=$.top+20,re=new on(Y-B,de,ie,70,5,6);re.translate((B+Y)/2,$.top-de/2,$.z-ie/2);let Se=re.attributes.position;for(let ke=0;ke<Se.count;ke++){let Re=o(Se.getX(ke),Se.getY(ke),Se.getZ(ke),.1),Ge=Se.getY(ke)>$.top-.01;Se.setXYZ(ke,Se.getX(ke)+Re[0],Se.getY(ke)+(Ge?Re[1]*.15:Re[1]),Se.getZ(ke)+Re[2])}re.computeVertexNormals(),W.push(h(re)),$.x0=B,$.x1=Y}let k=($,B)=>{let Y=_n(-400,-700,B),ie=$-20-40*Math.sin(B*.0025),de=Math.max(0,Math.abs(ie)-38)*.3,re=(i.fbm($*.002,.5,B*.002,4)*.5+.5)*130;return 30+(de+re*Math.min(1,Math.abs(ie)/160))*Y+1*(1-Y)};{let $=new Zt(4200,2500,t.farRes[0],t.farRes[1]);$.rotateX(-Math.PI/2),$.translate(0,0,-1650);let B=$.attributes.position;for(let ie=0;ie<B.count;ie++)B.setY(ie,k(B.getX(ie),B.getZ(ie)));$.computeVertexNormals();let Y=new ct($,Za({bump:0,green:1.4}));Y.receiveShadow=!0,n.add(Y)}let se=(()=>{let $=new Pi(1,3);$.deleteAttribute("normal"),$.deleteAttribute("uv"),$=Ya($);let B=$.attributes.position;for(let Y=0;Y<B.count;Y++){let ie=B.getX(Y),de=B.getY(Y),re=B.getZ(Y),Se=1+i.noise3(ie*1.3+3,de*1.3,re*1.3)*.35+i.noise3(ie*3.1,de*3.1,re*3.1+7)*.12;B.setXYZ(Y,ie*Se,de*Se*.7,re*Se)}return $.computeVertexNormals(),$})(),X=[];for(let $=0;$<14;$++)X.push([-52+e()*36,-.8+e()*1.2,26+e()*46,2+e()*4.5]);for(let $=0;$<26;$++){let B=e()<.5,Y=-240+e()*300,ie=B?I(Y,0)-4-e()*10:y(Y,0)+4+e()*10;X.push([ie,-.5,Y,2+e()*5])}let K=new Qt(se,Za({bump:.8,green:.8}),X.length),ne=new $e,Ae=new vt;return X.forEach(([$,B,Y,ie],de)=>{Ae.setFromEuler(new yt(e()*.4,e()*6.28,e()*.4)),ne.compose(new P($,B,Y),Ae,new P(ie*(.8+e()*.6),ie,ie*(.8+e()*.6))),K.setMatrixAt(de,ne)}),K.castShadow=!0,K.receiveShadow=!0,K.computeBoundingSphere(),n.add(K),{group:n,leftWall:O,rightWall:C,portalFront:E,intrados:x,stepMeshes:W,steps:z,xL:y,xR:I,farH:k,boulders:X}}function Td(i,e,t){let n=new Pi(1,i);n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=Ya(n);let s=n.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r),a=s.getY(r),l=s.getZ(r),c=1+e.noise3(o*1.6+t,a*1.6,l*1.6)*.5+e.noise3(o*4.2,a*4.2+t,l*4.2)*.22;s.setXYZ(r,o*c,a*c*.8,l*c)}return n.computeVertexNormals(),n}function $a(i,e=0){let t=i();return new Ne().setRGB(.025+t*.07+i()*.02,.05+t*.1+i()*.025,.012+t*.025).multiplyScalar(1-e)}function Ja(i,e,t,n){let s=new Qt(i,e,t.length),r=new $e;return t.forEach((o,a)=>{r.compose(o.p,o.q,o.s),s.setMatrixAt(a,r),s.setColorAt(a,o.c)}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s.receiveShadow=!0,s.computeBoundingSphere(),s}function wd(i,e,t,n){let s=new Pt,r=[],o=[],a=[],l=[],c=new P(0,1,0),h=new P,d=[{mesh:i.leftWall,w:1},{mesh:i.rightWall,w:1},{mesh:i.portalFront,w:.55},{mesh:i.intrados,w:.3},...i.stepMeshes.map(g=>({mesh:g,w:.45}))];for(let g of d){let y=g.mesh.geometry.attributes.position,I=g.mesh.geometry.attributes.normal;for(let A=0;A<y.count;A++){let L=y.getY(A);if(L<.6||L>440)continue;let U=y.getX(A),O=y.getZ(A);if(O>150)continue;h.set(I.getX(A),I.getY(A),I.getZ(A));let C=h.y,z=_n(.1,.65,C),W=_n(95,5,L),k=_n(-.15,.35,e.fbm(U*.012,L*.012,O*.012,3)),se=(z*.6+.012*_n(-.3,.1,C)+W*.5*_n(-.25,.4,C))*(.3+.9*k)*g.w;if(se*=n.foliage,t()>se)continue;W>.6&&C>.55&&l.push(new P(U,L,O));let X=W>.4&&C>.3&&t()<.18,K=X?3.5+t()*4.5:1.2+Math.pow(t(),2)*3.6,ne=new P(U,L,O).addScaledVector(h,K*.12),Ae=new vt().setFromEuler(new yt(t()*6.28,t()*6.28,t()*6.28)),$=new P(K,K*(.65+t()*.35),K),B=$a(t,L>200?.25:.05);(X?o:r).push({p:ne,q:Ae,s:$,c:B});let Y=Math.floor(t()*3);for(let ie=0;ie<Y;ie++){let de=new P(t()-.5,(t()-.5)*.6,t()-.5).multiplyScalar(K*1.3),re=K*(.45+t()*.4);r.push({p:ne.clone().add(de),q:new vt().setFromEuler(new yt(t()*6.28,t()*6.28,t()*6.28)),s:new P(re,re*(.6+t()*.4),re),c:B.clone().multiplyScalar(.75+t()*.5)})}}}let u=Math.min(l.length,n.trees);for(let g=0;g<u;g++){let y=l[Math.floor(t()*l.length)],I=10+t()*14,A=y.clone().add(new P((t()-.5)*3,I,(t()-.5)*3)),L=A.clone().sub(y),U=L.length();a.push({p:y.clone().addScaledVector(L,.5),q:new vt().setFromUnitVectors(c,L.clone().normalize()),s:new P(.3+t()*.25,U,.3+t()*.25),c:new Ne(.09,.07,.05)});let O=5+Math.floor(t()*4),C=$a(t,.1);for(let z=0;z<O;z++){let W=2.5+t()*3.5,k=t()*Math.PI*2,se=t()*6;o.push({p:A.clone().add(new P(Math.cos(k)*se,(t()-.6)*4-se*.25,Math.sin(k)*se)),q:new vt().setFromEuler(new yt(t()*6,t()*6,t()*6)),s:new P(W*1.2,W*.55,W*1.2),c:C.clone().multiplyScalar(.7+t()*.6)})}}let f=Bc({transl:.7,bump:1.1,key:"blob"});s.add(Ja(Td(1,e,3.1),f,r,n.foliageShadow)),s.add(Ja(Td(2,e,7.7),f,o,!0));let _=new lr(.6,1,1,7),v=new en({color:16777215,roughness:.9});a.length&&s.add(Ja(_,v,a,!0));let p=Md(t),m=Bc({map:p,alphaTest:.45,side:kt,transl:1.4,bump:0,key:"card"}),S=new vs({depthPacking:oc,map:p,alphaTest:.45,side:kt}),E=[],x=[],w=[{c:[-34,31,36],r:6,n:150,from:[-95,60,45]},{c:[-25,36,28],r:5,n:120,from:[-95,60,45]},{c:[-44,25,48],r:6,n:130,from:[-95,50,60]},{c:[-18,41,40],r:4,n:90,from:[-95,60,45]},{c:[36,32,38],r:6,n:150,from:[100,60,45]},{c:[27,38,30],r:5,n:110,from:[100,60,45]},{c:[46,26,50],r:6,n:120,from:[100,50,62]}];for(let g of w){let y=new P(...g.c),I=new P(...g.from),A=y.clone().sub(I);x.push({p:I.clone().addScaledVector(A,.5),q:new vt().setFromUnitVectors(c,A.clone().normalize()),s:new P(.35,A.length(),.35),c:new Ne(.05,.04,.03)});for(let L=0;L<g.n*n.cards;L++){let U=new P(t()-.5,(t()-.5)*.7,t()-.5).normalize().multiplyScalar(Math.pow(t(),.6)*g.r),O=t(),C=I.clone().lerp(y,.55+O*.45).add(U);C.y-=Math.pow(O,2)*3;let z=1.6+t()*1.6;E.push({p:C,q:new vt().setFromEuler(new yt(t()*6.28,t()*6.28,t()*6.28)),s:new P(z,z,z),c:$a(t,.35)})}}for(let g=0;g<260*n.cards;g++){let y=new P(-50+t()*34,.6+t()*2.5,30+t()*44),I=1.2+t()*1.4;E.push({p:y,q:new vt().setFromEuler(new yt(-1.2+t()*.8,t()*6.28,(t()-.5)*.8)),s:new P(I,I,I),c:$a(t,.2)})}let T=Ja(new Zt(1,1),m,E,!0);return T.customDepthMaterial=S,s.add(T),{group:s,stats:{small:r.length,big:o.length,trees:u,cards:E.length}}}var Hr=class i extends ct{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=t.color!==void 0?new Ne(t.color):new Ne(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new rn,d=new P,u=new P,f=new P,_=new $e,v=new P(0,0,-1),p=new pt,m=new P,S=new P,E=new pt,x=new $e,w=new xt(r,o,{samples:c,type:Et}),T=new st({name:l.name!==void 0?l.name:"unspecified",uniforms:Rn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=w.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=x,this.material=T,this.onBeforeRender=function(g,y,I){let A=this.getReflectionCamera(I);if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(I.matrixWorld),_.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(_),m.subVectors(u,f),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(u),_.extractRotation(I.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(f),S.subVectors(u,v),S.reflect(d).negate(),S.add(u),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(_),A.up.reflect(d),A.lookAt(S),A.far=I.far,A.updateMatrixWorld(),A.projectionMatrix.copy(I.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(A.projectionMatrix),x.multiply(A.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(A.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let U=A.projectionMatrix;A.isOrthographicCamera?(E.x=(Math.sign(p.x)+U.elements[8])/U.elements[0],E.y=(Math.sign(p.y)+U.elements[9])/U.elements[5],E.z=-I.far,E.w=1):(E.x=(Math.sign(p.x)+U.elements[8])/U.elements[0],E.y=(Math.sign(p.y)+U.elements[9])/U.elements[5],E.z=-1,E.w=(1+U.elements[10])/U.elements[14]),p.multiplyScalar(2/p.dot(E)),U.elements[2]=p.x,U.elements[6]=p.y,A.isOrthographicCamera?(U.elements[10]=p.z-a,U.elements[14]=p.w-1):(U.elements[10]=p.z+1-a,U.elements[14]=p.w),n.visible=!1;let O=g.getRenderTarget(),C=g.xr.enabled,z=g.shadowMap.autoUpdate;g.xr.enabled=!1,g.shadowMap.autoUpdate=!1,g.setRenderTarget(w),g.state.buffers.depth.setMask(!0),g.autoClear===!1&&g.clear(),g.render(y,A),g.xr.enabled=C,g.shadowMap.autoUpdate=z,g.setRenderTarget(O);let W=I.viewport;W!==void 0&&g.state.viewport(W),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()},this.getReflectionCamera=function(g){let y=this._reflectionCameras.get(g);return y===void 0&&(y=g.clone(),this._reflectionCameras.set(g,y)),y}}};Hr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Rd=`
	vec2 waveGrad( vec2 p, float t ) {
		vec2 g = vec2( 0.0 );
		vec2 d;
		d = normalize( vec2( 0.3, 1.0 ) );  g += d * cos( dot( d, p ) * 0.21 + t * 0.7 ) * 0.010;
		d = normalize( vec2( - 0.8, 0.6 ) ); g += d * cos( dot( d, p ) * 0.37 + t * 0.9 ) * 0.008;
		d = normalize( vec2( 0.9, 0.2 ) );  g += d * cos( dot( d, p ) * 0.63 + t * 1.3 ) * 0.007;
		d = normalize( vec2( - 0.2, - 1.0 ) ); g += d * cos( dot( d, p ) * 1.10 + t * 1.7 ) * 0.006;
		d = normalize( vec2( 0.6, - 0.7 ) ); g += d * cos( dot( d, p ) * 1.90 + t * 2.3 ) * 0.005;
		float e = 0.2;
		vec2 q = p * 0.33 + vec2( t * 0.04, t * 0.03 );
		float h0 = fbm3( q );
		g += vec2( fbm3( q + vec2( e, 0.0 ) ) - h0, fbm3( q + vec2( 0.0, e ) ) - h0 ) / e * 0.05;
		return g;
	}
`,mx={name:"Lake",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;
		varying vec3 vWorld;
		#include <common>
		void main() {
			vUv = textureMatrix * vec4( position, 1.0 );
			vec4 wp = modelMatrix * vec4( position, 1.0 );
			vWorld = wp.xyz;
			gl_Position = projectionMatrix * viewMatrix * wp;
		}
	`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime;
		varying vec4 vUv;
		varying vec3 vWorld;
		#include <common>
		${hn}
		${cn}
		${Rd}
		void main() {
			vec2 g = waveGrad( vWorld.xz, uTime );
			vec3 N = normalize( vec3( - g.x, 1.0, - g.y ) );
			vec3 V = normalize( cameraPosition - vWorld );
			float NdV = clamp( dot( N, V ), 0.0, 1.0 );
			float F = 0.02 + 0.98 * pow( clamp( 1.0 - NdV, 0.0, 1.0 ), 5.0 );
			vec2 ruv = vUv.xy / vUv.w + N.xz * 0.03;
			vec3 refl = texture2D( tDiffuse, ruv ).rgb;
			float m = sunMask( vWorld );
			vec3 deep = vec3( 0.010, 0.026, 0.020 ) * ( 0.6 + 0.8 * m );
			vec3 R = reflect( - V, N );
			float rs = clamp( dot( R, SUN_DIR ), 0.0, 1.0 );
			vec3 col = deep * ( 1.0 - F ) + refl * F;
			float sparkle = smoothstep( 0.6, 0.95, vnoise( vWorld.xz * 2.5 + uTime * 0.7 ) );
			col += SUN_COLOR * ( pow( rs, 1400.0 ) * 10.0 * sparkle + pow( rs, 200.0 ) * 0.25 ) * m;
			col = atmos( col, vWorld );
			gl_FragColor = vec4( col, 1.0 );
			#include <tonemapping_fragment>
			#include <colorspace_fragment>
		}
	`},gx=`
	uniform float uTime;
	uniform float uOpen;
	varying vec3 vWorld;
	#include <common>
	${hn}
	${cn}
	${Rd}
	void main() {
		vec2 g = waveGrad( vWorld.xz * 1.5, uTime * 1.3 ) * 1.8;
		vec3 N = normalize( vec3( - g.x, 1.0, - g.y ) );
		vec3 V = normalize( cameraPosition - vWorld );
		float NdV = clamp( dot( N, V ), 0.0, 1.0 );
		float F = 0.02 + 0.98 * pow( clamp( 1.0 - NdV, 0.0, 1.0 ), 5.0 );
		vec3 R = reflect( - V, N );
		vec3 sky = vec3( 1.5, 1.25, 0.95 ) + SUN_COLOR * pow( clamp( dot( R, SUN_DIR ), 0.0, 1.0 ), 12.0 ) * 3.0;
		vec3 rockC = vec3( 0.05, 0.07, 0.05 );
		float open = uOpen < 0.5 ? 1.0 : uOpen;
		if ( uOpen < 0.5 && vWorld.z > ${(-400).toFixed(1)} ) {
			float t = ( ${(-400).toFixed(1)} - vWorld.z ) / min( R.z, - 1e-3 );
			vec2 q = vWorld.xy + R.xy * t;
			open = 1.0 - smoothstep( - 20.0, 10.0, archSDF( q ) );
		}
		vec3 refl = mix( rockC, sky, open );
		float m = sunMask( vWorld );
		vec3 col = vec3( 0.02, 0.04, 0.03 ) * ( 0.5 + m ) * ( 1.0 - F ) + refl * F;
		col += SUN_COLOR * pow( clamp( dot( R, SUN_DIR ), 0.0, 1.0 ), 800.0 ) * 6.0 * m;
		col = atmos( col, vWorld );
		gl_FragColor = vec4( col, 1.0 );
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`;function Ad(i,e){return new st({name:"Pond",uniforms:{uTime:i.uTime,uOpen:{value:e}},vertexShader:`
			varying vec3 vWorld;
			void main() {
				vec4 wp = modelMatrix * vec4( position, 1.0 );
				vWorld = wp.xyz;
				gl_Position = projectionMatrix * viewMatrix * wp;
			}
		`,fragmentShader:gx})}function Cd(i,e,t){let n=new Pt,s=new Hr(new Zt(640,500),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:t.msaa>0?4:0,shader:mx});s.rotation.x=-Math.PI/2,s.position.set(20,0,-18),s.material.uniforms.uTime=i.uTime,n.add(s);let r=Ad(i,0);e.steps.forEach((o,a)=>{let l=e.steps[a+1],c=l?l.z:o.z-36,h=new Zt(o.x1-o.x0,o.z-c+2);h.rotateX(-Math.PI/2);let d=new ct(h,r);d.position.set((o.x0+o.x1)/2,o.top-.4,(o.z+c)/2-1),n.add(d)});{let o=new Zt(700,2400);o.rotateX(-Math.PI/2);let a=new ct(o,Ad(i,1));a.position.set(20,30.6,-1588),n.add(a)}return{group:n,lake:s}}var _x=`
	varying vec2 vUv;
	varying vec3 vWorld;
	void main() {
		vUv = uv;
		vec4 wp = modelMatrix * vec4( position, 1.0 );
		vWorld = wp.xyz;
		gl_Position = projectionMatrix * viewMatrix * wp;
	}
`,xx=`
	uniform float uTime;
	uniform float uSpeed;
	uniform vec2 uScale;
	uniform float uOpacity;
	uniform float uSeed;
	varying vec2 vUv;
	varying vec3 vWorld;
	${hn}
	${cn}
	void main() {
		float x = vUv.x;
		float y = vUv.y;
		vec2 q = vec2( x * uScale.x + uSeed * 17.0, y * uScale.y );
		float t = uTime * uSpeed;
		float n1 = fbm( vec2( q.x, ( q.y - t ) * 0.10 ) );
		float n2 = fbm( vec2( q.x * 2.6 + 3.0, ( q.y - t * 1.35 ) * 0.22 ) );
		float dens = smoothstep( 0.32, 0.78, n1 * 0.65 + n2 * 0.5 ) * ( 0.55 + 0.45 * smoothstep( 0.3, 0.6, fbm( vec2( q.x * 0.35, ( q.y - t * 0.8 ) * 0.05 ) ) ) );
		float foam = smoothstep( 0.45, 0.85, fbm( vec2( q.x * 0.6, ( q.y - t * 1.1 ) * 0.45 ) ) ) * smoothstep( 0.3, 1.0, y );
		float edge = smoothstep( 0.0, 0.18, x ) * smoothstep( 1.0, 0.82, x );
		edge *= 0.6 + 0.4 * smoothstep( 0.2, 0.7, fbm( vec2( x * 6.0 + uSeed, y * 2.0 - t * 0.05 ) ) );
		float topFade = smoothstep( 0.0, 0.04, y );
		float a = clamp( dens * 0.85 + foam * 0.7, 0.0, 1.0 ) * edge * topFade * uOpacity;

		vec3 V = normalize( cameraPosition - vWorld );
		float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 3.0 );
		float m = sunMask( vWorld );
		vec3 base = vec3( 0.70, 0.78, 0.80 );
		vec3 col = base * vec3( 0.20, 0.25, 0.27 ) * ( 0.8 + 0.6 * foam );
		col += base * SUN_COLOR * ( 0.25 + m * ( 0.6 + 3.0 * back ) ) * ( 0.7 + 0.5 * foam );
		col = atmos( col, vWorld );
		gl_FragColor = vec4( col, a );
	}
`;function Pd(i,e,t,n,s,r){let o=new Zt(1,1,6,48),a=o.attributes.position,l=o.attributes.uv,c=new P().crossVectors(new P(0,1,0),e).normalize(),h=new P;for(let d=0;d<a.count;d++){let u=a.getX(d)+.5,f=.5-a.getY(d),_=t+(n-t)*f;h.copy(i).addScaledVector(c,(u-.5)*_).addScaledVector(e,r*Math.sqrt(f)).add(new P(0,-s*f,0)),a.setXYZ(d,h.x,h.y,h.z),l.setXY(d,u,f)}return o.computeBoundingSphere(),o}function Id(i,e,t,n){let s=new Pt,r=[],o=new br,a=(x,w,T,g)=>new st({name:"Waterfall",transparent:!0,depthWrite:!1,side:kt,uniforms:{uTime:i.uTime,uSpeed:{value:T},uScale:{value:new oe(x,w)},uOpacity:{value:g},uSeed:{value:t()*10}},vertexShader:_x,fragmentShader:xx}),l=(x,w)=>{let T=new ct(x,w);return T.renderOrder=3,s.add(T),T},c=(x,w,T,g)=>{o.set(new P(20,w,T),new P(g,0,0));let y=o.intersectObject(x,!1)[0];return y?y.point:null},h=[{wall:e.leftWall,y:125,z:-175,dir:-1,w0:20,w1:34,throw:12,land:0},{wall:e.rightWall,y:168,z:-225,dir:1,w0:14,w1:26,throw:10,land:18},{wall:e.leftWall,y:120,z:-310,dir:-1,w0:10,w1:16,throw:8,land:20},{wall:e.rightWall,y:95,z:-130,dir:1,w0:8,w1:13,throw:6,land:6}];for(let x of h){let w=c(x.wall,x.y,x.z,x.dir);if(!w)continue;let T=new P(-x.dir,0,.15).normalize(),g=w.clone().addScaledVector(T,1.5),y=g.y-x.land;l(Pd(g,T,x.w0,x.w1,y,x.throw),a(7+x.w0*.4,y*.08,1.4,.95)),r.push({p:g.clone().addScaledVector(T,x.throw).setY(x.land+4),s:x.w1*1.6,n:6})}e.steps.forEach((x,w)=>{let T=w===0?0:e.steps[w-1].top,g=x.top-T+1.2,y=2+Math.floor(t()*3),I=150;for(let A=0;A<y;A++){let L=8+t()*24,U=20-I/2+t()*I,O=new P(U,x.top+.3,x.z+1);l(Pd(O,new P(0,0,1),L,L*1.15,g,1.6),a(4+L*.3,g*.25,1,.9)),r.push({p:new P(U,T+2.5,x.z+4),s:L*.9,n:2})}});let d=[];for(let x of r)for(let w=0;w<x.n;w++)d.push(x);let u=Math.min(d.length*2,n.mist),f=new Zt(1,1),_=new Li;_.setIndex(f.index),_.setAttribute("position",f.attributes.position),_.setAttribute("uv",f.attributes.uv);let v=new Float32Array(u*3),p=new Float32Array(u),m=new Float32Array(u);for(let x=0;x<u;x++){let w=d[x%d.length];v.set([w.p.x+(t()-.5)*w.s*1.4,w.p.y+w.s*.25+t()*6,w.p.z+(t()-.5)*w.s*.6],x*3),p[x]=w.s*(1.1+t()*1.1),m[x]=t()}_.setAttribute("aOffset",new En(v,3)),_.setAttribute("aScale",new En(p,1)),_.setAttribute("aSeed",new En(m,1)),_.instanceCount=u;let S=new st({name:"Mist",transparent:!0,depthWrite:!1,uniforms:{uTime:i.uTime,uNoise:{value:Sd(128,t)},uOpacity:{value:.26}},vertexShader:`
			attribute vec3 aOffset;
			attribute float aScale;
			attribute float aSeed;
			uniform float uTime;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying vec3 vWorld;
			void main() {
				float life = fract( uTime * 0.05 * ( 0.6 + aSeed ) + aSeed );
				vec3 c = aOffset + vec3( sin( uTime * 0.1 + aSeed * 6.0 ) * 2.0, life * 14.0, life * 4.0 );
				float s = aScale * ( 0.6 + life * 0.9 );
				vec3 right = vec3( viewMatrix[ 0 ][ 0 ], viewMatrix[ 1 ][ 0 ], viewMatrix[ 2 ][ 0 ] );
				vec3 up = vec3( viewMatrix[ 0 ][ 1 ], viewMatrix[ 1 ][ 1 ], viewMatrix[ 2 ][ 1 ] );
				float ang = aSeed * 6.283 + uTime * 0.02 * ( aSeed - 0.5 );
				vec2 rp = mat2( cos( ang ), - sin( ang ), sin( ang ), cos( ang ) ) * position.xy;
				vec3 wp = c + ( right * rp.x + up * rp.y ) * s;
				vec4 mv = viewMatrix * vec4( wp, 1.0 );
				gl_Position = projectionMatrix * mv;
				vUv = uv;
				vSeed = aSeed;
				vFade = sin( life * 3.14159 ) * smoothstep( 5.0, 20.0, - mv.z );
				vWorld = wp;
			}
		`,fragmentShader:`
			uniform sampler2D uNoise;
			uniform float uTime;
			uniform float uOpacity;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying vec3 vWorld;
			${cn}
			void main() {
				vec2 q = vUv * 0.9 + vec2( vSeed * 7.3, vSeed * 3.1 - uTime * 0.02 );
				float n1 = texture2D( uNoise, q ).r;
				float n2 = texture2D( uNoise, q * 2.3 + n1 * 0.25 ).g;
				float n = n1 * 0.65 + n2 * 0.45;
				float r = length( vUv - 0.5 ) * 2.0;
				float mask = 1.0 - smoothstep( 0.2, 1.0, r + ( n - 0.5 ) * 0.6 );
				float dens = smoothstep( 0.2, 0.9, n * mask * 1.3 ) * mask * mask;
				dens *= smoothstep( 0.0, 0.35, vUv.y );
				vec3 V = normalize( cameraPosition - vWorld );
				float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 3.0 );
				float m = sunMask( vWorld );
				vec3 col = vec3( 0.16, 0.2, 0.2 ) + SUN_COLOR * m * ( 0.2 + 0.9 * back );
				col *= 0.7 + 0.5 * n;
				col = atmos( col, vWorld );
				gl_FragColor = vec4( col, dens * vFade * uOpacity );
			}
		`}),E=new ct(_,S);return E.frustumCulled=!1,E.renderOrder=4,s.add(E),{group:s}}function vx(){let i=new hi;i.moveTo(-12,0),i.lineTo(-12,26),i.lineTo(12,26),i.lineTo(12,0),i.lineTo(8,0),i.lineTo(8,12),i.absarc(0,12,8,0,Math.PI,!1),i.lineTo(-8,0),i.lineTo(-12,0);let e=new Ci(i,{depth:7,bevelEnabled:!1,curveSegments:10});return e.translate(0,0,-3.5),e}function Ld(i,e){let t=new Pt,n=[],s=[],r=[],o=(v,p,m,S)=>{let E=i.farH(v,p)-2,x=E,w=S,T=2+Math.floor(e()*3);for(let g=0;g<T;g++){let y=m*(g===0?.45:.55/(T-1))*(.85+e()*.3);n.push({x:v,z:p,y:x,w,d:w*(.8+e()*.4),h:y,r:e()*.3}),x+=y,n.push({x:v,z:p,y:x-1.5,w:w*1.25,d:w*1.25,h:2.5,r:0}),w*=.62+e()*.15}e()<.75&&n.push({x:v,z:p,y:x,w:Math.max(1.5,w*.25),d:Math.max(1.5,w*.25),h:m*(.15+e()*.25),r:0}),r.push({x:v,z:p,top:x,base:E})};o(-5,-1150,560,46),o(70,-1350,420,34);for(let v=0;v<70;v++){let p=-800-Math.pow(e(),.8)*1900,m=160+(-p-800)*.35,S=20+(e()-.5)*2*m;if(r.some(w=>Math.hypot(w.x-S,w.z-p)<45))continue;let x=90+Math.pow(e(),1.6)*360;o(S,p,x,14+e()*26)}let a=(v,p,m)=>{let S=p.x-v.x,E=p.z-v.z,x=Math.hypot(S,E),w=Math.floor(x/24),T=Math.atan2(S,E)+Math.PI/2;for(let g=0;g<w;g++){let y=(g+.5)/w;s.push({x:v.x+S*y,z:v.z+E*y,y:m,rot:T})}},l=[...r].sort((v,p)=>p.top-v.top);for(let v=0;v<6;v++){let p=l[v],m=l.slice(v+1).sort((E,x)=>Math.hypot(E.x-p.x,E.z-p.z)-Math.hypot(x.x-p.x,x.z-p.z))[0];if(!m)continue;let S=Math.min(p.top,m.top)*.35+Math.max(p.base,m.base)*.65+40;a(p,m,S)}a({x:-260,z:-950},{x:330,z:-1020},95),a({x:-220,z:-1500},{x:380,z:-1420},150);let c=new en({color:13812906,roughness:.85}),h=new on(1,1,1);h.translate(0,.5,0);let d=new Qt(h,c,n.length),u=new $e,f=new vt;n.forEach((v,p)=>{f.setFromEuler(new yt(0,v.r,0)),u.compose(new P(v.x,v.y,v.z),f,new P(v.w,v.h,v.d)),d.setMatrixAt(p,u)}),d.computeBoundingSphere(),t.add(d);let _=new Qt(vx(),c,s.length);return s.forEach((v,p)=>{f.setFromEuler(new yt(0,v.rot,0)),u.compose(new P(v.x,v.y,v.z),f,new P(1,1,1)),_.setMatrixAt(p,u)}),_.computeBoundingSphere(),t.add(_),{group:t,stats:{towers:r.length,arches:s.length}}}function yx(){let i=new hi;i.moveTo(-.62,0),i.lineTo(0,.55),i.lineTo(.62,0),i.lineTo(-.62,0);let e=new Ci(i,{depth:1.15,bevelEnabled:!1});return e.translate(0,0,-.575),e}function Dd(i,e,t,n){let s=new Pt,r=e.rightWall.geometry.attributes.position,o=e.rightWall.geometry.attributes.normal,a=[],l=[];for(let O=0;O<r.count;O++){let C=r.getX(O),z=r.getY(O),W=r.getZ(O);W>-40||W<-240||(z>1.5&&z<26&&o.getY(O)>.62&&a.push(new P(C,z,W)),z>.3&&z<2.2&&o.getY(O)>.3&&l.push(new P(C,z,W)))}let c=[];for(let O=0;O<400&&c.length<24;O++){let C=a[Math.floor(t()*a.length)];if(!C)break;c.some(z=>z.p.distanceTo(C)<11)||c.push({p:C,w:6+t()*5,d:5+t()*4,h:3.5+t()*2.5,r:(t()-.5)*.6+Math.PI/2})}let h=new en({color:2759698,roughness:.9}),d=new en({color:1906452,roughness:.8}),u=new on(1,1,1);u.translate(0,.5,0);let f=new Qt(u,h,c.length),_=new Qt(yx(),d,c.length),v=new $e,p=new vt,m=[];c.forEach((O,C)=>{p.setFromEuler(new yt(0,O.r,0));let z=O.p.clone().setY(O.p.y-.8);v.compose(z,p,new P(O.w,O.h+.8,O.d)),f.setMatrixAt(C,v),v.compose(z.clone().setY(z.y+O.h+.8),p,new P(O.w,O.h*.9,O.d)),_.setMatrixAt(C,v);let W=1+Math.floor(t()*2);for(let k=0;k<W;k++)m.push({p:z.clone().add(new P(-O.d*.5-.1,O.h*(.35+t()*.2),(t()-.5)*O.w*.6)),c:[6,3,1.2],s:1.2+t()*.6})}),f.castShadow=_.castShadow=!0,f.receiveShadow=_.receiveShadow=!0,f.computeBoundingSphere(),_.computeBoundingSphere(),s.add(f,_);for(let O=0;O<26&&l.length;O++){let C=l[Math.floor(t()*l.length)];m.push({p:C.clone().add(new P(-1,2.2+t()*1.5,0)),c:[7,3.2,1.1],s:1.6+t()*.8})}let S=new on(1,1,1),E=new Qt(S,h,7);for(let O=0;O<7;O++){let C=-40-t()*170,z=e.xR(C,0)-22-t()*30;p.setFromEuler(new yt(0,t()*.6-.3,0)),v.compose(new P(z,.25,C),p,new P(1.6,.6,6)),E.setMatrixAt(O,v),m.push({p:new P(z,1.6,C+2),c:[6,2.8,1],s:1.3})}E.castShadow=!0,E.computeBoundingSphere(),s.add(E),m.push({p:new P(-33,3.2,48),c:[7,3.2,1.1],s:1.4}),m.push({p:new P(-41,2.6,60),c:[7,3.2,1.1],s:1.2});let x=new Tt,w=new Float32Array(m.length*3),T=new Float32Array(m.length*3),g=new Float32Array(m.length),y=new Float32Array(m.length);m.forEach((O,C)=>{w.set([O.p.x,O.p.y,O.p.z],C*3),T.set(O.c,C*3),g[C]=O.s,y[C]=t()*10}),x.setAttribute("position",new Ct(w,3)),x.setAttribute("aColor",new Ct(T,3)),x.setAttribute("aSize",new Ct(g,1)),x.setAttribute("aPhase",new Ct(y,1));let I=new ir(x,new st({name:"Lanterns",transparent:!0,depthWrite:!1,blending:Ui,uniforms:{uTime:i.uTime,uPointScale:i.uPointScale,uGlow:{value:bd()}},vertexShader:`
			attribute vec3 aColor;
			attribute float aSize;
			attribute float aPhase;
			uniform float uTime;
			uniform float uPointScale;
			varying vec3 vColor;
			varying vec3 vWorld;
			void main() {
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mv;
				gl_PointSize = max( aSize * 1.6 * uPointScale / - mv.z, 2.5 );
				float flick = 0.85 + 0.15 * sin( uTime * 7.0 + aPhase ) * sin( uTime * 3.1 + aPhase * 2.0 );
				vColor = aColor * flick;
				vWorld = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
			}
		`,fragmentShader:`
			uniform sampler2D uGlow;
			varying vec3 vColor;
			varying vec3 vWorld;
			${cn}
			void main() {
				float g = texture2D( uGlow, gl_PointCoord ).r;
				float core = smoothstep( 0.18, 0.0, length( gl_PointCoord - 0.5 ) );
				gl_FragColor = vec4( vColor * ( g * 0.35 + core * 2.0 ) * atmosT( vWorld ), 1.0 );
			}
		`}));I.frustumCulled=!1,s.add(I);let A=m.filter((O,C)=>C%Math.max(1,Math.floor(m.length/n.pointLights))===0).slice(0,n.pointLights);for(let O of A){let C=new Mr(16751178,120,45,2);C.position.copy(O.p),s.add(C)}let L=new ar(1,14,.25,Math.PI*2-.5);L.rotateX(-Math.PI/2);let U=new Qt(L,new en({color:16777215,roughness:.55}),140);for(let O=0;O<140;O++){let z=t()<.6?25+t()*60:-35+t()*25,W=15+t()*60,k=.7+t()*1.1;p.setFromEuler(new yt(0,t()*6.28,0)),v.compose(new P(z,.06,W),p,new P(k,1,k)),U.setMatrixAt(O,v),U.setColorAt(O,new Ne().setRGB(.05+t()*.05,.1+t()*.06,.03))}return U.receiveShadow=!0,U.computeBoundingSphere(),s.add(U),{group:s,stats:{houses:c.length,lights:m.length}}}function Nd(i,e,t){let n=new Float32Array([0,0,.6,-1,.05,-.2,0,0,-.5,0,0,.6,0,0,-.5,1,.05,-.2]),s=new Li;s.setAttribute("position",new Ct(n,3));let r=new Float32Array(t*4);for(let l=0;l<t;l++)r.set([e(),e(),e(),e()],l*4);s.setAttribute("aSeed",new En(r,4)),s.instanceCount=t;let o=new st({name:"Birds",side:kt,uniforms:{uTime:i.uTime},vertexShader:`
			attribute vec4 aSeed;
			uniform float uTime;
			varying vec3 vWorld;
			void main() {
				float t = uTime * ( 0.05 + aSeed.x * 0.02 ) + aSeed.y * 6.283;
				vec3 c = vec3( 25.0, 175.0, - 560.0 );
				vec3 off = vec3( sin( t ) * 75.0, sin( t * 2.0 + aSeed.z * 3.0 ) * 18.0, cos( t ) * 45.0 );
				off += ( aSeed.xyz - 0.5 ) * vec3( 50.0, 25.0, 40.0 );
				vec3 vel = normalize( vec3( cos( t ) * 75.0, cos( t * 2.0 + aSeed.z * 3.0 ) * 36.0, - sin( t ) * 45.0 ) );
				float flap = sin( uTime * ( 9.0 + aSeed.w * 4.0 ) + aSeed.w * 20.0 );
				vec3 p = position;
				p.y += abs( p.x ) * flap * 0.7;
				float s = 1.8 + aSeed.w * 1.2;
				vec3 fwd = vel;
				vec3 side = normalize( cross( vec3( 0.0, 1.0, 0.0 ), fwd ) );
				vec3 upv = cross( fwd, side );
				vec3 wp = c + off + ( side * p.x + upv * p.y + fwd * p.z ) * s;
				vWorld = wp;
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}
		`,fragmentShader:`
			varying vec3 vWorld;
			${cn}
			void main() {
				gl_FragColor = vec4( atmos( vec3( 0.02, 0.018, 0.015 ), vWorld ), 1.0 );
			}
		`}),a=new ct(s,o);return a.frustumCulled=!1,a}function Mx(i,{envOnly:e=!1}={}){return new st({name:e?"SkyEnv":"Sky",side:Ot,depthWrite:!1,uniforms:{uTime:i.uTime},vertexShader:`
			varying vec3 vDir;
			void main() {
				vDir = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`,fragmentShader:`
			uniform float uTime;
			varying vec3 vDir;
			${hn}
			${cn}
			void main() {
				vec3 d = normalize( vDir );
				float s = clamp( dot( d, SUN_DIR ), 0.0, 1.0 );
				vec3 zen = vec3( 0.30, 0.48, 0.80 );
				vec3 hor = vec3( 1.05, 0.88, 0.66 );
				vec3 col = mix( hor, zen, smoothstep( 0.0, 0.6, d.y ) );
				col = mix( col, vec3( 1.2, 0.95, 0.7 ), smoothstep( 0.0, - 0.08, d.y ) );
				col += SUN_COLOR * ( pow( s, 8.0 ) * 1.0 + pow( s, 90.0 ) * 5.0 );
				${e?"":"col += SUN_COLOR * smoothstep( 0.99955, 0.99985, s ) * 28.0;"}
				vec2 cuv = d.xz / max( d.y + 0.15, 0.05 );
				float c = smoothstep( 0.5, 0.8, fbm( cuv * vec2( 0.8, 2.5 ) + vec2( uTime * 0.004, 0.0 ) ) ) * smoothstep( - 0.02, 0.15, d.y );
				col = mix( col, vec3( 1.0, 0.8, 0.6 ) + SUN_COLOR * pow( s, 10.0 ) * 2.0, c * 0.35 );
				gl_FragColor = vec4( col, 1.0 );
				#include <tonemapping_fragment>
				#include <colorspace_fragment>
			}
		`})}function Ud(i){let e=new ct(new _s(5200,48,24),Mx(i));return e.frustumCulled=!1,e.renderOrder=-10,e}function Fd(i){let e=new wi,t=new st({side:Ot,depthWrite:!1,vertexShader:`
			varying vec3 vDir;
			void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
		`,fragmentShader:`
			varying vec3 vDir;
			void main() {
				vec3 d = normalize( vDir );
				vec3 rock = mix( vec3( 0.03, 0.04, 0.03 ), vec3( 0.09, 0.11, 0.10 ), smoothstep( - 0.4, 0.6, d.y ) );
				vec3 open = normalize( vec3( 0.04, 0.22, - 1.0 ) );
				float o = smoothstep( 0.90, 0.97, dot( d, open ) );
				vec3 col = rock + vec3( 1.6, 1.25, 0.9 ) * o;
				col += vec3( 0.25, 0.32, 0.4 ) * smoothstep( 0.6, 1.0, d.y ) * 0.4;
				gl_FragColor = vec4( col, 1.0 );
			}
		`});return e.add(new ct(new _s(100,48,24),t)),e}var Rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sx=new Ii(-1,1,1,-1,0,1),zc=class extends Tt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},bx=new zc,Bn=class{constructor(e){this._mesh=new ct(bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gi=class extends jt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof st?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new st({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Bn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vr=class extends jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ka=class extends jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Et}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gi(Rs),this.copyPass.material.blending=Kn,this.timer=new Di}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vr!==void 0&&(o instanceof Vr?n=!0:o instanceof Ka&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ja=class extends jt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Od={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Cs=class i extends jt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xt(r,o,{type:Et,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new xt(r,o,{type:Et,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new xt(r,o,{type:Et,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Od;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new st({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(Rs.uniforms),this.blendMaterial=new st({uniforms:this.copyUniforms,vertexShader:Rs.vertexShader,fragmentShader:Rs.fragmentShader,premultipliedAlpha:!0,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new fs,this._fsQuad=new Bn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new st({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new st({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Cs.BlurDirectionX=new oe(1,0);Cs.BlurDirectionY=new oe(0,1);var Gr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var el=class extends jt{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(Gr.uniforms),this.material=new xs({name:Gr.name,uniforms:this.uniforms,vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader}),this._fsQuad=new Bn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Er?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ar&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ps=`
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`,Ex={name:"Sanitize",uniforms:{tDiffuse:{value:null}},vertexShader:Ps,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 300.0 ), 1.0 );
		}
	`},kc=class extends jt{constructor(e,t,{samples:n=64,scale:s=.5,intensity:r=.28}={}){super(),this.camera=e,this.sunDir=t.clone(),this.scale=s,this.intensity=r;let o={type:Et};this.rtMask=new xt(1,1,o),this.rtBlur=new xt(1,1,o),this.sunUv=new oe,this.maskMat=new st({uniforms:{tDiffuse:{value:null},uSun:{value:this.sunUv},uAspect:{value:1},uThreshold:{value:4.5}},vertexShader:Ps,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform vec2 uSun;
				uniform float uAspect;
				uniform float uThreshold;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb;
					float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
					float k = max( l - uThreshold, 0.0 ) / max( l, 1e-4 );
					vec2 d = ( vUv - uSun ) * vec2( uAspect, 1.0 );
					gl_FragColor = vec4( min( c * k, vec3( 20.0 ) ) * exp( - dot( d, d ) * 2.5 ), 1.0 );
				}
			`}),this.blurMat=new st({defines:{SAMPLES:n},uniforms:{tMask:{value:null},uSun:{value:this.sunUv},uDensity:{value:.92},uDecay:{value:.958},uWeight:{value:.05}},vertexShader:Ps,fragmentShader:`
				uniform sampler2D tMask;
				uniform vec2 uSun;
				uniform float uDensity;
				uniform float uDecay;
				uniform float uWeight;
				varying vec2 vUv;
				${hn}
				void main() {
					vec2 delta = ( vUv - uSun ) * uDensity / float( SAMPLES );
					vec2 uv = vUv - delta * hash12( vUv * 913.0 );
					float illum = 1.0;
					vec3 acc = vec3( 0.0 );
					for ( int i = 0; i < SAMPLES; i ++ ) {
						uv -= delta;
						acc += texture2D( tMask, uv ).rgb * illum * uWeight;
						illum *= uDecay;
					}
					gl_FragColor = vec4( acc, 1.0 );
				}
			`}),this.compMat=new st({uniforms:{tDiffuse:{value:null},tRays:{value:null},uIntensity:{value:0}},vertexShader:Ps,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tRays;
				uniform float uIntensity;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb + texture2D( tRays, vUv ).rgb * vec3( 1.0, 0.85, 0.65 ) * uIntensity;
					gl_FragColor = vec4( c, 1.0 );
				}
			`}),this.quad=new Bn(null),this._v=new P}setSize(e,t){let n=Math.max(1,Math.round(e*this.scale)),s=Math.max(1,Math.round(t*this.scale));this.rtMask.setSize(n,s),this.rtBlur.setSize(n,s),this.maskMat.uniforms.uAspect.value=e/t}render(e,t,n){let s=this._v.copy(this.camera.position).addScaledVector(this.sunDir,4e3),r=s.clone().applyMatrix4(this.camera.matrixWorldInverse);s.project(this.camera),this.sunUv.set(s.x*.5+.5,s.y*.5+.5);let o=Math.max(Math.abs(s.x),Math.abs(s.y)),a=r.z<0?1-mc.smoothstep(o,1.1,2):0;this.maskMat.uniforms.tDiffuse.value=n.texture,this.quad.material=this.maskMat,e.setRenderTarget(this.rtMask),this.quad.render(e),this.blurMat.uniforms.tMask.value=this.rtMask.texture,this.quad.material=this.blurMat,e.setRenderTarget(this.rtBlur),this.quad.render(e),this.compMat.uniforms.tDiffuse.value=n.texture,this.compMat.uniforms.tRays.value=this.rtBlur.texture,this.compMat.uniforms.uIntensity.value=this.intensity*a,this.quad.material=this.compMat,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.quad.render(e)}},Tx={name:"Grade",uniforms:{tDiffuse:{value:null},uExposure:{value:1.22}},vertexShader:Ps,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uExposure;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			c *= mix( vec3( 0.88, 1.02, 1.06 ), vec3( 1.06, 1.0, 0.9 ), smoothstep( 0.02, 0.6, l ) );
			c = mix( vec3( l ), c, 1.15 );
			gl_FragColor = vec4( max( c, 0.0 ), 1.0 );
		}
	`},wx={name:"Final",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new oe(1,1)},uFade:{value:0}},vertexShader:Ps,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform vec2 uRes;
		uniform float uFade;
		varying vec2 vUv;
		${hn}
		void main() {
			vec2 c = vUv - 0.5;
			vec3 col = texture2D( tDiffuse, vUv ).rgb;
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			col *= mix( 0.62, 1.0, smoothstep( 1.05, 0.3, length( vc ) ) );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.022;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`};function Bd(i,e,t,n,s){let r=i.getDrawingBufferSize(new oe),o=new xt(r.x,r.y,{type:Et,samples:s.msaa}),a=new Qa(i,o);a.addPass(new ja(e,t)),a.addPass(new gi(Ex));let l=new kc(t,n,{samples:s.raySamples,scale:s.rayScale});a.addPass(l);let c=new Cs(new oe(r.x,r.y),.35,.6,2.2);a.addPass(c);let h=new gi(Tx);a.addPass(h),a.addPass(new el);let d=new gi(wx);return a.addPass(d),{composer:a,rays:l,bloom:c,grade:h,final:d,setSize(u,f,_){a.setPixelRatio(_),a.setSize(u,f),d.uniforms.uRes.value.set(u*_,f*_)}}}function zd(){let i=null,e=null,t=0,n=!1;function s(l){let c=i.sampleRate*l,h=i.createBuffer(2,c,i.sampleRate);for(let d=0;d<2;d++){let u=h.getChannelData(d),f=0;for(let _=0;_<c;_++){let v=Math.random()*2-1;f=.985*f+.015*v,u[_]=v*.35+f*4}}return h}function r(l,c,h,d,u,f){let _=i.createBufferSource();_.buffer=l,_.loop=!0;let v=i.createBiquadFilter();v.type=c,v.frequency.value=h,v.Q.value=d;let p=i.createGain();return p.gain.value=u,_.connect(v).connect(p).connect(e),_.start(0,f),p}function o(){if(!i||i.state!=="running")return;let l=i.currentTime+.05,c=2200+Math.random()*2200,h=2+Math.floor(Math.random()*4),d=i.createStereoPanner?i.createStereoPanner():null,u=i.createGain();u.gain.value=.05+Math.random()*.06,d?(d.pan.value=Math.random()*1.6-.8,u.connect(d).connect(e)):u.connect(e);for(let f=0;f<h;f++){let _=l+f*(.09+Math.random()*.05),v=i.createOscillator();v.type="sine";let p=c*(.9+Math.random()*.3);v.frequency.setValueAtTime(p,_),v.frequency.exponentialRampToValueAtTime(p*(Math.random()<.5?1.35:.75),_+.07);let m=i.createGain();m.gain.setValueAtTime(0,_),m.gain.linearRampToValueAtTime(1,_+.01),m.gain.exponentialRampToValueAtTime(.001,_+.08),v.connect(m).connect(u),v.start(_),v.stop(_+.1)}}function a(){i=new(window.AudioContext||window.webkitAudioContext),e=i.createGain(),e.gain.value=0,e.connect(i.destination);let l=s(4);r(l,"lowpass",420,.7,.9,0),r(l,"bandpass",1400,.5,.22,1.7),r(l,"highpass",5200,.4,.04,2.9),e.gain.linearRampToValueAtTime(.6,i.currentTime+3);let c=()=>{t=setTimeout(()=>{o(),Math.random()<.4&&setTimeout(o,300+Math.random()*500),c()},2500+Math.random()*6e3)};c()}return{toggle(){return i?n?(i.suspend(),n=!1):(i.resume(),n=!0):(a(),n=!0),n},dispose(){clearTimeout(t)}}}var rl=new URLSearchParams(location.search),Ax=matchMedia("(pointer: coarse)").matches,Rx=Math.min(screen.width,screen.height)<700,Vd={high:{dpr:Math.min(devicePixelRatio,2),msaa:4,shadow:4096,foliage:.55,foliageShadow:!0,trees:160,cards:1,mist:140,reflScale:.5,raySamples:64,rayScale:.5,wallRes:[160,140],farRes:[210,125],birds:40,pointLights:4},mobile:{dpr:Math.min(devicePixelRatio,1.5),msaa:0,shadow:2048,foliage:.3,foliageShadow:!1,trees:90,cards:.6,mist:80,reflScale:.35,raySamples:40,rayScale:.35,wallRes:[120,100],farRes:[140,84],birds:25,pointLights:2},low:{dpr:1,msaa:0,shadow:1024,foliage:.16,foliageShadow:!1,trees:50,cards:.35,mist:40,reflScale:.25,raySamples:28,rayScale:.3,wallRes:[90,80],farRes:[100,60],birds:15,pointLights:1}},Qc=Vd[rl.get("q")]?rl.get("q"):Ax||Rx?"mobile":"high",xn=Vd[Qc],Gd=rl.has("debug"),Cx=parseFloat(rl.get("t0")||"0");function Px(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ds=Px(20261105),Wd=vd(1105),ol=(i,e,t)=>Math.min(t,Math.max(e,i)),Hc=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),Vc=Math.PI/180,ei={uTime:{value:0},uPointScale:{value:1e3}},Ls=document.getElementById("c"),vn=new Wa({canvas:Ls,antialias:!1,powerPreference:"high-performance",stencil:!1}),zn=xn.dpr;vn.setPixelRatio(zn);vn.setSize(innerWidth,innerHeight,!1);vn.toneMapping=Oi;vn.toneMappingExposure=1;vn.shadowMap.enabled=!0;vn.shadowMap.type=Ni;var dn=new wi;dn.fog=new er(8952234,.001);var _i=new qt(50,innerWidth/innerHeight,.5,9e3);{let i=new ws(vn);dn.environment=i.fromScene(Fd(ei),.04).texture,dn.environmentIntensity=2.2,i.dispose()}var Ix=new P(.42,.2,-1).normalize(),Cn=new Sr(Oc,7.5);Cn.target.position.set(20,170,-150);Cn.position.copy(Cn.target.position).addScaledVector(Ix,950);Cn.castShadow=!0;Cn.shadow.mapSize.set(xn.shadow,xn.shadow);var Ns=Cn.shadow.camera;Ns.left=-330;Ns.right=330;Ns.top=330;Ns.bottom=-330;Ns.near=10;Ns.far=2100;Cn.shadow.bias=-8e-4;Cn.shadow.normalBias=1.4;Cn.shadow.radius=3;dn.add(Cn,Cn.target);var Lx=performance.now();dn.add(Ud(ei));var Us=Ed(Wd,Ds,xn);dn.add(Us.group);var Xd=wd(Us,Wd,Ds,xn);dn.add(Xd.group);var qd=Cd(ei,Us,xn);dn.add(qd.group);dn.add(Id(ei,Us,Ds,xn).group);var Yd=Ld(Us,Ds);dn.add(Yd.group);var Zd=Dd(ei,Us,Ds,xn);dn.add(Zd.group);dn.add(Nd(ei,Ds,xn.birds));var $d=Math.round(performance.now()-Lx),Vi=Bd(vn,dn,_i,Fc,xn),Dx=zd();function jc(){let i=innerWidth,e=innerHeight;vn.setPixelRatio(zn),vn.setSize(i,e,!1),_i.aspect=i/e;let t=2*Math.atan(Math.tan(38*Vc)/_i.aspect)/Vc;_i.fov=ol(t,50,84),_i.updateProjectionMatrix(),Vi.setSize(i,e,zn),qd.lake.getRenderTarget().setSize(Math.max(256,Math.round(i*zn*xn.reflScale)),Math.max(256,Math.round(e*zn*xn.reflScale))),ei.uPointScale.value=e*zn/(2*Math.tan(_i.fov*Vc/2))}jc();addEventListener("resize",jc);var Gc=new P(4,5,86),Wr=-.03,eh=.11,Wc=Wr,Xc=eh,Zc=Wr,$c=eh,al=!1,Jc=0,Kc=0,Jd=-100,tl=1,Kd=0;Ls.addEventListener("pointerdown",i=>{al=!0,Jc=i.clientX,Kc=i.clientY,Ls.setPointerCapture(i.pointerId)});Ls.addEventListener("pointermove",i=>{if(!al)return;let e=1.5/innerHeight;Zc=ol(Zc+(i.clientX-Jc)*e,Wr-.75,Wr+.75),$c=ol($c+(i.clientY-Kc)*e,-.25,.6),Jc=i.clientX,Kc=i.clientY,Jd=Kd});var Qd=()=>{al=!1};Ls.addEventListener("pointerup",Qd);Ls.addEventListener("pointercancel",Qd);var qc=document.getElementById("sound");qc.addEventListener("click",()=>{let i=Dx.toggle();qc.textContent=i?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3",qc.classList.toggle("on",i)});var sl=new Di;sl.connect(document);var Is=0,nl=-1,Yc=0,il=0,kd=0,jd=document.getElementById("fps");Gd&&(jd.style.display="block");var un=null;window.__scene={tier:Qc,frames:0,buildMs:$d,renderer:vn,stats:{veg:Xd.stats,city:Yd.stats,village:Zd.stats},shot(i={}){un={T:i.t??20,yaw:i.yaw??Wr,pitch:i.pitch??eh,pending:!0,done:!1}},get shotDone(){return un?un.done:!1},resume(){un=null}};function Hd(i,e,t,n){_i.position.set(Gc.x+Math.sin(i*.05)*3,Gc.y+Math.sin(i*.13)*.4,Gc.z+Math.sin(i*.031)*2),_i.rotation.set(t,e,n,"YXZ")}vn.setAnimationLoop(i=>{if(un){un.pending&&(ei.uTime.value=un.T,Hd(un.T,un.yaw,un.pitch,0),Vi.final.uniforms.uFade.value=1,Vi.final.uniforms.uTime.value=un.T,Vi.composer.render(1/60),document.body.classList.add("ready"),un.pending=!1,un.done=!0);return}sl.update(i);let e=Math.min(sl.getDelta(),.1),t=sl.getElapsed();Kd=t;let n=t+Cx;ei.uTime.value=n;let s=t-Jd>5&&!al;tl=Hc(tl,s?1:0,.6,e),Wc=Hc(Wc,Zc+Math.sin(n*.04)*.09*tl,3.5,e),Xc=Hc(Xc,$c+Math.sin(n*.06+1)*.02*tl,3.5,e),Hd(n,Wc,Xc,Math.sin(n*.09)*.003),nl<0&&Is>1&&(nl=t),Vi.final.uniforms.uFade.value=nl<0?0:ol((t-nl)/2.5,0,1),Vi.final.uniforms.uTime.value=n,Vi.composer.render(e),Is++,window.__scene.frames=Is,Is===2&&document.body.classList.add("ready"),Is>30&&kd<2&&(Yc+=e,il++,il===90&&(Yc/il>1/28&&zn>1&&(zn=Math.max(1,zn*.75),jc()),Yc=0,il=0,kd++)),Gd&&Is%20===0&&(jd.textContent=`${Qc} \xB7 ${(1/Math.max(e,.001)).toFixed(0)} fps \xB7 dpr ${zn.toFixed(2)} \xB7 \u6784\u5EFA ${$d} ms`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
