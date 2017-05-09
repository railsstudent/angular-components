// TODO: shared.js is a module registry for
// common factories/services
import {api} from './api';
import angular from 'angular';
import {posts} from './posts';

export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Posts', posts);
