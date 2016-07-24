import template from './tag.html';
import controller from './tag.controller';
import './tag.less';

let tagComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default tagComponent;
