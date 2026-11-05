(()=>{var Td=0,kl=1,Ed=2;var _s=1,wd=2,cr=3,ei=0,Zt=1,ln=2,Mi=0,lr=1,vs=2,Gl=3,Vl=4,Ad=5;var ys=100,Rd=101,Cd=102,Pd=103,Id=104,Ld=200,Nd=201,Dd=202,Ud=203,Wl=204,Xl=205,Fd=206,Od=207,Bd=208,zd=209,Hd=210,kd=211,Gd=212,Vd=213,Wd=214,ga=0,xa=1,_a=2,Vs=3,va=4,ya=5,Ma=6,Sa=7,ql=0,Xd=1,qd=2,ti=0,_o=1,vo=2,yo=3,Mo=4,So=5,bo=6,Ms=7,El="attached",Yd="detached",Yl=300,Ss=301,hr=302,ur=303,Wa=304,Nn=1e3,fn=1001,Ws=1002,Nt=1003,Xa=1004;var bs=1005;var zt=1006,dr=1007;var yn=1008;var Mn=1009,Kl=1010,Zl=1011,fr=1012,qa=1013,Xn=1014,Rn=1015,Ht=1016,Ya=1017,Ka=1018,Ts=1020,Jl=35902,$l=35899,jl=1021,Ql=1022,Fn=1023,fi=1026,Si=1027,Za=1028,Ja=1029,ki=1030,$a=1031;var ja=1033,To=33776,Eo=33777,wo=33778,Ao=33779,Qa=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37488,ac=37489,Ro=37490,cc=37491,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,_c=37817,vc=37818,yc=37819,Mc=37820,Sc=37821,bc=36492,Tc=36494,Ec=36495,wc=36283,Ac=36284,Co=36285,Rc=36286;var is=2300,ss=2301,pa=2302,wl=2303,Al=2400,Rl=2401,Cl=2402,Kd=2500;var eh=0,Po=1,pr=2,Zd=3200,th=3201;var Cc=0,Jd=1,bi="",Ct="srgb",on="srgb-linear",Gr="linear",mt="srgb";var ma=7680;var $d=519,jd=512,Qd=513,ef=514,nh=515,tf=516,nf=517,ih=518,sh=519,rh=35044;var oh="300 es",Ln=2e3,Ui=2001;function Cp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=Xs("canvas");return i.style.display="block",i}var Lu={},qs=null;function Vr(...i){let e="THREE."+i.shift();qs?qs("log",e,...i):console.log(e,...i)}function rf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=rf(i);let e="THREE."+i.shift();if(qs)qs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=rf(i);let e="THREE."+i.shift();if(qs)qs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ns(...i){let e=i.join(" ");e in Lu||(Lu[e]=!0,Be(...i))}function of(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var af={[ga]:ga,[_a]:Ma,[va]:va,[Vs]:ya,[xa]:xa,[Ma]:_a,[Sa]:Sa,[ya]:Vs},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,Br=Math.PI/180,rs=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function ah(i,e){return(i%e+e)%e}function Ip(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lp(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Np(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Dp(i,e=1){return e-Math.abs(ah(i,e*2)-e)}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Op(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bp(i,e){return i+Math.random()*(e-i)}function zp(i){return i*(.5-Math.random())}function Hp(i){i!==void 0&&(Nu=i);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kp(i){return i*Br}function Gp(i){return i*rs}function Vp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lh(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function hh(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var tn={DEG2RAD:Br,RAD2DEG:rs,generateUUID:qn,clamp:it,euclideanModulo:ah,mapLinear:Ip,inverseLerp:Lp,lerp:zr,damp:Np,pingpong:Dp,smoothstep:Up,smootherstep:Fp,randInt:Op,randFloat:Bp,randFloatSpread:zp,seededRandom:Hp,degToRad:kp,radToDeg:Gp,isPowerOfTwo:Vp,ceilPowerOfTwo:Wp,floorPowerOfTwo:ch,setQuaternionFromProperEuler:Xp,normalize:hh,denormalize:lh},gh=class gh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gh.prototype.isVector2=!0;var ae=gh,Et=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||c!==d||l!==f||h!==m){let p=c*d+l*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,c=c*g+d*a,l=l*g+f*a,h=h*g+m*a,u=u*g+_*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+m*a,u=u*g+_*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xh=class xh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;var A=xh,jc=new A,Du=new Et,_h=class _h{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],v=s[1],S=s[4],y=s[7],E=s[2],b=s[5],x=s[8];return r[0]=o*_+a*v+c*E,r[3]=o*p+a*S+c*b,r[6]=o*g+a*y+c*x,r[1]=l*_+h*v+u*E,r[4]=l*p+h*S+u*b,r[7]=l*g+h*y+u*x,r[2]=d*_+f*v+m*E,r[5]=d*p+f*S+m*b,r[8]=d*g+f*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;var Ye=_h,Qc=new Ye,Uu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var tt=qp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=Xs("canvas")),Rs.width=e.width,Rs.height=e.height;let s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yp=0,Ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Kp=0,tl=new A,qt=class i extends Zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fn,s=fn,r=zt,o=yn,a=Fn,c=Mn,l=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=qn(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Yl;qt.DEFAULT_ANISOTROPY=1;var vh=class vh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,y=(f+1)/2,E=(g+1)/2,b=(h+d)/4,x=(u+_)/4,M=(m+p)/4;return S>y&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=x/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vh.prototype.isVector4=!0;var gt=vh,Ta=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends Ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wr=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Va=class Va{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Va().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,Jp)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ri.crossVectors(n,Tn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ri.crossVectors(n,Tn)),Ri.normalize(),ko.crossVectors(Tn,Ri),s[0]=Ri.x,s[4]=ko.x,s[8]=Tn.x,s[1]=Ri.y,s[5]=ko.y,s[9]=Tn.y,s[2]=Ri.z,s[6]=ko.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],S=n[7],y=n[11],E=n[15],b=s[0],x=s[4],M=s[8],P=s[12],R=s[1],L=s[5],D=s[9],V=s[13],N=s[2],K=s[6],$=s[10],W=s[14],oe=s[3],I=s[7],G=s[11],O=s[15];return r[0]=o*b+a*R+c*N+l*oe,r[4]=o*x+a*L+c*K+l*I,r[8]=o*M+a*D+c*$+l*G,r[12]=o*P+a*V+c*W+l*O,r[1]=h*b+u*R+d*N+f*oe,r[5]=h*x+u*L+d*K+f*I,r[9]=h*M+u*D+d*$+f*G,r[13]=h*P+u*V+d*W+f*O,r[2]=m*b+_*R+p*N+g*oe,r[6]=m*x+_*L+p*K+g*I,r[10]=m*M+_*D+p*$+g*G,r[14]=m*P+_*V+p*W+g*O,r[3]=v*b+S*R+y*N+E*oe,r[7]=v*x+S*L+y*K+E*I,r[11]=v*M+S*D+y*$+E*G,r[15]=v*P+S*V+y*W+E*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=c*f-l*d,S=a*f-l*u,y=a*d-c*u,E=o*f-l*h,b=o*d-c*h,x=o*u-a*h;return t*(_*v-p*S+g*y)-n*(m*v-p*E+g*b)+s*(m*S-_*E+g*x)-r*(m*y-_*b+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*a-n*o,S=t*c-s*o,y=t*l-r*o,E=n*c-s*a,b=n*l-r*a,x=s*l-r*c,M=h*_-u*m,P=h*p-d*m,R=h*g-f*m,L=u*p-d*_,D=u*g-f*_,V=d*g-f*p,N=v*V-S*D+y*L+E*R-b*P+x*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/N;return e[0]=(a*V-c*D+l*L)*K,e[1]=(s*D-n*V-r*L)*K,e[2]=(_*x-p*b+g*E)*K,e[3]=(d*b-u*x-f*E)*K,e[4]=(c*R-o*V-l*P)*K,e[5]=(t*V-s*R+r*P)*K,e[6]=(p*y-m*x-g*S)*K,e[7]=(h*x-d*y+f*S)*K,e[8]=(o*D-a*R+l*M)*K,e[9]=(n*R-t*D-r*M)*K,e[10]=(m*b-_*y+g*v)*K,e[11]=(u*y-h*b-f*v)*K,e[12]=(a*P-o*L-c*M)*K,e[13]=(t*L-n*P+s*M)*K,e[14]=(_*S-m*E-p*v)*K,e[15]=(h*E-u*S+d*v)*K,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,v=c*l,S=c*h,y=c*u,E=n.x,b=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(f+y)*E,s[2]=(m-S)*E,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+g))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(m+S)*x,s[9]=(p-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),c=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hn.copy(this);let l=1/o,h=1/a,u=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ln,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Ln)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ui)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Ln)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ui)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Va.prototype.isMatrix4=!0;var Ge=Va,Cs=new A,Hn=new Ge,Zp=new A(0,0,0),Jp=new A(1,1,1),Ri=new A,ko=new A,Tn=new A,Ou=new Ge,Bu=new Et,pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$p=0,zu=new A,Ps=new Et,oi=new Ge,Go=new A,Rr=new A,jp=new A,Qp=new Et,Hu=new A(1,0,0),ku=new A(0,1,0),Gu=new A(0,0,1),Vu={type:"added"},em={type:"removed"},Is={type:"childadded",child:null},nl={type:"childremoved",child:null},wt=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new pn,n=new Et,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ye}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Rr,Go,this.up):oi.lookAt(Go,Rr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(oi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Is.child=e,this.dispatchEvent(Is),Is.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new A(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ah(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=il(o,r,e+1/3),this.g=il(o,r,e),this.b=il(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return tt.workingToColorSpace(Qt.copy(this),e),Math.round(it(Qt.r*255,0,255))*65536+Math.round(it(Qt.g*255,0,255))*256+Math.round(it(Qt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ct){tt.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Vo);let n=zr(Ci.h,Vo.h,t),s=zr(Ci.s,Vo.s,t),r=zr(Ci.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Te;Te.NAMES=cf;var qr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yr=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new A,ai=new A,sl=new A,ci=new A,Ls=new A,Ns=new A,Wu=new A,rl=new A,ol=new A,al=new A,cl=new gt,ll=new gt,hl=new gt,Di=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),ai.subVectors(n,t),sl.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(ai),c=kn.dot(sl),l=ai.dot(ai),h=ai.dot(sl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return cl.setScalar(0),ll.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),ai.subVectors(e,t),kn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),kn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ls.subVectors(s,n),Ns.subVectors(r,n),rl.subVectors(e,n);let c=Ls.dot(rl),l=Ns.dot(rl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,s);let h=Ls.dot(ol),u=Ns.dot(ol);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Ls,o);al.subVectors(e,r);let f=Ls.dot(al),m=Ns.dot(al);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ns,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Wu.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Wu,a);let g=1/(p+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(Ls,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Xo.subVectors(this.max,Cr),Ds.subVectors(e.a,Cr),Us.subVectors(e.b,Cr),Fs.subVectors(e.c,Cr),Pi.subVectors(Us,Ds),Ii.subVectors(Fs,Us),$i.subVectors(Ds,Fs);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-$i.z,$i.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,$i.z,0,-$i.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-$i.y,$i.x,0];return!ul(t,Ds,Us,Fs,Xo)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Ds,Us,Fs,Xo))?!1:(qo.crossVectors(Pi,Ii),t=[qo.x,qo.y,qo.z],ul(t,Ds,Us,Fs,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new A,new A,new A,new A,new A,new A,new A,new A],Gn=new A,Wo=new wn,Ds=new A,Us=new A,Fs=new A,Pi=new A,Ii=new A,$i=new A,Cr=new A,Xo=new A,qo=new A,ji=new A;function ul(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ot=new A,Yo=new ae,nm=0,Kt=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=e!==void 0?Pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hh(e,this.array)}};var os=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},im=new wn,Pr=new A,dl=new A,mn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(dl)),this.expandByPoint(Pr.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sm=0,In=new Ge,fl=new wt,Os=new A,En=new wn,Ir=new wn,Xt=new A,At=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Kr:os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(En.min,Ir.min),En.expandByPoint(Xt),Xt.addVectors(En.max,Ir.max),En.expandByPoint(Xt)):(En.expandByPoint(Ir.min),En.expandByPoint(Ir.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),Xt.add(Os)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;let h=new A,u=new A,d=new A,f=new ae,m=new ae,_=new ae,p=new A,g=new A;function v(P,R,L){l[P]=l[R]=l[L]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,L),u.sub(h),d.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(D),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(p),a[R].add(p),a[L].add(p),c[P].add(g),c[R].add(g),c[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,R=S.length;P<R;++P){let L=S[P],D=L.start,V=L.count;for(let N=D,K=D+V;N<K;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new A,E=new A,b=new A,x=new A;function M(P){b.fromBufferAttribute(s,P),x.copy(b);let R=a[P];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(x,R);let D=E.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,R=n.count;P<R;++P)l[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)d[m++]=l[f++]}return new Kt(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Xu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var rn=new A,Js=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hh(e,this.data.array)}},pl=new A,rm=new A,om=new Ye,Vn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pl.subVectors(n,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||om.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},am=0,gn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=lr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hi=new A,ml=new A,Ko=new A,Zo=new A,as=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Zo.copy(this.origin).sub(ml);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=Zo.dot(this.direction),c=-Zo.dot(Ko),l=Zo.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(Ko,d),f}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,v=n.y-o.y,S=n.z-o.z,y=Math.abs(c),E=Math.abs(l),b=Math.abs(h),x,M,P,R,L,D,V,N,K,$,W,oe;if(y>=E&&y>=b?(P=c,D=u,K=m,oe=g,c>=0?(x=l,M=h,R=d,L=f,V=_,N=p,$=v,W=S):(x=h,M=l,R=f,L=d,V=p,N=_,$=S,W=v)):E>=b?(P=l,D=d,K=_,oe=v,l>=0?(x=h,M=c,R=f,L=u,V=p,N=m,$=S,W=g):(x=c,M=h,R=u,L=f,V=m,N=p,$=g,W=S)):(P=h,D=f,K=p,oe=S,h>=0?(x=c,M=l,R=u,L=d,V=m,N=_,$=g,W=v):(x=l,M=c,R=d,L=u,V=_,N=m,$=v,W=g)),P===0)return null;let I=x/P,G=M/P,O=1/P,z=R-I*D,se=L-G*D,F=V-I*K,te=N-G*K,j=$-I*oe,he=W-G*oe,ie=j*te-he*F,Ee=z*he-se*j,ze=F*se-te*z;if(s){if(ie<0||Ee<0||ze<0)return null}else if((ie<0||Ee<0||ze<0)&&(ie>0||Ee>0||ze>0))return null;let Le=ie+Ee+ze;if(Le===0)return null;let Se=O*(ie*D+Ee*K+ze*oe);return(Le>0?Se<0:Se>0)?null:this.at(Se/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qu=new Ge,Qi=new as,Jo=new mn,Yu=new A,$o=new A,jo=new A,Qo=new A,gl=new A,ea=new A,Ku=new A,ta=new A,Oe=class extends wt{constructor(e=new At,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(gl.fromBufferAttribute(u,e),o?ea.addScaledVector(gl,h):ea.addScaledVector(gl.sub(t),h))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Jo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Jo,Yu)===null||Qi.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=S;y<E;y+=3){let b=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);s=na(this,g,e,n,l,h,u,b,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);s=na(this,o,e,n,l,h,u,v,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=S;y<E;y+=3){let b=y,x=y+1,M=y+2;s=na(this,g,e,n,l,h,u,b,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,S=p+1,y=p+2;s=na(this,o,e,n,l,h,u,v,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function cm(i,e,t,n,s,r,o,a){let c;if(e.side===Zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ei,a),c===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ta);return l<t.near||l>t.far?null:{distance:l,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,$o),i.getVertexPosition(c,jo),i.getVertexPosition(l,Qo);let h=cm(i,e,t,n,$o,jo,Qo,Ku);if(h){let u=new A;Di.getBarycoord(Ku,$o,jo,Qo,u),s&&(h.uv=Di.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new A,materialIndex:0};Di.getNormal($o,jo,Qo,d.normal),h.face=d,h.barycoord=u}return h}var Lr=new gt,Zu=new gt,Ju=new gt,lm=new gt,$u=new Ge,ia=new A,xl=new mn,ju=new Ge,_l=new as,cs=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=El,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(s),e.ray.intersectsSphere(xl)!==!1&&(ju.copy(s).invert(),_l.copy(e.ray).applyMatrix4(ju),!(this.boundingBox!==null&&_l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===El?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zu.fromBufferAttribute(s.attributes.skinIndex,e),Ju.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Lr.copy(t),t.set(0,0,0,0)):(Lr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ju.getComponent(r);if(o!==0){let a=Zu.getComponent(r);$u.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lm.copy(Lr).applyMatrix4($u),o)}}return t.isVector4&&(t.w=Lr.w),t.applyMatrix4(this.bindMatrixInverse)}},Fi=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$s=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Nt,h=Nt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qu=new Ge,hm=new Ge,ls=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:hm;Qu.multiplyMatrices(a,t[r]),Qu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $s(t,e,e,Fn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Be("Skeleton: No bone found with UUID:",r),o=new Fi),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},xn=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new Ge,ed=new Ge,sa=[],td=new wn,um=new Ge,Nr=new Oe,Dr=new mn,_n=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,um)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),td.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(td)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Dr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),ed.multiplyMatrices(n,Bs),Nr.matrixWorld=ed,Nr.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){let c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,Za,Rn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new mn,dm=new ae(.5,.5),ra=new A,Jn=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],S=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-o,f-h,g-m,E-v).normalize(),s[1].setComponents(l+o,f+h,g+m,E+v).normalize(),s[2].setComponents(l+a,f+u,g+_,E+S).normalize(),s[3].setComponents(l-a,f-u,g-_,E-S).normalize(),n)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,f-d,g-p,E-y).normalize();else if(s[4].setComponents(l-c,f-d,g-p,E-y).normalize(),t===Ln)s[5].setComponents(l+c,f+d,g+p,E+y).normalize();else if(t===Ui)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=dm.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},nd=new Ge,wa=class i{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];nd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Jn),n[s].setFromProjectionMatrix(nd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Jn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var js=class extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Aa=new A,Ra=new A,id=new Ge,Ur=new as,oa=new mn,vl=new A,sd=new A,hs=class extends wt{constructor(e=new At,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Aa.distanceTo(Ra);e.setAttribute("lineDistance",new st(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;id.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=l){let g=h.getX(_),v=h.getX(_+1),S=aa(this,e,Ur,c,g,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(f),g=aa(this,e,Ur,c,_,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=l){let g=aa(this,e,Ur,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=aa(this,e,Ur,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Aa.fromBufferAttribute(a,s),Ra.fromBufferAttribute(a,r),t.distanceSqToSegment(Aa,Ra,vl,sd)>n)return;vl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(vl);if(!(l<e.near||l>e.far))return{distance:l,point:sd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rd=new A,od=new A,Zr=class extends hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rd.fromBufferAttribute(t,s),od.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rd.distanceTo(od);e.setAttribute("lineDistance",new st(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jr=class extends hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qs=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ad=new Ge,Pl=new as,ca=new mn,la=new A,$r=class extends wt{constructor(e=new At,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;ad.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let p=l.getX(m);la.fromBufferAttribute(u,p),cd(la,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)la.fromBufferAttribute(u,m),cd(la,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cd(i,e,t,n,s,r,o){let a=Pl.distanceSqToPoint(i);if(a<t){let c=new A;Pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var jr=class extends qt{constructor(e=[],t=Ss,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var pi=class extends qt{constructor(e,t,n=Xn,s,r,o,a=Nt,c=Nt,l,h=fi,u=1){if(h!==fi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qr=class extends pi{constructor(e,t=Xn,n=Ss,s,r,o=Nt,a=Nt,c,l=fi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},eo=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ut=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function m(_,p,g,v,S,y,E,b,x,M,P){let R=y/x,L=E/M,D=y/2,V=E/2,N=b/2,K=x+1,$=M+1,W=0,oe=0,I=new A;for(let G=0;G<$;G++){let O=G*L-V;for(let z=0;z<K;z++){let se=z*R-D;I[_]=se*v,I[p]=O*S,I[g]=N,l.push(I.x,I.y,I.z),I[_]=0,I[p]=0,I[g]=b>0?1:-1,h.push(I.x,I.y,I.z),u.push(z/x),u.push(1-G/M),W+=1}}for(let G=0;G<M;G++)for(let O=0;O<x;O++){let z=d+O+K*G,se=d+O+K*(G+1),F=d+(O+1)+K*(G+1),te=d+(O+1)+K*G;c.push(z,se,te),c.push(se,F,te),oe+=6}a.addGroup(f,oe,P),f+=oe,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var us=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new A,h=new ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],p=n/2,g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function v(){let y=new A,E=new A,b=0,x=(t-e)/n;for(let M=0;M<=r;M++){let P=[],R=M/r,L=R*(t-e)+e;for(let D=0;D<=s;D++){let V=D/s,N=V*c+a,K=Math.sin(N),$=Math.cos(N);E.x=L*K,E.y=-R*n+p,E.z=L*$,u.push(E.x,E.y,E.z),y.set(K,x,$).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-R),P.push(m++)}_.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let R=_[P][M],L=_[P+1][M],D=_[P+1][M+1],V=_[P][M+1];(e>0||P!==0)&&(h.push(R,L,V),b+=3),(t>0||P!==r-1)&&(h.push(L,D,V),b+=3)}l.addGroup(g,b,0),g+=b}function S(y){let E=m,b=new ae,x=new A,M=0,P=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let L=m;for(let D=0;D<=s;D++){let N=D/s*c+a,K=Math.cos(N),$=Math.sin(N);x.x=P*$,x.y=p*R,x.z=P*K,u.push(x.x,x.y,x.z),d.push(0,R,0),b.x=K*.5+.5,b.y=$*.5*R+.5,f.push(b.x,b.y),m++}for(let D=0;D<s;D++){let V=E+D,N=L+D;y===!0?h.push(N,N+1,V):h.push(N+1,N,V),M+=3}l.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},to=class i extends an{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ca=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new A,y=new A,E=new A;for(let b=0;b<t.length;b+=3)f(t[b+0],S),f(t[b+1],y),f(t[b+2],E),c(S,y,E,v)}function c(v,S,y,E){let b=E+1,x=[];for(let M=0;M<=b;M++){x[M]=[];let P=v.clone().lerp(y,M/b),R=S.clone().lerp(y,M/b),L=b-M;for(let D=0;D<=L;D++)D===0&&M===b?x[M][D]=P:x[M][D]=P.clone().lerp(R,D/L)}for(let M=0;M<b;M++)for(let P=0;P<2*(b-M)-1;P++){let R=Math.floor(P/2);P%2===0?(d(x[M][R+1]),d(x[M+1][R]),d(x[M][R])):(d(x[M][R+1]),d(x[M+1][R+1]),d(x[M+1][R]))}}function l(v){let S=new A;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new A;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=p(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(y,1-E)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],y=o[v+2],E=o[v+4],b=Math.max(S,y,E),x=Math.min(S,y,E);b>.9&&x<.1&&(S<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function m(){let v=new A,S=new A,y=new A,E=new A,b=new ae,x=new ae,M=new ae;for(let P=0,R=0;P<r.length;P+=9,R+=6){v.set(r[P+0],r[P+1],r[P+2]),S.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),b.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),E.copy(v).add(S).add(y).divideScalar(3);let L=p(E);_(b,R+0,v,L),_(x,R+2,S,L),_(M,R+4,y,L)}}function _(v,S,y,E){E<0&&v.x===1&&(o[S]=v.x-1),y.x===0&&y.z===0&&(o[S]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,s=[],r=[],o=[],a=new A,c=new Ge;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},er=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pa=class extends er{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ld=new A,hd=new A,yl=new uh,Ml=new uh,Sl=new uh,tr=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hd.subVectors(s[0],s[1]).add(s[0]),l=hd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ld.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ld),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),yl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,p),Ml.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,p),Sl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ml.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Sl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(yl.calc(c),Ml.calc(c),Sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ud(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fm(i,e){let t=1-i;return t*t*e}function pm(i,e){return 2*(1-i)*i*e}function mm(i,e){return i*i*e}function Hr(i,e,t,n){return fm(i,e)+pm(i,t)+mm(i,n)}function gm(i,e){let t=1-i;return t*t*t*e}function xm(i,e){let t=1-i;return 3*t*t*i*e}function _m(i,e){return 3*(1-i)*i*i*e}function vm(i,e){return i*i*i*e}function kr(i,e,t,n,s){return gm(i,e)+xm(i,t)+_m(i,n)+vm(i,s)}var no=class extends An{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends An{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends An{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends An{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends An{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends An{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y),Hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ud(a,c.x,l.x,h.x,u.x),ud(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:Pa,CatmullRomCurve3:tr,CubicBezierCurve:no,CubicBezierCurve3:Ia,EllipseCurve:er,LineCurve:io,LineCurve3:La,QuadraticBezierCurve:so,QuadraticBezierCurve3:Na,SplineCurve:ro}),Da=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Il[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ds=class extends Da{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new io(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new so(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new no(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ro(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new er(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends ds{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ds().fromJSON(s))}return this}};function ym(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=lf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Em(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return oo(r,o,t,a,c,l,0),o}function lf(i,e,t,n,s){let r;if(s===Fm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=dd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dd(o/n|0,i[o],i[o+1],r);return r&&nr(r,r.next)&&(co(r),r=r.next),r}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Pm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sm(i,n,s,r):Mm(i)){e.push(c.i,i.i,l.i),co(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=bm(fs(i),e),oo(i,e,t,n,s,r,2)):o===2&&Tm(i,e,t,n,s,r):oo(fs(i),e,t,n,s,r,1);break}}}function Mm(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Fr(s,a,r,c,o,l,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),_=Math.max(a,c,l),p=Math.max(h,u,d),g=Ll(f,m,e,t,n),v=Ll(_,p,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=g&&y&&y.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Fr(a,h,c,u,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fr(a,h,c,u,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Fr(a,h,c,u,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Fr(a,h,c,u,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function bm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!nr(n,s)&&uf(n,t,t.next,s)&&ao(n,s)&&ao(s,n)&&(e.push(n.i,t.i,s.i),co(t),co(t.next),t=i=s),t=t.next}while(t!==i);return fs(t)}function Tm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nm(o,a)){let c=df(o,a);o=fs(o,o.next),c=fs(c,c.next),oo(o,e,t,n,s,r,0),oo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Em(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=lf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Lm(l))}s.sort(wm);for(let r=0;r<s.length;r++)t=Am(s[r],t);return t}function wm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Am(i,e){let t=Rm(i,e);if(!t)return e;let n=df(t,i);return fs(n,n.next),fs(t,t.next)}function Rm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(nr(i,t))return t;do{if(nr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ao(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Cm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Cm(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Pm(i,e,t,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Im(s)}function Im(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Fr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&hf(i,e,t,n,s,r,o,a)}function Nm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dm(i,e)&&(ao(i,e)&&ao(e,i)&&Um(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||nr(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nr(i,e){return i.x===e.x&&i.y===e.y}function uf(i,e,t,n){let s=ua(Pt(i,e,t)),r=ua(Pt(i,e,n)),o=ua(Pt(t,n,i)),a=ua(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||o===0&&ha(t,i,n)||a===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function Dm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ao(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function Um(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function df(i,e){let t=Nl(i.i,i.x,i.y),n=Nl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dd(i,e,t,n){let s=Nl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Dl=class{static triangulate(e,t,n=2){return ym(e,t,n)}},ts=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fd(e),pd(n,e);let o=e.length;t.forEach(fd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,pd(n,t[c]);let a=Dl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function fd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ps=class i extends At{constructor(e=new Oi([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Om,S,y=!1,E,b,x,M;if(g){S=g.getSpacedPoints(h),y=!0,d=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,ne),b=new A,x=new A,M=new A}d||(p=0,f=0,m=0,_=0);let P=a.extractPoints(l),R=P.shape,L=P.holes;if(!ts.isClockWise(R)){R=R.reverse();for(let ne=0,le=L.length;ne<le;ne++){let de=L[ne];ts.isClockWise(de)&&(L[ne]=de.reverse())}}function V(ne){let de=10000000000000001e-36,Re=ne[0];for(let ge=1;ge<=ne.length;ge++){let qe=ge%ne.length,Ue=ne[qe],je=Ue.x-Re.x,ot=Ue.y-Re.y,at=je*je+ot*ot,H=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Re.x),Math.abs(Re.y)),bt=de*H*H;if(at<=bt){ne.splice(qe,1),ge--;continue}Re=Ue}}V(R),L.forEach(V);let N=L.length,K=R;for(let ne=0;ne<N;ne++){let le=L[ne];R=R.concat(le)}function $(ne,le,de){return le||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(le,de)}let W=R.length;function oe(ne,le,de){let Re,ge,qe,Ue=ne.x-le.x,je=ne.y-le.y,ot=de.x-ne.x,at=de.y-ne.y,H=Ue*Ue+je*je,bt=Ue*at-je*ot;if(Math.abs(bt)>Number.EPSILON){let Qe=Math.sqrt(H),ht=Math.sqrt(ot*ot+at*at),xe=le.x-je/Qe,yt=le.y+Ue/Qe,He=de.x-at/ht,We=de.y+ot/ht,C=((He-xe)*at-(We-yt)*ot)/(Ue*at-je*ot);Re=xe+Ue*C-ne.x,ge=yt+je*C-ne.y;let T=Re*Re+ge*ge;if(T<=2)return new ae(Re,ge);qe=Math.sqrt(T/2)}else{let Qe=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(Qe=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(Qe=!0):Math.sign(je)===Math.sign(at)&&(Qe=!0),Qe?(Re=-je,ge=Ue,qe=Math.sqrt(H)):(Re=Ue,ge=je,qe=Math.sqrt(H/2))}return new ae(Re/qe,ge/qe)}let I=[];for(let ne=0,le=K.length,de=le-1,Re=ne+1;ne<le;ne++,de++,Re++)de===le&&(de=0),Re===le&&(Re=0),I[ne]=oe(K[ne],K[de],K[Re]);let G=[],O,z=I.concat();for(let ne=0,le=N;ne<le;ne++){let de=L[ne];O=[];for(let Re=0,ge=de.length,qe=ge-1,Ue=Re+1;Re<ge;Re++,qe++,Ue++)qe===ge&&(qe=0),Ue===ge&&(Ue=0),O[Re]=oe(de[Re],de[qe],de[Ue]);G.push(O),z=z.concat(O)}let se;if(p===0)se=ts.triangulateShape(K,L);else{let ne=[],le=[];for(let de=0;de<p;de++){let Re=de/p,ge=f*Math.cos(Re*Math.PI/2),qe=m*Math.sin(Re*Math.PI/2)+_;for(let Ue=0,je=K.length;Ue<je;Ue++){let ot=$(K[Ue],I[Ue],qe);Ee(ot.x,ot.y,-ge),Re===0&&ne.push(ot)}for(let Ue=0,je=N;Ue<je;Ue++){let ot=L[Ue];O=G[Ue];let at=[];for(let H=0,bt=ot.length;H<bt;H++){let Qe=$(ot[H],O[H],qe);Ee(Qe.x,Qe.y,-ge),Re===0&&at.push(Qe)}Re===0&&le.push(at)}}se=ts.triangulateShape(ne,le)}let F=se.length,te=m+_;for(let ne=0;ne<W;ne++){let le=d?$(R[ne],z[ne],te):R[ne];y?(x.copy(E.normals[0]).multiplyScalar(le.x),b.copy(E.binormals[0]).multiplyScalar(le.y),M.copy(S[0]).add(x).add(b),Ee(M.x,M.y,M.z)):Ee(le.x,le.y,0)}for(let ne=1;ne<=h;ne++)for(let le=0;le<W;le++){let de=d?$(R[le],z[le],te):R[le];y?(x.copy(E.normals[ne]).multiplyScalar(de.x),b.copy(E.binormals[ne]).multiplyScalar(de.y),M.copy(S[ne]).add(x).add(b),Ee(M.x,M.y,M.z)):Ee(de.x,de.y,u/h*ne)}for(let ne=p-1;ne>=0;ne--){let le=ne/p,de=f*Math.cos(le*Math.PI/2),Re=m*Math.sin(le*Math.PI/2)+_;for(let ge=0,qe=K.length;ge<qe;ge++){let Ue=$(K[ge],I[ge],Re);Ee(Ue.x,Ue.y,u+de)}for(let ge=0,qe=L.length;ge<qe;ge++){let Ue=L[ge];O=G[ge];for(let je=0,ot=Ue.length;je<ot;je++){let at=$(Ue[je],O[je],Re);y?Ee(at.x,at.y+S[h-1].y,S[h-1].x+de):Ee(at.x,at.y,u+de)}}}j(),he();function j(){let ne=s.length/3;if(d){let le=0,de=W*le;for(let Re=0;Re<F;Re++){let ge=se[Re];ze(ge[2]+de,ge[1]+de,ge[0]+de)}le=h+p*2,de=W*le;for(let Re=0;Re<F;Re++){let ge=se[Re];ze(ge[0]+de,ge[1]+de,ge[2]+de)}}else{for(let le=0;le<F;le++){let de=se[le];ze(de[2],de[1],de[0])}for(let le=0;le<F;le++){let de=se[le];ze(de[0]+W*h,de[1]+W*h,de[2]+W*h)}}n.addGroup(ne,s.length/3-ne,0)}function he(){let ne=s.length/3,le=0;ie(K,le),le+=K.length;for(let de=0,Re=L.length;de<Re;de++){let ge=L[de];ie(ge,le),le+=ge.length}n.addGroup(ne,s.length/3-ne,1)}function ie(ne,le){let de=ne.length;for(;--de>=0;){let Re=de,ge=de-1;ge<0&&(ge=ne.length-1);for(let qe=0,Ue=h+p*2;qe<Ue;qe++){let je=W*qe,ot=W*(qe+1),at=le+Re+je,H=le+ge+je,bt=le+ge+ot,Qe=le+Re+ot;Le(at,H,bt,Qe)}}}function Ee(ne,le,de){c.push(ne),c.push(le),c.push(de)}function ze(ne,le,de){Se(ne),Se(le),Se(de);let Re=s.length/3,ge=v.generateTopUV(n,s,Re-3,Re-2,Re-1);Pe(ge[0]),Pe(ge[1]),Pe(ge[2])}function Le(ne,le,de,Re){Se(ne),Se(le),Se(Re),Se(le),Se(de),Se(Re);let ge=s.length/3,qe=v.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Pe(qe[0]),Pe(qe[1]),Pe(qe[3]),Pe(qe[1]),Pe(qe[2]),Pe(qe[3])}function Se(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Pe(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Il[s.type]().fromJSON(s)),new i(n,e.options)}},Om={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-m),new ae(_,1-g)]:[new ae(a,1-c),new ae(h,1-u),new ae(f,1-m),new ae(p,1-g)]}};function Bm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dn=class i extends Ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ms=class i extends At{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new A,d=new ae,f=new A,m=new A,_=new A,p=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=t;v++){let S=n+v*h*s,y=Math.sin(S),E=Math.cos(S);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*E,o.push(u.x,u.y,u.z),d.x=v/t,d.y=b/(e.length-1),a.push(d.x,d.y);let x=c[3*b+0]*y,M=c[3*b+1],P=c[3*b+0]*E;l.push(x,M,P)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let y=S+v*e.length,E=y,b=y+e.length,x=y+e.length+1,M=y+1;r.push(E,b,M),r.push(x,M,b)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Wn=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*d-o;for(let S=0;S<l;S++){let y=S*u-r;m.push(y,-v,0),_.push(0,0,1),p.push(S/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){let S=v+l*g,y=v+l*(g+1),E=v+1+l*(g+1),b=v+1+l*g;f.push(S,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mi=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new A,d=new A,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let v=[],S=g/n,y=o+S*a,E=e*Math.cos(y),b=Math.sqrt(e*e-E*E),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let P=M/t,R=s+P*r;u.x=-b*Math.cos(R),u.y=E,u.z=b*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(P+x,1-S),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let S=h[g][v+1],y=h[g][v],E=h[g+1][v],b=h[g+1][v+1];(g!==0||o>0)&&f.push(S,y,b),(g!==n-1||c<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $n=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new A,f=new A,m=new A;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let g=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,S=(s+1)*(_-1)+p,y=(s+1)*_+p;c.push(g,v,y),c.push(v,S,y)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(md(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(md(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function md(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Ti={clone:Es,merge:nn},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ir=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sr=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ni(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Or(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Gm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function gd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Vm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,a=2*t-n;break;case Cl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:o=e,c=2*n-t;break;case Cl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let E=0;E!==a;++E)r[E]=g*o[h+E]+v*o[l+E]+S*o[c+E]+y*o[u+E];return r}},Oa=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ba=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},za=class extends jn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[l+m],p=o[c+m],g=f*d+m*2,v=u[g],S=u[g+1],y=e*d+m*2,E=h[y],b=h[y+1],x=Xm(n,t,v,E,s);r[m]=ff(x,_,S,b,p)}return r}};function ff(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Wm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Xm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ff(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Wm(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ni(t,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ni(e.times,Array),values:Ni(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Or(e.settings)&&(n.settings={inTangents:Ni(e.settings.inTangents,Array),outTangents:Ni(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new za(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ss:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break;case wl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return pa;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Or(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Or(this.settings)&&(_d(this.settings.inTangents,e),_d(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Xe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Pp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Or(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function _d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ss;var gi=class extends vn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=is;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};lo.prototype.ValueTypeName="color";var xi=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};xi.prototype.ValueTypeName="number";var Ha=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Et.slerpFlat(r,0,o,l-a,o,l,c);return r}},_i=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends vn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=is;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Bi.prototype.ValueTypeName="vector";var ho=class{constructor(e="",t=-1,n=[],s=Kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ym(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Gm(c);c=gd(c,1,h),l=gd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function qm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return lo;case"quaternion":return _i;case"bool":case"boolean":return gi;case"string":return vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ym(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qm(i.type);if(i.times===void 0){let n=[],s=[];Vm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Or(i.settings)&&(t.settings={inTangents:Ni(i.settings.inTangents,Float32Array),outTangents:Ni(i.settings.outTangents,Float32Array)}),t}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(vd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!vd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function vd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var rr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new rr,Qn=class{constructor(e){this.manager=e!==void 0?e:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},Ul=class extends Error{constructor(e,t){super(e),this.response=t}},or=class extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,p=new ReadableStream({start(g){v();function v(){u.read().then(({done:S,value:y})=>{if(S)g.close();else{_+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,x=h.length;b<x;b++){let M=h[b];M.onProgress&&M.onProgress(E)}g.enqueue(y),v()}},S=>{g.error(S)})}}});return new Response(p)}else throw new Ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Kn.add(`file:${e}`,l);let h=ui[e];delete ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zs=new WeakMap,ka=class extends Qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=zs.get(o);u===void 0&&(u=[],zs.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Xs("img");function c(){h(),t&&t(this);let u=zs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}zs.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Kn.remove(`image:${e}`);let d=zs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var gs=class extends Qn{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new ka(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},zi=class extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var bl=new Ge,yd=new A,Md=new A,Hi=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jn,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ui||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},da=new A,fa=new Et,Yn=new A,uo=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(da,fa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new A,Sd=new ae,bd=new ae,Bt=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,bd),t.subVectors(bd,Sd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fl=class extends Hi{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fo=class extends zi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ol=class extends Hi{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},po=class extends zi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Un=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends Hi{constructor(){super(new Un(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mo=class extends zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},go=class extends At{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Tl=new WeakMap,xo=class extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Tl.has(o)===!0?(s&&s(Tl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Tl.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=-90,ks=1,ar=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Hs,ks,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Hs,ks,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Hs,ks,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Hs,ks,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Hs,ks,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Hs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ui)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ga=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},xs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Km.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Km(){this._document.hidden===!1&&this.reset()}var fh="\\[\\]\\.:\\/",Zm=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",Jm="[^"+fh.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",ph),jm=/(WCOD+)?/.source.replace("WCOD",Jm),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),tg=new RegExp("^"+$m+jm+Qm+eg+"$"),ng=["material","materials","bones","map"],zl=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(e){let t=tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=zl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var yh=class yh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yh.prototype.isMatrix2=!0;var Hl=yh;function mh(i,e,t,n){let s=ig(n);switch(t){case jl:return i*e;case Za:return i*e/s.components*s.byteLength;case Ja:return i*e/s.components*s.byteLength;case ki:return i*e*2/s.components*s.byteLength;case $a:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case ja:return i*e*4/s.components*s.byteLength;case To:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case tc:return Math.max(i,8)*Math.max(e,8)/2;case ic:case sc:case oc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rc:case Ro:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bc:case Tc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(i){switch(i){case Mn:case Kl:return{byteLength:1,components:1};case fr:case Zl:case Ht:return{byteLength:2,components:1};case Ya:case Ka:return{byteLength:2,components:4};case Xn:case qa:case Rn:return{byteLength:4,components:1};case Jl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ff(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rg(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Pg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
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
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ox=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform float backgroundBlurriness;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define NORMAL
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
}`,Ax=`#define PHONG
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Ix=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Fx=`uniform vec3 color;
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
}`,Ox=`uniform float rotation;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:cg,alphamap_pars_fragment:lg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:_g,iridescence_fragment:vg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:Eg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Lg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Dg,colorspace_fragment:Ug,colorspace_pars_fragment:Fg,envmap_fragment:Og,envmap_common_pars_fragment:Bg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:$g,envmap_vertex:kg,fog_vertex:Gg,fog_pars_vertex:Vg,fog_fragment:Wg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:jg,lights_toon_pars_fragment:Qg,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,lightprobes_pars_fragment:a0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphinstance_vertex:_0,morphcolor_vertex:v0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:E0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:L0,opaque_fragment:N0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:F0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:$0,tonemapping_pars_fragment:j0,transmission_fragment:Q0,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:rx,background_frag:ox,backgroundCube_vert:ax,backgroundCube_frag:cx,cube_vert:lx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distance_vert:fx,distance_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:xx,linedashed_frag:_x,meshbasic_vert:vx,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:bx,meshmatcap_frag:Tx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Ix,meshtoon_frag:Lx,points_vert:Nx,points_frag:Dx,shadow_vert:Ux,shadow_frag:Fx,sprite_vert:Ox,sprite_frag:Bx},Ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ii={basic:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:nn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:nn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:nn([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:nn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:nn([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:nn([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:nn([Ae.common,Ae.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:nn([Ae.lights,Ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Ic={r:0,b:0,g:0},zx=new Ge,Of=new Ye;Of.set(-1,0,0,0,1,0,0,0,1);function Hx(i,e,t,n,s,r){let o=new Te(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function m(v){let S=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){let y=f(S);y&&y.isCubeTexture?(l===void 0&&(l=new Oe(new ut(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Es(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Of),l.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Oe(new Wn(2,2),new Lt({name:"BackgroundMaterial",uniforms:Es(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(Ic,dh(i)),t.buffers.color.setClear(Ic.r,Ic.g,Ic.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(L,D,V,N,K){let $=!1,W=u(L,N,V,D);r!==W&&(r=W,l(r.object)),$=f(L,N,V,K),$&&m(L,N,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(L,D,V,N),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,D,V,N){let K=N.wireframe===!0,$=n[D.id];$===void 0&&($={},n[D.id]=$);let W=L.isInstancedMesh===!0?L.id:0,oe=$[W];oe===void 0&&(oe={},$[W]=oe);let I=oe[V.id];I===void 0&&(I={},oe[V.id]=I);let G=I[K];return G===void 0&&(G=d(c()),I[K]=G),G}function d(L){let D=[],V=[],N=[];for(let K=0;K<t;K++)D[K]=0,V[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,D,V,N){let K=r.attributes,$=D.attributes,W=0,oe=V.getAttributes();for(let I in oe)if(oe[I].location>=0){let O=K[I],z=$[I];if(z===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),O===void 0||O.attribute!==z||z&&O.data!==z.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(L,D,V,N){let K={},$=D.attributes,W=0,oe=V.getAttributes();for(let I in oe)if(oe[I].location>=0){let O=$[I];O===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));let z={};z.attribute=O,O&&O.data&&(z.data=O.data),K[I]=z,W++}r.attributes=K,r.attributesNum=W,r.index=N}function _(){let L=r.newAttributes;for(let D=0,V=L.length;D<V;D++)L[D]=0}function p(L){g(L,0)}function g(L,D){let V=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;V[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),K[L]!==D&&(i.vertexAttribDivisor(L,D),K[L]=D)}function v(){let L=r.newAttributes,D=r.enabledAttributes;for(let V=0,N=D.length;V<N;V++)D[V]!==L[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function S(L,D,V,N,K,$,W){W===!0?i.vertexAttribIPointer(L,D,V,K,$):i.vertexAttribPointer(L,D,V,N,K,$)}function y(L,D,V,N){_();let K=N.attributes,$=V.getAttributes(),W=D.defaultAttributeValues;for(let oe in $){let I=$[oe];if(I.location>=0){let G=K[oe];if(G===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let O=G.normalized,z=G.itemSize,se=e.get(G);if(se===void 0)continue;let F=se.buffer,te=se.type,j=se.bytesPerElement,he=te===i.INT||te===i.UNSIGNED_INT||G.gpuType===qa;if(G.isInterleavedBufferAttribute){let ie=G.data,Ee=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,ze=G.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Le=0;Le<I.locationSize;Le++)g(I.location+Le,ie.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<I.locationSize;Le++)p(I.location+Le);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Le=0;Le<I.locationSize;Le++)S(I.location+Le,z/I.locationSize,te,O,Ee*j,(ze+z/I.locationSize*Le)*j,he)}else{if(G.isInstancedBufferAttribute){for(let ie=0;ie<I.locationSize;ie++)g(I.location+ie,G.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<I.locationSize;ie++)p(I.location+ie);i.bindBuffer(i.ARRAY_BUFFER,F);for(let ie=0;ie<I.locationSize;ie++)S(I.location+ie,z/I.locationSize,te,O,z*j,z/I.locationSize*ie*j,he)}}else if(W!==void 0){let O=W[oe];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(I.location,O);break;case 3:i.vertexAttrib3fv(I.location,O);break;case 4:i.vertexAttrib4fv(I.location,O);break;default:i.vertexAttrib1fv(I.location,O)}}}}v()}function E(){P();for(let L in n){let D=n[L];for(let V in D){let N=D[V];for(let K in N){let $=N[K];for(let W in $)h($[W].object),delete $[W];delete N[K]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let V in D){let N=D[V];for(let K in N){let $=N[K];for(let W in $)h($[W].object),delete $[W];delete N[K]}}delete n[L.id]}function x(L){for(let D in n){let V=n[D];for(let N in V){let K=V[N];if(K[L.id]===void 0)continue;let $=K[L.id];for(let W in $)h($[W].object),delete $[W];delete K[L.id]}}}function M(L){for(let D in n){let V=n[D],N=L.isInstancedMesh===!0?L.id:0,K=V[N];if(K!==void 0){for(let $ in K){let W=K[$];for(let oe in W)h(W[oe].object),delete W[oe];delete K[$]}delete V[N],Object.keys(V).length===0&&delete n[D]}}}function P(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Gx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Fn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Mn&&x!==Rn&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:b}}function Wx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Vn,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,S=v*4,y=g.clippingState||null;c.value=y,y=h(m,d,S,f);for(let E=0;E!==S;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,m!==!0||p===null){let g=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var No=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ut(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Mi});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===yn&&(t.minFilter=zt),new ar(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},mf=256,Xx=3,qx=20,Bf=256,zf=16,Yx=3,Kx=new A,Zx=new Te,gr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new Oe(new ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kx}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(Zx));let p=new ar(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(mf,ch(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===hr?this._setSize(e.image.length===0?mf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=gf(e,!1,!1),n=Math.log2(e)-Xx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=gf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Jx(),this._integrationMaterial=$x());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/zf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Yx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Bf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=jx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function gf(i,e,t){return new No(i,{minFilter:yn,generateMipmaps:e,type:Ht,colorSpace:on,depthBuffer:t})}function Do(i,e,t){return new Lt({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:Zt,blending:Mi,depthTest:!1,depthWrite:!1})}function Jx(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bf}u

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
	`)}function $x(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zf}},`

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
	`)}function jx(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qx}
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
	`)}function xf(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _f(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ur||f===Wa)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new No(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===ur||f===Wa,_=f===Ss||f===hr;if(m||_){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new gr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new gr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===ur?d.mapping=Ss:f===Wa&&(d.mapping=hr),d}function c(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function e_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function t_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function u(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,S=p.count>=65535?Kr:os,y=new S(Math.ceil(v/3)*6,1),E=y.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<v;M+=3){let R=x[M+0],L=x[M+1],D=x[M+2];E[P++]=R,E[P++]=L,E[P++]=L,E[P++]=D,E[P++]=D,E[P++]=R}}else{g=p.version;for(let x=0,M=0;x<v;x+=3){let P=x+0,R=x+1,L=x+2;E[M++]=P,E[M++]=R,E[M++]=R,E[M++]=L,E[M++]=L,E[M++]=P}}y.version=g;let b=r.get(m);b&&e.remove(b),r.set(m,y)}function d(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function n_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function i_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function s_(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*E*4*u),x=new Wr(b,y,E,u);x.type=Rn,x.needsUpdate=!0;let M=S*4;for(let R=0;R<u;R++){let L=p[R],D=g[R],V=v[R],N=y*E*4*R;for(let K=0;K<L.count;K++){let $=K*M;f===!0&&(s.fromBufferAttribute(L,K),b[N+$+0]=s.x,b[N+$+1]=s.y,b[N+$+2]=s.z,b[N+$+3]=0),m===!0&&(s.fromBufferAttribute(D,K),b[N+$+4]=s.x,b[N+$+5]=s.y,b[N+$+6]=s.z,b[N+$+7]=0),_===!0&&(s.fromBufferAttribute(V,K),b[N+$+8]=s.x,b[N+$+9]=s.y,b[N+$+10]=s.z,b[N+$+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ae(y,E)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function r_(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var o_={[_o]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[bo]:"AGX_TONE_MAPPING",[Ms]:"NEUTRAL_TONE_MAPPING",[So]:"CUSTOM_TONE_MAPPING"};function a_(i,e,t,n,s,r){let o=new Dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new At;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let u=new ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(h,u),f=new Un(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,S=[],y=!1;this.setSize=function(E,b){o.setSize(E,b),a!==null&&a.setSize(E,b),c!==null&&c.setSize(E,b);for(let x=0;x<S.length;x++){let M=S[x];M.setSize&&M.setSize(E,b)}},this.setEffects=function(E){S=E,y=S.length>0&&S[0].isRenderPass===!0;let b=o.width,x=o.height;S.length>0&&a===null&&(a=new Dt(b,x,{type:Ht,depthBuffer:!1,stencilBuffer:!1}),c=new Dt(b,x,{type:Ht,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&S.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new pi(b,x),r===!0&&(l.format=Si,l.type=Ts)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<S.length;P++){let R=S[P];R.setSize&&R.setSize(b,x),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(E,b){if(p||E.toneMapping===ti&&S.length===0)return!1;if(v=b,b!==null){let x=b.width,M=b.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=ti,!0},this.hasRenderPass=function(){return y},this.end=function(E,b){E.toneMapping=g,p=!0;let x=o,M=a;for(let P=0;P<S.length;P++){let R=S[P];R.enabled!==!1&&(R.render(E,M,x,b),R.needsSwap!==!1&&(x=M,M=M===a?c:a))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,u.defines={},tt.getTransfer(m)===mt&&(u.defines.SRGB_TRANSFER="");let P=o_[_];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Hf=new qt,kf=new pi(1,1),Gf=new Qr(1),Vf=new Wr,Wf=new Ea,Xf=new jr,vf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vf[s];if(r===void 0&&(r=new Float32Array(s),vf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dc(i,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function d_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),Gt(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),Gt(t,n)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),Gt(t,n)}}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Uc(i){return i.version===0&&(i.compareFunction=sh,i.needsUpdate=!0),i}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Uc(kf):r=Hf,t.setTexture2D(e||r,s)}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function E_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Uc(Gf):r=Xf,t.setTextureCube(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vf,s)}function A_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function P_(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function I_(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N_(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function D_(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U_(i,e){i.uniform1iv(this.addr,e)}function F_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function B_(i,e){i.uniform4iv(this.addr,e)}function z_(i,e){i.uniform1uiv(this.addr,e)}function H_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function G_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){let n=this.cache,s=e.length,r=Dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Uc(kf):o=Hf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function W_(i,e,t){let n=this.cache,s=e.length,r=Dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wf,r[o])}function X_(i,e,t){let n=this.cache,s=e.length,r=Dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Uc(Gf):o=Xf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function q_(i,e,t){let n=this.cache,s=e.length,r=Dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vf,r[o])}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return N_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}var bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),o=Mh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Tf(t,l===void 0?new bh(a,i,e):new Th(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Eh(a),Tf(t,u)),t=u}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);K_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Z_=37297,J_=0;function $_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wf=new Ye;function j_(i){tt._getMatrix(wf,tt.workingColorSpace,i);let e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Af(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$_(i.getShaderSource(e),a)}else return r}function Q_(i,e){let t=j_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ev={[_o]:"Linear",[vo]:"Reinhard",[yo]:"Cineon",[Mo]:"ACESFilmic",[bo]:"AgX",[Ms]:"Neutral",[So]:"Custom"};function tv(i,e){let t=ev[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new A;function nv(){tt.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function sv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(ov,av)}function av(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wh(t)}var cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(i){return i.replace(cv,lv)}function lv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var hv={[_s]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function uv(i){return hv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dv={[hr]:"ENVMAP_MODE_REFRACTION"};function fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pv={[ql]:"ENVMAP_BLENDING_MULTIPLY",[Xd]:"ENVMAP_BLENDING_MIX",[qd]:"ENVMAP_BLENDING_ADD"};function mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pv[i.combine]||"ENVMAP_BLENDING_NONE"}function gv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=uv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fv(t),u=mv(t),d=iv(t),f=sv(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(_=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ti?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Q_("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=wh(o),o=Rf(o,t),o=Cf(o,t),a=wh(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,S=g+p+a,y=Ef(s,s.VERTEX_SHADER,v),E=Ef(s,s.FRAGMENT_SHADER,S);s.attachShader(m,y),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(E)||"",N=L.trim(),K=D.trim(),$=V.trim(),W=!0,oe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,E);else{let I=Af(s,y,"vertex"),G=Af(s,E,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+I+`
`+G)}else N!==""?Be("WebGLProgram: Program Info Log:",N):(K===""||$==="")&&(oe=!1);oe&&(R.diagnostics={runnable:W,programLog:N,vertexShader:{log:K,prefix:_},fragmentShader:{log:$,prefix:p}})}s.deleteShader(y),s.deleteShader(E),x=new mr(s,m),M=rv(s,m)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Z_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}var xv=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}};function _v(i){return i===ki||i===Ro||i===Co}function vv(i,e,t,n,s,r){let o=new Xr,a=new Ah,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,R,L,D){let V=R.fog,N=L.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||K,$),oe=d[x.type],I=n.precision;x.precision!==null&&(I=n.getMaxPrecision(x.precision),I!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",I,"instead."));let G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,O=G!==void 0?G.length:0,z=0;N.morphAttributes.position!==void 0&&(z=1),N.morphAttributes.normal!==void 0&&(z=2),N.morphAttributes.color!==void 0&&(z=3);let se,F,te,j;if(oe){let we=ii[oe];se=we.vertexShader,F=we.fragmentShader}else{se=x.vertexShader,F=x.fragmentShader;let we=a.getVertexShaderStage(x),vt=a.getFragmentShaderStage(x);a.update(x,we,vt),te=we.id,j=vt.id}let he=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Ee=L.isInstancedMesh===!0,ze=L.isBatchedMesh===!0,Le=!!x.map,Se=!!x.matcap,Pe=!!W,ne=Pe&&W.isPMREMTexture===!0,le=!!x.aoMap,de=!!x.lightMap,Re=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,qe=!!x.displacementMap,Ue=!!x.emissiveMap,je=!!x.metalnessMap,ot=!!x.roughnessMap,at=x.anisotropy>0,H=x.clearcoat>0,bt=x.diffuseRoughness>0,Qe=x.dispersion>0,ht=x.retroreflectivity>0,xe=x.iridescence>0,yt=x.sheen>0,He=x.transmission>0,We=at&&!!x.anisotropyMap,C=H&&!!x.clearcoatMap,T=H&&!!x.clearcoatNormalMap,q=H&&!!x.clearcoatRoughnessMap,ue=bt&&!!x.diffuseRoughnessMap,re=xe&&!!x.iridescenceMap,me=xe&&!!x.iridescenceThicknessMap,ye=yt&&!!x.sheenColorMap,k=yt&&!!x.sheenRoughnessMap,X=!!x.specularMap,ce=!!x.specularColorMap,U=!!x.specularIntensityMap,Q=He&&!!x.transmissionMap,ee=He&&!!x.thicknessMap,_e=!!x.gradientMap,pe=!!x.alphaMap,ve=x.alphaTest>0,ke=!!x.alphaHash,nt=!!x.extensions,fe=ti;x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Ve=ne?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,et={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:F,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:I,batching:ze,batchingColor:ze&&L._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Se,envMap:Pe,envMapMode:Pe&&W.mapping,envMapPMREM:ne,envMapMaxLod:ne?Ve.length-1:null,envMapSize:ne?Ve[0].width:null,aoMap:le,lightMap:de,bumpMap:Re,normalMap:ge,displacementMap:qe,emissiveMap:Ue,normalMapObjectSpace:ge&&x.normalMapType===Jd,normalMapTangentSpace:ge&&x.normalMapType===Cc,packedNormalMap:ge&&x.normalMapType===Cc&&_v(x.normalMap.format),metalnessMap:je,roughnessMap:ot,anisotropy:at,anisotropyMap:We,clearcoat:H,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:bt,diffuseRoughnessMap:ue,dispersion:Qe,retroreflection:ht,iridescence:xe,iridescenceMap:re,iridescenceThicknessMap:me,sheen:yt,sheenColorMap:ye,sheenRoughnessMap:k,specularMap:X,specularColorMap:ce,specularIntensityMap:U,transmission:He,transmissionMap:Q,thicknessMap:ee,gradientMap:_e,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:ke,combine:x.combine,mapUv:Le&&f(x.map.channel),aoMapUv:le&&f(x.aoMap.channel),lightMapUv:de&&f(x.lightMap.channel),bumpMapUv:Re&&f(x.bumpMap.channel),normalMapUv:ge&&f(x.normalMap.channel),displacementMapUv:qe&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:je&&f(x.metalnessMap.channel),roughnessMapUv:ot&&f(x.roughnessMap.channel),anisotropyMapUv:We&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:k&&f(x.sheenRoughnessMap.channel),specularMapUv:X&&f(x.specularMap.channel),specularColorMapUv:ce&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:ee&&f(x.thicknessMap.channel),alphaMapUv:pe&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||at),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Le||pe),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:z,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=d[x.type],P;if(M){let R=ii[M];P=Ti.clone(R.uniforms)}else P=x.uniforms;return P}function S(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new gv(i,M,x,s),l.push(P),h.set(M,P)),P}function y(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function b(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:b}}function yv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function c(d,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let S=a(d,f,m,_,p,g);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):t.push(S)}function l(d,f,m,_,p,g){let v=a(d,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Mv),n.length>1&&n.sort(f||Lf),s.length>1&&s.sort(f||Lf)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Sv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nf,i.set(n,[o])):s>=r.length?(o=new Nf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new Te};break;case"SpotLight":t={position:new A,direction:new A,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ev=0;function wv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Av(i){let e=new bv,t=Tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let s=new A,r=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,S=0,y=0,E=0,b=0,x=0,M=0,P=0,R=0;l.sort(wv);for(let D=0,V=l.length;D<V;D++){let N=l[D],K=N.color,$=N.intensity,W=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ki?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=K.r*$,u+=K.g*$,d+=K.b*$;else if(N.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(N.sh.coefficients[I],$);R++}else if(N.isSunLight){let I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let G=N.shadow,O=t.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=O,n.sunShadowMap[m]=oe;let z=G.getViewportCount();for(let se=0;se<z;se++)n.sunShadowMatrix[_+se]=G.getMatrix(se),n.sunShadowCascade[_+se]=G._cascadeData[se];_+=z,m++}n.sun[f]=I,f++}else if(N.isDirectionalLight){let I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let G=N.shadow,O=t.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=N.shadow.matrix,E++}n.directional[p]=I,p++}else if(N.isSpotLight){let I=e.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(K).multiplyScalar($),I.distance=W,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,n.spot[v]=I;let G=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,G.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[v]=G.matrix,N.castShadow){let O=t.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=oe,x++}v++}else if(N.isRectAreaLight){let I=e.get(N);I.color.copy(K).multiplyScalar($),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=I,S++}else if(N.isPointLight){let I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),I.distance=N.distance,I.decay=N.decay,N.castShadow){let G=N.shadow,O=t.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=I,g++}else if(N.isHemisphereLight){let I=e.get(N);I.skyColor.copy(N.color).multiplyScalar($),I.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[y]=I,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,L.sunLength=f,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=R,n.version=Ev++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let y=l[v];if(y.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function Df(i){let e=new Av(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Rv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Df(i),e.set(s,[a])):r>=o.length?(a=new Df(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
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
}`,Iv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Lv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Uf=new Ge,Io=new A,Sh=new A;function Nv(i,e,t){let n=new Jn,s=new ae,r=new ae,o=new gt,a=new sr,c=new Ua,l={},h=t.maxTextureSize,u={[ei]:Zt,[Zt]:ei,[ln]:ln},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new At;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Oe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let g=this.type;this.render=function(b,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===wd&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Mi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(K=>K.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,K=b.length;N<K;N++){let $=b[N],W=$.shadow;if(W===void 0){Be("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let oe=W.getFrameExtents();s.multiply(oe),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,W.mapSize.y=r.y));let I=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=I,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===cr){if($.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Dt(s.x,s.y,{format:ki,type:Ht,minFilter:zt,magFilter:zt,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new pi(s.x,s.y,Rn),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=fi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt}else $.isPointLight?(W.map=new No(s.x),W.map.depthTexture=new Qr(s.x,Xn)):(W.map=new Dt(s.x,s.y),W.map.depthTexture=new pi(s.x,s.y,Xn)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=fi,this.type===_s?(W.map.depthTexture.compareFunction=I?ih:nh,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let G=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,M);let O=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let z=0;z<G;z++){let se=W.getCamera(z);if($.isPointLight){let F=W.camera,te=W.matrix,j=$.distance||F.far;j!==F.far&&(F.far=j,F.updateProjectionMatrix()),Io.setFromMatrixPosition($.matrixWorld),F.position.copy(Io),Sh.copy(F.position),Sh.add(Iv[z]),F.up.copy(Lv[z]),F.lookAt(Sh),F.updateMatrixWorld(),te.makeTranslation(-Io.x,-Io.y,-Io.z),Uf.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Uf,F.coordinateSystem,F.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,z),i.clear();else{z===0&&(i.setRenderTarget(W.map),i.clear());let F=W.getViewport(z);o.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),D.viewport(o)}n=W.getFrustum(z),y(x,M,se,$,O,this.type)}W.isPointLightShadow!==!0&&this.type===cr&&v(W,M),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(P,R,L)};function v(b,x){let M=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Dt(s.x,s.y,{format:ki,type:Ht}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,M,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,M,f,_,null)}function S(b,x,M,P){let R=null,L=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=M.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=R.uuid,V=x.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let K=N[V];K===void 0&&(K=R.clone(),N[V]=K,x.addEventListener("dispose",E)),R=K}if(R.visible=x.visible,R.wireframe=x.wireframe,P===cr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=M}return R}function y(b,x,M,P,R,L){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===cr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let N=e.update(b),K=b.material;if(Array.isArray(K)){let $=N.groups;for(let W=0,oe=$.length;W<oe;W++){let I=$[W],G=K[I.materialIndex];if(G&&G.visible){let O=S(b,G,P,L);b.onBeforeShadow(i,b,x,M,N,O,I),i.renderBufferDirect(M,null,N,O,b,I),b.onAfterShadow(i,b,x,M,N,O,I)}}}else if(K.visible){let $=S(b,K,P,L);b.onBeforeShadow(i,b,x,M,N,$,null),i.renderBufferDirect(M,null,N,$,b,null),b.onAfterShadow(i,b,x,M,N,$,null)}}let V=b.children;for(let N=0,K=V.length;N<K;N++)y(V[N],x,M,P,R,L)}function E(b){b.target.removeEventListener("dispose",E);for(let M in l){let P=l[M],R=b.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function Dv(i,e){function t(){let U=!1,Q=new gt,ee=null,_e=new gt(0,0,0,0);return{setMask:function(pe){ee!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ve,ke,nt,fe){fe===!0&&(pe*=nt,ve*=nt,ke*=nt),Q.set(pe,ve,ke,nt),_e.equals(Q)===!1&&(i.clearColor(pe,ve,ke,nt),_e.copy(Q))},reset:function(){U=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,Q=!1,ee=null,_e=null,pe=null;return{setReversed:function(ve){if(Q!==ve){let ke=e.get("EXT_clip_control");ve?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Q=ve;let nt=pe;pe=null,this.setClear(nt)}},getReversed:function(){return Q},setTest:function(ve){ve?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!U&&(i.depthMask(ve),ee=ve)},setFunc:function(ve){if(Q&&(ve=af[ve]),_e!==ve){switch(ve){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ve}},setLocked:function(ve){U=ve},setClear:function(ve){pe!==ve&&(pe=ve,Q&&(ve=1-ve),i.clearDepth(ve))},reset:function(){U=!1,ee=null,_e=null,pe=null,Q=!1}}}function s(){let U=!1,Q=null,ee=null,_e=null,pe=null,ve=null,ke=null,nt=null,fe=null;return{setTest:function(Ve){U||(Ve?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ve){Q!==Ve&&!U&&(i.stencilMask(Ve),Q=Ve)},setFunc:function(Ve,et,we){(ee!==Ve||_e!==et||pe!==we)&&(i.stencilFunc(Ve,et,we),ee=Ve,_e=et,pe=we)},setOp:function(Ve,et,we){(ve!==Ve||ke!==et||nt!==we)&&(i.stencilOp(Ve,et,we),ve=Ve,ke=et,nt=we)},setLocked:function(Ve){U=Ve},setClear:function(Ve){fe!==Ve&&(i.clearStencil(Ve),fe=Ve)},reset:function(){U=!1,Q=null,ee=null,_e=null,pe=null,ve=null,ke=null,nt=null,fe=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,S=null,y=null,E=null,b=null,x=null,M=new Te(0,0,0),P=0,R=!1,L=null,D=null,V=null,N=null,K=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,oe=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(I)[1]),W=oe>=1):I.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),W=oe>=2);let G=null,O={},z=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),F=new gt().fromArray(z),te=new gt().fromArray(se);function j(U,Q,ee,_e){let pe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ee;ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(Q+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ve}let he={};he[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Vs),Re(!1),ge(kl),ie(i.CULL_FACE),le(Mi);function ie(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ee(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ze(U,Q){return d[U]!==Q?(i.bindFramebuffer(U,Q),d[U]=Q,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Le(U,Q){let ee=m,_e=!1;if(U){ee=f.get(Q),ee===void 0&&(ee=[],f.set(Q,ee));let pe=U.textures;if(ee.length!==pe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,ke=pe.length;ve<ke;ve++)ee[ve]=i.COLOR_ATTACHMENT0+ve;ee.length=pe.length,_e=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ee)}function Se(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Pe={[ys]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Pe[Pd]=i.MIN,Pe[Id]=i.MAX;let ne={[Ld]:i.ZERO,[Nd]:i.ONE,[Dd]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function le(U,Q,ee,_e,pe,ve,ke,nt,fe,Ve){if(U===Mi){p===!0&&(Ee(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),U!==Ad){if(U!==g||Ve!==R){if((v!==ys||E!==ys)&&(i.blendEquation(i.FUNC_ADD),v=ys,E=ys),Ve)switch(U){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",U);break}else switch(U){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",U);break}S=null,y=null,b=null,x=null,M.set(0,0,0),P=0,g=U,R=Ve}return}pe=pe||Q,ve=ve||ee,ke=ke||_e,(Q!==v||pe!==E)&&(i.blendEquationSeparate(Pe[Q],Pe[pe]),v=Q,E=pe),(ee!==S||_e!==y||ve!==b||ke!==x)&&(i.blendFuncSeparate(ne[ee],ne[_e],ne[ve],ne[ke]),S=ee,y=_e,b=ve,x=ke),(nt.equals(M)===!1||fe!==P)&&(i.blendColor(nt.r,nt.g,nt.b,fe),M.copy(nt),P=fe),g=U,R=!1}function de(U,Q){U.side===ln?Ee(i.CULL_FACE):ie(i.CULL_FACE);let ee=U.side===Zt;Q&&(ee=!ee),Re(ee),U.blending===lr&&U.transparent===!1?le(Mi):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let _e=U.stencilWrite;a.setTest(_e),_e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function ge(U){U!==Td?(ie(i.CULL_FACE),U!==D&&(U===kl?i.cullFace(i.BACK):U===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),D=U}function qe(U){U!==V&&(W&&i.lineWidth(U),V=U)}function Ue(U,Q,ee){U?(ie(i.POLYGON_OFFSET_FILL),(N!==Q||K!==ee)&&(N=Q,K=ee,o.getReversed()&&(Q=-Q,ee=-ee),i.polygonOffset(Q,ee))):Ee(i.POLYGON_OFFSET_FILL)}function je(U){U?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+$-1),G!==U&&(i.activeTexture(U),G=U)}function at(U,Q,ee){ee===void 0&&(G===null?ee=i.TEXTURE0+$-1:ee=G);let _e=O[ee];_e===void 0&&(_e={type:void 0,texture:void 0},O[ee]=_e),(_e.type!==U||_e.texture!==Q)&&(G!==ee&&(i.activeTexture(ee),G=ee),i.bindTexture(U,Q||he[U]),_e.type=U,_e.texture=Q)}function H(){let U=O[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function Qe(){try{i.compressedTexImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ht(){try{i.texSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function xe(){try{i.texSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function We(){try{i.texStorage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function C(){try{i.texStorage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function T(){try{i.texImage2D(...arguments)}catch(U){Xe("WebGLState:",U)}}function q(){try{i.texImage3D(...arguments)}catch(U){Xe("WebGLState:",U)}}function ue(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function re(U,Q){u[U]!==Q&&(i.pixelStorei(U,Q),u[U]=Q)}function me(U){F.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),F.copy(U))}function ye(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function k(U,Q){let ee=l.get(Q);ee===void 0&&(ee=new WeakMap,l.set(Q,ee));let _e=ee.get(U);_e===void 0&&(_e=i.getUniformBlockIndex(Q,U.name),i.uniformBlockBinding(Q,_e,_e),ee.set(U,_e))}function X(U,Q,ee){let pe=l.get(Q).get(U);c[pe]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,ee),c[pe]=ee)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,O={},d={},c={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,S=null,y=null,E=null,b=null,x=null,M=new Te(0,0,0),P=0,R=!1,L=null,D=null,V=null,N=null,K=null,F.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ee,bindFramebuffer:ze,drawBuffers:Le,useProgram:Se,setBlending:le,setMaterial:de,setFlipSided:Re,setCullFace:ge,setLineWidth:qe,setPolygonOffset:Ue,setScissorTest:je,activeTexture:ot,bindTexture:at,unbindTexture:H,compressedTexImage2D:bt,compressedTexImage3D:Qe,texImage2D:T,texImage3D:q,pixelStorei:re,getParameter:ue,updateUBOMapping:k,uniformBlockBinding:X,texStorage2D:We,texStorage3D:C,texSubImage2D:ht,texSubImage3D:xe,compressedTexSubImage2D:yt,compressedTexSubImage3D:He,scissor:me,viewport:ye,reset:ce}}function Uv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,_=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return p?new OffscreenCanvas(C,T):Xs("canvas")}function v(C,T,q){let ue=1,re=We(C);if((re.width>q||re.height>q)&&(ue=q/Math.max(re.width,re.height)),ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let me=Math.floor(ue*re.width),ye=Math.floor(ue*re.height);d===void 0&&(d=g(me,ye));let k=T?g(me,ye):d;return k.width=me,k.height=ye,k.getContext("2d").drawImage(C,0,0,me,ye),Be("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+me+"x"+ye+")."),k}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function S(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,T,q,ue,re,me=!1){if(C!==null){if(i[C]!==void 0)return i[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;ue&&(ye=e.get("EXT_texture_norm16"),ye||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=T;if(T===i.RED&&(q===i.FLOAT&&(k=i.R32F),q===i.HALF_FLOAT&&(k=i.R16F),q===i.UNSIGNED_BYTE&&(k=i.R8),q===i.UNSIGNED_SHORT&&ye&&(k=ye.R16_EXT),q===i.SHORT&&ye&&(k=ye.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(k=i.R8UI),q===i.UNSIGNED_SHORT&&(k=i.R16UI),q===i.UNSIGNED_INT&&(k=i.R32UI),q===i.BYTE&&(k=i.R8I),q===i.SHORT&&(k=i.R16I),q===i.INT&&(k=i.R32I)),T===i.RG&&(q===i.FLOAT&&(k=i.RG32F),q===i.HALF_FLOAT&&(k=i.RG16F),q===i.UNSIGNED_BYTE&&(k=i.RG8),q===i.UNSIGNED_SHORT&&ye&&(k=ye.RG16_EXT),q===i.SHORT&&ye&&(k=ye.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(k=i.RG8UI),q===i.UNSIGNED_SHORT&&(k=i.RG16UI),q===i.UNSIGNED_INT&&(k=i.RG32UI),q===i.BYTE&&(k=i.RG8I),q===i.SHORT&&(k=i.RG16I),q===i.INT&&(k=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(k=i.RGB8UI),q===i.UNSIGNED_SHORT&&(k=i.RGB16UI),q===i.UNSIGNED_INT&&(k=i.RGB32UI),q===i.BYTE&&(k=i.RGB8I),q===i.SHORT&&(k=i.RGB16I),q===i.INT&&(k=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),q===i.UNSIGNED_INT&&(k=i.RGBA32UI),q===i.BYTE&&(k=i.RGBA8I),q===i.SHORT&&(k=i.RGBA16I),q===i.INT&&(k=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&ye&&(k=ye.RGB16_EXT),q===i.SHORT&&ye&&(k=ye.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),T===i.RGBA){let X=me?Gr:tt.getTransfer(re);q===i.FLOAT&&(k=i.RGBA32F),q===i.HALF_FLOAT&&(k=i.RGBA16F),q===i.UNSIGNED_BYTE&&(k=X===mt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ye&&(k=ye.RGBA16_EXT),q===i.SHORT&&ye&&(k=ye.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function x(C,T){let q;return C?T===null||T===Xn||T===Ts?q=i.DEPTH24_STENCIL8:T===Rn?q=i.DEPTH32F_STENCIL8:T===fr&&(q=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Xn||T===Ts?q=i.DEPTH_COMPONENT24:T===Rn?q=i.DEPTH_COMPONENT32F:T===fr&&(q=i.DEPTH_COMPONENT16),q}function M(C,T){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nt&&C.minFilter!==zt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function P(C){let T=new WeakRef(C);n.get(C).__ref=T,m.add(T),_.register(C,T,T)}function R(C){let T=n.get(C).__ref;T!==void 0&&(m.delete(T),_.unregister(T))}function L(C){V(C.target)}function D(C){N(C.target)}function V(C){C.removeEventListener("dispose",L),R(C),$(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function N(C){C.removeEventListener("dispose",D),R(C),oe(C)}function K(){for(let C of m){let T=C.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):V(T))}m.clear(),u.clear()}function $(C){let T=n.get(C);if(T.__webglInit===void 0)return;let q=C.source,ue=f.get(q);if(ue){let re=ue[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&W(C),Object.keys(ue).length===0&&f.delete(q)}n.remove(C)}function W(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let q=C.source,ue=f.get(q);delete ue[T.__cacheKey],o.memory.textures--}function oe(C){let T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=C.depthTexture;if(q&&q.renderTarget===C&&V(q),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let me=0;me<T.__webglFramebuffer[re].length;me++)i.deleteFramebuffer(T.__webglFramebuffer[re][me]);else i.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)i.deleteFramebuffer(T.__webglFramebuffer[re]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ue=C.textures;for(let re=0,me=ue.length;re<me;re++){let ye=n.get(ue[re]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(ue[re])}n.remove(C)}let I=0;function G(){I=0}function O(){return I}function z(C){I=C}function se(){let C=I;return C>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function F(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function te(C,T){let q=n.get(C);if(C.isVideoTexture&&yt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let ue=C.image;if(ue===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{de(q,C,T);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function j(C,T){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){de(q,C,T);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function he(C,T){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){de(q,C,T);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function ie(C,T){let q=n.get(C);if(C.version>0&&q.__version!==C.version){Re(q,C,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let Ee={[Nn]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ze={[Nt]:i.NEAREST,[Xa]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},Le={[jd]:i.NEVER,[sh]:i.ALWAYS,[Qd]:i.LESS,[nh]:i.LEQUAL,[ef]:i.EQUAL,[ih]:i.GEQUAL,[tf]:i.GREATER,[nf]:i.NOTEQUAL};function Se(C,T){if(T.type===Rn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zt||T.magFilter===dr||T.magFilter===bs||T.magFilter===yn||T.minFilter===zt||T.minFilter===dr||T.minFilter===bs||T.minFilter===yn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ee[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ee[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ee[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ze[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ze[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==bs&&T.minFilter!==yn||T.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pe(C,T){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",L),P(T));let ue=T.source,re=f.get(ue);re===void 0&&(re={},f.set(ue,re));let me=F(T);if(me!==C.__cacheKey){re[me]===void 0&&(re[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[me].usedTimes++;let ye=re[C.__cacheKey];ye!==void 0&&(re[C.__cacheKey].usedTimes--,ye.usedTimes===0&&W(T)),C.__cacheKey=me,C.__webglTexture=re[me].texture}return q}function ne(C,T,q){return Math.floor(Math.floor(C/q)/T)}function le(C,T,q,ue){let me=C.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,ue,T.data);else{me.sort((U,Q)=>U.start-Q.start);let ye=0;for(let U=1;U<me.length;U++){let Q=me[ye],ee=me[U],_e=Q.start+Q.count,pe=ne(ee.start,T.width,4),ve=ne(Q.start,T.width,4);ee.start<=_e+1&&pe===ve&&ne(ee.start+ee.count-1,T.width,4)===pe?Q.count=Math.max(Q.count,ee.start+ee.count-Q.start):(++ye,me[ye]=ee)}me.length=ye+1;let k=t.getParameter(i.UNPACK_ROW_LENGTH),X=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let U=0,Q=me.length;U<Q;U++){let ee=me[U],_e=Math.floor(ee.start/4),pe=Math.ceil(ee.count/4),ve=_e%T.width,ke=Math.floor(_e/T.width),nt=pe,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,ve,ke,nt,fe,q,ue,T.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,k),t.pixelStorei(i.UNPACK_SKIP_PIXELS,X),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function de(C,T,q){let ue=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=i.TEXTURE_3D);let re=Pe(C,T),me=T.source;t.bindTexture(ue,C.__webglTexture,i.TEXTURE0+q);let ye=n.get(me);if(me.version!==ye.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let fe=tt.getPrimaries(tt.workingColorSpace),Ve=T.colorSpace===bi?null:tt.getPrimaries(T.colorSpace),et=T.colorSpace===bi||fe===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let X=v(T.image,!1,s.maxTextureSize);X=He(T,X);let ce=r.convert(T.format,T.colorSpace),U=r.convert(T.type),Q=b(T.internalFormat,ce,U,T.normalized,T.colorSpace,T.isVideoTexture);Se(ue,T);let ee,_e=T.mipmaps,pe=T.isVideoTexture!==!0,ve=ye.__version===void 0||re===!0,ke=me.dataReady,nt=M(T,X);if(T.isDepthTexture)Q=x(T.format===Si,T.type),ve&&(pe?t.texStorage2D(i.TEXTURE_2D,1,Q,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,Q,X.width,X.height,0,ce,U,null));else if(T.isDataTexture)if(_e.length>0){pe&&ve&&t.texStorage2D(i.TEXTURE_2D,nt,Q,_e[0].width,_e[0].height);for(let fe=0,Ve=_e.length;fe<Ve;fe++)ee=_e[fe],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ee.width,ee.height,ce,U,ee.data):t.texImage2D(i.TEXTURE_2D,fe,Q,ee.width,ee.height,0,ce,U,ee.data);T.generateMipmaps=!1}else pe?(ve&&t.texStorage2D(i.TEXTURE_2D,nt,Q,X.width,X.height),ke&&le(T,X,ce,U)):t.texImage2D(i.TEXTURE_2D,0,Q,X.width,X.height,0,ce,U,X.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pe&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Q,_e[0].width,_e[0].height,X.depth);for(let fe=0,Ve=_e.length;fe<Ve;fe++)if(ee=_e[fe],T.format!==Fn)if(ce!==null)if(pe){if(ke)if(T.layerUpdates.size>0){let et=mh(ee.width,ee.height,T.format,T.type);for(let we of T.layerUpdates){let vt=ee.data.subarray(we*et/ee.data.BYTES_PER_ELEMENT,(we+1)*et/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,we,ee.width,ee.height,1,ce,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ee.width,ee.height,X.depth,ce,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Q,ee.width,ee.height,X.depth,0,ee.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,ee.width,ee.height,X.depth,ce,U,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Q,ee.width,ee.height,X.depth,0,ce,U,ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{pe&&ve&&t.texStorage2D(i.TEXTURE_2D,nt,Q,_e[0].width,_e[0].height);for(let fe=0,Ve=_e.length;fe<Ve;fe++)ee=_e[fe],T.format!==Fn?ce!==null?pe?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,ee.width,ee.height,ce,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Q,ee.width,ee.height,0,ee.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ke&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ee.width,ee.height,ce,U,ee.data):t.texImage2D(i.TEXTURE_2D,fe,Q,ee.width,ee.height,0,ce,U,ee.data)}else if(T.isDataArrayTexture)if(pe){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Q,X.width,X.height,X.depth),ke)if(T.layerUpdates.size>0){let fe=mh(X.width,X.height,T.format,T.type);for(let Ve of T.layerUpdates){let et=X.data.subarray(Ve*fe/X.data.BYTES_PER_ELEMENT,(Ve+1)*fe/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,X.width,X.height,1,ce,U,et)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ce,U,X.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,X.width,X.height,X.depth,0,ce,U,X.data);else if(T.isData3DTexture)pe?(ve&&t.texStorage3D(i.TEXTURE_3D,nt,Q,X.width,X.height,X.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ce,U,X.data)):t.texImage3D(i.TEXTURE_3D,0,Q,X.width,X.height,X.depth,0,ce,U,X.data);else if(T.isFramebufferTexture){if(ve)if(pe)t.texStorage2D(i.TEXTURE_2D,nt,Q,X.width,X.height);else{let fe=X.width,Ve=X.height;for(let et=0;et<nt;et++)t.texImage2D(i.TEXTURE_2D,et,Q,fe,Ve,0,ce,U,null),fe>>=1,Ve>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),X.parentNode!==fe){fe.appendChild(X),u.add(T),fe.onpaint=Ve=>{let et=Ve.changedElements;for(let we of u)et.includes(we.image)&&(we.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{let et=i.RGBA,we=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,we,vt,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(pe&&ve){let fe=We(_e[0]);t.texStorage2D(i.TEXTURE_2D,nt,Q,fe.width,fe.height)}for(let fe=0,Ve=_e.length;fe<Ve;fe++)ee=_e[fe],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ce,U,ee):t.texImage2D(i.TEXTURE_2D,fe,Q,ce,U,ee);T.generateMipmaps=!1}else if(pe){if(ve){let fe=We(X);t.texStorage2D(i.TEXTURE_2D,nt,Q,fe.width,fe.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,U,X)}else t.texImage2D(i.TEXTURE_2D,0,Q,ce,U,X);S(T)&&T.mipmapsAutoUpdate===!0&&y(ue),ye.__version=me.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Re(C,T,q){if(T.image.length!==6)return;let ue=Pe(C,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let me=n.get(re);if(re.version!==me.__version||ue===!0){t.activeTexture(i.TEXTURE0+q);let ye=tt.getPrimaries(tt.workingColorSpace),k=T.colorSpace===bi?null:tt.getPrimaries(T.colorSpace),X=T.colorSpace===bi||ye===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let ce=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let we=0;we<6;we++)!ce&&!U?Q[we]=v(T.image[we],!0,s.maxCubemapSize):Q[we]=U?T.image[we].image:T.image[we],Q[we]=He(T,Q[we]);let ee=Q[0],_e=r.convert(T.format,T.colorSpace),pe=r.convert(T.type),ve=b(T.internalFormat,_e,pe,T.normalized,T.colorSpace),ke=T.isVideoTexture!==!0,nt=me.__version===void 0||ue===!0,fe=re.dataReady,Ve=M(T,ee);Se(i.TEXTURE_CUBE_MAP,T);let et;if(T.isDepthTexture){if(ve=x(T.format===Si,T.type),nt)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ve,ee.width,ee.height);else for(let we=0;we<6;we++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,ee.width,ee.height,0,_e,pe,null)}else if(ce){ke&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ve,ee.width,ee.height);for(let we=0;we<6;we++){et=Q[we].mipmaps;for(let vt=0;vt<et.length;vt++){let Vt=et[vt];T.format!==Fn?_e!==null?ke?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt,0,0,Vt.width,Vt.height,_e,Vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt,ve,Vt.width,Vt.height,0,Vt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt,0,0,Vt.width,Vt.height,_e,pe,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt,ve,Vt.width,Vt.height,0,_e,pe,Vt.data)}}}else{if(et=T.mipmaps,ke&&nt){et.length>0&&Ve++;let we=We(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ve,we.width,we.height)}for(let we=0;we<6;we++)if(U){ke?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Q[we].width,Q[we].height,_e,pe,Q[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,Q[we].width,Q[we].height,0,_e,pe,Q[we].data);for(let vt=0;vt<et.length;vt++){let wi=et[vt].image[we].image;ke?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt+1,0,0,wi.width,wi.height,_e,pe,wi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt+1,ve,wi.width,wi.height,0,_e,pe,wi.data)}}else{ke?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,_e,pe,Q[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,_e,pe,Q[we]);for(let vt=0;vt<et.length;vt++){let Vt=et[vt];ke?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt+1,0,0,_e,pe,Vt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,vt+1,ve,_e,pe,Vt.image[we])}}}S(T)&&T.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),me.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ge(C,T,q,ue,re,me){let ye=r.convert(q.format,q.colorSpace),k=r.convert(q.type),X=b(q.internalFormat,ye,k,q.normalized,q.colorSpace),ce=n.get(T),U=n.get(q);if(U.__renderTarget=T,!ce.__hasExternalTextures){let Q=Math.max(1,T.width>>me),ee=Math.max(1,T.height>>me);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,me,X,Q,ee,T.depth,0,ye,k,null):t.texImage2D(re,me,X,Q,ee,0,ye,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,re,U.__webglTexture,0,ht(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,re,U.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(C,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let ue=T.depthTexture,re=ue&&ue.isDepthTexture?ue.type:null,me=x(T.stencilBuffer,re),ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(T),me,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(T),me,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,C)}else{let ue=T.textures;for(let re=0;re<ue.length;re++){let me=ue[re],ye=r.convert(me.format,me.colorSpace),k=r.convert(me.type),X=b(me.internalFormat,ye,k,me.normalized,me.colorSpace);xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(T),X,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(T),X,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,X,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(C,T,q){let ue=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(T.depthTexture);re.__renderTarget=T;let me=ue?T.depthTexture.image[0]:T.depthTexture.image;(!re.__webglTexture||me.width!==T.width||me.height!==T.height)&&(me.width=T.width,me.height=T.height,T.depthTexture.needsUpdate=!0),ue?ie(T.depthTexture,0):te(T.depthTexture,0);let ye=re.__webglTexture,k=ht(T),X=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ce=T.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===fi)xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,X,ye,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,ce,X,ye,0);else if(T.depthTexture.format===Si)xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,X,ye,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,ce,X,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){let T=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let ue=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){let re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",re)};ue.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=ue}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let ue=0;ue<6;ue++)Ue(T.__webglFramebuffer[ue],C,ue);else C.texture.mipmaps.length>0?Ue(T.__webglFramebuffer[0],C,0):Ue(T.__webglFramebuffer,C,0);else if(q){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=i.createRenderbuffer(),qe(T.__webglDepthbuffer[ue],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),qe(T.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,T,q){let ue=n.get(C);T!==void 0&&ge(ue.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&je(C)}function at(C){let T=C.texture,q=n.get(C),ue=n.get(T);C.addEventListener("dispose",D),P(C);let re=C.textures,me=C.isWebGLCubeRenderTarget===!0,ye=re.length>1;if(ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=T.version,o.memory.textures++),me){q.__webglFramebuffer=[];for(let k=0;k<6;k++)if(T.mipmaps.length>0){q.__webglFramebuffer[k]=[];for(let X=0;X<T.mipmaps.length;X++)q.__webglFramebuffer[k][X]=i.createFramebuffer()}else q.__webglFramebuffer[k]=i.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let k=0;k<T.mipmaps.length;k++)q.__webglFramebuffer[k]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ye)for(let k=0,X=re.length;k<X;k++){let ce=n.get(re[k]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&xe(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let k=0;k<re.length;k++){let X=re[k];q.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[k]);let ce=r.convert(X.format,X.colorSpace),U=r.convert(X.type),Q=b(X.internalFormat,ce,U,X.normalized,X.colorSpace,C.isXRRenderTarget===!0),ee=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,q.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Se(i.TEXTURE_CUBE_MAP,T);for(let k=0;k<6;k++)if(T.mipmaps.length>0)for(let X=0;X<T.mipmaps.length;X++)ge(q.__webglFramebuffer[k][X],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,X);else ge(q.__webglFramebuffer[k],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);S(T)?y(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let k=0,X=re.length;k<X;k++){let ce=re[k],U=n.get(ce),Q=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,U.__webglTexture),Se(Q,ce),ge(q.__webglFramebuffer,C,ce,i.COLOR_ATTACHMENT0+k,Q,0),S(ce)&&y(Q)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(k=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,ue.__webglTexture),Se(k,T),T.mipmaps.length>0)for(let X=0;X<T.mipmaps.length;X++)ge(q.__webglFramebuffer[X],C,T,i.COLOR_ATTACHMENT0,k,X);else ge(q.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,k,0);S(T)?y(k):T.mipmaps.length>0&&i.texParameteri(k,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&je(C)}function H(C){let T=C.textures;for(let q=0,ue=T.length;q<ue;q++){let re=T[q];if(S(re)&&re.mipmapsAutoUpdate===!0){let me=E(C),ye=n.get(re).__webglTexture;t.bindTexture(me,ye),y(me),t.unbindTexture()}}}let bt=[];function Qe(C){if(C.samples>0){if(xe(C)===!1){let T=C.textures,q=C.width,ue=C.height,re=i.COLOR_BUFFER_BIT,me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(C),k=T.length>1;if(k)for(let ce=0;ce<T.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);let U=n.get(T[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,q,ue,0,0,q,ue,re,i.NEAREST),c===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&bt.push(me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let ce=0;ce<T.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);let U=n.get(T[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function xe(C){let T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function He(C,T){let q=C.colorSpace,ue=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==on&&q!==bi&&(tt.getTransfer(q)===mt?(ue!==Fn||re!==Mn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",q)),T}function We(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=se,this.resetTextureUnits=G,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=he,this.setTextureCube=ie,this.rebindTextures=ot,this.setupRenderTarget=at,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe,this.dispose=K}function Fv(i,e){function t(n,s=bi){let r,o=tt.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===Fn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===To||n===Eo||n===wo||n===Ao)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===Ro||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Tc||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Ac||n===Co||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends Zn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Ch,g={},v=t.getContextAttributes(),S=null,y=null,E=[],b=[],x=new ae,M=null,P=null,R=new Bt;R.viewport=new gt;let L=new Bt;L.viewport=new gt;let D=[R,L],V=new Ga,N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let te=E[F];return te===void 0&&(te=new Ks,E[F]=te),te.getTargetRaySpace()},this.getControllerGrip=function(F){let te=E[F];return te===void 0&&(te=new Ks,E[F]=te),te.getGripSpace()},this.getHand=function(F){let te=E[F];return te===void 0&&(te=new Ks,E[F]=te),te.getHandSpace()};function $(F){let te=b.indexOf(F.inputSource);if(te===-1)return;let j=E[te];j!==void 0&&(j.update(F.inputSource,F.frame,l||o),j.dispatchEvent({type:F.type,data:F.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",oe);for(let F=0;F<E.length;F++){let te=b[F];te!==null&&(b[F]=null,E[F].disconnect(te))}N=null,K=null,p.reset();for(let F in g)delete g[F];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),P!==null){let F=P.camera;F.fov=P.fov,F.zoom=P.zoom,F.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,he=null,ie=null;v.depth&&(ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Si:fi,he=v.stencil?Ts:Xn);let Ee={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dt(d.textureWidth,d.textureHeight,{format:Fn,type:Mn,depthTexture:new pi(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(F){for(let te=0;te<F.removed.length;te++){let j=F.removed[te],he=b.indexOf(j);he>=0&&(b[he]=null,E[he].disconnect(j))}for(let te=0;te<F.added.length;te++){let j=F.added[te],he=b.indexOf(j);if(he===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=b.length){b.push(j),he=Ee;break}else if(b[Ee]===null){b[Ee]=j,he=Ee;break}if(he===-1)break}let ie=E[he];ie&&ie.connect(j)}}function I(F,te){te===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(te.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let te=F.near,j=F.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(j=p.depthFar)),V.near=L.near=R.near=te,V.far=L.far=R.far=j,(N!==V.near||K!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,K=V.far),V.layers.mask=F.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let he=F.parent,ie=V.cameras;I(V,he);for(let Ee=0;Ee<ie.length;Ee++)I(ie[Ee],he);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&F.isPerspectiveCamera&&(P={camera:F,fov:F.fov,zoom:F.zoom}),G(F,V,he)};function G(F,te,j){j===null?F.matrix.copy(te.matrixWorld):(F.matrix.copy(j.matrixWorld),F.matrix.invert(),F.matrix.multiply(te.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(te.projectionMatrix),F.projectionMatrixInverse.copy(te.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=rs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(F){return g[F]};let O=null;function z(F,te){if(h=te.getViewerPose(l||o),m=te,h!==null){let j=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;j.length!==V.cameras.length&&(V.cameras.length=0,he=!0);for(let Le=0;Le<j.length;Le++){let Se=j[Le],Pe=null;if(f!==null)Pe=f.getViewport(Se);else{let le=u.getViewSubImage(d,Se);Pe=le.viewport,Le===0&&(e.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(y))}let ne=D[Le];ne===void 0&&(ne=new Bt,ne.layers.enable(Le),ne.viewport=new gt,D[Le]=ne),ne.matrix.fromArray(Se.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Se.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Le===0&&(V.matrix.copy(ne.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),he===!0&&V.cameras.push(ne)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Le=u.getDepthInformation(j[0]);Le&&Le.isValid&&Le.texture&&p.init(Le,s.renderState)}if(ie&&ie.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<j.length;Le++){let Se=j[Le].camera;if(Se){let Pe=g[Se];Pe||(Pe=new eo,g[Se]=Pe);let ne=u.getCameraImage(Se);Pe.sourceTexture=ne}}}}for(let j=0;j<E.length;j++){let he=b[j],ie=E[j];he!==null&&ie!==void 0&&ie.update(he,te,l||o)}O&&O(F,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let se=new Ff;se.setAnimationLoop(z),this.setAnimationLoop=function(F){O=F},this.dispose=function(){}}},zv=new Ge,qf=new Ye;qf.set(-1,0,0,0,1,0,0,0,1);function Hv(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,dh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,v,S):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Zt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Zt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(qf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={};function o(v,S){let y=S.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,S){let y=s[v.id];y===void 0&&(m(v),y=c(v),s[v.id]=y,v.addEventListener("dispose",p));let E=S.program;n.updateUBOMapping(v,E);let b=e.render.frame;r[v.id]!==b&&(l(v),r[v.id]=b)}function c(v){let S=i.createBuffer(),y=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function l(v){let S=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,x=y.length;b<x;b++){let M=y[b];if(Array.isArray(M))for(let P=0,R=M.length;P<R;P++)h(M[P],b,P,E);else h(M,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,y,E){if(d(v,S,y,E)===!0){let b=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let R=x[P],L=_(R,!0);u(R,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function u(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function d(v,S,y,E){let b=v.value,x=S+"_"+y;if(Array.isArray(b)){E[x]===void 0&&(E[x]=[]);let M=E[x],P=!1;for(let R=0;R<b.length;R++)f(b[R],M,R)===!0&&(P=!0);return P}return f(b,E,x)}function f(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let E=S[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(v){let S=v.uniforms,y=0,E=16;for(let x=0,M=S.length;x<M;x++){let P=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,L=P.length;R<L;R++){let D=P[R],V=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(S[x])||Array.isArray(D.value),K=y;for(let W=0,oe=V.length;W<oe;W++){let I=V[W],G=_(I,N),O=y%E,z=O%G.boundary,se=O+z;y+=z,se!==0&&E-se<G.storage&&(y+=E-se),W===0&&(K=y),y+=G.storage}let $=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new $((y-K)/Float32Array.BYTES_PER_ELEMENT),D.__offset=K}}let b=y%E;return b>0&&(y+=E-b),v.__size=y,v.__cache={},this}function _(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let S=v.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var Gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Vv(){return ni===null&&(ni=new $s(Gv,16,16,ki,Ht),ni.name="DFG_LUT",ni.minFilter=zt,ni.magFilter=zt,ni.wrapS=fn,ni.wrapT=fn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Nc=class{constructor(e={}){let{canvas:t=sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([ja,$a,Ja]),g=new Set([Mn,Xn,fr,Ts,Ya,Ka]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,b=null,x=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,V=null,N=null,K=null;this._outputColorSpace=Ct;let $=0,W=0,oe=null,I=-1,G=null,O=new gt,z=new gt,se=null,F=new Te(0),te=0,j=t.width,he=t.height,ie=1,Ee=null,ze=null,Le=new gt(0,0,j,he),Se=new gt(0,0,j,he),Pe=!1,ne=new Jn,le=new wa,de=!1,Re=!1,ge=new Ge,qe=new A,Ue=new gt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function at(){return oe===null?ie:1}let H=n;function bt(w,B){return t.getContext(w,B)}let Qe,ht,xe,yt,He,We,C,T,q,ue,re,me,ye,k,X,ce,U,Q,ee,_e,pe,ve,ke;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",we,!1),H===null){let B="webgl2";if(H=bt(B,w),H===null)throw bt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(w){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Xe("WebGLRenderer: "+w.message),w}function nt(){Qe=new e_(H),Qe.init(),pe=new Fv(H,Qe),ht=new Vx(H,Qe,e,pe),xe=new Dv(H,Qe),ht.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),V=H.createFramebuffer(),N=H.createFramebuffer(),K=H.createFramebuffer(),yt=new i_(H),He=new yv,We=new Uv(H,Qe,xe,He,ht,pe,yt),C=new Qx(R),T=new rg(H),ve=new kx(H,T),q=new t_(H,T,yt,ve),ue=new r_(H,q,T,ve,yt),Q=new s_(H,ht,We),X=new Wx(He),re=new vv(R,C,Qe,ht,ve,X),me=new Hv(R,He),ye=new Sv,k=new Rv(Qe),U=new Hx(R,C,xe,ue,m,c),ce=new Nv(R,ue,ht),ke=new kv(H,yt,ht,xe),ee=new Gx(H,Qe,yt),_e=new n_(H,Qe,yt),yt.programs=re.programs,R.capabilities=ht,R.extensions=Qe,R.properties=He,R.renderLists=ye,R.shadowMap=ce,R.state=xe,R.info=yt}_!==Mn&&(P=new a_(_,t.width,t.height,a,s,r));let fe=new Ph(R,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(j,he,!1))},this.getSize=function(w){return w.set(j,he)},this.setSize=function(w,B,J=!0){if(fe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,he=B,t.width=Math.floor(w*ie),t.height=Math.floor(B*ie),J===!0&&(t.style.width=w+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(j*ie,he*ie).floor()},this.setDrawingBufferSize=function(w,B,J){j=w,he=B,ie=J,t.width=Math.floor(w*J),t.height=Math.floor(B*J),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===Mn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,B,J,Y){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,B,J,Y),xe.viewport(O.copy(Le).multiplyScalar(at()).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,B,J,Y){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,B,J,Y),xe.scissor(z.copy(Se).multiplyScalar(at()).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){xe.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,J=!0){let Y=0;if(w){let Z=!1;if(oe!==null){let be=oe.texture.format;Z=p.has(be)}if(Z){let be=oe.texture.type,Ie=g.has(be),Me=U.getClearColor(),Ce=U.getClearAlpha(),Fe=Me.r,$e=Me.g,ct=Me.b;Ie?(v[0]=Fe,v[1]=$e,v[2]=ct,v[3]=Ce,H.clearBufferuiv(H.COLOR,0,v)):(S[0]=Fe,S[1]=$e,S[2]=ct,S[3]=Ce,H.clearBufferiv(H.COLOR,0,S))}else Y|=H.COLOR_BUFFER_BIT}B&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",we,!1),U.dispose(),ye.dispose(),k.dispose(),We.dispose(),He.dispose(),C.dispose(),ue.dispose(),q.dispose(),ve.dispose(),ke.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Su),fe.removeEventListener("sessionend",bu),Ki.stop()};function Ve(w){w.preventDefault(),Vr("WebGLRenderer: Context Lost."),L=!0}function et(){Vr("WebGLRenderer: Context Restored."),L=!1;let w=yt.autoReset,B=ce.enabled,J=ce.autoUpdate,Y=ce.needsUpdate,Z=ce.type;nt(),yt.autoReset=w,ce.enabled=B,ce.autoUpdate=J,ce.needsUpdate=Y,ce.type=Z}function we(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vt(w){let B=w.target;B.removeEventListener("dispose",vt),Vt(B)}function Vt(w){wi(w),He.remove(w)}function wi(w){let B=He.get(w).programs;B!==void 0&&(B.forEach(function(J){re.releaseProgram(J)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,J,Y,Z,be){B===null&&(B=je);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Me=wp(w,B,J,Y,Z);xe.setMaterial(Y,Ie);let Ce=J.index,Fe=1;if(Y.wireframe===!0){if(Ce=q.getWireframeAttribute(J),Ce===void 0)return;Fe=2}let $e=J.drawRange,ct=J.attributes.position,Ne=$e.start*Fe,lt=($e.start+$e.count)*Fe;be!==null&&(Ne=Math.max(Ne,be.start*Fe),lt=Math.min(lt,(be.start+be.count)*Fe)),Ce!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,Ce.count)):ct!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,ct.count));let Ft=lt-Ne;if(Ft<0||Ft===1/0)return;ve.setup(Z,Y,Me,J,Ce);let Tt,Mt=ee;if(Ce!==null&&(Tt=T.get(Ce),Mt=_e,Mt.setIndex(Tt)),Z.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*at()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(Z.isLine){let Jt=Y.linewidth;Jt===void 0&&(Jt=1),xe.setLineWidth(Jt*at()),Z.isLineSegments?Mt.setMode(H.LINES):Z.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else Z.isPoints?Mt.setMode(H.POINTS):Z.isSprite&&Mt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Jt=Z._multiDrawStarts,De=Z._multiDrawCounts,sn=Z._multiDrawCount,_t=Ce?T.get(Ce).bytesPerElement:1,Zi=He.get(Y).currentProgram.getUniforms();for(let $t=0;$t<sn;$t++)Zi.setValue(H,"_gl_DrawID",$t),Mt.render(Jt[$t]/_t,De[$t])}else if(Z.isInstancedMesh)Mt.renderInstances(Ne,Ft,Z.count);else if(J.isInstancedBufferGeometry){let Jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,De=Math.min(J.instanceCount,Jt);Mt.renderInstances(Ne,Ft,De)}else Mt.render(Ne,Ft)};function Mu(w,B,J,Y){D!==null&&w.isNodeMaterial&&D.setObject(Y,w),de===!0&&X.setState(w,J,!1),w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=Zt,w.needsUpdate=!0,Ar(w,B,Y),w.side=ei,w.needsUpdate=!0,Ar(w,B,Y),w.side=ln):Ar(w,B,Y)}this.compile=function(w,B,J=null){J===null&&(J=w),D!==null&&D.renderStart(w,B,J),b=k.get(J),b.init(B),M.push(b),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),w!==J&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Re=this.localClippingEnabled,de=X.init(this.clippingPlanes,Re),de===!0&&X.setGlobalState(this.clippingPlanes,B),D!==null&&ce.render(b.state.shadowsArray,J,B);let Y=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let be=Z.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let Me=be[Ie];Mu(Me,J,B,Z),Y.add(Me)}else Mu(be,J,B,Z),Y.add(be)}),b=M.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(w,B,J=null){let Y=this.compile(w,B,J);return new Promise(Z=>{function be(){if(Y.forEach(function(Ie){let Ce=He.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Ie)}),Y.size===0){Z(w);return}setTimeout(be,10)}Qe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Jc=null;function Tp(w){Jc&&Jc(w)}function Su(){Ki.stop()}function bu(){Ki.start()}let Ki=new Ff;Ki.setAnimationLoop(Tp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){Jc=w,fe.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},fe.addEventListener("sessionstart",Su),fe.addEventListener("sessionend",bu),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,B);let J=fe.enabled===!0&&fe.isPresenting===!0,Y=P!==null&&(oe===null||J)&&P.begin(R,oe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,B,oe),b=k.get(w,M.length),b.init(B),b.state.textureUnits=We.getTextureUnits(),M.push(b),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?le.setFromArrayCamera(B):ne.setFromProjectionMatrix(ge,Ln,B.reversedDepth),Re=this.localClippingEnabled,de=X.init(this.clippingPlanes,Re),E=ye.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){let Ie=R.xr.getDepthSensingMesh();Ie!==null&&$c(Ie,B,-1/0,R.sortObjects)}$c(w,B,0,R.sortObjects),E.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(Ee,ze),ot=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ot&&U.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),de===!0&&X.beginShadows();let Z=b.state.shadowsArray;if(ce.render(Z,w,B),de===!0&&X.endShadows(),(Y&&P.hasRenderPass())===!1){let Ie=E.opaque,Me=E.transmissive;if(b.setupLights(),B.isArrayCamera){let Ce=B.cameras;if(Me.length>0)for(let Fe=0,$e=Ce.length;Fe<$e;Fe++){let ct=Ce[Fe];Eu(Ie,Me,w,ct)}ot&&U.render(w);for(let Fe=0,$e=Ce.length;Fe<$e;Fe++){let ct=Ce[Fe];Tu(E,w,ct,ct.viewport)}}else Me.length>0&&Eu(Ie,Me,w,B),ot&&U.render(w),Tu(E,w,B)}oe!==null&&W===0&&(We.updateMultisampleRenderTarget(oe),We.updateRenderTargetMipmap(oe)),Y&&P.end(R),w.isScene===!0&&w.onAfterRender(R,w,B),ve.resetDefaultState(),I=-1,G=null,M.pop(),M.length>0?(b=M[M.length-1],We.setTextureUnits(b.state.textureUnits),de===!0&&X.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,D!==null&&D.renderEnd()};function $c(w,B,J,Y){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){let Ie=B.isArrayCamera?le:ne;if(!w.frustumCulled||w.intersectsFrustum(Ie)){Y&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);let Me=ue.update(w),Ce=w.material;Ce.visible&&E.push(w,Me,Ce,J,Ue.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Ie=B.isArrayCamera?le:ne;if(!w.frustumCulled||w.intersectsFrustum(Ie)){let Me=ue.update(w),Ce=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ue.copy(Me.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){let Fe=Me.groups;for(let $e=0,ct=Fe.length;$e<ct;$e++){let Ne=Fe[$e],lt=Ce[Ne.materialIndex];lt&&lt.visible&&E.push(w,Me,lt,J,Ue.z,Ne,B)}}else Ce.visible&&E.push(w,Me,Ce,J,Ue.z,null,B)}}}let be=w.children;for(let Ie=0,Me=be.length;Ie<Me;Ie++)$c(be[Ie],B,J,Y)}function Tu(w,B,J,Y){let{opaque:Z,transmissive:be,transparent:Ie}=w;b.setupLightsView(J),de===!0&&X.setGlobalState(R.clippingPlanes,J),Y&&xe.viewport(O.copy(Y)),Z.length>0&&zo(Z,B,J),be.length>0&&zo(be,B,J),Ie.length>0&&zo(Ie,B,J),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Eu(w,B,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let Ne=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Dt(1,1,{generateMipmaps:!0,type:Ne?Ht:Mn,minFilter:yn,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let be=b.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||O;be.setSize(Ie.z*R.transmissionResolutionScale,Ie.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(F),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),ot&&U.render(J);let $e=R.toneMapping;R.toneMapping=ti;let ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),de===!0&&X.setGlobalState(R.clippingPlanes,Y),zo(w,J,Y),We.updateMultisampleRenderTarget(be),We.updateRenderTargetMipmap(be),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let lt=0,Ft=B.length;lt<Ft;lt++){let Tt=B[lt],{object:Mt,geometry:Jt,material:De,group:sn}=Tt;if(De.side===ln&&Mt.layers.test(Y.layers)){let _t=De.side;De.side=Zt,De.needsUpdate=!0,wu(Mt,J,Y,Jt,De,sn),De.side=_t,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(We.updateMultisampleRenderTarget(be),We.updateRenderTargetMipmap(be))}R.setRenderTarget(Me,Ce,Fe),R.setClearColor(F,te),ct!==void 0&&(Y.viewport=ct),R.toneMapping=$e}function zo(w,B,J){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,be=w.length;Z<be;Z++){let Ie=w[Z],{object:Me,geometry:Ce,group:Fe}=Ie,$e=Ie.material;$e.allowOverride===!0&&Y!==null&&($e=Y),Me.layers.test(J.layers)&&wu(Me,B,J,Ce,$e,Fe)}}function wu(w,B,J,Y,Z,be){D!==null&&Z.isNodeMaterial&&D.setObject(w,Z),w.onBeforeRender(R,B,J,Y,Z,be),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(R,B,J,Y,w,be),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=Zt,Z.needsUpdate=!0,R.renderBufferDirect(J,B,Y,Z,w,be),Z.side=ei,Z.needsUpdate=!0,R.renderBufferDirect(J,B,Y,Z,w,be),Z.side=ln):R.renderBufferDirect(J,B,Y,Z,w,be),w.onAfterRender(R,B,J,Y,Z,be)}function Au(w){let B=0;for(let J of w)J.texture!==null&&B++;return B}function Ar(w,B,J){B.isScene!==!0&&(B=je);let Y=He.get(w),Z=b.state.lights,be=b.state.shadowsArray,Ie=Z.state.version,Me=re.getParameters(w,Z.state,be,B,J,b.state.lightProbeGridArray),Ce=re.getProgramCacheKey(Me),Fe=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=C.get(w.envMap||Y.environment,$e),Y.envMapRotation=Y.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",vt),Fe=new Map,Y.programs=Fe,Y.programVariants=new Map);let ct=Fe.get(Ce);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===Ie)return Cu(w,Me),ct}else Me.uniforms=re.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,Me),w.onBeforeCompile(Me,R),ct=re.acquireProgram(Me,Ce),Fe.set(Ce,ct),Y.uniforms=Me.uniforms;let Ne=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=X.uniform),Cu(w,Me),Y.needsLights=Rp(w),Y.lightsStateVersion=Ie,Y.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.sunLights.value=Z.state.sun,Ne.sunLightShadows.value=Z.state.sunShadow,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ne.sunShadowCascade.value=Z.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Au(b.state.lightProbeGridArray),Y.currentProgram=ct,Y.uniformsList=null,ct}function Ep(w,B,J,Y,Z){let be=He.get(w),Ie=be.currentProgram.id+","+Y+","+Z,Me=be.programVariants.get(Ie);return Me===void 0?(Me=Ar(w,B,J),be.programVariants.set(Ie,Me)):(be.currentProgram=Me,be.uniformsList=null,be.outputColorSpace=Y,be.toneMapping=Z),Me}function Ru(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=mr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Cu(w,B){let J=He.get(w);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function wp(w,B,J,Y,Z){B.isScene!==!0&&(B=je),We.resetTextureUnits();let be=B.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Me=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tt.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Fe=C.get(Y.envMap||Ie,Ce),$e=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ct=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Ft=!!J.morphAttributes.color,Tt=ti;Y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Tt=R.toneMapping);let Mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=Mt!==void 0?Mt.length:0,De=He.get(Y),sn=b.state.lights;if(de===!0&&(Re===!0||w!==G)){let Rt=w===G&&Y.id===I;X.setState(Y,w,Rt)}let _t=!1,Zi=!1;Y.version===De.__version?De.needsLights&&De.lightsStateVersion!==sn.state.version||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==Fe||Y.fog===!0&&De.fog!==be||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==X.numPlanes||De.numIntersection!==X.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==ct||De.morphTargets!==Ne||De.morphNormals!==lt||De.morphColors!==Ft||De.morphTargetsCount!==Jt||De.numLightProbeGrids!==Au(b.state.lightProbeGridArray)?_t=!0:(De.outputColorSpace!==Me||De.toneMapping!==Tt)&&(Zi=!0):(_t=!0,De.__version=Y.version);let $t=De.currentProgram;(_t===!0||Zi===!0)&&($t=Zi===!0?Ep(Y,B,Z,Me,Tt):Ar(Y,B,Z),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,$t,De));let Ho=!1,Ai=!1,Ji=!1,dt=$t.getUniforms(),Yt=De.uniforms;if(xe.useProgram($t.program)&&(Ho=!0,Ai=!0,Ji=!0),Y.id!==I&&(I=Y.id,Ai=!0),Ho||G!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(H,"projectionMatrix",w.projectionMatrix),dt.setValue(H,"viewMatrix",w.matrixWorldInverse);let Wt=dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(H,qe.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&dt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,Ai=!0,Ji=!0)}if(De.needsLights&&(sn.state.sunShadowMap.length>0&&dt.setValue(H,"sunShadowMap",sn.state.sunShadowMap,We),sn.state.directionalShadowMap.length>0&&dt.setValue(H,"directionalShadowMap",sn.state.directionalShadowMap,We),sn.state.spotShadowMap.length>0&&dt.setValue(H,"spotShadowMap",sn.state.spotShadowMap,We),sn.state.pointShadowMap.length>0&&dt.setValue(H,"pointShadowMap",sn.state.pointShadowMap,We)),Z.isSkinnedMesh){dt.setOptional(H,Z,"bindMatrix"),dt.setOptional(H,Z,"bindMatrixInverse");let Rt=Z.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(H,"boneTexture",Rt.boneTexture,We))}Z.isBatchedMesh&&(dt.setOptional(H,Z,"batchingTexture"),dt.setValue(H,"batchingTexture",Z._matricesTexture,We),dt.setOptional(H,Z,"batchingIdTexture"),dt.setValue(H,"batchingIdTexture",Z._indirectTexture,We),dt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&dt.setValue(H,"batchingColorTexture",Z._colorsTexture,We));let zn=J.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Q.update(Z,J,$t),(Ai||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,dt.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Yt.envMapIntensity.value=B.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Vv()),Ai){if(dt.setValue(H,"toneMappingExposure",R.toneMappingExposure),De.needsLights&&Ap(Yt,Ji),be&&Y.fog===!0&&me.refreshFogUniforms(Yt,be),me.refreshMaterialUniforms(Yt,Y,ie,he,b.state.transmissionRenderTarget[w.id]),De.needsLights&&De.numLightProbeGrids>0){let Rt=y,Wt=0;for(let ri of b.state.lightProbeGridArray)ri.texture!==null&&(Rt.textures[Wt]=ri.texture,Rt.min[Wt]=ri.boundingBox.min,Rt.max[Wt]=ri.boundingBox.max,Rt.resolution[Wt]=ri.resolution,Wt++);for(let ri in Rt)Rt[ri].length=Wt;Yt.probesSH.value=Rt.textures,Yt.probesMin.value=Rt.min,Yt.probesMax.value=Rt.max,Yt.probesResolution.value=Rt.resolution}mr.upload(H,Ru(De),Yt,We)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(mr.upload(H,Ru(De),Yt,We),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dt.setValue(H,"center",Z.center),dt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),dt.setValue(H,"normalMatrix",Z.normalMatrix),dt.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Rt=Y.uniformsGroups;for(let Wt=0,ri=Rt.length;Wt<ri;Wt++){let Iu=Rt[Wt];ke.update(Iu,$t),ke.bind(Iu,$t)}}return $t}function Ap(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Rp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(w,B,J){let Y=He.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),He.get(w.texture).__webglTexture=B,He.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let J=He.get(w);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,J=0){oe=w,$=B,W=J;let Y=null,Z=!1,be=!1;if(w){let Me=He.get(w);if(Me.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,Me.__webglFramebuffer),O.copy(w.viewport),z.copy(w.scissor),se=w.scissorTest,xe.viewport(O),xe.scissor(z),xe.setScissorTest(se),I=-1;return}else if(Me.__webglFramebuffer===void 0)We.setupRenderTarget(w);else if(Me.__hasExternalTextures)We.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let $e=w.depthTexture;if(Me.__boundDepthTexture!==$e){if($e!==null&&He.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(w)}}let Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);let Fe=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?Y=Fe[B][J]:Y=Fe[B],Z=!0):w.samples>0&&We.useMultisampledRTT(w)===!1?Y=He.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[J]:Y=Fe,O.copy(w.viewport),z.copy(w.scissor),se=w.scissorTest}else O.copy(Le).multiplyScalar(ie).floor(),z.copy(Se).multiplyScalar(ie).floor(),se=Pe;if(J!==0&&(Y=V),xe.bindFramebuffer(H.FRAMEBUFFER,Y)&&xe.drawBuffers(w,Y),xe.viewport(O),xe.scissor(z),xe.setScissorTest(se),Z){let Me=He.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,J)}else if(be){let Me=B;for(let Ce=0;Ce<w.textures.length;Ce++){let Fe=He.get(w.textures[Ce]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ce,Fe.__webglTexture,J,Me)}}else if(w!==null&&J!==0){let Me=He.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Me.__webglTexture,J)}I=-1};function Pu(w){let B=He.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=ht.textureFormatReadable(w.format),B.__typeReadable=ht.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,J,Y,Z,be,Ie,Me=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){xe.bindFramebuffer(H.FRAMEBUFFER,Ce);try{let Fe=w.textures[Me],$e=Fe.format,ct=Fe.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Me);let Ne=Pu(Fe);if(Ne.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Y&&J>=0&&J<=w.height-Z&&H.readPixels(B,J,Y,Z,pe.convert($e),pe.convert(ct),be)}finally{let Fe=oe!==null?He.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,B,J,Y,Z,be,Ie,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(B>=0&&B<=w.width-Y&&J>=0&&J<=w.height-Z){xe.bindFramebuffer(H.FRAMEBUFFER,Ce);let Fe=w.textures[Me],$e=Fe.format,ct=Fe.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Me);let Ne=Pu(Fe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,lt),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(B,J,Y,Z,pe.convert($e),pe.convert(ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ft=oe!==null?He.get(oe).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Ft);let Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await of(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,lt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(lt),H.deleteSync(Tt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,J=0){let Y=Math.pow(2,-J),Z=Math.floor(w.image.width*Y),be=Math.floor(w.image.height*Y),Ie=B!==null?B.x:0,Me=B!==null?B.y:0;We.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Ie,Me,Z,be),xe.unbindTexture()},this.copyTextureToTexture=function(w,B,J=null,Y=null,Z=0,be=0){let Ie,Me,Ce,Fe,$e,ct,Ne,lt,Ft,Tt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(J!==null)Ie=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,$e=J.min.y,ct=J.isBox3?J.min.z:0;else{let dt=Math.pow(2,-Z);Ie=Math.floor(Tt.width*dt),Me=Math.floor(Tt.height*dt),w.isDataArrayTexture?Ce=Tt.depth:w.isData3DTexture?Ce=Math.floor(Tt.depth*dt):Ce=1,Fe=0,$e=0,ct=0}Y!==null?(Ne=Y.x,lt=Y.y,Ft=Y.z):(Ne=0,lt=0,Ft=0);let Mt=pe.convert(B.format),Jt=pe.convert(B.type),De;B.isData3DTexture?(We.setTexture3D(B,0),De=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(We.setTexture2DArray(B,0),De=H.TEXTURE_2D_ARRAY):(We.setTexture2D(B,0),De=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let sn=xe.getParameter(H.UNPACK_ROW_LENGTH),_t=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Zi=xe.getParameter(H.UNPACK_SKIP_PIXELS),$t=xe.getParameter(H.UNPACK_SKIP_ROWS),Ho=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,Tt.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),xe.pixelStorei(H.UNPACK_SKIP_ROWS,$e),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,ct);let Ai=w.isDataArrayTexture||w.isData3DTexture,Ji=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let dt=He.get(w),Yt=He.get(B),zn=He.get(dt.__renderTarget),Rt=He.get(Yt.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,zn.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Wt=0;Wt<Ce;Wt++)Ai&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(w).__webglTexture,Z,ct+Wt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(B).__webglTexture,be,Ft+Wt)),H.blitFramebuffer(Fe,$e,Fe+Ie,$e+Me,Ne,lt,Ne+Ie,lt+Me,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||He.has(w)){let dt=He.get(w),Yt=He.get(B);xe.bindFramebuffer(H.READ_FRAMEBUFFER,N),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let zn=0;zn<Ce;zn++)Ai?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dt.__webglTexture,Z,ct+zn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dt.__webglTexture,Z),Ji?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.__webglTexture,be,Ft+zn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yt.__webglTexture,be),Z!==0?H.blitFramebuffer(Fe,$e,Fe+Ie,$e+Me,Ne,lt,Ne+Ie,lt+Me,H.COLOR_BUFFER_BIT,H.NEAREST):Ji?H.copyTexSubImage3D(De,be,Ne,lt,Ft+zn,Fe,$e,Ie,Me):H.copyTexSubImage2D(De,be,Ne,lt,Fe,$e,Ie,Me);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ji?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(De,be,Ne,lt,Ft,Ie,Me,Ce,Mt,Jt,Tt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(De,be,Ne,lt,Ft,Ie,Me,Ce,Mt,Tt.data):H.texSubImage3D(De,be,Ne,lt,Ft,Ie,Me,Ce,Mt,Jt,Tt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,Ne,lt,Ie,Me,Mt,Jt,Tt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,Ne,lt,Tt.width,Tt.height,Mt,Tt.data):H.texSubImage2D(H.TEXTURE_2D,be,Ne,lt,Ie,Me,Mt,Jt,Tt);xe.pixelStorei(H.UNPACK_ROW_LENGTH,sn),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Zi),xe.pixelStorei(H.UNPACK_SKIP_ROWS,$t),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,Ho),be===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&We.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?We.setTextureCube(w,0):w.isData3DTexture?We.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?We.setTexture2DArray(w,0):We.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){$=0,W=0,oe=null,xe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function Ih(i,e){if(e===eh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pr||e===Po){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===pr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Yf(i){let e=new Map,t=new Map,n=i.clone();return Kf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Kf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Kf(i.children[n],e.children[n],t)}var Fc=class extends Qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oc(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oc(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new jh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=yi.extractUrlBase(e);o=yi.resolveURL(l,this.path)}else o=yi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new or(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qf){try{o[rt.KHR_BINARY_GLTF]=new Qh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ou(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new Fh;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new eu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new tu;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new nu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Wv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function It(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mo(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new po(h),l.distance=u;break;case"spot":l=new fo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Fh=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}},Oh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ct)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],on),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ct)),Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?cn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Jh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},$h=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Oc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},jh=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==On.TRIANGLES&&l.mode!==On.TRIANGLE_STRIP&&l.mode!==On.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let _=new Ge,p=new A,g=new Et,v=new A(1,1,1),S=new _n(m.geometry,m.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,E),c.SCALE&&v.fromBufferAttribute(c.SCALE,E),S.setMatrixAt(E,_.compose(p,g,v));let y=null;for(let E in c)if(E==="_COLOR_0"){let b=c[E];S.instanceColor=new xn(b.array,b.itemSize,b.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let x=S.geometry;y=new At,y.name=x.name;for(let M in x.attributes)y.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)y.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)y.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),S.geometry=y}let b=c[E];y.setAttribute(E,new xn(b.array,b.itemSize,b.normalized))}wt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qf="glTF",Uo=12,Zf={JSON:1313821514,BIN:5130562},Qh=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Zf.JSON){let l=new Uint8Array(e,Uo+o,a);this.content=n.decode(l)}else if(c===Zf.BIN){let l=Uo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},eu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=su[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=su[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=_r[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let _=f.attributes[m],p=c[m];p!==void 0&&(_.normalized=p)}u(f)},a,l,on,d)})})}},tu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},nu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Bc=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,_=m-l,p=-2*f+3*d,g=f-d,v=1-p,S=g-d+u;for(let y=0;y!==a;y++){let E=o[_+y+a],b=o[_+y+c]*h,x=o[m+y+a],M=o[m+y]*h;r[y]=v*E+S*b+p*x+g*M}return r}},Xv=new Et,iu=class extends Bc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Xv.fromArray(r).normalize().toArray(r),r}},On={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jf={9728:Nt,9729:zt,9984:Xa,9985:dr,9986:bs,9987:yn},$f={33071:fn,33648:Ws,10497:Nn},Lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qv={CUBICSPLINE:void 0,LINEAR:ss,STEP:is},Nh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),i.DefaultMaterial}function ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Zv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dh(t.attributes):e=i.indices+":"+Dh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Dh(i.targets[n]);return e}function Dh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ru(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jv=new Ge,ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new gs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new xo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ws(r,a,s),si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(yi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Lh[s.type],a=_r[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Kt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Lh[s.type],l=_r[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,p;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(v);S||(_=new l(a,g*f,s.count*f/h),S=new Zs(_,f/h),t.cache.add(v,S)),p=new Js(S,c,d%f/h,m)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Kt(_,c,m);if(s.sparse!==void 0){let g=Lh.SCALAR,v=_r[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new v(o[1],S,s.sparse.count*g),b=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new Kt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,M=E.length;x<M;x++){let P=E[x];if(p.setX(P,b[x*c]),c>=2&&p.setY(P,b[x*c+1]),c>=3&&p.setZ(P,b[x*c+2]),c>=4&&p.setW(P,b[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Jf[d.magFilter]||zt,h.minFilter=Jf[d.minFilter]||yn,h.wrapS=$f[d.wrapS]||Nn,h.wrapT=$f[d.wrapT]||Nn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=function(p){let g=new qt(p);g.needsUpdate=!0,f(g)}),t.load(yi.resolveURL(d,r.path),_,void 0,m)})})}let u=h.then(function(d){return l===!0&&a.revokeObjectURL(c),si(d,o),d.userData.mimeType=o.mimeType||$v(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Qs,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new js,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){let u=s[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);let h=r.alphaMode||Nh.OPAQUE;if(h===Nh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Nh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==en&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&ws(s,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return jf(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Jv(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=jf(new At,l,t),l.mode===On.TRIANGLE_STRIP?d=d.then(f=>Ih(f,Po)):l.mode===On.TRIANGLE_FAN&&(d=d.then(f=>Ih(f,pr))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Yv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let _=h[f],p=o[f],g,v=l[f];if(p.mode===On.TRIANGLES||p.mode===On.TRIANGLE_STRIP||p.mode===On.TRIANGLE_FAN||p.mode===void 0){let S=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&y?new cs(_,v):new Oe(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===On.LINES)g=new Zr(_,v);else if(p.mode===On.LINE_STRIP)g=new hs(_,v);else if(p.mode===On.LINE_LOOP)g=new Jr(_,v);else if(p.mode===On.POINTS)g=new $r(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Zv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),si(g,r),p.extensions&&ws(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ws(s,u[0],r),u[0];let d=new pt;r.extensions&&ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(tn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Un(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ls(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],_=f.target,p=_.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let S=0,y=d.length;S<y;S++){let E=d[S],b=f[S],x=m[S],M=_[S],P=p[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let R=n._createAnimationTracks(E,b,x,M,P);if(R)for(let L=0;L<R.length;L++)g.push(R[L])}let v=new ho(r,void 0,g);return si(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new A().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Fi:l.length>1?h=new pt:l.length===1?h=l[0]:h=new wt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),si(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new pt;n.name&&(r.name=s.createUniqueName(n.name)),si(r,n),n.extensions&&ws(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Yf(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof gn||d instanceof qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Gi[r.path]===Gi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Gi[r.path]){case Gi.weights:h=xi;break;case Gi.rotation:h=_i;break;case Gi.translation:case Gi.scale:h=Bi;break;default:n.itemSize===1?h=xi:h=Bi;break}let u=s.interpolation!==void 0?qv[s.interpolation]:ss,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let _=new h(c[f]+"."+Gi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ru(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?iu:Bc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qv(i,e,t){let n=e.attributes,s=new wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){let h=ru(_r[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=ru(_r[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function jf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=su[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return tt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),si(i,e),Qv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Kv(i,e.targets,t):i})}var zc=new Ge,au=new Ge,cu=new A,Hc=new A,Bn=new A,lu=[new A,new A,new A,new A],hu=[new A,new A,new A,new A],vr=[new A,new A,new A,new A,new A,new A,new A,new A],Ei=2,ey=.1,kc=class extends Hi{constructor(){super(new Un(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=new Array(Ei+1).fill(0),this._cascadeData=[],this._viewportCount=Ei,this._frameExtents.set(2,1);for(let e=0;e<Ei;e++)this._cameras.push(new Un),this._matrices.push(new Ge),this._frustums.push(new Jn),this._cascadeData.push(new gt);for(;this._viewports.length<Ei;)this._viewports.push(new gt)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),s=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let p=0;p<Ei;p++)this._viewports[p].set(p+n,s,1-2*n,1-2*s);let r=this.mapSize.x*(1-2*n),o=this.mapSize.y*(1-2*s),a=Math.min(r,o),c=this.camera,l=t.near,h=Math.max(l+1e-6,Math.min(c.far,t.far)),u=this._cascadeSplits;u[0]=l;for(let p=1;p<Ei;p++){let g=p/Ei,v=l+(h-l)*g,S=l>0?l*Math.pow(h/l,g):v;u[p]=(v+S)*.5}u[Ei]=h,cu.setFromMatrixPosition(e.matrixWorld).negate().normalize(),Hc.set(0,1,0),Math.abs(Hc.dot(cu))>.99&&Hc.set(0,0,1),zc.lookAt(Bn.set(0,0,0),cu,Hc),au.copy(zc).transpose().multiply(t.matrixWorld);let d=t.reversedDepth?1:t.coordinateSystem===Ui?0:-1,f=t.projectionMatrixInverse,m=-1/0;for(let p=0;p<4;p++){let g=p===0||p===1?1:-1,v=p===0||p===3?1:-1,S=lu[p].set(g,v,d).applyMatrix4(f),y=hu[p];t.isPerspectiveCamera===!0?y.copy(S).multiplyScalar(h/l):y.set(S.x,S.y,-h),S.applyMatrix4(au),y.applyMatrix4(au),m=Math.max(m,S.z,y.z)}m+=h;let _=c.near;for(let p=0;p<Ei;p++){let g=p===0?u[0]:this._cascadeData[p-1].z,v=u[p+1],S=v-ey*(v-u[p]);this._cascadeData[p].set(p===0?-1e10:g,v,S,0);let y=(g-l)/(h-l),E=(v-l)/(h-l);Bn.set(0,0,0);for(let R=0;R<4;R++)vr[R*2].lerpVectors(lu[R],hu[R],y),vr[R*2+1].lerpVectors(lu[R],hu[R],E),Bn.add(vr[R*2]).add(vr[R*2+1]);Bn.multiplyScalar(1/8);let b=0,x=1/0;for(let R=0;R<8;R++)b=Math.max(b,vr[R].distanceToSquared(Bn)),x=Math.min(x,vr[R].z);let M=Math.sqrt(b);if(a>1){M/=1-1/a;let R=2*M/r,L=2*M/o;Bn.x=Math.round(Bn.x/R)*R,Bn.y=Math.round(Bn.y/L)*L}Bn.z=m+_,Bn.applyMatrix4(zc);let P=this._cameras[p];P.position.copy(Bn),P.quaternion.setFromRotationMatrix(zc),P.left=-M,P.right=M,P.top=M,P.bottom=-M,P.near=_,P.far=m-x+2*_,P.coordinateSystem=c.coordinateSystem,P._reversedDepth=c.reversedDepth,P.updateProjectionMatrix(),P.updateMatrixWorld(),this._updateMatrix(P,this._matrices[p],this._frustums[p],this._viewports[p])}}};var Gc=class extends zi{constructor(e,t){super(e,t),this.isSunLight=!0,this.type="SunLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.shadow=new kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}};var Sn={width:1024,height:573,pos:new A(0,362,20),pitch:1.5*Math.PI/180,hfov:64},fu=Math.tan(Sn.hfov/2*Math.PI/180),ty=Sn.width/Sn.height;function Vc(i,e,t){let n=(i-Sn.width/2)/(Sn.width/2),s=(Sn.height/2-e)/(Sn.height/2),r=new A(n*fu,s*fu/ty,-1);return r.applyAxisAngle(new A(1,0,0),Sn.pitch),r.multiplyScalar(t/-r.z),Sn.pos.clone().add(r)}var Fo=(i,e)=>i/(Sn.width/2)*fu*e,yr=new A(.66,.53,.53).normalize(),Mr=new Te(1,.8,.58),bn=300,ft=300,As=Vc(525,268,2300),uu=Vc(368,236,1500),du=Vc(742,208,820),Je={ring:{center:As,radius:Fo(65,2300),tube:Fo(13,2300)},mega:{x:As.x+4,z:As.z-170,width:Fo(120,2450),height:1650},leftTower:{x:uu.x,z:uu.z,discY:uu.y,discR:Fo(67,1500)},rightTower:{x:du.x,z:du.z,discY:du.y,discR:Fo(150,820)},aircraft:Vc(175,100,300),avenue:{x0:-8,z0:-760,x1:As.x,z1:As.z+40,width:70}},un={width:26,walkHalf:11.5,trackHalf:4.2,points:[new A(40,ft,-40),new A(0,0,0),new A(0,0,0),new A(0,0,0)]};{let i=Je.rightTower;un.points[1].set(i.x-78,ft,i.z+30),un.points[2].set(i.x-105,ft-4,i.z-900),un.points[3].set(As.x+160,ft-10,As.z+250)}var pb=(()=>{let i=Je.rightTower;return{deck:un.points[1].clone(),pad:new A(i.x-40,ft,i.z+30),elevator:new A(i.x-34,ft,i.z+30)}})(),Vi={center:new A(0,bn,70),radius:120};var Sr=i=>i.toFixed(5),ny=`
	const vec3 SUN_DIR = vec3( ${Sr(yr.x)}, ${Sr(yr.y)}, ${Sr(yr.z)} );
	const vec3 SUN_COLOR = vec3( ${Sr(Mr.r)}, ${Sr(Mr.g)}, ${Sr(Mr.b)} );
	const vec3 HAZE = vec3( 0.56, 0.66, 0.80 );
	const vec3 HAZE_SUN = vec3( 1.0, 0.80, 0.56 );
	const vec3 EXTINCT = vec3( 0.80, 0.95, 1.20 );
	const float ATM_DENSITY = 0.00019;
	const float ATM_SCALE_H = 650.0;

	vec3 atmosOptical( vec3 wp ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float k = rd.y / ATM_SCALE_H;
		float integ = abs( k * dist ) < 1e-4 ? dist : ( 1.0 - exp( - k * dist ) ) / k;
		float depth = ATM_DENSITY * exp( - max( ro.y, 0.0 ) / ATM_SCALE_H ) * max( integ, 0.0 );
		return depth * EXTINCT;
	}

	vec3 atmosInscatter( vec3 rd ) {
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		return mix( HAZE, HAZE_SUN, pow( s, 6.0 ) * 0.6 );
	}

	vec3 atmos( vec3 col, vec3 wp ) {
		vec3 T = exp( - atmosOptical( wp ) );
		vec3 rd = normalize( wp - cameraPosition );
		return col * T + atmosInscatter( rd ) * ( 1.0 - T );
	}

	vec3 atmosT( vec3 wp ) {
		return exp( - atmosOptical( wp ) );
	}
`;Ze.fog_pars_vertex=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;Ze.fog_vertex=`
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;Ze.fog_pars_fragment=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
		${ny}
	#endif
`;Ze.fog_fragment=`
	#ifdef USE_FOG
		gl_FragColor.rgb = atmos( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;function iy(){if(location.hostname==="htmlpreview.github.io"){let i=decodeURIComponent(location.search).match(/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/);if(i)return`https://raw.githubusercontent.com/${i[1]}/${i[2]}/${i[3]}/${i[4]}`}return"./"}var sy=iy(),pu=i=>sy+"assets/"+i;function ep(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let h=Math.imul(e^e>>>15,1|e);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296},n=Array.from({length:256},(h,u)=>u);for(let h=255;h>0;h--){let u=Math.floor(t()*(h+1));[n[h],n[u]]=[n[u],n[h]]}let s=new Uint8Array(512);for(let h=0;h<512;h++)s[h]=n[h&255];let r=h=>h*h*h*(h*(h*6-15)+10),o=(h,u,d)=>h+(u-h)*d,a=(h,u,d,f)=>{h&=15;let m=h<8?u:d,_=h<4?d:h===12||h===14?u:f;return(h&1?-m:m)+(h&2?-_:_)};function c(h,u,d){let f=Math.floor(h),m=Math.floor(u),_=Math.floor(d),p=f&255,g=m&255,v=_&255;h-=f,u-=m,d-=_;let S=r(h),y=r(u),E=r(d),b=s[p]+g,x=s[b]+v,M=s[b+1]+v,P=s[p+1]+g,R=s[P]+v,L=s[P+1]+v;return o(o(o(a(s[x],h,u,d),a(s[R],h-1,u,d),S),o(a(s[M],h,u-1,d),a(s[L],h-1,u-1,d),S),y),o(o(a(s[x+1],h,u,d-1),a(s[R+1],h-1,u,d-1),S),o(a(s[M+1],h,u-1,d-1),a(s[L+1],h-1,u-1,d-1),S),y),E)}function l(h,u,d,f=4){let m=.5,_=1,p=0;for(let g=0;g<f;g++)p+=m*c(h*_,u*_,d*_),_*=2.03,m*=.5;return p}return{noise3:c,fbm:l,rnd:t}}var Wc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};var tp=-8;function np(i,e){i.colorSpace=Ct,i.wrapS=Nn,i.minFilter=yn,i.anisotropy=4;let t=new Lt({name:"SkyPhoto",side:Zt,depthWrite:!1,depthTest:!1,uniforms:{uSky:{value:i},uRot:e.uSkyRot,uGain:e.uSkyGain},vertexShader:`
			varying vec3 vDir;
			void main() {
				vDir = position;
				vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				gl_Position = p.xyww;
			}
		`,fragmentShader:`
			uniform sampler2D uSky;
			uniform float uRot;
			uniform float uGain;
			varying vec3 vDir;
			void main() {
				vec3 d = normalize( vDir );
				float u = atan( d.z, d.x ) * 0.15915494 + 0.5 + uRot;
				float e = degrees( asin( clamp( d.y, - 1.0, 1.0 ) ) );
				float v = clamp( ( e - ( ${tp.toFixed(1)} ) ) / ( 90.0 - ( ${tp.toFixed(1)} ) ), 0.002, 0.999 );
				// \u5929\u9876\u9644\u8FD1\u7ECF\u7EBF\u6C47\u805A\uFF0C\u7528\u68AF\u5EA6\u63A7\u5236 mip \u7EA7\u522B\uFF0C\u907F\u514D\u63A5\u7F1D\u5904\u51FA\u73B0\u4E00\u6761\u7EBF
				vec2 uv = vec2( u, v );
				vec3 c = textureGrad( uSky, uv, dFdx( vec2( fract( u + 0.5 ), v ) ), dFdy( vec2( fract( u + 0.5 ), v ) ) ).rgb;
				// \u8F93\u51FA\u524D\u4F1A\u505A Neutral \u8272\u8C03\u6620\u5C04\uFF0C\u5B83\u4F1A\u5148\u628A\u4E09\u4E2A\u901A\u9053\u90FD\u51CF\u6389\u7EA6 0.04\uFF0C\u8FD9\u91CC\u63D0\u524D\u8865\u4E0A
				c = c * uGain + 0.04;
				gl_FragColor = vec4( c, 1.0 );
			}
		`}),n=new Oe(new mi(1,64,32),t);return n.frustumCulled=!1,n.renderOrder=-100,n.scale.setScalar(1e3),n}var dn=`
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
`;var Wi={x:-44,z:-40,r:26,h:64},Xi={x:un.points[0].x,z:un.points[0].z+8,r:22};function ip(i){let e=Vi.center,t=c=>128-24*Math.exp(-Math.pow((c+Math.PI/2)/.3,2))+7*i.fbm(Math.cos(c)*1.4+3,Math.sin(c)*1.4,.5,3)*2,n=(c,l)=>bn+1.2*i.fbm(c*.012,.3,l*.012,3)*2+.25*i.noise3(c*.08,1.7,l*.08);function s(c,l){let h=c-e.x,u=l-e.z,d=Math.hypot(h,u),f=Math.atan2(u,h),_=t(f)-d,p;if(_>=0)p=n(c,l)+Math.max(0,6-_)*.25*i.noise3(c*.1,5.1,l*.1);else{let x=70+40*(i.noise3(f*3,9.1,.3)*.5+.5),M=Math.max(0,1+_/x),P=Math.pow(M,.32),R=Math.sin(M*9+i.noise3(f*4,1.3,0)*2)*.035*M*(1-M);P=Math.min(1,Math.max(0,P+R)),p=-4+(n(c,l)+4)*P,p+=(i.fbm(c*.05,l*.05,4.4,3)*10+i.noise3(c*.2,l*.2,1.1)*2)*M*(1-M)*4}let g=Math.hypot(c-Wi.x,l-Wi.z),v=i.fbm(c*.06,l*.06,7.7,3),S=Wc(Wi.r+6*v,6,g),y=1-Math.abs(i.noise3(c*.09,l*.09,2.2));p+=Wi.h*Math.pow(S,.7)*(.8+.25*v)+S*(1-S)*4*(y*9+i.noise3(c*.35,l*.35,8.8)*2.5);let E=Math.hypot(c-Xi.x,l-Xi.z),b=Wc(Xi.r+6,Xi.r,E);return p=p*(1-b)+bn*b,p}function r(c,l){let h=c-e.x,u=l-e.z,d=t(Math.atan2(u,h))-Math.hypot(h,u),f=Math.hypot(c-Xi.x,l-Xi.z);return d>2.5||f<Xi.r-1}let o=(c,l)=>Wc(Wi.r+6,10,Math.hypot(c-Wi.x,l-Wi.z));return{height:s,walkable:(c,l)=>r(c,l)&&o(c,l)<.08,edgeR:t,KNOLL:Wi,PAD:Xi}}function sp(i,e,t){let n=i.KNOLL,s=new Dn(1,6),r=s.attributes.position,o=new A;for(let c=0;c<r.count;c++){o.fromBufferAttribute(r,c);let l=1-Math.abs(e.noise3(o.x*2.2,o.y*1.1,o.z*2.2)),h=1+e.fbm(o.x*1.6,o.y*1.6,o.z*1.6,4)*.45+l*.18+e.noise3(o.x*6,o.y*6,o.z*6)*.05;o.multiplyScalar(h);let u=1-Math.max(0,o.y)*.28;r.setXYZ(c,o.x*n.r*1.05*u,o.y*42,o.z*n.r*.9*u)}s.computeVertexNormals();let a=new Oe(s,t);return a.position.set(n.x-3,bn+18,n.z-2),a.rotation.y=.6,a.castShadow=!0,a.receiveShadow=!0,a}function rp(i,e,t){let s=t.hillRes,r=new Wn(560,560,s,s);r.rotateX(-Math.PI/2),r.translate(Vi.center.x,0,Vi.center.z-10);let o=r.attributes.position;for(let h=0;h<o.count;h++)o.setY(h,i.height(o.getX(h),o.getZ(h)));r.computeVertexNormals();let a=new Ke({color:16777215,roughness:.9,metalness:0}),c={tRockD:{value:e.rockD},tRockN:{value:e.rockN},tRockA:{value:e.rockA},tGrassD:{value:e.grassD},tGrassN:{value:e.grassN}};a.onBeforeCompile=h=>{Object.assign(h.uniforms,c),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vWN = normalize( mat3( modelMatrix ) * objectNormal );`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
				varying vec3 vWN;
				uniform sampler2D tRockD, tRockN, tRockA, tGrassD, tGrassN;
				${dn}
				vec3 triW( vec3 n ) { vec3 w = pow( abs( n ), vec3( 4.0 ) ); return w / ( w.x + w.y + w.z ); }
				vec4 tri( sampler2D t, vec3 p, vec3 w, float s ) {
					return texture2D( t, p.zy * s ) * w.x + texture2D( t, p.xz * s ) * w.y + texture2D( t, p.xy * s ) * w.z;
				}
				// \u4E09\u5411\u6295\u5F71\u7684\u6CD5\u7EBF\u8D34\u56FE\uFF08whiteout \u6DF7\u5408\uFF09
				vec3 triN( sampler2D t, vec3 p, vec3 n, vec3 w, float s ) {
					vec3 tx = texture2D( t, p.zy * s ).xyz * 2.0 - 1.0;
					vec3 ty = texture2D( t, p.xz * s ).xyz * 2.0 - 1.0;
					vec3 tz = texture2D( t, p.xy * s ).xyz * 2.0 - 1.0;
					tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
					ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
					tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
					return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
				}
			`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec3 hP = vFogWorldPos;
				vec3 hN = normalize( vWN );
				vec3 hW = triW( hN );
				float hDist = length( hP - cameraPosition );
				float sc = 0.16;
				vec3 rock = tri( tRockD, hP, hW, sc ).rgb;
				vec3 rockFar = tri( tRockD, hP, hW, sc * 0.17 ).rgb;
				rock = mix( rock, rock * ( 0.6 + 0.8 * rockFar ), 0.6 );
				vec2 gUv = hP.xz * 0.16;
				vec3 grass = texture2D( tGrassD, gUv ).rgb * ( 0.75 + 0.5 * texture2D( tGrassD, gUv * 0.13 ).g );
				grass *= vec3( 0.92, 1.0, 0.82 );
				float n1 = fbm( hP.xz * 0.05 );
				float flat_ = smoothstep( 0.62, 0.86, hN.y + ( n1 - 0.5 ) * 0.25 );
				float isTop = smoothstep( ${(bn-6).toFixed(1)}, ${(bn-1).toFixed(1)}, hP.y ) * ( 1.0 - smoothstep( ${(bn+4).toFixed(1)}, ${(bn+8).toFixed(1)}, hP.y ) );
				// \u5D16\u9762\u4E0A\u7684\u82D4\u85D3\uFF1A\u671D\u4E0A\u7684\u9762\u591A\u3001\u4F4E\u5904\u5C11
				float moss = smoothstep( 0.45, 0.85, hN.y + ( n1 - 0.5 ) * 0.7 ) * 0.8;
				vec3 mossC = vec3( 0.10, 0.16, 0.05 ) * ( 0.7 + 0.6 * vnoise( hP.xz * 0.4 + hP.y * 0.3 ) );
				vec3 cliff = mix( rock * rock * vec3( 1.5, 1.42, 1.3 ), mossC, moss );
				float g = max( flat_ * isTop, flat_ * 0.6 * smoothstep( 40.0, 120.0, hP.y ) * ( 1.0 - smoothstep( ${(bn+4).toFixed(1)}, ${(bn+8).toFixed(1)}, hP.y ) ) );
				diffuseColor.rgb = mix( cliff, grass, g );
				float hRough = mix( 0.85, 0.95, g );
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = hRough;").replace("#include <normal_fragment_maps>",`
				{
					vec3 wn = triN( tRockN, hP, hN, hW, sc );
					vec3 gn = texture2D( tGrassN, gUv ).xyz * 2.0 - 1.0;
					vec3 wg = normalize( vec3( gn.x, gn.z * 2.0, gn.y ) );
					wn = normalize( mix( wn, wg, g ) );
					wn = normalize( mix( wn, hN, smoothstep( 80.0, 600.0, hDist ) ) );
					normal = normalize( ( viewMatrix * vec4( wn, 0.0 ) ).xyz );
				}
			`)},a.customProgramCacheKey=()=>"hill";let l=new Oe(r,a);return l.castShadow=!0,l.receiveShadow=!0,l.userData.material=a,l}var ry=`
	// \u9AD8\u67B6\u4EE5\u4E1C\uFF08\u753B\u9762\u53F3\u4FA7\uFF09\u662F\u68EE\u6797
	float forestMask( vec2 p ) {
		float edge = 150.0 + 0.10 * ( - p.y );
		float f = smoothstep( edge, edge + 120.0, p.x ) * smoothstep( - 250.0, - 600.0, p.y );
		f *= 1.0 - smoothstep( 2600.0, 3400.0, p.x - 0.18 * ( - p.y ) );
		return f;
	}
	float seaMask( vec2 p ) {
		return smoothstep( 0.0, 250.0, p.x - ( 4200.0 + 0.3 * ( - p.y ) ) );
	}
	float avenueMask( vec2 p ) {
		vec2 a = vec2( ${Je.avenue.x0.toFixed(1)}, ${Je.avenue.z0.toFixed(1)} );
		vec2 b = vec2( ${Je.avenue.x1.toFixed(1)}, ${Je.avenue.z1.toFixed(1)} );
		vec2 ab = b - a;
		float t = clamp( dot( p - a, ab ) / dot( ab, ab ), 0.0, 1.0 );
		float d = length( p - a - ab * t );
		return smoothstep( ${(Je.avenue.width/2).toFixed(1)} + 4.0, ${(Je.avenue.width/2).toFixed(1)}, d ) * step( 0.0, dot( p - a, ab ) ) * step( dot( p - a, ab ), dot( ab, ab ) );
	}
`;function op(i,e){let t=new us(3e4,96);t.rotateX(-Math.PI/2);let n=new Ke({color:16777215,roughness:.95,metalness:0});n.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${dn}
${ry}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec2 gp = vFogWorldPos.xz;
				float gd = length( vFogWorldPos - cameraPosition );
				float fm = forestMask( gp );
				float sm = seaMask( gp );
				float am = avenueMask( gp );
				// \u8FD1\u5904\uFF1A\u8857\u9053\u7F51\u683C + \u6811\u836B
				vec2 cell = gp / 64.0;
				vec2 cf = abs( fract( cell ) - 0.5 );
				float street = smoothstep( 0.42, 0.46, max( cf.x, cf.y ) );
				float trees = smoothstep( 0.45, 0.62, fbm( gp * 0.02 ) + 0.25 * vnoise( gp * 0.15 ) );
				vec3 pave = mix( vec3( 0.36, 0.37, 0.37 ), vec3( 0.22, 0.23, 0.24 ), street );
				vec3 canopy = vec3( 0.05, 0.10, 0.035 ) * ( 0.7 + 0.6 * vnoise( gp * 0.08 ) );
				vec3 col = mix( pave, canopy, max( trees * 0.75, street * 0.5 ) );
				// \u8FDC\u5904\uFF1A\u6CA1\u6709\u5B9E\u4F53\u5EFA\u7B51\u7684\u533A\u57DF\u753B\u6210\u5BC6\u96C6\u7684\u5C4B\u9876
				vec2 rc = floor( gp / 46.0 );
				vec2 rf = fract( gp / 46.0 );
				float rh = hash12( rc );
				float roof = step( 0.12, rf.x ) * step( rf.x, 0.88 ) * step( 0.12, rf.y ) * step( rf.y, 0.88 ) * step( 0.25, rh );
				float shade = step( rf.x, 0.35 ) * 0.5;
				vec3 roofs = mix( vec3( 0.20, 0.22, 0.20 ), vec3( 0.62, 0.62, 0.60 ) * ( 0.75 + 0.35 * rh ) * ( 1.0 - shade ), roof );
				roofs = mix( roofs, canopy * 1.2, step( 0.82, hash12( rc + 7.3 ) ) );
				float farK = smoothstep( ${(e.cityRange*.75).toFixed(1)}, ${(e.cityRange*1.05).toFixed(1)}, gd );
				col = mix( col, roofs, farK );
				// \u6797\u836B\u5927\u9053\uFF1A\u6574\u6761\u662F\u7EFF\u5730\uFF08\u8DEF\u548C\u884C\u9053\u6811\u7531\u5B9E\u4F53\u6A21\u578B\u8D1F\u8D23\uFF09
				col = mix( col, canopy * 1.15, am );
				// \u68EE\u6797
				vec3 forest = vec3( 0.035, 0.075, 0.025 ) * ( 0.6 + 0.8 * fbm( gp * 0.012 ) ) * ( 0.8 + 0.4 * vnoise( gp * 0.09 ) );
				col = mix( col, forest, fm );
				// \u6D77
				vec3 V = normalize( cameraPosition - vFogWorldPos );
				float fres = pow( 1.0 - clamp( V.y, 0.0, 1.0 ), 4.0 );
				vec3 sea = mix( vec3( 0.03, 0.08, 0.12 ), vec3( 0.32, 0.42, 0.55 ), fres );
				col = mix( col, sea, sm );
				diffuseColor.rgb = col;
				float gRough = mix( 0.95, 0.25, sm );
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = gRough;")},n.customProgramCacheKey=()=>"ground";let s=new Oe(t,n);return s.receiveShadow=!1,s}function Xc(i,e,t,n){let s=n.x-t.x,r=n.z-t.z,o=Math.max(0,Math.min(1,((i-t.x)*s+(e-t.z)*r)/(s*s+r*r)));return Math.hypot(i-t.x-s*o,e-t.z-r*o)}var ap=(i,e)=>{let t=150+.1*-e,n=(s,r,o)=>{let a=Math.min(1,Math.max(0,(o-s)/(r-s)));return a*a*(3-2*a)};return n(t,t+120,i)*n(-250,-600,e)*(1-n(2600,3400,i-.18*-e))},oy=(i,e)=>i-(4200+.3*-e)>0;function ay(i=1){let e=new Ke({color:16777215,roughness:.6,metalness:0,envMapIntensity:i});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
				attribute vec4 aB;
				varying vec3 vLocal;
				flat varying vec3 vObjN;
				flat varying vec3 vSize;
				flat varying vec4 vB;
			`).replace("#include <begin_vertex>",`#include <begin_vertex>
				vSize = vec3( length( instanceMatrix[ 0 ].xyz ), length( instanceMatrix[ 1 ].xyz ), length( instanceMatrix[ 2 ].xyz ) );
				vLocal = position * vSize;
				vObjN = normal;
				vB = aB;
			`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
				varying vec3 vLocal;
				flat varying vec3 vObjN;
				flat varying vec3 vSize;
				flat varying vec4 vB;
				${dn}
			`).replace("#include <color_fragment>",`
				#include <color_fragment>
				float seed = vB.x;
				float style = vB.y;
				float green = vB.z;
				float floorH = vB.w;
				vec3 on = vObjN;
				float bMetal = 0.0;
				float bRough = 0.7;
				vec3 wall = mix( vec3( 0.80, 0.80, 0.77 ), vec3( 0.92, 0.91, 0.87 ), hash11( seed * 91.7 ) );
				vec3 col = wall;
				float dist = length( vFogWorldPos - cameraPosition );
				if ( abs( on.y ) < 0.5 ) {
					bool sx = abs( on.x ) > 0.5;
					float fw = sx ? vSize.z : vSize.x;
					float u = ( sx ? vLocal.z : vLocal.x ) + fw * 0.5;
					float y = vLocal.y;
					vec2 f = vec2( u / max( 1.0, fw / floor( max( 1.0, fw / 3.2 ) ) ), y / floorH );
					vec2 g = fract( f );
					vec2 fwd = fwidth( f ) + 1e-4;
					float lod = smoothstep( 0.25, 0.6, max( fwd.x, fwd.y ) );
					float glass = 0.0;
					if ( style < 0.5 ) {
						// \u6A2A\u5411\u7A97\u5E26
						glass = smoothstep( 0.30 - fwd.y, 0.30 + fwd.y, g.y ) * ( 1.0 - smoothstep( 0.78 - fwd.y, 0.78 + fwd.y, g.y ) );
					} else if ( style < 1.5 ) {
						// \u7F51\u683C\u7A97
						glass = smoothstep( 0.18 - fwd.x, 0.18 + fwd.x, g.x ) * ( 1.0 - smoothstep( 0.82 - fwd.x, 0.82 + fwd.x, g.x ) )
							* smoothstep( 0.28 - fwd.y, 0.28 + fwd.y, g.y ) * ( 1.0 - smoothstep( 0.8 - fwd.y, 0.8 + fwd.y, g.y ) );
					} else if ( style < 2.5 ) {
						// \u73BB\u7483\u5E55\u5899\uFF08\u7EC6\u767D\u6846\uFF09
						glass = 1.0 - 0.75 * max( 1.0 - smoothstep( 0.0, 0.06 + fwd.x, g.x ), 1.0 - smoothstep( 0.0, 0.05 + fwd.y, g.y ) );
					} else {
						// \u7AD6\u5411\u906E\u9633\u677F
						glass = smoothstep( 0.42 - fwd.x, 0.42 + fwd.x, g.x ) * ( 1.0 - smoothstep( 0.92 - fwd.x, 0.92 + fwd.x, g.x ) ) * step( 0.15, g.y );
					}
					// \u8FDC\u5904\u7A97\u683C\u5C0F\u4E8E\u50CF\u7D20\u65F6\u53D6\u5E73\u5747\u503C\uFF0C\u907F\u514D\u95EA\u70C1
					float avg = style < 0.5 ? 0.48 : ( style < 1.5 ? 0.33 : ( style < 2.5 ? 0.85 : 0.45 ) );
					glass = mix( glass, avg, lod );
					glass *= 1.0 - step( vSize.y - 1.5, y ) * ( 1.0 - lod );
					vec3 gCol = style > 1.5 && style < 2.5 ? vec3( 0.26, 0.36, 0.48 ) : vec3( 0.24, 0.29, 0.34 );
					gCol *= 0.8 + 0.4 * hash12( floor( f ) + seed * 13.0 );
					col = mix( wall, gCol, glass );
					bMetal = glass * 0.45;
					bRough = mix( 0.7, 0.2, glass );
					// \u9633\u53F0\u4E0A\u7684\u690D\u7269\uFF08\u592A\u9633\u670B\u514B\uFF09
					float plant = step( 0.65, hash12( floor( f ) * vec2( 1.0, 3.1 ) + seed * 7.0 ) ) * smoothstep( 0.05, 0.0, g.y - 0.05 ) * step( green, 0.5 ) * ( 1.0 - lod );
					col = mix( col, vec3( 0.07, 0.14, 0.04 ), plant * 0.8 );
					// \u8D34\u8FD1\u5730\u9762\u7684\u5730\u65B9\u66F4\u6697\uFF08\u8857\u9053\u91CC\u7167\u4E0D\u5230\u5929\u5149\uFF09
					col *= mix( 0.55, 1.0, smoothstep( 0.0, 40.0, vFogWorldPos.y ) );
				} else if ( on.y > 0.5 ) {
					// \u5C4B\u9876\uFF1A\u4E00\u90E8\u5206\u662F\u5C4B\u9876\u82B1\u56ED
					float n = vnoise( vLocal.xz * 0.15 + seed * 31.0 );
					vec3 roofC = vec3( 0.55, 0.55, 0.53 ) * ( 0.85 + 0.3 * n );
					vec3 garden = vec3( 0.06, 0.12, 0.035 ) * ( 0.7 + 0.7 * n );
					col = mix( roofC, garden, green * smoothstep( 0.3, 0.5, n + 0.15 ) );
				}
				diffuseColor.rgb *= col;
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = bRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = bMetal;")},e.customProgramCacheKey=()=>"building",e}function cp(i,e){let t=new pt,n=[],s=[],r=Je.ring.center,o=un.points[0],a=un.points[1],c=un.points[2],l=un.points[3],h=[Je.rightTower,Je.leftTower,{x:Je.mega.x,z:Je.mega.z}],u=Vi.center,d=(x,M,P,R,L,D={})=>{n.push({x,z:M,w:P,d:R,h:L,y:D.y??0,rot:D.rot??0,seed:i(),style:D.style??Math.floor(i()*4),green:D.green??(i()<.45?1:0),floorH:D.floorH??3.3+i()*.8})},f=(x,M)=>Xc(x,M,{x:Je.avenue.x0,z:Je.avenue.z0-200},{x:Je.avenue.x1,z:Je.avenue.z1}),m=(x,M,P)=>{if(Math.hypot(x-u.x,M-u.z)<225+P||f(x,M)<Je.avenue.width/2+P&&M<Je.avenue.z0+100&&M>Je.avenue.z1-60)return!0;for(let R of h)if(Math.hypot(x-R.x,M-R.z)<110+P)return!0;return!!(Math.hypot(x-r.x,M-(r.z-120))<260+P||oy(x,M))},_=(x,M)=>Math.min(Xc(x,M,o,a),Xc(x,M,a,c),Xc(x,M,c,l))<40?ft-60:1e9,p=e.cityRange;for(let x=-p;x<p*.6;){let M=Math.abs(x-0),P=M<2600?58:M<4500?90:130;for(let R=-p;R<p;){let L=Math.hypot(R,x),D=L<2600?58:L<4500?90:130,V=R+D/2,N=x+P/2;if(R+=D,L>p||N>400&&i()<.6)continue;let K=ap(V,N),$=i()>K*.93,W=D-12,oe=P-12,I=i()<.35?1:i()<.6?2:4,G=[];if(I===1)G.push([V,N,W,oe]);else if(I===2){let O=.4+i()*.2;i()<.5?G.push([V-W/2+W*O/2,N,W*O,oe],[V+W*O/2,N,W*(1-O),oe]):G.push([V,N-oe/2+oe*O/2,W,oe*O],[V,N+oe*O/2,W,oe*(1-O)])}else{let O=W/2,z=oe/2;G.push([V-O/2,N-z/2,O,z],[V+O/2,N-z/2,O,z],[V-O/2,N+z/2,O,z],[V+O/2,N+z/2,O,z])}for(let[O,z,se,F]of G){let te=2+i()*3,j=se-te*2,he=F-te*2;if(j<8||he<8||m(O,z,Math.max(j,he)/2))continue;if(L<3500&&i()<.22){for(let Pe=0;Pe<7;Pe++)s.push([O+(i()-.5)*j,0,z+(i()-.5)*he,5+i()*5]);continue}if(L<e.treeRange&&i()<.85){let Pe=2+Math.floor(i()*4);for(let ne=0;ne<Pe;ne++){let le=Math.floor(i()*4),de=i()-.5,Re=O+(le<2?de*se:(le===2?-1:1)*(se/2-1.5)),ge=z+(le>=2?de*F:(le===0?-1:1)*(F/2-1.5));s.push([Re,0,ge,5+i()*4])}}if(!$||K>.5&&i()<.6)continue;let ie=Math.hypot(O-r.x,z-r.z),Ee=Math.exp(-ie*ie/(2*1300*1300)),ze=22+Math.pow(i(),1.8)*70+Ee*110*i();i()<.05+Ee*.25&&(ze+=60+i()*180*(.4+Ee)),ze*=1-K*.7;let Le=Math.hypot(O-u.x,z-u.z);if(Le<950){if(i()<.45){for(let Pe=0;Pe<5;Pe++)s.push([O+(i()-.5)*j,0,z+(i()-.5)*he,5+i()*5]);continue}ze=Math.min(ze,14+i()*22)}else ze*=.55+.45*Math.min(1,(Le-950)/1500);f(O,z)<260&&z>Je.ring.center.z+150&&(ze=Math.min(ze,70+(-z-900)*.06)),ze=Math.min(ze,_(O,z));let Se=Math.floor(i()*4);if(d(O,z,j,he,ze,{style:Se}),L<3e3){let Pe=Math.floor(i()*3);for(let ne=0;ne<Pe;ne++){let le=3+i()*j*.3,de=3+i()*he*.3;d(O+(i()-.5)*(j-le),z+(i()-.5)*(he-de),le,de,2+i()*4,{y:ze,style:1,green:0})}i()<.35&&s.push([O+(i()-.5)*j*.6,ze,z+(i()-.5)*he*.6,3+i()*3])}if(ze>90&&i()<.6){let Pe=.55+i()*.25,ne=10+i()*ze*.35;d(O+(i()-.5)*j*.15,z+(i()-.5)*he*.15,j*Pe,he*Pe,ne,{y:ze,style:Se})}}}x+=P}for(let x=0;x<26;x++){let M=i()*Math.PI*2,P=290+i()*360,R=r.x+Math.cos(M)*P*1.2,L=r.z-120+Math.sin(M)*P;if(Math.hypot(R-Je.avenue.x1,L-Je.avenue.z1-200)<90)continue;let D=30+i()*40;d(R,L,D,D*(.7+i()*.6),160+i()*300,{style:i()<.4?2:0})}let g=new ut(1,1,1);g.translate(0,.5,0);let v=new Float32Array(n.length*4),S=new _n(g,ay(1),n.length),y=new Ge,E=new Et,b=new pn;n.forEach((x,M)=>{E.setFromEuler(b.set(0,x.rot,0)),y.compose(new A(x.x,x.y,x.z),E,new A(x.w,x.h,x.d)),S.setMatrixAt(M,y),v.set([x.seed,x.style,x.green,x.floorH],M*4)}),g.setAttribute("aB",new xn(v,4)),S.castShadow=!0,S.receiveShadow=!0,S.computeBoundingSphere(),t.add(S);{let x={x:Je.avenue.x0,z:Je.avenue.z0},M={x:Je.avenue.x1,z:Je.avenue.z1},P=Math.hypot(M.x-x.x,M.z-x.z),R=(M.x-x.x)/P,L=(M.z-x.z)/P;for(let D=0;D<P;D+=7)for(let V of[-26,-18,18,26])s.push([x.x+R*D-L*V+(i()-.5)*2,0,x.z+L*D+R*V+(i()-.5)*2,5+i()*3])}for(let x=0;x<e.forestTrees;x++){let M=100+i()*2600,P=-300-i()*3e3,R=ap(M,P);i()>R||Math.hypot(M-u.x,P-u.z)>e.treeRange*1.2||s.push([M,0,P,6+i()*6])}return{group:t,buildings:S,trees:s,count:n.length}}function mu(i,e,t,n){let s=new Dn(1,t);s.scale(1,.8,1),s.translate(0,.75,0);let r=gu(n,.35),o=new _n(s,r,i.length),a=new Ge,c=new Et,l=new Te;return i.forEach(([h,u,d,f],m)=>{c.setFromAxisAngle(new A(0,1,0),e()*6.28),a.compose(new A(h,u,d),c,new A(f*(.8+e()*.4),f*(.8+e()*.5),f*(.8+e()*.4))),o.setMatrixAt(m,a);let _=e();o.setColorAt(m,l.setRGB(.04+_*.06,.08+_*.08,.025+_*.03))}),o.computeBoundingSphere(),o.receiveShadow=!0,o}function gu(i,e){let t=new Ke({color:16777215,roughness:.85}),n={tLeaf:{value:i}};return t.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vLN = normalize( mat3( modelMatrix ) * mat3( instanceMatrix ) * objectNormal );`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLN;
uniform sampler2D tLeaf;
${dn}`).replace("#include <color_fragment>",`#include <color_fragment>
				vec3 lp = vFogWorldPos * ${e.toFixed(3)};
				vec3 lw = pow( abs( normalize( vLN ) ), vec3( 3.0 ) );
				lw /= lw.x + lw.y + lw.z;
				vec4 l = texture2D( tLeaf, fract( lp.zy ) ) * lw.x + texture2D( tLeaf, fract( lp.xz + 0.37 ) ) * lw.y + texture2D( tLeaf, fract( lp.xy + 0.71 ) ) * lw.z;
				float lum = dot( l.rgb, vec3( 0.3, 0.6, 0.1 ) ) / 0.22;
				diffuseColor.rgb *= mix( 0.35, 0.75 + 0.6 * lum, l.a ) * ( 0.75 + 0.5 * vnoise( vFogWorldPos.xz * 0.3 ) );
			`)},t.customProgramCacheKey=()=>"leafy-"+e,t}var br=class{constructor(e){this.leafTex=e,this.cards=[],this.wood=[]}card(e,t,n,s,r,o){this.cards.push({p:e,size:t,quat:n,outward:s,atlas:r,tint:o})}branch(e,t,n,s){this.wood.push({a:e,b:t,r0:n,r1:s})}clump(e,t,n,s,r={}){let o=r.tint||new Te(1,1,1),a=r.flat??.75,c=r.crown||e;for(let l=0;l<n;l++){let h=new A(s()*2-1,(s()*2-1)*a,s()*2-1);if(h.lengthSq()>1){l--;continue}let u=e.clone().addScaledVector(h,t),d=u.clone().sub(c).normalize();d.y+=.35,d.normalize();let f=new Et().setFromEuler(new pn(s()*Math.PI,s()*Math.PI*2,s()*Math.PI)),m=(r.size||2.2)*(.7+s()*.6),_=.8+s()*.4;this.card(u,m,f,d,s()<.5?0:1,new Te(o.r*_,o.g*_,o.b*_))}}tree(e,t,n,s={}){let r=s.lean||new A((n()-.5)*.15,1,(n()-.5)*.15).normalize(),o=e.clone().addScaledVector(r,t*.62),a=s.trunkR||t*.028;this.branch(e.clone().setY(e.y-1),o,a,a*.55);let c=e.clone().addScaledVector(r,t*.72),l=s.crownR||t*.36,h=s.branches||6,u=s.tint;for(let d=0;d<h;d++){let f=d/h*Math.PI*2+n()*.8,m=.25+n()*.55,_=new A(Math.cos(f),m,Math.sin(f)).normalize(),p=e.clone().addScaledVector(r,t*(.4+n()*.25)),g=l*(.75+n()*.45),v=p.clone().addScaledVector(_,g);this.branch(p,v,a*.45,a*.12);let S=p.clone().lerp(v,.55);this.clump(v,l*.42,s.cardsPerClump||26,n,{tint:u,crown:c,size:s.cardSize}),this.clump(S,l*.3,Math.round((s.cardsPerClump||26)*.5),n,{tint:u,crown:c,size:s.cardSize})}this.clump(o.clone().addScaledVector(r,l*.2),l*.55,(s.cardsPerClump||26)*1.4|0,n,{tint:u,crown:c,size:s.cardSize})}bush(e,t,n,s={}){this.clump(e.clone().setY(e.y+t*.45),t,s.n||Math.round(t*t*3+6),n,{flat:.55,crown:e.clone().setY(e.y-t*.3),size:s.size||Math.min(2.2,t*.9),tint:s.tint})}build(e={}){let t=new pt,n=this.cards.length,s=new go,r=new Wn(1,1);s.setIndex(r.index),s.setAttribute("position",r.attributes.position),s.setAttribute("normal",r.attributes.normal),s.setAttribute("uv",r.attributes.uv);let o=new Float32Array(n),a=new Float32Array(n*3);this.cards.forEach((f,m)=>{o[m]=f.atlas,a.set([f.outward.x,f.outward.y,f.outward.z],m*3)}),s.setAttribute("aAtlas",new xn(o,1)),s.setAttribute("aOut",new xn(a,3));let c=new Ke({map:this.leafTex,alphaTest:.45,side:ln,roughness:.75,metalness:0,color:16777215}),l=`
			#include <uv_vertex>
			#ifdef USE_MAP
				vMapUv = vec2( vMapUv.x * 0.5 + aAtlas * 0.5, vMapUv.y );
			#endif
		`;c.onBeforeCompile=f=>{f.uniforms.uTime=e.uTime||{value:0},f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aAtlas;
attribute vec3 aOut;
uniform float uTime;
varying vec3 vOutW;`).replace("#include <uv_vertex>",l).replace("#include <defaultnormal_vertex>",`
					#include <defaultnormal_vertex>
					// \u6CD5\u7EBF\uFF1A\u9762\u7247\u81EA\u8EAB\u6CD5\u7EBF\u548C\u201C\u6811\u51A0\u5411\u5916\u201D\u7684\u65B9\u5411\u6DF7\u5408
					vOutW = normalize( aOut );
					transformedNormal = normalize( mix( transformedNormal, mat3( viewMatrix ) * vOutW, 0.8 ) );
				`).replace("#include <begin_vertex>",`
					#include <begin_vertex>
					// \u98CE\uFF1A\u6BCF\u7247\u9762\u7247\u6309\u81EA\u5DF1\u7684\u4F4D\u7F6E\u8F7B\u8F7B\u6446\u52A8
					vec3 ip = vec3( instanceMatrix[ 3 ] );
					float wv = sin( uTime * 1.3 + ip.x * 0.31 + ip.z * 0.27 ) * 0.5 + sin( uTime * 2.7 + ip.y * 0.9 ) * 0.25;
					transformed.xz += vec2( wv, wv * 0.6 ) * 0.04 * ( position.y + 0.5 );
				`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOutW;
${dn}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif`).replace("#include <opaque_fragment>",`
					{
						// \u80CC\u5149\u900F\u5149
						vec3 V = normalize( cameraPosition - vFogWorldPos );
						float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 2.0 );
						float side = clamp( dot( normalize( vOutW ), SUN_DIR ) * 0.5 + 0.5, 0.0, 1.0 );
						outgoingLight += diffuseColor.rgb * SUN_COLOR * ( back * 0.9 + 0.22 ) * side + diffuseColor.rgb * vec3( 0.05, 0.07, 0.08 );
					}
					#include <opaque_fragment>
				`)},c.customProgramCacheKey=()=>"leafcards";let h=new sr({depthPacking:th,map:this.leafTex,alphaTest:.45,side:ln});h.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aAtlas;`).replace("#include <uv_vertex>",l)},h.customProgramCacheKey=()=>"leafdepth";let u=new _n(s,c,n),d=new Ge;if(this.cards.forEach((f,m)=>{d.compose(f.p,f.quat,new A(f.size,f.size,f.size)),u.setMatrixAt(m,d),u.setColorAt(m,f.tint)}),u.customDepthMaterial=h,u.castShadow=e.castShadow!==!1,u.receiveShadow=!0,u.computeBoundingSphere(),t.add(u),this.wood.length){let f=new an(1,1,1,7,1);f.translate(0,.5,0);let m=new Ke({color:4865843,roughness:.9}),_=new _n(f,m,this.wood.length),p=new A(0,1,0);this.wood.forEach((g,v)=>{let S=g.b.clone().sub(g.a),y=S.length(),E=new Et().setFromUnitVectors(p,S.normalize()),b=(g.r0+g.r1)/2;d.compose(g.a,E,new A(b,y,b)),_.setMatrixAt(v,d)}),_.castShadow=!0,_.receiveShadow=!0,_.computeBoundingSphere(),t.add(_)}return t.userData.cards=n,t}};function lp(i,e,t,n={}){for(let s of e){let r=(n.len||30)*(.4+t()*.8),o=Math.max(2,Math.round(r/2.2));for(let a=0;a<o;a++){let c=s.y-a*(r/o),l=new Et().setFromEuler(new pn((t()-.5)*.6,t()*Math.PI*2,Math.PI+(t()-.5)*.6)),h=s.clone().setY(0).sub(n.center.clone().setY(0)).normalize(),u=(n.size||2.6)*(1-.4*a/o)*(.8+t()*.4);i.card(new A(s.x+(t()-.5)*1.2,c,s.z+(t()-.5)*1.2),u,l,h,t()<.5?0:1,new Te(.75,.85,.7).multiplyScalar(.8+t()*.3))}}}function Tr(i,e={}){let t=new Ke({color:e.color??15328990,roughness:.42,metalness:0,envMapIntensity:1}),n={uAxis:{value:new ae(i.x,i.z)}},s=(e.bands??.35).toFixed(3),r=(e.floorH??5).toFixed(2);return t.onBeforeCompile=o=>{Object.assign(o.uniforms,n),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec2 uAxis;
${dn}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec3 tp = vFogWorldPos;
				vec2 rel = tp.xz - uAxis;
				float ang = atan( rel.y, rel.x );
				float rad = length( rel );
				vec2 f = vec2( ang * 30.0 / 6.0, tp.y / ${r} );
				vec2 g = fract( f );
				vec2 fw = fwidth( f ) + 1e-4;
				float lod = smoothstep( 0.3, 0.7, max( fw.x, fw.y ) );
				float seam = max( 1.0 - smoothstep( 0.0, 0.04 + fw.x, g.x ), 1.0 - smoothstep( 0.0, 0.05 + fw.y, g.y ) );
				// \u4E00\u90E8\u5206\u697C\u5C42\u662F\u901A\u957F\u7684\u73BB\u7483\u7A97\u5E26
				float band = step( hash11( floor( f.y ) * 1.37 + uAxis.x * 0.013 ), ${s} );
				float win = band * smoothstep( 0.25, 0.3, g.y ) * ( 1.0 - smoothstep( 0.82, 0.87, g.y ) );
				win = mix( win, ${s} * 0.55, lod );
				vec3 c = mix( vec3( 1.0 ), vec3( 0.12, 0.16, 0.2 ), win );
				c *= 1.0 - 0.18 * seam * ( 1.0 - lod );
				c *= 0.93 + 0.07 * hash12( floor( f ) );
				diffuseColor.rgb *= c;
				float tRough = mix( 0.42, 0.1, win );
				float tMetal = win * 0.8;
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = tRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = tMetal;")},t.customProgramCacheKey=()=>"panel-"+s+"-"+r,t}function cy(){let i=new Ke({color:2047334,roughness:.1,metalness:.9,envMapIntensity:.6});return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${dn}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec3 gp = vFogWorldPos;
				vec2 f = vec2( ( gp.x + gp.z ) / 3.0, gp.y / 4.2 );
				float rib = 1.0 - smoothstep( 0.0, 0.05 + fwidth( ( gp.x + gp.z ) / 18.0 ), fract( ( gp.x + gp.z ) / 18.0 ) );
				vec2 g = fract( f );
				vec2 fw = fwidth( f ) + 1e-4;
				float lod = smoothstep( 0.3, 0.7, max( fw.x, fw.y ) );
				float mull = max( 1.0 - smoothstep( 0.0, 0.08 + fw.x, g.x ), 1.0 - smoothstep( 0.0, 0.06 + fw.y, g.y ) );
				mull = mix( mull, 0.12, lod );
				mull = max( mull, rib * 0.9 );
				float panel = 0.9 + 0.2 * hash12( floor( f ) );
				diffuseColor.rgb = mix( diffuseColor.rgb * panel, vec3( 0.85, 0.87, 0.9 ), mull );
				float gRough = mix( 0.05, 0.4, mull );
				float gMetal = mix( 0.92, 0.2, mull );
			`).replace("#include <roughnessmap_fragment>","float roughnessFactor = gRough;").replace("#include <metalnessmap_fragment>","float metalnessFactor = gMetal;")},i.customProgramCacheKey=()=>"glass",i}var ly=()=>new Ke({color:12083754,roughness:.38,metalness:.65}),hy=()=>new Ke({color:2894364,roughness:1});function Ut(i,e,t,n=48,s=!1){let r=new an(e,i,t,n,1,s);return r.translate(0,t/2,0),r}function xt(i,e,t,n,s,r,o=!0){let a=new Oe(e,t);return a.position.set(n,s,r),a.castShadow=o,a.receiveShadow=o,i.add(a),a}function hp(i,e,t,n,s,r,o,a=45){let c=[];for(let u=0;u<=24;u++){let d=u/24,f=r+(s-6-r)*Math.pow(d,.55);c.push(new ae(f,-a+a*(1-Math.pow(1-d,2.2))-6))}xt(i,new ms(c,96),o.white,e,t,n),xt(i,Ut(s-6,s,6,128,!0),o.rim,e,t-6,n),xt(i,Ut(s,s,2.2,128,!0),o.white,e,t-.4,n);let l=new us(s-1,96);l.rotateX(-Math.PI/2),xt(i,l,o.soil,e,t+.3,n,!0);let h=new $n(s,1.4,8,160);h.rotateX(Math.PI/2),xt(i,h,o.white,e,t+1.6,n)}function up(i,e,t,n,s,r,o,a,c={}){let l=new A(t,n,s),h=c.clear||0,u=c.canopy??900;for(let m=0;m<u;m++){let _=o()*Math.PI*2,p=Math.sqrt(o())*(r-6);if(p<h*.9)continue;let g=(c.mound??30)*Math.pow(1-p/r,.8),v=5+o()*7;e.push([t+Math.cos(_)*p,n+g*(.4+o()*.6)+v*.3,s+Math.sin(_)*p,v])}for(let m=0;m<a;m++){let _=o()*Math.PI*2,p=Math.sqrt(o())*(r-8);if(p<h&&o()<.85)continue;let g=new A(t+Math.cos(_)*p,n,s+Math.sin(_)*p),v=14+o()*22+(p<r*.5?12*o():0);if(c.cards!==!1&&o()<(c.cardTreeRatio??.5))i.tree(g,v,o,{cardsPerClump:16,cardSize:3.4,branches:5,tint:new Te(.85,.95,.75)});else{let S=v*.32;e.push([g.x,n+v*.45,g.z,S]),e.push([g.x+(o()-.5)*S,n+v*.65,g.z+(o()-.5)*S,S*.8])}}let d=[],f=Math.round(r*.9);for(let m=0;m<f;m++){let _=m/f*Math.PI*2+o()*.05,p=new A(t+Math.cos(_)*(r-2),n,s+Math.sin(_)*(r-2));e.push([p.x,n-1,p.z,3+o()*3]),o()<.55&&d.push(p.clone().setY(n-3))}lp(i,d,o,{center:l,len:c.vineLen||34,size:3})}function dp(i,e,t){let n=new pt,s=[],r=ly(),o=hy(),a=cy();{let{x:c,z:l,discY:h,discR:u}=Je.rightTower,d={x:c,z:l},f=Tr(d,{bands:.25}),m=Tr(d,{bands:.9,floorH:3}),_={white:f,rim:m,soil:o},p=34;xt(n,Ut(24,24,230),f,c,0,l),xt(n,Ut(28,p,30,48),f,c,200,l),xt(n,Ut(p,p,h-230),f,c,230,l,!0);for(let y=0;y<7;y++){let E=y/7*Math.PI*2+.4,b=p+5+e()*3,x=230+e()*40,M=h-34-x;xt(n,Ut(7+e()*4,7+e()*4,M,24),f,c+Math.cos(E)*b,x,l+Math.sin(E)*b,!0),xt(n,Ut(9.5,9.5,2.5,24),r,c+Math.cos(E)*b,x+M*(.3+e()*.4),l+Math.sin(E)*b)}for(let y=0;y<5;y++){let E=-.9+y*.32,b=new ut(10,26+e()*14,2.2),x=xt(n,b,r,c+Math.cos(E)*(p+16),300+e()*25,l+Math.sin(E)*(p+16));x.rotation.y=-E+Math.PI/2}for(let y of[240,282,h-52])xt(n,Ut(p+1.5,p+1.5,4,64),r,c,y,l);hp(n,c,h,l,u,p,_,46);let g=140;xt(n,Ut(p-4,p-6,g,48),f,c,h,l,!0);for(let y=0;y<520;y++){let E=e()*Math.PI*2,b=Math.pow(e(),1.6),x=h+b*g*1.05,M=p-5+e()*2;s.push([c+Math.cos(E)*M,x,l+Math.sin(E)*M,(3+e()*4)*(1.3-b*.7)])}let v=h+g,S=[[0,0,26,760],[20,14,14,640],[-18,16,15,560],[6,-24,13,700],[-26,-6,11,470]];for(let[y,E,b,x]of S){xt(n,Ut(b,b*.92,x,40),f,c+y,v,l+E);for(let M=0;M<6;M++)xt(n,Ut(b+.8,b+.8,3,40),r,c+y,v+30+M*x/6.5+e()*20,l+E);xt(n,Ut(b*.92,2,30,24),f,c+y,v+x,l+E)}for(let y=0;y<6;y++){let E=e()*Math.PI*2;xt(n,Ut(1.6,1.6,300+e()*300,8),r,c+Math.cos(E)*28,v,l+Math.sin(E)*28)}up(i,s,c,h,l,u,e,Math.round(t.discTrees*1.6),{clear:40,vineLen:46,cardTreeRatio:.8,canopy:1100,mound:30})}{let{x:c,z:l,discY:h,discR:u}=Je.leftTower,d={x:c,z:l},f=Tr(d,{bands:.3}),m=Tr(d,{bands:.9,floorH:3}),_={white:f,rim:m,soil:o},p=26;xt(n,Ut(p+6,p,h-40),f,c,0,l);for(let v of[h-120,h-95,h-70])xt(n,Ut(p+3,p+3,9,48),r,c,v,l);hp(n,c,h,l,u,p,_,40);let g=1500;xt(n,Ut(p,p*.8,g,48),f,c,h,l),xt(n,Ut(p*1.35,p*1.35,160,48),f,c,h+520,l),xt(n,Ut(p*1.36,p*1.36,4,48),r,c,h+600,l),xt(n,Ut(6,.5,220,12),f,c,h+g,l);for(let v=0;v<160;v++){let S=e()*Math.PI*2,y=Math.sqrt(e())*(u-10),E=(1-y/u)*40;s.push([c+Math.cos(S)*y,h+E*e(),l+Math.sin(S)*y,8+e()*10])}up(i,s,c,h,l,u,e,Math.round(t.discTrees*.3),{cards:!1,vineLen:26,canopy:700,mound:38})}{let{x:c,z:l,width:h,height:u}=Je.mega,d=Je.ring,f=Tr({x:c,z:l},{bands:.5}),m=d.center.y-d.radius+6,_=[[760,520,m*.55],[560,420,m*.8],[430,330,m]];for(let[E,b,x]of _){xt(n,new ut(E,x,b).translate(0,x/2,0),f,c,0,l+60);for(let M=0;M<E/14;M++)s.push([c-E/2+7+M*14+(e()-.5)*6,x+2,l+60+b/2-6,6+e()*3])}let p=[[h,150,u*.62],[h*.82,130,u*.86],[h*.6,110,u]];for(let[E,b,x]of p)xt(n,new ut(E,x,b).translate(0,x/2,0),a,c,0,l);xt(n,new ut(120,1180,110).translate(0,590,0),a,c+h*.62,0,l+30),xt(n,Ut(34,28,980,40),f,c-h*.6,0,l+20),xt(n,new ut(18,560,60).translate(0,280,0),f,c-h*.45,m,l+90),xt(n,Ut(8,1,260,12),f,c,u,l);let g=new Oi;g.absarc(0,0,d.radius,0,Math.PI*2,!1);let v=new ds;v.absarc(0,0,d.radius-d.tube,0,Math.PI*2,!0),g.holes.push(v);let S=new ps(g,{depth:44,bevelEnabled:!0,bevelSize:3,bevelThickness:3,curveSegments:96});S.translate(0,0,-22);let y=Tr({x:d.center.x,z:d.center.z},{bands:.15,color:15921128});xt(n,S,y,d.center.x,d.center.y,d.center.z);for(let[E,b,x]of[[d.radius-d.tube-10,2.5,6],[d.radius-d.tube-22,1.5,-8]]){let M=new $n(E,b,8,120);xt(n,M,y,d.center.x,d.center.y,d.center.z+x)}xt(n,new ut((d.radius-d.tube)*1.6,6,18),y,d.center.x,d.center.y-d.radius*.45,d.center.z)}return{group:n,blobs:s}}var fp=4;function pp(i,e,t,n,s){let r=new pt,o=new tr(un.points,!1,"centripetal"),a=o.getLength(),c=Math.ceil(a/fp),l=[],h=new A(0,1,0);for(let I=0;I<=c;I++){let G=I/c,O=o.getPointAt(G),z=o.getTangentAt(G).setY(0).normalize(),se=new A().crossVectors(z,h).normalize();l.push({p:O,T:z,B:se,s:G*a})}let u=0,d=1e9;l.forEach((I,G)=>{let O=I.p.distanceTo(un.points[1]);O<d&&(d=O,u=G)});let f=l[u].s,m=[150,300,450].filter(I=>I<f-60),_=I=>I<26||I>f-26&&I<f+14||m.some(G=>Math.abs(I-G)<6),p=new Ke({color:15131612,roughness:.6}),g=new Ke({color:16777215,roughness:.8});g.onBeforeCompile=I=>{I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
${dn}`).replace("#include <color_fragment>",`
				#include <color_fragment>
				vec2 dp = vFogWorldPos.xz;
				vec2 g = abs( fract( dp / 1.5 ) - 0.5 );
				float seam = smoothstep( 0.47, 0.49, max( g.x, g.y ) );
				vec3 c = vec3( 0.74, 0.72, 0.68 ) * ( 0.9 + 0.15 * hash12( floor( dp / 1.5 ) ) ) * ( 1.0 - 0.25 * seam );
				c *= 0.85 + 0.3 * vnoise( dp * 0.08 );
				diffuseColor.rgb = c;
			`)},g.customProgramCacheKey=()=>"deck";let v=new Ke({color:4867904,roughness:.95}),S=new Ke({color:10132120,roughness:.3,metalness:.8}),y=new Ke({color:14210250,roughness:.7}),E=new Ke({color:2761494,roughness:1}),b={deck:[],bed:[],steel:[],planter:[],soil:[],concrete:[]},x=(I,G,O,z,se,F,te)=>I.push({p:G.p.clone().addScaledVector(G.B,O).setY(G.p.y+z),T:G.T,w:se,h:F,len:te}),M=[],P=[];for(let I=0;I<c;I++){let G=l[I],O=l[I+1],z={p:G.p.clone().lerp(O.p,.5),T:G.T.clone().lerp(O.T,.5).normalize(),B:G.B.clone().lerp(O.B,.5).normalize()},se=G.s,F=fp+.08,te=I<u+3;x(b.deck,z,0,-.6,26,1.2,F),x(b.concrete,z,0,-3.6,24,4.8,F);for(let j of[-1,1]){x(b.concrete,z,j*12.2,-5,1.6,7.6,F),x(b.bed,z,j*2.7,.05,3,.1,F);for(let ie of[-.72,.72])x(b.steel,z,j*2.7+ie,.2,.12,.2,F);x(b.planter,z,j*12.25,.6,1.5,1.2,F),x(b.soil,z,j*12.25,1.22,1.3,.06,F),te&&_(se)?(x(b.deck,z,j*2.7,.15,3.2,.3,F),x(b.planter,z,j*4.8,.02,1.2,.06,F)):(x(b.planter,z,j*4.8,.55,1.2,1.1,F),x(b.soil,z,j*4.8,1.12,1,.06,F));let he=se<f+200;e()<(he?.9:.5)&&M.push([z.p.x+z.B.x*j*12.2,z.p.y+1,z.p.z+z.B.z*j*12.2,1+e()*1.1]),!(te&&_(se))&&e()<(he?.7:.35)&&M.push([z.p.x+z.B.x*j*4.8,z.p.y+1,z.p.z+z.B.z*j*4.8,.7+e()*.6]),he&&e()<.5&&i.bush(z.p.clone().addScaledVector(z.B,j*12.2).setY(z.p.y+1.1),1.1+e()*.8,e,{n:5,size:1.4})}if(x(b.planter,z,0,.35,2,.7,F),e()<.6&&M.push([z.p.x,z.p.y+.8,z.p.z,.8+e()*.5]),I%24===12)for(let j of[-1,1]){let he=z.p.clone().addScaledVector(z.B,j*7),ie=he.y-8,Ee=new an(3.2,5.2,ie,20);Ee.translate(0,ie/2,0);let ze=new Oe(Ee,p);ze.position.set(he.x,0,he.z),r.add(ze)}if(te&&I%8===4&&!_(se))for(let j of[-1,1]){let he=z.p.clone().addScaledVector(z.B,j*10.6);if(x(b.steel,{p:he,T:z.T,B:z.B},0,2.6,.18,5.2,.18),x(b.steel,{p:he,T:z.T,B:z.B},-j*.6,5.2,1.4,.12,.3),P.push({x:he.x,z:he.z,r:.35,h:5.2}),I%16===4){let ie=z.p.clone().addScaledVector(z.B,j*10.2).addScaledVector(z.T,3);x(b.planter,{p:ie,T:z.T,B:z.B},0,.25,.8,.5,2.6),P.push({x:ie.x,z:ie.z,r:1.1,h:.5,box:{T:z.T.clone(),hw:.45,hl:1.35}})}}}let R=new ut(1,1,1),L=(I,G,O)=>{let z=new _n(R,G,I.length),se=new Ge,F=new Et,te=new A(0,0,1);return I.forEach((j,he)=>{F.setFromUnitVectors(te,j.T),se.compose(j.p,F,new A(j.w,j.h,j.len)),z.setMatrixAt(he,se)}),z.castShadow=O,z.receiveShadow=!0,z.computeBoundingSphere(),r.add(z),z};L(b.deck,g,!0),L(b.concrete,p,!1),L(b.bed,v,!1),L(b.steel,S,!0),L(b.planter,y,!0),L(b.soil,E,!1);{let I=l[2],G=new Ke({color:2310250,roughness:.15,metalness:.8});for(let z=0;z<4;z++){let se=l[1+z*2],F=new $n(14,.5,8,40,Math.PI),te=new Oe(F,p);te.position.copy(se.p).setY(ft),te.lookAt(te.position.clone().add(se.T)),te.castShadow=!0,r.add(te)}let O=Math.atan2(I.T.x,I.T.z);for(let z=0;z<6;z++)for(let se of[-1,1]){let F=l[1+z],te=new Oe(new ut(9,.2,3.6),G);te.position.copy(F.p).addScaledVector(F.B,se*6).setY(ft+12.9),te.rotation.set(0,O,0),te.rotateZ(se*.32),te.castShadow=!0,r.add(te)}}let D=(()=>{let I=l[u],G=I.p.clone().addScaledVector(I.B,12.5),O=new A(Je.rightTower.x-30,ft,Je.rightTower.z).setY(ft),z=O.clone().sub(G).setY(0),se=z.length();z.normalize();let F=G.clone().lerp(O,.5),te=new Oe(new ut(18,1.2,se+2),g);te.position.copy(F).setY(ft-.6),te.rotation.y=Math.atan2(z.x,z.z),te.receiveShadow=!0,r.add(te);let j=new Oe(new ut(16,5,se),p);j.position.copy(F).setY(ft-3.7),j.rotation.y=te.rotation.y,r.add(j);for(let he of[-1,1]){let ie=new Oe(new ut(.15,1.1,se),S);ie.position.copy(F).addScaledVector(new A(z.z,0,-z.x),he*8.8).setY(ft+.55),ie.rotation.y=te.rotation.y,r.add(ie)}return{from:G,to:O,dir:z,len:se,half:8.2}})(),V=(()=>{let I=D.to.clone().addScaledVector(D.dir,-4),G=Je.rightTower.discY,O=new Ke({color:12375270,roughness:.05,metalness:.2,transparent:!0,opacity:.25,depthWrite:!1}),z=new Oe(new an(5,5,G-ft+6,32,1,!0),O);z.position.copy(I).setY((G+ft)/2+3),z.renderOrder=5,r.add(z);for(let he=ft;he<G;he+=12){let ie=new Oe(new $n(5,.25,6,32),S);ie.rotation.x=Math.PI/2,ie.position.copy(I).setY(he),r.add(ie)}let se=new pt,F=new Oe(new an(4.2,4.2,.5,32),p);F.position.y=-.25,F.receiveShadow=!0;let te=new Oe(new an(4.4,4.4,.6,32),p);te.position.y=3.6;let j=new Oe(new $n(4.25,.12,6,48),new en({color:new Te(1,.7,.3).multiplyScalar(.3)}));return j.rotation.x=Math.PI/2,j.position.y=3.2,se.add(F,te,j),se.position.copy(I).setY(ft),r.add(se),{base:I,top:G,cab:se,glow:j}})(),N=(()=>{let I=new pt,G=new Ke({color:15921386,roughness:.35,metalness:.1}),O=new Ke({color:1780282,roughness:.05,metalness:.9}),z=[];for(let se=0;se<3;se++){let F=new pt,te=new Oe(new ut(2.8,3,17),G);te.position.y=1.9;let j=new Oe(new ut(2.85,1.1,15),O);j.position.y=2.4;let he=new Oe(new ut(2.2,.15,14),new Ke({color:2243166,roughness:.2,metalness:.7}));he.position.y=3.5,F.add(te,j,he),te.castShadow=!0,I.add(F),z.push(F)}return r.add(I),{g:I,cars:z,s:f*.4,dir:1}})();r.add(uy(M,e,s));function K(I,G){let O=0,z=1e9,se=Math.min(l.length-1,u+6);for(let Ee=0;Ee<=se;Ee++){let ze=l[Ee].p,Le=(ze.x-I)**2+(ze.z-G)**2;Le<z&&(z=Le,O=Ee)}let F=l[O],te=I-F.p.x,j=G-F.p.z,he=te*F.B.x+j*F.B.z,ie=te*F.T.x+j*F.T.z;return{s:F.s+ie,l:he,y:F.p.y,i:O}}function $(I,G){let O=K(I,G);if(O.s<-2||O.s>f+12){let se=new A(I-D.from.x,0,G-D.from.z),F=se.dot(D.dir),te=Math.abs(se.x*D.dir.z-se.z*D.dir.x);return F>-1&&F<D.len&&te<D.half?ft:null}let z=Math.abs(O.l);if(z>11.4){let se=new A(I-D.from.x,0,G-D.from.z),F=se.dot(D.dir),te=Math.abs(se.x*D.dir.z-se.z*D.dir.x);return F>-2&&F<D.len&&te<D.half?ft:null}return z<5.5&&!_(O.s)?null:O.y}function W(I,G){let O=N,z=22;O.s+=O.dir*z*I;let se=Math.min(a-30,f+900);O.s>se&&(O.dir=-1),O.s<30&&(O.dir=1),O.cars.forEach((F,te)=>{let j=tn.clamp(O.s-te*18*O.dir,0,a),he=o.getPointAt(j/a),ie=o.getTangentAt(j/a).setY(0).normalize(),Ee=new A().crossVectors(ie,h).normalize();F.position.copy(he).addScaledVector(Ee,O.dir>0?-2.7:2.7),F.rotation.y=Math.atan2(ie.x,ie.z)})}function oe(I,G){let O=K(I,G);if(Math.abs(O.l)>4.4||O.s<0||O.s>f+10)return!1;let z=N.s,se=N.s-54*N.dir;return O.s>Math.min(z,se)-9&&O.s<Math.max(z,se)+9}return{group:r,curve:o,samples:l,walkEnd:u,walkLen:f,query:K,walkable:$,obstacles:P,pad:D,elevator:V,update:W,stationZone:_,crossings:m,tramHit:oe,tram:N}}function uy(i,e,t){let n=new Dn(1,1);n.scale(1.4,.7,1.4);let s=gu(t,.9),r=new _n(n,s,i.length),o=new Ge,a=new Et,c=new Te;return i.forEach(([l,h,u,d],f)=>{a.setFromAxisAngle(new A(0,1,0),e()*6.28),o.compose(new A(l,h,u),a,new A(d,d,d)),r.setMatrixAt(f,o);let m=e();r.setColorAt(f,c.setRGB(.05+m*.06,.11+m*.08,.03+m*.02))}),r.castShadow=!0,r.receiveShadow=!0,r.computeBoundingSphere(),r}function mp(i,e,t,n){let s=bn-200,r=new pt,o=[],a=Vi.center,c=(u,d)=>e.height(u,d);{let u=new A(34,c(34,22),22),d=u.clone().add(new A(-2,58,2));i.branch(u.clone().setY(u.y-2),d,2.2,1.2);let f=new Te(.78,.9,.7),m=d.clone().add(new A(6,6,8)),_=[[new A(30,252,18),new A(9,271,7),6.5],[new A(31,240,18),new A(14,254,-3),6],[new A(32,246,22),new A(48,262,36),9],[new A(32,250,22),new A(30,270,44),9],[new A(32,255,22),new A(52,268,12),8]];for(let p of _)p[0].y+=s,p[1].y+=s;_.forEach(([p,g,v],S)=>{let y=S<2?n:i;y.branch(p,g,.9,.3),y.clump(g,v,Math.round(v*v*1.4),t,{tint:f,crown:m,size:2.6,flat:.6}),y.clump(p.clone().lerp(g,.6),v*.6,Math.round(v*v*.5),t,{tint:f,crown:m,size:2.4})}),i.clump(m,10,90,t,{tint:f,crown:m,size:3,flat:.55}),o.push({x:u.x,z:u.z,r:2.4,h:60,base:u.y})}{let u=e.KNOLL.x+8,d=e.KNOLL.z+4,f=new A(u,c(u,d)-1,d);i.tree(f,15,t,{cardsPerClump:24,cardSize:2.2,branches:6,tint:new Te(.8,.92,.7)});for(let m=0;m<14;m++){let _=t()*Math.PI*2,p=6+t()*14,g=e.KNOLL.x+Math.cos(_)*p,v=e.KNOLL.z+Math.sin(_)*p;i.bush(new A(g,c(g,v)-.5,v),1.5+t()*2,t,{tint:new Te(.75,.85,.65)})}}let l=(u,d)=>Math.hypot(u-0,d+10)>16&&Math.hypot(u-38,d+30)>22&&e.walkable(u,d),h=0;for(let u=0;u<900&&h<48;u++){let d=t()*Math.PI*2,f=20+Math.sqrt(t())*105,m=a.x+Math.cos(d)*f,_=a.z+Math.sin(d)*f;if(!l(m,_)||o.some(v=>Math.hypot(v.x-m,v.z-_)<12))continue;let p=10+t()*12,g=c(m,_);i.tree(new A(m,g,_),p,t,{cardsPerClump:18,cardSize:2.2,branches:5+Math.floor(t()*3)}),o.push({x:m,z:_,r:p*.03+.3,h:p,base:g}),h++}for(let u=0;u<70;u++){let d=t()*Math.PI*2,f=15+Math.sqrt(t())*112,m=a.x+Math.cos(d)*f,_=a.z+Math.sin(d)*f;l(m,_)&&i.bush(new A(m,c(m,_)-.2,_),.8+t()*1.4,t)}for(let u=0;u<120;u++){let d=t()*Math.PI*2,f=e.edgeR(d)-2-t()*3,m=a.x+Math.cos(d)*f,_=a.z+Math.sin(d)*f;Math.hypot(m-38,_+32)<24||Math.hypot(m,_+20)<14||i.bush(new A(m,c(m,_)-.3,_),1+t()*1.6,t)}{let u=new Ke({color:15460576,roughness:.5}),d=new Ke({color:2046563,roughness:.12,metalness:.85}),f=-16,m=12,_=c(f,m);for(let[v,S]of[[-5,-3],[5,-3],[-5,3],[5,3]]){let y=new Oe(new an(.18,.22,3.6,10),u);y.position.set(f+v,_+1.8,m+S),y.castShadow=!0,r.add(y),o.push({x:f+v,z:m+S,r:.3,h:3.6,base:_})}for(let v=0;v<4;v++){let S=new Oe(new ut(2.4,.08,7.2),d);S.position.set(f-3.75+v*2.5,_+3.75,m),S.rotation.z=.25,S.castShadow=!0,r.add(S)}let p=new Oe(new ut(11,.25,.25),u);for(let v of[-3,3]){let S=p.clone();S.position.set(f,_+3.55,m+v),r.add(S)}let g=new Oe(new ut(3,.5,.8),new Ke({color:9071434,roughness:.8}));g.position.set(f,_+.25,m),g.castShadow=!0,r.add(g),o.push({x:f,z:m,r:1.2,h:.5,base:_,box:{T:new A(0,0,1),hw:1.5,hl:.4}})}{let u=new Ke({color:7033664,roughness:.8});for(let d=-6;d<=6;d++){let f=-Math.PI/2+d*.045,m=e.edgeR(f)-1.5,_=a.x+Math.cos(f)*m,p=a.z+Math.sin(f)*m,g=new Oe(new ut(.15,1.1,.15),u);if(g.position.set(_,c(_,p)+.55,p),g.castShadow=!0,r.add(g),d<6){let v=f+.045,S=e.edgeR(v)-1.5,y=a.x+Math.cos(v)*S,E=a.z+Math.sin(v)*S,b=Math.hypot(y-_,E-p),x=new Oe(new ut(b,.1,.1),u);x.position.set((_+y)/2,c(_,p)+1.05,(p+E)/2),x.rotation.y=-Math.atan2(E-p,y-_),r.add(x)}}}return{group:r,obstacles:o,spawn:new A(0,bn,-8)}}function dy(){let i=new pt,e=new Ke({color:12094010,roughness:.28,metalness:.85}),t=new Ke({color:2762272,roughness:.4,metalness:.5}),n=[];for(let h=0;h<=20;h++){let u=h/20;n.push(new ae(Math.sin(Math.pow(u,.7)*Math.PI)*2.4*(1-u*.5),u*30-15))}let s=new Oe(new ms(n,18),e);s.rotation.x=Math.PI/2,i.add(s);let r=new Oi;r.moveTo(0,4),r.bezierCurveTo(8,3,18,-1,26,-7),r.lineTo(23,-8.5),r.bezierCurveTo(15,-5,7,-4,0,-6),r.lineTo(0,4);let o=new ps(r,{depth:.5,bevelEnabled:!1});o.rotateX(-Math.PI/2);for(let h of[1,-1]){let u=new Oe(o,e);u.scale.x=h,u.rotation.z=h*.12,i.add(u);let d=new Oe(new ut(6,.3,2),t);d.position.set(h*24,1.6,7),d.rotation.z=h*.5,i.add(d)}let a=new Oe(new ut(8,.3,4),e);a.position.set(0,.3,14),i.add(a);let c=new Oe(new ut(.3,4,4),e);c.position.set(0,2,13),i.add(c);let l=new Oe(new mi(1.6,12,8),new Ke({color:1054752,roughness:.05,metalness:.9}));return l.scale.set(1,.7,2.2),l.position.set(0,1.4,-8),i.add(l),i}function gp(i,e){let t=new pt,n=dy();n.scale.setScalar(1),t.add(n);let s=new A(i.x+900,i.y,i.z-900),r=Math.hypot(i.x-s.x,i.z-s.z),o=Math.atan2(i.z-s.z,i.x-s.x),a=[],c=new to(1.2,5,6);c.rotateX(Math.PI/2);let l=new Ke({color:9407104,roughness:.4,metalness:.6});for(let u=0;u<9;u++){let d=new Oe(c,l);d.scale.setScalar(1.5+e()*2),t.add(d),a.push({m:d,c:new A((e()-.5)*2400,300+e()*400,-600-e()*2600),r:150+e()*500,w:(.02+e()*.03)*(e()<.5?1:-1),a:e()*6.28})}function h(u){let d=o-u*.012,f=new A(s.x+Math.cos(d)*r,i.y+Math.sin(u*.05)*20,s.z+Math.sin(d)*r),m=new A(s.x+Math.cos(d-.01)*r,f.y,s.z+Math.sin(d-.01)*r);n.position.copy(f),n.lookAt(m),n.rotateY(Math.PI),n.rotateZ(.25);for(let _ of a){let p=_.a+u*_.w;_.m.position.set(_.c.x+Math.cos(p)*_.r,_.c.y+Math.sin(u*.3+_.a)*10,_.c.z+Math.sin(p)*_.r),_.m.lookAt(_.c.x+Math.cos(p+Math.sign(_.w)*.05)*_.r,_.m.position.y,_.c.z+Math.sin(p+Math.sign(_.w)*.05)*_.r)}}return h(0),{group:t,update:h,craft:n}}var Cn=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},xu=[["root",-1,[0,0,0]],["hips",0,[0,.45,0]],["chest",1,[0,.6,0]],["head",2,[0,.71,0]],["thighL",1,[-.075,.42,0]],["shinL",4,[-.08,.21,.01]],["thighR",1,[.075,.42,0]],["shinR",6,[.08,.21,.01]],["armL",2,[-.165,.645,0]],["armR",2,[.165,.645,0]],["cape",2,[0,.67,-.1]]];function fy(i){let e=i.count,t=new Uint16Array(e*4),n=new Float32Array(e*4),s=new Float32Array(xu.length);for(let r=0;r<e;r++){let o=i.getX(r),a=i.getY(r),c=i.getZ(r),l=Math.abs(o);s.fill(0);let h=Cn(.47,.37,a)*(1-Cn(.145,.175,l))*Cn(-.135,-.09,c),u=Cn(.25,.17,a),d=Cn(.015,-.015,o);s[4]=h*(1-u)*d,s[5]=h*u*d,s[6]=h*(1-u)*(1-d),s[7]=h*u*(1-d);let f=1-h,m=Cn(.13,.175,l)*Cn(.33,.42,a)*Cn(.73,.64,a)*Cn(-.12,-.07,c)*f;o<0?s[8]=m:s[9]=m,f-=m;let _=Cn(-.075,-.125,c)*Cn(.69,.6,a)*f;s[10]=_,f-=_;let p=Cn(.68,.74,a)*f;s[3]=p,f-=p;let g=Cn(.5,.6,a);s[2]=f*g,s[1]=f*(1-g);let v=[...s.keys()].sort((y,E)=>s[E]-s[y]).slice(0,4),S=0;for(let y of v)S+=s[y];v.forEach((y,E)=>{t[r*4+E]=y,n[r*4+E]=S>0?s[y]/S:E===0?1:0})}return{idx:t,wts:n}}function xp(i,e=1.6){let t=null;i.scene.traverse(m=>{m.isMesh&&!t&&(t=m)});let n=t.geometry.clone();n.applyMatrix4(t.matrixWorld);let{idx:s,wts:r}=fy(n.attributes.position);n.setAttribute("skinIndex",new os(s,4)),n.setAttribute("skinWeight",new st(r,4));let o=[];xu.forEach(([m,_,p])=>{let g=new Fi;g.name=m;let v=_>=0?xu[_][2]:[0,0,0];g.position.set(p[0]-v[0],p[1]-v[1],p[2]-v[2]),_>=0&&o[_].add(g),o.push(g)});let a=t.material,c=new cs(n,a);c.add(o[0]),c.bind(new ls(o)),c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1;let l=new pt,h=e/.977;c.scale.setScalar(h),l.add(c);let u=Object.fromEntries(o.map(m=>[m.name,m])),d=u.hips.position.clone();function f(m){let _=m.t;for(let S of o)S.rotation.set(0,0,0);u.hips.position.copy(d);let p=tn.clamp(m.speed/9,0,1),v=m.crouch*(.9+p*.3);if(u.hips.position.y-=.07*v,u.thighL.rotation.x=u.thighR.rotation.x=-.75*v,u.shinL.rotation.x=u.shinR.rotation.x=1.2*v,u.chest.rotation.x=.25*v+p*.12,u.head.rotation.x=-.18*v,m.air){let S=tn.clamp(m.airT/Math.max(.1,m.airDur),0,1),y=Math.sin(S*Math.PI);u.thighL.rotation.x+=.35*y*(.6+p),u.thighR.rotation.x+=.35*y*(.6+p),u.shinL.rotation.x+=.35*y,u.shinR.rotation.x+=.35*y,u.armL.rotation.x=u.armR.rotation.x=.5*y*(.5+p),u.armL.rotation.z=-.25*y,u.armR.rotation.z=.25*y,u.cape.rotation.x=-.25-.5*y*(.5+p),u.chest.rotation.x+=.15*p*y}else{let S=Math.sin(_*1.8);u.chest.rotation.x+=.02*S,u.head.rotation.y=Math.sin(_*.37)*.25*(1-p),u.head.rotation.x+=Math.sin(_*.53)*.05,u.armL.rotation.z=-.04-.02*S,u.armR.rotation.z=.04+.02*S,u.cape.rotation.x=-.08-.05*Math.sin(_*1.3)-.3*p,u.cape.rotation.z=.04*Math.sin(_*.9)}}return f({t:0,air:!1,crouch:0,speed:0}),{root:l,mesh:c,bones:u,pose:f}}var _u=26,_p=.65;function vp({character:i,hill:e,viaduct:t,obstacles:n,camera:s,dom:r}){let o=new A,a=new A,c=0,l=!0,h=0,u=.5,d=0,f=0,m=0,_=!1,p=0,g="hill",v=!1,S=!1,y=new Set,E={yaw:0,pitch:.18,dist:7.5,tDist:7.5,look:new A},b=!1,x=0,M=0,P=!1;addEventListener("keydown",I=>{y.add(I.code),I.code==="Space"&&(_=!0,I.preventDefault())}),addEventListener("keyup",I=>y.delete(I.code)),addEventListener("blur",()=>y.clear()),r.addEventListener("pointerdown",I=>{b=!0,x=I.clientX,M=I.clientY}),addEventListener("pointerup",()=>{b=!1}),addEventListener("pointermove",I=>{let G=0,O=0;P?(G=I.movementX,O=I.movementY):b&&(G=I.clientX-x,O=I.clientY-M,x=I.clientX,M=I.clientY),E.yaw-=G*.0042,E.pitch=tn.clamp(E.pitch+O*.0035,-.35,1.2)}),r.addEventListener("wheel",I=>{E.tDist=tn.clamp(E.tDist*Math.exp(I.deltaY*.001),3.5,40),I.preventDefault()},{passive:!1}),document.addEventListener("pointerlockchange",()=>{P=document.pointerLockElement===r});function R(I,G,O){let z=null,se=F=>{F!=null&&(F>O+_p||(z===null||F>z)&&(z=F))};if(v){let{x:F,z:te,discY:j,discR:he}=Je.rightTower,ie=Math.hypot(I-F,G-te);return ie<he-7&&ie>31&&se(j+.3),z}e.walkable(I,G)&&se(e.height(I,G)),se(t.walkable(I,G));for(let F of n)F.h>1.6||L(F,I,G,0)&&se(F.base+F.h);return z}function L(I,G,O,z){if(I.box){let se=G-I.x,F=O-I.z,te=se*I.box.T.x+F*I.box.T.z,j=se*I.box.T.z-F*I.box.T.x;return Math.abs(te)<I.box.hl+z&&Math.abs(j)<I.box.hw+z}return Math.hypot(G-I.x,O-I.z)<I.r+z}function D(I){for(let G of n){if(G.disc!==v||I.y>=G.base+G.h-.05||G.h<=1.6&&I.y>=G.base+G.h-_p||G.box)continue;let O=I.x-G.x,z=I.z-G.z,se=Math.hypot(O,z),F=G.r+.35;se<F&&se>1e-4&&(I.x=G.x+O/se*F,I.z=G.z+z/se*F)}}function V(I,G,O=!1){o.copy(I),v=O,a.set(0,0,0),c=G,E.yaw=G+Math.PI,l=!0;let z=R(o.x,o.z,o.y+5);z!==null&&(o.y=z)}let N=!1,K=0;function $(I){if(K+=I,S){a.set(0,0,0),l=!0,p+=I,i.root.position.copy(o),i.root.rotation.y=c,i.pose({t:p,air:!1,crouch:0,speed:0});return}let G=new ae((y.has("KeyD")||y.has("ArrowRight")?1:0)-(y.has("KeyA")||y.has("ArrowLeft")?1:0),(y.has("KeyW")||y.has("ArrowUp")?1:0)-(y.has("KeyS")||y.has("ArrowDown")?1:0));N||G.set(0,0);let O=G.lengthSq()>0,z=y.has("ShiftLeft")||y.has("ShiftRight"),se=z?10.5:5.2,F=new A(-Math.sin(E.yaw),0,-Math.cos(E.yaw)),te=new A(-F.z,0,F.x),j=new A().addScaledVector(F,G.y).addScaledVector(te,G.x);O&&j.normalize().multiplyScalar(se);let he=l?14:3;if(a.x+=(j.x-a.x)*Math.min(1,he*I),a.z+=(j.z-a.z)*Math.min(1,he*I),O){let ne=Math.atan2(j.x,j.z)-c;ne=Math.atan2(Math.sin(ne),Math.cos(ne)),c+=ne*Math.min(1,10*I)}l&&(m-=I,N&&_?(a.y=9,l=!1,h=0,u=2*a.y/_u,d=1,oe.onJump&&oe.onJump(1)):O&&m<=0&&f<=0&&(a.y=z?5.4:4,l=!1,h=0,u=2*a.y/_u,oe.onJump&&oe.onJump(z?.7:.45))),_=!1;let ie=o.clone();ie.x+=a.x*I,ie.z+=a.z*I,l||(a.y-=_u*I,h+=I),ie.y+=a.y*I,D(ie);let Ee=Pe=>R(Pe.x,Pe.z,Math.max(Pe.y,o.y)+.01)!==null;if(!Ee(ie)){let Pe=o.clone().setX(ie.x).setY(ie.y),ne=o.clone().setZ(ie.z).setY(ie.y);Ee(Pe)?(ie.copy(Pe),a.z=0):Ee(ne)?(ie.copy(ne),a.x=0):(ie.x=o.x,ie.z=o.z,a.x=a.z=0)}let ze=R(ie.x,ie.z,Math.max(ie.y,o.y)+.01);if(ze!==null){if(l)ze<ie.y-.9?(l=!1,h=0,u=.6):ie.y=ze;else if(ie.y<=ze&&a.y<=0){ie.y=ze,l=!0;let Pe=Math.min(1,-a.y/12);a.y=0,f=.1+Pe*.12,d=Math.max(d,.35+Pe*.6),m=z?.02:.06,oe.onLand&&oe.onLand(Pe)}}o.copy(ie),f-=I;let Le=l?f>0?1:0:h<.08?.6:0;d+=(Le-d)*Math.min(1,(Le>d?30:9)*I),p+=I,i.root.position.copy(o),i.root.rotation.y=c;let Se=Math.hypot(a.x,a.z);i.pose({t:p,air:!l,airT:h,airDur:u,speed:Se,crouch:d}),g=v?"disc":e.walkable(o.x,o.z)&&Math.abs(e.height(o.x,o.z)-o.y)<1?"hill":"deck"}function W(I){E.dist+=(E.tDist-E.dist)*Math.min(1,6*I);let G=o.clone().add(new A(0,1.5,0));E.look.lerp(G,Math.min(1,10*I));let O=Math.cos(E.pitch),z=new A(Math.sin(E.yaw)*O,Math.sin(E.pitch),Math.cos(E.yaw)*O).multiplyScalar(E.dist),se=E.look.clone().add(z);if(!v){let F=e.height(se.x,se.z);se.y<F+1.2&&e.walkable(se.x,se.z)&&(se.y=F+1.2)}s.position.copy(se),s.lookAt(E.look)}let oe={pos:o,vel:a,cam:E,place:V,update:$,updateCamera:W,get onGround(){return l},get surface(){return g},get disc(){return v},set disc(I){v=I},set carried(I){S=I},get carried(){return S},set enabled(I){N=I},get enabled(){return N},requestLock(){r.requestPointerLock&&r.requestPointerLock()},get yaw(){return c},onJump:null,onLand:null};return oe}function yp({scene:i,viaduct:e,hill:t,player:n,audio:s,ui:r,U:o}){let a=new pt;i.add(a);let c=[],l=(P,R)=>t.height(P,R);for(let[P,R]of[[-24,34],[22,64],[-58,92]])c.push(new A(P,l(P,R)+1.2,R));let h=(P,R,L=1.2)=>{let D=e.samples[Math.min(e.walkEnd,Math.round(P/4))];return D.p.clone().addScaledVector(D.B,R).setY(ft+L)},u=e.walkLen;c.push(h(u*.12,-8.5),h(u*.3,8.5),h(u*.45,7.5,2.6),h(u*.6,-8),h(u*.78,8.8),h(u*.93,-8));{let P=e.pad.from.clone().addScaledVector(e.pad.dir,e.pad.len*.45).setY(ft+1.2);c.push(P)}let d=new en({color:new Te(1,.82,.35).multiplyScalar(6)}),f=new Lt({transparent:!0,depthWrite:!1,blending:vs,uniforms:{uTime:o.uTime},vertexShader:`
			varying vec2 vUv;
			void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
		`,fragmentShader:`
			uniform float uTime;
			varying vec2 vUv;
			void main() {
				float a = pow( 1.0 - abs( vUv.x - 0.5 ) * 2.0, 2.0 ) * pow( 1.0 - vUv.y, 1.5 ) * ( 0.7 + 0.3 * sin( uTime * 3.0 + vUv.y * 10.0 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.75, 0.3 ) * a * 1.6, 1.0 );
			}
		`}),m=c.map((P,R)=>{let L=new pt;L.position.copy(P);let D=new Oe(new Dn(.32,2),d),V=new Oe(new Dn(.55,1),new Ke({color:16049856,roughness:.1,metalness:.3,transparent:!0,opacity:.35,wireframe:!0})),N=new Oe(new Wn(1.4,40),f);return N.geometry.translate(0,20,0),N.onBeforeRender=(K,$,W)=>{let oe=W.position.clone().sub(L.position);N.rotation.y=Math.atan2(oe.x,oe.z)},L.add(D,V,N),a.add(L),{g:L,orb:D,shell:V,beam:N,p:P.clone(),got:!1,i:R}}),_=m.length,p=0,g="collect",v=0,S=0,y=0,E=[];function b(P){for(let R=0;R<24;R++){let L=new Oe(new mi(.06,6,4),d);L.position.copy(P);let D=new A(Math.random()-.5,Math.random()*.8+.2,Math.random()-.5).normalize().multiplyScalar(3+Math.random()*4);a.add(L),E.push({m:L,v:D,life:.8+Math.random()*.5})}}let x=e.elevator;function M(P,R){(g==="collect"||g==="ready")&&(y=R-S);for(let D of m)D.got||(D.g.position.y=D.p.y+Math.sin(R*2+D.i)*.18,D.shell.rotation.y=R*1.2+D.i,D.shell.rotation.x=R*.7,n.enabled&&n.pos.distanceTo(D.g.position.clone().setY(D.g.position.y-.9))<1.7&&(D.got=!0,D.g.visible=!1,p++,s.pickup(p),b(D.g.position),r.seeds(p,_),p===_?(g="ready",r.toast("10 \u9897\u79CD\u5B50\u90FD\u627E\u5230\u4E86\uFF01\u7535\u68AF\u5DF2\u7ECF\u542F\u52A8"),r.objective("\u8D70\u8FDB\u8FDE\u63A5\u7AD9\u7684\u7535\u68AF\uFF0C\u4E0A\u5230\u7A7A\u4E2D\u82B1\u56ED"),x.glow.material.color.setRGB(.6,1.6,.9)):r.toast(`\u9633\u5149\u79CD\u5B50 ${p} / ${_}`)));for(let D=E.length-1;D>=0;D--){let V=E[D];V.life-=P,V.v.y-=6*P,V.m.position.addScaledVector(V.v,P),V.life<=0&&(a.remove(V.m),E.splice(D,1))}let L=x.cab.position;if(g==="collect")n.pos.distanceTo(L)<5&&!r.hinted&&(r.hinted=!0,r.toast(`\u7535\u68AF\u8FD8\u6CA1\u6709\u80FD\u91CF\uFF1A\u8FD8\u5DEE ${_-p} \u9897\u9633\u5149\u79CD\u5B50`)),n.pos.distanceTo(L)>8&&(r.hinted=!1);else if(g==="ready")Math.hypot(n.pos.x-L.x,n.pos.z-L.z)<3.6&&Math.abs(n.pos.y-ft)<1.5&&(g="ride",v=0,n.enabled=!1,n.carried=!0,s.elevator(),r.objective(""));else if(g==="ride"){v+=P;let D=10,V=tn.smoothstep(v/D,0,1),N=ft+(Je.rightTower.discY+.3-ft)*V;L.y=N,n.pos.set(L.x,N,L.z),n.cam.yaw+=P*.25,n.cam.tDist=16,v>=D&&(g="won",n.disc=!0,n.carried=!1,n.enabled=!0,n.pos.y=Je.rightTower.discY+.3,n.cam.tDist=7.5,s.win(),r.win(y))}}return{group:a,update:M,seeds:m,get state(){return g},start(P){S=P,r.seeds(0,_),r.objective("\u6536\u96C6 10 \u9897\u9633\u5149\u79CD\u5B50\uFF0C\u6CBF\u9AD8\u67B6\u7EFF\u5ECA\u8D70\u5230\u7A7A\u4E2D\u82B1\u56ED\u5854")},get got(){return p},total:_}}var Er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},py=new Un(-1,1,1,-1,0,1),vu=class extends At{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},my=new vu,qi=class{constructor(e){this._mesh=new Oe(my,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yi=class extends Pn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ti.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Oo=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qc=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Yc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yi(Er),this.copyPass.material.blending=Mi,this.timer=new xs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Oo!==void 0&&(o instanceof Oo?n=!0:o instanceof qc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kc=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var wr=class i extends Pn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(r,o,{type:Ht,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Dt(r,o,{type:Ht,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Dt(r,o,{type:Ht,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Mp;this.highPassUniforms=Ti.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ti.clone(Er.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,premultipliedAlpha:!0,blending:vs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Lt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};wr.BlurDirectionX=new ae(1,0);wr.BlurDirectionY=new ae(0,1);var Bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zc=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ti.clone(Bo.uniforms),this.material=new ir({name:Bo.name,uniforms:this.uniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_o?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ms?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===So&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var yu=`
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`,gy={name:"Sanitize",uniforms:{tDiffuse:{value:null}},vertexShader:yu,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`},xy={name:"Grade",uniforms:{tDiffuse:{value:null},uExposure:{value:1},uContrast:{value:1.16},uSat:{value:1.12}},vertexShader:yu,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uExposure;
		uniform float uContrast;
		uniform float uSat;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			c *= mix( vec3( 0.95, 1.0, 1.03 ), vec3( 1.04, 1.0, 0.95 ), smoothstep( 0.05, 0.6, l ) );
			c = mix( vec3( l ), c, uSat );
			// \u5728\u5BF9\u6570\u7A7A\u95F4\u91CC\u7ED5\u4E2D\u7070\u505A\u5BF9\u6BD4\u5EA6
			c = exp2( ( log2( max( c, 1e-5 ) ) - log2( 0.18 ) ) * uContrast + log2( 0.18 ) );
			gl_FragColor = vec4( c, 1.0 );
		}
	`},_y={name:"Final",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new ae(1,1)},uFade:{value:1}},vertexShader:yu,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform vec2 uRes;
		uniform float uFade;
		varying vec2 vUv;
		${dn}
		void main() {
			vec2 c = vUv - 0.5;
			vec3 col = texture2D( tDiffuse, vUv ).rgb;
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			col *= mix( 0.78, 1.0, smoothstep( 1.1, 0.35, length( vc ) ) );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.012;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`};function Sp(i,e,t,n){let s=i.getDrawingBufferSize(new ae),r=new Dt(s.x,s.y,{type:Ht,samples:n.msaa}),o=new Yc(i,r);o.addPass(new Kc(e,t)),o.addPass(new Yi(gy));let a=new wr(new ae(s.x/2,s.y/2),.18,.5,1.6);o.addPass(a);let c=new Yi(xy);o.addPass(c),o.addPass(new Zc);let l=new Yi(_y);return o.addPass(l),{composer:o,bloom:a,grade:c,final:l,setSize(h,u,d){o.setPixelRatio(d),o.setSize(h,u),l.uniforms.uRes.value.set(h*d,u*d)}}}function bp(){let i=null,e=null,t=null,n=!1,s=0;function r(){let u=i.sampleRate*3,d=i.createBuffer(2,u,i.sampleRate);for(let f=0;f<2;f++){let m=d.getChannelData(f),_=0;for(let p=0;p<u;p++){let g=Math.random()*2-1;_=.98*_+.02*g,m[p]=g*.3+_*3.5}}return d}function o(u,d,f,m,_){let p=i.createBufferSource();p.buffer=t,p.loop=!0;let g=i.createBiquadFilter();g.type=u,g.frequency.value=d,g.Q.value=f;let v=i.createGain();if(v.gain.value=m,p.connect(g).connect(v).connect(e),p.start(0,Math.random()*2),_){let S=i.createOscillator();S.frequency.value=_;let y=i.createGain();y.gain.value=m*.6,S.connect(y).connect(v.gain),S.start()}}function a(u,d,f,m,_="sine",p=1){let g=i.createOscillator();g.type=_,g.frequency.setValueAtTime(u,d),p!==1&&g.frequency.exponentialRampToValueAtTime(u*p,d+f);let v=i.createGain();v.gain.setValueAtTime(0,d),v.gain.linearRampToValueAtTime(m,d+.01),v.gain.exponentialRampToValueAtTime(5e-4,d+f),g.connect(v).connect(e),g.start(d),g.stop(d+f+.05)}function c(){if(!i||i.state!=="running")return;let u=i.currentTime+.02,d=2500+Math.random()*2e3,f=2+Math.floor(Math.random()*4);for(let m=0;m<f;m++)a(d*(.9+Math.random()*.3),u+m*.1,.08,.025,"sine",Math.random()<.5?1.3:.75)}function l(){i=new(window.AudioContext||window.webkitAudioContext),e=i.createGain(),e.gain.value=0,e.connect(i.destination),t=r(),o("lowpass",320,.7,.35,.07),o("bandpass",900,.4,.06,.11),o("lowpass",90,1,.25,0),e.gain.linearRampToValueAtTime(.8,i.currentTime+2);let u=()=>{s=setTimeout(()=>{c(),u()},2e3+Math.random()*5e3)};u()}return{get on(){return n},toggle(){return i?n?(i.suspend(),n=!1):(i.resume(),n=!0):(l(),n=!0),n},ensure(){i||(l(),n=!0)},hop(u){if(!i||!n)return;let d=i.currentTime;a(140+u*60,d,.12,.05*u,"triangle",.6)},land(u){if(!i||!n)return;let d=i.currentTime,f=i.createBufferSource();f.buffer=t;let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=500;let _=i.createGain();_.gain.setValueAtTime(.15*(.3+u),d),_.gain.exponentialRampToValueAtTime(.001,d+.12),f.connect(m).connect(_).connect(e),f.start(d,Math.random()*2),f.stop(d+.15)},pickup(u){if(!i||!n)return;let d=i.currentTime,f=660*Math.pow(2,u%5/12*2);a(f,d,.35,.08),a(f*1.5,d+.08,.4,.06),a(f*2,d+.16,.5,.04)},elevator(){if(!i||!n)return;let u=i.currentTime;a(110,u,10,.06,"sawtooth",1.6),a(220,u,10,.02,"sine",1.6)},win(){if(!i||!n)return;let u=i.currentTime;[523,659,784,1047].forEach((d,f)=>a(d,u+f*.12,2.5,.06))}}}async function vy(){let i=new URLSearchParams(location.search),e=matchMedia("(pointer: coarse)").matches,t={high:{dpr:Math.min(devicePixelRatio,1.5),msaa:4,shadow:4096,shadowFar:2200,cityRange:7e3,treeRange:3200,forestTrees:6e4,hillRes:280,discTrees:80,sky:"sky_8k.jpg"},mid:{dpr:1,msaa:2,shadow:2048,shadowFar:1600,cityRange:5500,treeRange:2400,forestTrees:35e3,hillRes:220,discTrees:50,sky:"sky_8k.jpg"},low:{dpr:1,msaa:0,shadow:1024,shadowFar:900,cityRange:4e3,treeRange:1600,forestTrees:15e3,hillRes:160,discTrees:30,sky:"sky_4k.jpg"}},n=t[i.get("q")]?i.get("q"):e?"low":"high",s=t[n],r=i.has("debug");function o(k){return function(){k|=0,k=k+1831565813|0;let X=Math.imul(k^k>>>15,1|k);return X=X+Math.imul(X^X>>>7,61|X)^X,((X^X>>>14)>>>0)/4294967296}}let a=o(20261105),c=ep(1105),l=(k,X,ce)=>Math.min(ce,Math.max(X,k)),h=Math.PI/180,u={uTime:{value:0},uSkyRot:{value:0},uSkyGain:{value:1}},d=document.getElementById("c"),f=new Nc({canvas:d,antialias:!1,powerPreference:"high-performance",stencil:!1}),m=s.dpr;f.setPixelRatio(m),f.setSize(innerWidth,innerHeight,!1),f.toneMapping=Ms,f.toneMappingExposure=1,f.shadowMap.enabled=!0,f.shadowMap.type=_s;let _=new Yr;_.fog=new qr(16777215,1,2);let p=new Bt(40,innerWidth/innerHeight,.4,36e3),g=new Gc(Mr,5.4);g.position.copy(yr),g.castShadow=!0,g.shadow.mapSize.set(s.shadow,s.shadow),g.shadow.camera.near=1,g.shadow.camera.far=s.shadowFar,g.shadow.bias=-3e-4,g.shadow.normalBias=.6,g.shadow.radius=2,_.add(g);function v(){}let S=document.querySelector("#bar i"),y=new rr;y.onProgress=(k,X,ce)=>{S.style.width=(100*X/ce).toFixed(0)+"%"};let E=new gs(y);E.setCrossOrigin("anonymous");let b=(k,X=!1)=>new Promise((ce,U)=>E.load(pu(k),Q=>{X&&(Q.colorSpace=Ct),Q.wrapS=Q.wrapT=Nn,Q.anisotropy=8,ce(Q)},void 0,U)),x=new Fc(y);x.setCrossOrigin("anonymous");let[M,P,R,L,D,V,N,K,$]=await Promise.all([b(s.sky,!0),b("sky_env.jpg",!0),b("leaves.webp",!0),b("mossy_rock_diff.jpg",!0),b("mossy_rock_nor_gl.jpg"),b("mossy_rock_arm.jpg"),b("leafy_grass_diff.jpg",!0),b("leafy_grass_nor_gl.jpg"),x.loadAsync(pu("character.glb"))]);R.wrapS=R.wrapT=fn;{P.mapping=ur;let k=new gr(f);_.environment=k.fromEquirectangular(P).texture,_.environmentIntensity=.34,_.environmentRotation.y=0,k.dispose()}let W=performance.now(),oe=np(M,u);_.add(oe);let I=ip(c),G=rp(I,{rockD:L,rockN:D,rockA:V,grassD:N,grassN:K},s);_.add(G),_.add(sp(I,c,G.userData.material)),_.add(op(u,s));let O=cp(a,s);_.add(O.group);let z=new br(R),se=new br(R),F=new br(R),te=dp(F,a,s);_.add(te.group);let j=pp(z,a,s,u,R);_.add(j.group);let he=mp(z,I,a,se);_.add(he.group),_.add(z.build({uTime:u.uTime}));let ie=se.build({uTime:u.uTime});ie.traverse(k=>{k.receiveShadow=!1}),_.add(ie),_.add(F.build({uTime:u.uTime,castShadow:!1}));{let k=O.trees.concat(te.blobs.map(([Q,ee,_e,pe])=>[Q,ee-pe*.75,_e,pe])),X=[],ce=[];for(let Q of k)(Math.hypot(Q[0],Q[2])<1400?X:ce).push(Q);let U=mu(X,a,1,R);U.castShadow=!0,U.receiveShadow=!0,_.add(U),_.add(mu(ce,a,0,R))}let Ee=gp(Je.aircraft,a);_.add(Ee.group);let ze=xp($,1.6);_.add(ze.root);let Le=he.obstacles.concat(j.obstacles.map(k=>({...k,base:ft})));Le.forEach(k=>{k.disc=!1});let Se=vp({character:ze,hill:I,viaduct:j,obstacles:Le,camera:p,dom:d});Se.place(he.spawn,Math.PI);let Pe=bp();Se.onJump=k=>Pe.hop(k),Se.onLand=k=>Pe.land(k);let ne=Math.round(performance.now()-W),le=k=>document.querySelector(k),de=0,Re={hinted:!1,seeds(k,X){le("#seedCount").innerHTML=`\u9633\u5149\u79CD\u5B50 <b>${k}</b> / ${X}`},objective(k){le("#objective").textContent=k},toast(k){let X=le("#toast");X.textContent=k,X.classList.add("show"),clearTimeout(de),de=setTimeout(()=>X.classList.remove("show"),2600)},win(k){let X=Math.floor(k/60),ce=Math.round(k%60);le("#winText").textContent=`\u7528\u65F6 ${X} \u5206 ${ce} \u79D2\u3002\u9633\u5149\u79CD\u5B50\u5DF2\u7ECF\u79CD\u8FDB\u82B1\u56ED\u3002`,le("#win").classList.add("show"),document.exitPointerLock&&document.exitPointerLock()}};le("#stay").addEventListener("click",()=>le("#win").classList.remove("show"));let ge=yp({scene:_,viaduct:j,hill:I,player:Se,audio:Pe,ui:Re,U:u}),qe=le("#sound"),Ue=()=>{qe.textContent=Pe.on?"\u5173\u95ED\u58F0\u97F3":"\u5F00\u542F\u58F0\u97F3"};qe.addEventListener("click",()=>{Pe.toggle(),Ue()});let je=Sp(f,_,p,s);function ot(k){let X=Math.max(k,1);return 2*Math.atan(Math.tan(Sn.hfov/2*h)/X)/h}let at=k=>l(2*Math.atan(Math.tan(36*h)/k)/h,45,75);function H(){f.setPixelRatio(m),f.setSize(innerWidth,innerHeight,!1),p.aspect=innerWidth/innerHeight,p.updateProjectionMatrix(),je.setSize(innerWidth,innerHeight,m)}H(),addEventListener("resize",H);let bt="intro",Qe=0,ht={pos:new A,quat:new Et,fov:40};function xe(){p.position.copy(Sn.pos),p.rotation.set(Sn.pitch,0,0,"YXZ"),p.fov=ot(p.aspect),p.updateProjectionMatrix()}le("#go").addEventListener("click",()=>{bt==="intro"&&(Pe.ensure(),Ue(),bt="fly",Qe=0,ht.pos.copy(p.position),ht.quat.copy(p.quaternion),ht.fov=p.fov,document.body.classList.remove("intro"))});let yt=new xs;yt.connect(document);let He=0,We=he.spawn.clone(),C=0,T=0,q=0,ue=le("#fps");r&&(ue.style.display="block");let re=null;window.__game={tier:n,buildMs:ne,renderer:f,player:Se,objectives:ge,viaduct:j,hill:I,character:ze,frames:0,stats:{buildings:O.count,cards:z.cards.length+F.cards.length},shot(k={}){re={o:k,pending:!0,done:!1}},get shotDone(){return re?re.done:!1},resume(){re=null},start(){le("#go").click()}};function me(k,X){if(u.uTime.value=X,Ee.update(X),j.update(k,X),bt==="play"){if(Se.update(k),ge.update(k,X),Se.updateCamera(k),!Se.disc&&j.tramHit(Se.pos.x,Se.pos.z)&&Se.enabled)Se.place(We,Se.yaw),Re.toast("\u5C0F\u5FC3\u7535\u8F66\uFF01");else if(Se.onGround&&!Se.disc){let ce=j.query(Se.pos.x,Se.pos.z);(Math.abs(ce.l)>5.5||j.stationZone(ce.s)===!1||ce.s<0)&&We.copy(Se.pos)}Se.pos}else if(bt==="fly"){Qe+=k/3.2;let ce=tn.smootherstep(Math.min(1,Qe),0,1);Se.update(k),Se.updateCamera(1);let U=p.position.clone(),Q=p.quaternion.clone();p.position.lerpVectors(ht.pos,U,ce),p.quaternion.slerpQuaternions(ht.quat,Q,ce),p.fov=ht.fov+(at(p.aspect)-ht.fov)*ce,p.updateProjectionMatrix(),Se.pos.clone().lerp(Se.pos,ce),Qe>=1&&(bt="play",Se.enabled=!0,ge.start(X),document.body.classList.add("playing"),p.fov=at(p.aspect),p.updateProjectionMatrix())}else Se.update(k),xe(),new A(0,ft+5,-10);oe.position.copy(p.position)}function ye(){let k=re.o,X=k.t??20;u.uTime.value=X,Ee.update(X),k.view==="ref"||!k.view?(xe(),new A(0,ft+5,-10),void 0):k.view==="player"?(k.playerPos&&Se.place(new A(...k.playerPos),k.playerYaw??0,k.disc??!1),k.camYaw!==void 0&&(Se.cam.yaw=k.camYaw),k.camPitch!==void 0&&(Se.cam.pitch=k.camPitch),k.camDist!==void 0&&(Se.cam.dist=Se.cam.tDist=k.camDist),k.pose?ze.pose(k.pose):Se.update(1/60),Se.cam.look.copy(Se.pos).add(new A(0,1.5,0)),Se.updateCamera(1),p.fov=at(p.aspect),p.updateProjectionMatrix(),Se.pos,void 0):(p.position.set(...k.view.pos),p.lookAt(new A(...k.view.look)),p.fov=k.view.fov??50,p.updateProjectionMatrix(),new A(...k.view.shadow||k.view.look),void 0),oe.position.copy(p.position),je.final.uniforms.uTime.value=X,je.composer.render(1/60),re.pending=!1,re.done=!0}document.body.classList.add("loaded","intro"),xe(),f.setAnimationLoop(k=>{if(re){re.pending&&ye();return}yt.update(k);let X=Math.min(yt.getDelta(),.05),ce=yt.getElapsed()+20;if(me(X,ce),je.final.uniforms.uTime.value=ce,je.composer.render(X),He++,window.__game.frames=He,He>30&&q<2&&(C+=X,T++,T===90&&(C/T>1/30&&m>1&&(m=Math.max(1,m*.75),H()),C=0,T=0,q++)),r&&He%20===0){let U=Se.pos;ue.textContent=`${n} \xB7 ${(1/Math.max(X,.001)).toFixed(0)} fps \xB7 dpr ${m.toFixed(2)} \xB7 ${f.info.render.calls} draws \xB7 ${(f.info.render.triangles/1e6).toFixed(2)}M tris \xB7 (${U.x.toFixed(0)}, ${U.y.toFixed(1)}, ${U.z.toFixed(0)})`}})}vy().catch(i=>{console.error(i);let e=document.querySelector("#loading .box");e&&(e.textContent="\u8F7D\u5165\u5931\u8D25\uFF1A"+i.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
