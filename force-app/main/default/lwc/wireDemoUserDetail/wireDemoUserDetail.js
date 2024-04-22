import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

const fields = [NAME_FIELD,EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    userDetail
    @wire(getRecord, {recordId: '0055j00000A8dhsAAB', fields})
    userDetailHandler({data, error}){
        //console.log(response)
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getRecord, {recordId: '0055j00000A8dhsAAB', fields})
    userDetailProperty

}