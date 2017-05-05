var geneco = angular.module("geneco_dept", [])
geneco.controller("geneco_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '70', id1: '330.0', id2: '330.99' },
			{ no: '71', id1: '330.99', id2: '338.9' },
			{ no: '72', id1: '339.0', id2: '399.9' },
			{ no: '73', id1: '399.99', id2: '541.0' }
		];
	}
);

var chem = angular.module("chem_dept", [])
chem.controller("chem_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '74', id1: '541.0', id2: '543.99' },
			{ no: '75', id1: '544.0', id2: '547.49' },
			{ no: '76', id1: '547.49', id2: '576.99' }
		];
	}
);

var bionano = angular.module("bionano_dept", [])
bionano.controller("bionano_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '77', id1: '576.0', id2: '649.0' }
		];
	}
);

var litgeo1 = angular.module("litgeo_dept1", [])
litgeo1.controller("litgeo_dept_cont1",
	function($scope)
	{
		$scope.racks = [
			{ no: '78', id1: '800.0', id2: '823.899' }
		];
	}
);

var litgeo2 = angular.module("litgeo_dept2", [])
litgeo2.controller("litgeo_dept_cont2",
	function($scope)
	{
		$scope.racks = [
			{ no: '79', id1: '823.899', id2: '999.0' }
		];
	}
);

angular.element(document).ready(function()
{
	// angular.bootstrap(document.getElementById("ece_id1"), ['ece_dept1']);
	angular.bootstrap(document.getElementById("chem_id"), ['chem_dept']);
	angular.bootstrap(document.getElementById("bionano_id"), ['bionano_dept']);
	angular.bootstrap(document.getElementById("litgeo1_id"), ['litgeo_dept1']);
	angular.bootstrap(document.getElementById("litgeo2_id"), ['litgeo_dept2']);
})