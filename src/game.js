Ext.onReady(function() {
    // TODO: menu
    
    // Game initialization
    var main = new Blobby.Main({
        canvas: 'blobby-canvas',
        autoStart: true,
        sW: 640,
        sH: 480,
        useRAF: true
    });
});