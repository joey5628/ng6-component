
class HomeController {
  constructor(Api) {
  	"ngInject";


    let self = this;
    this.name = 'home';
    this.Api = Api;

    this.info = {
    	tags: []
    };

    Api.get('app/mock/tags.json').then(function(data){
    	self.info.tags = data;
    });

  }
}

export default HomeController;
