var min = 1;
var max = 101;
var randNum = Math.floor((max-min)*Math.random() + min)

function makeGuess() {
    var inputVal = parseInt(document.getElementById("input").value);
    if (randNum < inputVal) {
        document.getElementById("clue").innerHTML = "Shakthu wangmalle khara yamdaba number hairakooo"
    } else if (randNum > inputVal) {
        document.getElementById("clue").innerHTML = "namamat nemmalle khara awangba number hairakooo"
    } else {
        document.getElementById("clue").innerHTML = `wooww! Shakthu yam heiko nashaknena hoirong mallaga chumme!!
        Amukka sananingngiba, sananingngadi makhagi button sida nammo minai macha`
        var names = ["guess", "title", "input", "btn"]
        names.forEach(name => {
            var elem = document.getElementById(name);
            elem.parentNode.removeChild(elem);
        })
        document.getElementById("reload").style.visibility = "visible";
    }
}