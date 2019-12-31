const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;


function handleCheck(e) {
  let inBetween = false;
  // If user presses shift key and checking a box
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// Event Listener
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
