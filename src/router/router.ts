/* eslint-disable */
import { useRouter, useRoute,createRouter ,createWebHashHistory,createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import travel from '../components/travel/index.vue'
import overview from '../views/overview/index.vue'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
    path: '/', 
    redirect: (to) => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return 'overview'
    },
    component: travel,
    children:[
    {
    path: 'overview', 
    component: overview,
    }
    ],
    
   },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router