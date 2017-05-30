function displaySumOfThousandNumbers(){

	var sum1 = 0;	//sum1 variable is used to store the sum of 1000 numbers calculated using for loop
	var i;

		for(i=0; i<=1000;i++){
			sum1 += i;
		}
	console.log("Sum of 1000 numbers using for loop : " + sum1);	


	//below code calculates the sum using while loop
	var j=0 , sum2=0;	// sum2 variable is used to store the sum of 1000 numbers calculated using while loop

		while(j<=1000){
			sum2 += j;
			j++;
		}
	console.log("Sum of 1000 numbers using while loop : " + sum2);

}

displaySumOfThousandNumbers();