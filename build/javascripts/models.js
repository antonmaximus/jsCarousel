var CAROUSEL=function(i,t){"use strict";function n(i){this.carousel=document.getElementById(i.divId),this.id=i.divId,this.images=[],this.options={w:i.width||400,h:i.height||300,bg:i.backgroundColor,time:Math.abs(i.tranTime)||1800},this.options.viewMode=this.options.w>=this.options.h?"landscape":"portrait";var t=this;i.flickrTag?s.handleFlickrRequest(i.flickrTag,function(i){e.renderImagesAndNavigation(i,t)}):a.loadJsonViaAjax(i.jsonPath,function(i){e.renderImagesAndNavigation(i.items,t)})}var a=i.HELPERFUNCTIONS||{},s=i.HELPERFUNCTIONSFLICKR||{},e=i.CAROUSELVIEW||{},o=t||{};return o.Carousel=n,o}(this,CAROUSEL);