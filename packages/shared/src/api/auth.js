import axios from "axios";
export async function login(username) {
    try {
        const response = await axios.post("/api/login", {
            username,
        });
        return response.data;
    }
    catch (error) {
        return { success: false, error: error.message || "Unknown error" };
    }
}
