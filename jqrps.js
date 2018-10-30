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
        if (choice1 = 'fire')
          {
        if (choice2 === 9 || choice2 === 3 || choice2 ===  4 || choice2 === 5 || choice2 === 6 || choice2 === 7 || choice2 === 8)
              {
                document.getElementById('win').innerHTML="A winner is you!";
              }
        else if (choice2 === 1 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 15)
              {
                document.getElementById('lose').innerHTML="Ya lose bruv!";
              }
        else
              {
                document.getElementById('tie').innerHTML="Issa Tie. That okay.";
              }
          }
          if (choice1 = 'scissors')
            {
          if (choice2 === 9 || choice2 === 10 || choice2 ===  4 || choice2 === 5 || choice2 === 6 || choice2 === 7 || choice2 === 8)
                {
                  document.getElementById('win').innerHTML="A winner is you!";
                }
          else if (choice2 === 1 || choice2 === 2 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 15)
                {
                  document.getElementById('lose').innerHTML="Ya lose bruv!";
                }
          else
                {
                  document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                }
              }

                if (choice1 = 'snake')
                  {
                if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 5 || choice2 === 6 || choice2 === 7 || choice2 === 8)
                      {
                        document.getElementById('win').innerHTML="A winner is you!";
                      }
                else if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 15)
                      {
                        document.getElementById('lose').innerHTML="Ya lose bruv!";
                      }
                else
                      {
                        document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                      }
                  }
                  if (choice1 = 'human')
                    {
                  if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 6 || choice2 === 7 || choice2 === 8)
                        {
                          document.getElementById('win').innerHTML="A winner is you!";
                        }
                  else if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 4 || choice2 === 13 || choice2 === 14 || choice2 === 15)
                        {
                          document.getElementById('lose').innerHTML="Ya lose bruv!";
                        }
                  else
                        {
                          document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                        }
                    }
                    if (choice1 = 'tree')
                      {
                    if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 7 || choice2 === 8)
                          {
                            document.getElementById('win').innerHTML="A winner is you!";
                          }
                    else if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 4 || choice2 === 5 || choice2 === 14 || choice2 === 15)
                          {
                            document.getElementById('lose').innerHTML="Ya lose bruv!";
                          }
                    else
                          {
                            document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                          }
                      }
                      if (choice1 = 'wolf')
                        {
                      if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 8)
                            {
                              document.getElementById('win').innerHTML="A winner is you!";
                            }
                      else if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 4 || choice2 === 5 || choice2 === 6 || choice2 === 15)
                            {
                              document.getElementById('lose').innerHTML="Ya lose bruv!";
                            }
                      else
                            {
                              document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                            }
                        }
                        if (choice1 = 'sponge')
                          {
                        if (choice2 === 9 || choice2 === 10 || choice2 ===  11 || choice2 === 12 || choice2 === 13 || choice2 === 14 || choice2 === 15)
                              {
                                document.getElementById('win').innerHTML="A winner is you!";
                              }
                        else if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 4 || choice2 === 5 || choice2 === 6 || choice2 === 7)
                              {
                                document.getElementById('lose').innerHTML="Ya lose bruv!";
                              }
                        else
                              {
                                document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                              }
                          }
                          if (choice1 = 'paper')
                            {
                          if (choice2 === 10 || choice2 === 11 || choice2 ===  12 || choice2 === 13 || choice2 === 14 || choice2 === 15 || choice2 === 1)
                                {
                                  document.getElementById('win').innerHTML="A winner is you!";
                                }
                          else if (choice2 === 2 || choice2 === 3 || choice2 ===  4 || choice2 === 5 || choice2 === 6 || choice2 === 7 || choice2 === 8)
                                {
                                  document.getElementById('lose').innerHTML="Ya lose bruv!";
                                }
                          else
                                {
                                  document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                }
                            }
                                if (choice1 = 'air')
                                  {
                                if (choice2 === 11 || choice2 === 12 || choice2 ===  13 || choice2 === 14 || choice2 === 15 || choice2 === 1 || choice2 === 2)
                                      {
                                        document.getElementById('win').innerHTML="A winner is you!";
                                      }
                                else if (choice2 === 3 || choice2 === 4 || choice2 ===  5 || choice2 === 6 || choice2 === 7 || choice2 === 8 || choice2 === 9)
                                      {
                                        document.getElementById('lose').innerHTML="Ya lose bruv!";
                                      }
                                else
                                      {
                                        document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                      }
                                  }
                                  if (choice1 = 'water')
                                    {
                                  if (choice2 === 12 || choice2 === 13 || choice2 ===  14 || choice2 === 15 || choice2 === 1 || choice2 === 2 || choice2 === 3)
                                        {
                                          document.getElementById('win').innerHTML="A winner is you!";
                                        }
                                  else if (choice2 === 4 || choice2 === 5 || choice2 ===  6 || choice2 === 7 || choice2 === 8 || choice2 === 9 || choice2 === 10)
                                        {
                                          document.getElementById('lose').innerHTML="Ya lose bruv!";
                                        }
                                  else
                                        {
                                          document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                        }
                                    }
                                    if (choice1 = 'dragon')
                                      {
                                    if (choice2 === 13 || choice2 === 14 || choice2 ===  15 || choice2 === 1 || choice2 === 2 || choice2 === 3 || choice2 === 4)
                                          {
                                            document.getElementById('win').innerHTML="A winner is you!";
                                          }
                                    else if (choice2 === 5 || choice2 === 6 || choice2 ===  7 || choice2 === 8 || choice2 === 9 || choice2 === 10 || choice2 === 11)
                                          {
                                            document.getElementById('lose').innerHTML="Ya lose bruv!";
                                          }
                                    else
                                          {
                                            document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                          }
                                      }
                                      if (choice1 = 'devil')
                                        {
                                      if (choice2 === 14 || choice2 === 15 || choice2 ===  1 || choice2 === 2 || choice2 === 3 || choice2 === 4 || choice2 === 5)
                                            {
                                              document.getElementById('win').innerHTML="A winner is you!";
                                            }
                                      else if (choice2 === 6 || choice2 === 7 || choice2 ===  8 || choice2 === 9 || choice2 === 10 || choice2 === 11 || choice2 === 12)
                                            {
                                              document.getElementById('lose').innerHTML="Ya lose bruv!";
                                            }
                                      else
                                            {
                                              document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                            }
                                        }
                                        if (choice1 = 'lightning')
                                          {
                                        if (choice2 === 15 || choice2 === 1 || choice2 ===  2 || choice2 === 3 || choice2 === 4 || choice2 === 5 || choice2 === 6)
                                              {
                                                document.getElementById('win').innerHTML="A winner is you!";
                                              }
                                        else if (choice2 === 7 || choice2 === 8 || choice2 ===  10 || choice2 === 11 || choice2 === 12 || choice2 === 13 || choice2 === 14)
                                              {
                                                document.getElementById('lose').innerHTML="Ya lose bruv!";
                                              }
                                        else
                                              {
                                                document.getElementById('tie').innerHTML="Issa Tie. That okay.";
                                              }
                                          }
                                          if (choice1 = 'gun')
                                            {
                                          if (choice2 === 1 || choice2 === 2 || choice2 ===  3 || choice2 === 4 || choice2 === 5 || choice2 === 6 || choice2 === 7)
                                                {
                                                  document.getElementById('win').innerHTML="A winner is you!";
                                                }
                                          else if (choice2 === 8 || choice2 === 9 || choice2 ===  10 || choice2 === 11 || choice2 === 12 || choice2 === 13 || choice2 === 14)
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
