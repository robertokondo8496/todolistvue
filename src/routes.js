import Home from './components/Home';
import AddTarefa from './components/AddTarefa';

export const routes = [
    {
      path: '/',
      children: [
        {
          path: 'To-Do-List',
          name: 'To-Do-List',
          component: Home
        },
        {
          path: '/',
          redirect: 'To-Do-List'
        }
      ],
      component: Home
    },
    {
      path: '/Nova-Tarefa',
      component: AddTarefa
    },
    {
      path: '',
      redirect: '/'
    }
  ];