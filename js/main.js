function inversion() {
    

    const cNombres  = document.getElementById("nombres").value;
    const cEmail    = document.getElementById("email").value;
    const cMonto    = document.getElementById("monto").value;
    const cTiempo   = document.getElementById("tiempo").value;

    
    const preSimulacion   = document.querySelector(".pre-simulation");
    const postSimulacion   = document.querySelector(".post-simulation");

    const showNombre =document.getElementById("datosN");
    const showEmail =document.getElementById("datosE");

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");


    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;


    const valor1 = 12;
    const valor2 = 24;
    const valor3 = 36;

    const porcetaje1 = 0.008;
    const porcetaje2 = 0.013;
    const porcetaje3 = 0.017;

    
    const meses = document.getElementById("meses");
    const porcentaje = document.getElementById("porcentaje");
    const ganancias2 = document.getElementById("ganancias");
    const total2 = document.getElementById("total");




    switch (cTiempo) {
        case "1año":
            meses.innerText = valor1 + " meses";
            porcentaje.innerText = "0.8%";


            var ganancias = (cMonto * porcetaje1) * valor1;

            var total = parseInt(cMonto) + parseInt(ganancias);

            ganancias2.innerText = ganancias.toFixed(0);
            
            total2.innerText = total.toFixed(2);
            break;

        case "2años":
            meses.innerText = valor2;
            porcentaje.innerText = "1.3%";

            ganancias = (cMonto * porcetaje2) * valor2;

            total = parseInt(cMonto) + parseInt(ganancias);

            ganancias2.innerText = ganancias.toFixed(0);
            
            total2.innerText = total.toFixed(2);
            break;

        case "3años":
            meses.innerText = valor3;
            porcentaje.innerText = "1.7%";

            ganancias = (cMonto * porcetaje3) * valor3;

            total = parseInt(cMonto) + parseInt(ganancias);

            ganancias2.innerText = ganancias.toFixed(0);
            
            total2.innerText = total.toFixed(2);
            break;
    }
}