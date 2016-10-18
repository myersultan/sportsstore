describe("Filter Tests", function() {
	var filterInstance;

	beforeEach(angular.mock.module("exampleApp"));
	beforeEach(angular.mock.inject(function ($filter) {
		filterInstance = $filter("lableCase");
	}));

	it("Changes case", function() {
		var result = filterInstance("test phrase");
		expect(result).toEqual("Test phrase");
	});

	it("Reverse case", function() {
		var result = filterInstance("test phrase", true);
		expect(result).toEqual("tEST PHRASE");
	});
});