import { api, apiKey } from 'src/boot/axios';

export async function get<T, P = Record<string, string | number | boolean>>(
  endpoint: string,
  params?: P
): Promise<T> {
  try {
    const finalParams = { ...params, api_key: apiKey };
    const response = await api.get<T>(endpoint, {
      params: finalParams,
    });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
}
