let continuar = true
let importe = 0

const mensajeInicial = "Ingresa el código de la prenda a consultar: \n" +
    "a) Buzos y Sweaters \n" +
    "b) Camisas y Blusas \n" +
    "c) Abrigos \n" +
    "d) Pantalones \n" +
    "e) Zapatos \n"

function iniciarCompra() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim()
    if (resultado !== "a" && resultado !== "b" && resultado !== "c" && resultado !== "d" && resultado !== "e") {
        alert("⛔️ Debes ingresar una prenda de la lista .")
    } else {
        let clubcurvy = confirm("¿Tenes gif card curvylook?")
        if (clubcurvy === true) {
            descuento = 0.90
        } else {
            descuento = 1
        }
        switch (resultado) {
            case "a":
                importe = 3000 * descuento
                alert("💰 buzos y sweaters desde: $ " + importe)

                break
            case "b":
                alert("💰 Camisas y Blusas  desde: $ 3200")
                importe = 3200
                break
            case "c":
                alert("💰 Abrigos desde: $ 8300")
                break
            case "d":
                alert("💰 Pantalones desde: $ 3950")
                break
            case "e":
                alert("💰 Zapatos desde: $ 3400")
                break
            default:
                console.error("No entendí tu consulta.")
        }
    }
}

function consultarPrecios() {
    while (continuar) {
        iniciarCompra()
        continuar = confirm("¿Deseas conocer el precio de otro Articulo?")
    }
    alert(" Regresa pronto❤. Gracias por tu visita😁 :)")
}
consultarPrecios()