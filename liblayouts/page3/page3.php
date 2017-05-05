<?php
        $rackno = $_GET['rackno'];
        // echo $rackno;
?>

<!DOCTYPE html>

<html>

<head>

        <link rel="stylesheet" type="text/css" href="page3layout.css">
        <link rel="stylesheet" type="text/css" href="page3dimensions.css">
        <link rel="stylesheet" type="text/css" href="page3nodes.css">
        <script type="text/javascript" src="../assets/jquery.js"></script>
        <script type="text/javascript" src="../assets/angular.js"></script>
        <script type="text/javascript" src="page3layout.js"></script>
        <!--<script type="text/javascript" src="coloring.js"></script>-->

</head>

<body>

        <script type="text/javascript">
        
                jQuery(document).ready(function ($) {
                        var rackno = "<?php echo $rackno; ?>";
                        
						$('.rack_part1').each(function () {
							var thisval = $(this).text();
							// alert(thisval)
							if (thisval == rackno) {
								$(this).css("background-color", "lightgreen");
								flag = 1;
							}
						});

						$('.rack_part2').each(function () {
							var thisval = $(this).text();
							// alert(thisval)
							if (thisval == rackno) {
								// alert(thisval)
								$(this).css("background-color", "lightgreen");
								flag = 1;
								// alert("thisval")
							}
						});

                })
        
        </script>

        <!--<script type="text/javascript" src="nodes.js"></script>-->

        <!-- TOP SECTION -->

        <div class="top section wrapper">

                <div id="geneco_id" class="geneco dept" ng-app="geneco_dept" ng-controller="geneco_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="chem_id" class="chem dept" ng-app="chem_dept" ng-controller="chem_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="bionano_id" class="bionano dept" ng-app="bionano_dept" ng-controller="bionano_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>
                
                <div id="litgeo1_id" class="litgeo dept" ng-app="litgeo_dept1" ng-controller="litgeo_dept_cont1">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="litgeo2_id" class="litgeo dept" ng-app="litgeo_dept2" ng-controller="litgeo_dept_cont2">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

        </div>

        <!-- IMAGES -->
        <img id="entrance" src="../assets/img/entrance.png" height="75px" width="45px">
        <img id="reading_area1" src="../assets/img/reading_area.png" height="60px" width="170px">

        <!-- NODES -->
        <div id="nodes_list">
                <!-- <div class="node_point"></div> -->
        </div>

</body>

</html>