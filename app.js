//Variables
 let quoteBtn_btn = document.querySelector('#quote-btn');
 let quote_span = document.querySelector('.quote');
 let author_div = document.querySelector('.author');

 const quotes = [
    {quote: '“Every child is an artist; the problem is staying an artist when you grow up”', 
    author: 'Pablo Picasso'},
    
    {quote: '“Art is a collaboration between God and the artist, and the less the artist does the better.”',
    author: 'Andre Gide'},
    
    {quote: '“Every artist was first an amateur.”',
    author:'Ralph Waldo Emerson'},
    
    {quote: '“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.”',
    author: 'Georgia O’Keeffe'},
    
    {quote: '“Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.”', 
    author: 'Scott Adams'},
    
    {quote: '“If people knew how hard I worked to get my mastery, it wouldn’t seem so wonderful at all.”', 
    author: 'Michelangelo'},
    
    {quote: '“One can have no smaller or greater mastery than mastery of oneself.”', 
    author: 'Leonardo da Vinci'},
    
    {quote: '“The aim of art is to represent not the outward appearance of things, but their inward significance.”',
    author: 'Aristotle'}];

    quoteBtn_btn.addEventListener('click', function() {

        let randomNumber = Math.floor(Math.random() * quotes.length);

        quote_span.innerText = quotes[randomNumber].quote;
        author_div.innerText = quotes[randomNumber].author;   

    })