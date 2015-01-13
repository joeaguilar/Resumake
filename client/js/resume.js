	;!(function(){



	myApp = angular.module('myApp', ['ui.bootstrap'])
	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
	})
	.controller('infoCtrl', ['$scope', function($scope) {

	}])

	
	myApp.controller('searchCtrl', ['$scope', function($scope) {
		$scope.popThis = 'Things to pop!';
	}])
	myApp.controller('colCtrl', ['$scope', function($scope) {
		$scope.isCollapsed = true;
	}])
	myApp.controller('collapseCtrl', ['$scope', function($scope) {
		$scope.oneAtATime = true;
		$scope.groups = [
			{
				title: 'Big Bowl',
				content: 'Accomplishments'
			},
			{
				title: 'Neiman Marcus',
				content: 'Accomplishments'
			}
		]

	}])

	myApp.controller('JobModalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
	$scope.open = function( size) {
		var modalInstance = $modal.open({
			templateUrl: 'jobModal.html', 
			controller: 'JobModalInstance',  
			size: size
			//, resolve: {	passedAlongObject: function() { return $scope.passedAlongObject; } }
		});

		// modalInstance.result.then(function ())
	}
	}])
	myApp.controller('JobModalInstance', ['$scope', '$modalInstance', /*resolvedObjectsHere,*/ function($scope, $modalInstance) {
	$scope.ok = function() {
		// do work here
		$modalInstance.close() 
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
}])


// myApp.controller('headerController', ['$scope', ])


myApp.controller('AlertCtrl', ['$scope', function($scope) {
	$scope.alerts = [
	{ type: 'danger', msg: 'Oh snap! There is nothing here yet!'},
	{ type: 'success', msg: 'This is an easter egg! Good job!'},
	{ type: 'warning', msg: 'I wonder what this all means'}
	];

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index,1);
	};
}])

myApp.controller('otherControllerName', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
	$scope.open = function( size) {
		var modalInstance = $modal.open({
			templateUrl: 'otherControl.html', 
			controller: 'otherCtrl',  
			size: size
			//, resolve: {	passedAlongObject: function() { return $scope.passedAlongObject; } }
		});

		// modalInstance.result.then(function ())
	}
}]).controller('otherCtrl', ['$scope', '$modalInstance', /*resolvedObjectsHere,*/ function($scope, $modalInstance) {
	$scope.ok = function() {
		// do work here
		$modalInstance.close() 
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
}])

myApp.factory('ResumeService2',['$http', function($http) {
	var info = {};
	$http.get('/info/insecure')
		.success(function(response) {
			// you can process some stuff here
			info = response.data;
		})
		.error(function(response) {
			 console.error(response.error);
		});

		return info;
}]);
myApp.controller('ResumeCtrl2', ['$',function() {}])
myApp.factory('ResumeInfo', ['$http', function($http) {
	return $http.get('/info/insecure', {cache: true})
}])

myApp.controller('ResumeCtrl', ['$scope', 'ResumeInfo', function($scope, ResumeInfo) {
	$scope.info = {};
	ResumeInfo.success(function(data) {
		$scope.info = data;
	}).error(function(err) {
		console.error(err);
	});

	$scope.search = '';
    var regex;
    $scope.$watch('search', function (value) {
        regex = new RegExp('\\b' + escapeRegExp(value), 'i');
    });
    function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
    $scope.filterBySearch = function(name) {
        if (!$scope.search) return true;
        return regex.test(name);
    };
}]);
myApp.factory('skillService', ['$http', function($http) {
	return $http.get('/skills/insecure/', {cache: true})
}])
myApp.controller('skillCtrl', ['$scope', 'skillService', function($scope, skillService) {
	$scope.skillset = {};
	// var skillsets = Array.apply(null, Array($scope.skillset.length));
	skillService.success(function(data){
		$scope.skillset = data;
		$scope.skilled = makeTheMagicHappen(data)
	}).error(function(err) {
		console.error(err);
	});
	
	function computeValues(percent) {
		var mark;
		  if (percent > 80) {
	      mark = 'success';
	    } else if (percent > 50) {
	      mark = 'info';
	    } else if (percent > 25) {
	      mark = 'warning';
	    } else {
	      mark = 'danger';
	  	}
	  	return mark;
    }
    function makeTheMagicHappen(arr) {
    	arr.forEach(function(skill, i){
		var style = '';
		var value = arr[i].percent;
		arr[i]['style'] = computeValues(value);
	});
    }
	
	
}])
myApp.directive('skillbar', [ function() {
	return {
		restrict: 'E',
		template: '<div class="container skill">' +
		'<h4>[[skill.name]]<small class="print-only-skill">[[skill.percent]]%</small></h4><div class="progress">' +
		'<div class="progress-bar active progress-bar-[[skill.style]]" role="progressbar" aria-valuenow="[[skill.percent]]" aria-valuemin="0" aria-valuemax="100" style="width: [[skill.percent]]%;">' +
		'<span class="skill-number">[[skill.percent]]%</span><span class="sr-only">[[skill.percent]]</span></div> </div> </div> <!-- conatainer -->'
	}
}]);

}());