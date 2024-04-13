var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})
function showToast(){
    toastList[0].show()
}
function savedetails(){
    toastList[0].show()
}
function logout(){
    window.location.href="Home.html";
}

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function goToProductDetails(){
    window.location.href = "Products.html";
}
function goToHome(){
    window.location.href = "Home.html";
}
function buynow(){
    window.location.href = "cart.html";
}
function payment(){
    window.location.href = "userprofile.html";
}
function submit(){
    toastList[0].show()
}
function history(){
    window.location.href = "orderhistory.html";
}