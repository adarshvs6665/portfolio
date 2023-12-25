import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import videoIdeDarkLarge from 'assets/v2/projects/video-ide/video-ide-dark-large.png';
import videoIdeDark from 'assets/v2/projects/video-ide/video-ide-dark.png';
import videoIdeDarkPlaceholder from 'assets/v2/projects/video-ide/video-ide-dark-placeholder.png';
import videoIdeLightLarge from 'assets/v2/projects/video-ide/video-ide-light-large.png';
import videoIdeLight from 'assets/v2/projects/video-ide/video-ide-light.png';
import videoIdeLightPlaceholder from 'assets/v2/projects/video-ide/video-ide-light-placeholder.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';

const title = 'VideoIDE';
const description =
  'An interactive educational platform for students, developed for KOKOS, where they can learn programming concepts by interacting and modiying the code in real-time.';
const roles = ['Front End Development', 'Back End Development', 'AWS', 'Deployment'];

export const VideoIDE = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="#"
          roles={roles}
        />

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [videoIdeDark, videoIdeDarkLarge]
                  : [videoIdeLight, videoIdeLightLarge]
              }
              placeholder={isDark ? videoIdeDarkPlaceholder : videoIdeLightPlaceholder}
              alt="Homepage of videoIDE coding section."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>My Contribution</ProjectSectionHeading>
              <ProjectSectionText>
                I worked as the front-end developer initially, and used the open source
                Scratch project by MIT for developing the required application. Later I
                was assigned to work in the backend pipeline, which converts the tutorial
                videos into an output file supported by Scratch. The primary goal of the
                project was to teach coding concepts to kids, in an interactive manner.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
