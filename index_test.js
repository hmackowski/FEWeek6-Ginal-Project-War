var expect = chai.expect;
describe('MyFunction', function() {
    describe('#addNum', function(){
        it('it should add 2 and 3 and return 5.', function(){
            var x = addNum(2,3);
            expect(x).to.equal(5);
        });

        it('should return an error if added numbers are not 5', function(){
            expect(function(){
                addNum(4,5);
            }).to.throw(Error);
        });
    });
});