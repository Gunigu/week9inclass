 var supplies = ["products", "wipes","gloves","towels", "cottonrounds"];
 
 console.log(supplies.length);
   

   for (i=0;i<supplies.length; i++){
   	  console.log(supplies[i].length);
   

   }
   

// var reversedArray = supplies.reverse();
// console.log(reversedArray);




function copyOfArray(){
	var copyOfArray= [];
for(i=0; i<supplies.length; i++){
 copyOfArray.push(supplies[i]);
 }

 return copyOfArray
}

  console.log(copyOfArray(supplies).reverse());

  var sortArray=copyOfArray(supplies).sort();
  console.log(sortArray);


  var nums =[10, 200, 30, 400, 50];
 var ascendingOrder = nums.sort(function(a,b){
                   return a-b;

 }
) 
     console.log(ascendingOrder);

 var descendingOrder = nums.sort(function(a,b){
 	         return b-a;
 }
 )
     console.log(descendingOrder);

     

  var myArr =["hey", "hello", "bye"];
  myArr.push("goodmorning");
   myArr.push("goodafternoon");
      console.log(myArr)
    myArr.shift("hey"); 
    console.log(myArr)


var items = [];

function myArr() {
  boxvalue = document.getElementById('box').value;
  items.push(boxvalue);
  console.log(items);
  return false; 
}