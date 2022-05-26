
/*function that returns the longest name*/
const getLongestName = () => {
    let array=["Noxolo","Akhona","Mondli","Kgotatso","Lehlokgonolo"];
    let longestName = " ";
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestName.length){
            longestName = array[i];
        }
    }
    return longestName;
}
console.log(getLongestName())


/*function that passes two values value1 and value2 calculate the two values*/
function sum(a ,b){
    return a + b
}
console.log(sum(6,4))



/*function that returns the total amount*/
const calculateLIst = (a) =>{
   let numbers = [5,10,15,20,25,30,35,40];
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
      sum += numbers[i]
  }return sum
};
console.log(calculateLIst())



/*function that stores the values in an array*/
function getNames(){
    let students = [
        {name:"Noxolo" , surname:"Biyela"},
        {name:"Akhona" , surname:"Shiceka"},
        {name:"Mondli" , surname:"Ndaba"},
        {name:"moral" , surname:"smith"}
    ]
    let newArray = [];

    for(let i = 0; i < students.length; i++){
        newArray.push(students[i].name);
        }
        return newArray
    }

console.log(getNames())


