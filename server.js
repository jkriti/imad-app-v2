var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles{
'article-one' : {
    title : 'Article-one | Kriti Jain',
    heading : 'Article-one',
    date : 'Sep 5,2017',
    content : `<p>
                    This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article.
                </p>
                
                <p>
                     This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article. This is the content for my first article.This is the content for my first article.
                </p>`
},
'article-two' : {  title : 'Article-two | Kriti Jain',
    heading : 'Article-two',
    date : 'Sep 10,2017',
    content : `<p>
                    This is the content for my second article.
              
                </p>`},
'article-three' : {
      title : 'Article-Three | Kriti Jain',
    heading : 'Article-three',
    date : 'Sep 15,2017',
    content : `<p>
                    This is the content for my third article.
                </p>`
}
};

function createTemplate (data)
{
    var title = data.title;
    var date= data.date;
    var heading = data.heading;
    var content= data.content;

var htmlTemplate = `<html>

    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>    

    <body>
        <div class="container">
        
            <div>
                <a href="/">Home</a>
            </div>
            <br/>
            <h3>${heading}</h3>
            
            <div>
               ${date}
            </div>
            
            <div>
              ${content}
            </div>
        </div>
    </body>

</html>
`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName',function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName])); 
});



app.get('/portfolio',function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'portfolio.html')); 
});

app.get('/article-two',function(req,res){
 res.send("Article two requestes and will be served here");  
});

app.get('/article-three',function(req,res){
 res.send("Article three requestes and will be served here");  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
