// Players level, unsaved.
var plrLvlLive = 1 
// Ammount if items the player has, unsaved.
// The data will be handled by these objects.
var gameData = {}; var templateData = {
    plrLvl: 1,item1Amt: 0,item2Amt: 0,item3Amt: 0,item4Amt: 0,money: 0
}
var livePosition= '0,1'
var livePosTbl = {}
// This function handles the generation of coordinates of opponent objects on the screen.
// There will be a grid in the HTML that will include 30 possible spaces for both opponents and the player to run.
// The grid will be 3 X 10
function oppGen(plrX){ 
    let oppTbl = []; 
    let xPos = Math.ceil(plrX);
    for (xPos; xPos < 11; xPos++){
        let xCoor = Math.floor((Math.random() * (10 - xPos)) + xPos); 
        let yCoor = Math.floor((Math.random() * 3)  + 1);
        let cordString = (xCoor + ',' + yCoor);
        oppTbl.push(cordString); 
    }
    return oppTbl;
}
// This function will handle the rendering of the opponents the player will face.
function renderNPCs(localPosTbl){
    for (i in localPosTbl){
        livePosTbl.push(localPosTbl[i])
        document.getElementById(localPosTbl[i]).innerHTML = '<img src=img/oppPlayer.jpg><img>'
    }
}
// This is supposed to run in a loop later in the main JS function.
function moveNPCs(){
    let movedTbl = {}
    for (i in livePosTbl){
        doSplit = livePosTbl[i].split(',')
        let newX = doSplit[1]++
        let updated = doSplit.toString(',')
        document.getElementById(updated).innerHTML = '<img src=img/oppPlayer.jpg><img>'
    }
}
// This functions handles the buying of different items.
function buyItem(reqItem){
    switch(reqItem){
        case 1:
            gameData.money = gameData.money - 100;
            gameData.item1Amt++;
        break;
        case 2:
            gameData.money = gameData.money - 100;
            gameData.item2Amt++;
        break;
        case 3:
            gameData.money = gameData.money - 100;
            gameData.item3Amt++;
        break;
        case 4:
            gameData.money = gameData.money - 100;
            gameData.item4Amt++;
        break;
    }
}
function slowDown(){
    gameData.item1Amt--;
}
function powerThrough(){
    gameData.item2Amt--;
}
// This function loads saved data from a browser cookie. If one does not exsist, it creates one.
function loadData(cName){
    try {
        let tmpData = document.cookie.match(new RegExp(cName + '=([^;]+)')); 
        tmpData = JSON.parse(tmpData[1]);
        gameData = tmpData;
    } catch (error) {
        console.log(error); 
        gameData = templateData; 
        saveData('gameSave');
    }
}
// This function takes tha game's data at the time it is called and saves it as a cookie.
function saveData(cName){
    let tmpJSON = JSON.stringify(gameData);
    let localCookie  = (cName + "=" + tmpJSON + ";path=/");
    document.cookie = localCookie;

}
$(document).keydown(function(key) {
    switch(key.which) {
        case 37: // left
        console.log("left");
        break;

        case 38: // up
        console.log("up");
        break;

        case 39: // right
        console.log("right");
        break;

        case 40: // down
        console.log("down");
        break;

        default: return;
    }
    e.preventDefault();
});
