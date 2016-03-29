$(document).ready(function () {

	

	var timesClicked = 0; 
	var timesWord = "";

    $('.main-pic').on('click', function() {
    	timesClicked++;
    	console.log(timesClicked);

    	if(timesClicked==1) {
    		timesWord = 'time';
    	} else {
    		timesWord = 'times';    	}


    $('.main-text').html('I was clicked ' + timesClicked + ' ' + timesWord);

    });

    /* $('.cat').on('click', 'img', function(e) {
    	var currentImg = $(this);

    	currentImg.prev().html('I was clicked ' + timesClicked + ' ' + timesWord);
    })   */







})