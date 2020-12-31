function num(numbers) {

  // numbers가 1 ~ 50이라고 가정

    let result = [];

   
    for(let i = 0; i<numbers.length; i++){
      if(numbers[i] % 2 === 0){
        result += numbers[i];
    }
}

       return result;

}