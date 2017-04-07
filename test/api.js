let chai = require('chai')
let dirtyChai = require('dirty-chai')
let chaiHttp = require('chai-http')
let chaiAsPromised = require('chai-as-promised')
let path = require('path')
let expect = chai.expect
let app = require(path.resolve('src/app'))

chai.use(chaiAsPromised)
chai.use(dirtyChai)
chai.use(chaiHttp)

describe('api', () => {
  // This test is just an example.
  // Please delete it and write your own ones!
  // (use sinon for mocking if you need it)
  describe('/', () => {
    it('should return 404 on no registered routes', () => {
      expect(chai.request(app).get('/')).to.be.rejected()
    })
  })
})
