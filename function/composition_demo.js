//Object.assign 定义一个new object ,然后把组合的方法给新
//的new object

const barker = (state) => ({
    bark: () => console.log('woof i am ' + state.name),
  });
const driver = (state) => ({
    drive: () => state.position = state.position + state.speed,
  });
const killer = (state) => ({
    killer: () => console.log('i am a killer'),
  });

const merderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0,
      };
    return Object.assign({}, barker(state), driver(state), killer(state));
  };

merderRobotDog('sniffies').bark();
barker({ name: 'karo' }).bark();
