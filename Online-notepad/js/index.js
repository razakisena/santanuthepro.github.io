function _(el) {
    return document.querySelector(el);
}
var file = _('#file');
file.onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        _('.content').value = reader.result;
        _('.fn').value = file.files[0].name;
        localStorage.setItem('filename', _('.fn').value);
        localStorage.setItem('content', _('.content').value);
    };
    reader.readAsText(file.files[0]);
};
document.querySelector('button').onclick = function () {
    saveFile(new Blob([_('.content').value]), _('.fn').value);
};
window.onresize = function () {
    _('.content').setAttribute('style', 'width:' + window.innerWidth - 30 + "px" + "resize: none");
};
_('.content').onkeyup = function () {
    localStorage.setItem('content', _('.content').value);
};
_('.content').innerHTML = localStorage.getItem('content');
_('.fn').onkeyup = function () {
    localStorage.setItem('filename', _('.fn').value);
};
_('.fn').value = localStorage.getItem('filename');