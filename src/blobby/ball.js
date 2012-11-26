Blobby.Ball = Ext.extend(createjs.Shape, {
	maxSpeed: 6,
	acceleration: 30,
	friction: 0.05,
    constructor: function(config) {
        var me = this;
        Ext.apply(me, config || {});
        Blobby.Ball.superclass.constructor.apply(me, arguments);
        
        me.minValue = me.caller.sH;
        me.maxValue = 0;
        
        me.build();
        me.hit();
    },
    
    hit: function() {
    	var me = this;
    	
    	me.speed = 5;
    	me.initialValue = me.y;
    	
    	me.startTime = Date.now();
    	me.caller.delegates.push(me);
    },
    
    onFrame: function(time) {
    	var me = this;
    	
    	if(me.isEnded) {
    		return;
    	}
    	
    	me.elapsed = Date.now() - me.startTime;
    	var y = me.getMomentum();
    	
    	me.x += me.speed;
    	me.y = -y * me.caller.sH / 2 + me.initialValue;
    },
    
    getMomentum: function() {
    	var me = this,
    		value = Math.sin(me.elapsed / 1500 * Math.PI);
    	
    	return value;
    },
    
    build: function() {
        var me = this;
        
        me.graphics.beginFill('#CCCCCC');
        me.graphics.drawCircle(0,0,30);
        me.graphics.endFill();
    }
})
