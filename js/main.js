/**
 * User: frank
 * Date: 13-8-10
 */
require.config({
    baseUrl: '.',
    paths: {
        jquery: 'bower_components/jquery/jquery.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
        underscore: 'bower_components/underscore/underscore-min',
        backbone: 'bower_components/backbone/backbone-min',
        markdown: 'bower_components/markdown/lib/markdown'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        markdown: {
            exports: 'markdown'
        }
    }
});

require(['js/views/app'], function (app) {
});
