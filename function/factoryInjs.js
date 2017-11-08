
const dog = () => {
    const sound = 'woof';
    return {
        talk: () => console.log(sound),
      };
  };

const sniffles = dog();
sniffles.talk();

//$().click(sniffles.talk) it is work
