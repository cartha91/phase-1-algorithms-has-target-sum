// create function
  // function should accept two arguments
  // args = target integer and array of integers
  // return true if any pair of number inside given array add up to given target
  function hasTargetSum(array, target) {
    let arraySet = new Set();
    for (let num of array) {
        if (arraySet.has(target - num)) {
            return true;
        }
        arraySet.add(num);
    }
    return false;
}

/* 
  0(n)
*/

/* 
  check if any pair of numbers in given array add up to the sum of the target integer

  if a matching pair is found return true

  if a matching pair is not found return false 

*/

/*
  my function starts by itterating over an array and evaluating it to determine if the differnce between numbers is in the current set,
   if there is a match found it will return a value of true, if it does not find a match it will return a value of false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  /*
    describe('hasTargetSum', function() {
    it('should return true if any pair of numbers in the array adds up to the target', function() {
        let array = [1, 2, 3, 4, 5];
        let target = 9;
        expect(hasTargetSum(array, target)).to.be.true;
    });

    it('should return false if no pair of numbers in the array adds up to the target', function() {
        let array = [1, 2, 3, 4, 5];
        let target = 10;
        expect(hasTargetSum(array, target)).to.be.false;
    });
});
  */
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
