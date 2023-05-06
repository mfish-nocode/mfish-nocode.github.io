import{_ as e,c as t,C as s,a as n,I as l,E as p,V as o,J as c,o as r}from"./chunks/framework.81c1129f.js";const z=JSON.parse('{"title":"二开说明","description":"","frontmatter":{},"headers":[],"relativePath":"back/guide/instruction.md","lastUpdated":1683125030000}'),D={name:"back/guide/instruction.md"},y=o("",3),F={class:"tip custom-block"},i=s("p",{class:"custom-block-title"},"建表规范",-1),A=o("",3),C={class:"tip custom-block"},u=s("p",{class:"custom-block-title"},"接口返回 Result",-1),b=o("",5),d={class:"tip custom-block"},m=s("p",{class:"custom-block-title"},"分页查询",-1),h=s("ul",null,[s("li",null,"1、参数中增加ReqPage"),s("li",null,"2、使用PageHelper.startPage进行分页启动"),s("li",null,"3、使用PageResult进行分页包装"),s("li",null,"4、最后进行Result结果包装返回")],-1),g=o("",2),E={class:"tip custom-block"},_=s("p",{class:"custom-block-title"},"接口权限",-1),q=o("",8),f={class:"tip custom-block"},v=s("p",{class:"custom-block-title"},"获取当前用户",-1),S=o("",8),T={class:"tip custom-block"},k=s("p",{class:"custom-block-title"},"通过工厂获取bean",-1),R=s("p",null,"什么时候会用到？如果你需要在静态方法中调用spring中的对象，可能需要用到这个。",-1),P=o("",3),B={class:"tip custom-block"},I=s("p",{class:"custom-block-title"},"调用外部http接口",-1),M=o("",4),w={class:"tip custom-block"},j=s("p",{class:"custom-block-title"},"新增web服务",-1),U=o("",2),x={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"@RequestHeader(RPCConstants.REQ_ORIGIN) String origin参数解析",-1),N=o("",6);function V(O,H,G,W,$,J){const a=c("font");return r(),t("div",null,[y,s("div",F,[i,s("p",null,[n("数据库建表建议添加下面"),l(a,{style:{color:"red"}},{default:p(()=>[n("缺省字段")]),_:1}),n("，因为框架中自动生成代码entity会继承BaseEntity对象，BaseEntity默认包含下面属性。")])]),A,s("div",C,[u,s("p",null,[n("接口返回结果用"),l(a,{style:{color:"red"}},{default:p(()=>[n("Result")]),_:1}),n("包装，前端会分析Result返回code，进行相应的结果提示")])]),b,s("div",d,[m,s("p",null,[n("分页查询结果用"),l(a,{style:{color:"red"}},{default:p(()=>[n("Result，PageResult")]),_:1}),n("包装")]),h]),g,s("div",E,[_,s("p",null,[n("需要控制权限的接口可以通过在接口上面增加注解"),l(a,{style:{color:"red"}},{default:p(()=>[n("@RequiresPermissions")]),_:1}),n("来自动拦截校验")])]),q,s("div",f,[v,s("p",null,[n("可以通过"),l(a,{style:{color:"red"}},{default:p(()=>[n("AuthInfoUtils")]),_:1}),n("获取当前帐号、用户ID、Token、判断是否超户等")])]),S,s("div",T,[k,s("p",null,[n("可以通过"),l(a,{style:{color:"red"}},{default:p(()=>[n("SpringBeanFactory")]),_:1}),n("获取SpringBean进行对象创建")]),R]),P,s("div",B,[I,s("p",null,[n("可以通过"),l(a,{style:{color:"red"}},{default:p(()=>[n("OkHttpUtils")]),_:1}),n("调用外部http接口，提供了GET,POST,UPLOAD方法，支持HTTPS")])]),M,s("div",w,[j,s("p",null,[n("建议在"),l(a,{style:{color:"red"}},{default:p(()=>[n("mf-business")]),_:1}),n("模块下新建自己的业务模块，参考mf-web")])]),U,s("p",null,[n("在"),l(a,{style:{color:"red"}},{default:p(()=>[n("mf-api")]),_:1}),n("模块中增加对应的api模块，增加对应的Feign调用接口和失败处理逻辑。")]),s("div",x,[L,s("p",null,[n("该参数标识接口是否内部调用，某些内部接口通过"),l(a,{style:{color:"red"}},{default:p(()=>[n("@InnerUser")]),_:1}),n("标识后，可以限制只允许内部服务访问，防止外部服务通过http接口直接访问。")])]),N])}const Y=e(D,[["render",V]]);export{z as __pageData,Y as default};
