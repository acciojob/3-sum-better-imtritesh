function threeSum(S, target) {
  nums.sort((a, b) => a - b); 

  let closestSum = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closestSum;
}
