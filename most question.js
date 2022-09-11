// 1
// let a = []
// let b = []
// console.log(a==b)
// console.log(a===b)

// 2
// let a = []
// let b = a
// console.log(a==b)
// console.log(a===b)

// 3
// let a = [2,4,6,3,5,]
// a.forEach(function(value,index){
//     console.log(index+":"+value)
// })

// for in

// const a = {

//     name:"saurabh",
//     age: 17,
//     student:"RAM"

// }
// a.name="ayush"
// a.age=45
// a.student="shayam"
// console.log(a)

// let name=["ram","raju","shanu","anku","lucky","ayush"]
// // name.sort();
// // name.reverse()
// // name.pop()
// // name.push("saurabh")
// name.unshift("singh")
// console.log(name)

// var str="hello everone my name is saurabh "
// //  var a = str.length
// str.tolowerCase
// document.write(str)

// const a = [25,20,30,34]
// a[1]=25
// console.log(a)

// const a={
//     name:"sauranh",
//     age:17,
//     class:"1st"
// }
// a.name="aman"
// console.log(a)




// var a =30
// var b =30
// function sum(value1,value2){
//     var s = value1+value2;
//     console.log(s)
// }
// sum(3,40)

// var str = "hello";
// var newstr="";
// for(var i = str.length=1;i>=0;i--){
//     newstr+=str[i];
// }
// console.log(newstr);










// most question

// let list = [5,2,6,1,20,9]
// let item=1
// for (index=0;index<6;index++){
//     if (item==list[index])
//         console .log("found")
    
//     else(console.log("not found"))
// }




// let count=0;
// let list = [5,1,6,1,20,1,30,7,6,8]
// let item=1
// for (index=0;index<9;index++){
//     if (item==list[index]){
//         count++
//         console .log("found")
//     }
//         else
//         { console.log("not found")}
// }

// console.log(count)




//  let count=0;
// let list = [5,2,6,1,20,9,1,1,]
// let item=1
// for (index=0;index<9;index++){
//     if (item==list[index])
//     count++;}
        

// if(count>0){
// console.log(`item found ${count} times`)}//'item found'+count+'times
// else{
// console.log("not found")}



// break
// let count=0;
// let list = [5,2,6,1,20,9,1,1,]
// let item=1
// for (index=0;index<9;index++){
//     if (item==list[index])
//     count++;
//     break
// }
        

// if(count>0){
// console.log(`item found ${count} times`)}//'item found'+count+'times
// else{
// console.log("not found")}



// 



var list =[15,5,6,7,4,1]
var temp;
for (i=0;i<=list.length-2;i++)
{
    for (j=i+1;j<=list.length-1;j++)
    {
        if(list[i]>list[j])
     {
         temp=list[i];
        list[i]=list[j];
        list[j]=temp
     }
    }
}
console.log(list)
































