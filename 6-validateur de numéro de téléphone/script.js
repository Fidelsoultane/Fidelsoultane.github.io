document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");
  
    if (!input) {
      alert("Please provide a phone number");
      return;
    }
  
    const validNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const isValid = validNumberRegex.test(input);
  
    resultsDiv.textContent = isValid
      ? `Valid US number: ${input}`
      : `Invalid US number: ${input}`;
  });
  
  document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("results-div").textContent = "";
  });