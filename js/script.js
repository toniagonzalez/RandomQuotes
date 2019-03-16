//---Variables----//
  let quoteBlock;
  let index;
  let bgColor;
  const quotebox = document.getElementById('quote-box');
  const container = document.getElementsByClassName('container')[0];
  const pageColor = document.getElementsByTagName('body')[0];
  const loadQuote = document.getElementById('loadQuote');


//---Add Translation Button to the DOM & Hide on Load----//
  //---Create Button----//
  let translateButton = document.createElement('button');
  //---Append Button----//
  container.append(translateButton);
  //---Add Inner Text & ID----//
  translateButton.innerHTML = 'Show Arabic Translation';
  translateButton.id = 'translate';
  //---Select Button and Hide on Load----//
  translateButton = document.getElementById('translate');
  translateButton.style.display = 'none';


//---Array of Quotes with Arabic Translation and Citation----//

let quotes = [
  {
    translation: 'لا يهم كم أنت بطيئ طالما أنك لن تتوقف',
    source: 'Confucius',
    background: 'Chinese Philosopher',
    quote: 'It does not matter how slowly you go as long as you do not stop.'
  },
  {
    translation: 'أرى حياتك بالفعل ، فقط أنتظر وجاهزة لك لجعلها عمل الفنًي',
    source: 'Toni Morrison',
    quote: 'I see your life as already artful, just waiting and ready for you to make it art.',
    citation: 'Wellesley College Commencement',
    year: '2004'
  },
  {
    translation: 'كثير من الناس يفقدون أفراحهم الصغيرة على أمل السعادة الكبيرة',
    source: 'Pearl S. Buck',
    quote: "Many people lose the small joys in the hope for the big happiness."
  },
  {
    translation: 'كيف نقضي أيامنا هو كيف نقضي حياتنا. ما نفعله بهذه الساعة ومع تلك الساعة ، هو ما نفعله',
    source: 'Annie Dillard',
    quote: "How we spend our days is how we spend our lives. What we do with this hour and with that one, is what we are doing",
    citation: 'The Writing Life',
    year: '1989'
  },
  {
    translation: '.الإبداع هو طريقة للحياة، بغض النظر عن مهنتنا أو كيف نكسب معيشتنا',
    source: "Madeleine L'Engle",
    quote: 'Creativity is a way of living life, no matter our vocation or how we earn our living.',
    citation: 'Walking on Water',
    year: '1972'
  }
];


//----Prints Randomly Generated Quote to Document-------//
function printQuote(index) {
      translateButton.style.display = '';
      translateButton.innerText = 'Show Arabic Translation';

      //----Selects Random Index of Object in Quote Array-------//
      function getRandomQuote(min, max) {
                            min = Math.ceil(min);
                            max = Math.floor(max);
                            index = Math.floor(Math.random() * (max-min));
                            return index;
                            };
      getRandomQuote(0,5);

      //----Creates HTML for Quote-------//
      quoteBlock = '';
      quoteBlock += '<p class="quote">' + quotes[index].quote + '</p>';
      quoteBlock += '<p class="quote" id="arabic" dir="rtl" lang="ar">' + quotes[index].translation + '</p>';
      quoteBlock += '<p class="source">' + quotes[index].source;

      if (quotes[index].background) {
        quoteBlock += '<span class="citation">' + quotes[index].background + '</span>';
      }

      if (quotes[index].citation){
        quoteBlock += '<span class="citation">' + quotes[index].citation + '</span>';
      }
      if (quotes[index].year){
      quoteBlock += '<span class="year">' + quotes[index].year + '</span>';
      }
      quoteBlock += '</p>';

      //----Adds innHTML to Quote-box-------//
      quotebox.innerHTML = quoteBlock;
      document.getElementById('arabic').style.display = 'none';

      //----Generate Random BackgroundColor-------//
      function randomBackgroundColor() {
        let r = Math.floor(Math.random() * 100);
        let g = Math.floor(Math.random() * 100);
        let b = Math.floor(Math.random() * 100);
        let bgColor = "rgb(" + r + "," + g + "," + b + ")";
        return bgColor;
      }


      document.getElementsByTagName('body')[0].style.backgroundColor =  randomBackgroundColor();

};

//----Displays New Quote Automatically---//
setInterval(printQuote, 8000);

//----Event Listener for Translation Button-------//
container.addEventListener('click', function(e){

  if (translateButton === e.target){
          if (document.getElementById('arabic').style.display === 'none'){
              document.getElementById('arabic').style.display = 'inherit';
              translateButton.innerText = 'Hide Arabic Translation';
          }
          else {
            document.getElementById('arabic').style.display = 'none';
            translateButton.innerText = 'Show Arabic Translation';
          }
  }
});



//----Event Listener for Load Quote Button Calls Print Quote Function-------//
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
