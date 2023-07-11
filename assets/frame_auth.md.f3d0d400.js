import{_ as a,o as t,c as e,V as o}from"./chunks/framework.693de51f.js";const m=JSON.parse('{"title":"登录认证","description":"","frontmatter":{},"headers":[],"relativePath":"frame/auth.md","lastUpdated":1688980894000}'),s={name:"frame/auth.md"},c=o('<h1 id="登录认证" tabindex="-1">登录认证 <a class="header-anchor" href="#登录认证" aria-label="Permalink to &quot;登录认证&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>摸鱼低代码统一认证采用oauth2单点认证方式实现。支持authorization_code、password、refresh_token三种认证方式。一个接入客户端允许配置多个回调地址<code>(逗号隔开)</code>，支持回调地址正则模糊匹配。 同时支持帐号密码登录、短信登录、扫码登录三种登录方式。</p><p>支持登录互斥功能，通过开关控制登录是否互斥。互斥状态下，同一个账号允许手机,微信,浏览器同时在线。一个用户只允许在一个手机，一个微信，一个浏览器上登录，其他浏览器登录会踢出之前的用户。 非互斥状态下，用户允许多地登录不受限制。</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p><a href="./../back/guide/settings.html#认证中心配置">查看登录互斥配置点这里</a></p></div><h2 id="认证时序图" tabindex="-1">认证时序图 <a class="header-anchor" href="#认证时序图" aria-label="Permalink to &quot;认证时序图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>登录界面集成在认证中心后端，前端判断需要登录直接跳转到后端登录页面，登录成功后后端回调前端地址并返回code。</p></div><p><img src="https://mfish-nocode.github.io/images/auth.png" alt=""></p><h2 id="三方系统认证时序图" tabindex="-1">三方系统认证时序图 <a class="header-anchor" href="#三方系统认证时序图" aria-label="Permalink to &quot;三方系统认证时序图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>三方接入流程根据自身情况可适当调整</p></div><p><img src="https://mfish-nocode.github.io/images/other-auth.png" alt=""></p>',11),i=[c];function r(l,h,d,n,p,u){return t(),e("div",null,i)}const b=a(s,[["render",r]]);export{m as __pageData,b as default};
