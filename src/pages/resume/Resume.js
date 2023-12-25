import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { CustomResumeHeader, ProjectContainer } from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Resume.module.css';

const title = 'Skills and Tools';
const description =
  'This project involved designing a better way for biomedical educators and learners to annotate digital slides together.';
const roles = ['User Research', 'UX Design', 'Interface Design'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        {/* <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        /> */}
        <CustomResumeHeader title={title} description={description} />
        {/* <ProjectSection >
          <ProjectSectionContent>
            <Techstack />
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
