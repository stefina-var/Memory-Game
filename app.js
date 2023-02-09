document.addEventListener('DOMContentLoaded', () => {
  let cards = [
    {
      name: "blue",
      img: "images/blue.png",
    },
    {
      name: "pink",
      img: "images/pink.png",
    },
    {
      name: "orange",
      img: "images/orange.png",
    },
    {
      name: "yellow",
      img: "images/yellow.png",
    },
    {
      name: "green",
      img: "images/green.png",
    },
    {
      name: "purple",
      img: "images/purple.png",
    },
    {
      name: "blue",
      img: "images/blue.png",
    },
    {
      name: "pink",
      img: "images/pink.png",
    },
    {
      name: "orange",
      img: "images/orange.png",
    },
    {
      name: "yellow",
      img: "images/yellow.png",
    },
    {
      name: "green",
      img: "images/green.png",
    },
    {
      name: "purple",
      img: "images/purple.png",
    },
  ];

  const grid = document.querySelector(".grid");
  let result = 0;

  //create the board
  function createBoard() {
    for (let index = 0; index < cards.length; index++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/unopened.png");
      card.setAttribute('data-id', index);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }
  
  let cardsChosen = [];
  let cardsChosenId = [];

  //check for matches
  function checkForMatch(){
    let cards = document.querySelectorAll('img');
    let firstCard = cardsChosenId[0];
    let secondCard = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
      cards[firstCard].setAttribute('src','images/background.png');
      cards[secondCard].setAttribute('src','images/background.png');
      //update score
      result ++;
      let score = document.querySelector('span');
      score.textContent = result;  
    }else{
      cards[firstCard].setAttribute('src','images/unopened.png');
      cards[secondCard].setAttribute('src','images/unopened.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
  }
  
  //flip cards
  function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cards[cardId].img);
    if(cardsChosen.length ==2){
      setTimeout(checkForMatch,500);
    }
  }
  // reload/restart page
  let startBtn = document.querySelector('button.start')
  startBtn.addEventListener('click', restart);
  function restart(){
    document.location.reload();
  }
  //maked the board diffrent
  cards.sort(()=> 0.5 - Math.random());
  createBoard();
  

});
