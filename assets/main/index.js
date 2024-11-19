System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts"],(function(n){var t,e,o,r,c,s;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator,r=n.Vec3,c=n.Component},function(n){s=n.ResultScreen}],execute:function(){var u;e._RF.push({},"a22b36CsuhH6ZgDxdSUHGDV","Background",void 0);var a=o.ccclass;o.property,n("Background",a("Background")(u=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.start=function(){},o.update=function(n){0==s.Instance.node.active&&(this.node.translate(new r(-100*n,0,0)),this.node.position.x<=-432&&this.node.translate(new r(288,0,0)))},e}(c))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResultScreen.ts","./StartScreen.ts"],(function(t){var e,i,n,o,s,l,p,r,a,h,c,y,d,u,f,g,C,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,p=t.Label,r=t.AudioClip,a=t.input,h=t.Input,c=t.Collider2D,y=t.Contact2DType,d=t.Animation,u=t.AudioSource,f=t.Vec3,g=t.Component},function(t){C=t.ResultScreen},function(t){b=t.StartScreen}],execute:function(){var m,v,S,_,T,O,B,A,I,R,w,z;s._RF.push({},"5e3cfxR6fBGxrd6ogSTCUhA","Bird",void 0);var D=l.ccclass,E=l.property;t("Bird",(m=D("Bird"),v=E({type:p}),S=E({type:p}),_=E({type:r}),T=E({type:r}),m(((z=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,n(e,"labelScore",A,o(e)),n(e,"plusOne",I,o(e)),n(e,"point",R,o(e)),n(e,"die",w,o(e)),e.score=0,e.vy=0,e.gravity=500,e}i(e,t);var s=e.prototype;return s.start=function(){e.Instance=this,a.on(h.EventType.TOUCH_START,this.onTouchStart,this);var t=this.getComponent(c);t&&t.on(y.BEGIN_CONTACT,this.onBeginContact,this),this.plusOne.node.active=!1,this.getComponent(d).play("bird_idle")},s.onBeginContact=function(t,e,i){"scoreCollider"==e.node.name?(this.score++,this.labelScore.string=""+this.score,this.getComponent(u).playOneShot(this.point),this.plusOne.node.active=!0,this.plusOne.node.getComponent(d).play("plusOne")):(this.getComponent(u).playOneShot(this.die),this.getComponent(c).off(y.BEGIN_CONTACT,this.onBeginContact,this),a.off(h.EventType.TOUCH_START,this.onTouchStart,this),this.node.position.y<=-190?this.getComponent(d).play("bird_fall-1"):this.node.position.y<=-100&&this.node.position.y>-190?this.getComponent(d).play("bird_fall-2"):this.node.position.y<=-50&&this.node.position.y>-100?this.getComponent(d).play("bird_fall-3"):this.node.position.y<=0&&this.node.position.y>-50?this.getComponent(d).play("bird_fall-4"):this.node.position.y<=50&&this.node.position.y>0?this.getComponent(d).play("bird_fall-5"):this.node.position.y<=100&&this.node.position.y>50?this.getComponent(d).play("bird_fall-6"):this.node.position.y<=150&&this.node.position.y>100?this.getComponent(d).play("bird_fall-7"):this.node.position.y<=200&&this.node.position.y>150?this.getComponent(d).play("bird_fall-8"):this.node.position.y>200&&this.getComponent(d).play("bird_fall-9"),C.Instance.node.active=!0)},s.onTouchStart=function(t){this.vy=200,this.getComponent(d).play("bird_flap"),this.getComponent(u).playOneShot(this.getComponent(u).clip)},s.update=function(t){0==b.Instance.node.active&&0==C.Instance.node.active&&(this.node.translate(new f(0,this.vy*t,0)),this.vy-=this.gravity*t)},e}(g)).Instance=void 0,A=e((B=z).prototype,"labelScore",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(B.prototype,"plusOne",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(B.prototype,"point",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(B.prototype,"die",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=B))||O));s._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./NewComponent.ts","./Background.ts","./Bird.ts","./Pipe.ts","./PipeManager.ts","./ResultScreen.ts","./StartScreen.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NewComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;e._RF.push({},"61e67MQoOZM7pxEFgtQ6yhs","NewComponent",void 0);var p=o.ccclass;o.property,t("NewComponent",p("NewComponent")(c=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){},e}(r))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StartScreen.ts","./ResultScreen.ts"],(function(e){var t,n,c,r,o,i,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,c=e._decorator,r=e.Vec3,o=e.Component},function(e){i=e.StartScreen},function(e){s=e.ResultScreen}],execute:function(){var a;n._RF.push({},"9c8f4HbMWBFtJn7s3ZKcHU6","Pipe",void 0);var u=c.ccclass;c.property,e("Pipe",u("Pipe")(a=function(e){function n(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).wBG=288,t.wPipe=104,t}t(n,e);var c=n.prototype;return c.start=function(){},c.update=function(e){0==i.Instance.node.active&&0==s.Instance.node.active&&this.node.translate(new r(-100*e,0,0))},n}(o))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/PipeManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StartScreen.ts","./ResultScreen.ts"],(function(e){var t,i,r,n,a,s,o,p,c,u,h,l,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,o=e.Prefab,p=e.randomRangeInt,c=e.instantiate,u=e.Vec3,h=e.Component},function(e){l=e.StartScreen},function(e){f=e.ResultScreen}],execute:function(){var P,d,g,v,y;a._RF.push({},"8d49dvhonhIqpgrosqGHIL6","PipeManager",void 0);var m=s.ccclass,b=s.property;e("PipeManager",(P=m("PipeManager"),d=b({type:o}),P((y=t((v=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).wBG=288,t.wPipe=104,r(t,"prefabGroupPipe",y,n(t)),t.timer=0,t.pause=p(5,11),t.stop=p(1,3),t}i(t,e);var a=t.prototype;return a.start=function(){this.createPipe(),this.timer=0},a.update=function(e){0==l.Instance.node.active&&0==f.Instance.node.active&&(this.timer+=e,console.log(this.stop),this.timer>=this.pause&&(this.timer-=this.pause,this.createPipe(),this.pause>this.stop&&(this.pause-=.25)))},a.createPipe=function(){var e=c(this.prefabGroupPipe);e.setPosition(new u(this.wBG/2+this.wPipe,p(240,340),0)),e.setParent(this.node)},t}(h)).prototype,"prefabGroupPipe",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=v))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/ResultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,c,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,c=e.director,o=e.Component}],execute:function(){var s,a;n._RF.push({},"a76beFIgNZGQKx3beO2WpTt","ResultScreen",void 0);var i=r.ccclass;r.property,e("ResultScreen",i("ResultScreen")(((a=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).z=void 0,t}t(n,e);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!1},r.update=function(e){},r.doRestart=function(e,t){c.loadScene("Gameplay")},n}(o)).Instance=void 0,s=a))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/StartScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bird.ts"],(function(t){var n,e,r,c,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,c=t.Component},function(t){o=t.Bird}],execute:function(){var i,a;e._RF.push({},"b22fdj2XltK8JC5AFOVxy+E","StartScreen",void 0);var s=r.ccclass;r.property,t("StartScreen",s("StartScreen")(((a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.start=function(){e.Instance=this},r.update=function(t){},r.clickStart=function(t,n){this.node.active=!1,o.Instance.node.active=!0},e}(c)).Instance=void 0,i=a))||i);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});