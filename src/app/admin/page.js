"use client";
import AdmiHomeView from "@/components/admin/home";
import AdminAboutView from "@/components/admin/about";
import AdminEducationView from "@/components/admin/education";
import AdminExperienceView from "@/components/admin/experience";
import AdminContactView from "@/components/admin/contact";
import AdminProjectView from "@/components/admin/project";
import { useState } from "react";

const initialHomeData = {
  heading: "",
  summary: "",
};
const initialAboutData = {
  aboutme: "",
  noofexperience: "",
  yearofexperience: "",
  noofclient: "",
  skills: "",
};

const initialEducationData = {
  degree: "",
  year: "",
  college: "",
};

const initialExperienceData = {
  position: "",
  company: "",
  duration: "",
};

const initialProjectData = {
  projectname: "",
  technologies: "",
  websites: "",
  github: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeData, setHomeData] = useState(initialHomeData);
  const [aboutData, setAboutData] = useState(initialAboutData);
  const [educationData, setEducationData] = useState(initialEducationData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [projectData, setProjectData] = useState(initialProjectData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      Component: <AdmiHomeView formData={homeData} setFormData={setHomeData} />,
    },
    {
      id: "about",
      label: "About",
      Component: (
        <AdminAboutView formData={aboutData} setFormData={setAboutData} />
      ),
    },
    {
      id: "education",
      label: "Education",
      Component: (
        <AdminEducationView
          formData={educationData}
          setFormData={setEducationData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      Component: (
        <AdminExperienceView
          formData={experienceData}
          setFormData={setExperienceData}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      Component: (
        <AdminProjectView formData={projectData} setFormData={setProjectData} />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      Component: <AdminContactView />,
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav
        className="-mb-0.5 flex justify-center items-center space-x-6"
        role="tablist"
      >
        {menuItem.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItem.map((item) =>
          item.id === currentSelectedTab ? (
            <div key={item.id}>{item.Component}</div>
          ) : null
        )}
      </div>
    </div>
  );
}
