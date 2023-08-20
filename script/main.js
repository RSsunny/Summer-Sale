
function cardPrice(targate){
    const productPrice=parseFloat(targate.childNodes[3].childNodes[5].innerText.split(' ')[0]).toFixed(2)
    const cartName=targate.childNodes[3].childNodes[3].innerText
    const cartList=targate.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1]
    const count=cartList.childElementCount
    const p=document.createElement('p')
    p.innerHTML=`${count+1}. ${cartName}
    `
    cartList.appendChild(p)
    const totalFild=document.getElementById('totalFild').innerText
    const allTotal=parseFloat(totalFild)+parseFloat(productPrice)
    document.getElementById("totalFild").innerText = allTotal.toFixed(2);   
}
document.getElementById('coupon-fild').addEventListener('keyup', function(even){
    const coupon=even.target.value;
    const applyBtn=document.getElementById('coupone-btn')
    if(coupon!=='SELL200'){
      applyBtn.removeAttribute('disabled')  
    }
    else{
        applyBtn.setAttribute('disabled',true)
    }
})
function clickApplyBtn(){
    const totalPriceFild=document.getElementById('totalFild')
    const totalPrice=totalPriceFild.innerText
    const discount=totalPrice*0.2
    const setDiscount=document.getElementById('discount')
    setDiscount.innerText=discount.toFixed(2)
    const total=totalPrice-discount
    const totalAmountFild=document.getElementById('last-total')
    totalAmountFild.innerText=total
}