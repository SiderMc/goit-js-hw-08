var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var o,i,r,f,a,u,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(w,t),l?y(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=r}function w(){var e=v();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return m?d(n,r-(e-c)):n}(e))}function O(e){return a=void 0,b&&o?y(e):(o=i=void 0,f)}function S(){var e=v(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return j(u);if(m)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=g(t)||0,p(n)&&(l=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},S.flush=function(){return void 0===a?f:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=i.test(e);return a||r.test(e)?f(e.slice(2),a?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y={};b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),localStorage.removeItem("feedback-form-state"),b.reset()})),function(e){if(localStorage.getItem("feedback-form-state")){y=JSON.parse(localStorage.getItem("feedback-form-state"));for(let t in y)e.elements[t].value=y[t]}}(b);
//# sourceMappingURL=03-feedback.69ca141d.js.map
