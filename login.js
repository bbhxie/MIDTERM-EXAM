function func(){

    var email = document.getElementById("emailAddress").value;
    var password = document.getElementById("userPassword").value; 

    if (email == 'ailynindaya38@gmail.com' && password == '123456789'){
        window.location.assign('landing.html')
        alert("yiee log in na siya")
    }else if (email == 'aindaya@forbescollege.org' && password == 'aeqdwseqda'){
        window.location.assign('products.html')
        alert("yiee log in na siya")
    }else{
        alert("ulit ulittt")
    }
 }       
