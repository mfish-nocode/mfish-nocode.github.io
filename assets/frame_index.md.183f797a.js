import{_ as a,o as e,c as l,V as i}from"./chunks/framework.2ee15143.js";const m=JSON.parse('{"title":"快速了解","description":"","frontmatter":{},"headers":[],"relativePath":"frame/index.md","lastUpdated":1704459925000}'),n={name:"frame/index.md"},s=i(`<h1 id="快速了解" tabindex="-1">快速了解 <a class="header-anchor" href="#快速了解" aria-label="Permalink to &quot;快速了解&quot;">​</a></h1><h2 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介&quot;">​</a></h2><p>摸鱼低代码平台是一款基于Spring Boot、Spring Cloud &amp; Alibaba、Vue、AntDesign的前后端分离微服务后台快速开发框架。</p><p>内置模块如：菜单管理、组织管理、角色管理、账号管理、字典管理、个人设置、日志管理、文件管理、在线用户、数据库、数据源、代码生成、任务调度</p><p>基于该框架后期会拓展低代码相关表单设计，报表设计，流程设计等功能，实现从低代码到无代码的演进。</p><ul><li>官网地址：<a href="https://www.mfish.com.cn" target="_blank" rel="noreferrer">https://www.mfish.com.cn</a></li><li>头条：<a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAA3vOO3DTzGT2GJo7GzPKORa48qu_LR8qqlTu7VQeHczo" target="_blank" rel="noreferrer">摸鱼低代码</a></li><li>Git: <a href="https://github.com/mfish-qf" target="_blank" rel="noreferrer">GitHub</a> <a href="https://gitee.com/qiufeng9862" target="_blank" rel="noreferrer">Gitee</a></li><li>QQ 群号：<a href="https://jq.qq.com/?_wv=1027&amp;k=0A2bxoZX" target="_blank" rel="noreferrer">522792773</a></li></ul><h2 id="主要特性" tabindex="-1">主要特性 <a class="header-anchor" href="#主要特性" aria-label="Permalink to &quot;主要特性&quot;">​</a></h2><ul><li>统一认证（支持外部系统快速集成）</li><li>响应式布局（支持电脑、平板、手机等所有主流设备）</li><li>菜单、按钮、角色权限控制</li><li>代码一键生成（生成代码结构简单便于二次开发）</li><li>支持多数据源（修改配置即可实现切换）</li><li>支持动态配置数据源（类似navicat配置直接接入外部数据源）</li></ul><h2 id="技术选型" tabindex="-1">技术选型 <a class="header-anchor" href="#技术选型" aria-label="Permalink to &quot;技术选型&quot;">​</a></h2><h3 id="_1、系统环境" tabindex="-1">1、系统环境 <a class="header-anchor" href="#_1、系统环境" aria-label="Permalink to &quot;1、系统环境&quot;">​</a></h3><ul><li>JDK8</li><li>Apache Maven 3</li></ul><h3 id="_2、主框架" tabindex="-1">2、主框架 <a class="header-anchor" href="#_2、主框架" aria-label="Permalink to &quot;2、主框架&quot;">​</a></h3><ul><li>Spring Boot 2.7.x</li><li>Spring Cloud 2021.0.x</li><li>Shiro 1.12.x</li></ul><h3 id="_3、持久层" tabindex="-1">3、持久层 <a class="header-anchor" href="#_3、持久层" aria-label="Permalink to &quot;3、持久层&quot;">​</a></h3><ul><li>MyBatis-Plus 3.5.x</li><li>Alibaba Druid 1.2.x</li></ul><h3 id="_4、前端" tabindex="-1">4、前端 <a class="header-anchor" href="#_4、前端" aria-label="Permalink to &quot;4、前端&quot;">​</a></h3><ul><li>Vue 3.x</li><li>Vite 5.x</li><li>Axios 1.6.x</li><li>Ant Design Vue 4.x</li></ul><h2 id="内置功能" tabindex="-1">内置功能 <a class="header-anchor" href="#内置功能" aria-label="Permalink to &quot;内置功能&quot;">​</a></h2><ul><li>菜单管理：系统目录、菜单、按钮、权限标识等配置，根据配置生成前端路由。</li><li>组织管理：系统组织机构（公司、部门、岗位）配置，树结构展现支持数据权限。</li><li>角色管理：角色菜单、按钮权限分配。</li><li>账号管理：按照组织层级进行系统登录账号管理。</li><li>字典管理：对系统中数据字典进行统一管理。</li><li>个人信息：当前登录人的个人信息、头像管理。</li><li>日志管理：系统操作日志、异常日志查询。</li><li>文件管理：系统文件统一管理，支持公开文件和私有文件鉴权。</li><li>在线用户：当前系统中活跃用户状态监控。</li><li>任务管理：统一进行系统任务管理及配置，支持多策略触发、本地调度、RPC调度、消息调度。</li><li>任务日志：任务执行情况日志查询。</li><li>代码生成：前后端CRUD代码一键生成，支持代码下载。</li><li>接口文档：统一swagger文档入口，方便前端接入。</li><li>服务监控：监视各服务状态、性能、环境、JVM等信息。</li></ul><h2 id="快速构建" tabindex="-1">快速构建 <a class="header-anchor" href="#快速构建" aria-label="Permalink to &quot;快速构建&quot;">​</a></h2><h3 id="后端安装" tabindex="-1">后端安装 <a class="header-anchor" href="#后端安装" aria-label="Permalink to &quot;后端安装&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone https://github.com/mfish-qf/mfish-nocode</span></span>
<span class="line"><span style="color:#babed8;">安装mysql</span></span>
<span class="line"><span style="color:#babed8;">安装nacos</span></span>
<span class="line"><span style="color:#babed8;">安装redis</span></span>
<span class="line"><span style="color:#babed8;">执行db目录下SQL脚本</span></span>
<span class="line"><span style="color:#babed8;">启动项目</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="前端安装-详细步骤" tabindex="-1">前端安装 <a href="./../front/guide/#环境准备">详细步骤</a> <a class="header-anchor" href="#前端安装-详细步骤" aria-label="Permalink to &quot;前端安装 [详细步骤](../front/guide/index.md#环境准备)&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone https://github.com/mfish-qf/mfish-nocode-view</span></span>
<span class="line"><span style="color:#babed8;">pnpm i </span></span>
<span class="line"><span style="color:#babed8;">pnpm dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,24),r=[s];function t(o,p,c,h,d,b){return e(),l("div",null,r)}const f=a(n,[["render",t]]);export{m as __pageData,f as default};