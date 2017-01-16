let chai = require("chai"),
    chaiHttp = require("chai-http"),
    chaiAsPromised = require("chai-as-promised"),
    path = require("path"),
    should = chai.should(),
    app = require(path.resolve("src/app"));

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe("api", () => {
    // This test is just an example.
    // Please delete it and write your own ones!
    // (use sinon for mocking if you need it)
    describe("/", () => {
        it("should return 404 on no registered routes", () => {
            chai.request(app).get("/").should.be.rejected;
        });
    });
});