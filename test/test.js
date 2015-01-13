var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(1, [1,2,3].indexOf(2));
    })
  })
})
describe('Object', function(){
	describe('#hasOwnProperty', function(){
		it('should return false if a property is not present', function(){
			assert.equal(false, {name: 'dude', id: 1}.hasOwnProperty('bob'));
			assert.equal(true, {name:'dude', id:1}.hasOwnProperty('name'));
		})
	})
})