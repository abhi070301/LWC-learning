import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Audi", "maruti", "Verna", "Scarpio", "Bolero"];
    ceoList = [
                {
                    id: 1,
                    company: "Google",
                    name: "Sunder Pichai"
                },
                {
                    id: 2,
                    company: "Apple Inc.",
                    name: "Tim cook"
                },
                {
                    id: 3,
                    company: "Facebook",
                    name: "Mark Zuckerburg"
                }
    ];
}