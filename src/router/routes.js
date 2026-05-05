import Home from '@/views/Home';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/Detail';
import About from '@/views/About';
import Project from '@/views/Project';
import Message from '@/views/Message';

export default [
    {name: 'Home', path: '/', component: Home},
    {name: 'Blog', path: '/blog', component: Blog},
    {name: 'BlogCategory', path: '/blog/category/:id', component: Blog},
    {name: 'BlogDetail', path: '/blog/:id', component: BlogDetail},
    {name: 'About', path: '/about', component: About},
    {name: 'Project', path: '/project', component: Project},
    {name: 'Message', path: '/message', component: Message},
]