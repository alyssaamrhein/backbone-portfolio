/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Post = Backbone.View.extend({

        template: JST['app/scripts/templates/post.ejs'],

        tagName: 'li',

        className: 'post',

        events: {},

        initialize: function (model) {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
