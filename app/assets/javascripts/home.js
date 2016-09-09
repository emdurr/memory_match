$(document).ready( function() {
	var cardNum;
	var cardNum2;
	var card;
	var card2;
	var counter = 0;
	var resetButton = $('.reset_button');
	$(".card").flip();
	$('.card').on('click', function() {
		if($(this).hasClass('matched')) {
			alert('Already matched! Choose a different card');
		} else {
			if(cardNum === undefined) {
				card = $(this);
				cardNum = card.first().attr('id');
			} else if(cardNum2 === undefined) {
				card2 = $(this);
				cardNum2 = card2.last().attr('id');
				if(cardNum === cardNum2) {
					alert("You've already chosen this card. Choose a different card");
					cardNum2 = undefined;
					card2 = undefined;
				} else {
					if(cardNum2[7] === cardNum[7]) {
						$('.match').slideDown(function() {
    					setTimeout(function() {
        				$('.match').slideUp();
    					}, 1000);
						});
						cardNum = undefined;
						cardNum2 = undefined;
						card.addClass('matched');
						card2.addClass('matched');
						counter += 1;
						if(counter === 8) {
							alert("You've won!! Play again!");
							location.reload();
						}
					} else {
						$('.no_match').slideDown(function() {
    					setTimeout(function() {
        				$('.no_match').slideUp();
    					}, 1000);
						});
						card.flip(false, function() {
							setTimeout(function() {
								card2.flip(false);
							}, 1000);
						});
						cardNum = undefined;
						cardNum2 = undefined;
					}
				}
			} else {
			alert('Choose a card.');
			}
		}
	});

	resetButton.on('click', function() {
		location.reload();
	});


});