(function(window){var svgSprite='<svg><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z" fill="#666666" ></path></symbol><symbol id="icon-album" viewBox="0 0 1024 1024"><path d="M256 448m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"  ></path><path d="M714.688 256 181.312 256C116.64 256 64 308.64 64 373.312l0 405.376C64 843.36 116.64 896 181.312 896l533.376 0C779.36 896 832 843.36 832 778.688L832 373.312C832 308.64 779.36 256 714.688 256zM768 778.688C768 808.096 744.096 832 714.688 832L181.312 832C151.936 832 128 808.096 128 778.688L128 373.312C128 343.936 151.936 320 181.312 320l533.376 0C744.096 320 768 343.936 768 373.312L768 778.688z"  ></path><path d="M842.688 128 256 128C238.336 128 224 142.336 224 160s14.336 32 32 32l586.688 0C872.096 192 896 215.936 896 245.312L896 640c0 17.696 14.304 32 32 32s32-14.304 32-32L960 245.312C960 180.64 907.36 128 842.688 128z"  ></path><path d="M672.64 448.736c-129.056 0-143.936 72.672-152.832 116.096-7.2 35.168-10.4 39.968-28.64 42.88-34.976 5.568-44 0.192-58.912-8.8-15.456-9.312-36.672-22.08-77.952-23.168C227.616 573.12 194.112 723.84 192.704 730.24c-3.712 17.28 7.264 34.304 24.544 38.016 2.272 0.512 4.544 0.704 6.752 0.704 14.752 0 28-10.24 31.264-25.248 0.224-1.056 23.232-104.032 95.488-104.032 0.64 0 1.28 0 1.92 0.032 24.352 0.608 33.632 6.208 46.496 13.984 24.032 14.464 48.352 25.76 102.08 17.184 64.192-10.272 74.432-60.192 81.184-93.216 8.32-40.512 13.312-64.928 90.144-64.928 17.696 0 32-14.336 32-32S690.304 448.736 672.64 448.736z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)