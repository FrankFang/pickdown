/**
 * User: frank
 * Date: 13-8-10
 */
require(
    [
        'backbone',
        'jquery',
        'markdown',
        'js/views/editPanel',
        'js/views/viewPanel',
        'js/models/edit'
    ],

    function (Backbone, $, M, EditPanel, ViewPanel, EditModel) {
        var App = Backbone.View.extend({
            el: 'body',

            initialize: function () {
                this.edit = new EditPanel({
                    model: new EditModel()
                });
                this.view = new ViewPanel();
                this.listenTo(this.edit.model, 'change', function () {
                    this.view.render(M.toHTML(this.edit.model.get('content')));
                })
            },
            events: {
                'keyup #edit': 'doit'
            },

            doit: function () {
            }
        });

        return new App();
    });
