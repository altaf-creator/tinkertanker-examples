fetch("https://api-open.data.gov.sg/v2/real-time/api/air-temperature") // Replace with your JSON endpoint or local file path
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then((jsonData) => {
    // Work with the parsed JSON data
    console.log(jsonData);
    // Example: Display data on the page
    // document.getElementById('output').textContent = JSON.stringify(jsonData, null, 2);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch operation
    console.error("Error fetching JSON:", error);
  });
