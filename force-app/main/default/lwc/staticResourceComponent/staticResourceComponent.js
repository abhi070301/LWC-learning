import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/UserProfile'
import COW_SVG_IMAGE from '@salesforce/resourceUrl/cowSvgImage'
export default class StaticResourceComponent extends LightningElement {
    userImage = USER_IMAGE
    cowImage = COW_SVG_IMAGE
}