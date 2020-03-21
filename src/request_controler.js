const express = require("express");
const app = express();
app.listen( 3000, "localhost", function() {} );
let abc=[];
let block=[];
let count =0;
let flag = 0;
app.get("/nikhil", function(req, res) 
{ 
    let start = new Date().getTime();
    abc.push(req.headers['x-forwarded-for']);
    abc.push(start);
    let end = abc[1] + 60000
    abc.forEach(element => 
    {
        if( req.headers['x-forwarded-for'] === element )
        {
            count++
        }
    });
    block.forEach(elements => 
    {
        if( req.headers['x-forwarded-for'] === elements )
        {
            flag = 1;
        }
    })

    if ( count == 3 || flag == 1 ) 
    {
        res.send("Unable to access "); 
        count = 0;
        flag = 0;
        block.push(req.headers['x-forwarded-for'])
    }
    else  
    {
        res.send("NIKHIL");
        count = 0;
    }
    if(start>end)
    {
        abc = [];
        block = [];
    }
    console.log(req.headers['x-forwarded-for']);
   // console.log(req.connection.remoteAddress);
});
