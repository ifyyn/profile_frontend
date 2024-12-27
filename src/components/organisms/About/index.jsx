import { Card, CardSkill, Container, Section } from "../../molekules";
import { useEffect } from "react";
import useAboutStore from "../../../config/aboutStore.js";
import useEducationStore from "../../../config/educationStrore.js";
import useOrganizationalStore from "../../../config/organizationalStore.js";
import useSkilStore from "../../../config/skilStore.js";
const About = () => {
  const { about, getAbout } = useAboutStore();
  const { education, getEducation } = useEducationStore();
  const { organizational, getOrganizational } = useOrganizationalStore();
  const { skil, getSkil } = useSkilStore();

  useEffect(() => {
    getAbout();
  }, [getAbout]);

  useEffect(() => {
    getEducation();
  }, [getEducation]);

  useEffect(() => {
    getOrganizational();
  }, [getOrganizational]);

  useEffect(() => {
    getSkil();
  }, [getSkil]);

  return (
    <Container name={"About"}>
      {about.map((abouts) => {
        return (
          <p key={abouts._id} className="text-gray-700 mt-4">
            {abouts.description}
          </p>
        );
      })}
      <Section
        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
        name={"Education"}
      >
        {education && education.length > 0 ? (
          education.map((educations, index) => (
            <Card
              key={index}
              title={educations.institution}
              degree={educations.degree}
              description={educations.description}
            />
          ))
        ) : (
          <p>No education data available.</p>
        )}
      </Section>
      <Section
        name={"Organizational Experience"}
        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
      >
        {organizational.map((organizationals) => (
          <Card
            title={organizationals.name}
            description={organizationals.description}
          />
        ))}
      </Section>
      <Section name={"Skill"} className={"grid grid-cols-4 gap-4"}>
        {skil.map((skils) => (
          <CardSkill skillName={skils.name} />
        ))}
      </Section>
    </Container>
  );
};
export default About;
