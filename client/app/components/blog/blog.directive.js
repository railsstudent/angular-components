import './blog.styl';
// raw loader of webpack config load the html template in js file
import template from './blog.html';
import {BlogController as controller} from './blog.controller';

const blogDirective = () => {
  return {
    template,
    controller,
    controllerAs : 'vm',
    restrict: 'E',
    scope: {},
    replace: true
  }
};

export {blogDirective};
