"use client";
import FormControls from "../formcontrols";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About me",
  },
  {
    name: "noofprojects",
    placeholder: "No of Projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclient",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "skills",
  },
];

export default function AdminAboutView({ formData, setFormData }) {
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
