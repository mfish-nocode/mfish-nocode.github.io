import{_ as s,o as n,c as a,V as l}from"./chunks/framework.2ee15143.js";const u=JSON.parse('{"title":"样式","description":"","frontmatter":{},"headers":[],"relativePath":"front/guide/design.md","lastUpdated":1684238161000}'),p={name:"front/guide/design.md"},e=l(`<h1 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>主要介绍如何在项目中使用和规划样式文件。</p><p>默认使用 less 作为预处理语言，建议在使用前或者遇到疑问时学习一下 <a href="http://lesscss.org/" target="_blank" rel="noreferrer">Less</a> 的相关特性（如果想获取基础的 CSS 知识或查阅属性，请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noreferrer">MDN 文档</a>）。</p><p>项目中使用的通用样式，都存放于 <a href="https://github.com/mfish-qf/mfish-nocode-view/tree/main/src/design" target="_blank" rel="noreferrer">src/design/</a> 下面。</p><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">├── ant</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># ant design 一些样式覆盖</span></span>
<span class="line"><span style="color:#C3E88D;">├── transition</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 动画相关</span></span>
<span class="line"><span style="color:#C3E88D;">├── var</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 变量</span></span>
<span class="line"><span style="color:#C3E88D;">├── color.less</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 颜色</span></span>
<span class="line"><span style="color:#C3E88D;">├── config.less</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 每个组件都会自动引入样式 </span></span>
<span class="line"><span style="color:#C3E88D;">├── index.less</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 入口</span></span>
<span class="line"><span style="color:#C3E88D;">├── public.less</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 公共类</span></span>
<span class="line"><span style="color:#C3E88D;">└── theme.less</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 主题相关</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">全局注入</p><p>config.less 这个文件会被全局注入到所有文件，所以在页面内可以直接使用变量而不需要手动引入</p></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  // 这里已经隐式注入了 config</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">less</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="unocss" tabindex="-1">Unocss <a class="header-anchor" href="#unocss" aria-label="Permalink to &quot;Unocss&quot;">​</a></h2><p>项目中引用到了- <a href="https://uno.antfu.me/" target="_blank" rel="noreferrer">Unocss</a>,具体可以见文件使用说明。</p><p>语法如下:</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">relative w-full h-full px-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="为什么使用-less" tabindex="-1">为什么使用 Less <a class="header-anchor" href="#为什么使用-less" aria-label="Permalink to &quot;为什么使用 Less&quot;">​</a></h2><p>主要是因为 Ant Design 默认使用 less 作为样式语言，使用 Less 可以跟其保持一致。</p><h2 id="开启-scoped" tabindex="-1">开启 scoped <a class="header-anchor" href="#开启-scoped" aria-label="Permalink to &quot;开启 scoped&quot;">​</a></h2><p>没有加 <code>scoped</code> 属性，默认会编译成全局样式，可能会造成全局污染</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。</p></div><h2 id="深度选择器" tabindex="-1">深度选择器 <a class="header-anchor" href="#深度选择器" aria-label="Permalink to &quot;深度选择器&quot;">​</a></h2><p>有时我们可能想明确地制定一个针对子组件的规则。</p><p>如果你希望 <code>scoped</code> 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 <code>&gt;&gt;&gt;</code> 操作符。有些像 Sass 之类的预处理器无法正确解析 <code>&gt;&gt;&gt;</code>。这种情况下你可以使用 <code>/deep/</code> 或 <code>::v-deep</code> 操作符取而代之——两者都是 <code>&gt;&gt;&gt;</code> 的别名，同样可以正常工作。</p><p>详情可以查看 RFC<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noreferrer">0023-scoped-styles-changes</a>。</p><p>使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  /* deep selectors */</span></span>
<span class="line"><span style="color:#BABED8;">  ::v-deep(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  /* shorthand */</span></span>
<span class="line"><span style="color:#BABED8;">  :deep(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  /* targeting slot content */</span></span>
<span class="line"><span style="color:#BABED8;">  ::v-slotted(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  /* shorthand */</span></span>
<span class="line"><span style="color:#BABED8;">  :slotted(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  /* one-off global rule */</span></span>
<span class="line"><span style="color:#BABED8;">  ::v-global(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  /* shorthand */</span></span>
<span class="line"><span style="color:#BABED8;">  :global(.foo) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="css-modules" tabindex="-1">CSS Modules <a class="header-anchor" href="#css-modules" aria-label="Permalink to &quot;CSS Modules&quot;">​</a></h2><p>针对样式覆盖问题，还有一种方案是使用 CSS Modules 模块化方案。使用方式如下。</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$style.span1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useCSSModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">context</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">$style</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useCSSModule</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">moduleAStyle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useCSSModule</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moduleA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">$style</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">moduleAStyle</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">module</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">span1</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">module</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moduleA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">span1</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> green</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="重复引用问题" tabindex="-1">重复引用问题 <a class="header-anchor" href="#重复引用问题" aria-label="Permalink to &quot;重复引用问题&quot;">​</a></h2><p>加上 <strong>reference</strong> 可以解决页面内重复引用导致实际生成的 style 样式表重复的问题。</p><p>这步已经全局引入了。所以<strong>可以不写</strong>，直接使用变量</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  /* 该行代码已全局引用。可以不用单独引入 */</span></span>
<span class="line"><span style="color:#BABED8;">  @import (reference) &#39;../../design/config.less&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,31),o=[e];function t(r,c,i,y,D,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
