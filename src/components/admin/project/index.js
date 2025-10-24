"use client";
import FormControls from "../formcontrols";

const controls = [
  {
    name: "projectname",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter technologies",
    type: "text",
    label: "Enter technologies",
  },
  {
    name: "websites",
    placeholder: "website",
    type: "text",
    label: "website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "Github",
  },
];

export default function AdminProjectView({ formData, setFormData }) {
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
