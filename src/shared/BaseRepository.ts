import { api } from 'src/boot/axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

export async function get<T>(
  endpoint: string,
  params?: Record<string, any>
): Promise<T> {
  try {
    const finalParams = { ...params, api_key: apiKey };
    const response = await api.get<T>(`${baseUrl}${endpoint}`, {
      params: finalParams,
    });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
}
