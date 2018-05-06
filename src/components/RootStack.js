import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';
import HomeScreenContainer from '../containers/HomeScreenContainer';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreenContainer,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
