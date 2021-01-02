// JavaScript source code

const netease = '<iframe class="neteaseIframe float-right" id="neteaseIframe" frameborder="0" border="0" marginwidth="0" marginheight="0" width=280 height=180 src="https://music.163.com/outchain/player?type=0&id=5440938066&auto=0&height=180"></iframe>';
var musicstatus = false;
var firstmusic = true;
function Music() {
    if (firstmusic) {
        // unavailable(music);
        music.innerHTML = netease;
        neteaseStyle = document.createElement("link");
        neteaseStyle.setAttribute("rel", "stylesheet");
        neteaseStyle.setAttribute("type", "text/css");
        neteaseStyle.setAttribute("href", "css/neteaseStyle.css");
        document.body.appendChild(neteaseStyle);
        firstmusic = false;
    }
    musicstatus ? MusicOff() : MusicOn();
    musicstatus = !musicstatus;
}
function MusicOn() {
    music.style.display = "block";
    available(neteaseIframe);
}
function MusicOff() {
    unavailable(neteaseIframe);
    setTimeout('music.style.display = "none"', 400);
}
