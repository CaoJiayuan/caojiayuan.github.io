"use strict";(self.webpackChunkgithub_io_document=self.webpackChunkgithub_io_document||[]).push([[669],{6569:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3286b453",path:"/notes/010-v2ray-config.html",title:"v2ray configs",lang:"zh-CN",frontmatter:{title:"v2ray configs"},excerpt:"",headers:[{level:3,title:"Compose (using tls)",slug:"compose-using-tls",children:[]},{level:3,title:"[server] etc/config.json  (using tls)",slug:"server-etc-config-json-using-tls",children:[]},{level:3,title:"[client] config.json  (using tls)",slug:"client-config-json-using-tls",children:[]}],filePathRelative:"notes/010-v2ray-config.md",git:{updatedTime:1680856038e3,contributors:[{name:"CaoJiayuan",email:"cjy632258@hotmail.com",commits:1}]}}},7695:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var p=a(6252);const t=(0,p.Uk)("A easy way to ..., you know what i mean (see "),o={href:"https://toutyrater.github.io/",target:"_blank",rel:"noopener noreferrer"},e=(0,p.Uk)("白话文教程"),l=(0,p.Uk)(")"),r=(0,p.uE)('<h3 id="compose-using-tls" tabindex="-1"><a class="header-anchor" href="#compose-using-tls" aria-hidden="true">#</a> Compose (using tls)</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">app</span><span class="token punctuation">:</span>\n  <span class="token key atrule">image</span><span class="token punctuation">:</span> v2ray/official\n  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> /root/.acme.sh/domain/<span class="token punctuation">:</span>/etc/cert\n    <span class="token punctuation">-</span> ./etc/<span class="token punctuation">:</span>/etc/v2ray\n  <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> 10443<span class="token punctuation">:</span><span class="token number">443</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="server-etc-config-json-using-tls" tabindex="-1"><a class="header-anchor" href="#server-etc-config-json-using-tls" aria-hidden="true">#</a> [server] etc/config.json (using tls)</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/etc/v2ray/access.log&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/etc/v2ray/error.log&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">64</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tlsSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;certificates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;certificateFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/etc/cert/fullchain.cer&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;keyFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/etc/cert/domain.key&quot;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="client-config-json-using-tls" tabindex="-1"><a class="header-anchor" href="#client-config-json-using-tls" aria-hidden="true">#</a> [client] config.json (using tls)</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;domainOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;auth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;noauth&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbound&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n     <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;domain&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10443</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b831381d-6324-4d53-ad4f-8cda48b30811&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">64</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tls&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>',6),c={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("blockquote",null,[(0,p._)("p",null,[t,(0,p._)("a",o,[e,(0,p.Wm)(a)]),l])]),r],64)}}}}]);