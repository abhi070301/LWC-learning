import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToNavItemPage extends NavigationMixin(LightningElement)  {
    naviagteToTab(){
        this[NavigationMixin.Navigate]({
            type: "standard__navItemPage",
            attributes:{
                apiName: 'Quiz_App'
            } 
        })
    }
}