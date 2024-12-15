const clock = document.querySelector("h2#clock");

// clock.innerText = ""

// ---------------------------------------------------------------

// function sayHello() {
//     console.log("hello");
// }


// 인터벌은 함수와 초(ms)를 받는데 몇 초에 한번씩 함수가 실행된다.
// setInterval(sayHello, 5000);
// 타임아웃은 함수와 초(ms)를 받는데 몇 초후에 함수가 한번만 실행된다.
// setTimeout(sayHello, 5000);

// ---------------------------------------------------------------


// .padStart(2, "0") 함수는 2자리수가 아니라면 앞에 스트링 0 을 붙여준다.
// .padEnd(2, "0") 함수는 2자리수가 아니라면 뒤에 스트링 0 을 붙여준다.
// 시간이라는 숫자도 스트링으로 만들어줬다.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


// 바로시작하기 위해서 함수를 시작한다.
getClock()
// 1초후에 시작되는 함수이다.
setInterval(getClock, 1000);