Core.Base = Ext.extend(Object, {
    constructor: function(config) {
        Ext.initialConfig = config;
        Ext.apply(this, config || {});
    },

    bind: function(target, event, method) {
        this.handlers = this.handlers || {};
        this.bindedObjects = this.bindedObjects || [];

        var me = this,
        t = $(target);
        
        this.handlers[method] = function() {
            return method.apply(me, Array.prototype.slice.call(arguments).concat([this]));
        }
            
        t.on(event, this.handlers[method]);
        this.bindedObjects.push( {
                target  : t,
                method  : method,
                event   : event
            }
        );
    },

    unbind: function(target, event, method) {
        $(target).off(event, this.handlers[method]);
    },

    unbindAll: function() {
        var me = this;
        Ext.each(
            this.bindedObjects, function(item, idx, allItems) {
                me.unbind(item.target, item.event, item.method);
            },
            this
        );
    }
});