
(function($){

	var setting = {
		imgWrap : "imghead",
		wrapper : "preview"
	}

	$.fn.extend({
		"upload":function(options){
			var opt = $.extend({},setting,options);
			var _self = this;
			var _this = $(this);
			var oWrap = $("#"+opt.wrapper);
			var ret = null;
			_self.change(function(){
				if(!/(.gif|png|jpeg|jpg)$/.test(this.value)){
					alert("图片格式不合法！");
				}else{
					if(this.files && this.files[0]){
						oWrap.append('<img id='+opt.imgWrap+'>');
						var oImg = $("#"+opt.imgWrap);
						oImg.onload = function(){};
						var file = new FileReader();
						file.onload = function(e){
							oImg.attr("src",e.target.result);
						}
						file.readAsDataURL(this.files[0]);
						ret = this.files[0];
					}else{
					    var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
					    this.select();
					    var src = document.selection.createRange().text;
					    oWrap.append('<img id='+opt.imgWrap+'>');
					    var oImg = $("#"+opt.imgWrap);
					    oImg.get(0).filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
					    ret = src;
					}
				}
				alert(ret);
				return ret;

			});
		}
	});

})(jQuery);