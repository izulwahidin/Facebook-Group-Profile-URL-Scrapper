// Creating an array of href values and filtering unwanted URLs
let members = [...document.querySelectorAll('div[role=listitem] a[role=link][tabindex="-1"]')]
  .map((e) => e.href)
  .filter((href) => !href.includes("user") && !href.includes("group"));

// Remove duplicates from the array
members = [...new Set(members)];

// Convert the array to a text string with each href on a new line
let textContent = members.join('\n');

// Create a Blob containing the text data
const blob = new Blob([textContent], { type: 'text/plain' });

// Create a link element to trigger the download
const link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'members.txt';

// Trigger the click event to start the download
link.click();
