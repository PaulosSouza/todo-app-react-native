import { View } from 'react-native'
import { styles } from './styles'
import { Image } from 'expo-image'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        alt="Main logo"
        style={styles.logo}
        source={logo}
        contentFit="cover"
      />
    </View>
  )
}
