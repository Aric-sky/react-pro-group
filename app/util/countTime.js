
export default { ShowCountDown }


function ShowCountDown(year,month,day) { // (2019,2,1)
    var now = new Date();
    var endDate = new Date(year, month - 1, day);
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    var dayTime = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - dayTime * 24 * 60 * 60) / 3600);

    var minute = Math.floor((leftsecond - dayTime * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - dayTime * 24 * 60 * 60 - hour * 3600 - minute * 60);
    return {
    	dayTime: dayTime,
    	hour: Rexg(hour),
    	minute: Rexg(minute),
    	second: Rexg(second)
    }
}

function Rexg(data){ //判定一个数字

    var abc = data ;
    var reg = /^\d$/;
    var result = reg.exec(abc);
    if (Boolean(result)) {
        return "0"+abc
    }else{
        return abc
    }

}
