Blobby.Main = Ext.extend(Core.Base, {
    autoStart: false,
    useRAF: true,
    delegates: null,
    debugMode: false,
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
            color: '#ff5500',
            startX: me.sW * (1/4),
            startY: me.sH * (3/4),
            controls: Core.conf.game.controls,
            caller: me
        });
        
        var oponentClass = Core.conf.game.mode  == 'cpu' ? 'Oponent' : 'Player';
        me.oponent = new Blobby[oponentClass]({
            color: '#ff0000',
            startX: me.sW * (3/4),
            startY: me.sH * (3/4),
            caller: me
        });
        
        me.ball = new Blobby.Ball({
            x: me.sW * (1/4),
            y: me.sH / 2,
            caller: me
        });
        
        me.net = new Blobby.Net({
            x: me.sW / 2,
            y: me.sH / 2,
            sH: me.sH
        });
        
        me.stage.addChild(me.player);
        me.stage.addChild(me.oponent);
        me.stage.addChild(me.net);
        me.stage.addChild(me.ball);
        
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
        
        // TODO: collisions
        me.oponent.ball = {
            x: me.ball.x,
            y: me.ball.y
        };
        
        if(me.debugMode) {
            me.ball.x = me.stage.mouseX;
            me.ball.y = me.stage.mouseY;
        }
        
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