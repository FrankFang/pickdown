/**
 * User: frank
 * Date: 13-8-10
 */

define(['backbone', 'jquery'], function (Backbone, $) {
    var EditPanel = Backbone.View.extend({
        el: '#editPanel',

        initialize: function () {
            this.$edit = this.$el.find('#edit');
        },

        events: {
            'keyup #edit': 'getContent'
        },

        render: function () {
            this.$edit.val(this.model.get('content'));
            return this;
        },

        getContent: function () {
            this.model.set('content', this.$edit.val());
            console.log(this.$edit.val());
        }

    });

    return EditPanel;
});
