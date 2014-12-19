-function() {
    var e = document.getElementsByClassName('top-nav-doubanapp');
    if (!e) return;
    for (var i = 0; i < e.length; ++i) {
        e[i].parentNode.removeChild(e[i]);
    }
}();
