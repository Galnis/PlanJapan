function ChangeFill(GroupID) {
    var groupElement = document.getElementById(GroupID);

    if (groupElement) {
        // Define a dictionary to map region IDs to their respective checkboxes
        var checkboxMap = {
            'HokkaidoFill': 'HokkaidoCB',
            'Tohoku': 'TohokuCB',
            'Kanto': 'KantoCB',
            'Chubu': 'ChubuCB',
            'Kansai': 'KansaiCB',
            'Chugoku': 'ChugokuCB',
            'Shikoku': 'ShikokuCB',
            'KyushuFill': 'KyushuCB',
            'OkinawaFill': 'OkinawaCB'
        };

        // Get the checkbox ID corresponding to the GroupID
        var checkboxID = checkboxMap[GroupID];
        var checkbox = document.getElementById(checkboxID);

        // If the checkbox is checked, change fill to white; if not, change it to #e8e0d4
        if (checkbox.checked) {
            groupElement.querySelectorAll('*').forEach(function (child) {
                child.style.fill = 'white';  // Change to desired color when checked
            });
        } else {
            groupElement.querySelectorAll('*').forEach(function (child) {
                child.style.fill = '#e8e0d4';  // Change to desired color when unchecked
            });
        }
    }
}

function toggleImage(imageID) {
    var image = document.getElementById(imageID);
    var checkbox = document.getElementById(imageID + 'CB');

    // Toggle visibility based on checkbox status
    if (checkbox.checked) {
        image.style.display = 'block';  // Show image when checked
    } else {
        image.style.display = 'none';  // Hide image when unchecked
    }
}
function changeSeasonImage(season) {
    var image = document.getElementById("JapanSeason");

        image.style.display = 'block';  // Show the image
 
    // Update the image source based on the selected season
    if (season == 'Summer') {
        image.src = 'images/PlanYourTrip/Seasons/Sunflowers.png';  // Summer image
    } else if (season == 'Autumn') {
        image.src = 'images/PlanYourTrip/Seasons/AutumnLeaves.png';  // Autumn image
    } else if (season == 'Winter') {
        image.src = 'images/PlanYourTrip/Seasons/SnowFlakes.png';  // Winter image
    } else if (season == 'Spring') {
        image.src = 'images/PlanYourTrip/Seasons/SpringCherry.png';  // Spring image
    }
}
function submit() {
    // Get the budget value
    var budget = document.getElementById("Budget").value;
    var budgetText;
    if (budget === "") {
        budgetText = "Not specified";
    } else {
        budgetText = budget;
    }

    // Get the selected season
    var season = '';
    if (document.getElementById("SummerRadio").checked) {
        season = 'Summer';
    } else if (document.getElementById("AutumnRadio").checked) {
        season = 'Autumn';
    } else if (document.getElementById("WinterRadio").checked) {
        season = 'Winter';
    } else if (document.getElementById("SpringRadio").checked) {
        season = 'Spring';
    }

    // Get selected districts using += to append to a string
    var selectedDistricts = '';
    if (document.getElementById("HokkaidoCB").checked) {
        selectedDistricts += "Hokkaido, ";
    }
    if (document.getElementById("TohokuCB").checked) {
        selectedDistricts += "Tohoku, ";
    }
    if (document.getElementById("KantoCB").checked) {
        selectedDistricts += "Kanto, ";
    }
    if (document.getElementById("ChubuCB").checked) {
        selectedDistricts += "Chubu, ";
    }
    if (document.getElementById("KansaiCB").checked) {
        selectedDistricts += "Kansai, ";
    }
    if (document.getElementById("ChugokuCB").checked) {
        selectedDistricts += "Chugoku, ";
    }
    if (document.getElementById("ShikokuCB").checked) {
        selectedDistricts += "Shikoku, ";
    }
    if (document.getElementById("KyushuCB").checked) {
        selectedDistricts += "Kyushu, ";
    }
    if (document.getElementById("OkinawaCB").checked) {
        selectedDistricts += "Okinawa, ";
    }

    // Remove trailing comma and space if any districts were selected
    if (selectedDistricts.length > 0) {
        selectedDistricts = selectedDistricts.slice(0, -2);
    } else {
        selectedDistricts = "None selected";
    }

    // Get selected destinations using += to append to a string
    var selectedDestinations = '';
    if (document.getElementById("NaraParkCB").checked) {
        selectedDestinations += "Nara Park, ";
    }
    if (document.getElementById("RadioTowerCB").checked) {
        selectedDestinations += "Radio Tower, ";
    }
    if (document.getElementById("AquariumCB").checked) {
        selectedDestinations += "Aquarium, ";
    }
    if (document.getElementById("FujiCB").checked) {
        selectedDestinations += "Mount Fuji, ";
    }
    if (document.getElementById("ShrineCB").checked) {
        selectedDestinations += "Shrine, ";
    }
    if (document.getElementById("HimejiCB").checked) {
        selectedDestinations += "Himeji Castle, ";
    }

    // Remove trailing comma and space if any destinations were selected
    if (selectedDestinations.length > 0) {
        selectedDestinations = selectedDestinations.slice(0, -2);
    } else {
        selectedDestinations = "None selected";
    }

    // Format the summary message
    var summary = "Your Travel Plan Summary:\n";
    summary += "Budget: " + budgetText + "\n";
    summary += "Season: " + (season ? season : "Not selected") + "\n";
    summary += "Selected Districts: " + selectedDistricts + "\n";
    summary += "Selected Destinations: " + selectedDestinations + "\n";

    // Display the summary in an alert box
    alert(summary);

    // Prevent form from submitting and refreshing the page
    return false;
}
