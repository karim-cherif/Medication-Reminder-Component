document
  .getElementById("setReminderBtn")
  .addEventListener("click", function () {
    var medName = document.getElementById("medName").value;
    var dosage = document.getElementById("dosage").value;
    var frequency = document.getElementById("frequency").value;
    var customFrequency = document.getElementById("customFrequency").value;

    if (medName && dosage && frequency) {
      var feedback = document.getElementById("feedback");
      var schedule =
        "Medication schedule set for " +
        medName +
        " (" +
        dosage +
        ") - " +
        frequency;
      if (customFrequency) {
        schedule += " Custom frequency: " + customFrequency;
      }
      feedback.textContent = schedule;
      // You can add code here to handle notifications based on frequency
    } else {
      alert("Please fill in all required fields");
    }
  });
