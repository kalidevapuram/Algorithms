function insertion(arr){
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i-1]) {
			var temp = arr[i];
			var k = i-1;
			while(arr[k] > temp && k>=0){
				arr[k+1] = arr[k];
				k--;
			}
			arr[k+1] = temp;
		}
	}
	return arr;
}
console.log(insertion([8,2,1,-8,67,12,1]));