export interface Provider{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    balance:number
    DOB:Date;
    dateCreated:Date;
    activity:boolean;
    address:{
        street1:string;
        street2:string;
        city:string;
        state:string;
        zipCode:string;
        country:string;
    }

}