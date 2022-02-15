<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
     <link rel="stylesheet" type="text/css" href="style3.css" />
</head>
<body>

 <div id="page-wrap">
 
 <h1>Receipt:</h1>
 
        <?php
            
            $name = $_GET["name"];
            $email = $_GET["email"];
            $ani = $_GET["animal"];
            $num = $_GET["quantity"];
            $totalprice = 0;

            switch($ani)
            {
                case"cat":
                    echo "Name: $name<br>";
                    echo "Email: $email<br>";
                    echo "Quantity: You purchased $num Cats at the price of $100 per Cat<br>";
                    $totalprice = $num * 100;
                    echo "Total:" . '$' . "$totalprice";
                    break;
                case"dog":
                    echo "Name: $name<br>";
                    echo "Email: $email<br>";
                    echo "Quantity: You purchased $num Dogs at the price of $200 per Dog<br>";
                    $totalprice = $num * 200;
                    echo "Total:" . '$' . "$totalprice";
                    break;
            } 
        ?>
 
 </div>

</body>
</html>
