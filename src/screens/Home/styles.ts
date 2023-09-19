import { StyleSheet } from 'react-native';
import { colors, interFontFamily } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['gray-600'],
    flex: 1,
  },

  // Input
  addTodoContainer: {
    fontFamily: interFontFamily.regular,
    marginTop: -30,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 24,
  },

  // Input
  inputContainer: {
    position: 'relative',
    flex: 1,
    height: 54,
    flexDirection: 'row',
  },

  inputLabel: {
    position: 'absolute',
    zIndex: 1,
    padding: 16,
    color: colors['gray-100'],

    borderColor: colors['gray-700'],
    backgroundColor: 'transparent',
  },

  inputPaddingWithLabel: {
    paddingLeft: 145,
  },

  input: {
    flex: 1,
    color: colors['gray-100'],
    padding: 16,

    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors['gray-700'],
    backgroundColor: colors['gray-500'],
  },

  buttonAddTodoContainer: {
    height: 54,
    padding: 18,
    backgroundColor: colors['blue-dark'],
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonAddTodoIcon: {
    width: 18,
    height: 18,
  },

  todoListContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
});
