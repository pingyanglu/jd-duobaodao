const express = require('express')
const path = require('path')
const router = express.Router();
const app = express()
var request=require('request');
const port = 3000

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname,'index.html'))
})
/* 

*/
router.get('/list', (req, res) => {
	let url={
		dnsm:'https://used-api.jd.com/auction/list?pageNo='+req.query.page+'&pageSize=50&category1=&status=&orderDirection=1&auctionType=1&orderType=1&groupId=1000005&callback=__jp34',
		sjtx:'https://used-api.jd.com/auction/list?pageNo='+req.query.page+'&pageSize=50&category1=&status=&orderDirection=1&auctionType=1&orderType=1&groupId=1000006&callback=__jp7'
		
	}
	// let requstUrl = url.dnsm
	let requstUrl = url.sjtx
	console.log('requstUrl',requstUrl)
	// requstUrl = url['sjtx'];
	var e=request({
		url:requstUrl,
		method:'GET',
		headers:{'Content-Type':'text/json' }
    },function(error,response,body){
        if(!error && response.statusCode==200){
			// body = body.slice(11,-2)
			body = body.slice(10,-2)
			// console.log('>>>>>>>>>>>>>>>',body)
			console.log(typeof body)
            // res.render('task',{'data':JSON.parse(body) } );
			// res.json(JSON.parse(body));
			res.send(body);
        }
    });
	
});
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})