 let strAdjust = 0,
            baseStr = 8,
        dexAdjust = 0,
            baseDex = 8,
        conAdjust = 0,
            baseCon = 8,
        intAdjust = 0,
            baseInt = 8,
        wisAdjust = 0,
            baseWis = 8,
        chaAdjust = 0,
            baseCha = 8,
        rollStr,
            strBuff = 0,
        rollDex,
            dexBuff = 0,
        rollCon,
            conBuff = 0,
        rollInt,
            intBuff = 0,
        rollWis,
            wisBuff = 0,
        rollCha,
            chaBuff = 0,
           pointBuy = 32;

    let pointValue;
    let raceBuff = document.getElementById('raceBuff');

    function resetBuffs() {
        strBuff = 0;
        dexBuff = 0;
        conBuff = 0;
        intBuff = 0;
        wisBuff = 0;
        chaBuff = 0;
        raceBuff.innerText = '';
    }

    function resetVals() {
            strAdjust = 0,
            baseStr = 8,
            dexAdjust = 0,
            baseDex = 8,
            conAdjust = 0,
            baseCon = 8,
            intAdjust = 0,
            baseInt = 8,
            wisAdjust = 0,
            baseWis = 8,
            chaAdjust = 0,
            baseCha = 8,
            pointBuy = 32;
    }


    function setBases() {
        document.getElementById('playerChoice').style.display = 'none';
        document.getElementById('playerChoice2').style.display = 'none';

        let race = document.getElementById("race").selectedIndex;
        let raceArr = document.querySelectorAll('.option1');
        let use = raceArr[race].value;


        resetVals();
        resetBuffs();

        if (use === 'reset') {
            resetVals();
            resetBuffs();
            raceBuff.innerText = '';

        } else if (use === 'Aarakocra') {
            dexBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Dexterity and +1 to Wisdom';

        } else if (use === 'Fallen Aasimar') {
            chaBuff = 2;
            strBuff = 1;
            raceBuff.innerText = 'You receive +2 to Charisma and +1 to Strength';

        } else if (use === 'Protector Aasimar') {
            chaBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Charisma and +1 to Wisdom';

        } else if (use === 'Scourge Aasimar') {
            chaBuff = 2;
            conBuff = 2;
            raceBuff.innerText = 'You receive +2 to Charisma and +2 to Constitution';

        } else if (use === 'Variant Aasimar') {
            chaBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Charisma and +1 to Wisdom';

        } else if (use === 'Bugbear') {
            strBuff = 2;
            dexBuff = 1
            raceBuff.innerText = 'You receive +2 to Strength and +1 to Dexterity';

        } else if (use === 'Centaur') {
            strBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Strength and +1 to Wisdom';

        } else if (use === 'Dragonborn') {
            strBuff = 2;
            chaBuff = 1;
            raceBuff.innerText = 'You receive +2 to Strength and +1 to Charisma';

        } else if (use === 'Hill Dwarf') {
            conBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Constitution and +1 to Wisdom';

        } else if (use === 'Mountain Dwarf') {
            conBuff = 2;
            strBuff = 2;
            raceBuff.innerText = 'You receive +2 to Constitution and +2 to Strength';

        } else if (use === 'High Elf') {
            dexBuff = 2;
            intBuff = 1;
            raceBuff.innerText = 'You receive +2 to Dexterity and +1 to Intelligence';

        } else if (use === 'Wood Elf') {
            dexBuff = 2;
            wisBuff = 1;
            raceBuff.innerText = 'You receive +2 to Dexterity and +1 to Wisdom';

        } else if (use === 'Half-Elf') {
            document.getElementById('playerChoice').style.display = 'inline-block';

            chaBuff = 2;
            raceBuff.innerText = 'You receive +2 to Charisma and +1 to a stat of your choosing';

        } else if (use === 'Half-Orc') {
            strBuff = 2;
            conBuff = 1;
            raceBuff.innerText = 'You receive +2 to Strength and +1 to Constitution';

        } else if (use === 'LightFoot Halfling') {
            dexBuff = 2;
            chaBuff = 1;
            raceBuff.innerText = 'You receive +2 to Dexterity and +1 to Charisma';

        } else if (use === 'Stout Halfling') {
            dexBuff = 2;
            conBuff = 1;
            raceBuff.innerText = 'You receive +2 to Dexterity and +1 to Constitution';

        } else if (use === 'Human') {
            strBuff = 1;
            dexBuff = 1;
            conBuff = 1;
            intBuff = 1;
            wisBuff = 1;
            chaBuff = 1;
            raceBuff.innerText = 'You receive +1 to all stats';

        } else if (use === 'Human Variant') {
            document.getElementById('playerChoice').style.display = 'inline-block';
            document.getElementById('playerChoice2').style.display = 'inline-block';

            raceBuff.innerText = 'You can choose two different stats to increase by +1';

        } else if (use === 'Rock Gnome') {
            intBuff = 2;
            conBuff = 1;
            raceBuff.innerText = 'You receive +2 to Intelligence and +1 to Constitution';

        } else if (use === 'Tiefling') {
            intBuff = 1;
            chaBuff = 2;
            raceBuff.innerText = 'You receive +2 to Charisma and +1 to Intelligence';

        }

        updateBuffs();

    }

   function statDecrease(stat, baseStat) {
       let total = baseStat + stat;

       if(total >= 19) {
           pointValue = 4;
       } else if(total <= 18 && total > 16) {
           pointValue = 3;
       } else if(total <= 16 && total > 13) {
           pointValue = 2;
       } else if(total <= 14) {
           pointValue = 1;
       }
       if((baseStat + stat) - 1 >= 4) {
           stat = stat -1;
            pointBuyUp(pointValue);
            updatePoints();
            return stat;
       } else {
           throw 'Cannot drop stat any lower!';
       }
    }

   function statIncrease(stat, baseStat) {
       let total = stat + baseStat;

      if(total <= 12) {
          pointValue = 1;
      } else if(total >= 13 && total < 16) {
          pointValue = 2;
      } else if(total >= 16 && total < 18) {
          pointValue = 3;
      } else if(total >= 18) {
          pointValue = 4;
      }

        if(pointBuy <= 0 || (pointBuy - pointValue) < 0) {
            throw 'No more points to use!';
        }
        if((baseStat + stat) + 1 <= 20) {
            stat = stat + 1;
            pointBuyDown(pointValue);
            updatePoints();
            return stat;
        }  else {
            throw 'Cannot raise stat any further!';
        }

    }

    function updateBuffs() {
        document.getElementById('strBuff').innerText = `+${strBuff}`;
        document.getElementById('dexBuff').innerText = `+${dexBuff}`;
        document.getElementById('conBuff').innerText = `+${conBuff}`;
        document.getElementById('intBuff').innerText = `+${intBuff}`;
        document.getElementById('wisBuff').innerText = `+${wisBuff}`;
        document.getElementById('chaBuff').innerText = `+${chaBuff}`;

        if(strBuff === 0) {
            document.getElementById('strBuff').style.display = 'none';
        } else {
            document.getElementById('strBuff').style.display = 'flex';
        }
        if(dexBuff === 0) {
            document.getElementById('dexBuff').style.display = 'none';
        } else {
            document.getElementById('dexBuff').style.display = 'flex';
        }
        if(conBuff === 0) {
            document.getElementById('conBuff').style.display = 'none';
        } else {
            document.getElementById('conBuff').style.display = 'flex';
        }
        if(intBuff === 0) {
            document.getElementById('intBuff').style.display = 'none';
        } else {
            document.getElementById('intBuff').style.display = 'flex';
        }
        if(wisBuff === 0) {
            document.getElementById('wisBuff').style.display = 'none';
        } else {
            document.getElementById('wisBuff').style.display = 'flex';
        }
        if(chaBuff === 0) {
            document.getElementById('chaBuff').style.display = 'none';
        } else {
            document.getElementById('chaBuff').style.display = 'flex';
        }
    }

   function setAdjust() {
        document.getElementById('strAdjust').innerHTML = strAdjust.toString();
        document.getElementById('dexAdjust').innerHTML = dexAdjust.toString();
        document.getElementById('conAdjust').innerHTML = conAdjust.toString();
        document.getElementById('intAdjust').innerHTML = intAdjust.toString();
        document.getElementById('wisAdjust').innerHTML = wisAdjust.toString();
        document.getElementById('chaAdjust').innerHTML = chaAdjust.toString();

        document.getElementById('strTotal').innerHTML = 'Strength: ' + (strAdjust + baseStr + strBuff).toString();
        document.getElementById('dexTotal').innerHTML = 'Dexterity: ' + (dexAdjust + baseDex + dexBuff).toString();
        document.getElementById('conTotal').innerHTML = 'Constitution: ' + (conAdjust + baseCon + conBuff).toString();
        document.getElementById('intTotal').innerHTML = 'Intelligence: ' + (intAdjust + baseInt + intBuff).toString();
        document.getElementById('wisTotal').innerHTML = 'Wisdom: ' + (wisAdjust + baseWis + wisBuff).toString();
        document.getElementById('chaTotal').innerHTML = 'Charisma: ' + (chaAdjust + baseCha + chaBuff).toString();

       document.getElementById('strTotal_m').innerHTML = 'Strength: ' + (strAdjust + baseStr + strBuff).toString();
       document.getElementById('dexTotal_m').innerHTML = 'Dexterity: ' + (dexAdjust + baseDex + dexBuff).toString();
       document.getElementById('conTotal_m').innerHTML = 'Constitution: ' + (conAdjust + baseCon + conBuff).toString();
       document.getElementById('intTotal_m').innerHTML = 'Intelligence: ' + (intAdjust + baseInt + intBuff).toString();
       document.getElementById('wisTotal_m').innerHTML = 'Wisdom: ' + (wisAdjust + baseWis + wisBuff).toString();
       document.getElementById('chaTotal_m').innerHTML = 'Charisma: ' + (chaAdjust + baseCha + chaBuff).toString();
    }

    function pointBuyUp(pointValue) {
       pointBuy += pointValue;
       return pointBuy;
    }

    function pointBuyDown(pointValue) {
       pointBuy -= pointValue;
        return pointBuy;
    }

    function updateChoice() {
        document.getElementById('pick1').selectedIndex = 0;
        document.getElementById('pick2').selectedIndex = 0;
    }

    function resetRace() {
        document.getElementById('race').selectedIndex = 0;
        raceBuff.innerText = '';
    }

    function playerChoice(id, selector) {

         let selection = document.getElementById(id).selectedIndex;
         let choices = document.querySelectorAll(selector);
         let choice = choices[selection].value;
         let choice1 = document.getElementById('pick1').selectedIndex;
         let choice2 = document.getElementById('pick2').selectedIndex;

       if(document.getElementById('playerChoice2').style.display === 'none' || document.getElementById('playerChoice').style.display === 'none') {
          setBases();
         }

       if(document.getElementById('playerChoice2').style.display !== 'none' && document.getElementById('playerChoice').style.display !== 'none') {
             if(choice1 !== 1 && choice2 !== 1) {
                strBuff = 0;
            }
             if(choice1 !== 2 && choice2 !== 2) {
                dexBuff = 0;
            }
             if(choice1 !== 3 && choice2 !== 3) {
                conBuff = 0;
            }
             if(choice1 !== 4 && choice2 !== 4) {
                intBuff = 0;
            }
             if(choice1 !== 5 && choice2 !== 5) {
                wisBuff = 0;
            }
             if(choice1 !== 6 && choice2 !== 6) {
                chaBuff = 0;
            }
        }
            console.log(choice1, choice2);
            if(choice === 'str') {
             strBuff = 1;
         } else if(choice === 'dex') {
             dexBuff = 1;
         } else if(choice === 'con') {
             conBuff = 1;
         } else if(choice === 'int') {
             intBuff = 1;
         } else if(choice === 'wis') {
             wisBuff = 1;
         } else if(choice === 'cha') {
             chaBuff = 1;
         }

            updateBuffs();

    }

    function updatePoints() {
        document.getElementById('pointsRemaining').innerText = `Points remaining: ${pointBuy}`
    }

    updatePoints();
    setAdjust();
    setBases();

    //logic for pointRoller

 function roller() {
   return  Math.floor(Math.random() * 6) +1;
 }

 function rollStat() {
     let rollArr = [];

     let d1 = roller();
     let d2 = roller();
     let d3 = roller();
     let d4 = roller();

     rollArr.push(d1,d2, d3, d4);
     rollArr.sort();
     rollArr.shift();

     let total = rollArr.reduce((previousValue, currentValue) => previousValue + currentValue);
     return total;
 }

 function setRolls() {
      rollStr = rollStat();
      rollDex = rollStat();
      rollCon = rollStat();
      rollInt = rollStat();
      rollWis = rollStat();
      rollCha = rollStat();

      playDiceRoll();

      setTimeout(function() {
          document.getElementById('rollStr').innerText = rollStr;
          document.getElementById('rollDex').innerText = rollDex;
          document.getElementById('rollCon').innerText = rollCon;
          document.getElementById('rollInt').innerText = rollInt;
          document.getElementById('rollWis').innerText = rollWis;
          document.getElementById('rollCha').innerText = rollCha;
      }, 500);

 }

 function toggle() {
     let pointBuy = document.getElementById('pointBuy');
     let diceRoll = document.getElementById('rollScores');
     let toggle = document.getElementById('toggle');
     let raceSelect = document.getElementById('race');

    if(pointBuy.style.display !== 'none') {
         pointBuy.style.display = 'none';
         diceRoll.style.display = 'block';
         toggle.innerText = 'Switch to Point Buy';
     } else if(pointBuy.style.display === 'none') {
         diceRoll.style.display = 'none';
         pointBuy.style.display = 'block';
         toggle.innerText = 'Switch to Dice Roller';
     }

     document.getElementById('pick1').selectedIndex = 0;
     document.getElementById('pick2').selectedIndex = 0;
 }

 function playDiceRoll() {
     let roll = roller();

     const roll1 = new Audio('media/dice_throw1.wav');
     const roll2 = new Audio('media/dice_throw2.wav');

     if(roll % 2 === 0) {
        roll1.play();
     } else {
         roll2.play();
     }
 }