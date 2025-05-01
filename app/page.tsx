import UploadForm from "@/components/upload-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Transcriptor de Audios
        </h1>
        <UploadForm />
      </div>
    </main>
  );
}
