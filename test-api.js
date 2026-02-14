
const API_KEY = '579b464db66ec23bdd00000183ea33e451a249846c470d0df74bbd6b';
// Trying to use the catalog search API or a known resource if possible.
// But first let's try the one I guessed.
const RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070'; 

async function testApi() {
  try {
    const url = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json&limit=5`;
    console.log("Fetching:", url);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log("Response Status:", response.status);
      console.log("Response Text:", await response.text());
      return;
    }

    const data = await response.json();
    console.log("Data Status:", data.status);
    console.log("Title:", data.title);
    console.log("Records:", JSON.stringify(data.records, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

testApi();
