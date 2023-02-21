class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No..");
    this.input3 = createInput("2nd Question Ans. Here");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.question2 = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    //this.message.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.question.hide();
    this.question2.hide();
    this.input3.hide();
    }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question2.html("Question:- Why can't you tell an egg a joke?");
    this.question2.position(150,250);
    this.input3.position(150,300);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter 'E', but only has one letter?")
    this.question.position(150,50);

    this.option1.html("1. Everyone");
    this.option2.html("2. Envelope");
    this.option3.html("3. Estimate");
    this.option4.html("4. Example");

    this.option1.position(150,90);
    this.option2.position(150,110);
    this.option3.position(150,130);
    this.option4.position(150,150);

    this.input1.position(150, 230);
    this.input2.position(350,230);
    this.button.position(290, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
       this.message.html("Thank You, Your Answer Has Been Submitted. Q.1 Ans:2 - Q.2 Ans:It'll crack up!");
       this.message.position(15,150);
      this.hide();
    })

  }
}