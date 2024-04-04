import { LightningElement, api } from 'lwc';

export default class P2cAlertChild extends LightningElement {
    @api message
    @api cardTitle
    @api isAvailble
    @api number
}