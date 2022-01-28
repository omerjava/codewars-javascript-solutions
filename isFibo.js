function isFibo(a,b,f) {
    // check if f is in the fibonacci sequence which has a & b as the first two terms....
    const arrFibonacci=[a,b];
    let x=a;
    let y=b;
    let sum=0;
    for(let i=0;i<f;i++){
        sum=x+y;
        arrFibonacci.push(sum);
        x=y;
        y=sum;

    }
    if(arrFibonacci.includes(f)===true){
        return true;
    }
    else{
        return false;
    }
  }

  console.log(isFibo(3,5,2));