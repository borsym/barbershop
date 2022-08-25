import { useState, useEffect } from 'react';

export type TApiResponse = {
  response: Response;
  error: any;
  loading: Boolean;
};

export type Response = {
  status: Number;
  statusText: String;
  data: any;
};

export const useApiGet = (url: string): TApiResponse => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<Response>({
    status: 0,
    statusText: '',
    data: null,
  });

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setResponse({
        status: apiResponse.status,
        statusText: apiResponse.statusText,
        data: json,
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { response, error, loading };
};
