import { createRouter, createWebHistory, useRoute } from 'vue-router'
import routeSettings from './routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
})

const TITLE_ELEMENT = document.title
const AUTHOR_ELEMENT = document.querySelector('head meta[name="author"]')
const DESCRIPTION_ELEMENT = document.querySelector('head meta[name="description"]')
const KEYWORD_ELEMENT = document.querySelector('head meta[name="keywords"]')
const OG_TITLE_ELEMENT = document.querySelector('head meta[property="og:title"]')
const OG_IMAGE_ELEMENT = document.querySelector('head meta[property="og:image"]')
const OG_DESCRIPTION_ELEMENT = document.querySelector('head meta[property="og:description"]')
const OG_URL_ELEMENT = document.querySelector('head meta[property="og:url"]')
const X_CARD_ELEMENT = document.querySelector('head meta[name="twitter:card"]')
const X_TITLE_ELEMENT = document.querySelector('head meta[name="twitter:title"]')
const X_DESCRIPTION_ELEMENT = document.querySelector('head meta[name="twitter:description"]')
const X_IMAGE_ELEMENT = document.querySelector('head meta[name="twitter:image"]')
const X_CREATOR_ELEMENT = document.querySelector('head meta[name="twitter:creator"]')

router.beforeEach((to) => {
  document.title = to.meta.title || TITLE_ELEMENT;
  AUTHOR_ELEMENT.setAttribute('content',  to.meta.author || AUTHOR_ELEMENT.content)
  DESCRIPTION_ELEMENT.setAttribute('content',  to.meta.description || DESCRIPTION_ELEMENT.content)
  KEYWORD_ELEMENT.setAttribute('content',  to.meta.keywords || KEYWORD_ELEMENT.content)
  OG_TITLE_ELEMENT.setAttribute('content',  to.meta.og.title || OG_TITLE_ELEMENT.content)
  OG_IMAGE_ELEMENT.setAttribute('content',  to.meta.og.image || OG_IMAGE_ELEMENT.content)
  OG_DESCRIPTION_ELEMENT.setAttribute('content',  to.meta.og.description || OG_DESCRIPTION_ELEMENT.content)
  OG_URL_ELEMENT.setAttribute('content', document.location)
  X_CARD_ELEMENT.setAttribute('content',  to.meta.x.card || X_CARD_ELEMENT.content)
  X_TITLE_ELEMENT.setAttribute('content',  to.meta.x.title || OG_TITLE_ELEMENT.content)
  X_DESCRIPTION_ELEMENT.setAttribute('content',  to.meta.x.description || OG_DESCRIPTION_ELEMENT.content)
  X_IMAGE_ELEMENT.setAttribute('content',  to.meta.x.image || OG_IMAGE_ELEMENT.content)
  X_CREATOR_ELEMENT.setAttribute('content',  to.meta.x.creator || X_CREATOR_ELEMENT.content)
});

export default router
