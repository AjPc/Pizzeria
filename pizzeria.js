let margarita = document.getElementById("margarita");
let prosciutto = document.getElementById("prosciutto");
let caprichosa = document.getElementById("caprichosa");
let barbacoa = document.getElementById("barbacoa");
let hawai = document.getElementById("hawai");
let precioPizza = document.getElementById("pizzaPrice");
let precioExtra = document.getElementById("extraPrice");
let precioTotal = document.getElementById("totalPrice");

let precio0 = 0;
let precio1 = 5;
let precio2 = 5.5;
let precio3 = 6;
let precio4 = 6.5;
let extra = 0.5;
let total = 0;

let jamon = document.getElementById("jamon");
let pinia = document.getElementById("pinia");
let champi = document.getElementById("champi");
let bbq = document.getElementById("bbq");
let bacon = document.getElementById("bacon");
let carne = document.getElementById("carne");

window.onload = margaSelected();

margarita.addEventListener("click", margaSelected);
prosciutto.addEventListener("click", prosciSelected);
caprichosa.addEventListener("click", capriSelected);
barbacoa.addEventListener("click", bbqSelected);
hawai.addEventListener("click", hawaiSelected);

/////////////////////////////////////PIZZAS/////////////////////////////////////

function margaSelected(){
    document.getElementById("tomate").checked = true;
    document.getElementById("queso").checked = true;
    document.getElementById("oregano").checked = true;
    jamon.checked = false;
    pinia.checked = false;
    champi.checked = false;
    bbq.checked = false;
    bacon.checked = false;
    carne.checked = false;
    document.getElementById("margarImg").style.display = "block";
    document.getElementById("proscImg").style.display = "none";
    document.getElementById("caprImg").style.display = "none";
    document.getElementById("pizzaBbqImg").style.display = "none";
    document.getElementById("hawaImg").style.display = "none";
    precioPizza.innerHTML = "Precio pizza: " + precio1 + " €";
    precioExtra.innerHTML = "Precio Extras: " + precio0 + " €";
    ocultarIngredientes();
    precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(precio1))} €`;
}

function prosciSelected(){
    document.getElementById("tomate").checked = true;
    document.getElementById("queso").checked = true;
    document.getElementById("oregano").checked = true;
    jamon.checked = true;
    pinia.checked = false;
    champi.checked = false;
    bbq.checked = false;
    bacon.checked = false;
    carne.checked = false;
    document.getElementById("margarImg").style.display = "none";
    document.getElementById("proscImg").style.display = "block";
    document.getElementById("caprImg").style.display = "none";
    document.getElementById("pizzaBbqImg").style.display = "none";
    document.getElementById("hawaImg").style.display = "none";
    precioPizza.innerHTML = "Precio pizza: " + precio2 + " €";
    precioExtra.innerHTML = "Precio Extras: " + precio0 + " €";
    ocultarIngredientes();
    precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(precio2))} €`;
}
function capriSelected(){
    document.getElementById("tomate").checked = true;
    document.getElementById("queso").checked = true;
    document.getElementById("oregano").checked = true;
    jamon.checked = true;
    pinia.checked = false;
    champi.checked = true;
    bbq.checked = false;
    bacon.checked = false;
    carne.checked = false;
    document.getElementById("margarImg").style.display = "none";
    document.getElementById("proscImg").style.display = "none";
    document.getElementById("caprImg").style.display = "block";
    document.getElementById("pizzaBbqImg").style.display = "none";
    document.getElementById("hawaImg").style.display = "none";
    precioPizza.innerHTML = "Precio pizza: " + precio3 + " €";
    precioExtra.innerHTML = "Precio Extras: " + precio0 + " €";
    ocultarIngredientes();
    precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(precio3))} €`;
}

function bbqSelected(){
    document.getElementById("tomate").checked = true;
    document.getElementById("queso").checked = true;
    document.getElementById("oregano").checked = true;
    jamon.checked = false;
    pinia.checked = false;
    champi.checked = false;
    bbq.checked = true;
    bacon.checked = true;
    carne.checked = true;
    document.getElementById("margarImg").style.display = "none";
    document.getElementById("proscImg").style.display = "none";
    document.getElementById("caprImg").style.display = "none";
    document.getElementById("pizzaBbqImg").style.display = "block";
    document.getElementById("hawaImg").style.display = "none";
    precioPizza.innerHTML = "Precio pizza: " + precio4 + " €";
    precioExtra.innerHTML = "Precio Extras: " + precio0 + " €";
    ocultarIngredientes();
    precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(precio4))} €`;
}
function hawaiSelected(){
    document.getElementById("tomate").checked = true;
    document.getElementById("queso").checked = true;
    document.getElementById("oregano").checked = true;
    jamon.checked = true;
    pinia.checked = true;
    champi.checked = false;
    bbq.checked = false;
    bacon.checked = false;
    carne.checked = false;
    document.getElementById("margarImg").style.display = "none";
    document.getElementById("proscImg").style.display = "none";
    document.getElementById("caprImg").style.display = "none";
    document.getElementById("pizzaBbqImg").style.display = "none";
    document.getElementById("hawaImg").style.display = "block";
    precioPizza.innerHTML = "Precio pizza: " + precio3 + " €";
    precioExtra.innerHTML = "Precio Extras: " + precio0 + " €";
    ocultarIngredientes();
    precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(precio3))} €`;
}

/////////////////////////////////////INGREDIENTES/////////////////////////////////////

jamon.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("jamonImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("jamonImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;

    }
});

pinia.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("piniaImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("piniaImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;
    }
});

champi.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("champiImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("champiImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;
    }
});


bbq.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("bbqImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("bbqImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;
    }
});

bacon.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("baconImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("baconImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;
    }
});

carne.addEventListener("change", function() {
    if(this.checked){
        document.getElementById("cajaOculta").style.display = "block";
        document.getElementById("carpiImg").style.display = "block";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) + parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) + parseFloat(extra))} €`;

    } else {
        document.getElementById("carpiImg").style.display = "none";
        precioExtra.innerHTML = `Precio Extra: ${precio0 = (parseFloat(precio0) - parseFloat(extra))} €`;
        precioTotal.innerHTML = `Precio Total: ${total = (parseFloat(total) - parseFloat(extra))} €`;
    }
});

function ocultarIngredientes(){
    document.getElementById("cajaOculta").style.display = "none";
    document.getElementById("jamonImg").style.display = "none";
    document.getElementById("piniaImg").style.display = "none";
    document.getElementById("champiImg").style.display = "none";
    document.getElementById("bbqImg").style.display = "none";
    document.getElementById("baconImg").style.display = "none";
    document.getElementById("carpiImg").style.display = "none";
    precio0 = 0;
    total = 0;
}