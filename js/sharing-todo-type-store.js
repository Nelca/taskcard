/*jshint unused:false */

(function (exports) {

    'use strict';

    var TYPE_STORAGE_KEY = 'sharing-todo-types';

    exports.todoTypeStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(TYPE_STORAGE_KEY) || '[]');
        },
        save: function (types) {
            localStorage.setItem(TYPE_STORAGE_KEY, JSON.stringify(types));
        }
    };
})(window);
