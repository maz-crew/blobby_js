Blobby.Player = Ext.extend(createjs.Shape, {
    color: '#FF5500',
    controls: 'keyboard',
    started: false,
    speed: 0,
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
        me.graphics.drawCircle(0, 0, me.radius);
        me.graphics.endFill();
    },
    
    start: function() {
        var me = this;
        
        if(me.started) {
            return;
        }
        me.started = true;
        
        me.caller.delegates.push(me);
    },
    
    stop: function() {
        var me = this;
        
        if(!me.started) {
            return;
        }
        me.started = false;
        
        me.caller.delegates.splice(me.caller.delegates.indexOf(me));
    },
    
    onFrame: function(time) {
        var me = this;
        me.x += me.speed;
    },
    
    setEvents: function() {
        var me = this;
        if(me.controls == 'keyboard') {
            $(document).on('keydown', function() {
                me.onKeyDown.apply(me, arguments);
            });
            $(document).on('keyup', function() {
                me.onKeyUp.apply(me, arguments);
            });
            return;
        }
    },
    
    onKeyDown: function(e) {
        var me = this,
            keys = {37:-1,39:1};
            
        if(!keys[e.which]) {
            return;
        }
        
        me.speed = 5 * keys[e.which];
        
        me.start();
    },
    
    onKeyUp: function(e) {
        var me = this;
        me.speed = 0;
        me.stop();
    }
});