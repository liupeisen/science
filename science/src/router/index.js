import Vue from 'vue'
import Router from 'vue-router'
import vueConmponents from '@/components/vueConmponents'
import indexConmponents from '@/components/indexConmponents'
import summaryConmponents from '@/components/summaryConmponents'
import introductConmponents from '@/components/introductConmponents'
import leaderConmponents from '@/components/leaderConmponents'
import studyConmponents from '@/components/studyConmponents'
import contactConmponents from '@/components/contactConmponents'
import mechanismConmponents from '@/components/mechanismConmponents'
import harvestConmponents from '@/components/harvestConmponents'
import interchangeConmponents from '@/components/interchangeConmponents'
import detailConmponents from '@/components/detailConmponents'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueConmponents',
      component: vueConmponents,
	  children: [
            {
                name: 'index',
                path: 'index',
				component: indexConmponents
            },
			{
                name: 'summary',
                path: 'summary',
				component: summaryConmponents,
				children: [
					{
						name: 'interduce',
						path: 'index',
						component: introductConmponents
					},
					{
						name: 'leader',
						path: 'leader',
						component: leaderConmponents
					},
					{
						name: 'study',
						path: 'study',
						component: studyConmponents
					},
					{
						name: 'contact',
						path: 'contact',
						component: contactConmponents
					},
					{ path: '/' , redirect:'index'}
				]
            },
			{
                name: 'mechanism',
                path: 'mechanism',
				component: mechanismConmponents,
				children: [
					{
						name: 'council',
						path: 'index'
					},
					{
						name: 'science',
						path: 'science'
					},
					{
						name: 'research',
						path: 'research'
					},
					{
						name: 'work',
						path: 'work'
					},
					{ path: '/' , redirect:'index'}
				]
            },
			{
                name: 'harvest',
                path: 'harvest',
				component: harvestConmponents,
				children: [
					{
						name: 'learning',
						path: 'index'
					},
					{
						name: 'think',
						path: 'think'
					},
					{
						name: 'writings',
						path: 'writings'
					},
					{
						name: 'scientific',
						path: 'scientific'
					},
					{
						name: 'prize',
						path: 'prize'
					},
					{ path: '/' , redirect:'index'}
				]
            },
			{
                name: 'interchange',
                path: 'interchange',
				component: interchangeConmponents
			},
			{
                name: 'detail',
                path: 'detail',
				component: detailConmponents
            },
			{ path: '/' , redirect:'index'}
	  ]
    },
    /* {
      path: '/EN',
      name: 'EN'
    }, */
	{path:'*',redirect:'/'}
  ]
})
