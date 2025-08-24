const tnxRefGenerator = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
  return `${timestamp}-${randomString}`.toUpperCase(); // Combine and convert to uppercase
}

export default tnxRefGenerator;
