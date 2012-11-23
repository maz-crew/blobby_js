Blobby.Player = Ext.extend(createjs.Shape, {
    color: '#FF5500',
    controls: 'keyboard',
    started: false,
    speed: 0,
    jumpSpeed: 0,
    constructor: function(config) {
        var me = this;
        Ext.apply(me, config || {});
        Blobby.Player.superclass.constructor.apply(me, arguments);
        
        me.x = me.startX;
        me.y = me.startY;
        
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
        console.log(me.jumpSpeed, me.jumping);
        var posX = Math.max(me.radius, Math.min(me.caller.sW / 2 - me.radius - 8, me.x + me.speed));
        
        if(me.jumpSpeed) {
            var posY = me.y - me.jumpSpeed;
            me.y = posY;
            me.jumpSpeed--;
            
            if(!me.jumpSpeed && me.jumping) {
                me.afterJump();
            }
        }
        
        me.x = posX;
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
    
    jump: function() {
        var me = this;
        me.jumping = true;
        me.jumpSpeed = 20;
    },
    
    afterJump: function() {
        var me = this;
        me.anim = createjs.Tween.get(me,{
            loop:false
        }).to({
            y: me.caller.sH * (3/4)
        }, 300, createjs.Ease.Linear).call(function(){
        	me.jumping = false;
        });
    },
    
    onKeyDown: function(e) {
        var me = this,
            keys = {37:-1,39:1};
            
        if(e.which == 32 && !me.jumping) {
            me.jump();
            me.start();
            return;
        }
        
        if(!keys[e.which]) {
            return;
        }
        
        me.speed = 10 * keys[e.which];
        
        me.start();
    },
    
    onKeyUp: function(e) {
        var me = this;
        
        if(e.which == 32) {
            me.jumpSpeed = 0;
            me.afterJump();
            //me.jumping = false;
            return;
        }
        
        me.speed = 0;
        me.stop();
    }
});