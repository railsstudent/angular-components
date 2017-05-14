import './<%= name %>.styl';
import {<%= upCaseName %>Controller as controller} from './<%= name %>.controller';
import template from './<%= name %>.html';

export const <%= name %>Directive = ()=> {
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
