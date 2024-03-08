// it is a programming language which is built on top of javascript
// it a superset of js
// var x:any;
// x = 20 
// x = 'hello'
// var y:string;
// var z:number;
// var s:boolean;
// var x = 10; // type inferance, typescript is automatically convertiong // it will consider x as number if u assign other than num it will gijve an error
// x = 40;
// // x = 'hello'
// // console.log(x);
// // var x:number;  //type annotation // we are converting
// x = 10 
// function parameters and return type
// function sum(a:number,b:number):number{
//     return a+b
// }
// var t = sum(2,3)
// console.log(t);
//callback(anonymous) function parameters 
// var ar:any[] = [1,2,'hello',5]
// var ar:number[] = [1,2,3,4,5]
// ar.forEach((a:number)=>{
//     console.log(a);
// })
// var obj:{} = {'fn':"naresh",'ln':'suresh'} // not the correct way
//object type
// type Student = {
//     'fn':string;
//     'ln':string;
//     'age'?:number;  // if we give ? it means it is optional
// }
// var stu:Student = {
//     'fn':'naresh',
//     'ln':'suresh',
//     'age':9
// }
// var stu2:Student = {
//     'fn':'naresh',
//     'ln':'suresh',
// }
//interface objects
// interface Student {   // if we wana use interface we need to remove = sign  interface is an abstract class
//     'fn':string;
//     'ln':string;
//     'age'?:number;  // if we give ? it means it is optional
// }
// var stu:Student = {
//     'fn':'naresh',
//     'ln':'suresh',
//     'age':9
// }
// var stu2:Student = {
//     'fn':'naresh',
//     'ln':'suresh',
// }
//adding a new property to an interface 
// interface Cadidate extends Student{
//     company:string
// }
// var cand:Cadidate = {
//     fn:'suresh',
//     ln:'naresh',
//     age:98,
//     company:'edupoly'
// }
//union types:
// function sum(a:number,b:number){
//     return parseFloat(a) + parseFloat(b)
// }
// sum('2','3') // any one condition will be failed so need union type
// sum(2,3)
// function sum(a:string|number,b:string|number){
//     return (+a)+(+b)
// }
// sum(2,3)
// sum("2",'3')
//enumarable 
var Floor;
(function (Floor) {
    Floor[Floor["Ground"] = 0] = "Ground";
    Floor[Floor["First"] = 1] = "First";
    Floor[Floor["Second"] = 2] = "Second";
    Floor[Floor["Third"] = 3] = "Third";
    Floor[Floor["Fourth"] = 3] = "Fourth";
})(Floor || (Floor = {}));
// console.log(Floor.Second);
var Place;
(function (Place) {
    Place["Hyd"] = "Hyderabad";
    Place["Klky"] = "Kalwakurthy";
    Place["Del"] = "Delhi";
})(Place || (Place = {}));
console.log(Place.Del);
