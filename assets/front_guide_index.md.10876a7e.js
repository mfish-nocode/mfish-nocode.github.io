import{_ as s,o as n,c as a,V as l}from"./chunks/framework.2ee15143.js";const m=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"front/guide/index.md","lastUpdated":1684238161000}'),e={name:"front/guide/index.md"},p=l(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><p>本文会帮助你从头启动前端项目</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">关于组件</p><p>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p></div><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><p>本地环境需要安装 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>、<a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>推荐使用<a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>，否则依赖可能安装不上。</li><li><a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 版本要求<code>16.x</code>以上，如果其他项目需要使用到低版本node，建议安装<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">Nvm</a>进行版本管理。</li></ul></div><h2 id="工具配置" tabindex="-1">工具配置 <a class="header-anchor" href="#工具配置" aria-label="Permalink to &quot;工具配置&quot;">​</a></h2><p>如果您使用的 IDE 是<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">vscode</a>(推荐)的话，可以安装以下工具来提高开发效率及代码格式化</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noreferrer">Iconify IntelliSense</a> - Iconify 图标插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noreferrer">I18n-ally</a> - i18n 插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a> - vue 开发必备 （也可以选择 Volar）</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a> - 脚本代码检查</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier</a> - 代码格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noreferrer">Stylelint</a> - css 格式化</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noreferrer">DotENV</a> - .env 文件 高亮</li></ul><h2 id="代码获取" tabindex="-1">代码获取 <a class="header-anchor" href="#代码获取" aria-label="Permalink to &quot;代码获取&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p></div><h3 id="从-github-获取代码" tabindex="-1">从 GitHub 获取代码 <a class="header-anchor" href="#从-github-获取代码" aria-label="Permalink to &quot;从 GitHub 获取代码&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># clone 代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/mfish-qf/mfish-nocode-view</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="从-gitee-获取代码" tabindex="-1">从 Gitee 获取代码 <a class="header-anchor" href="#从-gitee-获取代码" aria-label="Permalink to &quot;从 Gitee 获取代码&quot;">​</a></h3><p>如果从 github clone 代码较慢的话，可以尝试用 <a href="https://gitee.com/qiufeng9862/mfish-nocode-view" target="_blank" rel="noreferrer">Gitee</a> 同步代码到自己的仓库，再 clone 下来即可。</p><p>也可以通过下方地址进行 clone</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://gitee.com/qiufeng9862/mfish-nocode-view</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><a href="https://gitee.com/qiufeng9862/mfish-nocode-view" target="_blank" rel="noreferrer">Gitee</a>的代码可能不是最新的</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Node版本必须&gt;=16.x</p></div><p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>，请安装它。</p><p><strong>验证</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 出现相应npm版本即可</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm 设置阿里镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 出现相应node版本即可</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果你需要同时存在多个 node 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</p><h3 id="pnpm-安装" tabindex="-1">pnpm 安装 <a class="header-anchor" href="#pnpm-安装" aria-label="Permalink to &quot;pnpm 安装&quot;">​</a></h3><p>必须使用 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>进行依赖安装（若其他包管理器安装不了需要自行处理）。</p><p>如果未安装<code>pnpm</code>，可以用下面命令来进行全局安装</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 全局安装yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 验证</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 出现对应版本号即代表安装成功</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置国内镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="依赖安装命令" tabindex="-1">依赖安装命令 <a class="header-anchor" href="#依赖安装命令" aria-label="Permalink to &quot;依赖安装命令&quot;">​</a></h3><p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="重新安装依赖" tabindex="-1">重新安装依赖 <a class="header-anchor" href="#重新安装依赖" aria-label="Permalink to &quot;重新安装依赖&quot;">​</a></h3><p>该命令会先删除 <code>node_modules</code>、<code>yarn.lock</code>、<code>package.lock.json</code> 后再进行依赖重新安装（安装速度会明显变慢）。</p><p>接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。</p><h3 id="imagemin-依赖安装失败解决方法" tabindex="-1">imagemin 依赖安装失败解决方法 <a class="header-anchor" href="#imagemin-依赖安装失败解决方法" aria-label="Permalink to &quot;imagemin 依赖安装失败解决方法&quot;">​</a></h3><p>由于 imagemin 在国内安装困难，提供以下几个解决方案：</p><ol><li>使用 yarn 在 package.json 内配置(推荐，项目内已集成，前提是必须使用 yarn)</li></ol><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resolutions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">bin-wrapper</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm:bin-wrapper-china</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>使用 npm，在电脑 host 文件加上如下配置即可</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">199.232.4.133</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">raw.githubusercontent.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">安装依赖时 husky 安装失败</p><p>请查看你的源码是否从 github 直接下载的，直接下载是没有 <code>.git</code> 文件夹的，而 <code>husky</code> 需要依赖 <code>git</code> 才能安装。此时需使用 <code>git init</code> 初始化项目，再尝试重新安装即可。</p></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><h3 id="开发环境运行" tabindex="-1">开发环境运行 <a class="header-anchor" href="#开发环境运行" aria-label="Permalink to &quot;开发环境运行&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果无后台环境，可以将<code>.env.development</code>中的<code>VITE_PROXY</code>和<code>VITE_GLOB_OAUTH2_URL</code>修改为我演示后台环境</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">VITE_PROXY</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> [[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://app.mfish.com.cn:11116</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]]</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_OAUTH2_URL</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://app.mfish.com.cn:11116/oauth2/authorize</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="npm-script" tabindex="-1">npm script <a class="header-anchor" href="#npm-script" aria-label="Permalink to &quot;npm script&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&quot;scripts&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;dev&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;bootstrap&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm install</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;build&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env NODE_ENV=production vite build &amp;&amp; esno ./build/script/RunBuild.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;build:test&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env vite build --mode test &amp;&amp; esno ./build/script/RunBuild.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;build:no-cache&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm clean:cache &amp;&amp; npm run build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;report&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env REPORT=true npm run build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;type:check&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-tsc --noEmit --skipLibCheck</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;preview&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run build &amp;&amp; vite preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;preview:dist&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;test:unit&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest --environment jsdom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;build-only&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;type-check&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-tsc --noEmit -p tsconfig.vitest.json --composite false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;clean:cache&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;clean:lib&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rimraf node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;lint:eslint&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint --cache --max-warnings 0  </span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">{src,mock}/**/*.{vue,ts,tsx}</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;"> --fix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;lint:prettier&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier --write  </span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">src/**/*.{js,json,tsx,css,less,scss,vue,html,md}</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;lint:stylelint&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylelint --cache --fix </span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">**/*.{vue,less,postcss,css,scss}</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;"> --cache --cache-location node_modules/.cache/stylelint/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;lint:lint-staged&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">&quot;gen:icon&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esno ./build/generate/icon/index.ts</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="生成图标集" tabindex="-1">生成图标集 <a class="header-anchor" href="#生成图标集" aria-label="Permalink to &quot;生成图标集&quot;">​</a></h3><p>该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 <a href="./../dep/icon.html#图标集预生成">图标集生成</a></p><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">├── build</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 打包脚本相关</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── config</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 配置文件</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── generate</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 生成器</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── script</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 脚本</span></span>
<span class="line"><span style="color:#C3E88D;">│   └── vite</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># vite配置</span></span>
<span class="line"><span style="color:#C3E88D;">├── mock</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># mock文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">├── public</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 公共静态资源目录</span></span>
<span class="line"><span style="color:#C3E88D;">├── src</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 主目录</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── api</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 接口文件</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── assets</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 资源文件</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── icons</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># icon sprite 图标文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── images</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 项目存放图片的文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   └── svg</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 项目存放svg图片的文件夹</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── components</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 公共组件</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── design</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 样式文件</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── directives</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 指令</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── enums</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 枚举/常量</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── hooks</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── component</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 组件相关hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── core</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 基础hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── event</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 事件相关hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── setting</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 配置相关hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   └── web</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># web相关hook</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── i18n</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 多语言</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── layouts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 布局文件</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── default</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 默认布局</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── iframe</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># iframe布局</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   └── page</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 页面布局</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── logics</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 逻辑</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── router</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 路由配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── settings</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 项目配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── componentSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 组件配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── designSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 样式配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── encryptionSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 加密配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── localeSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 多语言配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   ├── projectSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 项目配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   │   └── siteSetting.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 站点配置</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── store</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 数据仓库</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── utils</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 工具类</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── views</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 页面</span></span>
<span class="line"><span style="color:#C3E88D;">│   ├── App.vue</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># VUE入口</span></span>
<span class="line"><span style="color:#C3E88D;">│   └── main.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 主入口</span></span>
<span class="line"><span style="color:#C3E88D;">├── types</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 类型文件</span></span>
<span class="line"><span style="color:#C3E88D;">├── vite.config.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># vite配置文件</span></span>
<span class="line"><span style="color:#C3E88D;">└── windi.config.ts</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># windcss配置文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,53),o=[p];function t(r,c,i,y,u,D){return n(),a("div",null,o)}const B=s(e,[["render",t]]);export{m as __pageData,B as default};