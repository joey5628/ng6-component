'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Page from './page/page';
import AppComponent from './app.component';
import 'jquery';
// import 'normalize.css';
import 'bootstrap-webpack';
import './app.less';

/**
 * 数据服务层
 */
import Services from './services/services'


angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Page.name,
    Services.name
  ])

  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
