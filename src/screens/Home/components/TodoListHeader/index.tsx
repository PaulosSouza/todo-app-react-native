import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  createdQuantity: number;
  completedQuantity: number;
}

export function TodoListHeader({
  completedQuantity = 0,
  createdQuantity = 0,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.quantity}>{createdQuantity}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.completedText}>Concluidas</Text>
        <Text style={styles.quantity}>{completedQuantity}</Text>
      </View>
    </View>
  );
}
