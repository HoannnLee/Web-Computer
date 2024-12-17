// hiện khung sản phẩm 
// cái khung hiển thị số lượng sản phẩm
var frameShopping = document.querySelector('.cart-shopping');
// cái nút mua hàng
var btnShopping = document.querySelector('.shopping');

function showProduct(){
    frameShopping.classList.add('open');
}

function hideProduct(){
    frameShopping.classList.remove('open');
}

// thêm sự kiện vào nút giỏ hàng , hiển thị số lượng sản phẩm mua
btnShopping.addEventListener('click', showProduct)

// // thêm sự kiện vào nút giỏ hàng , đóng lại  số lượng sản phẩm mua
btnShopping.addEventListener('blur', hideProduct)

// hiển thị khung đăng nhập 

var modal = document.querySelector('.modal-dangnhap');
var modalContainer = document.querySelector('.modal-dangnhap-container');
var dangnhapUser = document.querySelector('.user-dangnhap');

function showLogin(){
    modal.classList.add('open-modal');
}

function hideLogin(){
    modal.classList.remove('open-modal');
}

dangnhapUser.addEventListener('click',showLogin);

// ngăn hành vi mặc định của thẻ a
dangnhapUser.addEventListener('click',function(event){
    event.preventDefault();
});

// ấn ra ngoài ẩn khung đăng nhập
modal.addEventListener('click',hideLogin);

// ngăn sự kiện nổi bọt tắt khung đăng nhập khi đang đăng nhập
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})




