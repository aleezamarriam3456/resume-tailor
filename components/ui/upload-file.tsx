"use client"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileUpload: (content: string, filename: string) => void;
  accept?: string;
  maxSize?: number; // in MB
}

export function FileUpload({ onFileUpload, accept = ".pdf,.docx,.txt", maxSize = 5 }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Check file type
    const allowedTypes = accept.split(',').map(type => type.trim().toLowerCase());
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      alert(`File type not supported. Allowed types: ${accept}`);
      return;
    }

    // Read file content
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      
      // For demo purposes, we'll just pass the file content as text
      // In a real app, you'd need proper parsers for PDF/DOCX
      let parsedContent = content;
      
      if (fileExtension === '.pdf') {
        parsedContent = "PDF content would be parsed here...";
      } else if (fileExtension === '.docx') {
        parsedContent = "DOCX content would be parsed here...";
      }
      
      setUploadedFile(file.name);
      onFileUpload(parsedContent, file.name);
    };
    
    reader.readAsText(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    onFileUpload("", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {uploadedFile ? (
        <div className="border-2 border-dashed border-green-300 bg-green-50 rounded-lg p-6 text-center">
          <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <p className="text-green-800 font-medium mb-2">File uploaded successfully!</p>
          <p className="text-green-600 text-sm mb-4">{uploadedFile}</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleRemoveFile}
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            <X className="mr-2 h-4 w-4" />
            Remove File
          </Button>
        </div>
      ) : (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragging
              ? "border-primary bg-primary/10"
              : "border-slate-300 hover:border-primary"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 mb-2">Drag & drop your resume here</p>
          <p className="text-sm text-slate-400 mb-4">or click to browse files</p>
          <Button type="button">
            Choose File
          </Button>
          <p className="text-xs text-slate-400 mt-2">
            Supports {accept.replace(/\./g, '').toUpperCase()} files up to {maxSize}MB
          </p>
        </div>
      )}
    </div>
  );
}
