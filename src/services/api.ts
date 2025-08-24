import axios from "axios";
import { getCookie } from "../utils/cookies";
import { TOKEN_CONSTANTS } from "../utils/auth-util";
import { ApiResult, Course } from "../types";
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = getCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiWithoutAuth = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signIn = async (email: string, password: string) => {
  try {
    const response = await apiWithoutAuth.post<
      ApiResult<{ access: string; refresh: string }>
    >("/auth/login/", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
export const getAllCourses = async () => {
  try {
    const response = await api.get("/accounts/course/");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
export const getSingleCourse = async (id: string) => {
  try {
    const response = await api.get<ApiResult<Course>>(`/accounts/course/detail/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};
export const getUserCourses = async () => {
  try {
    const response = await api.get("/accounts/my-courses/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user courses:", error);
    throw error;
  }
};

export const markCourseAsCompleted = async (id: string) => {
  try {
    const response = await api.post(`/accounts/complete-lesson/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error marking course as completed:", error);
    throw error;
  }
};

export const getTopRatedCourses = async () => {
  try {
    const response = await api.get<ApiResult<Course[]>>(
      "/accounts/top-rated-courses/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated courses:", error);
    throw error;
  }
};

export const getSingleCourseRatings = async (courseId: string) => {
  try {
    const response = await api.get(`/accounts/ratings/${courseId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course ratings:", error);
    throw error;
  }
};

export const submitRating = async (
  courseId: string,
  rating: number,
  comment: string
) => {
  try {
    const response = await api.post(`/accounts/submit-rating/${courseId}/`, {
      rating,
      comment,
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting rating:", error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get<
      ApiResult<{
        date_of_birth: string | null;
        email: string | null;
        first_name: string | null;
        gender: string | null;
        id: number;
        last_name: string | null;
        occupation: string | null;
        pfp: string | null;
        phone_number: string | null;
      }>
    >("/accounts/user/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const getAllQuizzes = async () => {
  try {
    const response = await api.get<ApiResult<[]>>("/accounts/user-quizzes/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user quizzes:", error);
    throw error;
  }
};

export const getLessonQuiz = async (lessonId: string) => {
  try {
    const response = await api.get(`/accounts/lessons/${lessonId}/quiz/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lesson quiz:", error);
    throw error;
  }
};
export const answerQuestion = async (questionId: string, choiceId: string) => {
  try {
    const response = await api.post(`/accounts/submit-answer/`, {
      question_id: questionId,
      choice_id: choiceId,
    });
    return response.data;
  } catch (error) {
    console.error("Error answering question:", error);
    throw error;
  }
};

export const initiatePayment = async (courseIds: string[], txRef: string) => {
  try {
    const response = await api.post("/accounts/courses/payment/initiate/", {
      course_ids: courseIds,
      tx_ref: txRef,
    });
    return response.data;
  } catch (error) {
    console.error("Error initiating payment:", error);
    throw error;
  }
};
export default api;
