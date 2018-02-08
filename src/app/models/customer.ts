export interface Customer{
    id:string;
    firstName:string;
    lastName:string;
activity:boolean;
balance:number;
email:string;
dateCreated:Date;
DOB:Date;
address:{
    street1:string,
    street2:string,
    city:string;
    state:string;
    zipCode:string;
    country:string;
}
}