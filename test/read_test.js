const assert = require("assert");
const Tour = require("../src/tour");

describe ("Reading tours out of the db", () => {
	let hollywood, downtown, santaMonica, culverCity;

	beforeEach((done) => {
		downtown = new Tour({name: "Downtown LA"});
		culverCity = new Tour({name: "Culver City"});
		hollywood = new Tour({name: "Hollywood"});
		santaMonica = new Tour({name: "Santa Monica"});

		Promise.all([downtown.save(), culverCity.save(), hollywood.save(), santaMonica.save()])
			.then(() => done());
	});

	it("finds all tours with name of hollywood", (done) => {
		User.find({ name: "Hollywood"})
			.then((tours) => {
				console.log(tours);
				// necessary to .toString so it takes out id string from the ObjectId wrapper that Mongoose creates automatically
				//_id is actually an ObjectId and not just a raw string
				assert(tours[0]._id.toString() === hollywood._id.toString());
					// console.log(users._id.toString() + "users second string");
					console.log( "this is just the string" + hollywood._id.toString());

				done();
			});
	});

	it("find a tour with particular id", (done) => {
		Tour.findOne({ _id: hollywood._id})
			.then ((tour) => {
				assert (tour.tourName === "Hollywood");
				done();
			});

	it("can skip and limit the result set", (done) => {
		// slip Alex, limit two so no Zach
		Tour.find({})
			.sort({name: 1}) //name = key, 1= ascending, -1 = descendig
			.skip(1)
			.limit(2)
			.then((tours) => {
				assert(tours.length === 2);
				assert(tours[0] === "Culver City");
				assert(users[1] === "Hollywood");
				

				done();
			})
	});
	});
});