// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency<=0){
        return {};
    }
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let money={};
    let ost=[currency];
    if(ost[0]>=50){
        money.H=Math.floor(currency/50);
        ost[0]=currency%50;
    }
    if(ost[0]>=25){
    money.Q=Math.floor(ost[0]/25);
    ost[0]=ost[0]%25;
    }
    if(ost[0]>=10){
    money.D=Math.floor(ost[0]/10);
    ost[0]=ost[0]%10;
    }
    if(ost[0]>=5){
    money.N=Math.floor(ost[0]/5);
    ost[0]=ost[0]%5;
    }
    if(ost[0]>=1){
    money.P=Math.floor(ost/1);
    ost[0]=ost[0]%1;
    }
    if(ost[0]<=0){
        return money;
    }
}
