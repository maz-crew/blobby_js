Blobby.Ball = Ext.extend(createjs.Shape, {
    constructor: function(config) {
        var me = this;
        Ext.apply(me, config || {});
        Blobby.Ball.superclass.constructor.apply(me, arguments);
        
        me.build();
    },
    
    build: function() {
        var me = this;
        
        me.graphics.beginFill('#CCCCCC');
        me.graphics.drawCircle(0,0,30);
        me.graphics.endFill();
    }
})
