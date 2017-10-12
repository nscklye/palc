
// Delcare variables
    var tpaMod, sevenCMod;
    var baseDmg, tpaAwakening, sevenCAwakening, tpaMultiplier, sevenCMultiplier;
// Add values to the awakening modifiers.
    tpaMod = 1.5;
    sevenCMod = 2;
// Add values to card specific attributes
    baseDmg = 2347;
    tpaAwakening = 0;
    sevenCAwakening = 3;
// Multiply #of awakenings to their appropriate modifiers
// tpaMultiplier = tpaMod * tpaAwakening; (old multiplier method)
    tpaMultiplier = tpaMultiplierFunction(tpaMod, tpaAwakening);
// sevenCMultiplier = sevenCMod * sevenCAwakening;
    sevenCMultiplier = sevenCMultiplierFunction(sevenCMod, sevenCAwakening);
/* Note: If tpaAwakening or sevenCAwakening are 0, it results in rawBaseDmg = 0.
   Come up with an if statement that would account for that.
   Additionally, create a function that does the calculations like
*/
// Multiply base damage by the awakening multipliers
    var rawBaseDmg = baseDmg * tpaMultiplier * sevenCMultiplier;
// Write the results to the element id "atk"
    document.getElementById("atk").innerHTML = 
        "Ideal's Base Attack: " + baseDmg + "<br>" + 
        "TPA Awakenings: " + tpaAwakening + "<br>" + 
        "Seven Combo Awakenings: " + sevenCAwakening + "<br><br>" + 
        "Base Attack with Awakenings: " + rawBaseDmg;
    
    function tpaMultiplierFunction(p1,p2){
        if (tpaAwakening >= 1){
            return p1 * p2;
        }
            else {
                return 1;
            }
    }
    
    function sevenCMultiplierFunction(pa1,pa2){
        if (sevenCAwakening >= 1){
            return pa1 * pa2;
        }
            else {
                return 1;
            }
    }