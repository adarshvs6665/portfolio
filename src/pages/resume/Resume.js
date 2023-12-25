import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { CustomResumeHeader, ProjectContainer } from 'layouts/Project';
import { Fragment } from 'react';

const title = 'My Resume';
const description = 'Read about my qualifications and experience.';

export const Resume = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer>
        <CustomResumeHeader title={title} description={description} />
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
