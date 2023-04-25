import React from "react";

type Props = {
  selectedFiles: File[];
  droppedFiles: File[];
};

const FilePreview = ({ selectedFiles, droppedFiles }: Props) => {
  return (
    <div className="file-preview bg-gray-100 p-4 rounded-lg">
      {selectedFiles.map((file) => (
        <div
          className="file-preview__item bg-white p-2 rounded-md shadow-sm mb-2"
          key={file.name}
        >
          <div className="file-preview__item__name text-gray-800 font-medium">
            {file.name}
          </div>
          <div className="file-preview__item__size text-gray-500 text-sm">
            {file.size} bytes
          </div>
        </div>
      ))}
      {droppedFiles.map((file) => (
        <div
          className="file-preview__item bg-white p-2 rounded-md shadow-sm mb-2"
          key={file.name}
        >
          <div className="file-preview__item__name text-gray-800 font-medium">
            {file.name}
          </div>
          <div className="file-preview__item__size text-gray-500 text-sm">
            {file.size} bytes
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilePreview;
