/* class Card {

  static db=0; //hány van nekünk globálisan

  constructor(number, color, parent) {
    this.number = number; //2-14 // 2-10 + J Q K A
    this.color = color;   //1-4
    this.parent = parent;
    this.visible = true;
    if (parent==='cardPlace'){
      this.hanyadik = Card.db-1;
    }



    this.cardbody = document.createElement('DIV');
    this.cardbody.classList.add("card");
    this.p1 = document.createElement('P');
    this.p2 = document.createElement('P');
    this.img1 = document.createElement('IMG');
    this.img2 = document.createElement('IMG');
    this.img3 = document.createElement('IMG');

    document.getElementById(this.parent).appendChild(this.cardbody);

    this.setVisibility(this.visible);

  }

  static random(parent){
    if(parent==='cardPlace'){
       this.db++;
    }
    return new Card(Math.floor(Math.random() * 13) + 2,Math.floor(Math.random() * 4) + 1, parent);
  }

  setDeg(fok){
    this.cardbody.style.transform = "rotate("+fok+"deg)";
  }

  setParent(masikParent){

    document.getElementById(masikParent).appendChild(this.cardbody);
    this.cardbody.style.marginBottom="-65px";
    this.setDeg(0);

  }

  setVisibility(visible) {
    
    if(visible){
      this.cardbody.style.backgroundImage="";
      this.cardbody.appendChild(this.p1);
      this.cardbody.appendChild(this.img1);
      this.cardbody.appendChild(this.img2);
      this.cardbody.appendChild(this.img3);
      this.cardbody.appendChild(this.p2);

      if(this.number <= 10 )
        this.p1.textContent=this.number;
      else if(this.number == 11)
        this.p1.textContent='J';
      else if(this.number == 12)
        this.p1.textContent='Q';
      else if(this.number == 13)
        this.p1.textContent='K';
      else if(this.number == 14)
        this.p1.textContent='A';

        this.p2.textContent=this.p1.textContent;

      if(this.color===1){
        this.img1.src="svg1.svg";
        this.img2.src="svg1.svg";
        this.img3.src="svg1.svg";
      }else if(this.color===2){
        this.img1.src="svg2.svg";
        this.img2.src="svg2.svg";
        this.img3.src="svg2.svg";
      }else if(this.color===3){
        this.img1.src="svg3.svg";
        this.img2.src="svg3.svg";
        this.img3.src="svg3.svg";
      }else if(this.color===4){
        this.img1.src="svg4.svg";
        this.img2.src="svg4.svg";
        this.img3.src="svg4.svg";
      }
    }
    else{
      this.cardbody.style.backgroundImage="url('cardback2.jpg')";
      this.cardbody.removeChild(this.p1);
      this.cardbody.removeChild(this.img1);
      this.cardbody.removeChild(this.img2);
      this.cardbody.removeChild(this.img3);
      this.cardbody.removeChild(this.p2);
    }
  }


} */

function randomka(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function szamol(array){
  let count=0;
  for (let i=0; i<array.length; i++){
    if(array[i].number>=10 && array[i].number!=14){
      count+=10;
    }else if(array[i].number==14){
      if (count>21){
        count+=1;
      }else{
        count+=11;
      }
    }else{
      count+=array[i].number; 
    }
  }
  return count;
}



// pakli

function game(){

  //tisztogatás az uj játék előtt
  const control = document.getElementsByClassName('control')[0];
  while (control.firstChild) {
    control.removeChild(control.lastChild);
  }

  const osztoPlace=document.getElementById("osztoPlace");
  while (osztoPlace.firstChild) {
    osztoPlace.removeChild(osztoPlace.lastChild);
  }
  const cardPlace=document.getElementById("cardPlace");
  while (cardPlace.firstChild) {
    cardPlace.removeChild(cardPlace.lastChild);
  }
  const pakliPlace=document.getElementById("pakliPlace");
  while (pakliPlace.firstChild) {
    pakliPlace.removeChild(pakliPlace.lastChild);
  }

  //új játék
  let pakli=[];
  pakli.length=52;
  let i=0;
  for( let j=2; j<=14; j++){
    for( let k=1; k<=4; k++){
      pakli[i]=new Card(j,k,"pakliPlace");
      pakli[i].setDeg(90);
      pakli[i].setVisibility(false);
      pakli[i].cardbody.style.marginBottom="-297px";
      i++;
    }
  }

  i=0;

  let cards=[];
  let osztoCards=[];


  let max=51;

  let rdm=randomka(0,max);
  pakli[rdm].setVisibility(true);
  pakli[rdm].setParent("cardPlace");
  cards.push(pakli[rdm]);
  pakli.splice(rdm,1);
  max--;


  rdm=randomka(0,max);
  pakli[rdm].setVisibility(true);
  pakli[rdm].setParent("cardPlace");
  cards.push(pakli[rdm]);
  pakli.splice(rdm,1);
  max--;

  rdm=randomka(0,max);
  pakli[rdm].setVisibility(true);
  pakli[rdm].setParent("osztoPlace");
  osztoCards.push(pakli[rdm]);
  pakli.splice(rdm,1);
  max--;

  rdm=randomka(0,max);
  pakli[rdm].setParent("osztoPlace");
  osztoCards.push(pakli[rdm]);
  pakli.splice(rdm,1);
  max--;

  const ablak = document.getElementById('ablak');

  const playerCount = document.getElementById("playerCount").lastChild;
  playerCount.textContent=szamol(cards);
  if(playerCount.textContent==21){
    ablak.getElementsByTagName("h1")[0].textContent="Nyertél";
    ablak.getElementsByTagName("p")[0].textContent="Ez a black jack apám, nem a marstéri taveszbáktáló";
    ablak.style.visibility="visible";
  }

  const buti1 = document.createElement('BUTTON');
  buti1.setAttribute('id','buti1');
  buti1.textContent='Lapot!';
  //const buti1 = document.getElementById('buti1');
  const buti2 = document.createElement('BUTTON');
  buti2.setAttribute('id','buti2');
  buti2.textContent='Elég!';
  //const buti2 = document.getElementById('buti2');
  
  
  control.appendChild(buti1);
  control.appendChild(buti2);

  buti1.addEventListener('click', function(){
    let rdm=randomka(0,max);
    pakli[rdm].setParent("cardPlace");
    pakli[rdm].setVisibility(true);
    cards.push(pakli[rdm]);
    pakli.splice(rdm,1);
    max--;
    playerCount.textContent=szamol(cards);
    if(playerCount.textContent>21){
      ablak.getElementsByTagName("h1")[0].textContent="Vesztettél";
      ablak.getElementsByTagName("p")[0].textContent="Több lapod van mint 21";
      ablak.style.visibility="visible";
    }
  });



  buti2.addEventListener('click',function(){
    osztoCards[1].setVisibility(true);
    let osztoCount=szamol(osztoCards);
    while(osztoCount<17){
      let rdm=randomka(0,max);
      pakli[rdm].setParent("osztoPlace");
      pakli[rdm].setVisibility(true);
      osztoCards.push(pakli[rdm]);
      pakli.splice(rdm,1);
      max--;
      osztoCount=szamol(osztoCards);
    }
    if(osztoCount>=playerCount.textContent && osztoCount<=21){
      ablak.getElementsByTagName("h1")[0].textContent="Vesztettél";
      ablak.getElementsByTagName("p")[0].textContent="Az osztónak nagyobb értékű a lapjai";
      ablak.style.visibility="visible";

    }else{
      ablak.getElementsByTagName("h1")[0].textContent="Nyertél";
      ablak.getElementsByTagName("p")[0].textContent="Fasza vagy!";
      ablak.style.visibility="visible";
    }
  });


}

game();
const ujra = document.getElementById('ujra');
ujra.addEventListener('click',function(){
  ablak.style.visibility="hidden";
  game();
})







