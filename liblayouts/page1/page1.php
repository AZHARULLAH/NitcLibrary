<?php
        $rackno = $_GET['rackno'];
        // echo $rackno;
?>

<!DOCTYPE html>

<html>

<head>

        <link rel="stylesheet" type="text/css" href="page1layout.css">
        <link rel="stylesheet" type="text/css" href="page1dimensions.css">
        <link rel="stylesheet" type="text/css" href="page1nodes.css">
        <script type="text/javascript" src="../assets/jquery.js"></script>
        <script type="text/javascript" src="../assets/angular.js"></script>
        <script type="text/javascript" src="page1layout.js"></script>
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

                <div id="ece_id1" class="ece dept left" ng-app="ece_dept1" ng-controller="ece_dept_cont1">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="ece_id2" class="ece dept middle" ng-app="ece_dept2" ng-controller="ece_dept_cont2">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="ece_id3" class="ece dept right ece_right" ng-app="ece_dept3" ng-controller="ece_dept_cont3">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

        </div>


        <!-- LEFT SECTION -->

        <div class="left section wrapper spacing-left">

                <div id="eee_id" class="eee dept" ng-app="eee_dept" ng-controller="eee_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks | orderBy: '-' ">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="cse_id" class="cse dept" ng-app="cse_dept" ng-controller="cse_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="coe_id" class="coe dept" ng-app="coe_dept" ng-controller="coe_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

        </div>


        <!-- RIGHT SECTION -->

        <div class="right section wrapper spacing-right">

                <div id="cte_id" class="cte dept" ng-app="cte_dept" ng-controller="cte_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="cie_id1" class="cie dept" ng-app="cie_dept1" ng-controller="cie_dept_cont1">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="cie_id2" class="cie dept" ng-app="cie_dept2" ng-controller="cie_dept_cont2">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="art_id" class="art dept" ng-app="art_dept" ng-controller="art_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="mtm_id" class="mtm dept" ng-app="mtm_dept" ng-controller="mtm_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="phy_id" class="comp dept" ng-app="phy_dept" ng-controller="phy_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

        </div>

        <!-- BOTTOM MIDDLE PART -->

        <div class="bottom middle section wrapper">

                <div id="gne_id" class="gne dept" ng-app="gne_dept" ng-controller="gne_dept_cont">
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
        <img id="opac" src="../assets/img/opac.png" height="350px" width="300px">
        <img id="reading_area1" src="../assets/img/reading_area.png" height="40px" width="140px">
        <img id="reading_area2" src="../assets/img/reading_area.png" height="40px" width="140px">
        <img id="reading_area3" src="../assets/img/reading_area.png" height="40px" width="140px">
        <img id="reading_area4" src="../assets/img/reading_area.png" height="40px" width="140px">
        <img id="reading_area5" src="../assets/img/reading_area.png" height="40px" width="140px">
        <!-- <img id="reading_area6" src="../assets/img/reading_area.png" height="40px" width="140px"> -->
        <img id="staff" src="../assets/img/staff.png" height="80px" width="50px">

        <!-- NODES -->
        <div id="nodes_list">
                <!-- <div class="node_point"></div> -->
        </div>

</body>

</html>