import React, { useEffect, useState } from "react";
import Image from "next/image";
import FilePreview from "./FilePreview";
import axios from 'axios';

const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [data,setData]=useState<any>()
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const selectedFilesArr = Array.from(files);
      setSelectedFiles(selectedFilesArr);
      setErrorMessage("");
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files) {
      const droppedFilesArr = Array.from(files);
      setDroppedFiles(droppedFilesArr);
      setErrorMessage("");
    }
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('file', file);
    });
    droppedFiles.forEach((file) => {
      formData.append('file', file);
    });
    axios.post('/api/upload', formData);
  };

  const validateFileTypes = (files: File[]) => {
    const allowedExtensions = [".xls", ".xlsx"];
    const invalidFiles = files.filter(file => !allowedExtensions.includes(file.name.slice(-5)));
    if (invalidFiles.length > 0) {
      setErrorMessage("Invalid file type. Please upload only .xls or .xlsx files.");
      return false;
    }
    return true;
  }

  useEffect(() => {
    const totalFiles = [...selectedFiles, ...droppedFiles];
    if (totalFiles.length > 3) {
      setErrorMessage("You can upload up to 3 files only.");
      setSelectedFiles([]);
      setDroppedFiles([]);
    } else {
      const isValidFileType = validateFileTypes(totalFiles);
      if (isValidFileType) {
        setErrorMessage("");
      }
    }
  }, [selectedFiles, droppedFiles]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <div className="relative w-40 h-40 border-2 border-dashed border-gray-400 rounded-full flex justify-center items-center">
        <Image src="/upload.svg" alt="upload" height={50} width={50} />
        <div className="absolute inset-0 w-full h-full cursor-pointer" onDrop={handleFileDrop} onDragOver={(event) => event.preventDefault()}>
          <p className="text-gray-500 text-sm font-medium">Drop files here</p>
        </div>
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <div className="mt-4">
        <FilePreview selectedFiles={selectedFiles} droppedFiles={droppedFiles} />
        <label className="text-gray-500 text-sm font-medium">Choose files to upload</label>
        <input type="file" onChange={handleFileSelect} multiple accept=".xls,.xlsx" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFileUpload} disabled={!selectedFiles.length && !droppedFiles.length}>Upload</button>
    </div>
  );
};

export default DropZone;
