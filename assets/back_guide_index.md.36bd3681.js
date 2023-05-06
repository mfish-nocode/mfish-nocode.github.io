import{_ as t,c as r,C as s,a,I as l,E as n,V as o,J as p,o as c}from"./chunks/framework.81c1129f.js";const S=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"back/guide/index.md","lastUpdated":1683115430000}'),i={name:"back/guide/index.md"},d=o(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><p>本文会帮助你从头启动后端项目</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>项目搭建前请提前安装 <a href="https://www.oracle.com/java/technologies/downloads/#java8" target="_blank" rel="noreferrer">JDK1.8</a>、 <a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noreferrer">Msyql</a>、 <a href="https://redis.io/download/" target="_blank" rel="noreferrer">Redis</a>、 <a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">Maven</a>、 <a href="https://github.com/alibaba/nacos/releases/tag/2.2.0" target="_blank" rel="noreferrer">nacos</a></p><p>需要用到用到消息任务的还需安装RocketMQ，</p><p>不会安装的请自行网上查阅安装方法</p></div><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">信息</p><ul><li>JDK &gt;= 1.8 (推荐1.8版本)</li><li>Mysql &gt;= 5.7.0 (推荐5.7版本)</li><li>Redis &gt;= 3.0</li><li>Maven &gt;= 3.0</li><li>nacos &gt;= 2.2.0</li><li>RocketMQ &gt;= 4.9.x</li></ul></div><h2 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h2><ul><li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noreferrer">IDEA</a><code>(推荐)</code> - 开发工具。<code>如果idea版本比较老的话需要手动安装</code><a href="https://projectlombok.org/" target="_blank" rel="noreferrer">lombok</a><code>插件(百度:idea安装lombok插件)</code></li><li><a href="https://www.navicat.com.cn/products/" target="_blank" rel="noreferrer">navicat premium</a> - 数据库连接</li></ul><h2 id="后端运行" tabindex="-1">后端运行 <a class="header-anchor" href="#后端运行" aria-label="Permalink to &quot;后端运行&quot;">​</a></h2><ul><li>1、打开idea，菜单 File -&gt; New -&gt; Project from Version Control...</li><li>2、URL输入项目地址<a href="https://github.com/mfish-qf/mfish-nocode" target="_blank" rel="noreferrer">https://github.com/mfish-qf/mfish-nocode</a> clone</li><li>3、项目导入完成后进入db文件夹，在mysql数据库中执行mf_config.sql,mf_oauth.sql,mf_scheduler.sql,mf_system.sql创建数据库</li><li>4、配置<a href="https://github.com/alibaba/nacos" target="_blank" rel="noreferrer">nacos</a>持久化，修改nacos文件夹中conf/application.properties文件，增加支持mysql数据源配置指向mf_config数据库</li><li>5、启动<a href="https://github.com/alibaba/nacos" target="_blank" rel="noreferrer">nacos</a>，进入<a href="https://github.com/alibaba/nacos" target="_blank" rel="noreferrer">nacos</a>配置界面（<a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a>😗***/nacos/index.html），查看是否获取到配置列表<div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nacos</span><span style="color:#A6ACCD;">\\b</span><span style="color:#C3E88D;">in</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">\\startup.cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">standalone</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li>6、nacos中修改redis配置为本地redis<div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改application-dev.yml文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6379</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">***</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li>7、nacos中修改mysql配置未本地mysql<div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改mf-oauth-dev.yml，其他配置文件修改类似</span></span>
<span class="line"><span style="color:#F07178;">datasource</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 主库数据源</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">master</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdbc:mysql://localhost:3306/mf_oauth?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li>8、启动MfGatewayApplication、MfOauthApplication、MfSysApplication等服务</li></ul>`,10),h={class:"tip custom-block"},m=o('<p class="custom-block-title">提示</p><p><a href="https://github.com/alibaba/nacos" target="_blank" rel="noreferrer">nacos</a>配置文件application.properties是在下载的nacos-server包conf目录下。 需要下载的nacos-server必须&gt;=2.2.0版本。 默认配置单机模式，nacos集群/多集群部署模式参考<a href="https://nacos.io/zh-cn/docs/deployment.html" target="_blank" rel="noreferrer">Nacos支持三种部署模式</a></p><h5 id="启动项说明" tabindex="-1">启动项说明 <a class="header-anchor" href="#启动项说明" aria-label="Permalink to &quot;启动项说明&quot;">​</a></h5>',3),u=s("code",null,"所有外部请求入口",-1),b=s("code",null,"登录认证以及权限校验",-1),_=s("code",null,"系统相关业务比如日志记录、字典管理等",-1),f=s("code",null,"系统中所有图片、文件通过文件中心进行存储获取",-1),y=s("code",null,"统一管理系统中调度任务执行、支持本地调度、远程RPC调度、消息调度",-1),C=s("code",null,"代码生成逻辑在该服务中完成、需要生成代码需启动该服务",-1),A=o("<li>MfMonitorApplication （监控中心 <code>集成SpringBootAdmin进行服务监控</code>）</li><li>MfConsumeApplication （消息调度消费端样例 <code>调度中心执行消息任务后，消费端按照此样例进行编写</code>）</li><li>MfWebApplication （其他业务服务 <code>自己业务相关逻辑可以增加在该项目内、也可以重新创建</code>）</li><li>MfTestApplication （测试服务 <code>可以在此项目中测试跨服务业务</code>）</li><li>MfOpenAiApplication （chatGPT接入 <code>仅供娱乐、现在已被封玩不起来</code>）</li>",5),D=o('<ul><li><p>9、通过前端访问</p><p><a href="http://localhost:5281" target="_blank" rel="noreferrer">http://localhost:5281</a> (账号/密码 admin/!QAZ2wsx)</p></li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>建议使用Git克隆，因为克隆的方式可以和mfish随时保持更新同步。使用Git命令克隆</p><p>git clone <a href="https://github.com/mfish-qf/mfish-nocode" target="_blank" rel="noreferrer">https://github.com/mfish-qf/mfish-nocode</a></p></div><h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><p>为什么修改了数据库数据，查询时数据并未更改? 可以查看下是否由于redis缓存造成。</p><p>如果使用Linux 提示表不存在，设置大小写敏感配置在/etc/my.cnf添加lower_case_table_names=1，重启MYSQL服务</p><p>如遇到无法解决的问题请到<a href="https://github.com/mfish-qf/mfish-nocode/issues" target="_blank" rel="noreferrer">Issues</a>反馈，会不定时进行解答。</p>',6);function g(F,k,v,q,T,w){const e=p("font");return c(),r("div",null,[d,s("div",h,[m,s("ul",null,[s("li",null,[a("MfGatewayApplication （网关 "),l(e,{color:"red"},{default:n(()=>[a("必须")]),_:1}),a(),u,a("）")]),s("li",null,[a("MfOauthApplication （统一认证中心 "),l(e,{color:"red"},{default:n(()=>[a("必须")]),_:1}),a(),b,a("）")]),s("li",null,[a("MfSysApplication （系统业务中心 "),l(e,{color:"red"},{default:n(()=>[a("必须")]),_:1}),a(),_,a("）")]),s("li",null,[a("MfStorageApplication （文件中心 "),l(e,{color:"red"},{default:n(()=>[a("获取文件 必须")]),_:1}),a(),f,a("）")]),s("li",null,[a("MfSchedulerApplication （分布式调度中心 "),l(e,{color:"red"},{default:n(()=>[a("有调度业务 必须")]),_:1}),a(),y,a("）")]),s("li",null,[a("MfCodeApplication （代码生成中心 "),l(e,{color:"red"},{default:n(()=>[a("生成代码 必须")]),_:1}),a(),C,a("）")]),A])]),D])}const x=t(i,[["render",g]]);export{S as __pageData,x as default};
