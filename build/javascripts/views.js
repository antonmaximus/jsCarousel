var CAROUSELVIEW=function(e,t){"use strict";function a(e,t){t.images=e.slice(),i(t),s(t)}function s(e){var t=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),i=document.createElement("a"),l=document.createElement("a");t.className="navigation",a.className="chevron rightChev",s.className="chevron leftChev",i.className="download",l.className="pause",a.dataset.step=-e.options.w,s.dataset.step=e.options.w,e.carousel.dataset.autoStep=-e.options.w,e.carousel.dataset.time=e.options.time,i.download=!0,t.appendChild(s),t.appendChild(a),t.appendChild(i),t.appendChild(l),e.carousel.insertAdjacentHTML("afterbegin",t.outerHTML),e.carousel.addEventListener("click",o,!1),n.autoMove(e.carousel)}function i(e){var t=document.createElement("div"),a=document.createElement("ul");e.carousel.className="carousel",t.className="viewport",a.className="filmstrip",e.options.bg&&(t.style.backgroundColor=e.options.bg),e.carousel.style.width=e.options.w+"px",e.carousel.style.height=e.options.h+"px",a.style.width=e.options.w*e.images.length+"px",a.dataset.totalWidth=e.options.w*e.images.length,e.carousel.dataset.viewingWidth=e.options.w,e.images.forEach(function(t){var s=document.createElement("li"),i=document.createElement("img");s.style.width=e.options.w+"px",i.src=t.path,i.alt=t.title,i.title=t.title,i.onload=function(){"landscape"==e.options.viewMode?this.height>e.options.h?this.style.height="100%":this.parentNode.style.lineHeight=e.options.h+"px":this.height>e.options.h?this.style.height="100%":(this.parentNode.style.lineHeight=e.options.h+"px",this.width>e.options.w&&(this.style.width="100%"))},s.appendChild(i),a.appendChild(s)}),t.appendChild(a),e.carousel.appendChild(t)}function o(e){var t=e.target||e.srcElement,a=t.className;a.indexOf("chevron")>-1?(n.moveCarouselByStep(this,Number(t.dataset.step)),n.stopCarousel(this),n.autoMove(this)):a.indexOf("download")>-1?n.downloadVisiblePhotoHandler(this,t):a.indexOf("pause")>-1&&n.pauseButtonHandler(this,t)}var n=e.CAROUSELCONTROLLER||{},l=t||{};return l.renderImagesAndNavigation=a,l}(this,CAROUSELVIEW);