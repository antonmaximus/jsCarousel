var CAROUSELCONTROLLER=function(t,e){"use strict";function a(t){clearInterval(t.dataset.intervId),t.dataset.intervId=""}function i(t){var e=Number(t.dataset.autoStep),a=Number(t.dataset.time),i=setInterval(function(){r(t,e)},a);t.dataset.intervId=i}function r(t,e){var a=l.getChildWithClassName(l.getChildWithClassName(t,"viewport"),"filmstrip"),i=Number(a.style.marginLeft.replace("px","")),r=Number(a.dataset.totalWidth);i+=e,Math.abs(i)===r?i=0:i>0&&(i=-(r-e)),a.style.marginLeft=i+"px",t.dataset.autoStep=e}function s(t,e){var a=l.getChildWithClassName(l.getChildWithClassName(t,"viewport"),"filmstrip"),i=Number(a.style.marginLeft.replace("px","")),r=Number(t.dataset.viewingWidth),s=Math.abs(i/r),n=a.children[s].firstChild;e.download=n.alt.trim().split(" ").join("_").split('"').join("").split("'").join(""),e.href=n.src}function n(t){t.dataset.intervId?a(t):i(t)}var l=t.HELPERFUNCTIONS||{},o=e||{};return o.stopCarousel=a,o.autoMove=i,o.moveCarouselByStep=r,o.downloadVisiblePhotoHandler=s,o.pauseButtonHandler=n,o}(this,CAROUSELCONTROLLER);