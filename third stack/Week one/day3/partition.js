function generator(arr){
	var ran_array = [];
	while(ran_array.length < 3){
		var r = Math.floor(Math.random()*arr.length);
		if (ran_array[0] == r || ran_array[1] ==r) {

		}else{
			ran_array.push(r)
		}
	}
	var a = ran_array[0];
	var b = ran_array[1];
	var c = ran_array[2];
	if (a<b<c) {
		return ran_array[1];
	}else if(b<a<c){
		return ran_array[0];
	}else{
		return ran_array[2];
	}
}

function partition(arr){
	var pivot = generator(arr);
	console.log(pivot);
	var i =-1;
	var j =0 ;
	while(j <arr.length){
		if (arr[j] >= arr[pivot]) {
			j++;
		}
		if (arr[j] < arr[pivot]) {
			i++;
			if (j ==pivot) {
				pivot =i;
			}
			else if(i == pivot){
				pivot = j;
			}
			var temp  =arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			j++;
		}
	}
	i++;
	var temp = arr[i];
	arr[i] = arr[pivot];
	arr[pivot] = temp;
	return arr;

}



console.log(partition([9,2,4,7,3,1,5]));