console.log('JS');

let refrigeratorContents  = {
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  eggs: 4,
  onions: 1,
  pancakeMixBags: 1,
  tomatoes: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents) {

pancakesAvailable = pancakeTester(contents); //return value of pancake tester, returns boolean
//console.log(pancakesAvailable);
 
  if( contents.baconStrips >= 9 && contents.eggs >= 6 || pancakesAvailable ){
      return 'yes';
  }
return 'No';
   
}



function pancakeTester( contents ){ //returns true or false if enought of the right pancakes can be made
  
  let totalPancakesAvailable = contents.pancakeMixBags * 10; //one bag of mix can make 10 pancakes, bags cannot be partial

  if( (contents.chocolateChips/totalPancakesAvailable) < 15){  //makeing sure that the pancakes are chocolaty enough
    console.log('There are not enough chocolate chips to make the pancakes chocolaty enough!');
    return false;
  }
  if (totalPancakesAvailable > 9){//checking to make sure more than nine pancakes can be made
  return true;
  }
  return false;
}



// Your function should return 'yes' or 'no'
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));