const ucfirst = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

/**
 * TS Class mess about
 */
class Greeter {
	greeting: string;
	constructor(greeting?: string) {
		this.greeting = ucfirst(greeting ?? "Hello");
	}
	get salutation() {
		return this.greeting;
	}
	set salutation(val) {
		this.greeting = ucfirst(val);
	}
	greet() {
		return `${this.greeting}, World!`;
	}
	severance() {
		this.salutation = "Goodbye";
		return this.greet();
	}
}

const cs101 = new Greeter();
console.log(cs101.greet());
console.log(cs101.severance());

const rude = new Greeter("piss Off");
console.log(rude.greet());
rude.salutation = "howdy";
console.log(rude.greet());
console.log(rude.severance());
