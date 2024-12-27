import { Card, Container, Section } from "../../molekules";
import CardWork from "../../molekules/CardWork";
import useWorkStore from "../../../config/workStore.js";
import { useEffect } from "react";
const Work = () => {
  const { work, getWork } = useWorkStore();

  useEffect(() => {
    getWork();
  }, [getWork]);
  return (
    <Container name={"Work"}>
      <Section
        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"}
      >
        {work.map((works) => (
          <CardWork
            title={works.title}
            description={works.description}
            imageUrl={`http://localhost:3000/uploads/${works.image}`}
            link_to={works.link}
          />
        ))}
      </Section>
    </Container>
  );
};
export default Work;
