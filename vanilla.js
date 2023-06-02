var  QuoteArray = [
    'Believe you can and you\’re halfway there.',
    'The two most important days in your life are the day you are born and the day you find out why.',
    "I have not failed. I’ve just found 10,000 ways that won’t work.",
    "I am the Special One.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "I've failed over and over and over again in my life. And that is why I succeed.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "If you want to lift yourself up, lift up someone else.",
    "Don't pray for easy lives, pray to be stronger men.",
    "Our children may learn about heroes of the past. Our task is to make ourselves architects of the future.",
    "Si ni mimi nakushow",
    "The future of Africa is in our hands to shape as we like.",
    "Africa is our center of gravity, our cultural and spiritual mother, in a sense, our beating heart.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "We did not come to fear the future. We came here to shape it.",
    "I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "You have to be fearless and take chances. Don't live life fearing what comes next. That's not what living is about.",
    "If you want something said, ask a man; if you want something done, ask a woman.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "No matter how beautiful and well-crafted a coffin might look, it will not make anyone wish for death.",
    "If you think you are too small to make a difference, you haven't spent a night with a mosquito.",

];
var QuoteOwner = [
    "Theodore Roosevelt",
    "Mark Twain",
    "Thomas Edison",
    "Jose Mourinho",
    "Abraham Lincoln",
    "Michael Jordan",
    "Dwayne \"The Rock\" Johnson",
    "Booker T. Washington",
    "John F. Kennedy",
    "Jomo Kenyatta",
    "A typical Kenyan",
    "Wangari Maathai",
    "Julius Nyerere",
    "Nelson Mandela",
    "Barack Obama",
    "Martin Luther King Jr.",
    "Robert Frost",
    "Marilyn Monroe",
    "Beyoncé",
    "Margaret Thatcher",
    "Eleanor Roosevelt",
    "African Proverb",
    "African Proverb",
]

//create a function to generate the quotes
function generateQuote() {
    let quoteNumber = Math.floor(Math.random() * QuoteArray.length);
    //display on the console
    // console.log(QuoteArray[quoteNumber]);
    //display on the html document
    document.getElementById("demo").innerHTML = QuoteArray[quoteNumber];
    document.getElementById("owner").innerHTML = QuoteOwner[quoteNumber];
    //add a bold font to the author 
    document.getElementById("owner").classList.add("bold");
}


