/**
 * User: frank
 * Date: 13-8-10
 */

define(['backbone', 'jquery'], function (Backbone, $) {

    var EditModel = Backbone.Model.extend({
        content: ''
    });

    return EditModel;
});
