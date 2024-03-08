// TOPICS:

// type annotation
//type inferance 
//function parameters and return type 
//callback fn parameters
//object types 
//optional properties 
//interface 
//union types 
//enums 

//type for primitives 
//types vs interfaces 
// array of objects 
// more in union types(interfaces, discriminated unions)
// tuples
//type assertion



//union of interfaces
interface Student {
    fn :string;
    ln:string;
    age?:number
}

interface Employee{
    exp : string;
    jd : string;
    com:string
}

interface Candidate extends Student,Employee{
    manager:string
}

//tuples
let pair : [string,number] = ['3',5]
var [mystr,mynum] = pair  //destructuring

//type assertion 
// var ar:number[] = [1,2,3,4,5]
// var st:string[] = ['hi','hello','bye']
// var br:(string|number)[] = [1,22,3,'hii',8,'hello']

var ab:(string|number)[] = [1,'2',3,'4',5]
var num = ab.filter((a,b)=>{b%2===0}) as number[] //type assertion

var x = document.getElementById('d1') as HTMLSpanElement;
