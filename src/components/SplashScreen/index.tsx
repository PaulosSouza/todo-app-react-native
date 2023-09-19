import * as SplashScreenComponent from 'expo-splash-screen'
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { type ReactNode, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'

SplashScreenComponent.preventAutoHideAsync()

interface Props {
  children: ReactNode
}

export function SplashScreen({ children }: Props) {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError === null) {
      await SplashScreenComponent.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && fontError === null) {
    return null
  }

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={() => {
        onLayoutRootView()
      }}
    >
      {children}
    </SafeAreaView>
  )
}
