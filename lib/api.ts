import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const uploadAudio = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${BASE_URL}/upload/`, formData);
  return res.data.file_id;
};

export const checkStatus = async (fileId: string) => {
  const res = await axios.get(`${BASE_URL}/status/${fileId}`);
  return res.data.status;
};

export const getDownloadUrl = (fileId: string) =>
  `${BASE_URL}/download/${fileId}`;
