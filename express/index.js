let express = require('express');
let http = require('http');
let path = require('path');

let app = express();

app.set('port', 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/' , function(req,res){
    res.render('index');
});

app.get('/page' , function(req ,res) {
    res.render('main' , {header:"NodeJS 배우기" ,  msg : "노드제이에스로 게시판 만들기"});
});


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express 엔진이 port" + app.get('port') + '에서 실행중입니다.');
});