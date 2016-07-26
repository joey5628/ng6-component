import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerComponent from './header.component';

let headerModule = angular.module('header', [
])

.component('header', headerComponent);

export default headerModule;
