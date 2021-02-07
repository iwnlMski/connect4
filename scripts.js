// playerBlue = prompt("Player One is playing blue chips \n Enter your name: ")
// playerRed = prompt("Player Two is playing red chips \n Enter your name: ")
//
var circles = $('.circle');


var currentColor = 'red';

function putShot(nCol, color) {
    if (circles.eq(nCol).css('background-color') == 'rgb(128, 128, 128)') {
        for (var i = 35 + nCol; i >= 0; i = i - 7) {
            if (circles.eq(i).css('background-color') == 'rgb(128, 128, 128)') {
                circles.eq(i).css('background-color', color);
                break;
            }
        }
    }
}

function changeColor() {
    if (currentColor == 'red') {
        currentColor = 'blue';
        $('#nPLayer').text('Two');
        $('#nColor').text('🔵');
    } else {
        currentColor = 'red';
        $('#nPLayer').text('One');
        $('#nColor').text('🔴');
    }
}

function checkWin() {
    //col
    for (var col = 0; col < 7; col++) {
        var win = 0;
        for (var index = col + 35; index >= 0; index -= 7) {
            if (circles.eq(index).css('background-color') == 'rgb(255, 0, 0)') {
                win++;
            } else if (circles.eq(index).css('background-color') == 'rgb(0, 0, 255)') {
                ``
                win--;
            }
            if (win == 4) {
                alert("Red WINS!");
                break;
            } else if (win == -4) {
                alert("Blue WINS!");
                break;
            }
        }
    }

    //row
    for (var row = 0; row <= 35; row += 7) {
        var win = 0;
        for (var index = row; index < row + 7; index++) {
            if (circles.eq(index).css('background-color') == 'rgb(255, 0, 0)') {
                win++;
            } else if (circles.eq(index).css('background-color') == 'rgb(0, 0, 255)') {
                win--;
            }
            if (win == 4) {
                alert("Red WINS!");
                break;
            } else if (win == -4) {
                alert("Blue WINS!");
                break;
            }
        }
    }
    //diagonaltoprightsided


}


$('.game_column').each(function (i, column) {
    $(column).click(function () {
        putShot($(column).attr('id'), currentColor);
        changeColor();
        checkWin();
    })
});
