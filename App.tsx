import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home } from './src/screen/Home';
import { Bottom } from './src/screen/Bottom';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" translucent backgroundColor='transparent' />
      <Bottom />
    </GestureHandlerRootView>
  );
}

