import{_ as s,o as a,c as n,V as l}from"./chunks/framework.693de51f.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"back/guide/introduction.md","lastUpdated":1683552561000}'),e={name:"back/guide/introduction.md"},t=l(`<h1 style="text-align:center;">摸鱼低代码平台后端</h1><div style="text-align:center;display:flex;justify-content:center;"><div style="padding-left:10px;"><p><a href="http://www.mfish.com.cn" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3%E5%9C%B0%E5%9D%80-green" alt="文档地址"></a></p></div><div style="padding-left:10px;"><p><a href="https://github.com/mfish-qf/mfish-nocode/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg" alt="License"></a></p></div><div style="padding-left:10px;"><p><a href="https://github.com/mfish-qf/mfish-nocode/releases/tag/v1.0.0" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg" alt="Version"></a></p></div></div><div style="text-align:center;display:flex;justify-content:center;"><div style="padding-left:10px;"><p><a href="https://github.com/mfish-qf/mfish-nocode" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/mfish-qf/mfish-nocode.svg?style=social&amp;label=Stars" alt="GitHub stars"></a></p></div><div style="padding-left:10px;"><p><a href="https://github.com/mfish-qf/mfish-nocode" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/forks/mfish-qf/mfish-nocode.svg?style=social&amp;label=Fork" alt="GitHub forks"></a></p></div><div style="padding-left:10px;"><p><a href="https://gitee.com/qiufeng9862/mfish-nocode/stargazers" target="_blank" rel="noreferrer"><img src="https://gitee.com/qiufeng9862/mfish-nocode/badge/star.svg?theme=white" alt="star"></a></p></div><div style="padding-left:10px;"><p><a href="https://gitee.com/qiufeng9862/mfish-nocode/members" target="_blank" rel="noreferrer"><img src="https://gitee.com/qiufeng9862/mfish-nocode/badge/fork.svg?theme=white" alt="fork"></a></p></div></div><h2 id="架构图" tabindex="-1">架构图 <a class="header-anchor" href="#架构图" aria-label="Permalink to &quot;架构图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>看不清楚图片可以右键-&gt;在新标签页中打开图片查看</p></div><p><img src="https://mfish-nocode.github.io/images/frame.png" alt=""></p><h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><ul><li>后端基于Spring Cloud Alibaba</li><li>注册中心、配置中心采用nacos</li><li>当前版本完成oauth2统一认证接入</li><li>持续进行功能完善</li></ul><h2 id="系统需求" tabindex="-1">系统需求 <a class="header-anchor" href="#系统需求" aria-label="Permalink to &quot;系统需求&quot;">​</a></h2><ul><li>JDK &gt;= 1.8</li><li>MySQL &gt;= 5.7</li><li>Maven &gt;= 3.0</li><li>Redis &gt;= 3</li></ul><h2 id="后端结构" tabindex="-1">后端结构 <a class="header-anchor" href="#后端结构" aria-label="Permalink to &quot;后端结构&quot;">​</a></h2><div class="language-yml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C3E88D;">├─db</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#项目初始化SQL脚本</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-api</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#Feign接口模块(新增其他Feign接口，可以在该模块下新增)</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-code-api</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#代码生成服务接口</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-oauth-api</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#认证服务接口</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-scheduler-api</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#调度接口</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─mf-sys-api</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#系统相关接口   </span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-business</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#业务模块（自定义业务可以增加在该模块下）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-consume</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#MQ调度任务消费端样例（可移除）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-openai</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#Openai接口调用样例（可移除）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-sys</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#系统业务相关服务</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─mf-web</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#普通web业务模块样例（可移除，自定义业务可以参考该模块进行业务搭建）</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-code-create</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#代码生成模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-common</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#公共类模块</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-app</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#应用服务通用包（轻量级web应用可引用该pom）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-core</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#核心包（建议所有应用引用）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-dblink</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#外部数据源接入包（接入外部数据源使用，普通查库无需应用此包）</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-ds</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">#多数据源适配</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-file</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#文件操作通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-log</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#日志记录通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-oauth</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#统一认证通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-redis</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#redis操作通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-scheduler</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#调度通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  ├─mf-common-swagger</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#swagger文档通用包</span></span>
<span class="line"><span style="color:#C3E88D;">│  └─mf-common-web</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#web应用通用包（相比mf-common-app默认增加了数据库、swagger等默认配置，新建通用web应用引用此pom）</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-gateway</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#网关模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-monitor</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#spring-boot-admin监控模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-oauth</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#统一认证模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-scheduler</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#统一调度模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-storage</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#文件操作模块</span></span>
<span class="line"><span style="color:#C3E88D;">├─mf-test</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">#测试模块（可移除）</span></span>
<span class="line"><span style="color:#C3E88D;">└─mf-wechat</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#微信扫码登录样例(微信小程序，用小程序专用开发工具打开)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>前端接口查看请前往<a href="./../../front/guide/#目录说明">前端结构</a></p></div><h2 id="数据库信息" tabindex="-1">数据库信息 <a class="header-anchor" href="#数据库信息" aria-label="Permalink to &quot;数据库信息&quot;">​</a></h2><table><thead><tr><th>文件</th><th>描述</th></tr></thead><tbody><tr><td><code>mf_config.sql</code></td><td>nacos数据库</td></tr><tr><td><code>mf_oauth.sql</code></td><td>认证数据库</td></tr><tr><td><code>mf_system.sql</code></td><td>系统管理数据库</td></tr><tr><td><code>mf_scheduler.sql</code></td><td>调度中心数据库</td></tr></tbody></table>`,15),p=[t];function o(i,r,c,m,y,d){return a(),n("div",null,p)}const h=s(e,[["render",o]]);export{b as __pageData,h as default};