import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from 'components/mainContent/homePage/HomePage';
import ResumePage from 'components/mainContent/resumePage/ResumePage';

import 'components/mainContent/mainContent.css';

export interface IMainContentProps {
  sideBarReady?: boolean;
};

const MainContent = (props: IMainContentProps) => {
  return (
    <div className="main-content">
      <Switch>
          <Route exact path="/"><HomePage {...props} /></Route>
        <Route exact path="/resume"><ResumePage {...props} /></Route>
      </Switch>
    </div>
  );
}

export default MainContent;
