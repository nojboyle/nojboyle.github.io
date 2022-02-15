<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
     <link rel="stylesheet" type="text/css" href="style2.css" />
</head>

<body>

<?php
     $num1 = $_POST["num1"] + 0;
     $float1 = floatval($num1);
     $num2 = $_POST["num2"] + 0;
     $float2 = floatval($num2);
     $operation = $_POST["button1"];
     switch($operation)
     {
          case "+":
               echo "$float1" ."$operation" ."$float2" .' = ' .$float1 + $float2;
               break;
          case "-":
               echo "$float1" ."$operation" ."$float2" .' = ' .$float1 - $float2;
               break;
          case "*":
               echo "$float1" ."$operation" ."$float2" .' = ' .$float1 * $float2;
               break;
          case "/":
               echo "$float1" ."$operation" ."$float2" .' = ' .$float1 / $float2;
               break;
     }

?>

</body>
</html>