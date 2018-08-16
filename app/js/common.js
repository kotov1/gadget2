$(function() {

	$('.model-more').click(function(){

		var modelIndex = +$(this).data('model');

		switch(modelIndex) {
			case 1: 
			setTimeout(function(){
				$('.models-row').addClass('hide');
				$('.model-simple').addClass('flex');
				$('.model-back').addClass('reveal');
			}, 250);
			break;
			case 2: 
			setTimeout(function(){
				$('.models-row').addClass('hide');
				$('.model-360').addClass('flex');
				$('.model-back').addClass('reveal');
			}, 250);
			break;
		}
		
	});

	$('.model-back__btn').click(function(){
		setTimeout(function () { 
			$('.model-simple, .model-360').removeClass('flex');
			$('.models-row').removeClass('hide');
			$('.model-back').removeClass('reveal');
		 }, 250);
	});

	$('.gallery-paging-btn').click(function(){

		var galleryIndex = +$(this).data('gallery');

		switch(galleryIndex) {
			case 1: 
			setTimeout(function(){
				$('.gallery-page-1').hide();
				$('.gallery-page-2').show();
			}, 250);
			break;
			case 2: 
			setTimeout(function(){
				$('.gallery-page-2').hide();
				$('.gallery-page-1').show();
			}, 250);
			break;
		}
		
	});

	$(".offer-chose-checkbox").click(function() {
		var $input = $(this),
		inputIndex = $input.closest('.checkbox').index();

		$(".offer-item").hide().eq(inputIndex).fadeIn("normal");

		switch(inputIndex) {
			case 0: 
			case 1: 
			case 2: 
				$('.offer-list-1').show();
				$('.offer-price-val-1').show();
				$('.offer-list-2').hide();
				$('.offer-price-val-2').hide();
			break;
			case 3: 
			case 4: 
				$('.offer-list-2').show();
				$('.offer-price-val-2').show();
				$('.offer-list-1').hide();
				$('.offer-price-val-1').hide();
			break;
		}

		// $("#hiddenColorInput").val($input.data("item"));
	});



	

});