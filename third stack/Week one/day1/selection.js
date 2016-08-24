function selection(arr){
	for (var i = 0; i < arr.length-1; i++) {
		var min = arr[i];
		index =i;
		for(var j=i+1; j<arr.length; j++){
			if (min > arr[j]) {
				min = arr[j];
				index =j;
			}
		}
		var temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	return arr;
}

console.log(selection([9,32,10,6,-1,0,4,5]));