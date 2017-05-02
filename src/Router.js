import React from 'react';
import  { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PageList from './components/PageList';
import PageCreate from './components/PageCreate';
import PageEdit from './components/PageEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.pageCreate()}
                    rightTitle="Add"
                    key="pageList"
                    component={PageList}
                    title="Pages"
                    initial
                />
                <Scene
                    key="pageCreate"
                    component={PageCreate}
                    title="Create Pages"
                />
                <Scene
                    key="pageEdit"
                    component={PageEdit}
                    title="Edit Pages"
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent;