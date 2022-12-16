import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {ReactNode, PropsWithChildren} from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPallette';

const Stack = createStackNavigator();

// eslint-disable-next-line prettier/prettier
// const RootStack = createStackNavigator<RootStackParamList>();

// type RootStackParamList = {
//   Home: undefined,
//   ColorPalette: undefined
//   children?: ReactNode
// };

// type Props = {
//   children: React.Node,
// };

const App = () => {
  return (
    // <GestureHandlerRootView>
    <NavigationContainer children={{}}>
      <Stack.Navigator initialRountName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
    // </GestureHandlerRootView>
  );
};

export default App;

// theme?: Theme | undefined;
//     linking?: LinkingOptions<RootParamList> | undefined;
//     fallback?: any;
//     documentTitle?: DocumentTitleOptions | undefined;
//     onReady?: (() => void) | undefined;
