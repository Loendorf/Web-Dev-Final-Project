java.   
  /*> let choices = ["Air", "Devil", "Dragon", "Fire", "Gun", "Human", "Lightning", "Paper", "Rock", "Scissors", "Snake", "Sponge", "Tree", "Water", "Wolf"];
  > choices.length
  <~15*/ 
  var computerChoice = Math.random();
        if (computerChoice < 0.0626) {
            computerChoice = "1";
        } else if(computerChoice <= 0.126) {
            computerChoice = "2";
        }
        else if(computerChoice <= 0.1876) {
            computerChoice = "3";
        }
        else if(computerChoice <= 0.26) {
            computerChoice = "4";
        }
        else if(computerChoice <= 0.3125) {
            computerChoice = "5";
        }
        else if(computerChoice <= 0.376) {
            computerChoice = "6";
        }
        else if(computerChoice <= 0.4376) {
            computerChoice = "7";
        }
        else if(computerChoice <= 0.5) {
            computerChoice = "8";
        }
        else if(computerChoice <= 0.5625) {
            computerChoice = "9";
        }
        else if(computerChoice <= 0.626) {
            computerChoice = "10";
        }
        else if(computerChoice <= 0.6876) {
            computerChoice = "11";
        }
        else if(computerChoice <= 0.76) {
            computerChoice = "12";
        }
        else if(computerChoice <= 0.8125) {
            computerChoice = "13";
        }
        else if(computerChoice <= 0.876) {
            computerChoice = "14";
        }
        else if(computerChoice <= 0.9376) {
            computerChoice = "15";
        }
         else {
            computerChoice = "16";
        }
