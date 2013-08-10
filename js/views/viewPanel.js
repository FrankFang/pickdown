/**
 * User: frank
 * Date: 13-8-10
 */
define(['backbone', 'jquery'], function (Backbone, $) {
    var ViewPanel = Backbone.View.extend({
        el: '#viewPanel',

        initialize: function () {
        },

        render: function (content) {
            this.$el.html(content);
        }
    });

    return ViewPanel;
});
