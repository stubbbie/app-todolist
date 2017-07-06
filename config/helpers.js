    var path = require('path');  //path ist eine nodejs Funktion   
   
    var _root = path.resolve(__dirname, '..'); //__dirname ist Globale Variable; Ordner der Datei; resolve mit .. 
    //geht einne Ordner höher

    function root(args) {
      args = Array.prototype.slice.call(arguments, 0);

 //console.log(path.join.apply(path, [_root].concat(args)))
      return path.join.apply(path, [_root].concat(args));
    }
    exports.root = root;