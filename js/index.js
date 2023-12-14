var quote = document.getElementById("quote");
var author = document.getElementById("author");
var array = [
    {
        'author': '- Oscar Wilde',
        'quote': '\“Be yourself; everyone else is already taken.”'
    },
    {
        'author': '- Frank Zappa',
        'quote': '\“So many books, so little time.”'
    },
    {
        'author': '- Marcus Tullius Cicero',
        'quote': '\“A room without books is like a body without a soul.”'
    },
    {
        'author': '- Mae West',
        'quote': '\“You only live once, but if you do it right, once is enough.”'
    },
    {
        'author': '- Mahatma Gandhi',
        'quote': '\“If you tell the truth, you don\'t have to remember anything.”'
    },
    {
        'author': '- Stephen Chbosky',
        'quote': '\“We accept the love we think we deserve.”'
    },
    {
        'author': '- Friedrich Nietzsche',
        'quote': '\“Without music, life would be a mistake.”'
    },
]

function show() {
    var random = Math.floor(Math.random() * array.length);
    console.log(random)
    console.log(array.length)
    if(array.length === 0){
        array = [
            {
                'author': '- Oscar Wilde',
                'quote': '\“Be yourself; everyone else is already taken.”'
            },
            {
                'author': '- Frank Zappa',
                'quote': '\“So many books, so little time.”'
            },
            {
                'author': '- Marcus Tullius Cicero',
                'quote': '\“A room without books is like a body without a soul.”'
            },
            {
                'author': '- Mae West',
                'quote': '\“You only live once, but if you do it right, once is enough.”'
            },
            {
                'author': '- Mahatma Gandhi',
                'quote': '\“If you tell the truth, you don\'t have to remember anything.”'
            },
            {
                'author': '- Stephen Chbosky',
                'quote': '\“We accept the love we think we deserve.”'
            },
            {
                'author': '- Friedrich Nietzsche',
                'quote': '\“Without music, life would be a mistake.”'
            },
        ]
    }
    quote.innerHTML = array[random].quote;
    author.innerHTML = array[random].author;
    array.splice(random, 1);
}