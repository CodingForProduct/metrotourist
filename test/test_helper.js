const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//before is done only once ex. make connection. before each  - performed 'each time/each test'
before((done) =>{

	//1st connect to mongoose wait for it to happen .once connected we will call our cb 'done ();' tell mocha we're ready to on to our next test
	mongoose.connect("mongodb://localhost/tour_test");
	mongoose.connection
		.once("open", () => {
			console.log ("Good to Go");
			done();
		}) 
		.on("error", (error) => {
			console.warn("Warning:", error);
		}); 

		beforeEach((done) => {
			const{ tours, tourDetails,} = mongoose.connection.collections;
			// when connect - mongoose normalizes name to total lowerCase tourDetails becomes tourdetails
			// mongoose.connection.collections.tours.drop(() => {
			//below mongo does not allow multiple collections to be dropped at the same time
			tours.drop(() => {
				tourdetails.drop(() => {
					done();
				});
			});
		});
});