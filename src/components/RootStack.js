import { createStackNavigator } from 'react-navigation';
import DetailsScreenContainer from '../containers/DetailsScreenContainer';
import HomeScreenContainer from '../containers/HomeScreenContainer';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreenContainer,
    },
    Details: {
      screen: DetailsScreenContainer,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
