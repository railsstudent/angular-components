// TODO: import and register the directive
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { aboutDirective } from './about.directive';

export const about = angular.module('about', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('about', {
      url: '/about',
      template: '<about></about>'
    })
  })
  .directive('about', aboutDirective);
