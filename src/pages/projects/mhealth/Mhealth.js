import mhealthAnnotationLarge from 'assets/v2/projects/mhealth/mhealth-annotation-large.png';
import mhealthAnnotationPlaceholder from 'assets/v2/projects/mhealth/mhealth-annotation-placeholder.png';
import mhealthAnnotation from 'assets/v2/projects/mhealth/mhealth-annotation.png';
import mhealthBackgroundBarLarge from 'assets/v2/projects/mhealth/mhealth-background-bar-large.png';
import mhealthBackgroundBarPlaceholder from 'assets/v2/projects/mhealth/mhealth-background-bar-placeholder.png';
import mhealthBackgroundBar from 'assets/v2/projects/mhealth/mhealth-background-bar.png';
import mhealthBackgroundLarge from 'assets/v2/projects/mhealth/mhealth-background-large.png';
import mhealthBackgroundPlaceholder from 'assets/v2/projects/mhealth/mhealth-background-placeholder.png';
import mhealthBackground from 'assets/v2/projects/mhealth/mhealth-background.png';
import mhealthSidebarYogaLarge from 'assets/v2/projects/mhealth/mhealth-sidebar-yoga-large.png';
import mhealthSidebarYogaPlaceholder from 'assets/v2/projects/mhealth/mhealth-sidebar-yoga-placeholder.png';
import mhealthSidebarYoga from 'assets/v2/projects/mhealth/mhealth-sidebar-yoga.png';
import mhealthSidebarTasksLarge from 'assets/v2/projects/mhealth/mhealth-sidebar-tasks-large.png';
import mhealthSidebarTasksPlaceholder from 'assets/v2/projects/mhealth/mhealth-sidebar-tasks-placeholder.png';
import mhealthSidebarTasks from 'assets/v2/projects/mhealth/mhealth-sidebar-tasks.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Mhealth.module.css';

const title = 'MHealth';
const description =
  'Evaluates mental health via tailored questions, assigns scores, and connects users with doctors for consultations. It also offers engaging tasks for user involvement.';
const roles = ['Flutter', 'NodeJS', 'AWS', 'mongodb'];

export const Mhealth = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={mhealthBackground}
          srcSet={`${mhealthBackground.src} 1280w, ${mhealthBackgroundLarge.src} 2560w`}
          placeholder={mhealthBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} url="#" roles={roles} />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>How it works</ProjectSectionHeading>
              <ProjectSectionText>
                MHealth is an innovative mobile application designed to assess and support
                mental health for college students. The app employs a series of targeted
                questions to evaluate users' mental well-being, generating personalized
                scores.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[mhealthSidebarTasks, mhealthSidebarTasksLarge]}
                placeholder={mhealthSidebarTasksPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[mhealthSidebarYoga, mhealthSidebarYogaLarge]}
                placeholder={mhealthSidebarYogaPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[mhealthBackgroundBar, mhealthBackgroundBarLarge]}
                  placeholder={mhealthBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[mhealthAnnotation, mhealthAnnotationLarge]}
                  placeholder={mhealthAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Other details</ProjectSectionHeading>
              <ProjectSectionText>
                Through MHealth, individuals can connect with healthcare professionals for
                virtual consultations and receive guidance. Engaging tasks are also
                integrated to encourage user involvement, promoting mental wellness
                through a comprehensive approach.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Development Overview</ProjectSectionHeading>
              <ProjectSectionText>
                The backend was crafted using ExpressJS and mongoDB, hosted on AWS. And
                the UI developed with flutter. This dynamic duo made mental health
                assessments, doctor chats, and fun tasks possible. The result? A seamless
                user experience from start to finish!
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
