Blobby.Net = Ext.extend(createjs.Shape, {
    constructor: function(config) {
        var me = this;
        Ext.apply(me, config || {});
        Blobby.Net.superclass.constructor.apply(me, arguments);
        
        me.build();
    },
    
    build: function() {
        var me = this;
        
        me.graphics.beginFill('#000000');
        me.graphics.drawRect(-8, 0, 16, me.sH / 2);
        me.graphics.endFill();
    }
});