// playerBlue = prompt("Player One is playing blue chips \n Enter your name: ")
// playerRed = prompt("Player Two is playing red chips \n Enter your name: ")
//


chipHeight = 7
bottomChipHeight = 35
var redChip = '🔴'
var blueChip = '🔵'
var currentColor = redChip

rgbRedColor = 'rgb(255, 0, 0)'
rgbBlueColor = 'rgb(0, 0, 255)'
rgbNoChipColorGrey = 'rgb(128, 128, 128)'

function addChipToLowestLevelInColumn(columnNumber, chip, circles) {
    if (circles.eq(columnNumber).css('background-color') == rgbNoChipColorGrey) {
        bottomChipHeight = 35
        for (var currentLevel = bottomChipHeight + columnNumber; currentLevel >= 0; currentLevel -= chipHeight) {
            bottomColumnSlot = circles.eq(currentLevel)
            if (bottomColumnSlot.css('background-color') == rgbNoChipColorGrey) {
                bottomColumnSlot.css('background-color', chip == redChip ? rgbRedColor : rgbBlueColor)
                break;
            }
        }
    }
}

function changeColor() {
    currentColor = currentColor == redChip ? blueChip : redChip
    $('#helpMessageChipColorIndicator').text(currentColor)
    $('#textPLayerNumber').text(currentColor == redChip ? 'One' : 'Two')
}

function checkWinAndAlertOnWin(circles) {
    numberOfColumns = 7
    var redWins = 4
    var blueWins = -4
    for (var column = 0; column < numberOfColumns; column++) {
        var chipsInARow = 0
        for (var index = column + bottomChipHeight; index >= 0; index -= chipHeight) {
            currentChipColor = circles.eq(index).css('background-color')
            if(currentChipColor == rgbBlueColor || currentChipColor == rgbRedColor){
                chipsInARow += currentChipColor == rgbBlueColor ? -1 : 1
            }
            if(chipsInARow == redWins || chipsInARow == blueWins){
                alert(chipsInARow == redWins ? "RED WINS!" : "BLUE WINS?")
                break;
            }
        }
    }

    for (var row = 0; row <= bottomChipHeight; row += chipHeight) {
        var chipsInARow = 0;
        for (var index = row; index < row + 7; index++) {
            currentChipColor = circles.eq(index).css('background-color')
            if(currentChipColor == rgbBlueColor || currentChipColor == rgbRedColor) {
                chipsInARow += currentChipColor == rgbBlueColor ? -1 : 1
            }
            if(chipsInARow == redWins || chipsInARow == blueWins){
                alert(chipsInARow == redWins ? "RED WINS!" : "BLUE WINS?")
                break;
            }
        }
    }
    //diagonaltoprightsided
}

function createBoard(){
    console.log("Board created")
}

function initialize(){
    createBoard()

    $('#helpMessageChipColorIndicator').text(redChip)

    $('.game_column').each(function (i, column) {
        var circles = $('.circle')
        $(column).click(function () {
            addChipToLowestLevelInColumn($(column).attr('id'), currentColor, circles);
            changeColor();
            checkWinAndAlertOnWin(circles);
        })
    })
}

initialize()


