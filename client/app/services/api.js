import angular from 'angular';

let Api = angular.module('app.api', [])
.factory('Api', function($http, $q){
	"ngInject";

	var api = {};


	api.get = function(url, params){
		var deferred = $q.defer();
		$http({
			url: url,
			method: 'get',
			params: params || {}
		}).then(function(result){
			if(result.status === 200){
				console.log('请求正常返回~');

				deferred.resolve(result.data);
			}else{
				console.log('非200状态~');

				deferred.reject("状态码:"+result.status+"错误信息:"+result.msg);
			}
		}, function(baseResult){
			var httpError = "httpError~";
      console && console.log(httpError);
		});

		return deferred.promise;
	};	


	return api;

});

export default Api;