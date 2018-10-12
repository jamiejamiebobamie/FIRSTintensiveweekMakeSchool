
var startTime = new Date();
var endTime;


const milliD = 86400000;
const milliH = 3600000;
const milliM = 60000;
const milliS = 1000;


//function start() {
//  startTime = new Date();
//};

//function end() {
//  endTime = new Date();
//  var timeDiff = endTime - startTime;

//}
//<button onclick="start()">Start</button>
//
//<button onclick="end()">End</button>

var switchT = false;

function switchTimer(){
    while(switchT == false){
        endTime = new Date();
        var time_diff = endTime - startTime;
        var milli = time_diff;

        function returnDays(milli){
            if (milli > milliD) {
                var days = Math.floor(milli/milliD);
                return days;
            } else {
                return 0;
            }};

        function returnHours(milli){
            if (milli > milliH){
                var hours = Math.floor(milli/milliH);
                return hours;
            }else{
                return 0;
            }};

        function returnMin(milli){
            if (milli > milliM){
                var minutes = Math.floor(milli/milliM);
                return minutes;
            }else{
                return 0;
            }};

        function returnSec(milli){
            if (milli > milliS){
                var seconds = Math.floor(milli/milliS);
                return seconds;
            }else{
                return 0;
            }};


        var d = returnDays(milli);
        var h = returnHours(milli - (d * milliD));
        var m = returnMin(milli - (d * milliD)-(h * milliH));
        var s = returnSec(milli - (d * milliD)-(h * milliH)-(m * milliM));
        var millisec = milli - (d * milliD)-(h * milliH)-(m * milliM)-(s*milliS);

        console.log(`${d} : ${h} : ${m} : ${s} : ${millisec}`);
    };
    startTime = new Date();
    };



switchTimer();


//console.log(Date.now())
