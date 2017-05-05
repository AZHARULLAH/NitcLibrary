var mana_module1 = angular.module("mana_dept1", [])
mana_module1.controller("mana_dept_cont1",
	function($scope)
	{
		$scope.racks = [
			{ no: '34', id1: '629.13', id2: '657.0' },
			{ no: '35', id1: '657.0', id2: '658.0' },
           	{ no: '36', id1: '658.0', id2: '658.15' }
		];
	}
);

var mana_module2 = angular.module("mana_dept2", [])
mana_module2.controller("mana_dept_cont2",
	function($scope)
	{
		$scope.racks = [
			{ no: '37', id1: '658.15', id2: '658.2' },
			{ no: '38', id1: '658.201', id2: '658.4034' },
           	{ no: '39', id1: '658.4035', id2: '658.5' },
			{ no: '40', id1: '658.5001', id2: '658.8' }
		];
	}
);

var mech_module = angular.module("mech_dept", [])
mech_module.controller("mech_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '32', id1: '621.81502', id2: '621.989' },
			{ no: '31', id1: '621.7', id2: '621.815' },
           	{ no: '30', id1: '621.4361', id2: '621.69' },
			{ no: '29', id1: '621.4021', id2: '621.436' },
			{ no: '28', id1: '621.0', id2: '621.4021' }
		];
	}
);

var chemanu_module = angular.module("chemanu_dept", [])
chemanu_module.controller("chemanu_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '41', id1: '658.8', id2: '660.2841' },
			{ no: '42', id1: '660.28', id2: '660.289' },
			{ no: '43', id1: '660.29', id2: '669.0' },
			{ no: '44', id1: '669.01', id2: '671.49' },
			{ no: '45', id1: '671.5', id2: '688.99' }
		];
	}
);

var auto_module = angular.module("auto_dept", [])
auto_module.controller("auto_dept_cont",
	function($scope)
	{
		$scope.racks = [
			{ no: '33', id1: '621.99', id2: '621.139' }
		];
	}
);

angular.element(document).ready(function()
{
	// angular.bootstrap(document.getElementById("mana1_id"), ['mana_dept1']);
	angular.bootstrap(document.getElementById("auto_id"), ['auto_dept']);
	angular.bootstrap(document.getElementById("mana2_id"), ['mana_dept2']);
	angular.bootstrap(document.getElementById("mech_id"), ['mech_dept']);
	angular.bootstrap(document.getElementById("chemanu_id"), ['chemanu_dept']);
})