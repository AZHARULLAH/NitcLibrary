<?php
        $rackno = $_GET['rackno'];
        // echo $rackno;
?>

<!DOCTYPE html>

<html>

<head>

        <link rel="stylesheet" type="text/css" href="page2layout.css">
        <link rel="stylesheet" type="text/css" href="page2dimensions.css">
        <link rel="stylesheet" type="text/css" href="page2nodes.css">
        <script type="text/javascript" src="../assets/jquery.js"></script>
        <script type="text/javascript" src="../assets/angular.js"></script>
        <script type="text/javascript" src="page2layout.js"></script>
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

        <div class="top section wrapper middle">

                <div id="mana1_id" class="mana1 dept middle" ng-app="mana_dept1" ng-controller="mana_dept_cont1">
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

        <div class="left section wrapper">

                <div id="auto_id" class="auto dept left" ng-app="auto_dept" ng-controller="auto_dept_cont">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="mech_id" class="mech dept left" ng-app="mech_dept" ng-controller="mech_dept_cont">
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

        <div class="right section wrapper">

                <div id="mana2_id" class="mana2 dept right" ng-app="mana_dept2" ng-controller="mana_dept_cont2">
                        <table>
                                <tr ng-repeat="rack in racks">
                                        <td class="rack_number">{{ rack.no }}</td>
                                        <td class="rack_part1">{{ rack.id1 }}</td>
                                        <td class="rack_part2">{{ rack.id2 }}</td>
                                </tr>
                        </table>
                </div>

                <div id="chemanu_id" class="chemanu dept right" ng-app="chemanu_dept" ng-controller="chemanu_dept_cont">
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
        <img id="reading_area1" src="../assets/img/reading_area.png" height="40px" width="140px">
        <img id="reading_area2" src="../assets/img/reading_area.png" height="40px" width="140px">

        <!-- NODES -->
        <div id="nodes_list">
                <!-- <div class="node_point"></div> -->
        </div>

</body>

</html>