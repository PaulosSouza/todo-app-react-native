import { StyleSheet } from 'react-native'
import { colors, interFontFamily } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    height: 54,
    flexDirection: 'row',
  },

  label: {
    position: 'absolute',
    zIndex: 1,
    padding: 16,
    color: colors['gray-100'],

    borderColor: colors['gray-700'],
    backgroundColor: 'transparent',
    fontFamily: interFontFamily.regular,
  },

  inputPaddingWithLabel: {
    paddingLeft: 153,
  },

  input: {
    fontFamily: interFontFamily.regular,
    flex: 1,
    color: colors['gray-100'],
    padding: 16,

    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors['gray-700'],
    backgroundColor: colors['gray-500'],
  },
})
