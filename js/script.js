// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const quotes = [
    {
        quote: "A year from now you will wish you had started today.",
        source: "–  Karen Lamb"
    },
    {
        quote: "I can accept failure, everyone fails at something. But I can’t accept not trying.",
        source: "– Michael Jordan"
    },
    {
        quote: "If work were so pleasant, the rich would keep it for themselves.",
        source: "– Mark Twain"
    },
    {
        quote: "“The best revenge is not to be like your enemy.”",
        source: "– Marcus Aurelius"
    },
    {
        quote: "External thinks are not the problem. It’s your assessment of them. Which you can erase right now.",
        source: "– Marcus Aurelius"
    },
    {
        quote: "Be tolerant with others and strict with yourself.",
        source: "– Marcus Aurelius"
    },
    {
        quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
        source: "– Seneca"
    },
    {
        quote: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.",
        source: "– Epictetus"
    },
    {
        quote: "Know you will win and you will win!",
        source: "– Stephen Richards"
    },
    {
        quote: "If we don't change, we don't grow. If we don't grow, we aren't really living.",
        source: "– Gail Sheehy"
    }
];

const getRandomQuote = (quotes) => {
    const randomQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];
    return randomQuote;
};

const printQuote = () => {
    const quote = getRandomQuote(quotes); 
    const quoteBoxInnerHtml = `<p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}</p>`;
    document.getElementById('quote-box').innerHTML = quoteBoxInnerHtml;
    if (document.querySelector('.quote').textContent.length > 40) {
        document.querySelector('.quote').style.fontSize = '3em';
    }
}

document.getElementById('loadQuote').addEventListener("click", printQuote);

