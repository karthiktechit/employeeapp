// server.js


//packages
var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json([{"id ":1,"gender ":"male ","title ":"Mr. ","firstName ":"Tom ","surname ":"Roberts ","dob ":"21/04/1986","age ":29,"salary ":"59,783.00","takeHome ":"41,999.84","incomeTax ":"13,316.20","nationalInsurance ":"4,466.96"},
{"id ":2,"gender ":"male ","title ":"Mr. ","firstName ":"Louis ","surname ":"Singh ","dob ":"16/04/1979","age ":36,"salary ":"50,739.00","takeHome ":"36,754.32","incomeTax ":"9,698.60","nationalInsurance ":"4,286.08"},
{"id ":3,"gender ":"male ","title ":"Mr. ","firstName ":"Mohammed ","surname ":"John ","dob ":"18/05/1992","age ":23,"salary ":"26,389.00","takeHome ":"21,032.00","incomeTax ":"3,157.80","nationalInsurance ":"2,199.48"},
{"id ":4,"gender ":"male ","title ":"Mr. ","firstName ":"Owen ","surname ":"Humphreys ","dob ":"15/05/1972","age ":43,"salary ":"31,336.00","takeHome ":"24,395.68","incomeTax ":"4,147.20","nationalInsurance ":"2,793.12"},
{"id ":5,"gender ":"female ","title ":"Ms. ","firstName ":"Holly ","surname ":"Gregory ","dob ":"31/01/1993","age ":22,"salary ":"60,176.00","takeHome ":"42,227.78","incomeTax ":"13,473.40","nationalInsurance ":"4,474.82"},
{"id ":6,"gender ":"female ","title ":"Mrs. ","firstName ":"Skye ","surname ":"Lawrence ","dob ":"22/06/1979","age ":36,"salary ":"42,552.00","takeHome ":"32,005.86","incomeTax ":"6,423.80","nationalInsurance ":"4,122.34"},
{"id ":7,"gender ":"male ","title ":"Mr. ","firstName ":"Tom ","surname ":"Carey ","dob ":"3/6/1994","age ":21,"salary ":"75,316.00","takeHome ":"51,008.98","incomeTax ":"19,529.40","nationalInsurance ":"4,777.62"},
{"id ":8,"gender ":"female ","title ":"Mrs. ","firstName ":"Katherine ","surname ":"Goddard ","dob ":"20/07/1970","age ":45,"salary ":"16,203.00","takeHome ":"14,105.24","incomeTax ":"1,120.60","nationalInsurance ":"977.16"},
{"id ":9,"gender ":"female ","title ":"Dr. ","firstName ":"Rachel ","surname ":"Lambert ","dob ":"16/09/1987","age ":28,"salary ":"17,542.00","takeHome ":"15,015.76","incomeTax ":"1,388.40","nationalInsurance ":"1,137.84"},
{"id ":10,"gender ":"male ","title ":"Mr. ","firstName ":"Daniel ","surname ":"Abbott ","dob ":"8/12/1972","age ":43,"salary ":"31,100.00","takeHome ":"24,235.20","incomeTax ":"4,100.00","nationalInsurance ":"2,764.80"},
{"id ":11,"gender ":"male ","title ":"Mr. ","firstName ":"Harley ","surname ":"Hobbs ","dob ":"26/01/1988","age ":27,"salary ":"37,086.00","takeHome ":"28,305.68","incomeTax ":"5,297.20","nationalInsurance ":"3,483.12"},
{"id ":12,"gender ":"female ","title ":"Ms. ","firstName ":"Abby ","surname ":"Hopkins ","dob ":"2/7/1976","age ":39,"salary ":"82,443.00","takeHome ":"55,142.64","incomeTax ":"22,380.20","nationalInsurance ":"4,920.16"},
{"id ":13,"gender ":"female ","title ":"Mrs. ","firstName ":"Evie ","surname ":"Horton ","dob ":"8/1/1995","age ":21,"salary ":"86,390.00","takeHome ":"57,431.90","incomeTax ":"23,959.00","nationalInsurance ":"4,999.10"},
{"id ":14,"gender ":"male ","title ":"Mr. ","firstName ":"Hayden ","surname ":"Turnbull ","dob ":"15/05/1966","age ":49,"salary ":"22,432.00","takeHome ":"18,340.96","incomeTax ":"2,366.40","nationalInsurance ":"1,724.64"},
{"id ":15,"gender ":"female ","title ":"Ms. ","firstName ":"Grace ","surname ":"Glover ","dob ":"25/10/1996","age ":19,"salary ":"78,828.00","takeHome ":"53,045.94","incomeTax ":"20,934.20","nationalInsurance ":"4,847.86"},
{"id ":16,"gender ":"male ","title ":"Dr. ","firstName ":"Harley ","surname ":"Andrews ","dob ":"18/02/1987","age ":28,"salary ":"73,900.00","takeHome ":"50,187.70","incomeTax ":"18,963.00","nationalInsurance ":"4,749.30"},
{"id ":17,"gender ":"female ","title ":"Ms. ","firstName ":"Victoria ","surname ":"Norris ","dob ":"9/3/1975","age ":40,"salary ":"71,432.00","takeHome ":"48,756.26","incomeTax ":"17,975.80","nationalInsurance ":"4,699.94"},
{"id ":18,"gender ":"female ","title ":"Ms. ","firstName ":"Amelia ","surname ":"Sullivan ","dob ":"24/12/1964","age ":51,"salary ":"25,067.00","takeHome ":"20,132.76","incomeTax ":"2,893.40","nationalInsurance ":"2,040.84"},
{"id ":19,"gender ":"female ","title ":"Mrs. ","firstName ":"Isabel ","surname ":"Dyer ","dob ":"3/6/1996","age ":19,"salary ":"27,904.00","takeHome ":"22,061.92","incomeTax ":"3,460.80","nationalInsurance ":"2,381.28"},
{"id ":20,"gender ":"male ","title ":"Mr. ","firstName ":"Liam ","surname ":"Gibbons ","dob ":"12/3/1971","age ":44,"salary ":"76,120.00","takeHome ":"51,475.30","incomeTax ":"19,851.00","nationalInsurance ":"4,793.70"},
{"id ":21,"gender ":"male ","title ":"Mr. ","firstName ":"Elliot ","surname ":"Herbert ","dob ":"3/4/1991","age ":24,"salary ":"40,092.00","takeHome ":"30,349.76","incomeTax ":"5,898.40","nationalInsurance ":"3,843.84"},
{"id ":22,"gender ":"male ","title ":"Mr. ","firstName ":"Gabriel ","surname ":"Sheppard ","dob ":"14/07/1987","age ":28,"salary ":"50,725.00","takeHome ":"36,746.20","incomeTax ":"9,693.00","nationalInsurance ":"4,285.80"},
{"id ":23,"gender ":"female ","title ":"Ms. ","firstName ":"Francesca ","surname ":"Patel ","dob ":"12/10/1990","age ":25,"salary ":"25,986.00","takeHome ":"20,757.68","incomeTax ":"3,077.20","nationalInsurance ":"2,151.12"},
{"id ":24,"gender ":"female ","title ":"Mrs. ","firstName ":"Rosie ","surname ":"Bryan ","dob ":"4/2/1986	","age ":47,"salary ":"34,702.00","takeHome ":"26,684.56","incomeTax ":"4,820.40","nationalInsurance ":"3,197.04"},
{"id ":25,"gender ":"female ","title ":"Ms. ","firstName ":"Maddison ","surname ":"Bull ","dob ":"29/10/1979","age ":36,"salary ":"66,131.00","takeHome ":"45,681.68","incomeTax ":"15,855.40","nationalInsurance ":"4,593.92"},
{"id ":26,"gender ":"male ","title ":"Mr. ","firstName ":"Louis ","surname ":"Ford ","dob ":"2/11/1967","age ":48,"salary ":"55,963.00","takeHome ":"39,784.24","incomeTax ":"11,788.20","nationalInsurance ":"4,390.56"},
{"id ":27,"gender ":"male ","title ":"Dr. ","firstName ":"Logan ","surname ":"Ball ","dob ":"14/12/1981","age ":34,"salary ":"78,716.00","takeHome ":"52,980.98","incomeTax ":"20,889.40","nationalInsurance ":"4,845.62"},
{"id ":28,"gender ":"female ","title ":"Ms. ","firstName ":"Maya ","surname ":"Hancock ","dob ":"30/12/1967","age ":48,"salary ":"35,345.00","takeHome ":"27,121.80","incomeTax ":"4,949.00","nationalInsurance ":"3,274.20"},
{"id ":29,"gender ":"female ","title ":"Mrs. ","firstName ":"Niamh ","surname ":"Gibbs ","dob ":"29/07/1987","age ":28,"salary ":"44,479.00","takeHome ":"33,123.52","incomeTax ":"7,194.60","nationalInsurance ":"4,160.88"},
{"id ":30,"gender ":"male ","title ":"Mr. ","firstName ":"Morgan ","surname ":"Taylor ","dob ":"16/09/1993","age ":22,"salary ":"63,299.00","takeHome ":"44,039.12","incomeTax ":"14,722.60","nationalInsurance ":"4,537.28"}]);   
});

// routes for API will happen here

app.use('/employee/details', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API running on port ' + port);