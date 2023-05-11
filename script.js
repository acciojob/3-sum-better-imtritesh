function threeSum(S, target) {
	let sum = 0;
	let n = S.length;
	let diff = Number.MAX_VALUE;
	let ans = sum - target;
	for(let i=0; i<n-2; i++){
		for(let j=i; j<i+2; j++){
			sum += S[j];
		}
		if(ans<diff){
			diff = ans;
		}
	}
	return diff;
}
