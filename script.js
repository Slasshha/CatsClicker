$(document).ready(function() {


    var timesClicked = 0;
    var timesWord = "";
    var clicksCount = {};
    var name;

    function setClicksCount(name) {
        if (clicksCount[name] == undefined) {
            clicksCount[name] = 1
        } else {
            clicksCount[name]++;
        }

        return clicksCount[name]

    }

    function updateMessage(clickCount) {
        if (clickCount == 1) {
            timesWord = 'time';
        } else {
            timesWord = 'times';
        }

        $('.cat-info').find('.message').html('I was clicked ' + clickCount + ' ' + timesWord);
    }



    $('.cats').on('click', 'li', function(e) {
        var currentCat = $(this);
        name = currentCat.data('catName');
        var clickCount = setClicksCount(name);
        console.log(clickCount);


        $('.cat-info').find('.name').html(name);
        $('.cat-info').find('.cat-image').attr('src', currentCat.data('pictureSource'));

        updateMessage(clickCount);

    });


    $('.cat-info').on('click', 'img', function(e) {

        var currentImg = $(this);
        var clickCount = setClicksCount(name);
        updateMessage(clickCount);


    });


})