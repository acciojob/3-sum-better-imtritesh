function threeSum(S, target) {
  S.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = S[0] + S[1] + S[2]; // Initialize closest sum with the sum of first three elements
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;
    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum; // Update closest sum
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}
