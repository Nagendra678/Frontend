// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// console.log(fruits);

// sort and concat function
// let arr = [9,8,3,4,9,6,10]
// let new_arr = [2,3,5,75,98,75,45]
// let p = [225,567,786,321,2331,5568,457]
// console.log(arr.sort().concat(new_arr.sort()));
// console.log(p.sort());
// let compare = (a,b)=>{
//     a-b
// }
// let arr = [3,4,5,521,784,678,1000]
// arr.sort(compare)
// arr.reverse()
// console.log(arr);
// ye assending order mai print karega is mai conditoin check hoti hai
// 3-4 = -1 to jo jitna chotta value hoga utna hi bad mai ayega vo 
//  syntex hai ki a mai first hoga a = index[0]
//

// fir or sabbhi che kiye jayege 
// // reverse is a function which is used for the revers the arr 

// let a = [1,2,3,4,5,6,7,8,9,10]
//  let viral = a.splice(1,4,2)
// console.log(viral);

// const fruit = ["Banana", "Orange", "Apple", "Mango"]; 
// fruit.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruit);  

// const fruit =['banana',"file","hello","hii"]
// fruit.splice(2,2,63)
// console.log(fruit);

// let p = [1,2,3,4,5,6,7,8,9,10]
// let newp = p.slice(3,5)
// console.log(newp);


//  arr ko change nahi kartha hai only udate artha hai ye to bass

// NAN MEANS NOT A NUMBER 
// MAP FUNCTION IS ALWAYS RETURN A NEW ARRAY 

// let arr = ['paroton',"bheem"]
// let p =arr.map((hii,pop,hot) =>{
//     console.log(hii,pop,hot);
//      return pop
//     //  HII = VALUE[PROTON ,BHEEM] , POP = INDEXNO{[0],[1]} , HOT = ARRAYVALUES{['PROTON' ,'BHEEM']}
//      /****EK BEST BAT KI RETURN HOKE VALUE KISI VARIABLE MAI STORE HOTI HAI*/
//     //  here plus is used as concanate THE TWO VLAUES AND THIS IS USED TO CONCANATE
// }) 
// console.log(p)
// // function arr (){

// }

//  arr = {
//     names : "hello",
//     score : "100",
//     grade : "A"
// }


//  sum = 0
// let arr  = [1,2,3,4,5,6,7]
// for (i =0;i<arr.length;i++){
//    sum += i }
// console.log(sum);

//  for in loop used for object se alue alne ke liye


//  for(){
    
//  }
// let obj = [
    
//         {Name:"Rahul", Age:21},
//         {Name:"Rohit", Age:21},
//         {Name:"shail", Age:2},
//         {Name:"mukul", Age:21}
    
//  ]

// function avg(student)   {
//     let average = student.reduce((new_obj,sum)=>qq
//         new_obj+sum,0
// )

    
//      let c = average / student.length;
//     console.log(c);
// }
// avg(obj)


// function Sort(person){
//     let sort = person.sort((a,b)=>{
//         let NameA = a.Name.toUpperCase();
//         let NameB = b.Name.toUpperCase();
//         if(NameA>NameB){
//             return 1;
//         }
//         if(NameA < NameB){
//             return -1;
//         }
//         return 0
//     })  
//     return sort
// }
// console.log(Sort(obj));


// let a = [1,2,3,4,5,6]
// let pop=(c,d)=>{return (c+d)}
// let y = a.reduce(pop)
// console.log(y);

// reduce use hota hai add karne ke liye 2argument pas karne hote hai uske bad inko used kiy jata hai
// iski working kuch is trh se hai ki c mai 1 aya and d mai 2 fir kya hoga ki add perfrom hoga ek bar 
// fir uske bad c mai add wali value put ho jayegi and d mai age wali means next index value ayegi jiske bad the fir se aad or ye ek loop ki trh chalega

// let hii = [1,2]; 
// f=(a,b)=>{return(a+b)}
// let has = hii.map(f)
// console.log(has);


/*let arr = [1,2,3,3,4,4,5,5,6]
let fun = (hope)=>{
    return hope.filter((value,index,count)=>
     console.log(count),
     console.log(count.indexOf(value))
        // count.indexOf(value) === index
        
    )}
console.log(fun(arr));*/


/* keys and values */


// let obj = {
//     car : "ford",
//     model : 1987
// }
// function fun(obj){
//     return Object.entries(obj)

// }
// console.log(fun(obj));


/*let arr = [1,2,3,4,5]
let New = arr.forEach((array)=>{
    console.log(array);
})
// console.log(New);

function sum (...arti){

 return arti.reduce((a,b)=>a+b,0)

// }console.log(sum(New));*/

// for buzz and fizz and the are used in the type of the final values


// for ( i =0;i<=100;i++){
//     if (i %3 == 0){
//         console.log("fizz");
//     }
//     else if (i%5 == 0 ){
//         console.log("buzz");
//     }
//     else if (i%3 && i%5 == 0){
//         console.log("fizzbuzz");

//     }
//     else {
//         console.log(i);
//     }
// }

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// console.log(over18);
// function myFunction(value, index, array) {
//   return value < 18;
// }

// let p = [45,8,9,49,72];
// let c = p.filter(voi);
// console.log(c);
// function voi(val,ind,arr){

//    return  val<18;
// }

