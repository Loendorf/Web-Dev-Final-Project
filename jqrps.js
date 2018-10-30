//computerchoice
let choice2 = 0;
function rpschoice(choice1)
{
  function computerChoice(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    choice2 = Math.floor(Math.random() * (max-min)) +min;
  }
    computerChoice(1,16);
      if (choice1 = 'rock')
        {
      if (choice2 === 2 || choice2 === 3 || choice2 ===  4 || choice2 === 5 || choice2 === 6 || choice2 === 7 || choice2 === 8)
            {
              document.getElementById('win').innerHTML="A winner is you!";
            }
      else if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 15)
            {
              document.getElementById('lose').innerHTML="Ya lose bruv!";
            }
      else
            {
              document.getElementById('tie').innerHTML="Issa Tie. That okay.";
            }
        }
}
//Help recieved from Matthew Kathman
//David C. Lovelace provided the original design
