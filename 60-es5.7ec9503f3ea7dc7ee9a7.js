!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{eXax:function(e,i,o){"use strict";o.r(i),o.d(i,"FormfieldExamplesModule",(function(){return _e}));var r,a,l=o("6c6m"),c=o("9Sri"),b=o("0FLW"),u=o("ydLu"),s=o("pT7h"),p=o("B79f"),d=o("EM62"),f=o("+K2D"),m=o("6DsR"),x=o("xRDo"),g=o("PCf9"),h=o("XEMv"),v=o("2LE5"),T=o("VKQk"),S=o("qH3y"),y=o("6+vd"),L=o("XiE1"),w=o("/Cb9"),C=o("nIj0"),M=o("CFfK"),O=o("rULK"),F=o("TdcJ"),k=((a=function e(){t(this,e),this.currentDate=null}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d.Hb({type:a,selectors:[["ng-component"]],decls:34,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["appearance","outline","nxLabel","Prefilled field","nxFloatLabel","always"],["nxInput","","value","prefilled"],["nxLabel","Readonly field","appearance","outline","nxFloatLabel","always"],["nxInput","","readonly","","value","I am readonly"],["nxFormfieldSuffix",""],["nxFormfieldAppendix","","name","info-circle-o"],["nxLabel","Dropdown Label","appearance","outline","nxFloatLabel","always"],["nxValue","BMW"],["nxValue","Audi"],["nxValue","Volvo"],["nxValue","Mini"],["nxLabel","Label","appearance","outline","nxFloatLabel","always"],["nxInput","","disabled","","value","Disabled input"],["nxLabel","Birthday","appearance","outline","nxFloatLabel","always"],["nxDatefield","","nxInput","",3,"nxDatepicker","ngModel","ngModelChange"],["nxFormfieldSuffix","",3,"for"],["myDatepicker",""],["nxFormfieldHint",""],["nxLabel","Textarea Label","appearance","outline","nxFloatLabel","always"],["nxInput","","type","text"]],template:function(e,n){if(1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"nx-formfield",3),d.Ob(4,"input",4),d.Sb(),d.Sb(),d.Tb(5,"div",2),d.Tb(6,"nx-formfield",5),d.Ob(7,"input",6),d.Tb(8,"span",7),d.Jc(9," Euro "),d.Sb(),d.Ob(10,"nx-icon",8),d.Sb(),d.Sb(),d.Sb(),d.Tb(11,"div",1),d.Tb(12,"div",2),d.Tb(13,"nx-formfield",9),d.Tb(14,"nx-dropdown"),d.Ob(15,"nx-dropdown-item",10),d.Ob(16,"nx-dropdown-item",11),d.Ob(17,"nx-dropdown-item",12),d.Ob(18,"nx-dropdown-item",13),d.Sb(),d.Sb(),d.Sb(),d.Tb(19,"div",2),d.Tb(20,"nx-formfield",14),d.Ob(21,"input",15),d.Sb(),d.Sb(),d.Sb(),d.Tb(22,"div",1),d.Tb(23,"div",2),d.Tb(24,"nx-formfield",16),d.Tb(25,"input",17),d.ac("ngModelChange",(function(e){return n.currentDate=e})),d.Sb(),d.Ob(26,"nx-datepicker-toggle",18),d.Ob(27,"nx-datepicker",null,19),d.Tb(29,"span",20),d.Jc(30," mm/dd/yyyy "),d.Sb(),d.Sb(),d.Sb(),d.Tb(31,"div",2),d.Tb(32,"nx-formfield",21),d.Ob(33,"textarea",22),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e){var t=d.rc(28);d.Bb(25),d.kc("nxDatepicker",t)("ngModel",n.currentDate),d.Bb(1),d.kc("for",t)}},directives:[f.a,m.a,x.a,g.b,h.b,v.a,T.a,S.a,y.a,L.a,w.a,C.a,C.p,C.s,M.a,O.c,F.a],encapsulation:2}),a),E=((r=function e(){t(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=d.Hb({type:r,selectors:[["ng-component"]],decls:2,vars:0,consts:[["nxLabel","Label"],["nxInput",""]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1),d.Sb())},directives:[g.b,h.b],encapsulation:2}),r),I=o("2kYt");function J(e,n){1&e&&(d.Tb(0,"span"),d.Jc(1," max. 15 characters "),d.Sb())}function N(e,n){if(1&e&&(d.Tb(0,"span"),d.Jc(1),d.Sb()),2&e){d.ec();var t=d.rc(2);d.Bb(1),d.Lc(" ",15-(t.value.length||0)," characters remaining ")}}var H,P,q,A,B,_,D,V,R,W=((H=function e(){t(this,e)}).\u0275fac=function(e){return new(e||H)},H.\u0275cmp=d.Hb({type:H,selectors:[["ng-component"]],decls:6,vars:2,consts:[["nxLabel","Label"],["nxInput","","maxlength","15"],["inputToCount",""],["nxFormfieldHint",""],[4,"ngIf"]],template:function(e,n){if(1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1,2),d.Tb(3,"span",3),d.Hc(4,J,2,0,"span",4),d.Hc(5,N,2,1,"span",4),d.Sb(),d.Sb()),2&e){var t=d.rc(2);d.Bb(4),d.kc("ngIf",0===(null==t.value?null:t.value.length)),d.Bb(1),d.kc("ngIf",t.value.length>0)}},directives:[g.b,h.b,F.a,I.t],encapsulation:2}),H),j=o("ZTXN"),G=o("5XID"),X=o("sg/T"),Y=function e(n,i,o){t(this,e),this.area=n,this.exchange=i,this.subscriber=o},K=((q=function(){function e(n,i,o,r){var a=this;t(this,e),this._focusMonitor=i,this._elementRef=o,this.ngControl=r,this._required=!1,this._disabled=!1,this.stateChanges=new j.a,this.focused=!1,this.errorState=!1,this.controlType="example-tel-input",this.id="example-tel-input-"+e.nextId++,this.describedBy="",this.onChange=function(e){},this.onTouched=function(){},this.parts=n.group({area:[null,[C.y.required,C.y.minLength(3),C.y.maxLength(3)]],exchange:[null,[C.y.required,C.y.minLength(3),C.y.maxLength(3)]],subscriber:[null,[C.y.required,C.y.minLength(4),C.y.maxLength(4)]]}),i.monitor(o,!0).subscribe((function(e){a.focused&&!e&&a.onTouched(),a.focused=!!e,a.stateChanges.next()})),null!=this.ngControl&&(this.ngControl.valueAccessor=this)}return n(e,[{key:"setAriaLabel",value:function(e){throw new Error("Method not implemented.")}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"setDescribedByIds",value:function(e){this.describedBy=e.join(" ")}},{key:"onContainerClick",value:function(e){"input"!==e.target.tagName.toLowerCase()&&this._elementRef.nativeElement.querySelector("input").focus()}},{key:"writeValue",value:function(e){this.value=e}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"_handleInput",value:function(){this.onChange(this.value)}},{key:"empty",get:function(){var e=this.parts.value,n=e.area,t=e.exchange,i=e.subscriber;return!n&&!t&&!i}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty}},{key:"placeholder",get:function(){return this._placeholder},set:function(e){this._placeholder=e,this.stateChanges.next()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(G.b)(e),this.stateChanges.next()}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(G.b)(e),this._disabled?this.parts.disable():this.parts.enable(),this.stateChanges.next()}},{key:"value",get:function(){if(this.parts.valid){var e=this.parts.value,n=e.area,t=e.exchange,i=e.subscriber;return new Y(n,t,i)}return null},set:function(e){var n=e||new Y("","",""),t=n.area,i=n.exchange,o=n.subscriber;this.parts.setValue({area:t,exchange:i,subscriber:o}),this.stateChanges.next()}},{key:"elementRef",get:function(){throw new Error("Method not implemented.")}}]),e}()).nextId=0,q.\u0275fac=function(e){return new(e||q)(d.Nb(C.d),d.Nb(X.g),d.Nb(d.l),d.Nb(C.o,10))},q.\u0275cmp=d.Hb({type:q,selectors:[["nx-custom-tel-input-example"]],hostVars:4,hostBindings:function(e,n){2&e&&(d.Wb("id",n.id),d.Cb("aria-describedby",n.describedBy),d.Fb("example-floating",n.shouldLabelFloat))},inputs:{placeholder:"placeholder",required:"required",disabled:"disabled",value:"value"},features:[d.Ab([{provide:p.c,useExisting:q}])],decls:8,vars:1,consts:[[1,"example-tel-input-container",3,"formGroup"],["formControlName","area","size","3","aria-label","Area code",1,"example-tel-input-element",3,"input"],[1,"example-tel-input-spacer"],["formControlName","exchange","size","3","aria-label","Exchange code",1,"example-tel-input-element",3,"input"],["formControlName","subscriber","size","4","aria-label","Subscriber number",1,"example-tel-input-element",3,"input"]],template:function(e,n){1&e&&(d.Tb(0,"div",0),d.Tb(1,"input",1),d.ac("input",(function(){return n._handleInput()})),d.Sb(),d.Tb(2,"span",2),d.Jc(3,"\u2013"),d.Sb(),d.Tb(4,"input",3),d.ac("input",(function(){return n._handleInput()})),d.Sb(),d.Tb(5,"span",2),d.Jc(6,"\u2013"),d.Sb(),d.Tb(7,"input",4),d.ac("input",(function(){return n._handleInput()})),d.Sb(),d.Sb()),2&e&&d.kc("formGroup",n.parts)},directives:[C.q,C.i,C.a,C.p,C.g],styles:[".example-tel-input-container[_ngcontent-%COMP%]{display:flex}.example-tel-input-element[_ngcontent-%COMP%]{background:none;padding:0;outline:none;font:inherit;text-align:center;border:2px dotted #aaa}.example-tel-input-spacer[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%]{opacity:1}"]}),q),Q=((P=function e(){t(this,e)}).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=d.Hb({type:P,selectors:[["ng-component"]],decls:2,vars:0,consts:[["nxLabel","Phone number","nxFloatLabel","always"]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"nx-custom-tel-input-example"),d.Sb())},directives:[g.b,K],encapsulation:2}),P),z=o("8FrJ"),U=o("tPQ2"),Z=((A=function(){function e(){t(this,e),this.isOptional=""}return n(e,[{key:"addOptionalSuffix",value:function(){this.isOptional=""===this.isOptional?"(Optional)":""}}]),e}()).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=d.Hb({type:A,selectors:[["ng-component"]],decls:10,vars:1,consts:[["nxLabel","Label"],["name","product-heart"],["nxInput",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",3,"click"]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Tb(1,"nx-formfield-label"),d.Jc(2," Favourite Animal "),d.Ob(3,"nx-icon",1),d.Jc(4),d.Sb(),d.Ob(5,"input",2),d.Tb(6,"span",3),d.Jc(7," some additional information "),d.Sb(),d.Sb(),d.Tb(8,"button",4),d.ac("click",(function(){return n.addOptionalSuffix()})),d.Jc(9," Toggle Optional Suffix "),d.Sb()),2&e&&(d.Bb(4),d.Lc(" ",n.isOptional,""))},directives:[g.b,z.a,T.a,h.b,F.a,U.a],encapsulation:2}),A),$=o("yUsN"),ee=o("MXpF"),ne=["exampleErrorNgModel"],te=["exampleErrorNgModelHint"],ie=((B=function(){function e(){t(this,e)}return n(e,[{key:"ngAfterContentInit",value:function(){this.exampleErrorNgModel.ngControl.control.markAsTouched(),this.exampleErrorNgModelHint.ngControl.control.markAsTouched()}}]),e}()).\u0275fac=function(e){return new(e||B)},B.\u0275cmp=d.Hb({type:B,selectors:[["ng-component"]],viewQuery:function(e,n){var t;1&e&&(d.Cc(ne,!0),d.Cc(te,!0)),2&e&&(d.qc(t=d.bc())&&(n.exampleErrorNgModel=t.first),d.qc(t=d.bc())&&(n.exampleErrorNgModelHint=t.first))},decls:20,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6,6"],["nxLabel","Label"],["required","","nxInput","",3,"ngModel","ngModelChange"],["exampleErrorNgModel","nxInput"],["nxFormfieldError",""],["exampleErrorNgModelHint","nxInput"],["nxFormfieldHint",""]],template:function(e,n){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"nx-formfield",3),d.Tb(4,"input",4,5),d.ac("ngModelChange",(function(e){return n.valueSupplementError=e})),d.Sb(),d.Tb(6,"nx-error",6),d.Tb(7,"strong"),d.Jc(8," Please note: "),d.Sb(),d.Jc(9," you have to fill out this field to continue. "),d.Sb(),d.Sb(),d.Sb(),d.Tb(10,"div",2),d.Tb(11,"nx-formfield",3),d.Tb(12,"input",4,7),d.ac("ngModelChange",(function(e){return n.valueSupplementErrorHint=e})),d.Sb(),d.Tb(14,"span",8),d.Jc(15," some additional information "),d.Sb(),d.Tb(16,"nx-error",6),d.Tb(17,"strong"),d.Jc(18," Please note: "),d.Sb(),d.Jc(19," you have to fill out this field to continue. "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(4),d.kc("ngModel",n.valueSupplementError),d.Bb(8),d.kc("ngModel",n.valueSupplementErrorHint))},directives:[f.a,m.a,x.a,g.b,h.b,C.a,C.w,C.p,C.s,$.b,ee.a,F.a],encapsulation:2}),B),oe=["exampleErrorNgModel"],re=["exampleErrorWithHintNgModel"],ae=((D=function(){function e(){t(this,e)}return n(e,[{key:"ngAfterContentInit",value:function(){this.exampleErrorNgModel.ngControl.control.markAsTouched(),this.exampleErrorWithHintNgModel.ngControl.control.markAsTouched()}}]),e}()).\u0275fac=function(e){return new(e||D)},D.\u0275cmp=d.Hb({type:D,selectors:[["ng-component"]],viewQuery:function(e,n){var t;1&e&&(d.Cc(oe,!0),d.Cc(re,!0)),2&e&&(d.qc(t=d.bc())&&(n.exampleErrorNgModel=t.first),d.qc(t=d.bc())&&(n.exampleErrorWithHintNgModel=t.first))},decls:16,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12,12,6,6"],["nxLabel","Label","appearance","outline","nxFloatLabel","always"],["required","","nxInput","",3,"ngModel","ngModelChange"],["exampleErrorNgModel","nxInput"],["appearance","text","nxFormfieldError",""],["exampleErrorWithHintNgModel","nxInput"],["nxFormfieldHint",""]],template:function(e,n){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"nx-formfield",3),d.Tb(4,"input",4,5),d.ac("ngModelChange",(function(e){return n.valueError=e})),d.Sb(),d.Tb(6,"nx-error",6),d.Jc(7," Please enter your name! "),d.Sb(),d.Sb(),d.Sb(),d.Tb(8,"div",2),d.Tb(9,"nx-formfield",3),d.Tb(10,"input",4,7),d.ac("ngModelChange",(function(e){return n.valueErrorWithHint=e})),d.Sb(),d.Tb(12,"span",8),d.Jc(13," some additional information "),d.Sb(),d.Tb(14,"nx-error",6),d.Jc(15," Please enter your name! "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(4),d.kc("ngModel",n.valueError),d.Bb(6),d.kc("ngModel",n.valueErrorWithHint))},directives:[f.a,m.a,x.a,g.b,h.b,C.a,C.w,C.p,C.s,$.b,ee.a,F.a],encapsulation:2}),D),le=((_=function e(){t(this,e)}).\u0275fac=function(e){return new(e||_)},_.\u0275cmp=d.Hb({type:_,selectors:[["ng-component"]],decls:14,vars:0,consts:[["nxLabel","Label","nxFloatLabel","always"],["nxInput",""],["nxFormfieldHint",""],["nxLabel","Label"],["nxInput","","disabled",""],["nxInput","","disabled","","value","Prefilled with content"]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1),d.Tb(2,"span",2),d.Jc(3," some additional information "),d.Sb(),d.Sb(),d.Tb(4,"h3"),d.Jc(5,"Disabled"),d.Sb(),d.Tb(6,"nx-formfield",3),d.Ob(7,"input",4),d.Tb(8,"span",2),d.Jc(9," some additional information "),d.Sb(),d.Sb(),d.Tb(10,"nx-formfield",3),d.Ob(11,"input",5),d.Tb(12,"span",2),d.Jc(13," some additional information "),d.Sb(),d.Sb())},directives:[g.b,h.b,F.a],encapsulation:2}),_),ce=o("I5hw"),be=["errorNgModel"],ue={appearance:"outline",nxFloatLabel:"always"},se={appearance:"text"},pe=((V=function(){function e(){t(this,e)}return n(e,[{key:"ngAfterContentInit",value:function(){this.errorNgModel.ngControl.control.markAsTouched()}}]),e}()).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=d.Hb({type:V,selectors:[["ng-component"]],viewQuery:function(e,n){var t;1&e&&d.Cc(be,!0),2&e&&d.qc(t=d.bc())&&(n.errorNgModel=t.first)},features:[d.Ab([{provide:p.a,useValue:ue},{provide:ce.a,useValue:se}])],decls:20,vars:1,consts:[["nxLabel","Label"],["nxInput","","value","prefilled"],["nxInput",""],["nxFormfieldSuffix",""],["nxFormfieldAppendix","","name","info-circle-o"],["nxLabel","Formfield with error"],["nxInput","","required","",3,"ngModel","ngModelChange"],["errorNgModel","nxInput"],["nxFormfieldError",""],["nxLabel","Override appearance","appearance","auto"],["nxLabel","Override appearance and nxFloatLabel","appearance","auto","nxFloatLabel","auto"]],template:function(e,n){1&e&&(d.Tb(0,"h3"),d.Jc(1,"Use default global settings"),d.Sb(),d.Tb(2,"nx-formfield",0),d.Ob(3,"input",1),d.Sb(),d.Tb(4,"nx-formfield",0),d.Ob(5,"input",2),d.Tb(6,"span",3),d.Jc(7," Euro "),d.Sb(),d.Ob(8,"nx-icon",4),d.Sb(),d.Tb(9,"nx-formfield",5),d.Tb(10,"input",6,7),d.ac("ngModelChange",(function(e){return n.modelValue=e})),d.Sb(),d.Tb(12,"nx-error",8),d.Jc(13," This is a mandatory field "),d.Sb(),d.Sb(),d.Tb(14,"h3"),d.Jc(15,"Override default global settings"),d.Sb(),d.Tb(16,"nx-formfield",9),d.Ob(17,"input",2),d.Sb(),d.Tb(18,"nx-formfield",10),d.Ob(19,"input",2),d.Sb()),2&e&&(d.Bb(10),d.kc("ngModel",n.modelValue))},directives:[g.b,h.b,v.a,T.a,S.a,C.a,C.w,C.p,C.s,$.b,ee.a],encapsulation:2}),V),de=o("kMq3"),fe=o("dWOj"),me=((R=function e(){t(this,e)}).\u0275fac=function(e){return new(e||R)},R.\u0275cmp=d.Hb({type:R,selectors:[["ng-component"]],decls:11,vars:1,consts:[["nxLabel","Label"],["nxInput",""],["nxFormfieldHint",""],["nxFormfieldAppendix",""],["nxPopoverDirection","top","nxPopoverTrigger","hover",3,"nxPopoverTriggerFor"],["name","info-circle-o"],["popoverAppendixExample",""],[2,"max-width","300px"]],template:function(e,n){if(1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1),d.Tb(2,"span",2),d.Jc(3," some additional information "),d.Sb(),d.Tb(4,"span",3),d.Tb(5,"a",4),d.Ob(6,"nx-icon",5),d.Sb(),d.Sb(),d.Sb(),d.Tb(7,"nx-popover",null,6),d.Tb(9,"div",7),d.Jc(10," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nostrum. Obcaecati cupiditate numquam, fugit illo incidunt molestiae ipsam perferendis officia accusamus. Enim magnam recusandae velit accusamus ipsa. Nemo, eius exercitationem? "),d.Sb(),d.Sb()),2&e){var t=d.rc(8);d.Bb(5),d.kc("nxPopoverTriggerFor",t)}},directives:[g.b,h.b,F.a,S.a,de.a,T.a,fe.a],encapsulation:2}),R);function xe(e,n){1&e&&(d.Tb(0,"nx-error",3),d.Jc(1," This field is required. "),d.Sb())}function ge(e,n){1&e&&(d.Tb(0,"nx-error",3),d.Jc(1," Please enter a valid email address. "),d.Sb())}var he,ve,Te,Se,ye,Le,we,Ce,Me,Oe=((ve=function e(){t(this,e),this.emailFormControl=new C.e("",[C.y.required,C.y.email])}).\u0275fac=function(e){return new(e||ve)},ve.\u0275cmp=d.Hb({type:ve,selectors:[["ng-component"]],decls:5,vars:3,consts:[["nxLabel","Email"],["nxInput","",3,"formControl"],["nxFormfieldError","",4,"ngIf"],["nxFormfieldError",""]],template:function(e,n){1&e&&(d.Tb(0,"form"),d.Tb(1,"nx-formfield",0),d.Ob(2,"input",1),d.Hc(3,xe,2,0,"nx-error",2),d.Hc(4,ge,2,0,"nx-error",2),d.Sb(),d.Sb()),2&e&&(d.Bb(2),d.kc("formControl",n.emailFormControl),d.Bb(1),d.kc("ngIf",n.emailFormControl.hasError("required")),d.Bb(1),d.kc("ngIf",n.emailFormControl.hasError("email")))},directives:[C.A,C.q,C.r,g.b,h.b,C.a,C.p,C.f,I.t,$.b,ee.a],encapsulation:2}),ve),Fe=((he=function e(){t(this,e)}).\u0275fac=function(e){return new(e||he)},he.\u0275cmp=d.Hb({type:he,selectors:[["ng-component"]],decls:13,vars:0,consts:[[1,"docs-inverse-container"],["nxLabel","Label","nxStyle","negative"],["nxInput",""],["nxFormfieldHint",""],["nxInput","","value","Prefilled with content"],["nxLabel","Disabled","nxStyle","negative"],["disabled","","nxInput",""]],template:function(e,n){1&e&&(d.Tb(0,"div",0),d.Tb(1,"nx-formfield",1),d.Ob(2,"input",2),d.Tb(3,"span",3),d.Jc(4," some additional information "),d.Sb(),d.Sb(),d.Tb(5,"nx-formfield",1),d.Ob(6,"input",4),d.Tb(7,"span",3),d.Jc(8," some additional information "),d.Sb(),d.Sb(),d.Tb(9,"nx-formfield",5),d.Ob(10,"input",6),d.Tb(11,"span",3),d.Jc(12," some additional information "),d.Sb(),d.Sb(),d.Sb())},directives:[g.b,h.b,F.a],encapsulation:2}),he),ke=o("jyNi"),Ee=((Se=function e(){t(this,e)}).\u0275fac=function(e){return new(e||Se)},Se.\u0275cmp=d.Hb({type:Se,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxLabel","Label"],["nxInput","",3,"ngModel","ngModelChange"],["nxContext","info","nxFormfieldNote",""]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Tb(1,"input",1),d.ac("ngModelChange",(function(e){return n.valueSupplementNote=e})),d.Sb(),d.Tb(2,"nx-message",2),d.Jc(3," Ensure that you enter your real name. "),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.kc("ngModel",n.valueSupplementNote))},directives:[g.b,h.b,C.a,C.p,C.s,ke.a],encapsulation:2}),Se),Ie=((Te=function e(){t(this,e)}).\u0275fac=function(e){return new(e||Te)},Te.\u0275cmp=d.Hb({type:Te,selectors:[["ng-component"]],decls:6,vars:1,consts:[["nxLabel","Label"],["required","","nxInput","",3,"ngModel","ngModelChange"],["nxContext","info","nxFormfieldNote",""],["nxFormfieldError",""]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Tb(1,"input",1),d.ac("ngModelChange",(function(e){return n.valueSupplementErrorAndNote=e})),d.Sb(),d.Tb(2,"nx-message",2),d.Jc(3," Ensure that you enter your real name. "),d.Sb(),d.Tb(4,"nx-error",3),d.Jc(5," Your real name is missing "),d.Sb(),d.Sb()),2&e&&(d.Bb(1),d.kc("ngModel",n.valueSupplementErrorAndNote))},directives:[g.b,h.b,C.a,C.w,C.p,C.s,ke.a,$.b,ee.a],encapsulation:2}),Te),Je=o("GdFB"),Ne=((Le=function e(){t(this,e)}).\u0275fac=function(e){return new(e||Le)},Le.\u0275cmp=d.Hb({type:Le,selectors:[["ng-component"]],decls:8,vars:2,consts:[["nxLabel","Password"],["required","","nxInput","","type","password",3,"ngModel","ngModelChange"],["testInput",""],["ariaLabel","Your custom show password label","nxFormfieldSuffix","",3,"control"],["nxFormfieldError",""]],template:function(e,n){if(1&e&&(d.Tb(0,"nx-formfield",0),d.Tb(1,"input",1,2),d.ac("ngModelChange",(function(e){return n.inputValue=e})),d.Sb(),d.Ob(3,"nx-password-toggle",3),d.Tb(4,"nx-error",4),d.Tb(5,"b"),d.Jc(6,"Please note: "),d.Sb(),d.Jc(7," you have to fill in your password to continue. "),d.Sb(),d.Sb()),2&e){var t=d.rc(2);d.Bb(1),d.kc("ngModel",n.inputValue),d.Bb(2),d.kc("control",t)}},directives:[g.b,h.b,C.a,C.w,C.p,C.s,Je.a,v.a,$.b,ee.a],encapsulation:2}),Le),He=((ye=function e(){t(this,e)}).\u0275fac=function(e){return new(e||ye)},ye.\u0275cmp=d.Hb({type:ye,selectors:[["ng-component"]],decls:4,vars:0,consts:[["nxLabel","Label"],["nxInput","","type","text","placeholder","This is a placeholder"],["appearance","outline","nxLabel","Label","nxFloatLabel","always"]],template:function(e,n){1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1),d.Sb(),d.Tb(2,"nx-formfield",2),d.Ob(3,"input",1),d.Sb())},directives:[g.b,h.b],encapsulation:2}),ye),Pe=o("PMum"),qe=((Ce=function e(){t(this,e)}).\u0275fac=function(e){return new(e||Ce)},Ce.\u0275cmp=d.Hb({type:Ce,selectors:[["ng-component"]],decls:17,vars:1,consts:[["nxLabel","Phone number (Prefix)"],["nxInput","","nxAriaLabel","Phone number with prefix +49"],["nxFormfieldPrefix",""],["nxLabel","Amount of damage (Postfix)"],["nxInput","","type","number","nxAriaLabel","Amount of Damage (Euro)"],["nxFormfieldSuffix",""],["nxLabel","Your name (Appendix)"],["nxInput",""],["nxFormfieldAppendix",""],["nxPopoverDirection","top","nxPopoverTrigger","hover",3,"nxPopoverTriggerFor"],["name","info-circle-o"],["popoverAppendixExample",""],[2,"max-width","300px"]],template:function(e,n){if(1&e&&(d.Tb(0,"nx-formfield",0),d.Ob(1,"input",1),d.Tb(2,"span",2),d.Jc(3," +49 "),d.Sb(),d.Sb(),d.Tb(4,"nx-formfield",3),d.Ob(5,"input",4),d.Tb(6,"span",5),d.Jc(7," Euro "),d.Sb(),d.Sb(),d.Tb(8,"nx-formfield",6),d.Ob(9,"input",7),d.Tb(10,"span",8),d.Tb(11,"a",9),d.Ob(12,"nx-icon",10),d.Sb(),d.Sb(),d.Sb(),d.Tb(13,"nx-popover",null,11),d.Tb(15,"div",12),d.Jc(16," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nostrum. Obcaecati cupiditate numquam, fugit illo incidunt molestiae ipsam perferendis officia accusamus. Enim magnam recusandae velit accusamus ipsa. Nemo, eius exercitationem? "),d.Sb(),d.Sb()),2&e){var t=d.rc(14);d.Bb(11),d.kc("nxPopoverTriggerFor",t)}},directives:[g.b,h.b,Pe.a,v.a,S.a,de.a,T.a,fe.a],styles:["[nxFormfieldAppendix][_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),Ce),Ae=((we=function e(){t(this,e),this.formGroup=(new C.d).group({firstName:["",C.y.required],lastName:["",C.y.required],items:["",C.y.required],email:["",C.y.required]})}).\u0275fac=function(e){return new(e||we)},we.\u0275cmp=d.Hb({type:we,selectors:[["ng-component"]],decls:41,vars:2,consts:[[1,"form-example",3,"formGroup"],["nxLayout","grid"],["nxRow",""],["nxCol","12,6"],["nxLabel","First Name"],["nxInput","","formControlName","firstName"],["nxFormfieldError",""],["nxLabel","Number of items"],["formControlName","items"],["nxValue","1"],["nxValue","2"],["nxValue","3"],["nxLabel","Last Name"],["nxInput","","formControlName","lastName"],["nxLabel","E-Mail"],["nxInput","","formControlName","email"],["nxFormfieldAppendix","","name","info-circle-o","nxPopoverTrigger","hover",3,"nxPopoverTriggerFor"],["nxButton","","type","submit"],["popoverEmail",""],[2,"max-width","200px"]],template:function(e,n){if(1&e&&(d.Tb(0,"form",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"div",3),d.Tb(4,"nx-formfield",4),d.Ob(5,"input",5),d.Tb(6,"nx-error",6),d.Tb(7,"strong"),d.Jc(8,"Please note:"),d.Sb(),d.Jc(9," this field is required! "),d.Sb(),d.Sb(),d.Sb(),d.Tb(10,"div",3),d.Tb(11,"nx-formfield",7),d.Tb(12,"nx-dropdown",8),d.Tb(13,"nx-dropdown-item",9),d.Jc(14,"1"),d.Sb(),d.Tb(15,"nx-dropdown-item",10),d.Jc(16,"2"),d.Sb(),d.Tb(17,"nx-dropdown-item",11),d.Jc(18,"3"),d.Sb(),d.Sb(),d.Tb(19,"nx-error",6),d.Jc(20," Please select an option. "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(21,"div",2),d.Tb(22,"div",3),d.Tb(23,"nx-formfield",12),d.Ob(24,"input",13),d.Tb(25,"nx-error",6),d.Jc(26," Your name is missing. "),d.Sb(),d.Sb(),d.Sb(),d.Tb(27,"div",3),d.Tb(28,"nx-formfield",14),d.Ob(29,"input",15),d.Ob(30,"nx-icon",16),d.Tb(31,"nx-error",6),d.Jc(32," Your email is missing. "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(33,"div",2),d.Tb(34,"div",3),d.Tb(35,"button",17),d.Jc(36,"Submit"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(37,"nx-popover",null,18),d.Tb(39,"div",19),d.Jc(40," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nostrum. Obcaecati cupiditate numquam, fugit illo incidunt molestiae ipsam perferendis officia accusamus. Enim magnam recusandae velit accusamus ipsa. Nemo, eius exercitationem? "),d.Sb(),d.Sb()),2&e){var t=d.rc(38);d.kc("formGroup",n.formGroup),d.Bb(30),d.kc("nxPopoverTriggerFor",t)}},directives:[C.A,C.q,C.i,f.a,m.a,x.a,g.b,h.b,C.a,C.p,C.g,$.b,ee.a,y.a,L.a,T.a,S.a,de.a,U.a,fe.a],encapsulation:2}),we),Be=o("t3RA"),_e=((Me=function(){function e(){t(this,e)}return n(e,null,[{key:"components",value:function(){return{"formfield-appearance":k,"formfield-basic":E,"formfield-character-count":W,"formfield-custom":Q,"formfield-custom-label":Z,"formfield-custom-tel-input":K,"formfield-error":ie,"formfield-expert-error":ae,"formfield-floating":le,"formfield-global":pe,"formfield-hint":me,"formfield-multiple-errors":Oe,"formfield-negative":Fe,"formfield-note":Ee,"formfield-note-and-error":Ie,"formfield-password-visibility":Ne,"formfield-placeholder":He,"formfield-prefix-suffix-appendix":qe,"formfield-simple-form":Ae}}}]),e}()).\u0275mod=d.Lb({type:Me}),Me.\u0275inj=d.Kb({factory:function(e){return new(e||Me)},imports:[[p.e,s.a,u.b,b.c,c.f,l.b,c.h,Be.a]]}),Me)}}])}();