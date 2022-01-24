let takeTheATrain = {'title':'Take the A Train','key':'C'};
let allOfMe = {'title':'All of Me','key':'C'};
let allTheThingsYouAre = {'title':'All the Things You Are','key':'Ab'};
let aloneTogether = {'title':'Alone Together','key':'D-'};
let angelEyes = {'title':'Angel Eyes','key':'D-'};
let butNotForMe = {'title':'But Not For Me','key':'Eb'};

function randomizar() {
    const temas = [takeTheATrain,allOfMe, allTheThingsYouAre, aloneTogether, angelEyes, butNotForMe];
    temaARandomizar = temas[Math.floor(Math.random()* temas.length)];
    temardo = JSON.stringify(temaARandomizar.title);
    let temaSinComillas = temardo.replace(/["]+/g, '');
    tonalidad = JSON.stringify(temaARandomizar.key)
    let tonalidadSinComillas = tonalidad.replace(/["]+/g, '');
    console.log(temaARandomizar);
    document.getElementById('titulo').innerHTML = temaSinComillas;
    document.getElementById("key").innerHTML= tonalidadSinComillas;
  }
