function cong(){
         let x = document.getElementById('input1').value
         let y = document.getElementById('input2').value
         x = parseInt(x);
         y = parseInt(y)
        document.getElementById('dapan').innerHTML =  x + y;
}
    function tru(){
        let x = document.getElementById('input1').value
        let y = document.getElementById('input2').value
        parseInt(x)
        parseInt(y)
        document.getElementById('dapan').innerHTML = x - y;
}
    function nhan(){
        let x = document.getElementById('input1').value
        let y = document.getElementById('input2').value
        parseInt(x)
        parseInt(y)
        document.getElementById('dapan').innerHTML = x * y;
}
    function chia(){
        let x = document.getElementById('input1').value
        let y = document.getElementById('input2').value
        parseInt(x)
        parseInt(y)
     document.getElementById('dapan').innerHTML = x / y;
}