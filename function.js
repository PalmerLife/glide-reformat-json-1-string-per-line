window.function = function(jsonInput) {
  try {
    // Parse the input JSON
    const jsonArray = JSON.parse(jsonInput.value);

    // Check if the input is an array
    if (!Array.isArray(jsonArray)) {
      throw new Error("Input is not a valid JSON array");
    }

    // Join array elements with newline character
    const formattedOutput = jsonArray.map(item => item.toString()).join('\n');

    return formattedOutput;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
