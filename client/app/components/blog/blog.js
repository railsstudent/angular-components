// Note: import directive and register in blog module
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {blogDirective} from './blog.directive';

const blog = angular.module('blog', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    });
  })
  .directive('blog', blogDirective);

export { blog };
