/// -----------------------------------------------------------------------
// 링크를 클릭했을 때 새로고침해서 url로 들어가는 것을 막을 수 있다.

const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    // console.log(event);
    // console.dir(event);
    // alert("clicked!");
}

// link.addEventListener("click", handleLinkClick);

/// -----------------------------------------------------------------------



/// -----------------------------------------------------------------------

function onLoginBtnClick() {
    // dir은 object를 보여준다.
    // console.dir(loginInput);

    // 로그인 폼에 입력한 값이 콜솔에 출력한다.
    // console.log(loginInput.value);
    
    // 버튼을 클릭했을 때 콘솔에 클릭됨을 보여준다.
    // console.log("clicked!!!");

 
    // 조건문을 통해 아무런 입력이 없으면 입력해야하고,
    // 15자 이상이면 너무 길다고 경고를 내보낸다.

    // 길이를 알고 싶을 때는 length라는 함수를 이용할 수 있다.

    // const username = loginInput.value;
 
    // html에서도 가능하기 때문에 자바스크립트에서는 사용하지 않는다.
    // input 에 requied와 maxlength를 사용하면 이 조건문을 사용하지 않아도 된다.
    // 그리고 태그를 form 으로 바꿔줘야 유효성을 검사할 수 있다.

    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }

    // console.log(username);

}

// loginButton.addEventListener("click", onLoginBtnClick);


/// -----------------------------------------------------------------------

// 로컬스토리지에 저장 불러오기 제거 하는 방법
// localStorage.setItem(USERNAME_KEY, username);
// localStorage.getItem(USERNAME_KEY);
// localStorage.removeItem(USERNAME_KEY);

/// -----------------------------------------------------------------------

// [document 로 id 를 찾고 그걸 이용해서 변수를 만드는 방법 - 1]
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// [document 로 querySelector 를 한번에 찾는 방법 - 2]
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


/// -----------------------------------------------------------------------

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);

    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;

    // 히든을 리무브해야 h1태그가 나온다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/// -----------------------------------------------------------------------


function onLoginSubmit(event) {
    // console.log(event);
    // console.log(loginInput.value);
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);

    localStorage.setItem(USERNAME_KEY, username);
    
    paintGreetings();

}


/// -----------------------------------------------------------------------

// 로컬스토리지에 유저네임이 저장되어 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
    // show the form
    // 히든을 리무브해야 로그인 폼이 나온다.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();
}

/// -----------------------------------------------------------------------