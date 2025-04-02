function saveNote() {
    const note = document.getElementById('note').value;
    localStorage.setItem('note', note);
    alert('Note saved!');
}

function loadNote() {
    const note = localStorage.getItem('note');
    if (note) {
        document.getElementById('note').value = note;
       // alert('Note loaded!');
    } else {
        //alert('No saved note found.');
    }
}

function clearNote() {
    document.getElementById('note').value = '';
    localStorage.removeItem('note');
    //alert('Note cleared!');
}

// Function to load mock data for testing
function loadMockData() {
    const mockData = {
        note: "This is a sample note for testing purposes."
    };
    document.getElementById('note').value = mockData.note;
    //alert('Mock data loaded!');
}

// Test cases
function runTests() {
    // Test saving a note
    document.getElementById('note').value = "Test note";
    saveNote();
    console.assert(localStorage.getItem('note') === "Test note", "Test case 1 failed: Note was not saved correctly.");

    // Test loading a note
    loadNote();
    console.assert(document.getElementById('note').value === "Test note", "Test case 2 failed: Note was not loaded correctly.");

    // Test clearing a note
    clearNote();
    console.assert(document.getElementById('note').value === "", "Test case 3 failed: Note was not cleared correctly.");
    console.assert(localStorage.getItem('note') === null, "Test case 4 failed: Note was not removed from local storage.");

    // Test loading mock data
    loadMockData();
    console.assert(document.getElementById('note').value === "This is a sample note for testing purposes.", "Test case 5 failed: Mock data was not loaded correctly.");
}

// Run tests on page load
window.onload = runTests;