import template from './menu.html';
import controller from './menu.controller';
import './menu.less';

let menuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default menuComponent;
