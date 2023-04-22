const paragraph = document.querySelector(".para");

const words = paragraph.textContent.trim().split(" ");

words.forEach((word, index) => {
  // If the word is longer than 8 characters
  if (word.length > 8) {
    // Create a new span element
    const span = document.createElement("span");
    span.textContent = word;
    span.style.backgroundColor = "yellow";
    // Replace the word in the paragraph with the span element
    paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
  }
});
