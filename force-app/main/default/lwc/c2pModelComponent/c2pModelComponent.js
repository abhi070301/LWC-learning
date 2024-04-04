import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    OKHandler(){
        const myEvent = new CustomEvent('close', {
            detail:{
                message: "Model Closed Successfully!"
            }
        })
        this.dispatchEvent(myEvent);
    }
}