const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html에 추가할때는 createElement을 사용해서 <img> 태그를 만들어준다.
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);


// prepend는 앞에 appendChild 뒤에 <img src="img/1.jpg">를 붙여준다.
document.body.appendChild(bgImage);
