import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Notification extends LightningElement {
    toastHandler(){
        this.showToast("Success!!", "{0} Account Created... {1}", "Success", )
    }
    toastHandlerTwo(){
        this.showToast("Error!!", "Account Creation Failed..", "Error");
    }
    toastHandlerThree(){
        this.showToast("Info!!", "Sprint 24 released..", "Info");
    }
    toastHandlerFour(){
        this.showToast("Warning!!", "Password should be 15 character Warning..", "Warning");
    }

    showToast(title, message, variant){
        const event  = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',
                {
                    url: 'https://www.salesforce.com',
                    label : 'Cleck Here'
                }
            ],
            mode : 'sticky'
        })
        this.dispatchEvent(event)
    }
}
