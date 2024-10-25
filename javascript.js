//Función que maneja la música del juego
let music = true;
function músicaControl () {
    if (music) {
        document.querySelector("#audio").play();
        music = false;
        document.querySelector("#música").src = "imágenes/músicaOn.png";
        document.querySelector("#música2").src = "imágenes/músicaOn.png";
        document.querySelector("#música3").src = "imágenes/músicaOn.png";
    }
    else {
        document.querySelector("#audio").pause();
        music = true;
        document.querySelector("#música").src = "imágenes/músicaOff.png";
        document.querySelector("#música2").src = "imágenes/músicaOff.png";
        document.querySelector("#música3").src = "imágenes/músicaOff.png";
    }
}
//Funciones para cambiar de una pantalla a otra
function quitarDisplay (display) {
    document.querySelector(display).style.display = "none";
}
function mostrarOpacidad (opacidad) {
    document.querySelector(opacidad).style.opacity = "1";
}
function jugar (quitar,poner) {
    document.querySelector(quitar).style.opacity = "0";
    setTimeout(quitarDisplay,1000,quitar);
    document.querySelector(poner).style.display = "inline-block";
    setTimeout(mostrarOpacidad,1000,poner);
}
//Función para crear las preguntas
let respuesta = 1;
function preguntar (consigna,opción1,opción2,opción3,opciónCorrecta,imágen,audio) {
    document.querySelector("#pregunta").innerHTML = consigna;
    document.querySelector("#opción1").innerHTML = opción1;
    document.querySelector("#opción2").innerHTML = opción2;
    document.querySelector("#opción3").innerHTML = opción3;
    document.querySelector("#imágenPregunta").src = imágen;
    if (audio != "none") {
        document.querySelector("#audioPregunta").style.display = "block";
        document.querySelector("#audioPregunta").src = audio;
    }
    else {
        document.querySelector("#audioPregunta").style.display = "none";
    }
    if (imágen != "none") {
        document.querySelector("#imágenPregunta").style.display = "block";
        document.querySelector("#imágenPregunta").src = imágen;
    }
    else {
        document.querySelector("#imágenPregunta").style.display = "none";
    }
    console.clear();
    respuesta = opciónCorrecta;
}
//Funciones de todas las materias
function siPreguntar () {
    preguntarDeVuelta = true;
}
let materia = "aleatoria";
let preguntarDeVuelta = true;
function matemática () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "matemática";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor((Math.random()*30 + 1));
        sumarLosPuntos = true;
        switch (pregunta){
                case 1:
                    preguntar("¿Con qué letra se representan los números naturales?","N","Z","Q",1,"none","none");
                    break;
                case 2:
                    preguntar("¿Cuál es una expresión decimal periódica pura?","10/2","5/9","87/90",2,"none","none");
                    break;
                case 3:
                    preguntar("¿Cuál es el anterior a -2?","-1","2","-3",3,"none","none");
                    break;
                case 4:
                    preguntar("Un número entero y el opuesto de su opuesto son:","Iguales","Diferentes","Iguales pero con distinto signo",1,"none","none"); 
                    break;
                case 5:
                    preguntar("Dos números distintos pueden tener el mismo módulo, esto es:","Falso","Verdadero","El resultado varía",2,"none","none");
                    break;
                case 6:
                    preguntar("Si un número tiene exponente par el resltado va a ser:","Positivo","Negativo","Puede variar",1,"none","none");
                    break;
                case 7:
                    preguntar("Cunado el exponente es negativo, ¿qué se invierte?","El signo del número","El signo del resultado","El numerador y el denominador",3,"none","none");
                    break;
                case 8:
                    preguntar("¿Cuál operación tiene más jerarquía?","Suma","División","Potencia",3,"none","none");
                    break;
                case 9:
                    preguntar("¿Qué pasa cundo en una raíz la base es negativa y el índice par?","No tiene solución en Z","Se resuelve comunmente","Tiene un solo resultado positivo",1,"none","none");
                    break;
                case 10:
                    preguntar("¿Qué signo no se utiliza en una inecuación?",">","=","≤",2,"none","none");
                    break;
                case 11:
                    preguntar("La letra Z representa a:","Los números racionales","Los números irracionales","Los números enteros",3,"none","none");
                    break;
                case 12:
                    preguntar("La letra Q representa a los:","Enteros","Racionales","Enteros negativos",2,"none","none");
                    break;
                case 13:
                    preguntar("¿Qué fracción es equivalente a 1/2?","2/3","20/10","2/4",3,"none","none");
                    break;
                case 14:
                    preguntar("Para amplificar una fracción hay que:","Multiplicar","Dividir","Sumar",1,"none","none");
                    break;
                case 15:
                    preguntar("La multiplicación de fracciónes se simplifica:","Cruzado","Derecho","Ambas",1,"none","none");
                    break;
                case 16:
                    preguntar("La multiplicación de fracciónes se multiplica:","Derecho","Cruzado","Ambas",1,"none","none");
                    break;
                case 17:
                    preguntar("La división de fracciónes se simplifica:","Cruzado","Derecho","Ambas",2,"none","none");
                    break;
                case 18:
                    preguntar("La división de fracciónes se multiplica:","Cruzado","Derecho","No se multiplica",1,"none","none");
                    break;
                case 19:
                    preguntar("¿Cuál es una expresión decimal exacta?","1/3","1/2","5/9",2,"none","none");
                    break;
                case 20:
                    preguntar("1,8888 truncado a los centésimos es:","1,8","1,88","1,888",2,"none","none");
                    break;
                case 21:
                    preguntar("0,5 redondeado al entero es:","0","Se queda 0,5","1",3,"none","none");
                    break;
                case 22:
                    preguntar("¿Cómo se llama el número que está arriba en la fracción?","Numerador","Denominador","Cociente",1,"none","none");
                    break;
                case 23:
                    preguntar("¿Cómo se llama el número que está abajo en la fracción?","Numerador","Denominador","Cociente",2,"none","none");
                    break;
                case 24:
                    preguntar("El resultado de una inecuación es un:","Número","Conjunto de números","No tiene resultado",2,"none","none");
                    break;
                case 25:
                    preguntar("Las ecuaciónes establecen:","Desigualdades","Conjuntos de números","Igualdades",3,"none","none");
                    break;
                case 26:
                    preguntar("Las inecuaciónes establecen:","Desigualdades","Igualdades","Conjuntos de números",1,"none","none");
                    break;
                case 27:
                    preguntar("¿Cuál es un ejemplo de raíz de raíz?","√25","√√81","√2",2,"none","none");
                    break;
                case 28:
                    preguntar("¿A cuál de estas opciónes es igual 2².2.2²","2⁴","2⁹","2⁵",3,"none","none");
                    break;
                case 29:
                    preguntar("¿Cuánto es 7⁵/7⁴?","7²","7⁹","7",3,"none","none");
                    break;
                case 30:
                    preguntar("Cuando multiplicamos o dividimos dos números de distinto signo nos da un resultado:","Negativo","Positivo","Puede variar",1,"none","none");
                    break;
            }
    }
}


function química () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "química";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("El hidróxido de sodio es más conocido como:","Sal de mesa","Cal","Soda cáustica",3,"none","none");
                break;
            case 2:
                preguntar("Una sustancia cuyo pH es igual a 9 es: ","Ácida","Alcalina","Neutra",2,"none","none");
                break;
            case 3:
                preguntar("¿Con qué símbolo se representa el hierro en la tabla periódica?","Fe","H","Ninguna de las anteriores",1,"none","none");
                break;
            case 4:
                preguntar("El calcio es:","Metal","No metal","Gas inerte",1,"none","none");
                break;
            case 5:
                preguntar("La tabla periódica tiene, aproximadamente:","90 elementos","200 elementos","121 elementos",3,"none","none");
                break;
            case 6:
                preguntar("El paso de líquido a gaseoso se puede llamar:","Ebullición","Evaporación","Las dos son correctas",3,"none","none");
                break;
            case 7:
                preguntar("El estado de agregación sólido:","Conserva su forma y volumen","Conserva su forma en el recipiente","No conserva su forma",1,"none","none");
                break;
            case 8:
                preguntar("Un sistema homogéneo está formado por: ","Una sola fase","Dos o más fases","Ninguna de las anteriores",1,"none","none");
                break;
            case 9:
                preguntar("La sustancia que se dusuelve en una solución es el:","Solvente","Disolvente","Soluto",3,"none","none");
                break;
            case 10:
                preguntar("El solvente universal es:","Alcohol","Agua","Hipoclorito de sodio",2,"none","none");
                break;
            case 11:
                preguntar("Las partículas subatómicas de carga positiva son:","Electrones","Protones","Neutrones",2,"none","none");
                break;
            case 12:
                preguntar("¿Cuál de las opciónes es un metal?","Fe","O","He",1,"none","none");
                break;
            case 13:
                preguntar("¿Cuál de las opciónes es un no metal?","Ni","Ne","C",3,"none","none");
                break;
            case 14:
                preguntar("¿Cuál de las opciónes es un gas inerte?","Cu","S","Ar",3,"none","none");
                break;
            case 15:
                preguntar("Una sustancia con pH igual a 3 es:","Alcalina","Neutra","Ácida",3,"none","none");
                break;
            case 16:
                preguntar("Una sustancia con un pH de 7 es:","Alcalina","Neutra","Ácida",2,"none","none");
                break;
            case 17:
                preguntar("Un indicador es:","Sustancia que cambia de color es presencia de otras","Unidad de medida","Elemento químico",1,"none","none");
                break;
            case 18:
                preguntar("Una sustancia ácida tiene un sabor:","Dulce","Agrio","No tiene sabor",2,"none","none");
                break;
            case 19:
                preguntar("Las sustancias ácidas al reaccionar con el mármol desprenden:","C","O₂","CO₂",1,"none","none");
                break;
            case 20:
                preguntar("Los ácidos corroen (en su mayoría) a:","Metales","Líquidos","No metales",1,"none","none");
                break;
            case 21:
                preguntar("¿En dónde se pueden encontrar sustancias alcalinas?","Productos de limpieza","Destapa cañerías de baño","Todas son correctas",3,"none","none");
                break;
            case 22:
                preguntar("Las sustancias alcalinas prentan un sabor:","Amargo","Dulce","Agrio",1,"none","none");
                break;
            case 23:
                preguntar("¿Qué descomponen las sustancias alcalinas?","Aceites","Grasas","Todas son correctas",3,"none","none");
                break;
            case 24:
                preguntar("¿Qué neutralizan las sustancias alcalinas?","Malos olores","Ácidos","No neutralizan sustancias",2,"none","none");
                break;
            case 25:
                preguntar("¿Qué sustancia es producto de la mezcla de un ácido con una sustancia alcalina?","Sustancia ácida","Sustancia neutra","Sustancia alcalina",2,"none","none");
                break;
            case 26:
                preguntar("¿Qué es la destilación?","Método de separación de componentes","Método de separación de fases","Método de separación de elementos",1,"none","none");
                break;
            case 27:
                preguntar("¿Cuál es una unidad de concentración?","g/cm³","mg/l","m.a",2,"none","none");
                break;
            case 28:
                preguntar("Una solución diluída tiene:","Mucha concentración","Poca concentración","Cantidad ideal de concentración",2,"none","none");
                break;
            case 29:
                preguntar("¿Cuál no es un método de separación de fases?","Filtración","Destilación","Imantación",2,"none","none");
                break;
            case 30:
                preguntar("¿Cuál es una sustancia compuesta?","C","H₂O","O₂",2,"none","none");
                break;
        }
    }
}


function inglés () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "inglés";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("¿Cuál está correctamente escrita?","Hello, how are you?","Hello, how has they?","Hello, where is you?",1,"none","none");
                break;
            case 2:
                preguntar('¿Cómo se traduce "you" al español?',"Él","Vos/tu","Ellos",2,"none","none");
                break;
            case 3:
                preguntar('¿Cuál no es una conjugación del verbo "to be"?',"Are","Is","Do",3,"none","none");
                break;
            case 4:
                preguntar("What is he playing?","He's playing football","He's playing basketball","He isn't playing football",1,"imágenes/playingFootball.avif","none");
                break;
            case 5:
                preguntar("Wich season is it?","Spring","Summer","Winter",3,"imágenes/winter.webp","none");
                break;
            case 6:
                preguntar("What time is it?","Three o'clock","Eleven o'clock","Twelve o'clock",3,"imágenes/twelveOClock.png","none");
                break;
            case 7:
                preguntar("Wich nationality is it?","Argentinian","Japanese","American",3,"imágenes/american.webp","none");
                break;
            case 8:
                preguntar("Wich place is it?","Swimming pool","Museum","Theatre",2,"imágenes/museum.jpg","none");
                break;
            case 9:
                preguntar('¿Cómo se traduce "billetera" al inglés?',"Purse","Money","Wallet",3,"none","none");
                break;
            case 10:
                preguntar('What is "brother" in Spanish?',"Tío","Hermano","Hermana",2,"none","none");
                break;
            case 11:
                preguntar('¿Cómo se dice "yo quiero" en Inglés?',"I want to","I do","I'm not",1,"none","none");
                break;
            case 12:
                preguntar('¿Cómo cambia "have" para he-she-it?',"Haven't","hasn't","has",3,"none","none");
                break;
            case 13:
                preguntar('"This" se usa para señalar algo a una distancia:',"Cercana","Intermedia","Lejana",1,"none","none");
                break;
            case 14:
                preguntar('¿Cómo se dice "yo puedo" en Inglés?',"I do","I can't","I can",3,"none","none");
                break;
            case 15:
                preguntar("Wich isn't a nationality?","Argentinian","Japan","American",2,"none","none");
                break;
            case 16:
                preguntar('¿Cómo se le agrega la "ing" a "play"?',"Plaing","Playing","No se le agrega en ningún caso",2,"none","none");
                break;
            case 17:
                preguntar('¿Cómo se dice "hacer tarea" en Inglés?',"Do exercise","Do an essay","Do homework",3,"none","none");
                break;
            case 18:
                preguntar('¿Cómo se dice "Química" en Inglés?',"Science","Math","Chemistry",3,"none","none");
                break;
            case 19:
                preguntar('¿Cómo se pregunta "cuándo" en Inlés?',"When","What","Where",1,"none","none");
                break;
            case 20:
                preguntar('En Inglés se utiliza "¿" para hacer preguntas?',"No se utiliza","Depende el contexto","Si se utiliza",1,"none","none");
                break;
            case 21:
                preguntar('¿Cuál de estas palabras significa "siempre"?',"Always","Never","Usualy",1,"none","none");
                break;
            case 22:
                preguntar('What is "early" in Spanish?',"Tarde","Temprano","A veces",2,"none","none");
                break;
            case 23:
                preguntar("When is the morning?","7AM","2PM","7PM",1,"none","none");
                break;
            case 24:
                preguntar("When do you have breakefast?","In the afternoon","In the morning","At night",2,"none","none");
                break;
            case 25:
                preguntar("When do you go to sleep?","In the evening","In the afternoon","At night",3,"none","none");
                break;
            case 26:
                preguntar('What is "grandpa" in Spanish?',"Hermano","Tío","Abuelo",3,"none","none");
                break;
            case 27:
                preguntar('What are "siblings" in Spanish?',"Hermana","Hermanos","Hermano",2,"none","none");
                break;
            case 28:
                preguntar("¿Cuál está mal escrita?","Have got","Haven't got","Has gots",3,"none","none");
                break;
            case 29:
                preguntar('¿Cómo se dice "olvidar" en Inglés?',"Remember","Later","Forget",3,"none","none");
                break;
            case 30:
                preguntar('¿Cómo cambia "study" para he-she-it?',"Studyies","Studies","No cambia",2,"none","none");
                break;
        }
    }
}


function música () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "música";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("¿Cuántas notas forman nuestro sistema musical?","7","12","8",2,"none","none");
                break;
            case 2:
                preguntar("¿Cuántas notas distintas forman una escala mayor?","8","12","7",3,"none","none");
                break;
            case 3:
                preguntar("¿Cómo se llama el símbolo # en música?","Bemol","Sostenido","Nota",2,"none","none");
                break;
            case 4:
                preguntar("¿Qué acorde se forma con las notas La-Fa-Do?","Do mayor","Fa menor","Fa mayor",3,"none","none");
                break;
            case 5:
                preguntar("¿Qué partes forman la música?","Tonadas y notas","Ritmo, armonía y melodía","Sonidos, tiempos y notas",2,"none","none");
                break;
            case 6:
                preguntar("¿Cómo se llama este símbolo?","Nota musical","Clave de la nota","Clave de sol",3,"imágenes/ClaveDeSol.png","none");
                break;
            case 7:
                preguntar("¿Cuál es la ciencia que estudia las notas musicales, sus combinaciónes, acordes y comportamiento?","Música","Armonía","Sonido",2,"none","none");
                break;
            case 8:
                preguntar("Conjunto ordenado de notas que pertenecen a una tonalidad:","Sonidos","Notas musicales","Escala",3,"none","none");
                break;
            case 9:
                preguntar("¿Qué es la sobreposición de dos o más notas?","Escala","Acorde","Melodía",2,"none","none");
                break;
            case 10:
                preguntar("Término musical para referirse a la distancia entre las notas:","Intervalo","Sostenido","Bemol",1,"none","none");
                break;
            case 11:
                preguntar("¿Existe el doble sostenido?","Si existe","No existe","Depende la situación",1,"none","none");
                break;
            case 12:
                preguntar("¿Qué es una sucesión lineal de notas?","Armonía","Compás","Melodía",3,"none","none");
                break;
            case 13:
                preguntar("¿Los silencios se escriben?","Sí, y hay figuras específicas","No","No esta estandarizado",1,"none","none");
                break;
            case 14:
                preguntar("Orden y proporción en que se agrupan los sonidos en el tiempo:","Tonos","Ritmo","Compás",2,"none","none");
                break;
            case 15:
                preguntar("¿Cuántas líneas tiene un pentagrama?","7","4","5",3,"none","none");
                break;
            case 16:
                preguntar("¿Dónde se escribe la música?","Pentagrama","Renglones","Base musical",1,"none","none");
                break;
            case 17:
                preguntar("¿Qué representa este símbolo?","Bemol","Incorrecto","Doble sostenido",3,"imágenes/DobleSostenido.png","none");
                break;
            case 18:
                preguntar("¿Qué símbolo quita el efecto del sostenido y el bemol?","Diagonal","Becuadro","Plica",2,"none","none");
                break;
            case 19:
                preguntar("Unidad de medida para dividir el tiempo en la música:","Ritmo","Compás","Barra",2,"none","none");
                break;
            case 20:
                preguntar("El cambio de tonalidad en una canación se llama:","Cambio","Modulación tonal","Modulación modal",2,"none","none");
                break;
            case 21:
                preguntar("Escala que pasa por todas las notas de nuestro sistema musical","Escala menor","Escala de Do","Escala cromática",3,"none","none");
                break;
            case 22:
                preguntar("Distancia mínima entre dos notas","Tono","Semitono","Corchea",2,"none","none");
                break;
            case 23:
                preguntar("¿Cuál es el disco de rock más vendido de la historia?","Back in black (AC/DC)","The dark side of the moon (Pink floyd)","Nevermind (Nirvana)",1,"none","none");
                break;
            case 24:
                preguntar("¿A qué banda pertenece esta mascota?","Los piojos","Los autenticos decadentes"," Soda stereo",1,"imágenes/LosPiojos.png","none");
                break;
            case 25:
                preguntar('¿Qué banda hizo la canción "Persiana americana"?',"Los autenticos decadentes","Los piojos","Soda stereo",3,"none","none");
                break;
            case 26:
                preguntar("¿A qué banda pertenece este álbum?","Soda stereo","Los fabulosos cadillacs","Los redondos",1,"imágenes/SodaStereo.jpg","none");
                break;
            case 27:
                preguntar("¿En qué año se lanzó este álbum?","2000","1999","2003",3,"imágenes/MáquinaDeSangre.jpg","none");
                break;
            case 28:
                preguntar("¿A qué banda pertenece este álbum?","Los piojos","Los redondos","Los fabulosos cadillacs",2,"imágenes/LosRedondos.jpg","none");
                break;
            case 29:
                preguntar('¿De qué grupo es la canción "Spaghetti del rock"?',"Divididos","Soda stereo","Los redondos",1,"none","none");
                break;
            case 30:
                preguntar("¿En qué año falleció Gustavo Cerati?","2010","2011","2014",3,"none","none");
                break;
        }
    }
}



function lengua () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "lengua";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("¿Dónde se ubica el prefijo en una base?","Antes","En medio","Después",1,"none","none");
                break; 
            case 2:
                preguntar("¿Cuántas partes tiene una superestructura dialogal?","3","8","5",3,"none","none");
                break;  
            case 3:
                preguntar("Acento que nos permite identificar qué sílaba se pronuncia con mayor énfasis en una palabra","Ortográfico","Diacrítico","Prosódico",3,"none","none");
                break;     
            case 4:
                preguntar("La comunicación verbal se da mediante:","Gestos","Sonidos","Escritura",2,"none","none");
                break;
            case 5:
                preguntar("¿Cómo se llama a la información o conjunto de datos que se transmiten?","Código","Mensaje","Canal",2,"none","none");
                break;
            case 6:
                preguntar("¿Cuál es un ejemplo de comunicación no verbal?","Conversación telefónica","Conversación entre dos personas","Mensaje de texto",3,"none","none");
                break;
            case 7:
                preguntar("¿Cómo se llama el conjunto de signos usados para enviar el mensaje?","Código","Mensaje","Canal",1,"none","none");
                break;
            case 8:
                preguntar("¿Qué es la comunicación intrapersonal?","Comunicación entre dos o más personas","Comunicación en grupo","Comunicación consigo mismo",3,"none","none");
                break;
            case 9:
                preguntar("¿Qué elemento de la comunicación es llamado también decodificador?","Receptor","Emisor","Código",1,"none","none");
                break;
            case 10:
                preguntar("¿Qué es el dialecto?","Comunicación mediante sonidos","La variación geográfica de un idioma","La comunicación mediante gestos",2,"none","none");
                break;
            case 11:
                preguntar("¿Qué elemento de la comunicación representa una carta?","El código","El canal","El mensaje",2,"none","none");
                break;
            case 12:
                preguntar("¿Cuál es la función del emisor en la comunicación?","Reunir la información","Recibir la información","Enviar la información",3,"none","none");
                break;
            case 13:
                preguntar("¿A quién corresponde la facultad de la comunicación?","A todos los seres vivos","A los seres humanos","A los grupos intelectuales",1,"none","none");
                break;
            case 14:
                preguntar("Palabra que tiene igual pronunciación y escritura, pero diferente significado","Sinónima","Parónima","Homógrafa",3,"none","none");
                break;
            case 15:
                preguntar("¿Cuál opción muestra solo sustantivos?","Puente, despacio, dormir","Niño, viento, espacio","Lento, viejo, suave",2,"none","none");
                break;
            case 16:
                preguntar('Por su acentuación, qué palabra es "tráfico"',"Aguda","Grave","Esdrújula",3,"none","none");
                break;
            case 17:
                preguntar("¿Cuántas sílabas contiene la palabra aeropuerto","5","4","3",1,"none","none");
                break;
            case 18:
                preguntar("La variación socio-cultural se refiere al:","Idiolecto","Sociolecto","Intelecto",2,"none","none");
                break;
            case 19:
                preguntar('Las palabras que se acentúan cuándo terminan en consonante que no sea "N" ni "S" son:',"Agudas","Graves","Esdrújulas",2,"none","none");
                break;
            case 20:
                preguntar('"Ánimo" es una palabra:',"Aguda","Grave","Esdrújula",3,"none","none");
                break;
            case 21:
                preguntar("¿Cómo se escribe correctamente esta palabra?","Heróico","Heríco","Heroico",3,"none","none");
                break;
            case 22:
                preguntar("¿Cuál de estas palabras no llevan tilde en su plural?","Joven","Verdad","Imagen",2,"none","none");
                break;
            case 23:
                preguntar("¿Cuál de estas palabras está mal escrita?","Ruído","Error","Herramienta",1,"none","none");
                break;
            case 24:
                preguntar("¿Cómo se escribe correctamente la palabra?","Desahucio","Deshaucio","Desaucio",1,"none","none");
                break;
            case 25:
                preguntar("¿Cuál de estas palabras no existe?","Acechar","Asechar","Azechar",3,"none","none");
                break;
            case 26:
                preguntar("¿Qué oración está escrita correctamente?","Ahí tienen muchas cosas","Ay tienen muchas cosas","Hay tienen muchas cosas",1,"none","none");
                break;
            case 27:
                preguntar("¿Cuál está escrita correctamente?","Guión","Guion","Gión",2,"none","none");
                break;
            case 28:
                preguntar("¿Cuál es una palabra aguda?","Árbol","Casualidad","Murciélago",2,"none","none");
                break;
            case 29:
                preguntar("¿Cuál es una palabra grave?","Lápiz","Reloj","Número",1,"none","none");
                break;
            case 30:
                preguntar("¿Cuál es una palabra esdrújula?","Fácil","Menú","Cámara",3,"none","none");
                break;
        }
    }
}


function historia () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "historia";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("¿Cómo se denomina el año 1810 en siglos?","VXI","XXI","XIX",3,"none","none");
                break;
            case 2:
                preguntar("¿Cómo se llamaba el rey que creó el primer código de leyes que se conoce?","Ramsés III","Hammurabi","Nabucandosar II",2,"none","none");
                break;
            case 3:
                preguntar("¿Qué maravilla del mundo antiguo se encontraba en Babilonia?","La gran pirámide de Guiza","Los jardines colgantes","La estatua de Zeus",2,"none","none");
                break;
            case 4:
                preguntar("¿Cuándo comienza y termina la edad media?","476-1453 años","389-1680 años","426-15356 años",1,"none","none");
                break;
            case 5:
                preguntar("A parte de rey, el rey de Mesopotamia se denominaba...","Ensí","Patesí","Todas las anteriores",3,"none","none");
                break;
            case 6:
                preguntar("¿En qué año empezó la segunda guerra mundial?","1925","1939","1948",2,"none","none");
                break;
            case 7:
                preguntar("Emperador romano que autorizó el cristianismo","Constantino I","Cesar Augusto","Valentiniano II",1,"none","none");
                break;
            case 8:
                preguntar("¿Quién es él?","Isaac Newton","Albert Einstein","Hammurabi",1,"imágenes/Newton.jpg","none");
                break;
            case 9:
                preguntar("La guerra fría empezó después de...","La segunda guerra mundial","La guerra de Vietnam","La revolución francesa",1,"none","none");
                break;
            case 10:
                preguntar("¿Quén río aprovechaba el antiguo Egipto?","Río de la Plata","Río Níger","Río Nilo",3,"none","none");
                break;
            case 11:
                preguntar("¿Qué se inventó en 1969?","La calculadora","El internet","La primer computadora",2,"none","none");
                break;
            case 12:
                preguntar("¿Dónde se inventó la pólvora?","Egipto","Japón","China",3,"none","none");
                break;
            case 13:
                preguntar("¿Quién fue el primer presidente de Estados Unidos?","Thomas Jefferson","Abraham Lincoln","George Washington",3,"none","none");
                break;
            case 14:
                preguntar("¿Quiénes fueron los protagonistas de la guerra fría?","Estados Unidos y la Unión Soviética","Inglaterra y Francia","India y China",1,"none","none");
                break;
            case 15:
                preguntar("¿Cuándo se creó la primera bomba atómica?","1971","1925","1945",3,"none","none");
                break;
            case 16:
                preguntar("¿Qué presidente anunció su objetivo de llevar a la luna a un estadounidense?","James Madison","John F. Kennedy","Andrew Jackson",2,"none","none");
                break;
            case 17:
                preguntar("¿Dónde partició Jauna de Arco?","Guerra de las Galias","La guerra de los cien años","Revolución fransesa",2,"none","none");
                break;
            case 18:
                preguntar("¿Cuál se considera la capital del imperio inca?","La Paz (Bolivia)","Quito (Ecuador)","Cusco (Perú)",3,"none","none");
                break;
            case 19:
                preguntar("¿Quién es él?","Isaac Newton","Albert Einstein","Nikola Tesla",3,"imágenes/Tesla.jpg","none");
                break;
            case 20:
                preguntar("¿A qué año se vinvula la caída del imperio romano de Occidente?","674 d.C","476 d.C","962 d.C",2,"none","none");
                break;
            case 21:
                preguntar("¿En qué añon llegó el primer hombre a la luna?","1949","1959","1969",3,"none","none");
                break;
            case 22:
                preguntar("¿Entre qué años el muro de Berlín formó parte de la frontera interalemana?","1961-1989","1921-1949","1941-1969",1,"none","none");
                break;
            case 23:
                preguntar("¿Quién fue el preimer emperador romano?","Marco Aurelio","César Augusto","Nerón",2,"none","none");
                break;
            case 24:
                preguntar("¿En qué año llegó Cristobal Colón a América?","1492","1521","1605",1,"none","none");
                break;
            case 25:
                preguntar("¿Quién es él?","Nikola Tesla","Napoleón Bonaparte","Cristobal Colón",2,"imágenes/Napoleón.webp","none");
                break;
            case 26:
                preguntar("¿Cuánto duró la revolución francesa?","20 años","10 años","5 años",2,"none","none");
                break;
            case 27:
                preguntar("¿Quién fue el primer hombre en pisar la luna?","Kjell N. Lindgren","Eugene Cernan","Neil Armstrong",3,"none","none");
                break;
            case 28:
                preguntar("¿Quién descubrió la penisilina?","Louis Pasteur","Alexander Fleming","Alex. Graham Bell",2,"none","none");
                break;
            case 29:
                preguntar("¿Quién formuló la ley de gravitación universal?","Charles Darwin","Isaac Newton","Albert Einstein",2,"none","none");
                break;
            case 30:
                preguntar("¿En qué año se inventó el transistor?","1947","1940","1930",1,"none","none");
                break;
        }
    }
}


function biología () {
    if (preguntarDeVuelta) {
        aleatorio = false;
        reinicio = true;
        materia = "biología";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*30 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                preguntar("Los seres vivos que no producen su alimento son:","Heterótrofos","Autótrofos","Carnívoros",1,"none","none");
                break;
            case 2:
                preguntar("La sangre carboxigenada tiene:","CO₂","O₂","C",1,"none","none");
                break;
            case 3:
                preguntar("El nucléolo produce:","Vacuolas","Ribosomas","Cloroplastos",2,"none","none");
                break;
            case 4:
                preguntar("¿Qué función tienen los ovarios?","Produdir gametas sexuales femeninas","Comunicar el útero con las trompas de falopio","Lugar donde ocurre la fecundación",1,"none","none");
                break;
            case 5:
                preguntar("¿Cuántos órganos conforman al sistema reproductor femenino?","2","6","Ninguna de las anteriores",3,"none","none");
                break;
            case 6:
                preguntar("La función del corazón es:","Transportar nutrientes y deshechos","Almacenar orina","Conectar al exterior con la vejiga",1,"none","none");
                break;
            case 7:
                preguntar("¿Cuáles son los cambios físicos que se experimentan durante la adolescencia?","Forma corporal","Bello y voz","Todas las anteriores",3,"none","none");
                break;
            case 8:
                preguntar("¿Qué vaso sanguíneo lleva la sangre al corazón?","Venas","Arterias","Capilares",1,"none","none");
                break;
            case 9:
                preguntar("El sistema excretor está formado por:","Un circuito cerrado","Nefrónes","Circuito abierto",2,"none","none");
                break;
            case 10:
                preguntar("Órgano que transporta el bolo alimenticio:","Boca","Intestino delgado","Laringe",3,"none","none");
                break;
            case 11:
                preguntar("Alimentos que contienen hidratos de carbono:","Manteca","Cereales","Legumbres",2,"none","none");
                break;
            case 12:
                preguntar("Función de la vejiga:","Almacenar orina","Almacenar el semen","Proteger a los espermatozoides",1,"none","none");
                break;
            case 13:
                preguntar("La capa del endometrio está en:","Trompas de falopio","Útero","Ovario",2,"none","none");
                break;
            case 14:
                preguntar("¿Cuál es el conducto que permite la eyaculación?","Conducto deferente","Uretra","Testículo",1,"none","none");
                break;
            case 15:
                preguntar("Órgano que filtra la sangre de los deshechos celulares:","Bazo","Apéndice","Riñón",3,"none","none");
                break;
            case 16:
                preguntar("¿A qué edad se llega (aproximadamente) a la madurez sexual?","10 años","15 años","20 años",1,"none","none");
                break;
            case 17:
                preguntar("¿Qué son los nutrientes?","Unidades sencillas y útiles","Conducto de 12 cm de largo","Ninguna de las anteriores",1,"none","none");
                break;
            case 18:
                preguntar("Son conductos delgados y musculares que conducen la origa hasta la vejiga:","Ureteres","Uretra","Nefrón",1,"none","none");
                break;
            case 19:
                preguntar("Unidad básica, estructural y funcional que compone a los seres vivos:","Organismo","Célula","Órgano",2,"none","none");
                break;
            case 20:
                preguntar("Célula que no posee núcleo:","Procariota","Vegetal","Eucariota",1,"none","none");
                break;
            case 21:
                preguntar("Organela encargada de llevar a cabo la fotosíntesis:","Cloroplasto","Mitocondria","Ribosoma",1,"none","none");
                break;
            case 22:
                preguntar("El cuerpo humano está organizado en:","Tejidos","Sistema de órganos","Células",2,"none","none");
                break;
            case 23:
                preguntar("Sistema encargado en la transformación de los alimentos:","Circuladorio","Excretor","Digestivo",3,"none","none");
                break;
            case 24:
                preguntar("Órgano muscular, hueco que presenta 4 cavidades:","Pulmones","Corazón","Hígado",2,"none","none");
                break;
            case 25:
                preguntar("Órgano presente en el sistema excretor que elimina la orina:","Vejiga urinaria","Páncreas","Uretra",3,"none","none");
                break;
            case 26:
                preguntar("Parte del cuerpo humano que está entre la base del cuello y el diafragma:","Abdomen","Tórax","Pelvis",2,"none","none");
                break;
            case 27:
                preguntar("Pequeñas estructuras ubicadas al final de los bronquéolos:","Nefrónes","Alvéolos","Epaticas",2,"none","none");
                break;
            case 28:
                preguntar("Estructura que engloba a la célula y delimita su medio interno","Citoplasma","Membrana plasmática","Ribosomas",2,"none","none");
                break;
            case 29:
                preguntar("El corazón contiene 4 cavidades, estas son:","Una aurícula y tres ventrículos","Tres aurículas y un ventrículo","Dos aurículas y dos ventrículos",3,"none","none");
                break;
            case 30:
                preguntar("¿Quén obtenemos de la alimentación?","Proteínas","Melamina","Nutrientes",3,"none","none");
                break;
        }
    }
}


let aleatorio = false;
function materiaAleatoria () {
    if (preguntarDeVuelta) {
        reinicio = true;
        materia = "materiaAleatoria";
        jugar("#seleccioneMateria","#trivia");
        let pregunta = Math.floor(Math.random()*7 + 1);
        sumarLosPuntos = true;
        switch (pregunta){
            case 1:
                matemática();
                break;
            case 2:
                química();
                break;
            case 3:
                inglés();
                break;
            case 4:
                música();
                break;
            case 5:
                lengua();
                break;
            case 6:
                historia();
                break;
            case 7:
                biología();
                break;
        }
        aleatorio = true;
    }
}
//Sistema de puntos
let puntos = 0;
let sumarLosPuntos = true;
function sumarPuntos () {
    document.querySelector("#puntos").innerHTML = "Puntos: " + puntos;
}
function reiniciarPuntos () {
    puntos = 0;
    document.querySelector("#puntos").innerHTML = "Puntos: 0";
    preguntarDeVuelta = false;
}
//Función para comprobar la respuesta correcta
let reinicio = true;
function comprobarRespuesta (número) {
    document.querySelector("#opción1").style.width = "320px";
    document.querySelector("#opción1").style.height = "50px";
    document.querySelector("#opción1").style.background = "#aaa";
    document.querySelector("#opción2").style.width = "320px";
    document.querySelector("#opción2").style.height = "50px";
    document.querySelector("#opción2").style.background = "#aaa";
    document.querySelector("#opción3").style.width = "320px";
    document.querySelector("#opción3").style.height = "50px";
    document.querySelector("#opción3").style.background = "#aaa";
    document.querySelector("#opción" + respuesta).style.background = "#0c0";
    if (número == respuesta) {
        if (sumarLosPuntos) {
            puntos += 10;
            sumarPuntos();
        }
    }
    if (aleatorio) {
        materia = "materiaAleatoria";
    }
    sumarLosPuntos = false;
    if (reinicio) {
        reinicio = false;
        setTimeout(reiniciar,3000);
        switch (materia) {
            case "matemática":
                setTimeout(matemática,3000);
                break;
            case "química":
                setTimeout(química,3000);
                break;
            case "inglés":
                setTimeout(inglés,3000);
                break;
            case "música":
                setTimeout(música,3000);
                break;
            case "tecnología":
                setTimeout(tecnología,3000);
                break;
            case "lengua":
                setTimeout(lengua,3000);
                break;
            case "historia":
                setTimeout(historia,3000);
                break;
            case "biología":
                setTimeout(biología,3000);
                break;
            case "ciudadanía":
                setTimeout(ciudadanía,3000);
                break;
            case "materiaAleatoria":
                setTimeout(materiaAleatoria,3000);
                break;
        }
    }
}
function reiniciar () {
    document.querySelector("#opción1").style.width = "350px";
    document.querySelector("#opción1").style.height = "60px";
    document.querySelector("#opción1").style.background = "#88f";
    document.querySelector("#opción2").style.width = "350px";
    document.querySelector("#opción2").style.height = "60px";
    document.querySelector("#opción2").style.background = "#88f";
    document.querySelector("#opción3").style.width = "350px";
    document.querySelector("#opción3").style.height = "60px";
    document.querySelector("#opción3").style.background = "#88f";
}