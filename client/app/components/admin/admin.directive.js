import './admin.styl';
import template from './admin.html';
import { AdminController as controller } from './admin.controller';

const adminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {
      
    },
    replace: true,
    restrict: 'E',
    bindToController: true
  }
};

export { adminDirective };
