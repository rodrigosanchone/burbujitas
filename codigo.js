

const contenedor= document.querySelector('.contenedor')



//array colores 

var colores= ['red','blue','green','yellow']

//array tamanyo
var tamanyo= [1,2,3,4]
//array animación
var movimiento=['mover 0.50s','moverReverse 0.50s','moverY 0.50s','moverYReverse 0.50']





var tiempo= setInterval(crearCirculos,1000)


function crearCirculos(){
    var top= (Math.floor(Math.random()*(1200-200)+200));
    var left= (Math.floor(Math.random()*(1200-200)+200));
    var colorRamdon= (Math.floor(Math.random()*(5-0)))
    var tamayoRamdon= (Math.floor(Math.random()*(5-0)))
    var movimientoRamdon= (Math.floor(Math.random()*(5-0)))
        const div = document.createElement("div")
        div.classList= 'circulo1'
        contenedor.appendChild(div);
        div.style.background= colores[colorRamdon];
        div.style.width= tamanyo[tamayoRamdon]+"%";
        div.style.height= tamanyo[tamayoRamdon]*20.5+"px";
        div.style.animation=movimiento[movimientoRamdon] ;
        div.style.position= "absolute"
        div.style.left= top + 'px';
        div.style.top= left + 'px';
   console.log(colorRamdon)

}  







