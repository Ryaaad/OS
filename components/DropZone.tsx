import { useState } from "react";

type Props = {
  endpoint: string;
  accept: string;
};

const DropZone = ({ endpoint, accept }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("date", "10 mars 2023");
      console.log(formData.get("file")); // should log the file object
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: accept,
          },
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full h-full border-2 border-black border-dashed rounded-md"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="file-upload" className="flex flex-col items-center">
          <i className="mb-2 text-gray-400 fas fa-cloud-upload-alt fa-3x"></i>
          <span className="text-gray-400 cursor-pointer">
            {file ? file.name : "Glissez-déposez un fichier ici ou cliquez pour sélectionner un fichier"}
          </span>
        </label>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          accept={accept}
          className="hidden "
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />
        {/* <button type="submit" className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Upload
        </button> */}
      </form>
    </div>
  );
};

export default DropZone;
