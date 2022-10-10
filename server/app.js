"use strict";var e=require("koa"),o=require("koa-router"),n=require("mongoose"),s=require("koa-static"),t=require("koa-views"),r=require("path"),i=require("koa-bodyparser");require("koa-session-minimal");var a=require("jsonwebtoken"),c=require("koa2-cors");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=d(e),l=d(o),f=d(n),g=d(s),m=d(t),p=d(r),w=d(i),y=d(a),h=d(c);const v=f.default,b=v.Schema,M={username:String,password:String,age:Number,avatar:String},S={imgUrl:String},k={iconUrl:String,text:String},q={title:String,desc:String,price:Number,imgUrl:String};var _={UserModel:v.model("user",new b(M)),BannerModel:v.model("banner",new b(S)),ShopGoodsModel:v.model("goodstype",new b(k)),HomeGoodsListModel:v.model("homegoodslist",new b(q))};const j=l.default,{BannerModel:x,ShopGoodsModel:G,HomeGoodsListModel:U}=_,z=new j;z.get("/banner",(async(e,o)=>{const n=await x.find();e.success(n)})),z.get("/goodstype",(async(e,o)=>{const n=await G.find();e.success(n)})),z.get("/shoplist",(async(e,o)=>{const n=await U.find();e.success(n)})),z.get("/shoplist/:id",(async(e,o)=>{const n=e.params?.id,s=await U.findOne({_id:n.toString()});e.success(s)}));const C=z,H=new(0,l.default);H.use("/home",C.routes(),C.allowedMethods());var A=H;const B=y.default;var I={generate:(e,o)=>B.sign(e,"kerwin",{expiresIn:o}),verify(e){try{return B.verify(e,"kerwin")}catch(e){return!1}}};const L=f.default,N="mongodb://localhost:27017/koa_shop_project";L.connect(N),L.connection.on("connected",(function(){console.log("Mongoose connection open to "+N)})),L.connection.on("error",(function(e){console.log("Mongoose connection error: "+e)})),L.connection.on("disconnected",(function(){console.log("Mongoose connection disconnected")}));var O=function(e={}){return async function(o,n){o.success=function(n,s="处理成功!"){o.type=e.type||"json",o.body={success:!0,code:e.successCode||0,msg:s,data:n}},o.fail=function(n="处理失败!",s){o.type=e.type||"json",o.body={success:!1,code:s||e.failCode||99,msg:n||e.successMsg||"fail"},console.error(o.body)},await n()}};const D=new(0,u.default),E=A,F=g.default,J=m.default,K=p.default,P=w.default,Q=I,R=h.default,T=O;D.use(F(K.join(__dirname,"public"))),D.use(J(K.join(__dirname,"views"),{extension:"ejs"})),D.use(P()),D.use(R({credentials:!0,exposeHeaders:["Authorization"]})),D.use((async(e,o)=>{if(e.url.includes("login"))return void await o();const n=e.headers.authorization?.split(" ")[1];if(n){const s=Q.verify(n);if(s){const n=Q.generate({_id:s._id,username:s.username},"1d");e.set("Authorization",n),await o()}else e.status=401,e.body={errCode:-1,errInfo:"token过期"}}else await o()})),D.use(T()),D.use(E.routes()).use(E.allowedMethods()),D.listen(3004,"0.0.0.0"),module.exports={};
