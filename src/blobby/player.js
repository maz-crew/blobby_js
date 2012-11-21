Blobby.Player = Ext.extend(createjs.Shape, {
    color: '#FF5500',
    controls: 'keyboard',
    constructor: function(config) {
        var me = this;
        Ext.apply(me, config || {});
        Blobby.Player.superclass.constructor.apply(me, arguments);
        
        me.build();
        me.setEvents();
    },
    
    build: function() {
        var me = this;
        
        me.radius = 50;
        
        me.graphics.beginFill(me.color);
        me.graphics.drawCircle(50,50, me.radius);
        me.graphics.endFill();
    },
    
    start: function() {
        var me = this;
        me.caller.delegates.push(me);
    },
    
    stop: function() {
        var me = this;
        
        me.caller.delegates.splice(me.caller.delegates.indexOf(me));
    },
    
    onFrame: function(time) {
        var me = this,
            stage = me.getStage();
    },
    
    setEvents: function() {
        var me = this;
        if(me.controls == 'keyboard') {
            
            return;
        }
        
    }
});