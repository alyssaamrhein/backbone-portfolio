/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Portfolio = Backbone.View.extend({

        template: JST['app/scripts/templates/portfolio.ejs'],

        el: $('#appContainer'),

        events: {},

        initialize: function () {
          this.listenTo(BackbonePortfolio.Projects, 'add',   this.addOne);
          this.listenTo(BackbonePortfolio.Projects, 'reset', this.addAll);

          this.render();
          // If this is before render it will have nothing on the page to grab
          this.projectsContainer = this.$el.find('#projects-container');
          this.addAll(BackbonePortfolio.Projects.models);
        },

        addOne: function (project) {
            var projectView = new BackbonePortfolio.Views.Project(project);
            this.projectsContainer.append(projectView.render().el);
        },

        addAll: function (projects) {
            var that = this;
            _.each(projects, function (project) {
                that.addOne(project);
            });
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
