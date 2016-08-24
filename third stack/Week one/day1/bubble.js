function bubble(arr){
	var count =0;
	for( var i=0; i <arr.length-1; i++){
		if (arr[i] > arr[i+1]) {
			var temp =arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			count++;
		}
	}
	while(count!=0){
		return arr;
	}
	
}
console.log(bubble([9,5,2,8,10,18]));

