var TN = 10000000
if (TN >=0 && TN <= 5000000){
    console.log((TN / 100) * 5 + 'VND');
}
if (TN > 5000000 && TN <= 10000000){
    console.log((TN / 100) *10 + 'VND') ;
};
if (TN > 10000000 && TN <= 18000000){
    console.log((TN / 100) *15 + 'VND');
}
if (TN > 18000000 && TN <= 32000000){
    console.log((TN / 100) *20 + 'VND');
}
if (TN > 32000000 && TN <= 52000000){
    console.log((TN / 100) *25 + 'VND');
}
if (TN > 52000000 && TN <= 80000000){
    console.log((TN / 100) *30 + 'VND');
}
if (TN > 80000000){
    console.log((TN / 100) *35 + 'VND');
}
