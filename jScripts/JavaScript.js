// Variable to track if a radio button is selected
var radioSelected = false;

// Function to check if the message box is filled and a radio option is selected
function checkFilledSections() {
    // Get the submit button element
    var submitButton = document.getElementById("submitButton");

    // If the message is not empty and a radio button is selected
    if (document.getElementById("message").value != "" && radioSelected) {
        submitButton.style.opacity = 1;  // Set button to fully opaque
        submitButton.style.cursor = 'pointer';  // Change cursor to pointer on hover
        submitButton.disabled = false;
    } else {
        submitButton.style.opacity = 0.5;  // Set button to semi-transparent
        submitButton.style.cursor = 'not-allowed'; // Change cursor to not-allowed
        submitButton.disabled = 'disabled';
    }
}

// Function to change the fill color of elements representing a region in Japan in the SVG tag in the HTML file
// All child elements associated with the region have a unique ID
// This function changes the fill color of all these elements based on the checkbox state
function ChangeFill(GroupID) {
    // Select all child elements of the group
    var ChildElements = document.getElementById(GroupID).querySelectorAll('*');

    // Check if there are child elements
    if (ChildElements) {
        var checkbox = document.getElementById(GroupID + "CB"); // The IDs of checkboxes are the group ID with 'CB' added

        // If the checkbox is checked, change fill to white; if not, change it to #e8e0d4
        if (checkbox.checked) {
            for (var child of ChildElements) {
                child.style.fill = 'white';  // Change fill to white
            }
        } else {
            for (var child of ChildElements) {
                child.style.fill = '#e8e0d4';  // Change fill to light brown
            }
        }
    }
}

// Function to toggle the visibility of an image based on a checkbox
function toggleDestination(imageID) {
    // Get the image element and the associated checkbox
    var image = document.getElementById(imageID);
    var checkbox = document.getElementById(imageID + 'CB');

    // Toggle visibility based on checkbox status
    if (checkbox.checked) {
        image.style.opacity = '1';  // Show image when checked
    } else {
        image.style.opacity = '0.5';  // Hide image when unchecked
    }
}

// Function to change the source of the season image based on the selected season
function changeSeasonImage(season) {
    var image = document.getElementById("JapanSeason");

    // Change the image source to the appropriate season image
    image.src = 'images/PlanYourTrip/Seasons/' + season + '.png';
    image.style.display = 'block';  // Show the image
    radioSelected = true;  // Mark that a radio option has been selected
    checkFilledSections();  // Update the submit button state
}

// Function to handle form submission and display a summary of the travel plan
function submit() {
    // Get the message value
    var MessageText = document.getElementById("message").value;

    // Get the selected season based on selected radio buttons
    var season = '';
    if (document.getElementById("SummerRadio").checked) {
        season = 'Summer';
    } else if (document.getElementById("AutumnRadio").checked) {
        season = 'Autumn';
    } else if (document.getElementById("WinterRadio").checked) {
        season = 'Winter';
    } else {
        season = 'Spring';
    }

    // Get selected districts using querySelectorAll to get all checkboxes in the group
    var selectedDistricts = '';
    var DistrictsCheckboxes = document.querySelectorAll('.DistrictCheckbox input');

    // Loop through checkboxes and append selected ones to a string
    for (var checkbox of DistrictsCheckboxes) {
        if (checkbox.checked)
            selectedDistricts += checkbox.id.slice(0, -2) + ", ";  // Append district names
    }

    // Remove trailing comma and space if any districts were selected
    if (selectedDistricts.length > 0) {
        selectedDistricts = selectedDistricts.slice(0, -2);
    } else {
        selectedDistricts = "None selected";  // Default message if none are selected
    }

    // Get selected destinations using querySelectorAll to get all checkboxes in the group
    var selectedDestinations = '';
    var DestinationCheckboxes = document.querySelectorAll('.DestinationCheckbox input');

    // Loop through checkboxes and append selected ones to a string
    for (var checkbox of DestinationCheckboxes) {
        if (checkbox.checked)
            selectedDestinations += checkbox.id.slice(0, -2) + ", ";  // Append destination names
    }

    // Remove trailing comma and space if any destinations were selected
    if (selectedDestinations.length > 0) {
        selectedDestinations = selectedDestinations.slice(0, -2);
    } else {
        selectedDestinations = "None selected";  // Default message if none are selected
    }

    // Append to a summary message
    var summary = "Your Travel Plan Summary:\n";
    summary += "Season: " + season + "\n";
    summary += "Selected Districts: " + selectedDistricts + "\n";
    summary += "Selected Destinations: " + selectedDestinations + "\n";
    summary += "Message: " + MessageText + "\n";

    // Display the summary in an alert box
    alert(summary);

    // Prevent the form from submitting and refreshing the page
    return false;
}
