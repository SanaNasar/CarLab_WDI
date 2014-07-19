// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#max', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the maximum in an array', function(){
//       expect(Iterators.max(myArr)).to.equal(67);
//     })    
//     it('should return -Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.max(myArr)).to.equal(-Infinity);
//     })
//   })
// })

var myCar = require("../src/car.js"),
  expect = require("chai").expect;

//mocha is the framework.
// chai is the assertion library for mocha


describe("myCar", function() {

  describe("Is myCar functioning", function() {
    it("should exist", function() {
      expect(myCar).to.exist;
    });
  });

  describe("#sale", function() {
    it("should be sold", function() {
      expect(myCar.currentOwner).to.equal('Sana');

    });
  });

   describe("#paint", function() {
    it("is painted", function() {
      expect(myCar.color).to.equal(newColor);

    });
  });


   describe("#pickup", function() {
    it("should pick up", function() {
      expect(myCar.color).to.equal(newColor);

    });
  });



});