function close() {
    Alloy.Globals.navcontroller.close();
}

$.listView.addEventListener('itemclick', function (e) {
    var win = Alloy.createController('feed/details').getView();
    Alloy.Globals.navcontroller.open(win);
});