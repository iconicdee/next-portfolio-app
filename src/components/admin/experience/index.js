"use client";
import FormControls from "../formcontrols";

const controls = [
  {
    name: "position",
    placeholder: "position",
    type: "text",
    label: "position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
];

export default function AdminExperienceView({ formData, setFormData }) {
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
