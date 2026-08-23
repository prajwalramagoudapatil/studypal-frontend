
import {
  FileText,
  Trash2,
  RotateCcw,
  Eye,
  BookOpenCheck,
} from "lucide-react";

import { GrInProgress } from "react-icons/gr";
import { deleteDocument } from "@/services/documentService";


interface Props {
  doc: {
    id: string;
    filename: string;
    uploadedAt: string;
    status: string;
    chunks: number;
  };
  onDeleteSuccess?: () => void;
}

export default function DocumentCard({ doc, onDeleteSuccess }: Props) {

  async function handleDelete() {
    try {
      await deleteDocument(doc.id);
      console.log(`Document ${doc.filename} deleted successfully`);
    } catch (error) {
      console.error(`Failed to delete document ${doc.filename}:`, error);
    }
    onDeleteSuccess? onDeleteSuccess(): window.location.reload() ; // Refresh the page to update the document list
  }



  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <FileText />

          <div>
            <h3 className="font-medium">
              {doc.filename}
            </h3>

            <p className="text-sm text-slate-400">
              Uploaded {doc.uploadedAt}
            </p>

            <p className="text-sm text-slate-500">
              Chunks: {doc.chunks}
            </p>
          </div>
        </div>

        <span
          className={`rounded p-3 h-full text-xs ${
            doc.status === "COMPLETED"
              ? "bg-green-500/20 text-green-400"
              : doc.status === "FAILED"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {doc.status === "COMPLETED" ? (
            <BookOpenCheck size={16} />
          ) : (
            <GrInProgress size={16} />
          )}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="rounded-lg bg-slate-800 px-3 py-2">
          <Eye size={16} />
        </button>

        <button className="rounded-lg bg-slate-800 px-3 py-2">
          <RotateCcw size={16} />
        </button>

        <button onClick={handleDelete}
        className="rounded-lg bg-red-500/20 px-3 py-2 text-red-400 cursor-pointer">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}