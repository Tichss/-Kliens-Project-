class Card {

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

    
}