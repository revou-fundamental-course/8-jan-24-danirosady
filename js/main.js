function reset(){

    luas.innerHTML=": m2";
    keliling.innerHTML=": m";
    document.getElementById("perimeter").innerHTML="";
    document.getElementById("sisi").innerHTML="Mohon inputkan nilai sisi";
    document.getElementById("nilai").value="";
}

function square(){

        //cek regular expression
    const number = /^[0-9]+$/;
    const input = document.getElementById("nilai").value;
    const luas = document.getElementById("luas");
    const keliling = document.getElementById("keliling");
    const luas2 = document.getElementById("perimeter");
    const sisi = document.getElementById("sisi");

    if (number.test(input)) {
    } else {
      document.getElementById("nilai").value=input.replace(/\D/g, "");
    }
    setTimeout(function() {
        if (document.getElementById("nilai").value!=""){
    var a,area,perimeter;
    a = parseInt(input);
    area = a*a; //luas persegi
    perimeter = 4*a; //keliling persegi
        luas.innerHTML=" : "+area+" m2";
        keliling.innerHTML=" : "+perimeter+" m";
        luas2.innerHTML=area+"m2";
        sisi.innerHTML="<----- "+a+"m ----->";
    } else {
        luas.innerHTML=" : 0m2";
        keliling.innerHTML=" : 0m";
        luas2.innerHTML="0m2";
        sisi.innerHTML="Mohon inputkan nilai sisi";
        }
        }, 1000);
    }




function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
 }
