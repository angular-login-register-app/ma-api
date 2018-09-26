/**
 *--------------------------------------------------------------------------
 * Integration
 *--------------------------------------------------------------------------
 * @description :: API Clients routes tests
 */

const should = require('should'),
    request = require('supertest'),
    app = require('../src/app'),
    agent = request.agent(app)

describe('Clients test', function () {

    let id
    describe('List clients', function () {
        it('Should get status equal success', function (done) {
            agent
                .get('/client')
                .expect(200)
                .end(function(err, res){
                    should(res.body.status).equal(true)
                    done()
                })
        })
    })

})

