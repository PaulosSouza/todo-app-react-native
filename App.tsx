import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { colors } from './src/styles';
import { SplashScreen } from './src/components/SplashScreen';

export default function App() {
  return (
    <SplashScreen>
      <Home />

      <StatusBar
        style="light"
        translucent
        backgroundColor={colors['gray-700']}
      />
    </SplashScreen>
  );
}
