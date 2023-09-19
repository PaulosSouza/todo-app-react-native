import {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  type LegacyRef,
} from 'react'
import { View, TextInput, Text, StyleSheet, Keyboard } from 'react-native'
import { colors } from '../../styles'
import { styles } from './styles'

export interface CustomTextInputWithLabelProps {
  blur: () => void
}

interface Props {
  label: string
  placeholder: string
  value: string
  onValueChange: (text: string) => void
}

export function TextInputWithLabelComponent(
  { label, placeholder, value, onValueChange }: Props,
  ref: React.Ref<CustomTextInputWithLabelProps>,
) {
  const [shouldShowLabel, setShouldShowLabel] = useState(false)
  const textInputRef = useRef<TextInput>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        blur() {
          setShouldShowLabel(false)
          textInputRef.current?.blur()
        },
      }
    },
    [],
  )

  function handleTextFocus() {
    if (shouldShowLabel) {
      return
    }

    setShouldShowLabel(true)
  }

  function handleTextBlur() {
    if (value !== '') {
      return
    }

    setShouldShowLabel(false)
  }

  return (
    <View style={styles.container}>
      {shouldShowLabel && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={StyleSheet.compose(
          styles.input,
          shouldShowLabel ? styles.inputPaddingWithLabel : {},
        )}
        placeholder={shouldShowLabel ? '' : placeholder}
        placeholderTextColor={colors['gray-300']}
        autoComplete="off"
        value={value}
        onChangeText={onValueChange}
        onFocus={handleTextFocus}
        onBlur={handleTextBlur}
        onSubmitEditing={Keyboard.dismiss}
        ref={ref as LegacyRef<TextInput>}
      />
    </View>
  )
}

export const TextInputWithLabel = forwardRef<
  CustomTextInputWithLabelProps,
  Props
>(TextInputWithLabelComponent)
