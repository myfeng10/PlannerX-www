const BASE_URL = 'http://127.0.0.1:5000/api'; // Adjust this URL based on your environment

export const getCourses = async (semester) => {
    try {
        const response = await fetch(`${BASE_URL}/courses/getCourses`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
};