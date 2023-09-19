import { StyleSheet } from 'react-native'
import { colors, interFontFamily } from '../../../../styles'

export const styles = StyleSheet.create({
  //  Todo list container
  todoListContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },

  // Todo
  todoContainer: {
    padding: 12,
    marginBottom: 8,
    gap: 12,

    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors['gray-400'],
    backgroundColor: colors['gray-500'],
  },

  todoDescription: {
    fontFamily: interFontFamily.regular,
    color: colors['gray-100'],
    flexShrink: 1,
  },

  todoDoneCheckbox: {
    borderRadius: 999,
  },

  todoButtonRemove: {
    width: 14,
    height: 15,
  },

  todoButtonRemoveImage: {
    width: 14,
    height: 16,
  },
})
