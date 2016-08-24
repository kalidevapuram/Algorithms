function reversearr(array)
{
	for(var i=0 ; i < (array.length/2); i++)
	{
		var temp = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = temp;
	}
	return array;
}

console.log(reversearr([2,3,4,5,7,9]));


function binarysearchtree(array, num)
{
	var x = math.floor((array.length)/2);
	var a =0;
	var z = (array.length)-1;
	while(a < z)
	{
		if (array[x] == num) 
		{
			return true;
		}
		else if(array[x] > num)
		{
			z = x-1;
			x = x-(math.floor(x/2))-1;
		}
		else if(array[x] < num)
		{
			a = x+1;
			x = math.floor((z-a)/2);
		}
		
	}
	return false;
}


console.log(binarysearchtree([2,3,4,5,7,9,13,17,19,22], 17));