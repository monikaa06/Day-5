 //for in loop
 var array= [{
    "vehicle": "car",
    "model": 2010,
 },
   {
    "vehicle": "bike",
    "model": 2007,
 }
];
    for (var key in array ) {
        if (array.hasOwnProperty(key)) {
           console.log(array[key].vehicle);
 }
}

//for of loop
var array = [
   {vehicle:'Benz',
    speed:`250`, 
    model :`A4`  
   },
    {vehicle1:'Audi',
    model2:`Q3`,
    speed3:`150`

   }
   ];
for (var result of array){
  console.log(result.model2);
}

//forEach loop
const person = {
   id: 1, 
   firstName: 'Terry',
   lastName: 'Smith',
   maidenName:'Patrick',
   age: 50, 
   gender: 'male'
   };
   const keys = Object.keys(person);

   keys.forEach(key => {
   console.log(key, person[key]);
   });

//for loop 
const user = {
   name: "Tiya",
   age:30,
   job:"programmer"
   };
   const entries = Object.entries(user);
   //console.log(entries)
   for (let i  = 0; i<entries.length; i++) {
   console.log(`${entries[i][0]}: ${entries[i][1]}`);
   }
   