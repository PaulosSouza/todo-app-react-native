import Checkbox from 'expo-checkbox'
import { View, TouchableOpacity, Text } from 'react-native'

import trash from '../../../../assets/trash.svg'

import { styles } from './styles'
import { Image } from 'expo-image'
import { type Todo as TodoModel } from '../../../../models'
import { colors } from '../../../../styles'

interface Props {
  todo: TodoModel

  onToggleDoneStatus: (id: string, isDone: boolean) => void
  onRemove: (id: string) => void
}

export function Todo({ todo, onToggleDoneStatus, onRemove }: Props) {
  return (
    <View style={styles.todoContainer}>
      <Checkbox
        value={todo.done}
        onValueChange={(isChecked) => {
          onToggleDoneStatus(todo.id, isChecked)
        }}
        style={styles.todoDoneCheckbox}
        color={todo.done ? colors['purple-dark'] : colors.blue}
      />

      <Text style={styles.todoDescription}>{todo.description}</Text>

      <TouchableOpacity
        style={styles.todoButtonRemove}
        onPress={() => {
          onRemove(todo.id)
        }}
      >
        <Image
          alt="Trash button"
          source={trash}
          style={styles.todoButtonRemoveImage}
          contentFit="cover"
        />
      </TouchableOpacity>
    </View>
  )
}
