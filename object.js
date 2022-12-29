let arr=[12,12,32,43,45,54,545,45,45,454,45,32,43, "ant", "bat", "bag", "tag", "ram"]

let obj={};

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++
    }
}




let str="abcdef"

let alphabet="abcdefghijklmnopqrstuvwxyz";

let obj={};

for(let i=0; i<alphabet.length; i++){

   if(obj[alphabet[i]]==undefined){
    obj[alphabet[i]]=i+1;

   }

}
let str="ajhkgyu"
let sum=0;
for(let j=0; j<str.length; j++){
    for(let key in obj){
        if(str[j]==key){
          sum+=obj[key]+"-"+key+" ";
        }
    }
  
}
console.log(sum)



let num=7; k=2;
for(let i=1; i<=num; i++){
    if(i%k==0){
        console.log(i);
    }
}


let num=7; k=2;

let sum=0;

for(let i=1; i<=num; i++){
    if(i%2==0){
        sum+=i;
    }
}

console.log(sum)


let N=20;
let count=0;

for(let i=1; i<=N; i++){   //  
    // 
    if(N%i==0){
        count++
    }
}

if(count==2){
    console.log(i)
}
else{
    console.log("its not a prime")
}


let N=29;

for(let i=1; i<=N; i++)
   bag=1
   for(let j=1; j<=i; j++){
   if(i%j==0){
    bag=0;
    break
 
   }
   }
   if(bag==1){
    console.log(i)
   }

let days=31;
for(let j=1; j<=12; j++){
    for(let i=1; i<=days; i++ ){
       if(j==2  ){
        days=28;
       }
       else if(j==4 || j==6 || j==9|| j==11) {
        days=30
       }
       else{
        days=31
       }
       console.log(i+"-"+j);
       }

       
}
for(let j=1; j<=10;j++){
    bag="";
    for(let i=1; i<=10; i++){
        if(j==1 || j==10){
            bag+='*'
        }
        else{
            if(i==1|| i==10){
                bag+="*"
            }
            else{
                bag+=" "
            }
        }
    

     
    }
    console.log(bag)

}


for(let i=1; i<=10; i++){
   bag="";

   for(let j=1; j<=10;j++){
       if(i==1|| i==10){
        bag+="*"
       }else{
        if(j==5){
            bag+='*'
        }
        else{
            bag+=" "
        }
       }

   }
   console.log(bag)

}






for(let j=1; j<=5; j++){

    let bag=""
    for(let i=1; i<=5; i++){
        bag+=i+" "
      
    }
    console.log(bag)
}

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2,11,15,7]; target = 9

for(let i=0;i<nums.length; i++){

    for(let j=i+1; j<nums.length; j++){
              if(nums[i]+nums[j]==target){
                console.log(i, j)
                break
              }

    }
}


let arr=[2,4,2,4,5,6,7,8,7,6,5]

let obj={};

for(let i=0; i<arr.length; i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1
  }
  else{
    obj[arr[i]]++
  }
}

console.log(obj)

for(let key in obj){
  console.log(key)
}

let arr=[5,4,7,3,5,3,4,8,7]

let arr1=[], bag=""

for(let i=0; i<arr.length; i++){
  for(let j=0; j<=i; j++){
    if(arr[i]==arr1[j]){
      break
    }
    else if(j==i){
      arr1[j]=arr[i]
      bag+=arr1[i]+" ";
    }
  }
}
console.log(bag)





write an object method and print your name and location

let obj={

detail: function(){
  console.log("My name is Aman Deep",  "Im from Patna");
}


};

obj["detail"]();
obj.detail()


 calculate the perimeter of rectangle and area of rectangle using function inside mrthod ??



let rectangle={

l: 10,
b:25,

 area: function(){
  console.log(this.l * this.b);

 },

 peri: function(){
  console.log(2*(this.l+this.b));
 }

};

rectangle.area()

rectangle.peri()





let obj={

name: "AmanDeep",
age: 21,
location: "Patna",
hobbies: ["playing-cricket", "coding"],

print: function(){
  console.log("My name is", this.name);
  console.log("I am"+this.age+ "year old");
  console.log("I am from "+ this.location);
  console.log("My hobbies are" +this.hobbies.join());


}



};

obj.print()

let arr=[]
function details(name, maths, physics,chemestry){
 
  let obj={}
  
  obj.name=name
  obj.math=maths
  obj.phy=physics
  obj.chem=chemestry
  arr.push(obj)
 
}

details("Aman", 77, 88, 99);
details("vivek", 67, 57,74)


console.log(arr)



function least(arr){

  let arr=[]

  let min=Infinity
  for(let i=0; i<arr.length; i++){
    
  }


}



function password(str){
  let n=str.length-1
  let count=0
  
  let alphabet="abcdefghijklmnopqrstuvwxyz"
  for(let i=0; i<str.length; i++){
       for(let j=0;j<alphabet.length;j++){
        if(str[i]==alphabet[j]){
          count++
          break
        }
       }
  }
  if(count>n/2){
    console.log("strong")
  }
  else{
    console.log("weak")
  }

}
console.log(password("ab123"))




let arr=[]

function details(name,physics,chemestry,maths){
  let obj={}

  obj.names=name;
  obj.Math=maths;
  obj.phy=physics;
  obj.chem=chemestry;
 arr.push(obj)
 
 function least(){
  let min=Infinity; total=0;
  for(let i=0;i<this.arr.length; i++){
    let total=this.arr[i].Math+ this.arr[i].phy+this.arr[i].chem
  }
  console.log(total)
  

}
}

details("aman",88,77,89)
details("mannu",67,78,76)
console.log(arr)

conbbsole.log(least())




let n=3

for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    if(i%5==0 && i%3==0 ){
      console.log("fizzbuzz");
    }
    else if(i%3==0){
      console.log("fizz")
      break
    }
    else if(i%5==0){
      console.log("buzz")
    }
    else{
      console.log(i)
    }

  }
}





let n=97420;
let N=n.toString()

let a="420";
let flag="no"
for(let i=0; i<N.length;i++){
      
}




let arr=[4,3,2,4,4]
let product=1

for(let i=0; i<arr.length; i++){
product=product*arr[i]
}

console.log(product)


let arr=[[1,2,3],
        [4,5,6],
        [7,8,9]]

  for(let i=0; i<arr.length; i++){
    for(j=0; j<arr[i];j++){
        console.log(arr[i])
    }
}
let i=0

for(let j=0; j<arr[i].length; j++){
      console.log([i][j])
}


function uniqueCharacters(str)
{
     
    If at any time we encounter 2
    same characters, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    If no duplicate characters
    encountered, return true
    // return true;
}

console.log(uniqueCharacters("masai"))




 object inside object or function question 




let sum =0;

let bag=""
for(let i=0; i<arr.length; i++){
    let bag=0;
    
    for(let j=0; j<arr[0].length; j++){
      bag+=arr[i][j]
      sum+=bag
    
    }
    
sum+=bag
} 

console.log(sum)
console.log(1+2+3+4+5+6+7+8+9+10+11+12)

console.log(bag)

function checkprime(n){
    if(n==1|| n==undefined){
        return false
    }
    for(let i=2; i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
   return true
}

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9, 10, 11, 12],

];
let sum=0;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(checkprime(arr[i][j]%2==0)){
            sum+=arr[i][j]
        }
    }
}

console.log(sum)




