import HomePage from "@/views/pages/HomePage.vue";
import AboutPage from "@/views/pages/AboutPage.vue";
import PortfolioPage from "@/views/pages/PortfolioPage.vue";
import PhotosPage from "@/views/pages/PhotosPage.vue";
import NewsPage from "@/views/pages/NewsPage.vue";
import NotFoundPage from "@/views/pages/NotFoundPage.vue";

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      label: 'Homepage',
      title: 'Welcome to dippede doodle\'s space of creativity',
      description: 'Get an overview of what Alexander Bösch is currently working on. Sharpen your drawing skills, find inspiration and join the artistic journey.',
      og: {},
      x: {}
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      label: 'About Me',
      title: 'About Alexander Bösch a.k.a. dippede doodle!',
      description: 'Alexander Bösch exposed. This is your chance to see behind the scenes - get insight into the artists opinions, reasoning and more.',
      og: {},
      x: {}
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage,
    meta: {
      label: 'Artwork',
      title: 'Fair representation of what dippede doodle is capable of.',
      description: 'A library of polished and shipped artwork from dippede doodle an dedicated artist that constantly tries to push his drawing skills to the next level.',
      og: {},
      x: {}
    },
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosPage,
    meta: {
      label: 'Photos',
      title: 'Dippede doodles photo gallery.',
      description: 'Cheese! See the world through the lens of an european artist living in switzerland.',
      og: {},
      x: {}
    },
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
    meta: {
      label: 'News',
      title: 'Dippede doodles insane journey to become a comic book artist!',
      description: 'Poetry at its finest! Sharpen your drawing skills, gain the maximum and cast a spell. Available in handy blog posts.',
      og: {},
      x: {}
    },
  },
  {
    path: '/:notFound',
    name: '404',
    component: NotFoundPage,
    meta: {
      label: '404',
      og: {},
      x: {},
      nav: {
        show: false
      }
    },
  },
];
