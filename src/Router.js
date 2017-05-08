import { createRouter } from '@expo/ex-navigation';

import LoginForm from './components/LoginForm';
import PageList from './components/PageList';
import PageCreate from './components/PageCreate';
import PageEdit from './components/PageEdit';

export default Router = createRouter(() => ({
    login: () => LoginForm,
    pageList: () => PageList,
    pageCreate: () => PageCreate,
    pageEdit: () => PageEdit
}));
