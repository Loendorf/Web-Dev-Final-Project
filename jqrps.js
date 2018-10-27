java.   
  /*> let choices = ["Air", "Devil", "Dragon", "Fire", "Gun", "Human", "Lightning", "Paper", "Rock", "Scissors", "Snake", "Sponge", "Tree", "Water", "Wolf"];
  > choices.length
  <~15*/ 
   // User choice
        var userChoice = prompt("choose 1-16");
        if (! userChoice) {
            // User choice was undefined
            document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
        } else {
            // Display user choice
            document.write("<p>Player 1:" + " " + userChoice + "</p>");
        }
        // Computer choice
        var computerChoice = Math.random();
        if (computerChoice < 0.0667) {
            computerChoice = "1";
        } else if(computerChoice <= 0.133) {
            computerChoice = "2";
        }
        else if(computerChoice <= 0.225) {
            computerChoice = "3";
        }
        else if(computerChoice <= 0.2667) {
            computerChoice = "4";
        }
        else if(computerChoice <= 0.3333) {
            computerChoice = "5";
        }
        else if(computerChoice <= 0.425) {
            computerChoice = "6";
        }
        else if(computerChoice <= 0.4667) {
            computerChoice = "7";
        }
        else if(computerChoice <= 0.5333) {
            computerChoice = "8";
        }
        else if(computerChoice <= 0.625) {
            computerChoice = "9";
        }
        else if(computerChoice <= 0.6667) {
            computerChoice = "10";
        }
        else if(computerChoice <= 0.7333) {
            computerChoice = "11";
        }
        else if(computerChoice <= 0.825) {
            computerChoice = "12";
        }
        else if(computerChoice <= 0.8667) {
            computerChoice = "13";
        }
        else if(computerChoice <= 0.9333) {
            computerChoice = "14";
        }
         else {
            computerChoice = "15";
        }
        // Display computer choice
        document.write("<p>Computer:" + " " + computerChoice + "</p>");
        // Compare user choice vs computer choice
        var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "1") {
                if (choice2 === "2,3,4,5,6,7".contains(choice2)) {

                    // rock wins
                    return "You win!";
                } else {
                    // rock loses
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "2") {
                if (choice2 === "3,4,5,6,7,8".contains(choice2)) {
                    // fire wins
                    return "You win!";
                } else {
                    // fire loses
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "3") {
                if (choice2 === "4,5,6,7,8,9".contains(choice2)) {
                    // scissors wins
                    return "You lose! Try again.";
                } else {
                    // scissors loses
                    return "You win!";
                }
                if (choice1 === "4") {
                    if (choice2 === "5,6,7,8,9,10".contains(choice2)) {
                        // snake wins
                        return "You win!";
                    } else {
                        // snake loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "5") {
                    if (choice2 === "6,7,8,9,10,11".contains(choice2)) {
                        // human wins
                        return "You win!";
                    } else {
                        // human loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "6") {
                    if (choice2 === "7,8,9,10,11,12".contains(choice2)) {
                        // tree wins
                        return "You win!";
                    } else {
                        // tree loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "7") {
                    if (choice2 === "8,9,10,11,12,13".contains(choice2)) {
                        // wolf wins
                        return "You win!";
                    } else {
                        // wolf loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "8") {
                    if (choice2 === "9,10,11,12,13,14".contains(choice2)) {
                        // sponge wins
                        return "You win!";
                    } else {
                        // sponge loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "9") {
                    if (choice2 === "10,11,12,13,14,15".contains(choice2)) {
                        // paper wins
                        return "You win!";
                    } else {
                        // paper loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "10") {
                    if (choice2 === "11,12,13,14,15,1".contains(choice2)) {
                        // air wins
                        return "You win!";
                    } else {
                        // air loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "11") {
                    if (choice2 === "12,13,14,15,1,2".contains(choice2)) {
                        // water wins
                        return "You win!";
                    } else {
                        // water loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "12") {
                    if (choice2 === "13,14,15,1,2,3".contains(choice2)) {
                        // dragon wins
                        return "You win!";
                    } else {
                        // dragon loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "13") {
                    if (choice2 === "14,15,1,2,3,4".contains(choice2)) {
                        // devil wins
                        return "You win!";
                    } else {
                        // devil loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "14") {
                    if (choice2 === "15,1,2,3,4,5".contains(choice2)) {
                        // lightning wins
                        return "You win!";
                    } else {
                        // lightning loses
                        return "You lose! Try again.";
                    }
                }
                if (choice1 === "15") {
                    if (choice2 === "1,2,3,4,5,6".contains(choice2)) {
                        // gun wins
                        return "You win!";
                    } else {
                        // gun loses
                        return "You lose! Try again.";
                    }
                }
                    /*if (choice1 ==="15")
                        {
                        switch (math.Random())
                            {case 1:
                            return "You win" ;
                            case 2:
                            return "You win" ;
                            case 3:
                            return "You win" ;
                            case 4:
                            return "You win" ;
                            case 5:
                            return "You win" ;
                            case 6:
                            return "You win";
                        }
                          else
                             {
                              return "You lose! Try again.";
                             }
                        */
                }
            }
        };
        // Run the compare function
        var results = compare(userChoice,computerChoice);
        // Display results
        document.write("<br><hr><br>" + results);
