const jsonData1 = `[{"id":1,"first_name":"Amaleta","last_name":"Doumer","email":"adoumer0@ca.gov","gender":"Female","salary":13363},
{"id":2,"first_name":"Corrie","last_name":"McLucky","email":"cmclucky1@sakura.ne.jp","gender":"Male","salary":12318},
{"id":3,"first_name":"Eddy","last_name":"Butchard","email":"ebutchard2@army.mil","gender":"Polygender","salary":19600},
{"id":4,"first_name":"Giulietta","last_name":"Wherry","email":"gwherry3@usda.gov","gender":"Female","salary":15636},
{"id":5,"first_name":"Torry","last_name":"Tockell","email":"ttockell4@eepurl.com","gender":"Male","salary":15952},
{"id":6,"first_name":"Taite","last_name":"Kubalek","email":"tkubalek5@parallels.com","gender":"Male","salary":19233},
{"id":7,"first_name":"Marrilee","last_name":"Lesmonde","email":"mlesmonde6@umich.edu","gender":"Female","salary":17174},
{"id":8,"first_name":"Jenica","last_name":"Hoult","email":"jhoult7@fotki.com","gender":"Female","salary":8620},
{"id":9,"first_name":"Berry","last_name":"Richardon","email":"brichardon8@de.vu","gender":"Female","salary":10603},
{"id":10,"first_name":"Inglebert","last_name":"Witheford","email":"iwitheford9@studiopress.com","gender":"Male","salary":15539},
{"id":11,"first_name":"Damien","last_name":"Upshall","email":"dupshalla@msn.com","gender":"Male","salary":4475},
{"id":12,"first_name":"Monti","last_name":"Pilger","email":"mpilgerb@fc2.com","gender":"Male","salary":5934},
{"id":13,"first_name":"Chiquia","last_name":"Tipperton","email":"ctippertonc@blinklist.com","gender":"Female","salary":5595},
{"id":14,"first_name":"Hadleigh","last_name":"Plume","email":"hplumed@flavors.me","gender":"Male","salary":3160},
{"id":15,"first_name":"Julian","last_name":"Carlile","email":"jcarlilee@google.com.br","gender":"Male","salary":5978},
{"id":16,"first_name":"Eleanore","last_name":"Trematick","email":"etrematickf@blog.com","gender":"Female","salary":4426},
{"id":17,"first_name":"Hester","last_name":"Conkay","email":"hconkayg@google.es","gender":"Female","salary":9428},
{"id":18,"first_name":"Waldon","last_name":"Scourge","email":"wscourgeh@topsy.com","gender":"Male","salary":10671},
{"id":19,"first_name":"Lorenzo","last_name":"Trosdall","email":"ltrosdalli@ask.com","gender":"Male","salary":17371},
{"id":20,"first_name":"Rubin","last_name":"Lesly","email":"rleslyj@hexun.com","gender":"Male","salary":10973},
{"id":21,"first_name":"Kin","last_name":"Asbery","email":"kasberyk@storify.com","gender":"Male","salary":15341},
{"id":22,"first_name":"Ariadne","last_name":"Cettell","email":"acettelll@e-recht24.de","gender":"Female","salary":13276},
{"id":23,"first_name":"Torin","last_name":"Rintoul","email":"trintoulm@cocolog-nifty.com","gender":"Male","salary":13019},
{"id":24,"first_name":"Den","last_name":"Vogl","email":"dvogln@craigslist.org","gender":"Male","salary":16939},
{"id":25,"first_name":"Sally","last_name":"Kinsell","email":"skinsello@fc2.com","gender":"Agender","salary":2737},
{"id":26,"first_name":"Bradford","last_name":"Wetter","email":"bwetterp@rakuten.co.jp","gender":"Male","salary":15151},
{"id":27,"first_name":"Mathian","last_name":"Lamke","email":"mlamkeq@deliciousdays.com","gender":"Male","salary":8399},
{"id":28,"first_name":"Rena","last_name":"Petrescu","email":"rpetrescur@pbs.org","gender":"Female","salary":17562},
{"id":29,"first_name":"Madeleine","last_name":"Wagstaff","email":"mwagstaffs@amazon.com","gender":"Female","salary":6725},
{"id":30,"first_name":"Janeva","last_name":"Minifie","email":"jminifiet@jimdo.com","gender":"Female","salary":12965},
{"id":31,"first_name":"Amargo","last_name":"Edmands","email":"aedmandsu@samsung.com","gender":"Female","salary":8067},
{"id":32,"first_name":"Avrit","last_name":"McCunn","email":"amccunnv@abc.net.au","gender":"Female","salary":8091},
{"id":33,"first_name":"Joachim","last_name":"Giovanizio","email":"jgiovaniziow@statcounter.com","gender":"Male","salary":10157},
{"id":34,"first_name":"Gaston","last_name":"Doorbar","email":"gdoorbarx@epa.gov","gender":"Male","salary":12853},
{"id":35,"first_name":"Harbert","last_name":"Tollady","email":"htolladyy@simplemachines.org","gender":"Male","salary":5755},
{"id":36,"first_name":"Town","last_name":"Beade","email":"tbeadez@shinystat.com","gender":"Bigender","salary":18374},
{"id":37,"first_name":"Alayne","last_name":"Jelkes","email":"ajelkes10@auda.org.au","gender":"Female","salary":10781},
{"id":38,"first_name":"Dalton","last_name":"Stephen","email":"dstephen11@yellowpages.com","gender":"Male","salary":11243},
{"id":39,"first_name":"Anthony","last_name":"Scarratt","email":"ascarratt12@pcworld.com","gender":"Male","salary":19714},
{"id":40,"first_name":"Conroy","last_name":"Mulbery","email":"cmulbery13@arstechnica.com","gender":"Male","salary":11557},
{"id":41,"first_name":"Valida","last_name":"De Hooch","email":"vdehooch14@microsoft.com","gender":"Female","salary":11190},
{"id":42,"first_name":"Hallie","last_name":"De Gowe","email":"hdegowe15@jigsy.com","gender":"Female","salary":11296},
{"id":43,"first_name":"Vin","last_name":"Coombe","email":"vcoombe16@stumbleupon.com","gender":"Male","salary":17362},
{"id":44,"first_name":"Maire","last_name":"Runcieman","email":"mruncieman17@blogspot.com","gender":"Female","salary":12698},
{"id":45,"first_name":"Elmira","last_name":"Searchfield","email":"esearchfield18@kickstarter.com","gender":"Female","salary":2035},
{"id":46,"first_name":"Barnabe","last_name":"Glennon","email":"bglennon19@cnet.com","gender":"Male","salary":17662},
{"id":47,"first_name":"Skye","last_name":"Schuck","email":"sschuck1a@so-net.ne.jp","gender":"Male","salary":8561},
{"id":48,"first_name":"Kathleen","last_name":"Jozwik","email":"kjozwik1b@dell.com","gender":"Female","salary":9514},
{"id":49,"first_name":"Arnuad","last_name":"Ricketts","email":"aricketts1c@businessweek.com","gender":"Non-binary","salary":17318},
{"id":50,"first_name":"Cobbie","last_name":"Lemery","email":"clemery1d@about.com","gender":"Male","salary":13049},
{"id":51,"first_name":"Sutherland","last_name":"Neiland","email":"sneiland1e@tinyurl.com","gender":"Male","salary":9731},
{"id":52,"first_name":"Denys","last_name":"Millson","email":"dmillson1f@networksolutions.com","gender":"Male","salary":13228},
{"id":53,"first_name":"Cobb","last_name":"Aphale","email":"caphale1g@usnews.com","gender":"Male","salary":18331},
{"id":54,"first_name":"Sharla","last_name":"Madsen","email":"smadsen1h@sbwire.com","gender":"Female","salary":9767},
{"id":55,"first_name":"Paolo","last_name":"Cotty","email":"pcotty1i@answers.com","gender":"Non-binary","salary":12189},
{"id":56,"first_name":"Kailey","last_name":"De Gowe","email":"kdegowe1j@rambler.ru","gender":"Bigender","salary":4406},
{"id":57,"first_name":"Caresse","last_name":"Eede","email":"ceede1k@tumblr.com","gender":"Female","salary":6753},
{"id":58,"first_name":"Garry","last_name":"Garrique","email":"ggarrique1l@wikipedia.org","gender":"Male","salary":10958},
{"id":59,"first_name":"Heriberto","last_name":"Coste","email":"hcoste1m@scientificamerican.com","gender":"Male","salary":5423},
{"id":60,"first_name":"Celie","last_name":"Ulyat","email":"culyat1n@imageshack.us","gender":"Genderfluid","salary":10801},
{"id":61,"first_name":"Kylie","last_name":"Dignan","email":"kdignan1o@mlb.com","gender":"Male","salary":18253},
{"id":62,"first_name":"Nike","last_name":"I'anson","email":"nianson1p@hc360.com","gender":"Female","salary":4559},
{"id":63,"first_name":"Charlean","last_name":"Dannehl","email":"cdannehl1q@networksolutions.com","gender":"Genderfluid","salary":4075},
{"id":64,"first_name":"Davine","last_name":"Abate","email":"dabate1r@over-blog.com","gender":"Female","salary":16686},
{"id":65,"first_name":"Fianna","last_name":"Hewins","email":"fhewins1s@diigo.com","gender":"Female","salary":17273},
{"id":66,"first_name":"Thor","last_name":"Everil","email":"teveril1t@columbia.edu","gender":"Male","salary":9210},
{"id":67,"first_name":"Silas","last_name":"Kinde","email":"skinde1u@utexas.edu","gender":"Male","salary":13644},
{"id":68,"first_name":"Lazarus","last_name":"Roizin","email":"lroizin1v@spiegel.de","gender":"Male","salary":4284},
{"id":69,"first_name":"Padriac","last_name":"Feak","email":"pfeak1w@eventbrite.com","gender":"Male","salary":13272},
{"id":70,"first_name":"Shayne","last_name":"Bottrell","email":"sbottrell1x@spotify.com","gender":"Female","salary":15439},
{"id":71,"first_name":"Irena","last_name":"Barends","email":"ibarends1y@economist.com","gender":"Female","salary":15832},
{"id":72,"first_name":"Rem","last_name":"Orris","email":"rorris1z@squarespace.com","gender":"Male","salary":8661},
{"id":73,"first_name":"Carline","last_name":"Fowls","email":"cfowls20@geocities.com","gender":"Genderfluid","salary":6683},
{"id":74,"first_name":"Immanuel","last_name":"Leggis","email":"ileggis21@domainmarket.com","gender":"Male","salary":9802},
{"id":75,"first_name":"Padget","last_name":"Furse","email":"pfurse22@cisco.com","gender":"Male","salary":3043},
{"id":76,"first_name":"Jennica","last_name":"De-Ville","email":"jdeville23@parallels.com","gender":"Female","salary":2814},
{"id":77,"first_name":"Tanhya","last_name":"Bice","email":"tbice24@wordpress.com","gender":"Female","salary":4649},
{"id":78,"first_name":"Griff","last_name":"Yendall","email":"gyendall25@ameblo.jp","gender":"Male","salary":5847},
{"id":79,"first_name":"Maegan","last_name":"Kepp","email":"mkepp26@si.edu","gender":"Female","salary":10195},
{"id":80,"first_name":"Row","last_name":"Orgel","email":"rorgel27@sphinn.com","gender":"Female","salary":8119},
{"id":81,"first_name":"Richmound","last_name":"Franey","email":"rfraney28@exblog.jp","gender":"Male","salary":12073},
{"id":82,"first_name":"Ashil","last_name":"Tatton","email":"atatton29@theguardian.com","gender":"Female","salary":2232},
{"id":83,"first_name":"Lindy","last_name":"Woodford","email":"lwoodford2a@wisc.edu","gender":"Female","salary":16455},
{"id":84,"first_name":"Gerard","last_name":"Andersson","email":"gandersson2b@sitemeter.com","gender":"Male","salary":11792},
{"id":85,"first_name":"Cordula","last_name":"Metcalfe","email":"cmetcalfe2c@home.pl","gender":"Female","salary":11973},
{"id":86,"first_name":"Brina","last_name":"Kunkel","email":"bkunkel2d@tripadvisor.com","gender":"Female","salary":5361},
{"id":87,"first_name":"Vivie","last_name":"Glozman","email":"vglozman2e@soundcloud.com","gender":"Female","salary":19005},
{"id":88,"first_name":"Jared","last_name":"Ferries","email":"jferries2f@npr.org","gender":"Male","salary":16579},
{"id":89,"first_name":"Gerry","last_name":"Hurkett","email":"ghurkett2g@goo.ne.jp","gender":"Male","salary":13594},
{"id":90,"first_name":"Guntar","last_name":"Scrannage","email":"gscrannage2h@liveinternet.ru","gender":"Male","salary":10813},
{"id":91,"first_name":"Cody","last_name":"Brazear","email":"cbrazear2i@bloglines.com","gender":"Male","salary":13171},
{"id":92,"first_name":"Lucienne","last_name":"Mugleston","email":"lmugleston2j@dailymail.co.uk","gender":"Female","salary":18461},
{"id":93,"first_name":"Jobina","last_name":"Darlow","email":"jdarlow2k@cloudflare.com","gender":"Female","salary":15331},
{"id":94,"first_name":"Almeta","last_name":"Hedling","email":"ahedling2l@netscape.com","gender":"Female","salary":8224},
{"id":95,"first_name":"Elsy","last_name":"Oakley","email":"eoakley2m@springer.com","gender":"Polygender","salary":2133},
{"id":96,"first_name":"Gus","last_name":"Hulles","email":"ghulles2n@behance.net","gender":"Male","salary":6869},
{"id":97,"first_name":"Adelaida","last_name":"Buterton","email":"abuterton2o@adobe.com","gender":"Female","salary":5688},
{"id":98,"first_name":"Aggi","last_name":"Mohan","email":"amohan2p@ihg.com","gender":"Female","salary":13716},
{"id":99,"first_name":"Horton","last_name":"Corradetti","email":"hcorradetti2q@mayoclinic.com","gender":"Male","salary":19228},
{"id":100,"first_name":"Florina","last_name":"Charnley","email":"fcharnley2r@friendfeed.com","gender":"Female","salary":3145}]`;

//합계,평균....을 구하는 함수
function getMemberInfo(memberAry) {
  let sum = 0; //memberAry급여 합
  let sumOfMale = 0;
  let avg = 0; //전체평균
  let avgOfMale = 0; //남자평균
  let cntOfMale = 0;
  // for (let i = 0; i < memberAry.length; i++) {
  //   sum += memberAry[i].salary;
  // }
  for (let elem of memberAry) {
    sum += elem.salary;
    if (elem.gender == "Male") {
      sumOfMale += elem.salary;
      cntOfMale++;
    }
  }
  avg = sum / memberAry.length; //전체 평균
  avgOfMale = sumOfMale / cntOfMale; //남자 평균

  //객체.
  return {
    sum,
    sumOfMale,
    avg,
    avgOfMale,
  }; //속성과 변수의 이름이 같으면 하나로 줄여서 사용해도 된다.
} // end of getMemberInfo

const ary1 = JSON.parse(jsonData1); //문자열 -> 객체 변환
let result = getMemberInfo(ary1);
console.log(result);

console.log(
  `모든사원의 월급의 합은 ${result.sum}원이고 평균은 ${result.avg}원입니다.`
);
console.log(
  `남자사원의 월급 합은 ${result.sumOfMale}원이고 평균은 ${result.avgOfMale}원입니다.`
);

let jsonStr = `{"name" : "Hong","age": 20 ,"weight" : 67}`;
let obj = JSON.parse(jsonStr);
let jsonStr2 = JSON.stringify(obj); //객체 -> 문자열
console.log(jsonStr);
console.log(obj);
console.log(jsonStr2);
