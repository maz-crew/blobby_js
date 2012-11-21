var scripts = [
    'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
    'http://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js',
    
    'libs/easeljs-0.5.0.min.js',
    
    'core/bootstrap.js',
    'core/conf.js',
    'core/base.js',
    
    'blobby/player.js',
    'blobby/main.js',
    
    'game.js'
];

for(var i in scripts) {
    var path = (/^http\:\/\//i).test(scripts[i]) ? '' : 'src/';
    document.write('<script type="text/javascript" src="'+(path+scripts[i])+'"></script>');
}