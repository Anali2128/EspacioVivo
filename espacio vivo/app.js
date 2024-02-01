/* funcion para inicializar el mapa */


function initMap(){
    /* variable de coordenadas */
    
        const espacioVivo = { lat: -34.7493222, lng: -58.3829395 };
    
        /* configurar el mapa */
    
        const mapa = new google.maps.Map(document.getElementById("map-container"),{
        center: espacioVivo,
        zoom: 9,
        })

        const marcador = new google.maps.Marker({
            position: espacioVivo,
            map: mapa, 
            title: "Espacio Vivo",
        })
    }

    function cargarScript(){
        /* crear elemento */
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAjF5u-fKk5iooNjoPjgCo3t2uicfdRPMc&callback=initMap>`;
        
        script.async = true;

        script.defer = true;

        script.onerror = function (){
            console.error("Error al cargar el script de Google Maps")
        };
    
        document.head.appendChild(script)
    }
    
    /* llamo a la funcion para que se ejecute */
    
        cargarScript();
        