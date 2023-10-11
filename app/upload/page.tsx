"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CldUploadResust {
  public_id: string;
}

const UploadPage = () => {
  const [publicID, setPublicID] = useState("");
  return (
    <>
      <CldImage width={270} height={180} alt="a test picture" src={publicID} />
      <CldUploadWidget
        uploadPreset="aa9qmmpo"
        options={{
          sources: ["local"],
          maxFiles: 5,
          multiple: false,
        }}
        onUpload={(result, widget) => {
          if (result.event != "success") return;
          const info = result.info as CldUploadResust;
          setPublicID(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
