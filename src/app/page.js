"use client";

import { useEffect, useState } from "react";
const { getData } = require("@/services");
import ClientAboutView from "@/components/client-view/about-view";
import ClientContactView from "@/components/client-view/contact-view";
import ClientExperienceView from "@/components/client-view/experience-view";
import ClientHomeView from "@/components/client-view/home-view";
import ClientProjectView from "@/components/client-view/project-view";

export default function Home() {
  const [homeSectionData, setHomeSectionData] = useState(null);
  const [aboutSectionData, setAboutSectionData] = useState(null);
  const [experienceSectionData, setExperienceSectionData] = useState(null);
  const [projectSectionData, setProjectSectionData] = useState(null);
  const [educationSectionData, setEducationSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const homeData = await getData("home");
        const aboutData = await getData("about");
        const experienceData = await getData("experience");
        const projectData = await getData("project");
        const educationData = await getData("education");

        setHomeSectionData(homeData?.data || []);
        setAboutSectionData(aboutData?.data || []);
        setExperienceSectionData(experienceData?.data || []);
        setProjectSectionData(projectData?.data || []);
        setEducationSectionData(educationData?.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error}
      </div>
    );

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceView
        experienceData={experienceSectionData}
        educationData={educationSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
