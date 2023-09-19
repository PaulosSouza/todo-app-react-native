import { StyleSheet } from 'react-native'
import { colors, interFontFamily } from '../../../../styles'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    gap: 8,
  },

  quantity: {
    backgroundColor: colors['gray-400'],
    color: colors['gray-100'],
    paddingHorizontal: 8,
    borderRadius: 999,
    fontFamily: interFontFamily.bold,
  },

  createdText: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: interFontFamily.bold,
  },

  completedText: {
    color: colors.purple,
    fontSize: 16,
    fontFamily: interFontFamily.bold,
  },
})
