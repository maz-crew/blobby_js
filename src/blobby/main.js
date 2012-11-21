Blobby.Main = Ext.extend(Core.Base, {
    autoStart: false,
    useRAF: true,
    delegates: null,
    constructor: function() {
        Blobby.Main.superclass.constructor.apply(this, arguments);
        
        var me = this;
        me.stage = new createjs.Stage(me.canvas);
        
        me.delegates = [];
        
        me.autoStart && me.start();
        me.initScene();
        me.setEvents();
    },
    
    initScene: function() {
        var me = this;
        
        me.player = new Blobby.Player({
            caller: me
        });
        me.stage.addChild(me.player);
        
        me.stage.update();
    },
    
    setEvents: function() {
        var me = this;
        me.bind($(window), 'resize', me.onResize);
    },
    
    start: function() {
        var me = this;
        createjs.Ticker.setFPS(Core.conf.fps);
        createjs.Ticker.useRAF = me.useRAF;
        createjs.Ticker.addListener(function() {
            me.onFrame.apply(me, arguments);
        });
    },
    
    onFrame: function() {
        var me = this;
        
        if(!me.delegates.length) {
            return;
        }
        
        for(var i in me.delegates) {
            if(!me.delegates.hasOwnProperty(i)) continue;
            var d = me.delegates[i];
            d.onFrame.apply(d, arguments);
        }
        
        me.stage.update();
    },
    
    onResize: function() {
        
    }
});