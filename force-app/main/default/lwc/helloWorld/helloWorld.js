import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Abhishek Bairwa";
    title = "Developer";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track address = {
        city : "Jaipur",
        postcode : 3008,
        country : 'India'
    }

    trackHandler(event){
        this.address.city = event.target.value;
      // this.address = {...this.address, "city": event.target.value}
    }
    // Getter Example
    users = ["Abhishk", "Neeraj", "Aakash"]
    num1 = 20
    num2 = 50
    get firstUser(){
        return this.users[0].toUpperCase();
    }
    get sumNums(){
        return this.num1 + this.num2;
    }
}