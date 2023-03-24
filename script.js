function threeSum(arr, target) {
// write your code here
	var sum = 0;
	var minDiff = Number.MAX_VALUE;;
	for(var i=0; i<arr.length; i++){
		for(var j=i; j<=i+2; j++){
			sum = sum + arr[j];
		}
		if(sum<=minDiff){
			minDiff === sum;
		}
	}
	return minDiff;
  
}

module.exports = threeSum;
