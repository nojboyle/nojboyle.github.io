<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
     <link rel="stylesheet" type="text/css" href="style1.css" />
</head>
<body>

<?php
     $adjective1 = $_GET["adjective1"];
     $adjective2 = $_GET["adjective2"];

     $noun1 = $_GET["noun1"];
   	$noun2 = $_GET["noun2"];
     $noun3 = $_GET["noun3"];

     $verb1 = $_GET["verb1"];
     $verb2 = $_GET["verb2"];

     $number = $_GET["number"];

     echo "The $adjective1 $noun1 $verb1 the $adjective2 food.<br>";
     echo "After, they went to $noun2 $verb2 with $number $noun3.<br>";
?>

</body>
</html>
