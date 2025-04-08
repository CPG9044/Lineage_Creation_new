import"./chunk-ZNQI5DA7.js";import{L as o,u as s}from"./chunk-CEQZZ5XL.js";import{a as h,c as u,d as l,f as a}from"./chunk-H6HTD5N2.js";import{j as n}from"./chunk-KUCED5OY.js";var c=":host{color:var(--huk-color);display:block;font-family:var(--huk-font-family);font-size:var(--huk-font-size);font-style:var(--huk-font-style);line-height:var(--huk-line-height)}",d=c,k=(()=>{let r=class{constructor(t){h(this,t),this.hukError=a(this,"hukError",7),this.hukToastDismissedEvent=a(this,"hukToastDismissedEvent",7),this.iDuration=0,this.iShowCloseButton=!1,this.handleOnDismiss=i=>{let e="";switch(i){case"cancel":e="User Cancelled.";break;case"timeout":e="Timeout Occurred.";break}this.hukToastDismissedEvent.emit({dismissReason:e})},this.presentToast=()=>n(this,null,function*(){this.handleOnDismiss("")}),this.closeButtonText=void 0,this.cssClass=void 0,this.duration=0,this.message=void 0,this.position=s.Top,this.showCloseButton=!1}validateDuration(t){if(t){if(typeof t=="number")this.iDuration=t;else if(typeof t=="string"&&t!==""&&t.trim().length>0)try{this.iDuration=parseInt(t),isNaN(this.iDuration)&&o(this,"Invalid input for property duration.","component")}catch(i){o(this,"Error occurred during parsing."+i.message,"component")}this.iDuration===0&&!this.iShowCloseButton?o(this,"The duration should be greater than 0 if showCloseButton option not set to true.","component"):this.iDuration=this.iDuration*1e3}}positionChangeHandler(t){this.iPosition=this.verifyPosition(t?.toLowerCase())}validateShowCloseButton(t){this.iShowCloseButton=t}connectedCallback(){var t;this.iPosition=this.verifyPosition((t=this.position)===null||t===void 0?void 0:t.toLowerCase())}componentWillLoad(){this.validateShowCloseButton(this.showCloseButton),this.validateDuration(this.duration)}displayToast(){return n(this,null,function*(){yield this.presentToast()})}render(){return u(l,{key:"115b5f3836f6c4e1a2b7f97982a367dcbb04cbd0"})}verifyPosition(t){switch(t){case s.Bottom:case s.Middle:case s.Top:return t;default:return o(this,"Toast position set incorrectly. Defaulted to top.","component"),s.Top}}static get watchers(){return{duration:["validateDuration"],position:["positionChangeHandler"],showCloseButton:["validateShowCloseButton"]}}};return r.style=d,r})();export{k as huk_toast};
