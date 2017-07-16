const assert = require("assert");
const Tour = require("../src/tour");

describe ("Creating records", () => {
	it("saves a tour", (done) => {
		const hollywood = new Tour ({name: "Hollywood"});

		hollywood.save ()
			.then(() => {
				//has hollywood been saved successfully?
				//.isNew = flag on the instance if instance NOT saved result:=true
				// we are saying if hollywood is NOT! not saved we will get true which means it's been saved to the db
			assert (!hollywood.isNew);
			done();
			});
	});
});