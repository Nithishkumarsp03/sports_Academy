let currentQuoteIndex = 0;
const quotes = document.querySelectorAll('.quote-card');
const totalQuotes = quotes.length;
const quoteSlider = document.querySelector('.quote-slider');

function showNextQuote() {
  // Calculate the new position
  const newTransformValue = -currentQuoteIndex * 100; // Moves the slider horizontally
  quoteSlider.style.transform = `translateX(${newTransformValue}%)`;

  // Update the current index
  currentQuoteIndex = (currentQuoteIndex + 1) % totalQuotes;
}

// Start with the first quote
showNextQuote();

// Change the quote every 5 seconds
setInterval(showNextQuote, 5000);
