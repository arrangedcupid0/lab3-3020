function addPiece(arr, lo, hi) {
var sum = 0;
	if(lo == hi)
	{
		sum += arr[lo];
		return sum;
	}

	if(lo + 2 >= hi)
	{
		for(var int = lo; int < hi; int++)
		{
			sum += arr[int];
		}
		return sum;
	}

	var lower = Math.floor(((hi-lo)/3)+lo);
	var higher = Math.floor(((2*(hi-lo))/3)+lo);

	var first = addPiece(arr, lo, lower);
	var middle = addPiece(arr, lower, higher);
	var last = addPiece(arr, higher, hi);
	return first + middle + last;
}

function divideAndConquerSum(arr) {
	var sum = addPiece(arr, 0, arr.length);
	console.log("sum is " + sum);
}

function testTime()
{
	var test1 = [1,2,3,4,5,6];
	var test2 = [5,4,3,2,1];
	var test3 = [42];
	var test4 = [21,23];
	var test5 = [5,23,1];
	var test6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var test7 = [29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
	divideAndConquerSum(test1);
	divideAndConquerSum(test2);
	divideAndConquerSum(test3);
	divideAndConquerSum(test4);
	divideAndConquerSum(test5);
	divideAndConquerSum(test6);
	divideAndConquerSum(test7);
}

testTime();
