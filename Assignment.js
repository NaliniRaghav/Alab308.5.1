// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const numbers = [10,20,30,40,50];
let sum =0;

    function addtheitems() {

       for (i = 0; i< numbers.length; i++)
       {

       sum = sum + (numbers[i]);
    console.log(numbers[i]);

    }
   return sum;
   }
console.log(addtheitems());
// //     //average
let sum1 =0;

    function Averageoftheitems() {

       for (i = 0; i< numbers.length; i++)
       {

       sum1 = sum1 + (numbers[i]);
    console.log(numbers[i]);

    }

    
    
    return (sum1/numbers.length);
   }

console.log(Averageoftheitems());
   

// //Take an array of strings and return the longest string.

let Items = ["January","February", "March", "April", "May"];
let longeststring = "";
let stringlength = 0;

let Noofitems = Items.length;
let string = "";

function longstring() {
  for (i = 0; i < Noofitems; i++) {
    string = Items[i];
     
    console.log(string);
     let x = string.length;
     

    if (string.length > stringlength) {
       
      longeststring = string;
      stringlength = string.length;

    }
  }
  return longeststring;
}

 console.log("The longest string is " + longstring());

// // Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// // check the length of the each item in the String
// // if it is  greater than the number push it to a new array newItems
Items = ["January","February","March","april","May","June","July"];
let number = prompt("Enter a number ");
number =Number(number);
function FormNewArray(Items, number)
{

   let newItems = [];
   noOfitems = Items.length;
   for (i=0; i<noOfitems; i++)
      {
{
   if( (Items[i].length ) > number )
   newItems.push(Items[i]);
}

}
   return newItems;

  }
   
  if ((FormNewArray(Items,number ).length)==0)
   console.log("There are no strings with a length greater than the number")

  else
  console.log("These strings have a length greater than the number: " + FormNewArray(Items,number));

//let n = prompt("Enter a number");
let n = prompt("Enter a number for printing");
 n=Number(n);

let M = n;
let times = 0;
function print(n) {
  if (times !== M) {
   times = times + 1;
  
  console.log(times);
  print(n);
   
  }
  else
  return;
}


print(n);