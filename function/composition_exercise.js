
const coffee = (state) => ({
    coffeetype: () => console.log(`please give me a cup of  ${state.name} coffee`),
  });

const sugar = (state) => ({
    addsugar: () => console.log(`please add ${state.spoon} sugar`),
  });

const milk = (state) =>({
    addmilk: ()=> console.log(`please add ${state.milks} milk`),
  });

const blackCoffee = (name) => {
    const state = {
        name,
      };
    return Object.assign({}, coffee(state));
  };

blackCoffee('black').coffeetype();

const mocha = (name) => {
    const state = {
        name,
        spoon: 2,
        milks: 1,
      };
    return Object.assign({}, coffee(state), sugar(state), milk(state));
  };

mocha('mocha').coffeetype();
mocha('mocha').addsugar();
mocha('mocha').addmilk();
