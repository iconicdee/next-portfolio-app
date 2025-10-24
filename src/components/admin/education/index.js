"use client";
import FormControls from "../formcontrols";

const controls = [
  {
    name: "degree",
    placeholder: "degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

export default function AdminEducationView({ formData, setFormData }) {
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
