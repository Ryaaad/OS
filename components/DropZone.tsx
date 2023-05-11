import { useEffect, useState } from "react";
import {MdOutlineCloudUpload} from "react-icons/md"

type Props = {
  endpoint: string;
  accept: string;
  Name:string
};

const DropZone = ({ endpoint, accept,Name }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  useEffect(() => {
    // Automatically submit the form when a file is selected
    if (file) {
      handleFormSubmit();
    }
  }, [file]);

  const handleFormSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("date", "08 mars 2023");
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
      className="flex items-center justify-center w-full h-full border-2 border-[#3A78F1] border-dashed rounded-md"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <form>
        <label htmlFor="file-upload" className="flex flex-col items-center">
          <i className="mb-2 text-gray-400 fas fa-cloud-upload-alt fa-3x"></i>
          <MdOutlineCloudUpload  className="text-3xl  text-[#3A78F1] mx-auto " ></MdOutlineCloudUpload>
          <span className="text-gray-400 cursor-pointer">
            {file ? file.name : `${Name}`}
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
      </form>
    </div>
  );
};

export default DropZone;
