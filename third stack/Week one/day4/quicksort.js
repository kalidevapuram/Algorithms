// function generator(arr){
// 	var ran_array = [];
// 	while(ran_array.length < 3){
// 		var r = Math.floor(Math.random()*arr.length);
// 		if (ran_array[0] == r || ran_array[1] ==r) {

// 		}else{
// 			ran_array.push(r)
// 		}
// 	}
// 	var a = ran_array[0];
// 	var b = ran_array[1];
// 	var c = ran_array[2];
// 	if (a<b<c) {
// 		return ran_array[1];
// 	}else if(b<a<c){
// 		return ran_array[0];
// 	}else{
// 		return ran_array[2];
// 	}
// }
function quick(arr,start,end){
	if(start == undefined){
		start =0;
		end = arr.length-1;
	}
	var i = start-1;
	var j = start;
	var pivot = Math.floor((Math.random()*(end-start))+start);
	if(start >= end){
		return ; // break case
	}
	while(j<=end){
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
		else{
			j++;
		}

	}
	i++;
	var temp2 = arr[i];
	arr[i] = arr[pivot];
	arr[pivot] = temp2;
	pivot  =i;
	quick(arr,start,pivot-1);
	quick(arr,pivot+1,end);
	return arr;
}

console.log(quick([9,1,2,19,2,4,5,-3,0]));