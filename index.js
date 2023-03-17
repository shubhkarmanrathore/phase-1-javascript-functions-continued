function saturdayFun (string = 'roller-skate') {
    return `This Saturday, I want to ${string}!`;
    }
    saturdayFun();
    
    function mondayWork (string = 'go to the office') {
        return `This Monday, I will ${string}.`;
        }
        saturdayFun();
    
    function wrapAdjective(string1 = "*") {
        return function (string = "special"){
            return `You are ${string1}${string}${string1}!`
            }
        }
    console.log(wrapAdjective())