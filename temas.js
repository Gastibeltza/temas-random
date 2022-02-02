let takeTheATrain = {'title':'Take the A Train','key':'C'};
let allOfMe = {'title':'All of Me','key':'C'};
let allTheThingsYouAre = {'title':'All the Things You Are','key':'Ab'};
let aloneTogether = {'title':'Alone Together','key':'D-'};
let angelEyes = {'title':'Angel Eyes','key':'D-'};
let autumnLeaves = {'title':'Autumn Leaves','key':'G-'};
let beautifulLove = {'title':'Beautiful Love','key':'D-'};
let billiesBounce = {'title':'Billie\'s Bounce','key':'F'};
let blueBossa = {'title':'Blue Bossa','key':'C-'};
let bodyAndSoul = {'title':'Body and Soul','key':'Db'};
let butNotForMe = {'title':'But Not For Me','key':'Eb'};
let byeByeBlackbird = {'title':'Bye bye Blackbird','key':'F'};
let cherokee = {'title':'Cherokee','key':'Eb'};
let comeRain = {'title':'Come Rain or Come Shine','key':'F'};
let confirmation= {'title':'Confirmation','key':'F'};
let cryMeARiver = {'title':'Cry me a River','key':'C-'};
let dannyBoy = {'title':'Danny Boy','key':'Bb'};
let  daysOfWineAndRoses= {'title':'Days of Wine and Roses','key':'F'};
let dearOldStockholm = {'title':'Dear old Stockholm','key':'D-'};
let donnaLee = {'title':'Donna Lee','key':'Ab'};
let doxy = {'title':'Doxy','key':'Bb'};
let  four= {'title':'Four','key':'Eb'};
let greenDolphin = {'title':'On Green Dolphin Street','key':'Eb'};
let groovinHigh = {'title':'Groovin\' High','key':'Eb'};
let haveYouMet = {'title':'Have You Met Miss Jones','key':'F'};
let honeysuckle = {'title':'Honeysucke Rose','key':'F'};
let iRememberApril = {'title':'I\'ll Remember April','key':'G'};
let itCouldHappen = {'title':'It Could Happen to You','key':'Eb'};
let  justFriends= {'title':'Just Friends','key':'G'};
let ladyBird = {'title':'Lady Bird','key':'C'};
let loverman = {'title':'Loverman','key':'F'};
let lullabyOfBirdland = {'title':'Lullaby of Birdland','key':'C'};




 


function randomizar() {
    const temas = [takeTheATrain,allOfMe, allTheThingsYouAre, aloneTogether, angelEyes, 
butNotForMe, beautifulLove, billiesBounce, blueBossa, bodyAndSoul, byeByeBlackbird, cherokee, comeRain, confirmation, cryMeARiver, 
dannyBoy, daysOfWineAndRoses, dearOldStockholm, donnaLee, doxy, four, greenDolphin, groovinHigh, haveYouMet, honeysuckle, iRememberApril, itCouldHappen,
justFriends, ladyBird, ladyBird, lullabyOfBirdland];
    temaARandomizar = temas[Math.floor(Math.random()* temas.length)];
    temardo = JSON.stringify(temaARandomizar.title);
    let temaSinComillas = temardo.replace(/["]+/g, '');
    tonalidad = JSON.stringify(temaARandomizar.key)
    let tonalidadSinComillas = tonalidad.replace(/["]+/g, '');
    console.log(temaARandomizar);
    document.getElementById('titulo').innerHTML = temaSinComillas;
    document.getElementById("key").innerHTML= tonalidadSinComillas;
  }
