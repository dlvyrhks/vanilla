const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    }
];


// ------------------------------------------------------------

// Math.random()은 0부터 1사이의 랜덤한 숫자를 제공해준다.

// Math.random() * 10 은 0부터 10 사이의 숫자를 얻을 수 있다.

// Math.round(1.x)은 .5에서 반올림해준다.

// Math.ceil() 소숫점을 올림해준다.

// Math.floor() 소수점을 내림해준다.

// Math.floor(Math.random() * 10) 은 0에서 9까지의 정수를 얻을 수 있다.

// ------------------------------------------------------------


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;