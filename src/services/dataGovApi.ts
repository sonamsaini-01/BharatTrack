
const API_KEY = '579b464db66ec23bdd00000183ea33e451a249846c470d0df74bbd6b';
const BASE_URL = 'https://api.data.gov.in/resource';

// Default resource ID for GST related data (User might need to update this if they have a specific one)
// This is a placeholder resource ID. In a real scenario, we'd need the exact resource ID for "GST tax year wise"
// For now, we will try to use a dynamic fetcher or a common one if available.
// Since we don't have the exact resource ID, we will structure this to be easily updateable.
const DEFAULT_RESOURCE_ID = '9ef84268-d588-465a-a308-a864a43d0070'; // Example Resource ID (often requires update)

export interface DataGovResponse {
  index_name: string;
  title: string;
  desc: string;
  created: number;
  updated: number;
  created_date: string;
  updated_date: string;
  active: string;
  visualizable: string;
  catalog_uuid: string;
  source: string;
  org_type: string;
  org: string[];
  sector: string[];
  field: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  records: Array<Record<string, any>>;
  count: number;
  limit: string;
  offset: string;
  status: string;
}

export const fetchGSTData = async (limit = 10, resourceId = DEFAULT_RESOURCE_ID): Promise<DataGovResponse | null> => {
  try {
    const url = `${BASE_URL}/${resourceId}?api-key=${API_KEY}&format=json&limit=${limit}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data from data.gov.in:", error);
    return null;
  }
};

/**
 * Helper to validate and fix URLs
 */
export const validateUrl = (url: string): string => {
  if (!url) return '';
  // Fix double slashes (except after protocol)
  let cleanUrl = url.replace(/([^:]\/)\/+/g, '$1');
  // Ensure protocol
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = 'https://' + cleanUrl;
  }
  return cleanUrl;
};
