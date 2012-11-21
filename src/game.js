Ext.onReady(function() {
    // TODO: menu
    
    // Game initialization
    var canvas = $('#blobby-canvas');
    var main = new Blobby.Main({
        canvas: 'blobby-canvas',
        autoStart: true,
        sW: canvas.attr('width'),
        sH: canvas.attr('height'),
        useRAF: true
    });
});