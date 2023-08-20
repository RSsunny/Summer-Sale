
function cardPrice(targate){
    const productPrice=parseFloat(targate.childNodes[3].childNodes[5].innerText.split(' ')[0]).toFixed(2)
    const cartName=targate.childNodes[3].childNodes[3].innerText
    const cartList=document.getElementById('list-card')
    const count=cartList.childElementCount
    const p=document.createElement('p')
    p.innerHTML=`${count+1}.  ${cartName}
    `
    cartList.appendChild(p)
    const totalFild=document.getElementById('totalFild').innerText
    const allTotal=parseFloat(totalFild)+parseFloat(productPrice)
    document.getElementById("totalFild").innerText = allTotal.toFixed(2);
    document.getElementById("last-total").innerText = allTotal.toFixed(2);
    const applyButton=document.getElementById('coupone-btn')
    if(allTotal>=200){
        applyButton.removeAttribute('disabled')   
        applyButton.classList.remove('opacity-80')
    }else{
        applyButton.setAttribute('disabled',true)
        applyButton.classList.add('opacity-80')
    }  
    if(allTotal>0){
        const makeBtn=document.getElementById('make-btn')
        makeBtn.removeAttribute('disabled')
        makeBtn.classList.remove('opacity-80')
    }else{
        makeBtn.setAttribute('disabled',true)
    }
}
function clickApplyBtn(){
    const couponeFild=document.getElementById('coupon-fild')
    const couponeValue=couponeFild.value  
    if(couponeValue==='SELL200'){
    const totalPriceFild=document.getElementById('totalFild')
    const totalPrice=parseFloat(totalPriceFild.innerText)
    const discount=totalPrice*0.2
    const setDiscount=document.getElementById('discount')
    setDiscount.innerText=discount.toFixed(2)
    const total=totalPrice-discount
    const totalAmountFild=document.getElementById('last-total')
    totalAmountFild.innerText=total
    }
    couponeFild.value=' '
}
function clearCart(){
    const listCart=document.getElementById('list-card')
    listCart.innerText=' '
    const totalPriceRemove=document.getElementById('totalFild')
    totalPriceRemove.innerText=0
     const discountRemove=document.getElementById('discount')
     discountRemove.innerText=' '
     const lastTotalRemove=document.getElementById('last-total')
     lastTotalRemove.innerText=' '
}