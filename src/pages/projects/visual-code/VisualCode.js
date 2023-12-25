import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import visualCodeDarkLarge from 'assets/v2/projects/visual-code/visual-code-dark-large.png';
import visualCodeDark from 'assets/v2/projects/visual-code/visual-code-dark.png';
import visualCodeDarkPlaceholder from 'assets/v2/projects/visual-code/visual-code-dark-placeholder.png';
import visualCodeLightLarge from 'assets/v2/projects/visual-code/visual-code-light-large.png';
import visualCodeLight from 'assets/v2/projects/visual-code/visual-code-light.png';
import visualCodeLightPlaceholder from 'assets/v2/projects/visual-code/visual-code-light-placeholder.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
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

const title = 'VisualCode';
const description =
  'A 3D educational game on KOKOS designed for children to learn coding basics, including loops, conditional statements, and many more. This interactive game enhances basic coding skills through a series of challenging levels.';
const roles = ['Front End Development', 'Back End Development', 'AWS', 'Deployment'];

export const VisualCode = () => {
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
        <ProjectHeader title={title} description={description} url="#" roles={roles} />

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [visualCodeDark, visualCodeDarkLarge]
                  : [visualCodeLight, visualCodeLightLarge]
              }
              placeholder={
                isDark ? visualCodeDarkPlaceholder : visualCodeLightPlaceholder
              }
              alt="Homepage of Visual Code."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>My Contribution</ProjectSectionHeading>
              <ProjectSectionText>
                My job was to create twelve new levels to elevate the learning experience. Using Three.js,
                I crafted these levels to be both fun and educational, integrating key
                coding concepts like loops and conditional statements seamlessly into
                gameplay. The goal was to make the learning journey enjoyable and
                accessible for young minds.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
