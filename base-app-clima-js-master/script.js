let api_key ="21793f25608bee58d01066daaf96bd2d"
let urlBase = "https://api.openweathermap.org/data/2.5/weather"
let difKelvin = 273.15



document.getElementById("botonBusqueda").addEventListener("click",() => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
} )

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = " "


    const ciudadNombre = response.name 
    const temperatura  = response.main.temp
    const humedad = response.main.humidity
    const Descripcion = response.weather[0].description
    const sensaciontermica = response.main.feels_like
    const icono = response.weather[0].icon

   const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = ciudadNombre


const Infotemperatura = document.createElement("p")
Infotemperatura.textContent = `la temperatura es de : ${Math.floor(temperatura-difKelvin)} grados`

const InfoHumedad = document.createElement("h3")
InfoHumedad.textContent = `la humedad es de: ${humedad}%`

const InfoDescripcion = document.createElement("h3")
InfoDescripcion.textContent = Descripcion

const InfoSensacion = document.createElement ("h3")
InfoSensacion.textContent = `la sensacion termica es de :${Math.floor(sensaciontermica-difKelvin)} grados`

const iconoInfo = document.createElement("img")
iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

divDatosClima.appendChild(ciudadTitulo);
divDatosClima.appendChild(Infotemperatura);
divDatosClima.appendChild(InfoHumedad);
divDatosClima.appendChild(iconoInfo);
divDatosClima.appendChild(InfoDescripcion);
divDatosClima.appendChild(InfoSensacion);
}



