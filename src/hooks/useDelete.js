import { useState } from "react";
import api from "../api/api";

export function useDelete() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function deleteTask(taskId) {
    setIsLoading(true);
    try {
      const response = await api.delete(`/tasks?id=eq.${taskId}`);
      console.log(response.status);
      if (response.status === 204) return true;
      return false;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return { deleteTask, isLoading, error };
}
