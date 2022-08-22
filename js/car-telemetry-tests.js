// TESTS

testRunner();
function testRunner() {
  console.log(
    "Passed 'returns valid mileage': " +
      getCarTelemetry_GivenValidCar_ReturnsMileage()
  );
  console.log(
    "Passed 'returns string message': " +
      getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage()
  );
  console.log(
    "Passed 'return string message for non-numeric': " +
      getCarTelemetry_GivenNonnumeric_ReturnsStringMessage()
  );
  console.log(
    "Passed 'returns string message for boolean': " +
      getCarTelemetry_GivenNonnumericalBoolean_ReturnsStringMessage()
  );
  // TODO: 2. place logging statement for decimal test here
}

// AC-1: given a valid car, returns the mileage of that car
function getCarTelemetry_GivenValidCar_ReturnsMileage() {
  // Arrange
  // Gather all the data, and any setup needed
  const car = {
    mileage: 67922,
  };

  const expectedMileage = 67922;

  // Act
  // Execute testable code and store results as needed
  const actualMileage = getCarTelemetry(car);

  // Assert
  // Test the actual output of code against the expected output
  return actualMileage === expectedMileage;
}

// AC-2: given no mileage, returns a helpful message
function getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage() {
  // Arrange
  const car = {};
  // Act
  // Execute testable code and store results as needed
  const message = getCarTelemetry(car);

  // Assert
  // Test the actual output of code against the expected output
  return typeof message === "string";
}

// AC-3: given any non-valid mileage (numbers and numerical strings are valid), returns a helpful message
function getCarTelemetry_GivenNonnumerical_ReturnsStringMessage() {
  // Arrange
  const car = {
    mileage: "how now brown cow",
  };
  // Act
  // Execute testable code and store results as needed
  const message = getCarTelemetry(car);

  // Assert
  // Test the actual output of code against the expected output
  return message === "No mileage provided...";
}
function getCarTelemetry_GivenNonnumericalBoolean_ReturnsStringMessage() {
  // Arrange
  const car = {
    mileage: true,
  };
  // Act
  // Execute testable code and store results as needed
  const message = getCarTelemetry(car);

  // Assert
  // Test the actual output of code against the expected output
  return message === "No mileage provided...";
}

// AC-4: given a numeric with more than one decimal place, returns mileage with only one decimal place (ie: 6853.5234 -> 6853.5)
// TODO: 1. write test for decimal place here

// ACTUAL CODE
function getCarTelemetry(carObj) {
  // TODO: 3. modify code for decimal place handling here
  return parseInt(carObj.mileage) ? carObj.mileage : "No mileage provided...";
}
