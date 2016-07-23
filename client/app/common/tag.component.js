/*
class myTag{
	constructor(){
  	"ngInject";
  	this.template = '<div>I\'m a directive!</div>';
    this.restrict = 'AE';
    this.scope = {}
  }

  controller($scope, $state) {
  	console.log('controller');
  	console.log($scope);
  	console.log($state);
	}

	link(scope, element, attrs) {
	  console.log('state', scope.state)
	  console.log('service', scope.service)
	}
}

export default myTag;*/
class TagController {
  constructor() {
    this.text = this.value || '';
  }
}

export default {
  restrict: 'E',
  template: `
    <h1>tag</h1>
  `,
  controller: TagController,
  controllerAs: 'vm'
}