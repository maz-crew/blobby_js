Blobby.Oponent = Ext.extend(Blobby.Player, {
    constructor: function() {
        Blobby.Oponent.superclass.constructor.apply(this, arguments);
        
        var me = this;
        me.ball = {
            x: 0,
            y: 0
        };
    },
    
    setEvents: function() {
        var me = this;
        me.start();
    },
    
    onFrame: function() {
        var me = this,
        	bX = me.ball.x;
        
        if(bX < me.caller.sW / 2 - me.radius) {
        	bX = me.startX;
        }
        
        var posX = me.x + (bX - me.x) * 0.1;
        
        posX = Math.max(me.caller.sW / 2 + me.radius + 8, Math.min(me.caller.sW, posX));
        
        me.x = posX;
    }
})
