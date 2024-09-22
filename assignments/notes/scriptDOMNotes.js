// 1. Change Text Content of an Element
// This changes the text content of a paragraph when a button is clicked.
document.getElementById('changeText').addEventListener('click', () => {
  document.getElementById('text').textContent = 'This is the new text!';
});

// 2. Change Background Color
// This changes the background color of a div when the button is clicked.
document.getElementById('changeColor').addEventListener('click', () => {
  document.getElementById('colorBox').style.backgroundColor = 'lightblue';
});

// 3. Toggle Visibility of an Element
// This toggles the visibility of an element by changing its display style.
document.getElementById('toggleVisibility').addEventListener('click', () => {
  const elem = document.getElementById('box');
  // Check if element is visible or hidden and toggle accordingly
  elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
});

// 4. Add New List Item to a UL
// This adds a new list item to a UL when the button is clicked.
document.getElementById('addListItem').addEventListener('click', () => {
  const newItem = document.createElement('li'); // Create a new list item (li)
  newItem.textContent = 'New List Item'; // Set text content of the new item
  document.getElementById('list').appendChild(newItem); // Append it to the UL
});

// 5. Remove Last List Item from a UL
// This removes the last list item from the UL.
document.getElementById('removeListItem').addEventListener('click', () => {
  const list = document.getElementById('list');
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild); // Remove the last list item if it exists
  }
});

// 6. Change Image Source
// This changes the image source (src) of an <img> element when clicked.
document.getElementById('changeImage').addEventListener('click', () => {
  document.getElementById('image').src = 'https://via.placeholder.com/150';
});

// 7. Log Input Value
// This logs the value of an input field to the console when the button is clicked.
document.getElementById('logInput').addEventListener('click', () => {
  const inputValue = document.getElementById('inputField').value;
  console.log('Input Value:', inputValue);
});

// 8. Change Paragraph Style
// This changes the font size and color of a paragraph when the button is clicked.
document.getElementById('changeStyle').addEventListener('click', () => {
  const para = document.getElementById('styledParagraph');
  para.style.color = 'red';
  para.style.fontSize = '24px';
});

// 9. Count Button Clicks
// This counts how many times a button is clicked and displays the count.
let clickCount = 0;
document.getElementById('countClicks').addEventListener('click', () => {
  clickCount++;
  document.getElementById(
    'clickCounter',
  ).textContent = `Button clicked ${clickCount} times`;
});

// 10. Show/Hide Element on Button Click
// Toggles visibility between "hidden" and "visible" when a button is clicked.
document.getElementById('showHide').addEventListener('click', () => {
  const elem = document.getElementById('hiddenElement');
  elem.style.visibility =
    elem.style.visibility === 'hidden' ? 'visible' : 'hidden';
});

// 11. Add Class to an Element
// Adds a class to an element to apply custom styles when the button is clicked.
document.getElementById('addClass').addEventListener('click', () => {
  document.getElementById('classElement').classList.add('highlight');
});

// 12. Remove Class from an Element
// Removes a class from an element to revert its styles.
document.getElementById('removeClass').addEventListener('click', () => {
  document.getElementById('classElement').classList.remove('highlight');
});

// 13. Disable/Enable Button
// Disables a button after the first click and enables it again after 3 seconds.
document.getElementById('disableButton').addEventListener('click', function () {
  const button = this;
  button.disabled = true; // Disable button
  setTimeout(() => {
    button.disabled = false; // Enable button after 3 seconds
  }, 3000);
});

// 14. Create and Append a New Paragraph
// Creates a new paragraph element and appends it to the body.
document.getElementById('addParagraph').addEventListener('click', () => {
  const newPara = document.createElement('p'); // Create new <p> element
  newPara.textContent = 'This is a dynamically added paragraph!'; // Set its content
  document.body.appendChild(newPara); // Append to the body
});

// 15. Change Input Placeholder
// Changes the placeholder text of an input field on button click.
document.getElementById('changePlaceholder').addEventListener('click', () => {
  document.getElementById('inputPlaceholder').placeholder =
    'New placeholder text';
});

// 16. Change Element HTML Content
// Changes the inner HTML content of a div element on button click.
document.getElementById('changeHTML').addEventListener('click', () => {
  document.getElementById('htmlContent').innerHTML = '<b>New bold content!</b>';
});

// 17. Clone an Element
// Clones an element and appends the cloned version to the body.
document.getElementById('cloneElement').addEventListener('click', () => {
  const elem = document.getElementById('elementToClone');
  const clone = elem.cloneNode(true); // Clone the element
  document.body.appendChild(clone); // Append the clone to the body
});

// 18. Set Element Attributes
// Adds or changes attributes of an element, such as id, title, etc.
document.getElementById('setAttributes').addEventListener('click', () => {
  const elem = document.getElementById('attrElement');
  elem.setAttribute('title', 'New Tooltip');
  elem.setAttribute('data-info', 'Additional info added');
});

// 19. Smooth Scroll to Top
// Smoothly scrolls the page to the top when the button is clicked.
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 20. Change Font Size Dynamically
// Increases or decreases font size of an element based on button clicks.
let fontSize = 16;
document.getElementById('increaseFontSize').addEventListener('click', () => {
  fontSize += 2;
  document.getElementById('resizableText').style.fontSize = `${fontSize}px`;
});
document.getElementById('decreaseFontSize').addEventListener('click', () => {
  fontSize -= 2;
  document.getElementById('resizableText').style.fontSize = `${fontSize}px`;
});
