export interface Document {
  id: string;
  filename: string;
  uploadedAt: string;
  status: "processing" | "ready" | "failed";
  chunks: number;
}