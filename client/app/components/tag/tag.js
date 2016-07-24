import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tagComponent from './tag.component';

let tagModule = angular.module('tag', [
  uiRouter
])

.component('tag', tagComponent);

export default tagModule;
