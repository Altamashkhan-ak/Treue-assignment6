
    // Get the grid container element
    var grid = document.querySelector(".grid");

    // Get the modal element
    var modal = document.querySelector(".modal");

    // Get the image element inside the modal
    var modalImage = document.querySelector(".modal-image");

    // Get the caption element inside the modal
    var modalCaption = document.querySelector(".modal-caption");

    // Get the navigation buttons inside the modal
    var modalButtonLeft = document.querySelector(".modal-button-left");
    var modalButtonRight = document.querySelector(".modal-button-right");

    // Get all the thumbnail images in an array
    var images = Array.from(grid.querySelectorAll("img"));

    // Keep track of the current image index
    var currentIndex;

    // Add a click event listener to the grid container
    grid.addEventListener("click", function(event) {
      // If the clicked element is an image
      if (event.target.tagName === "IMG") {
        // Get the source and caption of the larger image from the data attributes
        var src = event.target.dataset.src;
        var caption = event.target.dataset.caption;

        // Set the source and caption of the image element inside the modal
        modalImage.src = src;
        modalCaption.textContent = caption;

        // Show the modal element
        modal.style.display = "block";

        // Get the index of the current image
        currentIndex = images.indexOf(event.target);
      }
    });

    // Add a click event listener to the modal element
    modal.addEventListener("click", function(event) {
      // If the clicked element is not an image or a button
      if (event.target.tagName !== "IMG" && event.target.tagName !== "BUTTON") {
        // Hide the modal element
        modal.style.display = "none";
      }
    });

    // Add a click event listener to the left button
    modalButtonLeft.addEventListener("click", function() {
      // Decrease the current index by one
      currentIndex--;

      // If the current index is less than zero, wrap it to the last index
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }

      // Get the source and caption of the larger image from the data attributes of the previous image
      var src = images[currentIndex].dataset.src;
      var caption = images[currentIndex].dataset.caption;

      // Set the source and caption of the image element inside the modal
      modalImage.src = src;
      modalCaption.textContent = caption;
    });

    // Add a click event listener to the right button
    modalButtonRight.addEventListener("click", function() {
      // Increase the current index by one
      currentIndex++;

      // If the current index is greater than or equal to the length of the images array, wrap it to the first index
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      // Get the source and caption of the larger image from the data attributes of the next image
      var src = images[currentIndex].dataset.src;
      var caption = images[currentIndex].dataset.caption;

      // Set the source and caption of the image element inside the modal
      modalImage.src = src;
      modalCaption.textContent = caption;
    });
  