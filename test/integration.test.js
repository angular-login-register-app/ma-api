/**
 *--------------------------------------------------------------------------
 * Integration
 *--------------------------------------------------------------------------
 * @description :: API TODOS routes tests
 */

const should = require('should'),
    request = require('supertest'),
    app = require('../src/app'),
    agent = request.agent(app)

describe('Todo test', function () {

    let id
    describe('List todos', function () {
        it('Should get status equal success', function (done) {
            agent
                .get('/todo')
                .expect(200)
                .end(function(err, res){
                    should(res.body.status).equal(true)
                    done()
                })
        })
    })

    describe('Create todos', function () {
        it('Should allow to post a todo and return _id', function (done) {
            let params = { todo: "Todo task" }
            agent
                .post('/todo')
                .send(params)
                .expect(200)
                .end(function(err, res){
                    should(res.body.todo).have.property('_id')
                    id = res.body.todo._id
                    done()
                })
        })
    })

    describe('Update todos', function () {
        it('Should update the status and todo values by _id', function (done) {
            let params = { completed: true, todo: 'update' }
            agent
                .put(`/todo/${id}`)
                .send(params)
                .end(function(err, res){
                    should(res.body.status).equal(true)
                    should(res.body.todo.todo).equal('update')
                    done()
                })
        })
    })

    describe('Delete todos', function () {
        it('Should delete todo by _id', function (done) {
            agent
                .delete(`/todo/${id}`)
                .end(function(err, res){
                    should(res.body.status).equal(true)
                    done()
                })
        })
    })

})

