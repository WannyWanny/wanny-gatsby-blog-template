export default {
  /**
   * basic Information
   */
  title: `wanny-backend.com`,
  description: `와니의 개발실록`,
  language: `ko`,
  siteUrl: `https://wanny-backend.com/`,
  ogImage: `/og-image.jpeg`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `이완희`,
    nickname: `Wanny`,
    stack: ['Backend', 'Java/Kotlin', 'Spring Boot'],
    bio: {
      email: `lejent3@naver.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'SeoKyeong Univ. Computer Engineering (2013.03-2020.02)',
    },
    social: {
      github: `https://github.com/WannyWanny`,
      linkedIn: `https://www.linkedin.com/in/%EC%99%84%ED%9D%AC-%EC%9D%B4-670823234/`,
      resume: ``,
    },
    dropdown: {
      tistory: 'https://danminblog.tistory.com/',
      velog: 'https://velog.io/@danmin20',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
