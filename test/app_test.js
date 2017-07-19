const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe ('The express app', ()=> {
	it('handles a GET request to /api' , (done) => {
		request(app) // call in request passing app application (express)
			.get('/api') // type of http request
			.end((err, response) => {
				console.log(response);
			});
			// done();
	});

});