/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Project = Backbone.View.extend({

        template: JST['app/scripts/templates/project.ejs'],

        tagName: 'li',

        className: 'project',

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
