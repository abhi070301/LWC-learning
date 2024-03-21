import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} // for storing answers
    correctAnswers = 0 // to show the number of correct answers
    isSubmitted = false //use to show the result
    myQuestions=[
    {
        id: "Question1",
        question: "Which one of the following is not a template loop?",
        answers:{
            a: "for:each",
            b: "iterator",
            c: "map loop"
        },
        correctAnswer: "c"
    },
    {
        id: "Question2",
        question: "Which one of the file is invalid in LWC Component folder?",
        answers:{
            a: ".svg",
            b: ".apex",
            c: ".js"
        },
        correctAnswer: "b"
    },
    {
        id: "Question3",
        question: "Which one of the following is not a directive?",
        answers:{
            a: "for:each",
            b: "LWC:if",
            c: "@track"
        },
        correctAnswer: "c"
    }
  ]
  //used disable the submit button
  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
  }
  // for applying dynamic styling tp our result
  get isScoreFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? 
        'slds-text-color_success' : 'slds-text-color_error'}`
  }
  // Change Handler get's called when user clicks on the radio button
  // and it stores the selected value in the selected object
  changeHandler(event){
    const {name, value} = event.target
    this.selected={...this.selected, [name]:value}
  }
// form submit handler
  submitHandler(event){
    event.preventDefault();
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
    this.correctAnswers = correct.length
    this.isSubmitted = true
}
// form reset Handler
  resetHandler(event){
    this.selected={}
    this.correctAnswers = 0
    this.isSubmitted = false
  }
}