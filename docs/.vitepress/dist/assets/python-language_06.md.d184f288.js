import{_ as s,c as n,o as a,a as l}from"./app.7c685d75.js";const A=JSON.parse('{"title":"06 - \u6587\u4EF6\u4E0E\u76EE\u5F55\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6253\u5F00\u6587\u4EF6","slug":"\u4E00\u3001\u6253\u5F00\u6587\u4EF6"},{"level":2,"title":"\u4E8C\u3001\u8BFB\u53D6\u6587\u4EF6","slug":"\u4E8C\u3001\u8BFB\u53D6\u6587\u4EF6"},{"level":2,"title":"\u4E09\u3001\u5199\u5165\u6587\u4EF6","slug":"\u4E09\u3001\u5199\u5165\u6587\u4EF6"},{"level":2,"title":"\u56DB\u3001OS \u6A21\u5757","slug":"\u56DB\u3001os-\u6A21\u5757"},{"level":3,"title":"1. \u73AF\u5883\u53D8\u91CF","slug":"_1-\u73AF\u5883\u53D8\u91CF"},{"level":3,"title":"2. \u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55","slug":"_2-\u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55"}],"relativePath":"python-language/06.md","lastUpdated":null}'),p={name:"python-language/06.md"},e=l(`<h1 id="_06-\u6587\u4EF6\u4E0E\u76EE\u5F55\u64CD\u4F5C" tabindex="-1">06 - \u6587\u4EF6\u4E0E\u76EE\u5F55\u64CD\u4F5C <a class="header-anchor" href="#_06-\u6587\u4EF6\u4E0E\u76EE\u5F55\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u6253\u5F00\u6587\u4EF6" tabindex="-1">\u4E00\u3001\u6253\u5F00\u6587\u4EF6 <a class="header-anchor" href="#\u4E00\u3001\u6253\u5F00\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u6587\u4EF6\u662F\u8BB0\u5F55\u5728\u5B58\u50A8\u4ECB\u8D28\u4E2D\u7684\u4E00\u7EC4\u76F8\u5173\u4FE1\u606F\u7684\u96C6\u5408\u3002\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u6587\u4EF6\u540D\u7531\u6587\u4EF6\u4E3B\u540D\u548C\u6269\u5C55\u540D(\u53EF\u9009)\u7EC4\u6210\u3002Python \u4F7F\u7528 <code>open()</code> \u65B9\u6CD5\u8BFB\u53D6\u6587\u4EF6\uFF0C\u4F20\u5165\u6587\u4EF6\u540D\u4E0E\u6807\u8BC6\u7B26\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filename</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">mode</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>file</code> \u662F\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61\uFF0C<code>filename</code> \u662F\u6587\u4EF6\u540D(\u53EF\u4EE5\u5305\u62EC\u8DEF\u5F84)\uFF0C<code>mode</code> \u4E3A\u8BFB\u5199\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u53EA\u8BFB\u6A21\u5F0F\u3002\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u629B\u51FA <code>FileNotFoundError</code> \u5F02\u5E38\u3002</p><p>Python \u6587\u4EF6\u7684\u6253\u5F00\u65B9\u5F0F\u6709\u591A\u79CD\uFF1A</p><table><thead><tr><th style="text-align:center;">\u6A21\u5F0F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;"><code>r</code></td><td>\u53EA\u8BFB\u6A21\u5F0F\u3002\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u62A5\u9519\uFF0C\u6587\u4EF6\u6307\u9488\u6307\u5411\u5F00\u5934\u3002</td></tr><tr><td style="text-align:center;"><code>w</code></td><td>\u53EA\u5199\u6A21\u5F0F\u3002\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF0C\u82E5\u6587\u4EF6\u5B58\u5728\u5219\u8986\u76D6\u3002</td></tr><tr><td style="text-align:center;"><code>a</code></td><td>\u8FFD\u52A0\u6A21\u5F0F\u3002\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u7528\u4E8E\u5199\u5165\uFF0C\u82E5\u6587\u4EF6\u5B58\u5728\u5219\u6587\u4EF6\u6307\u9488\u6307\u5411\u7ED3\u5C3E\u3002</td></tr><tr><td style="text-align:center;"><code>t</code></td><td>\u6587\u672C\u6587\u4EF6\u6A21\u5F0F\u3002</td></tr><tr><td style="text-align:center;"><code>b</code></td><td>\u4E8C\u8FDB\u5236\u6A21\u5F0F\u3002\u4E3B\u8981\u7528\u4E8E\u6253\u5F00\u975E\u6587\u672C\u6587\u4EF6\uFF0C\u5982\u56FE\u7247\u3001\u97F3\u9891\u3002</td></tr><tr><td style="text-align:center;"><code>+</code></td><td>\u6253\u5F00\u6587\u4EF6\u5E76\u5141\u8BB8\u66F4\u65B0(\u53EF\u8BFB\u3001\u53EF\u5199)\u3002</td></tr></tbody></table><p>\u4E0A\u8868\u6240\u5217\u6A21\u5F0F\u53EF\u4EE5\u7EC4\u5408\uFF1A</p><table><thead><tr><th style="text-align:center;">\u6A21\u5F0F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;"><code>rb</code></td><td>\u4EE5\u4E8C\u8FDB\u5236\u683C\u5F0F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u53EA\u8BFB\u3002\u6587\u4EF6\u6307\u9488\u6307\u5411\u5F00\u5934\u3002</td></tr><tr><td style="text-align:center;"><code>r+</code></td><td>\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002\u6587\u4EF6\u6307\u9488\u5C06\u4F1A\u653E\u5728\u6587\u4EF6\u7684\u5F00\u5934\u3002</td></tr><tr><td style="text-align:center;"><code>wb</code></td><td>\u4EE5\u4E8C\u8FDB\u5236\u683C\u5F0F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u53EA\u7528\u4E8E\u5199\u5165\u3002\u82E5\u6587\u4EF6\u5B58\u5728\u5219\u8986\u76D6\u3002\u82E5\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;"><code>w+</code></td><td>\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002\u82E5\u6587\u4EF6\u5DF2\u5B58\u5728\u5219\u8986\u76D6\u3002\u82E5\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;"><code>wb+</code></td><td>\u4EE5\u4E8C\u8FDB\u5236\u683C\u5F0F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002\u82E5\u8BE5\u6587\u4EF6\u5DF2\u5B58\u5728\u5219\u8986\u76D6\u3002\u82E5\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;"><code>ab</code></td><td>\u4EE5\u4E8C\u8FDB\u5236\u683C\u5F0F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8FFD\u52A0\u3002\u82E5\u6587\u4EF6\u5DF2\u5B58\u5728\u5219\u6587\u4EF6\u6307\u9488\u6307\u5411\u7ED3\u5C3E\u3002\u82E5\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;"><code>a+</code></td><td>\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8BFB\u5199\u3002\u82E5\u8BE5\u6587\u4EF6\u5DF2\u5B58\u5728\u5219\u6587\u4EF6\u6307\u9488\u6307\u5411\u7ED3\u5C3E\u3002\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;"><code>ab+</code></td><td>\u4EE5\u4E8C\u8FDB\u5236\u683C\u5F0F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u7528\u4E8E\u8FFD\u52A0\u3002\u82E5\u6587\u4EF6\u5DF2\u5B58\u5728\u5219\u6587\u4EF6\u6307\u9488\u6307\u5411\u7ED3\u5C3E\u3002\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u65B0\u6587\u4EF6\u3002</td></tr></tbody></table><p>\u8BFB\u53D6\u5B8C\u6587\u4EF6\u540E\uFF0C\u4E3A\u4E86\u907F\u514D\u7CFB\u7EDF\u8D44\u6E90\u7684\u6D6A\u8D39\uFF0C\u5E94\u4F7F\u7528 <code>close()</code> \u65B9\u6CD5\u5173\u95ED\u6587\u4EF6\u3002</p><p>\u7531\u4E8E\u6587\u4EF6\u8BFB\u5199\u8FC7\u7A0B\u53EF\u80FD\u4EA7\u751F <code>IOError</code> \u9519\u8BEF\uFF0C\u9020\u6210 <code>close()</code> \u65B9\u6CD5\u65E0\u6CD5\u8C03\u7528\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u65E0\u8BBA\u662F\u5426\u51FA\u9519\u90FD\u80FD\u6B63\u5E38\u5173\u95ED\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5F02\u5E38\u5904\u7406\u540E <code>with</code> \u8BED\u53E5\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5F02\u5E38\u5904\u7406\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># with\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F15\u5165 <code>with</code> \u8BED\u53E5\uFF0C\u5F53\u6211\u4EEC\u8BBF\u95EE\u5B8C\u6587\u4EF6\u540E\uFF0CPython \u4F1A\u6839\u636E\u4E0A\u4E0B\u6587\u8BED\u5883\u81EA\u52A8\u8C03\u7528 <code>close()</code> \u65B9\u6CD5\u3002</p><h2 id="\u4E8C\u3001\u8BFB\u53D6\u6587\u4EF6" tabindex="-1">\u4E8C\u3001\u8BFB\u53D6\u6587\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>read()</code> \u65B9\u6CD5\u53EF\u4EE5\u5C06\u6587\u672C\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u4E00\u6B21\u6027\u8BFB\u53D6\u51FA\u6765\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u53C2\u6570\u63A7\u5236\u8BFB\u53D6\u7684\u5B57\u8282\u6570\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">txt1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># \u5168\u90E8\u8BFB\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;">txt2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u8BFB\u53D6\u524D20\u4E2A\u5B57\u8282</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6587\u4EF6\u8BFB\u53D6\u8FC7\u7A0B\u4E2D\uFF0C\u6587\u4EF6\u6307\u9488\u4F1A\u968F\u7740\u7CFB\u7EDF\u7684\u8BFB\u53D6\u800C\u79FB\u52A8\uFF0C\u4F7F\u7528 <code>tell()</code> \u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE\u5F53\u524D\u6587\u4EF6\u6307\u9488\u7684\u4F4D\u7F6E\u3002\u82E5\u6587\u4EF6\u6307\u9488\u79FB\u52A8\u5230\u6587\u4EF6\u5C3E\u90E8(EOF. end of file)\uFF0C\u6B64\u65F6\u5982\u679C\u518D\u4F7F\u7528 <code>read()</code> \u65B9\u6CD5\u8BFB\u53D6\u6587\u4EF6\uFF0C\u6587\u4EF6\u6307\u9488\u5C31\u65E0\u6CD5\u7EE7\u7EED\u4E0B\u79FB\uFF0C\u8BFB\u53D6\u4E0D\u5230\u6587\u4EF6\u3002\u89E3\u51B3\u8BE5\u95EE\u9898\u7684\u65B9\u6CD5\u662F\u4F7F\u6587\u4EF6\u6307\u9488\u590D\u4F4D\uFF0C\u9700\u8981\u7528 <code>seek()</code> \u65B9\u6CD5\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tell</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">seek</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">offset</span><span style="color:#89DDFF;">[,</span><span style="color:#82AAFF;"> whence</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>offset</code> \u8868\u793A\u9700\u8981\u504F\u79FB\u7684\u5B57\u8282\u6570\uFF0C<code>whence</code> \u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u8868\u793A\u4ECE\u54EA\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u504F\u79FB\uFF0C0 \u4EE3\u8868\u4EE5\u6587\u4EF6\u5F00\u5934\u4E3A\u4E03\u8D77\u70B9\uFF0C1 \u4EE3\u8868\u4EE5\u5F53\u524D\u4F4D\u7F6E\u4E3A\u8D77\u70B9\uFF0C2 \u4EE3\u8868\u4EE5\u6587\u4EF6\u672B\u5C3E\u4E3A\u8D77\u70B9\u3002</p><p>\u5F53\u6587\u4EF6\u5F88\u5927\u5F88\u96BE\u4E00\u6B21\u6027\u8BFB\u5165\u5185\u5B58\u6216\u6570\u636E\u662F\u4EE5\u884C\u4E3A\u5355\u4F4D\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>readline()</code> \u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6574\u884C\uFF0C\u8BE5\u65B9\u6CD5\u540C\u6837\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u975E\u8D1F\u53C2\u6570\u63A7\u5236\u8BFB\u5165\u7684\u5B57\u8282\u6570\u3002\u5982\u679C\u9700\u8981\u4E00\u6B21\u6027\u8BFB\u53D6\u6240\u6709\u6570\u636E\uFF0C\u540C\u65F6\u8981\u6C42\u4EE5\u884C\u4E3A\u5355\u4F4D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>readlines()</code> \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5305\u542B\u6240\u6709\u884C\u7684\u5217\u8868\u3002</p><h2 id="\u4E09\u3001\u5199\u5165\u6587\u4EF6" tabindex="-1">\u4E09\u3001\u5199\u5165\u6587\u4EF6 <a class="header-anchor" href="#\u4E09\u3001\u5199\u5165\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u5199\u5165\u6587\u4EF6\u4F7F\u7528 <code>write()</code> \u65B9\u6CD5\uFF0C\u9700\u8981\u6253\u5F00\u65F6\u6307\u5B9A\u6807\u8BC6\u7B26\u5305\u542B <code>w</code>\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5199\u5165\u7684\u5185\u5BB9\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\uFF0C\u5728\u6587\u4EF6\u5173\u95ED\u6216\u7F13\u51B2\u533A\u5237\u65B0\u524D\uFF0C\u5B57\u7B26\u4E32\u5185\u5BB9\u6682\u65F6\u5B58\u50A8\u5728\u7F13\u51B2\u533A\u3002</p><h2 id="\u56DB\u3001os-\u6A21\u5757" tabindex="-1">\u56DB\u3001<code>OS</code> \u6A21\u5757 <a class="header-anchor" href="#\u56DB\u3001os-\u6A21\u5757" aria-hidden="true">#</a></h2><p>Python \u4E2D\u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u7684 <code>os</code> \u6A21\u5757\u8C03\u7528\u64CD\u4F5C\u7CFB\u7EDF\u63D0\u4F9B\u7684\u63A5\u53E3\u51FD\u6570\u3002\u6BD4\u5982\u53C2\u770B\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># posix: \u8868\u793ALinux\u3001Unix\u6216Mac OS</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nt\uFF1A\u8868\u793AWindows</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8BE6\u7EC6\u4FE1\u606F\u53EF\u4EE5\u4F7F\u7528 <code>uname()</code> \u51FD\u6570\uFF0C\u4F46\u8BE5\u51FD\u6570\u5728 Windows \u4E0A\u4E0D\u63D0\u4F9B\u3002</p><h3 id="_1-\u73AF\u5883\u53D8\u91CF" tabindex="-1">1. \u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#_1-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">environ</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5168\u90E8\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">envirom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PATH</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># \u83B7\u53D6\u6307\u5B9A\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-\u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55" tabindex="-1">2. \u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55 <a class="header-anchor" href="#_2-\u64CD\u4F5C\u6587\u4EF6\u548C\u76EE\u5F55" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getcwd</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abspath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listdir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># \u5217\u51FA\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u548C\u5B50\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isdir</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># \u5224\u65AD\u662F\u5426\u4E3A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isfile</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># \u5224\u65AD\u662F\u5426\u4E3A\u6587\u4EF6 </span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">doc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chinese</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># \u62FC\u63A5\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">doc/chinese</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># \u62C6\u5206\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitext</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/doc/chinese.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u62C6\u5206\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">doc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u65B0\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rmdir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">doc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rename</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chinese.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chinese.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># \u6587\u4EF6\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chinese.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u6587\u4EF6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u62FC\u63A5\u4E24\u4E2A\u8DEF\u5F84\u6216\u62C6\u5206\u4E00\u4E2A\u8DEF\u5F84\u65F6\uFF0C\u4E0D\u80FD\u76F4\u63A5\u62FC\u63A5\u5B57\u7B26\u4E32\u6216\u62C6\u5206\u5B57\u7B26\u4E32\uFF0C\u56E0\u4E3A\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8DEF\u5F84\u5206\u9694\u7B26\u662F\u4E0D\u4E00\u6837\u7684\u3002<code>os.path.split()</code> \u65B9\u6CD5\u62C6\u5206\u5F97\u5230\u7684\u8DEF\u5F84\u540E\u4E00\u90E8\u5206\u603B\u662F\u6700\u540E\u7EA7\u522B\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u540D\uFF0C<code>os.path.splitext()</code> \u65B9\u6CD5\u5219\u76F4\u63A5\u5F97\u5230\u6587\u4EF6\u7684\u6269\u5C55\u540D\u3002\u8FD9\u4E9B\u5408\u5E76\u3001\u62C6\u5206\u8DEF\u5F84\u7684\u51FD\u6570\u5E76\u4E0D\u8981\u6C42\u76EE\u5F55\u548C\u6587\u4EF6\u8981\u771F\u5B9E\u5B58\u5728\uFF0C\u5B83\u4EEC\u53EA\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u64CD\u4F5C\u3002</p>`,33),o=[e];function t(c,r,F,y,D,i){return a(),n("div",null,o)}var C=s(p,[["render",t]]);export{A as __pageData,C as default};
