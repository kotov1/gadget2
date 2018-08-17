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
		$(".offer-img-descr-text").hide().eq(inputIndex).fadeIn("normal");

		switch(inputIndex) {
			case 0: 
			case 1: 
			case 2: 
				$('.offer-list-1').show();
				$('.offer-price-val-1').show();
				$('.model-type-1').show();
				$('.offer-list-2').hide();
				$('.offer-price-val-2').hide();
				$('.model-type-2').hide();
			break;
			case 3: 
			case 4: 
				$('.offer-list-2').show();
				$('.offer-price-val-2').show();
				$('.model-type-2').show();

				$('.offer-list-1').hide();
				$('.offer-price-val-1').hide();
				$('.model-type-1').hide();

			break;
		}

		$("#hiddenColorInput").val($input.data("item"));

	});

});



$(function() {

	//плавный скролл по кнопке "подробнее" 
	$(".bottomMore").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 70}, 1000);
	});



	//плавный скролл по меню и пунктам меню
	$(".nav").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 70}, 1000);
			$('.navWrap').removeAttr('style');
	});


	//кнопка "обратная связь"
	function feedback(){
		$('.feedbackFormBtn-js').on("click", function(e){
				e.preventDefault();
			if($(window).width() > 767){
				$('.feedbackForm .feedbackFormBtn-js').removeClass("plTxt");
				$('.feedbackForm .feedbackFormBtn-js .feedbackFormBtn__arrow').toggleClass('arrowToggle');
				if($(".feedbackForm__hiddenForm").is(":visible")){
					$(".feedbackForm__hiddenForm").slideUp();
					$('.feedbackFormBtn-js .feedbackFormBtn__text').text("обратная связь");
				}else {
					$(".feedbackForm__hiddenForm").slideDown();
					$('.feedbackForm .feedbackFormBtn-js .feedbackFormBtn__text').text("свернуть");
					$('.feedbackForm .feedbackFormBtn-js').addClass("plTxt");


				}
			}
		});
	}

	$(window).on("load resize", feedback());



	//мобильное меню

	$('.menuMobile-js').on('click', function(e) {
		e.preventDefault();
		$('.navWrap').slideToggle(300, function(){
			
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
				}else{
					$('.feedbackForm').slideUp(100);
				}
		});
		
	});

	function navWrapHidden(){
		if($(window).width() > 767){
					$('.navWrap').removeAttr('style');
				}	
	}

$(window).on("resize", navWrapHidden);




	//мобильная форма обратной связи
	$('.feedbackMobile-js').on('click', function(e) {
		e.preventDefault();
		$('.feedbackForm').slideToggle(300, function(){
			
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
				}else{
					$('.navWrap').slideUp(100);
				}
		});
		
	});


//валидация формы

$('.feedbackFormBlock input').on('input', function(){
	var th = $(this);
	var val = $(this).val();
	if(val.length > 4 ){
			console.log('ok222');
			$(this).siblings(".formValid").find('.formCheck').css('display', 'block');
		}else{
			$(this).siblings(".formValid").find('.formCheck').css('display', 'none');
		}
});


$('.popupBuyFormBlock input').on('input', function(){
	var th = $(this);
	var val = $(this).val();
	if(val.length > 4 ){
		console.log(val);
			console.log('ok');
			$(this).siblings(".formValid").find('.formCheck').css('display', 'block');
		}else{
			$(this).siblings(".formValid").find('.formCheck').css('display', 'none');
		}
});








/*открытие и закрытие модального окна с формой*/

	//open popup
	$('.offer-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});


/*открытие и закрытие модального окна с формой*/

	//open popup
	$('.cd-popup-trigger2').on('click', function(event){
		event.preventDefault();
		$('.cd-popup2').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup2').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup2') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup2').removeClass('is-visible');
			}
		});


});