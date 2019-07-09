const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(3,4);
subNumbersResult = app.subNumbers(25,14);


describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            //assert.equal(app(), 'hello');
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string',function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });
        it('addNumbers should return type number',function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });        
    });
    describe('subNumbers()', function(){
        it('subNumber should be less 10', function(){
            assert.isAtLeast(subNumbersResult, 10);
        });
        it('subNumbers should return type number',function(){
            //let result = app.addNumbers(5,5);
            assert.typeOf(subNumbersResult, 'number');
        });
    })
});