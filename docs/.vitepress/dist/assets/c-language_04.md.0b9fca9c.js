import{_ as s,c as n,o as a,a as l}from"./app.11d8cbf4.js";const b=JSON.parse('{"title":"04 - \u9009\u62E9\u8BED\u53E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001if \u9009\u62E9\u8BED\u53E5","slug":"\u4E00\u3001if-\u9009\u62E9\u8BED\u53E5"},{"level":2,"title":"\u4E8C\u3001\u5173\u7CFB\u8FD0\u7B97\u7B26\u548C\u5173\u7CFB\u8868\u8FBE\u5F0F","slug":"\u4E8C\u3001\u5173\u7CFB\u8FD0\u7B97\u7B26\u548C\u5173\u7CFB\u8868\u8FBE\u5F0F"},{"level":2,"title":"\u4E09\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u903B\u8F91\u8868\u8FBE\u5F0F","slug":"\u4E09\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u903B\u8F91\u8868\u8FBE\u5F0F"},{"level":2,"title":"\u56DB\u3001\u6761\u4EF6\u8FD0\u7B97\u7B26\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F","slug":"\u56DB\u3001\u6761\u4EF6\u8FD0\u7B97\u7B26\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F"},{"level":2,"title":"\u4E94\u3001switch \u9009\u62E9\u8BED\u53E5","slug":"\u4E94\u3001switch-\u9009\u62E9\u8BED\u53E5"}],"relativePath":"c-language/04.md"}'),e={name:"c-language/04.md"},p=l(`<h1 id="_04-\u9009\u62E9\u8BED\u53E5" tabindex="-1">04 - \u9009\u62E9\u8BED\u53E5 <a class="header-anchor" href="#_04-\u9009\u62E9\u8BED\u53E5" aria-hidden="true">#</a></h1><p>C \u8BED\u8A00\u6709\u4E24\u79CD\u9009\u62E9\u8BED\u53E5\uFF1A</p><ul><li><code>if</code> \u8BED\u53E5\uFF1A\u5B9E\u73B0\u4E24\u4E2A\u5206\u652F\u7684\u9009\u62E9\u7ED3\u6784\u3002</li><li><code>switch</code> \u8BED\u53E5\uFF1A\u5B9E\u73B0\u591A\u5206\u652F\u7684\u9009\u62E9\u7ED3\u6784\u3002</li></ul><h2 id="\u4E00\u3001if-\u9009\u62E9\u8BED\u53E5" tabindex="-1">\u4E00\u3001<code>if</code> \u9009\u62E9\u8BED\u53E5 <a class="header-anchor" href="#\u4E00\u3001if-\u9009\u62E9\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>if</code> \u8BED\u53E5\u7684\u4E00\u822C\u5F62\u5F0F\uFF1A</p><div class="language-c line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \u8BED\u53E51</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> \u8BED\u53E52</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>\u8868\u8FBE\u5F0F</code> \u53EF\u4EE5\u662F\u5173\u7CFB\u8868\u8FBE\u5F0F\u3001\u903B\u8F91\u8868\u8FBE\u5F0F\u3001\u6570\u503C\u8868\u8FBE\u5F0F\u3002<code>if</code> \u8BED\u53E5\u53EF\u4EE5\u5D4C\u5957\uFF1A</p><div class="language-c line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \u8BED\u53E51</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \u8BED\u53E52</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \u8BED\u53E53</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> \u8BED\u53E5n</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>if</code> \u8BED\u53E5\u65E0\u8BBA\u5199\u6210\u51E0\u884C\u90FD\u662F\u4E00\u4E2A\u6574\u4F53\uFF0C\u5C5E\u4E8E\u4E00\u4E2A\u8BED\u53E5\u3002<code>else</code> \u90E8\u5206\u662F\u53E6\u4E00\u4E2A\u8BED\u53E5\u3002<code>else</code> \u8BED\u53E5\u662F\u53EF\u9009\u7684\uFF0C\u4F46\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C\u5FC5\u987B\u548C <code>if</code> \u8BED\u53E5\u914D\u5957\u4F7F\u7528\u3002</p><h2 id="\u4E8C\u3001\u5173\u7CFB\u8FD0\u7B97\u7B26\u548C\u5173\u7CFB\u8868\u8FBE\u5F0F" tabindex="-1">\u4E8C\u3001\u5173\u7CFB\u8FD0\u7B97\u7B26\u548C\u5173\u7CFB\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u4E8C\u3001\u5173\u7CFB\u8FD0\u7B97\u7B26\u548C\u5173\u7CFB\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p>C \u8BED\u8A00\u4E2D\u7528\u6765\u6BD4\u8F83\u4E24\u4E2A\u6570\u636E\u7684\u7B26\u53F7\u79F0\u4E3A<strong>\u5173\u7CFB\u8FD0\u7B97\u7B26</strong>\uFF0C\u5171 6 \u4E2A\uFF1A</p><ul><li>\u4F18\u5148\u7EA7\u8F83\u9AD8\uFF1A<code>&lt; &lt;= &gt;&gt;=</code></li><li>\u4F18\u5148\u7EA7\u8F83\u4F4E\uFF1A<code>== !=</code></li></ul><p>\u5173\u7CFB\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u4F4E\u4E8E\u7B97\u6570\u8FD0\u7B97\u7B26\u3001\u9AD8\u4E8E\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002<strong>\u5173\u7CFB\u8868\u8FBE\u5F0F</strong>\u662F\u7528\u5173\u7CFB\u8FD0\u7B97\u7B26\u5C06\u4E24\u4E2A\u6570\u503C\u6216\u6570\u503C\u8868\u8FBE\u5F0F\u8FDE\u63A5\u8D77\u6765\u7684\u5F0F\u5B50\uFF0C\u5982 <code>a+b&gt;c</code>\u3002\u5173\u7CFB\u8868\u8FBE\u5F0F\u7684\u503C\u662F\u4E00\u4E2A\u903B\u8F91\u503C\uFF0C\u5373\u201C\u771F\u201D\u6216\u201C\u5047\u201D\u3002C \u8BED\u8A00\u4E2D\uFF0C\u7528\u201C1\u201D\u8868\u793A\u201C\u771F\u201D\uFF0C\u7528\u201C2\u201D\u8868\u793A\u201C\u5047\u201D\u3002</p><h2 id="\u4E09\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u903B\u8F91\u8868\u8FBE\u5F0F" tabindex="-1">\u4E09\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u903B\u8F91\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u4E09\u3001\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u903B\u8F91\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p>C \u8BED\u8A00\u4E2D\u6709\u4E09\u79CD\u903B\u8F91\u8FD0\u7B97\u7B26\uFF1A</p><ul><li><code>&amp;&amp;</code>\uFF1A\u903B\u8F91\u4E0E AND\uFF0C\u53CC\u76EE\u8FD0\u7B97\u7B26(\u8981\u6C42\u6709\u4E24\u4E2A\u8FD0\u7B97\u5BF9\u8C61)</li><li><code>||</code>\uFF1A\u903B\u8F91\u6216 OR\uFF0C\u53CC\u76EE\u8FD0\u7B97\u7B26</li><li><code>!</code>\uFF1A\u903B\u8F91\u975E NOT\uFF0C\u5355\u76EE\u8FD0\u7B97\u7B26(\u53EA\u6709\u4E00\u4E2A\u8FD0\u7B97\u5BF9\u8C61)</li></ul><p>\u903B\u8F91\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u6B21\u5E8F\u4E3A\uFF1A</p><ul><li><code>!</code> \u6700\u9AD8\uFF0C<code>&amp;&amp;</code> \u6B21\u4E4B\uFF0C<code>||</code> \u6700\u5C0F\u3002</li><li><code>&amp;&amp;</code> \u548C <code>||</code> \u4F4E\u4E8E\u5173\u7CFB\u8FD0\u7B97\u7B26\uFF0C<code>!</code> \u9AD8\u4E8E\u7B97\u672F\u8FD0\u7B97\u7B26\u3002</li></ul><p>\u7528\u903B\u8F91\u8FD0\u7B97\u7B26\u5C06\u5173\u7CFB\u8868\u8FBE\u5F0F\u6216\u5176\u4ED6\u903B\u8F91\u91CF\u8FDE\u63A5\u8D77\u6765\u7684\u5F0F\u5B50\u5C31\u662F\u903B\u8F91\u8868\u8FBE\u5F0F\u3002</p><h2 id="\u56DB\u3001\u6761\u4EF6\u8FD0\u7B97\u7B26\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F" tabindex="-1">\u56DB\u3001\u6761\u4EF6\u8FD0\u7B97\u7B26\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u56DB\u3001\u6761\u4EF6\u8FD0\u7B97\u7B26\u548C\u6761\u4EF6\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><p>\u6761\u4EF6\u8FD0\u7B97\u7B26\u7531\u4E24\u4E2A\u7B26\u53F7 <code>?</code> \u548C <code>: </code> \u6784\u6210\uFF0C\u9700\u8981\u4E09\u4E2A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u662F C \u8BED\u8A00\u4E2D\u552F\u4E00\u7684\u4E09\u76EE\u8FD0\u7B97\u7B26\u3002\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u4E00\u822C\u5F62\u5F0F\u4E3A\uFF1A</p><div class="language-c line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8868\u8FBE\u5F0F1 </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> \u8868\u8FBE\u5F0F2 </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u8868\u8FBE\u5F0F3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5176\u6267\u884C\u8FC7\u7A0B\u4E3A\uFF1A\u82E5 <code> \u8868\u8FBE\u5F0F 1</code> \u4E3A\u771F\uFF0C\u5219\u53D6 <code> \u8868\u8FBE\u5F0F 2</code> \u7684\u503C\uFF1B\u5426\u5219\u53D6 <code> \u8868\u8FBE\u5F0F 3</code> \u7684\u503C\u3002<code> \u8868\u8FBE\u5F0F 2</code> \u548C <code> \u8868\u8FBE\u5F0F 3</code> \u53EF\u4EE5\u662F\u6570\u503C\u8868\u8FBE\u5F0F\u3001\u8D4B\u503C\u8868\u8FBE\u5F0F\u3001\u51FD\u6570\u8868\u8FBE\u5F0F\u3002\u6761\u4EF6\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u5927\u4E8E\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002</p><h2 id="\u4E94\u3001switch-\u9009\u62E9\u8BED\u53E5" tabindex="-1">\u4E94\u3001<code>switch</code> \u9009\u62E9\u8BED\u53E5 <a class="header-anchor" href="#\u4E94\u3001switch-\u9009\u62E9\u8BED\u53E5" aria-hidden="true">#</a></h2><p><code>if</code> \u8BED\u53E5\u53EA\u6709\u4E24\u4E2A\u5206\u652F\u53EF\u9009\uFF0C\u591A\u5206\u652F\u9009\u62E9\u4F7F\u7528 <code>if</code> \u8BED\u53E5\u7684\u5D4C\u5957\u65F6\uFF0C\u7A0B\u5E8F\u5197\u957F\u3001\u53EF\u8BFB\u6027\u4F4E\u3002C \u8BED\u8A00\u63D0\u4F9B <code>switch</code> \u8BED\u53E5\u5B9E\u73B0\u591A\u5206\u652F\u9009\u62E9\u3002</p><div class="language-c line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> \u5E38\u91CF1</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> \u8BED\u53E51</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> \u5E38\u91CF2</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> \u8BED\u53E52</span></span>
<span class="line"><span style="color:#F07178;">    ......</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> \u5E38\u91CFn</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> \u8BED\u53E5n</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> \u8BED\u53E5n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><ul><li>\u5176\u4E2D\u7684 <code>\u8868\u8FBE\u5F0F</code> \u503C\u5FC5\u987B\u662F\u6574\u6570\u7C7B\u578B(\u5305\u62EC\u5B57\u7B26\u578B)\u3002</li><li>\u5982\u679C <code>\u8868\u8FBE\u5F0F</code> \u7684\u503C\u4E0E <code>case</code> \u6807\u7B7E\u4E2D\u7684\u5E38\u91CF\u76F8\u7B49\uFF0C\u5219\u6267\u884C\u5BF9\u5E94\u7684\u8BED\u53E5\uFF1B\u82E5\u6CA1\u6709\u4E0E <code>\u8868\u8FBE\u5F0F</code> \u76F8\u5BF9\u5E94\u7684 <code>case</code> \u503C\uFF0C\u5219\u6267\u884C <code>default</code> \u8BED\u53E5\u3002</li><li><code>default</code> \u8BED\u53E5\u4E3A\u53EF\u9009\u8BED\u53E5\u3002</li><li><code>case</code> \u8BED\u53E5\u7684\u987A\u5E8F\u4E0D\u5F71\u54CD\u6267\u884C\u7ED3\u679C\uFF0C\u6BCF\u4E00\u4E2A <code>case</code> \u5E38\u91CF\u5FC5\u987B\u4E92\u4E0D\u76F8\u540C\u3002</li><li>\u82E5 <code>\u8868\u8FBE\u5F0F</code> \u7684\u503C\u4E0E\u6BCF\u4E00\u4E2A <code>case</code> \u5339\u914D\uFF0C\u5219\u6267\u884C\u5B8C\u8BE5 <code>case</code> \u540E\u9762\u7684\u8BED\u53E5\u540E\uFF0C\u4E0D\u518D\u8FDB\u884C\u5224\u65AD\uFF0C\u4ECE\u6B64 <code>case</code> \u6807\u7B7E\u5F00\u59CB\u6267\u884C\u4E0B\u9762\u7684\u6240\u6709\u8BED\u53E5\u3002\u56E0\u6B64\u901A\u5E38\u5728 <code>case</code> \u540E\u9762\u52A0 <code>break</code> \u8BED\u53E5\u8DF3\u51FA <code>switch</code>\u3002</li></ul><div class="language-c line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getchar</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,29),o=[p];function c(r,t,i,F,D,d){return a(),n("div",null,o)}var u=s(e,[["render",c]]);export{b as __pageData,u as default};