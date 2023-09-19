import { StyleSheet } from 'react-native'
import { colors, interFontFamily } from '../../../../styles'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',

    borderTopWidth: 1,
    borderTopColor: colors['gray-400'],
  },

  image: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },

  title: {
    fontFamily: interFontFamily.bold,
    color: colors['gray-300'],
  },

  description: {
    fontFamily: interFontFamily.regular,
    color: colors['gray-300'],
  },
})
