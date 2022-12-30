let n4=Number
let clickboton=Number;
let cuotasporpagar=Number;
n4 = 0;
n55 = 0;
    let element = document.getElementById("b1");
    let button = document.querySelector(".b2");
    let button2 = document.querySelector(".b3");
    button.disabled = true;
    button2.disabled = true;
    element.addEventListener("click", buttonstate);

    class Usuario {
        constructor(nombreCliente, apellidoCliente, identificacion, numtelf, tipoprestamo, dinero, numcuotas) {
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.identificacion = identificacion;
        this.numtelf = numtelf;
        this.tipoprestamo = tipoprestamo;
        this.dinero = dinero;
        this.numcuotas = numcuotas;
        }
      }
      const usuarios = [];


    if (localStorage.getItem('usuarios')) {
        let usuario = JSON.parse(localStorage.getItem('usuarios'));
    for (let i = 0; i < usuario.length; i++) {
        usuarios.push(usuario[i]);
    }
    }

function buttonstate() {
    if(n4==0) {
        button.disabled = true;
        button2.disabled = true;
    } else {
        button.disabled = false;
        button2.disabled = false;
    }
}

formuser.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarUsuario();
  });

  function agregarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const identificacion = document.getElementById('identificacion').value;
    const numtelf = document.getElementById('numtelf').value;
    const tipoprestamo = document.getElementById('tipoprestamo').value;
    const dinero = document.getElementById('dinero').value;
    const numcuotas = document.getElementById('numcuotas').value;
    const nuevoUsuario = new Usuario(nombre, apellido, identificacion, numtelf, tipoprestamo, dinero, numcuotas);
    usuarios.push(nuevoUsuario);
    localStorage.setItem(identificacion, JSON.stringify(usuarios));
  }

  function mostrarUsuarios() {
    contenedorUsuarios.innerHTML = '';
    usuarios.forEach((usuario) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${usuario.nombreCliente}</p>
                            <p>Apellido del Cliente: ${usuario.apellidoCliente}</p>
                            <p>Número de identificacion: ${usuario.identificacion}</p>
                            <p>Número de telefono: ${usuario.numtelf}</p>
                            <p>Prestamo deseado: ${usuario.tipoprestamo}</p>
                            <p>Dinero que desea pedir prestado: ${usuario.dinero}</p>
                            <p>A cuantas cuotas desea el prestamo: ${usuario.numcuotas}</p>
                        </div>
                        `;
      contenedorUsuarios.appendChild(div);
    });
  }

function gen_table(){
    document.getElementById("tcuerpo").innerHTML="";
    let n=Number(document.getElementById("dinero").value);
    let n2=Number(document.getElementById("numcuotas").value);
    let n3=Number;
    let nameuser = (document.getElementById("nombre").value);
    let lnuser = (document.getElementById("apellido").value)
    n55++;
    if (n2>=12 && n2!=""){
    n3=20
    alert("Señor "+ nameuser +" "+ lnuser +" un gusto atenderle hoy");
    alert("Como estas pagando a un año, o más, tu interes es del 20% (si no te gusta, a otro lugar)");
                        }
    else if (n2==""){ 
        alert("ajá pelotudin, y si ponés el numero de cuotas?)");
                    }
    else{
        n3=12.5
    alert("Señor "+ nameuser +" "+lnuser+" un gusto atenderle hoy");
    alert("Ya que quieres pagar en menos de un año, tu interes es solo de 12.5% mensual :) Somos super buenos!");
        }

    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tcuerpo").innerHTML=document.getElementById("tcuerpo").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;   
        n4=n2;     
    }else{
        alert("Che, te faltá agregar un numerin!");
    }
}
cuotasporpagar=n4;
clickboton=0;

function pedir_prestamo(){
if (clickboton==0) {
    alert("querido Señor "+ nameuser + " "+ lnuser +" Acabas de venderle tu alma al diablo, o pagas o te la buscan a las 12PM del siguiente dia habil");
    clickboton++; 
} else {
    alert("Seguro quieres hacer un prestamo dos veces? solo tienes un alma, pensalo bien boludo!");
}
}
function pago_cuota(){


    if (n4 != 0) {
        n4 = (n4 - 1);
        for (let counter = 1; counter <= 2; counter++) {
            console.log(counter);
            alert(""+counter +"");
        }
        alert("Gracias por pagar una cuota! te quedan "+ n4 +" cuotas por pagar");
    } else {
        alert("Ya pagaste todo amiwis! eres libre de irte");
    }


}



function createarray1(){
let lista = prompt("Coloca los Objetos que comprarás, separados por comas").split(",")
alert("Lo que quieres comprar es: " + lista)
let olvidar = prompt("olvidaste colocar algo?")
si1 = "si";
si2 = "sí";
si3 = "yes";
si4 = "sip";
si5 = "sisas";
if ([olvidar].includes(si1,si2,si3,si4,si5)) {
    resultado = true;
} else {
    resultado = false;
}

if (resultado == false){

}
else{
let cosaqueolvido = prompt("que olvidaste? si es mas de una cosa, recuerda separar con comas!").split(",");
lista.push(cosaqueolvido);
alert("entonces lo que compraras es: " + lista)
}
}
