import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import videoIdeDarkLarge from 'assets/v2/projects/video-ide/video-ide-dark-large.png';
import visualCodeLarge from 'assets/v2/projects/visual-code/visual-code-dark-large.png';
import mhealthLarge from 'assets/v2/projects/mhealth/mhealth-background-large.png';

export { Projects as default } from './Projects';

export function getStaticProps() {
  const allProjects = [
    {
      title: 'MHealth',
      abstract: 'A dedicated platform fostering mental well-being.',
      date: '2022-09-18',
      banner: mhealthLarge,
      // timecode: '00:04:36:30',
      featured: true,
      slug: 'mhealth',
    },
    {
      title: 'VisualCode',
      abstract:
        'A fun filled game for kids to nurture their knowledge in coding and improve problem-solving abilities ',
      date: '2023-02-21',
      banner: visualCodeLarge,
      // timecode: '00:04:36:30',
      featured: false,
      slug: 'visual-code',
    },
    {
      title: 'VideoIDE',
      abstract: 'An interactive educational platform for students.',
      date: '2023-08-21',
      banner: videoIdeDarkLarge,
      // timecode: '00:04:36:30',
      featured: false,
      slug: 'video-ide',
    },
  ];

  const featured = allProjects.find(project => project.featured);

  const projects = allProjects
    .filter(project => project.slug !== featured.slug)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { projects, featured },
  };
}
