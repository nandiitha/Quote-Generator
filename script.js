let quotes = [
  '"The greatest glory in living lies not in never falling, but in rising every time we fall."<br>Nelson Mandela',
  '"The way to get started is to quit talking and begin doing."<br>Walt Disney',
  '"Your time is limited, so don`t waste it living someone else`s life. Don`t be trapped by dogma - which is living with the results of other people`s thinking."<br>Steve Jobs',
  '"The future belongs to those who believe in the beauty of their dreams."<br>Eleanor Roosevelt',
  '"If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success."<br>James Cameron',
  '"You may say I`m a dreamer, but I`m not the only one. I hope someday you`ll join us. And the world will live as one."<br>John Lennon',
  '"The only thing we have to fear is fear itself.Franklin D."<br>Roosevelt',
  '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."<br>Martin Luther King Jr.',
  '"Do one thing every day that scares you."<br>Eleanor Roosevelt',
  '"Well done is better than well said."<br>Benjamin Franklin',
  '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."<br>Helen Keller',
  '"It is during our darkest moments that we must focus to see the light."<br>Aristotle',
  '"Do not go where the path may lead, go instead where there is no path and leave a trail."<br>Ralph Waldo Emerson',
  '"Be yourself; everyone else is already taken."<br>Oscar Wilde',
  '"Either I will find a way, or I will make one."<br>Philip Sidney',
];
function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
