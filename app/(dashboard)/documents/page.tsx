// app/documents/page.tsx

import { Upload } from "lucide-react";
import DocumentList from "@/components/documents/DocumentList";
import UploadDocument from "@/components/documents/UploadDocument";
import { useState } from "react";


export default function DocumentsPage() {

  const [refreshKey, setRefreshKey] = useState(0);

  function handleRefresh() {
    setRefreshKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="flex h-screen flex-col bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 p-6">
        <div>
          <h1 className="text-2xl font-bold">
            Manage Documents
          </h1>

          <p className="text-sm text-slate-400">
            Upload study material for RAG-powered answers
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <UploadDocument onUploadSuccess={handleRefresh} />
        <DocumentList handleRefresh={handleRefresh} refreshKey={refreshKey} />
      </div>
    </div>
  );
}