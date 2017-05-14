import './about.styl';
import {AboutController as controller} from './about.controller';
import template from './about.html';

export const aboutDirective = ()=> {
  // TODO: complete the DDO
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    bindToController: true,
    restrict: 'E'
  }
};
