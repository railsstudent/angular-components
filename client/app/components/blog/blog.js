import {blogDirective} from './blog.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { common } from '../common/common';
import { shared } from '../../shared/shared';

export const blog = angular.module('blog', [uiRouter, shared.name, common.name])
  .config(function($stateProvider) {
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    });
  })
  .directive('blog', blogDirective);
