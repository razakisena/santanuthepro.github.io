function _(el) {
    return document.querySelector(el);
}
var file = _('#file');
file.onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        _('.content').value = reader.result;
        _('.fn').value = file.files[0].name;
    };
    reader.readAsText(file.files[0]);
};
document.querySelector('button').onclick = function () {
    saveFile(new Blob([_('.content').value]), _('.fn').value);
};
window.onresize = function () {
    _('.content').setAttribute('style', 'width:' + window.innerWidth - 30 + "px" + "resize: none");
};