import _ from "lodash";
import uiRouter from "angular-ui-router";   // return a string
import './home.styl';

const home = angular.module('home', [
  uiRouter
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: `
      <section class="home">
        <div class="title">
          <h1>{{ title }}</h1>
        </div>

        <div class="items">
          <ul>
            <li ng-repeat="item in items">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    `,
    controller: 'HomeController'
  });
})
.controller('HomeController', function($scope) {
  $scope.title = 'Welcome to the blog!'
  $scope.items = _.times(5, i => {
    return `I am item ${i}`;
  });
});

export {home};
