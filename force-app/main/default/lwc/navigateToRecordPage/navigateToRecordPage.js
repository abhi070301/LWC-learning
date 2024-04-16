import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035j00001AwaENAAZ',
                objectApiName:'Contact',
                actionName:'view' // 'edit'  -- It is use for allow edit
            }
        })
    }
    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035j00001AwaENAAZ',
                objectApiName:'Contact',
                actionName:'edit' 
            }
        })
    }
}