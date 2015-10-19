(function($){
	if(!$.artatol){
		$.artatol = new Object();
	};

	$.artatol.toggle = function(el, options){
		var base = this;
		base.$el = $(el);
		base.el = el;

		base.$el.data("artatol.toggle", base);

		var $sButton = base.$el.find('*[data-aa-toggle-button]');
		var $sBox = base.$el.find('*[data-aa-toggle-box]');

		var bState = $sBox.data('aa-toggle-box');
		if (bState == 'closed' && !$sBox.hasClass('js-toggle-handle')) {
			$sBox.stop().addClass('js-hidden js-toggle-handle').slideUp();
		}

		base.init = function(){
			base.options = $.extend({},$.artatol.toggle.defaultOptions, options);
			base.$el.on("click", "*[data-aa-toggle-button]", function() {
				var tOpen = $sButton.data('open');
				var tClose = $sButton.data('close');
				if ($sBox.hasClass('js-hidden') || $sBox.hasClass('uk-hidden') || $sBox.hasClass('uk-hidden-small')){
					$sBox.stop().hide().removeClass('js-hidden uk-hidden uk-hidden-small').fadeIn(500);
					$sButton.html(tClose);
				}else{
					$sBox.stop().addClass('js-hidden').fadeOut(250);
					$sButton.html(tOpen);
				}

			});
		};
		base.init();
	};

	$.artatol.toggle.defaultOptions = {
	};

	$.fn.artatol_toggle = function(options){
		return this.each(function(){
			(new $.artatol.toggle(this, options));
		});
	};

})(jQuery);
$("*[data-aa-toggle]").artatol_toggle();