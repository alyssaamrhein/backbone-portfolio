/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Portadmin = Backbone.View.extend({

        template: JST['app/scripts/templates/portAdmin.ejs'],

        el: $('#appContainer'),

        events: {
          'submit #newPort': 'onSubmit'
        },

        onSubmit: function (event) {
            event.preventDefault();
            var title = $('#title').val();
            var img   = $('#img').val();
            var desc  = $('#desc').val();

            var project  = new BackbonePortfolio.Models.Project({
                title: title,
                image: img,
                description: desc
            });

            BackbonePortfolio.Projects.add(project);
            $('input').val('');
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
