function datesUntilXmas() {
    let now = new Date();
    let newYear = new Date('December 25, ' + (now.getFullYear()));
    let diff = newYear - now;
    let milliseconds = Math.floor(diff % 1000);
    diff = diff / 1000;
    let seconds = Math.floor(diff % 60);
    diff = diff / 60;
    let minutes = Math.floor(diff % 60);
    diff = diff / 60;
    let hours = Math.floor(diff % 24);
    diff = diff / 24;
    let days = Math.floor(diff);
    let outStr = '<h3>크리스마스까지 ' + days + '일, ' + hours + '시간, '
    + minutes;
    outStr += '분, ' + seconds + '초</h3>';
    document.getElementById('d-day').innerHTML = outStr;
    // 1초가 지나면 다시 함수를 호출한다.
    setTimeout("datesUntilXmas()", 1000);
    }
    // 타이머를 시작한다.
    datesUntilXmas()
