// Open Closed Principle states that a class should be open for extension but closed for modification.
// In this example, we have a function that prints a quiz. The function takes an array of questions and prints them to the console.
// We have different types of questions: Boolean, MultipleChoice, Text, Range, and Date.

class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}


class MultipleChoiceQuestion {
    constructor (description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}


class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answer: ____________');
    }
}


class RangeQuestion {
    constructor(description, min, max){
        this.description = description;
        this.min = min;
        this.max = max;
       }

       printQuestionChoices() {
        console.log(`Min: ${this.min}`);
        console.log(`Max: ${this.max}`);
        console.log(`Answer: ____________`);
    }
}

class DateQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answer: mm/dd/yyyy');
    }
}


function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log('');
    })
}


const questions = [
        new BooleanQuestion('This video is useful.'),
        new MultipleChoiceQuestion('What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
        new TextQuestion('Describe your favorite JS feature.'),
        new RangeQuestion('What is the speed limit in your city?', 40, 60),
        new DateQuestion('When is your birthday?')
    ];


printQuiz(questions);