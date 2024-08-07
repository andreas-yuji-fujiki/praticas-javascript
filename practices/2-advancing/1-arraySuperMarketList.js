const cartList = ['Apple', 'Milk', 'Peaches', 'Coffee']


// add a item at the end of the array
cartList.push('Banana')
    // removes an item from the end
cartList.pop()

// add a item at the begin of the array
cartList.unshift('Orange Juice')
    // removes an item from the begin
cartList.shift()


for(i = 0; i < cartList.length; i++){
    console.log(`${i+1}: ${cartList[i]}`)
}