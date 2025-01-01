// 1task
for (let i =0; i <= 10; i++ )
{console.log(i);}

// حل ثاني
// for (let i =0; i < 11; i++)
//     {console.log(i);}
console.log("..................")
// 2t
let i =0;
while(i < 11){
    console.log(i);
    i+=1;
}
console.log("..................")
// 3t
let index = [1 , 2 ,3 , 4 , 5 ]
for (let i = 0; i < index.length ; i++)
{console.log(index[i]);}
console.log("..................")

// 4t

for (let i =0; i <= 10; i+=2){
    console.log(i);
}
console.log("..................")

// 5t

let sum = 0;
for (let i = 1; i<= 10 ; i++){
    sum += i; 
     // sum=sum+i;
}
console.log(sum);
console.log("..................")

// 6t

// let num = [1 ,2 ,3 ,4 , 5];
// let lar = Math.max(...num)
// console.log(lar);

let number = [1, 2 ,3 ,4 ,5 ];
let lar = number[0]
for (let x = 1; x < number.length; x++ ){
   if ( number[x] > lar ){
    lar = number[x];
}
   }
   console.log(lar);

console.log("..................")

// 7t

// let numb = [1 ,2 ,3 ,4 , 5];
// let smo = Math.min(...numb)
// console.log(smo);


let num = [1 , 2, 3 ,4 ,5];
let smallest = num[0];
for ( i=1; i < num.length; i++)
{
    if ( num [i] < smallest){
        smallest =num[i];
    }
}
console.log (smallest)
console.log("..................")

// 8t
var mum = [ 1, 2, 3, 4 ,5 ];
var sume = 0;
for ( i =0; i <mum.length; i++){
    sume += mum[i];
}
var ave = sume/ mum.length;
console.log(ave)
console.log("..................")

// mid 12t
let input = 5 ;
let fictorial = 1;
for ( i = 1; i <= input; i++)
    fictorial *=i;
{ 
    console.log(fictorial)
}
console.log("..................")
 
// 13t

// 14t

// 15t
let int = [1 ,2, 3, 4, 5];
// let step =[0];
for ( i=1; i <=int.length; i+=2)
{console.log([i])}
console.log("..................")

// advanced 16

for ( i=5; i>=1; i--)
{ console.log(i)}
console.log("..................")

// 17t

let inte = [1 ,2 ,3,4,5];
for (i = 0; i <= inte.length ; i++){
   if (inte != 3 , 4 , 5)
{
    continue;

}
console.log(inte[i])
}

//  13 + 14 + 18+ 19+ 20