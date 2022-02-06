var cat = {
    tiredness : 0,
    hunger : 0,
    lonliness : 0,
    happiness : 0,

    meow: () => {
        this.hunger += 10;
        this.lonliness += 10;
        this.tiredness += 10;
        console.log("Cat is Hungry now");
    },

    eat: () => {
        this.hunger -= 10;
        this.happiness += 10;
        console.log("Cat is now happy");
    },

    sleep: () => {
        this.tiredness -= 10;
        console.log("Cat is now sleeping");
    }
}

cat.meow();