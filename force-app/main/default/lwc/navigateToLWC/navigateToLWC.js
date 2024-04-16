import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLWC extends NavigationMixin(LightningElement) {

    naviagteToLwc(){
        var defination = {
            componentDef:'c:navigateLWCTarget',
            attributes:{
                recordId: '674b4b849378'
            }
        }

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                url: 'one/one.app#' + btoa(JSON.stringify(defination))
            } 
        })
    }
}