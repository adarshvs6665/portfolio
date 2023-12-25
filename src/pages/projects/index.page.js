import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import videoIdeDarkLarge from 'assets/v2/projects/video-ide/video-ide-dark-large.png';


export { Projects as default } from './Projects';

export function getStaticProps() { 
  const allProjects = [
    {
      title: 'Biomedical image collaboration',
      abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
      date: '2022-04-21',
      banner: sliceBackgroundLarge,
      timecode: '00:04:36:30',
      featured: false,
      slug: 'slice'
    },
    {
      title: 'TODO App',
      abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
      date: '2022-04-21',
      banner: '/static/hello-world-banner.jpg',
      timecode: '00:04:36:30',
      featured: false,
      slug: 'hello-world'
    },
    {
      title: 'Sudoku App',
      abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
      date: '2022-04-21',
      banner: '/static/hello-world-banner.jpg',
      timecode: '00:04:36:30',
      featured: false,
      slug: 'hello-world'
    },
    {
      title: 'VideoIDE',
      abstract: "An interactive educational platform for students.",
      date: '2023-04-21',
      banner: videoIdeDarkLarge,
      timecode: '00:04:36:30',
      featured: true,
      slug: 'video-ide'
    },
    {
      title: 'VisualCode',
      abstract: "A fun filled game for kids to nurture their knowledge in coding and improve problem-solving abilities ",
      date: '2022-04-21',
      banner: '/static/hello-world-banner.jpg',
      timecode: '00:04:36:30',
      featured: false,
      slug: 'visual-code'
    },
    
  ]

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
