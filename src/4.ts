class Key {
    constructor(private signature: number = Math.random()) {}

    getSignature() {
        return this.signature;
    }
}


class Person {
        constructor(private key: Key) {}

    getKey() {
        return this.key;
    }
}

abstract class House {    
    constructor(protected door: boolean = false, protected key: Key, protected tenants: Person[] = []) {}

    abstract openDoor(key: Key): void;

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.getKey()} inside the house.`);
        } 
        console.log('The door is closed. You cannot enter.');
        }
    }


class MyHouse extends House {
    constructor(key: Key) {
        super(false, key)
    }

    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open.');
        } else {
            console.log('Invalid key. The door remains closed.');
        }
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
