// src/hooks/useCodeExecution.ts
import { useState } from 'react';
import axios from 'axios';

export const useCodeExecution = () => {
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const executeCode = async (code: string, input: string, lang: string) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/execute", { code, input, lang });
      setOutput(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { output, loading, executeCode };
};
