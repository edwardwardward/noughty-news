(function(exports){

  function displayArticles(){
    var listOfArticles = articleList.listOfNewsArticles;
    var numberOfArticles= listOfArticles.length;
    for (i=0; i<numberOfArticles; i++){
      var article = listOfArticles[i];
      setUpNewsArticleItem(article,i);
    }

  }

  function addSummary(){

  }

  function setUpNewsArticleItem(article, index){
    var headlineText = article.headline;
    var imageURL = 'https://i.ytimg.com/vi/qh7LLydY8eo/maxresdefault.jpg'
    var hyperLink = document.createElement('a')
    hyperLink.setAttribute('href', '#article'+ index)

    var articleDiv = document.createElement('div');
    articleDiv.setAttribute('class','article-div');

    var imagePort = document.createElement('div');
    imagePort.setAttribute('class','image-port');

    var image = document.createElement('img');
    image.setAttribute('class', 'news-image');
    image.setAttribute('src', imageURL );

    var headline = document.createElement('h3');
    headline.innerHTML = headlineText;

    var newsContainer = document.getElementById('news-container')
    imagePort.appendChild(image);
    articleDiv.appendChild(imagePort);
    articleDiv.appendChild(headline);
    hyperLink.appendChild(articleDiv);
    newsContainer.appendChild(hyperLink);
    // var summary = document.createElement('p');

  }
  exports.displayArticles = displayArticles;
  exports.setUpNewsArticleItem = setUpNewsArticleItem;

})(this)