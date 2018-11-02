let heading = document.querySelector('h1');
let extra = document.querySelector('.extra');
let description = document.querySelector('.desc');
let list = document.querySelector('ul');
let listItem = document.createElement('li');
let inputCollection = document.querySelectorAll('input');
let button = document.createElement('button');

// 1: Set the text of the <h1> element
heading.textContent = 'That text have been setted from JS !';

// 2: Set the color of the <h1> to a different color
heading.style.color = 'rebeccaPurple';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
description.innerHTML = `That content is <strong> STRONG !</strong>`;

// 4: Set the class of the <ul> to 'list'
list.classList.add('list');

// 5: Create a new list item and add it to the <ul>
list.append(listItem);

// 6: Change all <input> elements from text fields to checkboxes
inputCollection.forEach(input => input.type = 'checkbox');

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
button.textContent = 'Delete';
extra.append(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener('click', (e) => {
    extra.remove();
})