import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import State from '@salesforce/schema/Asset.State';
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement){
    naviagteToAura(){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes:{
               componentName:"c__AuraNavigation"
            },
            state:{
                "c__id": "79e58y98jfd"
            }
        })
    }
}