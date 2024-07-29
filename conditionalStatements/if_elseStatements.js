let priceOfChocolate = 1.99;
let hasAmountInCash = 0.99;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if(canBuyChocolate){
    console.log('Enjoy your purchase');
}else{
    console.log('Card denied');
}