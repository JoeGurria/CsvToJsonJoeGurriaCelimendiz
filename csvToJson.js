/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath='customer-data.xls'
const csv=require('csvtojson')
var os = require("os");

 var obj = [];
 var i=0;
var fs = require('fs');
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
 
    obj.push( jsonObj );

//console.log("obj.length= " + obj.length)

})
.on('done',(error)=>{
    //first [ brace of json file
    fs.writeFile('myjsonfile.json',  "["  , 'utf8', function(err) {
        if (err) throw err;
       console.log('complete');
       
    })
    //write last line in csv file to json without an ending comma
while ( i < obj.length ){
json = JSON.stringify(obj[i]); //convert it back to json
console.log(json)
if (i==obj.length-1){
fs.appendFile('myjsonfile.json', json + os.EOL , 'utf8', function(err) {
    if (err) throw err;
   console.log('complete');
   
})
}
//write each line in csv file to json with an ending comma
else{
    fs.appendFile('myjsonfile.json', json + "," + os.EOL , 'utf8', function(err) {
        if (err) throw err;
       console.log('complete');
       
    })
        
}
i++; 
}
//write last ] brace of json file
fs.appendFile('myjsonfile.json',  "]"  , 'utf8', function(err) {
    if (err) throw err;
   console.log('complete');
   
})
    console.log('end')
})