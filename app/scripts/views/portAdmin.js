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
            console.log('anything');
            var title = $('#portTitle').val();
            var img   = $('#portImg').val();
            var desc  = $('#portDesc').val();

            var project  = new BackbonePortfolio.Models.Project({
                portTitle: title,
                portImg: img,
                portDesc: desc
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
