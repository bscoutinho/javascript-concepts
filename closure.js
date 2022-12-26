// Closure - Behaviour that a function remember the lexical scope

// example 1
const pizza = 'Pepperoni'

function getPizza() {
    const pizza = "Margherita"

    console.log({pizza})
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
