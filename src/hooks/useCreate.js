import { useState } from "react";
import api from "../api/api";

export function useCreate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function createTask(taskData) {
    setIsLoading(true);
    try {
      const response = await api.post("/tasks", taskData);
      const { data } = response;
      console.log("task created", data);
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return { createTask, isLoading, error };
}
