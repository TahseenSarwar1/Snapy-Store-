// let m = document.getElementById("minus");
// let p = document.getElementById("plus");
// let q = document.getElementById("qty");
// let t = document.getElementById("total")
// let qnt = 1;
// let price = 2000;

    
// p.addEventListener("click", function(){
//     qnt++
//     q.value = qnt;
//     t.textContent = ("₹"+price*qnt);
// })

// m.addEventListener("click", function(){
//     if(qnt>0){
//         qnt--
//         q.value = qnt;
//         t.textContent = ("₹"+price*qnt);
//     }
// })
// let m2 = document.getElementById("minus2");
// let p2 = document.getElementById("plus2");
// let q2 = document.getElementById("qty2");
// let t2 = document.getElementById("total2")
// let qnt2 = 1;
// let price2 = 2500;

    
// p2.addEventListener("click", function(){
//     qnt2++
//     q2.value = qnt2;
//     t2.textContent = ("₹"+price2*qnt2);
// })

// m2.addEventListener("click", function(){
//     if(qnt2>0){
//         qnt2--
//         q2.value = qnt2;
//         t2.textContent = ("₹"+price2*qnt2);
//     }
// })





// Item 1
let m = document.getElementById("minus");
let p = document.getElementById("plus");
let q = document.getElementById("qty");
let t = document.getElementById("total");

let qnt = 1;
let price = 2000;

// Item 2
let m2 = document.getElementById("minus2");
let p2 = document.getElementById("plus2");
let q2 = document.getElementById("qty2");
let t2 = document.getElementById("total2");

let qnt2 = 1;
let price2 = 2500;

// Sidebar totals
let subtotalBox = document.getElementById("subtotal");
let finalTotalBox = document.getElementById("finalTotal");

let shipping = 149;


// Function to update sidebar totals
function updateSummary() {
    let subtotal = (qnt * price) + (qnt2 * price2);
    subtotalBox.textContent = "₹" + subtotal;

    let finalTotal = subtotal + shipping;
    finalTotalBox.textContent = "₹" + finalTotal;
}


// ITEM 1 BUTTONS
p.addEventListener("click", function () {
    qnt++;
    q.value = qnt;
    t.textContent = "₹" + (price * qnt);
    updateSummary();
});

m.addEventListener("click", function () {
    if (qnt > 0) {
        qnt--;
        q.value = qnt;
        t.textContent = "₹" + (price * qnt);
        updateSummary();
    }
});


// ITEM 2 BUTTONS
p2.addEventListener("click", function () {
    qnt2++;
    q2.value = qnt2;
    t2.textContent = "₹" + (price2 * qnt2);
    updateSummary();
});

m2.addEventListener("click", function () {
    if (qnt2 > 0) {
        qnt2--;
        q2.value = qnt2;
        t2.textContent = "₹" + (price2 * qnt2);
        updateSummary();
    }
});
