(self["webpackChunkjimmy_school"]=self["webpackChunkjimmy_school"]||[]).push([[993],{7424:function(t,e,i){
/*!
  * Bootstrap modal.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4072),i(9286),i(8737),i(1810),i(5695),i(1358),i(744),i(1127))})(0,(function(t,e,i,s,l,a,o,n){"use strict";const d=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},c=d(e),r=d(i),u=d(s),h=d(l),m=d(a),p=d(o),_="modal",g="bs.modal",b=`.${g}`,f=".data-api",w="Escape",y=`hide${b}`,k=`hidePrevented${b}`,v=`hidden${b}`,A=`show${b}`,D=`shown${b}`,x=`resize${b}`,U=`click.dismiss${b}`,$=`keydown.dismiss${b}`,C=`click${b}${f}`,T="modal-open",M="fade",L="show",S="modal-static",B=".modal.show",E=".modal-dialog",j=".modal-body",z='[data-bs-toggle="modal"]',N={backdrop:!0,keyboard:!0,focus:!0},P={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class V extends h.default{constructor(t,e){super(t,e),this._dialog=r.default.findOne(E,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new u.default,this._addEventListeners()}static get Default(){return N}static get DefaultType(){return P}static get NAME(){return _}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=c.default.trigger(this._element,A,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(T),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=c.default.trigger(this._element,y);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(L),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])c.default.off(t,b);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new p.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=r.default.findOne(j,this._dialog);i&&(i.scrollTop=0),t.reflow(this._element),this._element.classList.add(L);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.default.trigger(this._element,D,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){c.default.on(this._element,$,(t=>{if(t.key===w)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),c.default.on(window,x,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),c.default.on(this._element,U,(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(T),this._resetAdjustments(),this._scrollBar.reset(),c.default.trigger(this._element,v)}))}_isAnimated(){return this._element.classList.contains(M)}_triggerBackdropTransition(){const t=c.default.trigger(this._element,k);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(S)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(S),this._queueCallback((()=>{this._element.classList.remove(S),this._queueCallback((()=>{this._element.style.overflowY=i}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=`${i}px`}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=`${i}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=V.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return c.default.on(document,C,z,(function(e){const i=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),c.default.one(i,A,(e=>{e.defaultPrevented||c.default.one(i,v,(()=>{t.isVisible(this)&&this.focus()}))}));const s=r.default.findOne(B);s&&V.getInstance(s).hide();const l=V.getOrCreateInstance(i);l.toggle(this)})),n.enableDismissTrigger(V),t.defineJQueryPlugin(V),V}))},8993:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Yt}});var s=i(6252),l=i(3577);const a={class:"w-100 p-4"},o={class:"mb-5"},n={class:"d-flex align-items-center justify-content-between"},d=(0,s._)("h2",null,"文章列表",-1),c=(0,s._)("i",{class:"fa-solid fa-plus me-2"},null,-1),r=(0,s.Uk)("新增文章 "),u=[c,r],h=(0,s._)("label",{for:"inputState",class:"form-label"},[(0,s._)("p",{class:"d-none"},"State"),(0,s._)("select",{id:"inputState",class:"form-select rounded-3 p-2 px-3"},[(0,s._)("option",{selected:""},"新->舊..."),(0,s._)("option",null,"按類別")])],-1),m={class:"table table-striped table-hover"},p=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"分類"),(0,s._)("th",{scope:"col"},"標題"),(0,s._)("th",{scope:"col"},"類型"),(0,s._)("th",{scope:"col"},"日期"),(0,s._)("th",{scope:"col"},"啟用"),(0,s._)("th",{scope:"col"},"刪除"),(0,s._)("th",{scope:"col"},"修改")])],-1),_={scope:"row"},g={key:0},b=(0,s._)("i",{class:"far fa-check-square text-success h3"},null,-1),f=[b],w={key:1},y=(0,s._)("i",{class:"far fa-times-circle h3 text-warning"},null,-1),k=[y],v=["onClick"],A=(0,s._)("i",{class:"fas fa-trash-alt"},null,-1),D=[A],x=["onClick"],U=(0,s._)("i",{class:"fas fa-pen"},null,-1),$=[U];function C(t,e,i,c,r,b){const y=(0,s.up)("AddEdit"),A=(0,s.up)("CheckDelete");return(0,s.wg)(),(0,s.iD)("section",a,[(0,s._)("section",o,[(0,s._)("div",n,[d,(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-lg rounded-3",onClick:e[0]||(e[0]=t=>b.openModal(!0))},u),h])]),(0,s._)("section",null,[(0,s._)("table",m,[p,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.articles,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("th",_,(0,l.zw)(t.description),1),(0,s._)("td",null,(0,l.zw)(t.title),1),(0,s._)("td",null,(0,l.zw)(t.author),1),(0,s._)("td",null,(0,l.zw)(t.create_at),1),t.isPublic?((0,s.wg)(),(0,s.iD)("td",g,f)):((0,s.wg)(),(0,s.iD)("td",w,k)),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>b.checkDelete(t)},D,8,v)]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:e=>b.getArticle(t.id)},$,8,x)])])))),128))])])]),(0,s.Wm)(y,{ref:"addedit",isNew:r.isNew,article:r.article,onRender:b.getArticles},null,8,["isNew","article","onRender"]),(0,s.Wm)(A,{product:r.article,onDelete:b.deleteArticle,loading:r.loadingStatus,ref:"check"},null,8,["product","onDelete","loading"])])}var T=i(9963);const M={id:"productModal",ref:"articleModal",class:"modal fade","data-bs-keyboard":"false","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},L={class:"modal-dialog modal-dialog-centered modal-xl"},S={class:"modal-content border-0 rounded-3"},B={class:"modal-header"},E={id:"productModalLabel",class:"modal-title"},j={key:0},z={key:1},N=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),P={class:"modal-body"},V={class:"row"},R={class:"col-sm-4"},I={class:"form-group mb-4"},H={for:"image"},q=(0,s.Uk)("主要圖片 "),O=["src"],Y=(0,s._)("div",{class:"mb-1"},"多圖新增",-1),Z={key:0},F={class:"form-group"},W={for:"imageUrl"},K=(0,s.Uk)("圖片網址 "),Q=["onUpdate:modelValue"],J=["src"],G={key:0},X={key:1},tt={key:1},et={class:"col-sm-8"},it={class:"form-group mb-3"},st={for:"title"},lt=(0,s.Uk)("文章標題 "),at={class:"row"},ot={class:"form-group col-4"},nt={for:"category"},dt=(0,s.Uk)("文章分類 "),ct=(0,s._)("option",{disabled:"",selected:""},"請選擇分類",-1),rt=(0,s._)("option",null,"News",-1),ut=(0,s._)("option",null,"Blog",-1),ht=[ct,rt,ut],mt={class:"form-group col-4"},pt={for:"price"},_t=(0,s.Uk)("類型 "),gt=(0,s._)("option",{disabled:"",selected:""},"請選擇職位",-1),bt=(0,s._)("option",null,"重要",-1),ft=(0,s._)("option",null,"消息",-1),wt=(0,s._)("option",null,"閒談",-1),yt=(0,s._)("option",null,"一般",-1),kt=[gt,bt,ft,wt,yt],vt={class:"form-group col-4"},At={for:"createdate"},Dt=(0,s.Uk)("發表時間 "),xt=(0,s._)("hr",null,null,-1),Ut={class:"form-group mb-3"},$t={class:"form-group"},Ct={class:"form-check"},Tt={class:"form-check-label",for:"isPublic"},Mt=(0,s._)("span",{class:"d-none"},"是否啟用",-1),Lt=(0,s.Uk)(" 是否啟用 "),St={class:"modal-footer"},Bt=(0,s._)("div",{class:"spinner-border",role:"status"},[(0,s._)("span",{class:"visually-hidden"},"Loading...")],-1),Et=[Bt];function jt(t,e,i,a,o,n){return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",L,[(0,s._)("div",S,[(0,s._)("div",B,[(0,s._)("h3",E,[i.isNew?((0,s.wg)(),(0,s.iD)("span",j,"新增文章")):((0,s.wg)(),(0,s.iD)("span",z,"編輯文章"))]),N]),(0,s._)("div",P,[(0,s._)("div",V,[(0,s._)("div",R,[(0,s._)("div",I,[(0,s._)("label",H,[q,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>o.tempArticle.image=t)},null,512),[[T.nr,o.tempArticle.image]])]),(0,s._)("img",{class:"img-fluid",src:o.tempArticle.image,alt:""},null,8,O)]),Y,Array.isArray(o.tempArticle.imagesUrl)?((0,s.wg)(),(0,s.iD)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.tempArticle.imagesUrl,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-1",key:e},[(0,s._)("div",F,[(0,s._)("label",W,[K,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t=>o.tempArticle.imagesUrl[e]=t},null,8,Q),[[T.nr,o.tempArticle.imagesUrl[e]]])])]),(0,s._)("img",{class:"img-fluid",src:t,alt:""},null,8,J)])))),128)),!o.tempArticle.imagesUrl.length||o.tempArticle.imagesUrl[o.tempArticle.imagesUrl.length-1]?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=t=>o.tempArticle.imagesUrl.push(""))}," 新增圖片 ")])):((0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>o.tempArticle.imagesUrl.pop())}," 刪除圖片 ")]))])):((0,s.wg)(),(0,s.iD)("div",tt,[(0,s._)("button",{class:"btn btn-outline-secondary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...t)=>n.createImages&&n.createImages(...t))}," 新增陣列圖片 ")]))]),(0,s._)("div",et,[(0,s._)("div",it,[(0,s._)("label",st,[lt,(0,s.wy)((0,s._)("input",{id:"title","onUpdate:modelValue":e[4]||(e[4]=t=>o.tempArticle.title=t),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[T.nr,o.tempArticle.title]])])]),(0,s._)("div",at,[(0,s._)("div",ot,[(0,s._)("label",nt,[dt,(0,s.wy)((0,s._)("select",{class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>o.tempArticle.description=t)},ht,512),[[T.bM,o.tempArticle.description]])])]),(0,s._)("div",mt,[(0,s._)("label",pt,[_t,(0,s.wy)((0,s._)("select",{class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>o.tempArticle.author=t)},kt,512),[[T.bM,o.tempArticle.author]])])]),(0,s._)("div",vt,[(0,s._)("label",At,[Dt,(0,s.wy)((0,s._)("input",{id:"createdate","onUpdate:modelValue":e[7]||(e[7]=t=>o.tempArticle.create_at=t),type:"number",class:"form-control"},null,512),[[T.nr,o.tempArticle.create_at]])])])]),xt,(0,s._)("div",Ut,[(0,s.wy)((0,s._)("textarea",{id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>o.tempArticle.content=t),type:"text",class:"form-control",placeholder:"文章內容",style:{height:"200px"}},"\n                  ",512),[[T.nr,o.tempArticle.content]])]),(0,s._)("div",$t,[(0,s._)("div",Ct,[(0,s._)("label",Tt,[Mt,(0,s.wy)((0,s._)("input",{id:"isPublic","onUpdate:modelValue":e[9]||(e[9]=t=>o.tempArticle.isPublic=t),class:"form-check-input",type:"checkbox","true-value":!0,"false-value":!1},null,512),[[T.e8,o.tempArticle.isPublic]])]),Lt])])])])]),(0,s._)("div",St,[(0,s._)("div",{class:(0,l.C_)(["text-center",{"d-none":0==o.loading}])},Et,2),(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-outline-danger me-5",{"d-none":1==o.loading}]),"data-bs-dismiss":"modal"}," 取消 ",2),(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-secondary",{"d-none":1==o.loading}]),onClick:e[10]||(e[10]=t=>n.updateArticle(o.tempArticle))}," 確認 ",2)])])])],512)}var zt=i(7424),Nt=i.n(zt),Pt={props:["article","isNew"],data(){return{tempArticle:{},status:"",modal:"",loading:!1,tempTime:""}},watch:{article(){this.tempArticle=this.article},loading(){this.status=this.loading}},mounted(){this.modal=new(Nt())(this.$refs.articleModal)},methods:{createImages(){this.tempArticle.imagesUrl=[""]},updateArticle(t){this.loading=!0;let e="https://vue3-course-api.hexschool.io/api/lulu_school/admin/article",i="post";t.id&&(e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/article/${t.id}`,i="put"),this.$http[i](e,{data:t}).then((t=>{t.data.success?(this.$emit("render"),this.loading=!1,this.hideModal()):(alert(t.data.message),this.loading=!1)})).catch((t=>{console.log(t)}))},openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},Vt=i(3744);const Rt=(0,Vt.Z)(Pt,[["render",jt]]);var It=Rt,Ht=i(6576),qt={data(){return{loadingStatus:"",articles:[],article:{},pagination:{},isNew:!1}},components:{AddEdit:It,CheckDelete:Ht.Z},methods:{getArticles(t=1){const e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/articles?page=${t}`;this.$http.get(e).then((t=>{t.data.success&&(this.articles=t.data.articles,this.pagination=t.data.pagination)}))},openModal(t,e){this.isNew=t,this.isNew?this.article={imagesUrl:[]}:this.article={...e},this.$refs.addedit.openModal()},getArticle(t){console.log(t);const e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/article/${t}`;this.$http.get(e).then((t=>{this.article=t.data.article,this.openModal(!1,this.article)}))},checkDelete(t){this.article=t,this.$refs.check.openModal()},deleteArticle(t){this.loadingStatus=t;const e=`https://vue3-course-api.hexschool.io/api/lulu_school/admin/article/${t}`;this.$http.delete(e).then((t=>{t.data.success&&(this.getArticles(),this.loadingStatus="",this.$refs.check.hideModal())}))}},mounted(){this.getArticles()}};const Ot=(0,Vt.Z)(qt,[["render",C]]);var Yt=Ot},6576:function(t,e,i){"use strict";i.d(e,{Z:function(){return x}});var s=i(6252),l=i(3577);const a={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",ref:"modal"},o={class:"modal-dialog modal-dialog-centered"},n={class:"modal-content"},d={class:"modal-header"},c={class:"modal-title",id:"staticBackdropLabel"},r=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},h={class:"d-flex align-items-center"},m=["src"],p={class:"ms-2 d-flex flex-column"},_={class:"mb-3"},g={class:"modal-footer"},b=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),f={class:"d-flex justify-content-center"};function w(t,e,i,w,y,k){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",o,[(0,s._)("div",n,[(0,s._)("div",d,[(0,s._)("h5",c,(0,l.zw)(i.product.title),1),r]),(0,s._)("div",u,[(0,s._)("div",h,[(0,s._)("img",{src:i.product.imageUrl,alt:"",style:{width:"300px",height:"200px"}},null,8,m),(0,s._)("div",p,[(0,s._)("p",_,"描述："+(0,l.zw)(i.product.content),1),(0,s._)("p",null,"說明："+(0,l.zw)(i.product.description),1)])])]),(0,s._)("div",g,[b,(0,s._)("div",f,[(0,s._)("div",{class:(0,l.C_)(["spinner-border text-danger mb-1",{"d-none":y.status!==i.product.id}]),role:"status"},null,2),(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-danger",{"d-none":y.status==i.product.id}]),onClick:e[0]||(e[0]=e=>t.$emit("delete",i.product.id))}," 刪除 ",2)])])])])],512)}var y=i(7424),k=i.n(y),v={props:["product","loading"],watch:{loading(){this.status=this.loading}},data(){return{modal:"",status:""}},mounted(){this.modal=new(k())(this.$refs.modal)},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},A=i(3744);const D=(0,A.Z)(v,[["render",w]]);var x=D}}]);
//# sourceMappingURL=993.74550c7c.js.map