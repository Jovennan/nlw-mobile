import React, { Fragment } from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import * as Font from 'expo-font'

import Routes from './src/routes'

let customFonts = {
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold,
  Ubuntu_700Bold
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true})
  }
  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Routes />
        </Fragment>
      );
    } else {
      return <AppLoading />
    }
  }
}
