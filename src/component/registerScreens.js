import { Navigation } from 'react-native-navigation';

import Article from './homepage/home';

export default function registerScreens() {
  Navigation.registerComponent('homepage.home', () => Article);
}
