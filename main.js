-function() {
    var e = document.getElementsByClassName('top-nav-doubanapp');
    for (var i = 0; i < e.length; ++i) {
        e[i].parentNode.removeChild(e[i]);
    }
}();
