import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor(){
        super()
        console.log("Parent Constructor Called...")
    }
    connectedCallback(){
        console.log("Parent connectedCallback Called...")
    }
    renderedCallback(){
        console.log("Parent renderedCallback Called...")
    }
    handleClick(){
        this.isChildVisible = !this.isChildVisible
    }
    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack)
    }
}