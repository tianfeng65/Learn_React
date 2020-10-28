import Index from '../Pages/Index'
import Video from '../Pages/Video'
import Work from '../Pages/Work'

const routeConfig = [
  {
    path: '/',
    title: '博客首页',
    exact: true,
    component: Index
  },
  {
    path: '/video',
    title: '视频教程',
    exact: false,
    component: Video
  },
  {
    path: '/work',
    title: '职场技能',
    exact: false,
    component: Work
  },
]

export default routeConfig