

import Home from './home/home';
import tag from '../common/tag';

let componentModule = angular.module('app.components', [
	Home.name,
	tag.name
]);

export default componentModule;
