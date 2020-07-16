let http = require('http');

let fs = require('fs');


let server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    let file = fs.createReadStream('./test.html');
    file.on("open" , function(){
        file.pipe(res);
    });

    file.on("error" , function(err){
        console.log(err);
    });
});

server.listen(52273 , function(){
    console.log("서버가 52273번에서 실행중입니다.")
});