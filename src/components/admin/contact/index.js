"use client";

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

export default function AdminContactView({ formData }) {
  console.log("formData", formData);
  return (
    <div className="flex flex-col gap-5">
      {formData && formData.length
        ? formData.map((item) => (
            <div className="p-5 border" key={item._id}>
              <p>{item.name} </p>
              <p>{item.email} </p>
              <p>{item.message} </p>
            </div>
          ))
        : null}
    </div>
  );
}
