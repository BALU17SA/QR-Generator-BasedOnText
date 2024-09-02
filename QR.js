let container = document.querySelector('.container');
let text = document.querySelector("#text");
let btn = document.querySelector('#generate')
let qrimg = document.querySelector('#qr-img');



btn.onclick = function(){

    let input = text.value.trim();

    if(input != ""){
        btn.innerText = 'Generating QR Code....';
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        qrimg.onload = function(){
            container.classList.add("active")
            btn.innerText = 'Generate QR Code';
        }
    }else {
        container.classList.remove("active");
        qrimg.src = "";
        alert('Input is empty'); 
    }
     
}