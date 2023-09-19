import { Text, View } from 'react-native'
import { styles } from './styles'
import { Image } from 'expo-image'

import clipboard from '../../../../assets/clipboard.svg'

export function TodoEmpty() {
  return (
    <View style={styles.container}>
      <Image
        alt="Clipboard Icon"
        style={styles.image}
        source={clipboard}
        contentFit="cover"
      />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>

      <Text style={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
