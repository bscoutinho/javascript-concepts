// Closure - Behaviour that a function remember the lexical (outer) scope

// example 1
const pizza = 'Pepperoni'

function getPizza() {
    const drink = "Coke"

    console.log({pizza})
    console.log({drink})
}

getPizza()


// example 2

const pizza = "Pepperoni"

function getDrink() {
  const drink = "Iced Tea"
}

function getPizza() {
  console.log({pizza})
  console.log({drink})
}

getPizza()
