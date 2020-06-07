function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,c=!0,o=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){o=!0,r=e},f:function(){try{c||null==i.return||i.return()}finally{if(o)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Lvj":function(e,t,n){"use strict";n.r(t),n.d(t,"RecipesModule",(function(){return E}));var i,r=n("PCNd"),c=n("3Pt+"),o=n("ofXK"),a=n("tyNb"),s=n("fXoL"),u=n("lJxs"),b=n("ceC1"),l=n("kt0X"),p=function(e){return[e]},d=((i=function(){function e(t,n){_classCallCheck(this,e),this.recipeService=t,this.store=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)(s.Jb(b.a),s.Jb(l.h))},i.\u0275cmp=s.Db({type:i,selectors:[["app-recipe-tem"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive","img-circle",2,"max-height","50px","width","100px",3,"src","alt"]],template:function(e,t){1&e&&(s.Mb(0,"a",0),s.Mb(1,"div",1),s.Mb(2,"h4",2),s.mc(3),s.Lb(),s.Mb(4,"p",3),s.mc(5),s.Lb(),s.Lb(),s.Mb(6,"span",4),s.Kb(7,"img",5),s.Lb(),s.Lb()),2&e&&(s.Zb("routerLink",s.cc(5,p,t.index)),s.zb(3),s.nc(t.recipe.name),s.zb(2),s.nc(t.recipe.description),s.zb(2),s.ac("alt",t.recipe.name),s.Zb("src",t.recipe.imagePath,s.jc))},directives:[a.j,a.i],styles:[".image-circle[_ngcontent-%COMP%]{border-radius:50%}"]}),i);function f(e,t){if(1&e&&s.Kb(0,"app-recipe-tem",4),2&e){var n=t.$implicit;s.Zb("index",t.index)("recipe",n)}}var m,h,v,g,y,L=function(){return["new"]},M=((h=function(){function e(t,n){_classCallCheck(this,e),this.recipeService=t,this.store=n,this.recipes=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.recipesSubscription=this.store.select("recipes").pipe(Object(u.a)((function(e){return e.recipes}))).subscribe((function(t){e.recipes=t}))}},{key:"ngOnDestroy",value:function(){this.recipesSubscription&&this.recipesSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||h)(s.Jb(b.a),s.Jb(l.h))},h.\u0275cmp=s.Db({type:h,selectors:[["app-recipe-list"]],decls:8,vars:3,consts:[[1,"row"],[1,"col-xs-12"],["routerLinkActive","active",1,"btn","btn-success",3,"routerLink"],[3,"index","recipe",4,"ngFor","ngForOf"],[3,"index","recipe"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"button",2),s.mc(3,"New Recipe"),s.Lb(),s.Lb(),s.Lb(),s.Kb(4,"hr"),s.Mb(5,"div",0),s.Mb(6,"div",1),s.lc(7,f,1,2,"app-recipe-tem",3),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.Zb("routerLink",s.bc(2,L)),s.zb(5),s.Zb("ngForOf",t.recipes))},directives:[a.i,a.h,o.j,d],styles:[""]}),h),k=((m=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=s.Db({type:m,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Kb(2,"app-recipe-list"),s.Lb(),s.Mb(3,"div",2),s.Kb(4,"router-outlet"),s.Lb(),s.Lb())},directives:[M,a.l],styles:[""]}),m),w=n("snw9"),C=n("xiFB"),O=n("IzEk"),x=n("eIep"),_=n("LRne"),j=n("GXvH"),S=((v=function(){function e(t,n,i,r){_classCallCheck(this,e),this.recipeService=t,this.dataStoreService=n,this.store=i,this.actions$=r}return _createClass(e,[{key:"resolve",value:function(e,t){var n=this;return this.store.select("recipes").pipe(Object(O.a)(1),Object(u.a)((function(e){return e.recipes})),Object(x.a)((function(e){return 0===e.length?(n.store.dispatch(new C.f),n.actions$.pipe(Object(w.d)(C.g),Object(O.a)(1))):Object(_.a)(e)})))}}]),e}()).\u0275fac=function(e){return new(e||v)(s.Qb(b.a),s.Qb(j.a),s.Qb(l.h),s.Qb(w.a))},v.\u0275prov=s.Fb({token:v,factory:v.\u0275fac,providedIn:"root"}),v),F=n("wUIL"),I=((y=function(){function e(t,n,i){_classCallCheck(this,e),this.fireBaseAuthService=t,this.router=n,this.store=i}return _createClass(e,[{key:"canActivate",value:function(e,t){var n=this;return this.store.select("auth").pipe(Object(O.a)(1),Object(u.a)((function(e){return e.user})),Object(u.a)((function(e){return!!e||n.router.createUrlTree(["/login"])})))}}]),e}()).\u0275fac=function(e){return new(e||y)(s.Qb(F.a),s.Qb(a.g),s.Qb(l.h))},y.\u0275prov=s.Fb({token:y,factory:y.\u0275fac,providedIn:"root"}),y),A=((g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=s.Db({type:g,selectors:[["app-recipe-start"]],decls:4,vars:0,consts:[[1,"alert","alert-info"],["type","button","data-dismiss","alert","aria-hidden","true",1,"close"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"button",1),s.mc(2,"\xd7"),s.Lb(),s.mc(3," Please select a recipe!\n"),s.Lb())},styles:[""]}),g);function K(e,t){if(1&e){var n=s.Nb();s.Mb(0,"div",23),s.Mb(1,"div",24),s.Kb(2,"input",25),s.Lb(),s.Mb(3,"div",26),s.Kb(4,"input",27),s.Lb(),s.Mb(5,"div",26),s.Mb(6,"button",28),s.Ub("click",(function(){s.ic(n);var e=t.index;return s.Wb().onDeleteIngredient(e)})),s.Kb(7,"span",29),s.mc(8,"Remove"),s.Lb(),s.Lb(),s.Lb()}2&e&&s.Zb("formGroupName",t.index)}var D,P=((D=function(){function e(t,n,i,r){_classCallCheck(this,e),this.route=t,this.recipeService=n,this.router=i,this.store=r,this.allowEdit=!1}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.recipeSub&&(console.log("destroyed"),this.recipeSub.unsubscribe())}},{key:"ngOnInit",value:function(){var e=this;this.route.params.pipe(Object(u.a)((function(e){return e.id})),Object(x.a)((function(t){return e.id=+t,e.allowEdit=null!=t,e.store.select("recipes")})),Object(u.a)((function(t){return t.recipes.find((function(t,n){return n===e.id}))}))).subscribe((function(t){e.initForm(t)}))}},{key:"initForm",value:function(e){var t="",n="",i="",r=new c.c([]);if(this.allowEdit&&(t=e.name,n=e.imagePath,i=e.description,e.ingredients)){var o,a=_createForOfIteratorHelper(e.ingredients);try{for(a.s();!(o=a.n()).done;){var s=o.value;r.push(new c.g({name:new c.e(s.name,c.t.required),amount:new c.e(s.amount,[c.t.required,c.t.pattern(/^[1-9]+[0-9]*$/)])}))}}catch(u){a.e(u)}finally{a.f()}}this.recipeForm=new c.g({recipename:new c.e(t,c.t.required),imagepath:new c.e(n,c.t.required),description:new c.e(i,c.t.required),ingredients:r})}},{key:"getControls",value:function(){return this.recipeForm.get("ingredients").controls}},{key:"onAddIngredient",value:function(){this.recipeForm.get("ingredients").push(new c.g({name:new c.e(null,c.t.required),amount:new c.e(null,[c.t.required,c.t.pattern(/^[1-9]+[0-9]*$/)])}))}},{key:"onSave",value:function(){var e={name:this.recipeForm.value.recipename,imagePath:this.recipeForm.value.imagepath,description:this.recipeForm.value.description,ingredients:this.recipeForm.value.ingredients};this.store.dispatch(this.allowEdit?new C.l({recipe:e,index:this.id}):new C.b(e)),this.onCancel()}},{key:"onCancel",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onDeleteIngredient",value:function(e){this.recipeForm.get("ingredients").removeAt(e)}}]),e}()).\u0275fac=function(e){return new(e||D)(s.Jb(a.a),s.Jb(b.a),s.Jb(a.g),s.Jb(l.h))},D.\u0275cmp=s.Db({type:D,selectors:[["app-recipe-edit"]],decls:41,vars:4,consts:[[1,"row","mt-5",2,"margin-top","10px"],[1,"col-xs-12"],[3,"formGroup"],[1,"row"],[1,"col-xs-6"],[1,"btn","btn-success",2,"margin-right","5px",3,"disabled","click"],[1,"glyphicon","glyphicon-floppy-save"],[1,"btn","btn-danger",3,"click"],[1,"glyphicon","glyphicon-remove-sign"],[1,"form-group","required"],["for","recipename",1,"control-label"],["name","recipename","type","text","formControlName","recipename",1,"form-control"],[1,"form-group"],["for","imagepath"],["name","imagepath","type","text","formControlName","imagepath",1,"form-control"],["imagepath",""],[1,"img-responsive",2,"max-height","150px",3,"src"],["for","description"],["name","description","cols","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"glyphicon","glyphicon-plus-sign"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-7"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"],[1,"glyphicon","glyphicon-trash"]],template:function(e,t){if(1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"form",2),s.Mb(3,"div",3),s.Mb(4,"div",1),s.Mb(5,"div",4),s.Mb(6,"button",5),s.Ub("click",(function(){return t.onSave()})),s.Kb(7,"span",6),s.mc(8," Save"),s.Lb(),s.Mb(9,"button",7),s.Ub("click",(function(){return t.onCancel()})),s.Kb(10,"span",8),s.mc(11," Cancel"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(12,"div",3),s.Mb(13,"div",1),s.Mb(14,"div",9),s.Mb(15,"label",10),s.mc(16,"Recipe Name"),s.Lb(),s.Kb(17,"input",11),s.Lb(),s.Lb(),s.Lb(),s.Mb(18,"div",3),s.Mb(19,"div",1),s.Mb(20,"div",12),s.Mb(21,"label",13),s.mc(22,"Image URL"),s.Lb(),s.Kb(23,"input",14,15),s.Lb(),s.Lb(),s.Lb(),s.Mb(25,"div",3),s.Mb(26,"div",1),s.Kb(27,"img",16),s.Lb(),s.Lb(),s.Mb(28,"div",3),s.Mb(29,"div",1),s.Mb(30,"div",12),s.Mb(31,"label",17),s.mc(32,"Description"),s.Lb(),s.Kb(33,"textarea",18),s.Lb(),s.Lb(),s.Lb(),s.Mb(34,"div",3),s.Mb(35,"div",19),s.lc(36,K,9,1,"div",20),s.Kb(37,"hr"),s.Mb(38,"button",21),s.Ub("click",(function(){return t.onAddIngredient()})),s.Kb(39,"span",22),s.mc(40," Add Ingredient"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e){var n=s.fc(24);s.zb(2),s.Zb("formGroup",t.recipeForm),s.zb(4),s.Zb("disabled",!t.recipeForm.valid),s.zb(21),s.Zb("src",n.value,s.jc),s.zb(9),s.Zb("ngForOf",t.getControls())}},directives:[c.u,c.m,c.h,c.a,c.l,c.f,c.d,o.j,c.i,c.p],styles:['.form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after{content:"*";color:red}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}']}),D),z=n("3V6w");function J(e,t){if(1&e&&(s.Mb(0,"li",11),s.mc(1),s.Lb()),2&e){var n=t.$implicit;s.zb(1),s.pc(" ",n.name," - ",n.amount," ")}}var T,N,R,U=[{path:"",component:k,resolve:[S],canActivate:[I],children:[{path:"",component:A},{path:"new",component:P},{path:":id",component:(T=function(){function e(t,n,i,r){_classCallCheck(this,e),this.recipeService=t,this.route=n,this.router=i,this.store=r,this.toggle=!1}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.recipeSub&&this.recipeSub.unsubscribe()}},{key:"ngOnInit",value:function(){var e=this;this.route.params.pipe(Object(u.a)((function(e){return e.id})),Object(x.a)((function(t){return e.id=+t,e.store.select("recipes")})),Object(u.a)((function(t){return t.recipes.find((function(t,n){return n===e.id}))}))).subscribe((function(t){e.recipe=t}))}},{key:"addToShoppinglist",value:function(){this.recipeService.addToShoppinglist(this.recipe.ingredients)}},{key:"onEditRecipe",value:function(){this.router.navigate(["edit"],{relativeTo:this.route})}},{key:"onDeleteRecipe",value:function(){this.store.dispatch(new C.d(this.id)),this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),T.\u0275fac=function(e){return new(e||T)(s.Jb(b.a),s.Jb(a.a),s.Jb(a.g),s.Jb(l.h))},T.\u0275cmp=s.Db({type:T,selectors:[["app-recipe-detail"]],decls:30,vars:4,consts:[[1,"row"],[1,"col-xs-12"],["alt","",1,"img-responsive",2,"max-height","300px",3,"src"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],["routerLinkActive","active",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Kb(2,"img",2),s.Lb(),s.Lb(),s.Mb(3,"div",0),s.Mb(4,"div",1),s.Mb(5,"h3"),s.mc(6),s.Lb(),s.Lb(),s.Lb(),s.Mb(7,"div",0),s.Mb(8,"div",1),s.Mb(9,"div",3),s.Mb(10,"button",4),s.mc(11,"Manage Recipe"),s.Kb(12,"span",5),s.Lb(),s.Mb(13,"ul",6),s.Mb(14,"li"),s.Mb(15,"a",7),s.Ub("click",(function(){return t.addToShoppinglist()})),s.mc(16,"To Shopping list"),s.Lb(),s.Lb(),s.Mb(17,"li"),s.Mb(18,"a",8),s.Ub("click",(function(){return t.onEditRecipe()})),s.mc(19,"Edit Recipe"),s.Lb(),s.Lb(),s.Mb(20,"li"),s.Mb(21,"a",7),s.Ub("click",(function(){return t.onDeleteRecipe()})),s.mc(22,"Delete Recipe"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(23,"div",0),s.Mb(24,"div",1),s.mc(25),s.Lb(),s.Lb(),s.Mb(26,"div",0),s.Mb(27,"div",1),s.Mb(28,"ul",9),s.lc(29,J,2,2,"li",10),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.zb(2),s.ac("src",t.recipe.imagePath,s.jc),s.zb(4),s.nc(t.recipe.name),s.zb(19),s.oc(" ",t.recipe.description," "),s.zb(4),s.Zb("ngForOf",t.recipe.ingredients))},directives:[z.a,a.i,o.j],styles:[""]}),T),resolve:[S]},{path:":id/edit",component:P,resolve:[S]}]}],Z=((R=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:R}),R.\u0275inj=s.Gb({factory:function(e){return new(e||R)},imports:[[a.k.forChild(U)],a.k]}),R),E=((N=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:N}),N.\u0275inj=s.Gb({factory:function(e){return new(e||N)},imports:[[a.k,o.c,c.r,Z,r.a]]}),N)}}]);