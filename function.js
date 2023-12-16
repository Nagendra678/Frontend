// two major thing in this 1 is argument and second is parameter

// let hii =(x,y)=>{
//     console.log("this is my day")
//     return ("hii")
// }
// var a = 25
// var b = 25
// var v =hii(a,b)
// console.log(v);096

// const bro =(x,y)=>{
    //     x = 25
    //     y= 25
    //     let p  =(x+y)
    //     console.log(p);
    // }
    // bro()
    
    /*** note ***/
    // function ko only call karne par hi run karaya ja saktha hai



    // AGE 18 TO 25 THAN HAI TO BIKE RIDE 
    // AGE 14 TO 18 PAR YT KYU NHAI TRY KIYA 
    // AGE 7 TO 14 FREE FIRE KHEL KYU PUBG OVER 25 AGE 
    // less than 7 child hai tu to 
    
    // function ag (age){
    //     if (age < 7 && age >=1){
    //         alert("are you a small and cute child");
    //     }
    //     else if (age >=7 && age <=14 ){
    //         alert("FREE FIRE KHEL");
    //     }
    //     else if(age > 14 && age <=18){
    //         alert("PAR YT KYU NAHI KIYA");
    //     }
    //     else{
    //         alert("KAM BANDHA DEKHO YAHA KYA KAR RAHE HO");
    //     }
        
    // }
    // let p = prompt("a valid no")
    // p = parseInt(p)
    // ag(p)
    

// let a = [1,2,3,4,5,6]
// let b;
// do {
//  b = prompt("enter")
//  b = Number.parseInt(b)
//  a.push(b)
// }
// while(a!=0);
// console.log(a);

// let a = [ 10,20,25,14,13,670]
// let b = a.filter((x)=>{
//    return x%10 == 0;
// })
// console.log(b);

// a = [1,2,3,4,5,6]
// let b  = a.map((x)=>{
//    return x*x
// })
// console.log(b);

// let arr = [1,2,3,4,5]
// IS MAI 1ST TIME 1*2 =
                  // 2*3 =
                  // 6*4= 
                  // 24*5=120 PRINT HOGA
// function fun (x1 ,x2){
//    return x1*x2
// }
// let arr2 = arr.reduce(fun)
// console.log(arr2);


// fist clip 
// panner 
// second uski sis ayi 
// third sabne milke kahye
// four mai gobhar dhan bana 
// and some work are doing 
// fir sabne pooja 
// uske bad patakhe fode 3 4 jadda add ki hogi bass or kuch nahi or link raha hai ek dusri video se
//  radha radha radha radha radha radh*a radha radha radha radh radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha rdha radha radha radha radha radha radha radha radha radharadha radha radha radha radha radha radha radha radha radha rahd radha radha radha radha radha radha rahda radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha rahd aradha radha radha radha radha radha radha radha radha radha radha radha radha radha radha radha // 

// simple boltha bass nahi kuch to extra bhi kartha hai syad se

// function hot (){
//     return [1,2,3,4,'hii',5]
// }
// let arr = hot()
// let p = arr.filter((x)=>{
//     return(typeof x==="number") 
// })
// console.log(p);
// let c = p.map((value)=>{
//     return value*value
// })
// console.log(c);
// let u = c.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(u);

// let obj = { a: 1, b: 2, c: 3 };
// let new_obj = {};
// for (let key in obj) {
//   new_obj[key] = new_obj[key] * 2;
// }

// console.log(new_obj);

// function pii (){
//     return [1,2,3,4,5,6,7,8]
// }
// let p = pii()


function categorizeNumbers(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      } else {
        oddNumbers.push(numbers[i]);
      }
    }
  
    return { evenNumbers, oddNumbers };
  }
  
  // Example usage:
  const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const result = categorizeNumbers(inputNumbers);
  
//   console.log('Even Numbers:', result.evenNumbers);
//   console.log('Odd Numbers:', result.oddNumbers);


  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  const result = Object.groupBy(inventory, ({ type }) => type);
  console.log(result);
