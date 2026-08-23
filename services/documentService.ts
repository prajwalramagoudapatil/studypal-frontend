// services/documentService.ts

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:8000";

export async function uploadDocument(
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_BASE_URL}/documents/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload document");
  }

  return response.json();
}

export async function getDocuments() {
  const response = await fetch(
    `${API_BASE_URL}/documents`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch documents");
  }
  const data = await response.json();
  console.log("Documents fetched from backend:", data);
  return data;
}

export async function deleteDocument(
  documentId: string
) {
  const response = await fetch(
    `${API_BASE_URL}/documents/${documentId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete document");
  }

  return response.json();
}

export async function reprocessDocument(
  documentId: string
) {
  const response = await fetch(
    `${API_BASE_URL}/documents/${documentId}/reprocess`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to reprocess document");
  }

  return response.json();
}