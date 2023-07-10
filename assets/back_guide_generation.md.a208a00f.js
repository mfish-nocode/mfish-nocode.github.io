import{_ as d,H as c,o as n,c as r,C as e,a as t,J as s,E as i,V as a}from"./chunks/framework.693de51f.js";const P=JSON.parse('{"title":"代码生成","description":"","frontmatter":{},"headers":[],"relativePath":"back/guide/generation.md","lastUpdated":1683361189000}'),h={name:"back/guide/generation.md"},l=a('<h1 id="代码生成" tabindex="-1">代码生成 <a class="header-anchor" href="#代码生成" aria-label="Permalink to &quot;代码生成&quot;">​</a></h1><p>通过前端页面或者swagger接口调用生成前后端代码</p><h2 id="参数释义" tabindex="-1">参数释义 <a class="header-anchor" href="#参数释义" aria-label="Permalink to &quot;参数释义&quot;">​</a></h2><table><thead><tr><th>参数</th><th>是否必须</th><th>描述</th><th>释义</th></tr></thead><tbody><tr><td><strong>connectId</strong></td><td>是</td><td><code>数据库连接ID</code></td><td><code>当前表所在的数据库ID</code></td></tr><tr><td><strong>tableName</strong></td><td>是</td><td><code>表名</code></td><td><code>需要生成代码的表</code></td></tr><tr><td><strong>apiPrefix</strong></td><td>否</td><td><code>接口路径前缀</code></td><td><code>网关path中的路由匹配前缀</code><br> <code>例如:网关中认证服务访问路径为Path=/oauth2/**接口前缀为oauth2</code><br> <code>不传会使用packageName，最底层包名 例如:cn.com.mfish.sys包会使用sys</code></td></tr><tr><td><strong>entityName</strong></td><td>否</td><td><code>实体类名</code></td><td><code>javaBean对象实体名称</code><br><code>不传会使用表名驼峰化</code></td></tr><tr><td><strong>packageName</strong></td><td>否</td><td><code>项目包名</code></td><td><code>java包名称 格式:cn.com.mfish.***</code><br><code>不传使用默认包名 cn.com.mfish.web</code></td></tr><tr><td><strong>tableComment</strong></td><td>否</td><td><code>描述</code></td><td><code>表相关描述信息</code><br><code>不传会获取数据库表中的中文描述，如果也为空则使用表名</code></td></tr></tbody></table><h2 id="参数作用体现" tabindex="-1">参数作用体现 <a class="header-anchor" href="#参数作用体现" aria-label="Permalink to &quot;参数作用体现&quot;">​</a></h2><h3 id="连接id-表名" tabindex="-1">连接id，表名 <a class="header-anchor" href="#连接id-表名" aria-label="Permalink to &quot;连接id，表名&quot;">​</a></h3><p>确定当前代码以哪个库的那张表生成</p><h3 id="接口前缀-apiprefix" tabindex="-1">接口前缀 apiPrefix <a class="header-anchor" href="#接口前缀-apiprefix" aria-label="Permalink to &quot;接口前缀 apiPrefix&quot;">​</a></h3>',8),p=e("img",{src:"https://oscimg.oschina.net/oscnet/up-db8ce1daa03e8d5b76cd49a90f3a8858fc8.png",alt:""},null,-1),m=a('<h3 id="实体类名-entityname" tabindex="-1">实体类名 entityName <a class="header-anchor" href="#实体类名-entityname" aria-label="Permalink to &quot;实体类名 entityName&quot;">​</a></h3><p><img src="https://oscimg.oschina.net/oscnet/up-e3a1824a54aaae5d6169edd18b5389e52a4.png" alt=""></p><h3 id="项目包名称-packagename" tabindex="-1">项目包名称 packageName <a class="header-anchor" href="#项目包名称-packagename" aria-label="Permalink to &quot;项目包名称 packageName&quot;">​</a></h3><p><img src="https://oscimg.oschina.net/oscnet/up-a2c0f6ff3505325403639e8377c0213f57e.png" alt=""></p><h3 id="描述-tablecomment" tabindex="-1">描述 tableComment <a class="header-anchor" href="#描述-tablecomment" aria-label="Permalink to &quot;描述 tableComment&quot;">​</a></h3><p><img src="https://oscimg.oschina.net/oscnet/up-5cbaec3a801146688aa04e5fb6f5c0378ab.png" alt=""></p><h2 id="生成代码结构" tabindex="-1">生成代码结构 <a class="header-anchor" href="#生成代码结构" aria-label="Permalink to &quot;生成代码结构&quot;">​</a></h2><p>生成代码结构如下图: <img src="https://oscimg.oschina.net/oscnet/up-e55940c4ab97a5a7ca7d985dd23f13350db.png" alt=""></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>cn目录为后端代码，按照输入的项目包名结构生成，样例包名cn.com.mfish.web</p><p>mfish-nocode-view为前端代码</p></div><p>代码生成完成后将前后端代码拷贝到对应的项目目录下即可</p>',10);function b(_,g,f,u,k,x){const o=c("font");return n(),r("div",null,[l,e("p",null,[t("接口前缀对应网关中路由地址，如下图:"),s(o,{style:{color:"Red"}},{default:i(()=>[t("红框内字符")]),_:1}),p]),m])}const N=d(h,[["render",b]]);export{P as __pageData,N as default};
