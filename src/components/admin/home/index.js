"use client";

import FormControls from "../formcontrols";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter Career summary",
  },
  {
    name: "summary",
    placeholder: "Enter career summary ",
    type: "text",
    label: "Enter heading text",
  },
];

export default function AdmiHomeView({ formData, setFormData }) {
  return (
    <div>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button className="border border-green-600 p-4 fo">Add Info</button>
      </div>
    </div>
  );
}
