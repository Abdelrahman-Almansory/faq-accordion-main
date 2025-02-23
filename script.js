"use strict";

let headers = document.querySelectorAll(".icon");
let content = document.querySelectorAll(".accordion-content");

// Loop through every button
headers.forEach(function (header, index) {
  header.addEventListener("click", function () {
    // Close all other sections & remove 'minus' class from all headers
    headers.forEach((btn) => btn.classList.remove("minus")); // Remove 'minus' class from all headers
    content.forEach((section, i) => {
      if (i !== index) {
        section.style.maxHeight = null;
        section.classList.remove("open");
      }
    });

    let clickedContent = content[index];

    if (clickedContent.classList.contains("open")) {
      clickedContent.style.maxHeight = null;
      clickedContent.classList.remove("open");
      header.classList.remove("minus"); // Remove 'minus' class when closing
    } else {
      clickedContent.style.maxHeight = clickedContent.scrollHeight + "px";
      clickedContent.classList.add("open");
      header.classList.add("minus"); // Add 'minus' class when opening
    }
  });
});
