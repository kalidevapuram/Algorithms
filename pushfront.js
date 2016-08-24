function pushfront(array, num)
{
	array[array.length] = num;
	
	for(var i=array.length -1 ; i >= 0; i--)
	{
		var temp = array[i-1];
		array[i-1] = array[i];
		array[i] = temp;
	}
	return array;
}

console.log(pushfront([2,3,4,5,7,9], 10));




function popfront(array)
{
	var num = array[0];
	for (var i = 0; i < array.length ; i++) 
	{
		array[i] = array[i+1];
	}
	return num;
}


console.log(popfront([2,3,4,5,7,9]));


function insertat(array, index, num)
{
	array[array.length] = num;
	for (var i = array.length-1; i > index ; i--) 
	{
		swap(array[i], array[i-1]);
	}
	return array;
}


console.log(insertat([2,3,4,5,7,9],3,10));


function removeat(array, index)
{
	if (array.length > index) 
	{
		for (var i = index; i <array.length ; i++) 
		{
			swap(array[i], array[i+1]);
		}

		return array.pop();
	}
	else
	{
		console.log("index is morethan array length");
	}
}


console.log(insertat([2,3,4,5,7,9],3));



