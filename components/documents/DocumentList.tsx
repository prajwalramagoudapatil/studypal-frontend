"use client";

import DocumentCard from "./DocumentCard";
import { getDocuments } from "@/services/documentService";
import { Document } from "@/types/document";
import { useEffect, useState } from "react";

interface DocumentListProps {
  refreshKey: number;
  handleRefresh: () => void;
}

export default function DocumentList({refreshKey, handleRefresh}: DocumentListProps) {

  let docs: Document[] = [  ];
  

  const [documents, setDocuments] = useState<Document[]>(docs);

  useEffect(() => {
    // Fetch documents from the backend when the component mounts
    getDocuments()
      .then((fetchedDocuments) => {
        // Update the documents state with the fetched documents
        console.log("useEff Fetched documents:", fetchedDocuments.length);
        setDocuments(fetchedDocuments);
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, [,refreshKey]);



  return (
    <>
    <div className=" flex items-center justify-between border-b border-slate-800 p-4 mb-6">
      <h2 className="text-xl font-semibold">
        Your Documents
      </h2>
      </div>
    <div className="space-y-4">
      {documents.map((doc) => (
        <DocumentCard
          key={doc.id}
          doc={doc}
          onDeleteSuccess={handleRefresh}
        />
      ))}
    </div>

    </>
  );
}