define(function(require, exports, module) {
    var project = require("../../../project");
    return {
        readFile: function(path, callback) {
            project.readFile(path, function(err, text) {
                if(err) {
                    if(err.message) {
                        return callback(err.message);
                    } else {
                        return callback(""+err);
                    }
                }
                callback(null, text);
            });
        },
        writeFile: function(path, text, callback) {
            project.writeFile(path, text, function(err) {
                if(err) {
                    if(err.message) {
                        return callback(err.message);
                    } else {
                        return callback(""+err);
                    }
                }
                callback();
            });
        },
        listFiles: function(callback) {
            project.listFiles(callback);
        }
    };
});