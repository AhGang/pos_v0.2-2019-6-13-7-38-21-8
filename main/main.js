'use strict';

function getBill(ItemList,allItems){
  let receipt = '***<没钱赚商店>收据***\n';
  let total = 0;
  for(let key in ItemList){
    for(let i = 0;i < allItems.length;i++){
      if(key == allItems[i].barcode){
        receipt = receipt.concat('名称：' + allItems[i].name + '，数量：'+ ItemList[key] + allItems[i].unit + '，单价：' + allItems[i].price.toFixed(2) +'(元)，小计：' +(allItems[i].price * ItemList[key]).toFixed(2)+'(元)\n')
       total += allItems[i].price * ItemList[key];
      }
    }
}
  receipt = receipt.concat('----------------------\n' + '总计：'+ total.toFixed(2) +'(元)\n' + '**********************');
  return receipt
}
function getItemNumber(inputs){
    var list = {}; 
    for(var i= 0, l = inputs.length; i< l; i++){ 
        var item = inputs[i]; 
        list[item] = (list[item] +1 ) || 1; 
    } 
    return list; 
}
function printReceipt(inputs) {
  let allItems = loadAllItems()
  let ItemList = getItemNumber(inputs)
  let receipt = getBill(ItemList,allItems);
  console.log(receipt);
}