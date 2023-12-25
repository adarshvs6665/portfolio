import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
  ExperienceHeader,
  ExperienceContainer,
} from 'layouts/Experience';
import { Fragment } from 'react';
import styles from './Experience.module.css';
import { timeLineDetails } from './experienceData'

const title = 'Experience & Academics';
const description =
  'Explore my professional journey and academic achievements through a dynamic timeline showcasing the companies I\'ve worked with and my educational milestones.';
const roles = ['User Research', 'UX Design', 'Interface Design'];

export const Experience = () => {
  return (
    <Fragment >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <Meta title={title} prefix="Experience" description={description} />
      <ExperienceContainer className={styles.slice}>
        {/* <ExperienceBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        /> */}
        <ExperienceHeader
          title={title}
          description={description}
          timeLine={timeLineDetails}
        />
      </ExperienceContainer>
      <Footer />
    </Fragment>
  );
};
