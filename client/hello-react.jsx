import React from 'react';
import { styles } from './hello';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';

export class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar fixed flat>
          <a href="/home">React Toolbox Docs</a>
          <Button label="Hello world" raised accent />
        </AppBar>
        <h1 className={styles.helloReact}>React Example!</h1>
      </div>
    )
  }
}