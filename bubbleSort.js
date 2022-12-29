const numbers = [99,44,6,2,0,-30,1,5,284,230,283,63,87,283,4,0];

const bubbleSort = (numbs) => {
    let len = numbs.length -1;
    while(len > 0){
    for(let i = 0; i <= len ; i++){
        if(numbs[i] > numbs[i+1]){
            let temp = numbs[i];
            numbs[i] = numbs[i+1];
            numbs[i+1] = temp;
        }
    }
    len--;
}
return numbs;
}

console.log(bubbleSort(numbers))