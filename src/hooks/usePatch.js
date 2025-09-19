import { useState } from "react";
import api from "../api/api";

export function usePatch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function patchTasks(taskId, patchData) {
    setIsLoading(true);
    try {
      const response = await api.patch(`/tasks?id=eq.${taskId}`, patchData);
      const { data } = response;
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return { patchTasks, isLoading, error };
}
