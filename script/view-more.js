// Function to open the modal with the clicked image
function openImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("enlargedImage");

    // Show the modal with smooth fade-in transition
    modal.classList.add("active");

    // Set the image source to the clicked image
    modalImage.src = imageSrc;
}

// Function to close the modal when clicked outside of the image or on the close button
function closeModal(event) {
    const modal = document.getElementById("imageModal");

    // Close the modal if the click target is the background or the close button
    if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.classList.remove("active");  // Close the modal by removing the 'active' class
    }
}



// Function to go back to the previous page
function goBack() {
    window.history.back(); // Navigates to the previous page in history
}





  function closeModal(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal || event.target.classList.contains("close-btn")) {
      modal.classList.remove("active");
    }
  }
  
  