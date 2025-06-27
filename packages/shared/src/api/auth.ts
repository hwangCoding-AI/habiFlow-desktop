import axios from "axios";

export interface LoginResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export async function login(username: string): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>("/api/login", {
      username,
    });
    return response.data;
  } catch (error: any) {
    return { success: false, error: error.message || "Unknown error" };
  }
}
