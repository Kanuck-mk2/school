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

// 21. Get Selected Value from a Dropdown
// Retrieves the value of a selected option from a dropdown list.
document.getElementById('getSelectedValue').addEventListener('click', () => {
  const selectedValue = document.getElementById('dropdown').value;
  console.log('Selected value:', selectedValue);
});

// 22. Toggle Class on an Element
// Toggles a specific class on an element each time the button is clicked.
document.getElementById('toggleClass').addEventListener('click', () => {
  document.getElementById('toggleClassElement').classList.toggle('highlight');
});

// 23. Scroll to a Specific Element
// Scrolls smoothly to a specific element when the button is clicked.
document.getElementById('scrollToElement').addEventListener('click', () => {
  document
    .getElementById('scrollTarget')
    .scrollIntoView({ behavior: 'smooth' });
});

// 24. Change Multiple CSS Properties at Once
// Changes multiple styles of an element (like background color and text color).
document
  .getElementById('changeMultipleStyles')
  .addEventListener('click', () => {
    const elem = document.getElementById('multiStyleElement');
    Object.assign(elem.style, {
      backgroundColor: 'lightgreen',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
    });
  });

// 25. Remove All Child Elements
// Removes all child elements from a container element.
document.getElementById('removeChildren').addEventListener('click', () => {
  const container = document.getElementById('childContainer');
  while (container.firstChild) {
    container.removeChild(container.firstChild); // Remove all child nodes
  }
});

// 26. Replace Element Content
// Replaces the content of an element with new content.
document.getElementById('replaceContent').addEventListener('click', () => {
  const elem = document.getElementById('replaceTarget');
  elem.textContent = 'The content has been replaced!';
});

// 27. Count Characters in Input Field
// Counts and displays the number of characters in a text input field.
document.getElementById('inputField').addEventListener('input', () => {
  const charCount = document.getElementById('inputField').value.length;
  document.getElementById(
    'charCounter',
  ).textContent = `Character count: ${charCount}`;
});

// 28. Change Button Text on Click
// Changes the text of a button when it's clicked.
document
  .getElementById('changeButtonText')
  .addEventListener('click', function () {
    this.textContent = 'Button Clicked!';
  });

// 29. Create Element and Insert Before Another
// Creates a new element and inserts it before another existing element.
document.getElementById('insertBefore').addEventListener('click', () => {
  const newElement = document.createElement('p'); // Create a new paragraph element
  newElement.textContent =
    'This paragraph was inserted before another element!';
  const targetElement = document.getElementById('targetForInsert');
  targetElement.parentNode.insertBefore(newElement, targetElement);
});

// 30. Change List Item Content on Click
// Changes the content of list items dynamically when each item is clicked.
document.querySelectorAll('.listItem').forEach((item) => {
  item.addEventListener('click', () => {
    item.textContent = 'Item content updated!';
  });
});

// 31. Display Image on File Input
// Displays a selected image file in an img tag when the file input changes.
document.getElementById('fileInput').addEventListener('change', (event) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('imageDisplay').src = e.target.result;
  };
  reader.readAsDataURL(event.target.files[0]); // Read file as a data URL
});

// 32. Change Element Position
// Moves an element to a new position by adjusting its CSS position.
document.getElementById('moveElement').addEventListener('click', () => {
  const elem = document.getElementById('movableElement');
  elem.style.position = 'relative';
  elem.style.left = '100px'; // Move element 100px to the right
  elem.style.top = '50px'; // Move element 50px down
});

// 33. Disable/Enable Form Fields
// Disables or enables all form fields inside a form.
document.getElementById('toggleFormFields').addEventListener('click', () => {
  const formElements = document.getElementById('myForm').elements;
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = !formElements[i].disabled; // Toggle disabled state
  }
});

// 34. Animate Element (Basic Animation)
// Animates an element to move across the screen.
document.getElementById('animateElement').addEventListener('click', () => {
  const elem = document.getElementById('animatedBox');
  let pos = 0;
  const id = setInterval(frame, 10); // Move every 10ms
  function frame() {
    if (pos === 300) {
      // Stop animation after moving 300px
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = `${pos}px`; // Move element horizontally
    }
  }
});

// 35. Fade In/Out Element (Basic Fade Effect)
// Fades out an element by gradually reducing its opacity.
document.getElementById('fadeOut').addEventListener('click', () => {
  const elem = document.getElementById('fadeElement');
  let opacity = 1;
  const fadeOutEffect = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fadeOutEffect);
    } else {
      opacity -= 0.1;
      elem.style.opacity = opacity; // Reduce opacity
    }
  }, 100); // Fade out over 1 second (100ms steps)
});

document.getElementById('fadeIn').addEventListener('click', () => {
  const elem = document.getElementById('fadeElement');
  let opacity = 0;
  const fadeInEffect = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeInEffect);
    } else {
      opacity += 0.1;
      elem.style.opacity = opacity; // Increase opacity
    }
  }, 100); // Fade in over 1 second
});
