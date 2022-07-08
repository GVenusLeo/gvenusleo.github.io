import{_ as t,c as e,o as d,a as l}from"./app.7c685d75.js";const u=JSON.parse('{"title":"Git \u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u63D0\u4EA4","slug":"\u4E00\u3001\u63D0\u4EA4"},{"level":2,"title":"\u4E8C\u3001\u5206\u652F\u534F\u4F5C","slug":"\u4E8C\u3001\u5206\u652F\u534F\u4F5C"}],"relativePath":"tools-tips/01.md","lastUpdated":null}'),r={name:"tools-tips/01.md"},o=l(`<h1 id="git-\u89C4\u8303" tabindex="-1">Git \u89C4\u8303 <a class="header-anchor" href="#git-\u89C4\u8303" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u63D0\u4EA4" tabindex="-1">\u4E00\u3001\u63D0\u4EA4 <a class="header-anchor" href="#\u4E00\u3001\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u3010<strong>\u539F\u5219</strong>\u3011\uFF1A\u6BCF\u6B21\u63D0\u4EA4\u53EA\u5904\u7406\u4E00\u4EF6\u4E8B\u3002</p><p>\u3010<strong>\u683C\u5F0F</strong>\u3011\uFF1A\u6807\u9898 + \u6807\u9898\u5185\u5BB9 + \u63CF\u8FF0(\u53EF\u9009).</p><p>\u3010<strong>\u4E3E\u4F8B</strong>\u3011\uFF1A</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">feature</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u65B0\u589E\uFF1A\u89D2\u8272\u8DF3\u8DC3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7269\u7406\u7EC4\u4EF6\u4E3A Character Controller</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u3010<strong>\u6807\u9898\u7EA6\u675F</strong>\u3011\uFF1A</p><table><thead><tr><th style="text-align:center;">\u6807\u9898</th><th>\u8BF4\u660E</th><th>\u4E3E\u4F8B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&lt;feature&gt;</code></td><td>(\u589E\u5220\u6539)\u4EE3\u7801\u529F\u80FD</td><td><code>&lt;feature&gt; \u4FEE\u6539\uFF1A\u4FA7\u8FB9\u680F\u5BBD\u5EA6</code></td></tr><tr><td style="text-align:center;"><code>&lt;refactor&gt;</code></td><td>\u91CD\u6784\u4EE3\u7801\u4F46\u4E0D\u5F71\u54CD\u529F\u80FD(\u53EF\u5F71\u54CD\u6027\u80FD)</td><td><code>&lt;refactor&gt; \u91CD\u6784\uFF1A\u65E5\u5386\u7EC4\u4EF6</code></td></tr><tr><td style="text-align:center;"><code>&lt;asset&gt;</code></td><td>(\u589E\u5220\u6539)\u8D44\u6E90\uFF0C\u5982\u56FE\u7247\u3001\u5B57\u4F53\u6587\u4EF6</td><td><code>&lt;asset&gt; \u4FEE\u6539\uFF1A\u5C01\u9762\u56FE\u7247</code></td></tr><tr><td style="text-align:center;"><code>&lt;plugin&gt;</code></td><td>(\u589E\u5220\u6539)\u63D2\u4EF6</td><td><code>&lt;plugin&gt; \u65B0\u589E\uFF1AMindMap \u63D2\u4EF6</code></td></tr><tr><td style="text-align:center;"><code>&lt;doc&gt;</code></td><td>(\u589E\u5220\u6539)\u6587\u6863</td><td><code>&lt;doc&gt; \u4FEE\u6539\uFF1AREADME</code></td></tr><tr><td style="text-align:center;"><code>&lt;test&gt;</code></td><td>(\u589E\u5220\u6539)\u6D4B\u8BD5</td><td><code>&lt;test&gt; \u65B0\u589E\uFF1A\u8D44\u6E90\u52A0\u8F7D\u6D4B\u8BD5</code></td></tr><tr><td style="text-align:center;"><code>&lt;misc&gt;</code></td><td>\u6742\u9879\uFF0C\u5982\uFF1A\u672C\u7248\u5347\u7EA7\u3001\u79FB\u9664\u6587\u672C</td><td><code>&lt;misc&gt; Python \u5347\u7EA7\u5230 3.10.2</code></td></tr></tbody></table><p>\u3010<strong>\u6807\u9898\u5185\u5BB9\u7EA6\u675F</strong>\u3011\uFF1A</p><table><thead><tr><th style="text-align:center;">\u5185\u5BB9\u524D\u7F00</th><th>\u4E3E\u4F8B</th></tr></thead><tbody><tr><td style="text-align:center;">\u65B0\u589E</td><td><code>&lt;asset&gt; \u65B0\u589E\uFF1A\u601D\u6E90\u5B8B\u4F53</code></td></tr><tr><td style="text-align:center;">\u4FEE\u6539</td><td><code>&lt;doc&gt; \u4FEE\u6539\uFF1APython \u7248\u672C\u53F7</code></td></tr><tr><td style="text-align:center;">\u5220\u9664</td><td><code>&lt;refactor&gt; \u5220\u9664\uFF1A\u6298\u53E0\u5217\u8868\u7EC4\u4EF6</code></td></tr></tbody></table><h2 id="\u4E8C\u3001\u5206\u652F\u534F\u4F5C" tabindex="-1">\u4E8C\u3001\u5206\u652F\u534F\u4F5C <a class="header-anchor" href="#\u4E8C\u3001\u5206\u652F\u534F\u4F5C" aria-hidden="true">#</a></h2><p>\u3010<strong>\u539F\u5219</strong>\u3011\uFF1A\u5206\u652F\u4E0D\u5171\u7528\u3002</p><p>\u3010<strong>\u56FA\u5B9A\u5206\u652F</strong>\u3011\uFF1A</p><ul><li><code>main</code>\uFF1A\u7A33\u5B9A\u53EF\u8FD0\u884C\u5206\u652F\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u4ECE\u8FD9\u4E2A\u5206\u652F\u53D1\u5E03\u7A33\u5B9A\u7248\u672C\u3002</li><li><code>develop</code>\uFF1A\u5904\u4E8E\u5F00\u53D1\u72B6\u6001\u7684\u5206\u652F\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u4ECE\u8FD9\u4E2A\u5206\u652F\u521B\u5EFA\u51FA\u5176\u4ED6\u5206\u652F\u3002</li></ul><p>\u3010<strong>\u5206\u652F\u547D\u540D\u89C4\u8303</strong>\u3011\uFF1A</p><ul><li>\u5206\u652F\u540D\uFF1A\u5206\u652F\u524D\u7F00 + / + \u5206\u652F\u7528\u9014\u63CF\u8FF0 + @\u5206\u652F\u5F52\u5C5E\u8005</li><li>\u4E3E\u4F8B\uFF1A<code>feature/notice@liuyuxin</code></li></ul><p>\u3010<strong>\u5206\u652F\u524D\u7F00\u7EA6\u675F</strong>\u3011\uFF1A</p><table><thead><tr><th style="text-align:center;">\u5206\u652F\u524D\u7F00</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>feature</code></td><td>\u529F\u80FD\u5F00\u53D1</td></tr><tr><td style="text-align:center;"><code>refactor</code></td><td>\u91CD\u6784</td></tr><tr><td style="text-align:center;"><code>asset</code></td><td>(\u589E\u5220\u6539)\u8D44\u6E90</td></tr><tr><td style="text-align:center;"><code>test</code></td><td>(\u589E\u5220\u6539)\u6D4B\u8BD5</td></tr><tr><td style="text-align:center;"><code>issue</code></td><td>\u5904\u7406\u67D0\u4E00\u6761 issue \u7684\u4E13\u7528\u5206\u652F</td></tr><tr><td style="text-align:center;"><code>release</code></td><td>\u7248\u672C\u5206\u652F\uFF0C\u7531\u7BA1\u7406\u5458\u521B\u5EFA\uFF0C\u4E0D\u53EF\u5220\u9664</td></tr></tbody></table><p>\u3010<strong>\u521B\u5EFA\u5206\u652F\u6B65\u9AA4</strong>\u3011\uFF1A</p><ol><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4ECE <code>develop</code> \u521B\u5EFA\u5206\u652F\uFF0C\u53EF\u4ECE\u7F51\u9875\u4E0A\u76F4\u63A5\u521B\u5EFA\uFF0C\u4E5F\u53EF\u901A\u8FC7 git \u521B\u5EFA\u3002</li><li>\u63A8\u9001\u5206\u652F\u5230\u4ED3\u5E93\u3002</li></ol><p>\u3010<strong>\u5408\u5E76\u5206\u652F\u6B65\u9AA4</strong>\u3011\uFF1A</p><ol><li>\u63D0\u4EA4\u5185\u5BB9\u5230\u672C\u5206\u652F(\u81EA\u5DF1\u7684\u5206\u652F)\u3002</li><li>\u5728\u7F51\u9875\u4E0A\u63D0\u4EA4 merge request\uFF0C\u5C06\u672C\u5206\u652F\u5408\u5E76\u5230\u76EE\u6807\u5206\u652F\u3002</li><li>\u5982\u6709\u51B2\u7A81\uFF0C\u4E0E\u76EE\u6807\u5206\u652F\u5F52\u5C5E\u8005\u5171\u540C\u5904\u7406\u3002</li><li>@\u7BA1\u7406\u5458\uFF0C\u901A\u77E5\u5408\u5E76\u5DF2\u63D0\u4EA4\u3002</li></ol>`,22),s=[o];function a(n,c,i,g,p,h){return d(),e("div",null,s)}var _=t(r,[["render",a]]);export{u as __pageData,_ as default};
