/*! grunt-grunticon Stylesheet Loader - v2.0.2 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

(function(e){function t(t,n,r,o){"use strict";function a(){for(var e,n=0;u.length>n;n++)u[n].href&&u[n].href.indexOf(t)>-1&&(e=!0);e?i.media=r||"all":setTimeout(a)}var i=e.document.createElement("link"),c=n||e.document.getElementsByTagName("script")[0],u=e.document.styleSheets;return i.rel="stylesheet",i.href=t,i.media="only x",i.onload=o||function(){},c.parentNode.insertBefore(i,c),a(),i}var n=function(r,o){"use strict";if(r&&3===r.length){var a=e.navigator,i=e.Image,c=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===a.userAgent.indexOf("Chrome")||-1!==a.userAgent.indexOf("Series40")),u=new i;u.onerror=function(){n.method="png",t(r[2])},u.onload=function(){var e=1===u.width&&1===u.height,a=r[e&&c?0:e?1:2];n.method=e&&c?"svg":e?"datapng":"png",n.href=a,t(a,null,null,o)},u.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",document.documentElement.className+=" grunticon"}};n.loadCSS=t,e.grunticon=n})(this);(function(e,t){"use strict";var n=t.document,r="grunticon:",o=function(e){if(n.attachEvent?"complete"===n.readyState:"loading"!==n.readyState)e();else{var t=!1;n.addEventListener("readystatechange",function(){t||(t=!0,e())},!1)}},a=function(e){for(var t,o,a,i,c,u,s={},l=n.styleSheets,d=0;l.length>d;d++)if(l[d].href&&l[d].href.indexOf(e)>-1){t=l[d];break}if(!t)return s;for(o=t.cssRules?t.cssRules:t.rules,d=0;o.length>d;d++)a=o[d].cssText,i=r+o[d].selectorText,c=a.split(");")[0].match(/US\-ASCII\,([^"']+)/),c&&c[1]&&(u=decodeURIComponent(c[1]),s[i]=u);return s},i=function(e){var t,o,a;o="data-grunticon-embed";for(var i in e)if(a=i.slice(r.length),t=n.querySelectorAll(a+"["+o+"]"),t.length)for(var c=0;t.length>c;c++)t[c].innerHTML=e[i],t[c].style.backgroundImage="none",t[c].removeAttribute(o);return t},c=function(){o(function(){i(a(e.href))})};e.embedIcons=i,e.getIcons=a,e.ready=o,e.svgLoadedCallback=c})(grunticon,this);