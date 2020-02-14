// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardCreator(obj){
    const newCard     = document.createElement('div'),
          newHeadline = document.createElement('div'),
          newAuthor   = document.createElement('div'),
          newImgCont  = document.createElement('div'),
          newImg      = document.createElement('img'),
          newAuthName = document.createElement('span');

    newHeadline.textContent = obj.headline;
    newImg.src = obj.authorPhoto;
    newAuthName.textContent = obj.authorName;

    newCard.classList.add('card');
    newHeadline.classList.add('headine');
    newAuthor.classList.add('author');
    newImgCont.classList.add('img-container');

    newCard.appendChild(newHeadline)
    newCard.appendChild(newAuthor)
    newAuthor.appendChild(newImgCont)
    newAuthor.appendChild(newAuthName)
    newImgCont.appendChild(newImg)

    return newCard
}

const cardCont = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    let articles = response.data.articles
    articles.javascript.forEach( e => {
        cardCont.append(cardCreator(e))   
    })
    articles.bootstrap.forEach( e => {
        cardCont.append(cardCreator(e))   
    })
    articles.technology.forEach( e => {
        cardCont.append(cardCreator(e))   
    })
    articles.jquery.forEach( e => {
        cardCont.append(cardCreator(e))   
    })
    articles.node.forEach( e => {
        cardCont.append(cardCreator(e))   
    })

    // console.log(articles)
})

.catch(error => {
    console.log(error);
})