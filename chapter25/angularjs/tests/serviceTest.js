describe("Service Tests", function(){
	var serv;
	beforeEach(angular.mock.module("exampleApp"));

	beforeEach(angular.mock.inject(function(counterService){
		serv = counterService;
	}));

	it("Increments the counter", function() {
		
			expect(serv.getCounter()).toEqual(0);
			serv.incrementCounter();
			expect(serv.getCounter()).toEqual(1);
		
	})
})