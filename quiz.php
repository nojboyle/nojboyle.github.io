<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
     <link rel="stylesheet" type="text/css" href="style4.css" />
</head>
<body>

 <div id="page-wrap">
 
 <h1>Quiz Performance:</h1>
 
        <?php
            
            $ans1 = $_POST["question-1-answers"];
            $ans2 = $_POST["question-2-answers"];
            $ans3 = $_POST["question-3-answers"];
            $ans4 = $_POST["question-4-answers"];
            $ans5 = $_POST["question-5-answers"];
        
            $score = 0;
            
            if ($ans1 == "B") { $score++; }
            if ($ans2 == "C") { $score++; }
            if ($ans3 == "C") { $score++; }
            if ($ans4 == "C") { $score++; }
            if ($ans5 == "B") { $score++; }
            
            echo "<div id='performance'>" . $score * 20 ." / 100%</div>";
            echo "<br>Question 1:";
            echo "<br>Correct answer: B) Noah Boyle";
            echo "<br>Your answer: $ans1";
            echo "<br>Question 2:";
            echo "<br>Correct answer: C) Private University";
            echo "<br>Your answer: $ans2";
            echo "<br>Question 3:";
            echo "<br>Correct answer: C) JavaScript";
            echo "<br>Your answer: $ans3";
            echo "<br>Question 4:";
            echo "<br>Correct answer: C) 1831";
            echo "<br>Your answer: $ans4";
            echo "<br>Question 5:";
            echo "<br>Correct answer: B) Lana Del Rey";
            echo "<br>Your answer: $ans5";
        ?>
 
 </div>

</body>
</html>
