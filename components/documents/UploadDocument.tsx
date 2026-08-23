"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { uploadDocument } from "@/services/documentService";

interface props {
  onUploadSuccess?: () => void;
}

export default function UploadDocument({onUploadSuccess}: props) {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function handleUpload() {
    if (!selectedFile) return;

    try {
      setUploading(true);
      setError("");
      setSuccess("");

      const result = await uploadDocument(
        selectedFile
      );

      console.log(result);

      setSuccess(
        `${selectedFile.name} uploaded successfully`
      );

      setSelectedFile(null);
      onUploadSuccess? onUploadSuccess() : window.location.reload() ; // Refresh the page to update the document list
    } catch (err) {
      console.error(err);

      setError(
        "Failed to upload document"
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Upload Document
      </h2>

      <input
        type="file"
        accept=".pdf,.docx,.txt,.pptx"
        onChange={(e) =>
          setSelectedFile(
            e.target.files?.[0] ?? null
          )
        }
        className="mb-4 block w-full text-sm text-slate-300"
      />

      {selectedFile && (
        <p className="mb-4 text-sm text-slate-400">
          Selected: {selectedFile.name}
        </p>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Upload size={18} />

        {uploading
          ? "Uploading..."
          : "Upload"}
      </button>

      {success && (
        <p className="mt-4 text-green-400">
          {success}
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}