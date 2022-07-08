import{_ as s,c as n,o as a,a as l}from"./app.7c685d75.js";const C=JSON.parse('{"title":"04 - \u9762\u5411\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9762\u5411\u8FC7\u7A0B(POP)\u4E0E\u9762\u5411\u5BF9\u8C61(OOP)","slug":"\u4E00\u3001\u9762\u5411\u8FC7\u7A0B-pop-\u4E0E\u9762\u5411\u5BF9\u8C61-oop"},{"level":2,"title":"\u4E8C\u3001\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528","slug":"\u4E8C\u3001\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528"},{"level":2,"title":"\u4E09\u3001\u7C7B\u7684\u7EE7\u627F","slug":"\u4E09\u3001\u7C7B\u7684\u7EE7\u627F"}],"relativePath":"python-language/04.md","lastUpdated":1657295097000}'),p={name:"python-language/04.md"},o=l(`<h1 id="_04-\u9762\u5411\u5BF9\u8C61" tabindex="-1">04 - \u9762\u5411\u5BF9\u8C61 <a class="header-anchor" href="#_04-\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9762\u5411\u8FC7\u7A0B-pop-\u4E0E\u9762\u5411\u5BF9\u8C61-oop" tabindex="-1">\u4E00\u3001\u9762\u5411\u8FC7\u7A0B(POP)\u4E0E\u9762\u5411\u5BF9\u8C61(OOP) <a class="header-anchor" href="#\u4E00\u3001\u9762\u5411\u8FC7\u7A0B-pop-\u4E0E\u9762\u5411\u5BF9\u8C61-oop" aria-hidden="true">#</a></h2><p>\u56FE\u7075\u5956\u5F97\u4E3B\u5C3C\u53E4\u62C9\u65AF\xB7\u6C83\u65AF(Nicklaus Wirth)\uFF1A</p> \u7A0B\u5E8F = \u7B97\u6CD5 + \u6570\u636E\u7ED3\u6784 <p>\u8FD9\u4E2A\u8BF4\u6CD5\uFF0C\u6F14\u7ECE\u51FA\u6765\u7684\u7F16\u7A0B\u8303\u5F0F\u4F7F\u7ED3\u6784\u5316\u7A0B\u5E8F\u8BBE\u8BA1\uFF0C\u5373\u9762\u5411\u8FC7\u7A0B\u7F16\u7A0B(Procedure Oriented Programming\uFF0CPOP)\u3002POP \u7684\u5F00\u53D1\u8303\u5F0F\u662F\u628A\u7A0B\u5E8F\u5212\u5206\u4E3A\u4E24\u4E2A\u76F8\u4E92\u5206\u79BB\u7684\u90E8\u5206\uFF1A\u6570\u636E\u8868\u793A(\u5373\u6570\u636E\u7ED3\u6784)\u548C\u6570\u636E\u64CD\u4F5C(\u5373\u7B97\u6CD5)\u3002\u7B97\u6CD5\u53EF\u4EE5\u901A\u8FC7\u987A\u5E8F\u3001\u9009\u62E9\u3001\u5FAA\u73AF\u4E09\u79CD\u57FA\u672C\u63A7\u5236\u7ED3\u6784\u6765\u5B9E\u73B0\uFF0C\u6570\u636E\u7ED3\u6784\u6307\u7684\u662F\u7ED3\u6784\u5316\u7A0B\u5E8F\u8BBE\u8BA1\u3002\u56E0\u6B64\uFF0CPOP \u7684\u6838\u5FC3\u4FA7\u91CD\u4E8E\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u7684\u5F00\u53D1\u4E8E\u4F18\u5316\uFF0C\u5F3A\u8C03\u7A0B\u5E8F\u7684\u6613\u8BFB\u6027\u3002Linux\u3001Git \u90FD\u662F\u57FA\u4E8E POP \u7684\u3002</p><p>POP \u7684\u7F3A\u70B9\u5728\u4E8E\uFF0C\u7A0B\u5E8F\u4E4B\u95F4\u73AF\u73AF\u76F8\u6263\uFF0C\u5982\u679C\u9700\u6C42\u53D1\u751F\u53D8\u5316\uFF0C\u4EE3\u7801\u6539\u52A8\u4F1A\u5F88\u5927\uFF0C\u5BF9\u8F6F\u4EF6\u540E\u671F\u7EF4\u62A4\u548C\u6269\u5C55\u4E0D\u5229\u3002\u800C\u9762\u5411\u5BF9\u8C61\u8BBE\u8BA1(Object Oriented Programming\uFF0COOP)\u5F88\u597D\u5730\u89E3\u51B3\u4E86\u8FD9\u4E00\u95EE\u9898\uFF0C\u5176\u8BBE\u8BA1\u601D\u60F3\u6982\u62EC\u4E3A\uFF1A</p> \u7A0B\u5E8F = \u5BF9\u8C61 + \u6D88\u606F\u4F20\u9012 <p>\u7528\u6237\u9996\u5148\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6570\u636E\u7ED3\u6784 \u2014 \u7C7B\uFF0C\u7136\u540E\u7528\u8BE5\u7C7B\u4E0B\u7684\u5BF9\u8C61\u7EC4\u88C5\u7A0B\u5E8F\u3002\u5BF9\u8C61\u4E4B\u95F4\u901A\u8FC7\u201C\u6D88\u606F\u201D\u8FDB\u884C\u901A\u8BAF\u3002\u6BCF\u4E2A\u5BF9\u8C61\u4E2D\u65E2\u5305\u62EC\u6570\u636E\uFF0C\u4E5F\u5305\u62EC\u5BF9\u6570\u636E\u7684\u5904\u7406\u3002\u6BCF\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u5F7C\u6B64\u534F\u4F5C\u53C8\u4E92\u4E0D\u5E72\u6270\u3002</p><p>OOP \u4F7F\u5F97\u7A0B\u5E8F\u66F4\u5BB9\u6613\u6269\u5C55\u548C\u7EF4\u62A4\u3002\u4F46\u7F3A\u70B9\u4E5F\u6709\uFF1A\u6267\u884C\u6548\u7387\u6BD4 POP \u4F4E\u3002\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u79D1\u5B66\u8BA1\u7B97\u548C\u8981\u6C42\u9AD8\u6548\u7684\u4EFB\u52A1\uFF0CPOP \u6BD4 OOP \u66F4\u52A0\u5B9E\u7528\u3002\u800C\u4E14\uFF0COOP \u7684\u590D\u6742\u5EA6\u5F80\u5F80\u9AD8\u4E8E POP\uFF0C\u5BF9\u4E8E\u5C0F\u578B\u7A0B\u5E8F\uFF0C\u4F7F\u7528 POP \u8981\u66F4\u52A0\u6E05\u6670\u3002</p><p>ErLang \u8BED\u8A00\u7684\u53D1\u660E\u4EBA\u4E54\xB7\u963F\u59C6\u65AF\u7279\u6717(Joe Armstrong)\u5410\u69FD\uFF1A</p><blockquote><p>\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u5B83\u603B\u662F\u9644\u5E26\u7740\u6240\u6709\u5B83\u9700\u8981\u7684\u9690\u542B\u73AF\u5883\uFF0C\u4F60\u60F3\u8981\u4E00\u6839\u9999\u8549\uFF0C\u4F46\u5F97\u5230\u7684\u5374\u662F\u4E00\u53EA\u5927\u7329\u7329\u62FF\u7740\u9999\u8549\uFF0C\u800C\u4E14\u8FD8\u6709\u6574\u7247\u4E1B\u6797\u3002</p></blockquote><p>\u4E3A\u4E86\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898\uFF0CPOP \u9996\u5148\u5F3A\u8C03\u201C\u600E\u4E48\u53BB\u505A(How todo)\u201D\uFF0C\u5BF9\u5E94\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4E00\u4E2A\u4E2A\u529F\u80FD\u5757 \u2014 \u51FD\u6570(Function)\u3002\u800C OOP \u9996\u5148\u8003\u8651\u201C\u662F\u8C01\u53BB\u505A(Who to do)\u201D\uFF0C\u5BF9\u5E94\u7684\u89E3\u51B3\u65B9\u6848\u4F7F\u4E00\u4E2A\u4E2A\u201C\u5BF9\u8C61\u201D\uFF0C\u8FD9\u4E9B\u5BF9\u8C61\u4E3A\u89E3\u51B3\u95EE\u9898\u6240\u5FC5\u987B\u5177\u5907\u7684\u80FD\u529B\uFF0C\u6784\u6210\u4E00\u4E2A\u4E2A\u65B9\u6CD5(Method)\u3002</p><p>OOP \u4E2D\u7684\u5BF9\u8C61\u662F\u7531\u6570\u636E\u548C\u65B9\u6CD5(\u5373\u5BF9\u6570\u636E\u7684\u64CD\u4F5C)\u6784\u6210\u7684\u3002</p> \u7A0B\u5E8F = \u5BF9\u8C61 + \u6D88\u606F\u4F20\u9012 = (\u6570\u636E + \u65B9\u6CD5) + \u6D88\u606F\u4F20\u9012 <p>\u5C06\u5177\u6709\u7684\u76F8\u540C\u5C5E\u6027(\u6570\u636E)\u548C\u76F8\u540C\u884C\u4E3A(\u5BF9\u6570\u636E\u7684\u64CD\u4F5C)\u5C01\u88C5\u5728\u4E00\u8D77\uFF0C\u5373\u521B\u9020\u4E86\u65B0\u7684\u7C7B\u3002\u7C7B\u5C31\u662F\u5BF9\u67D0\u4E00\u4E8B\u7269\u7684\u63CF\u8FF0\uFF0C\u5B83\u662F\u62BD\u8C61\u7684\u3001\u6982\u5FF5\u4E0A\u7684\u5B9A\u4E49\u3002\u5BF9\u8C61\u662F\u5B9E\u9645\u5B58\u5728\u7684\u8BE5\u7C7B\u5341\u4E94\u4E2D\u7684\u4E2A\u4F53\uFF0C\u5BF9\u8C61\u4E5F\u88AB\u79F0\u4E3A\u5B9E\u4F8B(instance)\u3002\u4E00\u4E2A\u7C7B\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u6BCF\u4E2A\u5BF9\u8C61\u662F\u72EC\u7ACB\u7684\u5B58\u5728\uFF0C\u4FEE\u6539\u5176\u4E2D\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u4E0D\u5F71\u54CD\u5176\u4ED6\u5BF9\u8C61(\u5168\u5C40\u5171\u4EAB\u7684\u9759\u6001\u6210\u5458\u9664\u5916)\u3002\u8FD9\u4F53\u73B0\u4E86 OOP \u7684\u4E00\u4E2A\u91CD\u8981\u7279\u6027 \u2014 \u5C01\u88C5\u6027\u3002</p><p>OOP \u7684\u91CD\u70B9\u662F\u5BF9\u7C7B\u7684\u8BBE\u8BA1\uFF0C\u800C\u975E\u5BF9\u8C61\u7684\u5B9E\u73B0\u3002</p><h2 id="\u4E8C\u3001\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" tabindex="-1">\u4E8C\u3001\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#\u4E8C\u3001\u7C7B\u7684\u5B9A\u4E49\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u800C\u8A00\uFF0C\u518D\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\uFF0C\u51FD\u6570\u548C\u65B9\u6CD5\u53EF\u4EE5\u770B\u4F5C\u540C\u4E49\u8BCD\u3002\u4F46\u518D Python \u4E2D\uFF0C\u51FD\u6570\u548C\u65B9\u6CD5\u8FD8\u662F\u6709\u6240\u4E0D\u540C\u7684\u3002\u65B9\u6CD5\u662F\u6307\u4E8E\u7279\u5B9A\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u51FD\u6570\uFF0C\u56E0\u6B64\uFF0C\u628A\u7C7B\u4E2D\u7684\u51FD\u6570\u79F0\u4E3A\u65B9\u6CD5(\u7C7B\u4F3C\u4E8E Java)\uFF0C\u800C\u628A\u4E0D\u4E0E\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u666E\u901A\u529F\u80FD\u79F0\u4E3A\u51FD\u6570\u3002</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">China</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u7C7B\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u6784\u9020\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name            </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">__age</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> age            </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u5BF9\u8C61\u7684\u79C1\u6709\u5C5E\u6027\uFF0C\u7C7B\u7684\u5916\u90E8\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u7C7B\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">__age</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">area</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># \u5B9E\u4F8B\u5316\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Niu</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Liu 18 China</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Niu 18 China</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Python \u4E2D\u7C7B\u4E2D\u7684\u5C5E\u6027\u5206\u4E3A\u4E24\u7C7B\uFF1A\u5C5E\u4E8E\u7C7B\u7684\u5C5E\u6027\u548C\u5C5E\u4E8E\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><ul><li>\u5C5E\u4E8E\u7C7B\u7684\u5C5E\u6027\u4E3A\u6240\u6709\u5BF9\u8C61\u5171\u4EAB\uFF0C\u7C7B\u4F3C\u4E8E C++\u3001Java \u4E2D\u7684\u9759\u6001\u5C5E\u6027\u3002</li><li>\u5C5E\u4E8E\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u6307\u5728\u6784\u9020\u65B9\u6CD5 <code>__init__()</code> \u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027(\u4E5F\u53EF\u4EE5\u5728\u5176\u4ED6\u6210\u5458\u65B9\u6CD5\u4E2D\u5B9A\u4E49)\uFF0C\u8FD9\u7C7B\u5C5E\u6027\u5FC5\u987B\u4EE5 <code>self</code> \u5F00\u5934\uFF0C\u540C\u4E00\u4E2A\u7C7B\u5B9A\u4E49\u4E0B\u7684\u5BF9\u8C61\u4E4B\u95F4\u4E92\u4E0D\u5F71\u54CD\u3002</li><li>\u4EE5\u4E24\u4E2A\u4E0B\u5212\u7EBF <code>__</code> \u5F00\u59CB\u7684\u5C5E\u6027\u662F\u79C1\u6709\u5C5E\u6027\uFF0C\u5728\u7C7B\u7684\u5916\u90E8\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\uFF0C\u9700\u8981\u501F\u52A9\u516C\u6709\u6210\u5458\u65B9\u6CD5(\u7C7B\u4F3C\u4E8E\u7C7B\u7684\u5916\u90E8\u63A5\u53E3)\u3002\u5982\u4E0A\u9762\u4EE3\u7801\u4E2D\u5B9A\u4E49\u7684 <code>say()</code> \u65B9\u6CD5\u5C31\u53EF\u4EE5\u8BBF\u95EE\u79C1\u6709\u5C5E\u6027 <code>__age</code>\u3002\u7C7B\u4F3C\u7684\uFF0C\u4EE5\u4E24\u4E2A\u4E0B\u5212\u7EBF\u5F00\u59CB\u7684\u65B9\u6CD5\u65B9\u6CD5\u8868\u660E\u5B83\u662F\u4E00\u4E2A\u79C1\u6709\u65B9\u6CD5\uFF0C\u79C1\u6709\u65B9\u6CD5\u53EA\u80FD\u5728\u7C7B\u7684\u5185\u90E8\u88AB\u8C03\u7528\u3002</li><li>\u4EE5\u4E00\u4E2A\u4E0B\u5212\u7EBF <code>_</code> \u5F00\u59CB\u7684\u5C5E\u6027\u8868\u793A\u4FDD\u62A4\u5C5E\u6027\uFF0C\u4E0D\u80FD\u901A\u8FC7 <code>from module import *</code> \u7684\u65B9\u5F0F\u5BFC\u5165\uFF0C\u53EA\u5BF9\u81EA\u5DF1\u548C\u5B50\u7C7B\u5F00\u653E\u6743\u9650\u3002</li><li>\u524D\u540E\u90FD\u6709\u4E24\u4E2A\u4E0B\u5212\u7EBF\u7684\u65B9\u6CD5\uFF0C\u8868\u793A Python \u81EA\u5B9A\u4E49\u7684\u7279\u6B8A\u65B9\u6CD5\uFF0C\u5982 <code>__init__</code>\u3002</li></ul><p>Python \u4E2D\u5B9A\u4E49\u65B9\u6CD5\u4E5F\u4F7F\u7528 <code>def</code> \u5173\u952E\u5B57\uFF0C\u65B9\u6CD5\u53C2\u6570\u5FC5\u987B\u5305\u62EC <code>self</code> \u4E14\u5FC5\u987B\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><p>Python \u53EF\u4EE5\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u4E34\u65F6\u5C5E\u6027\uFF1A</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">height</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">180</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E34\u65F6\u5C5E\u6027\u4EC5\u5C5E\u4E8E\u88AB\u6DFB\u52A0\u7684\u5BF9\u8C61\uFF0C\u4E0D\u5F71\u54CD\u5176\u4ED6\u7684\u5BF9\u8C61\u3002</p><h2 id="\u4E09\u3001\u7C7B\u7684\u7EE7\u627F" tabindex="-1">\u4E09\u3001\u7C7B\u7684\u7EE7\u627F <a class="header-anchor" href="#\u4E09\u3001\u7C7B\u7684\u7EE7\u627F" aria-hidden="true">#</a></h2><p>\u5728 OOP \u4E2D\uFF0C\u7EE7\u627F(Inheritance)\u662F\u8F6F\u4EF6\u590D\u7528\u7684\u5173\u952E\u6280\u672F\u3002\u7EE7\u627F\u4F7F\u5B50\u7C7B\u53EF\u4EE5\u590D\u7528\u7236\u7C7B\u7684\u4F18\u79C0\u5C5E\u6027\uFF0C\u540C\u65F6\u8FDB\u4E00\u6B65\u6269\u5C55\u65B0\u7684\u7279\u6027\u3002</p><p>\u5728\u5DF2\u6709\u7684\u7C7B\u7684\u57FA\u7840\u4E0A\u65B0\u589E\u81EA\u5DF1\u7684\u7279\u6027\uFF0C\u7EE7\u800C\u4EA7\u751F\u65B0\u7684\u7C7B\u7684\u8FC7\u7A0B\uFF0C\u79F0\u4E3A\u6D3E\u751F\uFF0C\u628A\u65E2\u6709\u7684\u7C7B\u79F0\u4E3A\u57FA\u7C7B(Base Class)\u3001\u8D85\u7C7B(Super Class)\u6216\u8005\u7236\u7C7B(Parent Class)\uFF0C\u5C06\u6D3E\u751F\u51FA\u7684\u65B0\u7C7B\u79F0\u4E3A\u6D3E\u751F\u7C7B(Derived CLass)\u6216\u8005\u5B50\u7C7B(Subclass)\u3002</p><p>Python \u4E0D\u4EC5\u652F\u6301\u7C7B\u7684\u7EE7\u627F\uFF0C\u8FD8\u652F\u6301\u591A\u7EE7\u627F\u3002\u4F46\u591A\u7EE7\u627F\u5B58\u5728\u201C\u83F1\u5F62\u7EE7\u627F\u201D\u7684\u98CE\u9669\uFF1A</p><blockquote><p>\u83F1\u5F62\u7EE7\u627F\uFF1A\u4E24\u4E2A\u7C7B\u540C\u65F6\u7EE7\u627F\u4E8E\u540C\u4E00\u4E2A\u7236\u7C7B\uFF0C\u53C8\u6709\u5B50\u7C7B\u540C\u65F6\u7EE7\u627F\u8FD9\u4E24\u4E2A\u5B50\u7C7B\uFF0C\u6700\u540E\u5B50\u7C7B\u4E2D\u7684\u5C5E\u6027\u5B58\u5728\u4E8C\u4E49\u6027\u95EE\u9898\uFF0C\u5373\u4E0D\u77E5\u9053\u4ED6\u4EEC\u6765\u81EA\u54EA\u4E2A\u7236\u7C7B\u3002</p></blockquote><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    area </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">China</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u7C7B\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u6784\u9020\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name            </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">age</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> age              </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u5BF9\u8C61\u7684\u79C1\u6709\u5C5E\u6027\uFF0C\u7C7B\u7684\u5916\u90E8\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u5B9A\u4E49\u7C7B\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">area</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Student</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    grad </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> grade</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># \u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u521D\u59CB\u5316\u7236\u7C7B\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        Person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> age</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">grade</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u91CD\u5199\u7236\u7C7B\u7684\u540C\u540D\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">grade</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">stu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Student</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Liu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">stu</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Liu 19 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7EE7\u627F\u591A\u4E2A\u7236\u7C7B\u65F6\uFF0C\u82E5\u7236\u7C7B\u4E2D\u7531\u76F8\u540C\u7684\u65B9\u6CD5\u540D\uFF0C\u800C\u5728\u5B50\u7C7B\u4F7F\u7528\u65F6\u672A\u6307\u5B9A\uFF0CPython \u5C06\u4ECE\u5706\u62EC\u53F7\u4E2D\u7684\u7236\u7C7B\u5B89\u88C5\u4ECE\u5DE6\u5411\u53F3\u7684\u987A\u5E8F\u67E5\u627E\u8BE5\u65B9\u6CD5\uFF0C\u56E0\u6B64\u9700\u6CE8\u610F\u7236\u7C7B\u7684\u987A\u5E8F\u3002</p><p>\u5F53\u7236\u7C7B\u7684\u65B9\u6CD5\u4E0D\u80FD\u6EE1\u8DB3\u5B50\u7C7B\u7684\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u91CD\u5199\u7236\u7C7B\u7684\u65B9\u6CD5\uFF0C\u79F0\u4E3A\u8986\u5199(Override)\u3002</p>`,33),e=[o];function c(r,t,y,D,F,A){return a(),n("div",null,e)}var b=s(p,[["render",c]]);export{C as __pageData,b as default};