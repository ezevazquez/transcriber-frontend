"use client";

import { useState } from "react";
import { uploadAudio, checkStatus, getDownloadUrl } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const id = await uploadAudio(file);
    setFileId(id);
    setStatus("processing");

    const interval = setInterval(async () => {
      const currentStatus = await checkStatus(id);
      setStatus(currentStatus);
      if (currentStatus === "done") clearInterval(interval);
    }, 2000);
  };

  return (
    <div className="space-y-4 p-6">
      <Input
        type="file"
        accept=".mp3,.wav,.m4a"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <Button onClick={handleUpload} disabled={!file}>
        Subir y Transcribir
      </Button>

      {status && <p>Estado: {status}</p>}

      {status === "done" && fileId && (
        <a
          href={getDownloadUrl(fileId)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Descargar transcripción
        </a>
      )}
    </div>
  );
}
