import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRelatedRelation extends NavigationMixin(LightningElement){
    naviagteToRelatedList(){
        this[NavigationMixin.Navigate]({
            type: "standard__recordRelationshipPage",
            attributes:{
                recordId: '0015j00001A6rwXAAR',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            } 
        })
    }
}