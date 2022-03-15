function sum (sA:number , sB: number) {
    return sA + sB;
}
console.log(sum(5,6));
type Product = {
    id: number ,
    name: string,
    price: number
}
type Product2 = {
    id: number ,
    name: string,
    status : boolean,
}
type MergeType =  Product | Product2

const a:number = 20;
const Name: string = "Dyy";
const myObj : { id: number, price: number} = {id :1 , price: 200}
const myArr : string[] = ["Dyy" , "P"]
const myArrNum : number[] = [1,2,3,4,5,6]
const myArrOb: MergeType[] = [
    {id: 1 , name: "Dyy" , price : 200},
    {id: 1 , name: "Dyy" , status: true}
]
if('status' in myArrOb == true){
    console.log("Yes");
    
}
type AppProps = {
    message : string
}
const ShowwMessage = (props: AppProps) => {

}