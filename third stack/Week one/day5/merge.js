function merge(left,right){
	var sorted = [];
	var l =0;
	var r =0;
	// console.log(right);
	while((l < left.length) && (r < right.length)){
		if (left[l] < right[r]) {
			sorted.push(left[l]);
			l++;
		}else{
			sorted.push(right[r]);
			r++;
		}
	}
	return sorted.concat(left.slice(l)).concat(right.slice(r));

}

function split(arr){
	if(arr.length == 1){
		// console.log("inside if");
		return arr;
	} // break case
	var midpoint = Math.floor((arr.length)/2);
		// console.log("midpoint");

	// console.log(midpoint);
	var left = arr.slice(0,midpoint);
	// console.log("left");
	// console.log(left);
	var right = arr.slice(midpoint);
	// console.log("right");
	// console.log(right);
	// arr = merge(split(left), split(right));
	arr = merge(split(left),split(right));
	return arr;
}
console.log(split([6,5,1,3,4,2]));

