(function($, window, document, undefined) {

	var ASwitch = {
		init: function(options, elem) {
			var self = this;

			self.options = options;
			self.$elem = $(elem);
			
			var $sButton = self.$elem.find('*[data-aa-switch-button]');
			var $sBox = self.$elem.find('*[data-aa-switch-box]');

			$sButton.on('click', function(){
				var bVal = $(this).data("aa-switch-button");
				$sButton.removeClass('uk-active');
				$sBox.stop().hide().removeClass('uk-hidden');
				$("*[data-aa-switch-box='" + bVal + "']").fadeIn(500);
				$("*[data-aa-switch-button='" + bVal + "']").addClass('uk-active');
			});

		}
	};

	$.fn.ASwitch = function(options) {
		return this.each(function() {
			var aswitch = Object.create(ASwitch);
			aswitch.init(options, this);
		});
	};


})(jQuery, window, document);

$("*[data-aa-switch]").ASwitch();
