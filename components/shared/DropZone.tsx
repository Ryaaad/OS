import { useEffect, useState } from "react";
import {MdOutlineCloudUpload} from "react-icons/md"
import {BsPatchCheck,BsPatchExclamation} from "react-icons/bs"
import LoadingAnimation from "./Loading";

type Props = {
  endpoint: string;
  accept: string;
  Name:string;
  date:any;
};

const DropZone = ({ endpoint, accept,Name,date}: Props) => {

  const [file, setFile] = useState<File | null>(null);
  const [Status, setStatus] = useState<any>(null);
  const [Loading, setLoading] = useState(false);
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if(date){
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);}
  };

  useEffect(() => {
    // Automatically submit the form when a file is selected
     if (file) {
      setLoading(true);
      handleFormSubmit();
    }
  }, [file]);

  const handleFormSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("date", date);
      Name=="Bilan de Point Soir" &&   formData.append("point", "Soir");
      Name=="Bilan de Point Matin" &&   formData.append("point", "Soir");
    
      console.log(formData.get("file")); // should log the file object
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: accept,
          },
        });
        console.log(`${Name} : `,response);
        if(response.ok){
          setStatus(true);
          setLoading(false)
        }
        if (!response.ok) {
          setStatus(false);
          setLoading(false)
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className={`flex items-center justify-center w-full h-full border-2 border-[#3A78F1] border-dashed rounded-md
       ${!date ? "border-[#3a77f17e]  opacity-50 " : "border-[#3A78F1]"}  `}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <form>
        <label htmlFor="file-upload" className={`flex flex-col items-center  ${!date && "cursor-no-drop"} `}>
     {  !Loading ?   <>
        { Status==undefined &&  <MdOutlineCloudUpload  className="text-3xl text-[#3A78F1] mx-auto " ></MdOutlineCloudUpload>}
        { Status && <BsPatchCheck  className="text-3xl  text-[#228623] mx-auto " ></BsPatchCheck>}
        { Status==false && <BsPatchExclamation  className="text-3xl  text-[#f13a3a] mx-auto " ></BsPatchExclamation>}
        
        <span className={`text-gray-400 test-sm ${!date ? "cursor-no-drop"  : "cursor-pointer" } `}>
            {file ? file.name : `${Name}`}
          </span>
          </>   : <LoadingAnimation></LoadingAnimation> }
        </label>
     { date &&  <input
          id="file-upload"
          name="file-upload"
          type="file"
          accept={accept}
          className="hidden "
          onChange={(event) => setFile(event.target.files?.[0] || null)}
        />}
      </form>
    </div>
  );
};

export default DropZone;
