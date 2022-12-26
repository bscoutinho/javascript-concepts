// Call, Apply and Bind - Prototype methods, Referencing this in a explicit context

// Example 1

const book = {
    title: 'Action Devs',
    author: 'Bruno Coutinho',
  };
  
function summary() {
    console.log(`${this.title} was written by ${this.author}.`);
}

summary(); //output: "undefined was written by undefined"

summary.call(book); //output: "Action Devs was written by Bruno Coutinho"
summary.apply(book); //output: "Action Devs was written by Bruno Coutinho"

// Example 2 - Call - each value passed as additional argument

function longerSummary(genre, year) {
    console.log(
        `${this.title} was written by ${this.author}. It's a ${genre} history written in the year ${year}.`
    );
}

longerSummary.call(book, 'technology', 2020);

// Example 3 - Apply - additional values passed as an Array

longerSummary.apply(book, ['technology', 2020]);

// Example 4 - Bind -

const bookWithSummary = summary.bind(book);
bookWithSummary();

