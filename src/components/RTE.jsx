import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf.js";

export default function RTE({ name, control, label, defaultValue = "" }) {
  const [Loading, setLoading] = useState(true);

  return (
    <div className="w-full mt-4 ">
      {label && (
        <label className=" inline-block mb-1 pl-1 text-sm text-red-900 dark:text-white">
          {label}
        </label>
      )}

      {/* {Loading && (
        <div className=" h-[400px] bg-gray-600 rounded-lg overflow-hidden flex flex-col justify-evenly animate-pulse">
          <div className="h-[50px] mx-5 rounded-lg bg-gray-500"></div>
          <div className="h-[280px] mx-5 rounded-lg bg-gray-500"></div>
        </div>
      )} */}

      
      <div className="h-[400px] relative">
        {Loading && (
        <div className="absolute inset-0 h-[400px] bg-red-300 dark:bg-red-700 rounded-lg overflow-hidden flex flex-col justify-evenly animate-pulse">
          <div className="h-[50px] mx-5 rounded-lg bg-red-100 dark:bg-red-600"></div>
          <div className="h-[280px] mx-5 rounded-lg bg-red-100 dark:bg-red-600"></div>
        </div>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMceApi}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              menubar: false,
              promotion: false,
              branding: false,
              plugins: ["autolink", "link", "anchor"],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px display:flex}",
            }}
            onEditorChange={onChange}
            onInit={() => setLoading(false)}
          />
        )}
      />
      </div>
    </div>
  );
}
