
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
           pointBuy = 32;

    let pointValue;

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

        if(use === 'reset'){
            resetVals();

        } else if(use === 'Aarakocra') {
            baseDex += 2;
            baseWis += 1;
        } else if(use === 'Fallen Aasimar') {
            baseCha += 2;
            baseStr += 1;
        } else if(use === 'Protector Aasimar') {
            baseCha += 2;
            baseWis += 1;
        } else if(use === 'Scourge Aasimar') {
            baseCha += 2;
            baseCon += 2;
        } else if(use === 'Variant Aasimar') {
            baseCha += 2;
            baseWis += 1;
        } else if(use === 'Bugbear') {
            baseStr += 2;
            baseDex += 1;
        } else if(use === 'Centaur') {
            baseStr += 2;
            baseWis += 1;
        } else if(use === 'Dragonborn') {
            baseStr += 2;
            baseCha += 1;
        } else if(use === 'Hill Dwarf') {
            baseCon += 2;
            baseWis += 1;
        } else if(use === 'Mountain Dwarf') {
            baseCon += 2;
            baseStr += 2;
        } else if(use === 'High Elf') {
            baseDex += 2;
            baseInt += 1;
        } else if(use === 'Wood Elf') {
            baseDex += 2;
            baseWis += 1;
        } else if(use === 'Half-Elf') {
            baseCha += 2;
            document.getElementById('playerChoice').style.display = 'inline-block';
        } else if(use === 'Half-Orc') {
            baseStr += 2;
            baseCon += 1;
        } else if(use === 'LightFoot Halfling') {
            baseDex += 2;
            baseCha += 1;
        } else if(use === 'Stout Halfling') {
            baseDex += 2;
            baseCon += 1;
        } else if(use === 'Human') {
            baseCha += 1;
            baseWis += 1;
            baseDex += 1;
            baseStr += 1;
            baseCon += 1;
            baseInt += 1;
        } else if(use === 'Human Variant') {
            document.getElementById('playerChoice').style.display = 'inline-block';
            document.getElementById('playerChoice2').style.display = 'inline-block';
        } else if(use === 'Rock Gnome') {
            baseInt += 2;
            baseCon += 1;
        } else if(use === 'Tiefling') {
            baseInt += 1;
            baseCha += 2;
        }
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
        console.log(pointBuy);
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
        console.log(pointBuy);
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

   function setAdjust() {
        document.getElementById('strAdjust').innerHTML = strAdjust.toString();
        document.getElementById('dexAdjust').innerHTML = dexAdjust.toString();
        document.getElementById('conAdjust').innerHTML = conAdjust.toString();
        document.getElementById('intAdjust').innerHTML = intAdjust.toString();
        document.getElementById('wisAdjust').innerHTML = wisAdjust.toString();
        document.getElementById('chaAdjust').innerHTML = chaAdjust.toString();

        document.getElementById('strTotal').innerHTML = 'Strength: ' + (strAdjust + baseStr).toString();
        document.getElementById('dexTotal').innerHTML = 'Dexterity: ' + (dexAdjust + baseDex).toString();
        document.getElementById('conTotal').innerHTML = 'Constitution: ' + (conAdjust + baseCon).toString();
        document.getElementById('intTotal').innerHTML = 'Intelligence: ' + (intAdjust + baseInt).toString();
        document.getElementById('wisTotal').innerHTML = 'Wisdom: ' + (wisAdjust + baseWis).toString();
        document.getElementById('chaTotal').innerHTML = 'Charisma: ' + (chaAdjust + baseCha).toString();
    }

    function pointBuyUp(pointValue) {
       pointBuy += pointValue;
       return pointBuy;
    }

    function pointBuyDown(pointValue) {
       pointBuy -= pointValue;
        return pointBuy;
    }

    function playerChoice(id, selector) {
            setBases();

            let selection = document.getElementById(id).selectedIndex;
            let choices = document.querySelectorAll(selector);
            let choice = choices[selection].value;

            if(choice === 'str') {
                baseStr += 1;
            } else if(choice === 'dex') {
                baseDex += 1;
            } else if(choice === 'con') {
                baseCon += 1;
            } else if(choice === 'int') {
                baseInt += 1;
            } else if(choice === 'wis') {
                baseWis += 1;
            } else if(choice === 'cha') {
                baseCha += 1;
            }

    }

    function updatePoints() {
        document.getElementById('pointsRemaining').innerText = `Points remaining: ${pointBuy}`
    }
    updatePoints();
    setAdjust();
    setBases();