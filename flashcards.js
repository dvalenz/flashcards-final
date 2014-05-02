app.controller('FlashCardController', function ($scope){
	$scope.emptyCards = [{}, {}, {}, {}, {}];
	$scope.add = function() {
		$scope.emptyCards.push({});
	};
	$scope.save = function ( ) {
			console.log("cards");
			console.log($scope.emptyCards);

	};
});