import { FlatList, Keyboard, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Image } from 'expo-image'

import plus from '../../assets/plus.svg'

import { Header } from '../../components/Header'
import { TodoListHeader } from './components/TodoListHeader'
import React, { useRef, useState } from 'react'
import { TodoEmpty } from './components/TodoEmpty'
import {
  type CustomTextInputWithLabelProps,
  TextInputWithLabel,
} from '../../components/TextInputWithLabel'
import { type Todo as TodoModel } from '../../models'
import { Todo } from './components/Todo'

export function Home() {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const [todoDescription, setTodoDescription] = useState('')

  const textInputWithLabelRef = useRef<CustomTextInputWithLabelProps | null>(
    null,
  )
  const createdTodosQuantity = todos.length
  const completedTodosQuantity = todos.filter((todo) => todo.done).length

  function handleAddNewTodo(): void {
    const newTodo: TodoModel = {
      id: new Date().getTime().toString(),
      description: todoDescription,
      done: false,
    }

    setTodos((prevState) => [...prevState, newTodo])
    setTodoDescription('')

    textInputWithLabelRef.current?.blur()
    Keyboard.dismiss()
  }

  function handleToggleTodoDoneStatus(id: string, isDone: boolean): void {
    setTodos((prevTodosState) => {
      const currentTodoIndex = prevTodosState.findIndex(
        (todo) => todo.id === id,
      )
      prevTodosState[currentTodoIndex].done = isDone
      return [...prevTodosState]
    })
  }

  function handleRemoveTodo(id: string): void {
    setTodos((prevTodosState) =>
      prevTodosState.filter((todo) => todo.id !== id),
    )
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.addTodoContainer}>
        <TextInputWithLabel
          label="Descrição da tarefa"
          placeholder="Adicione uma nova tarefa"
          value={todoDescription}
          onValueChange={setTodoDescription}
          ref={textInputWithLabelRef}
        />

        <TouchableOpacity
          style={styles.buttonAddTodoContainer}
          onPress={handleAddNewTodo}
        >
          <Image
            alt="Plus icon"
            style={styles.buttonAddTodoIcon}
            source={plus}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.todoListContainer}>
        <TodoListHeader
          completedQuantity={completedTodosQuantity}
          createdQuantity={createdTodosQuantity}
        />

        <FlatList
          data={todos}
          renderItem={({ item: todo }) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggleDoneStatus={handleToggleTodoDoneStatus}
              onRemove={handleRemoveTodo}
            />
          )}
          ListEmptyComponent={TodoEmpty}
        />
      </View>
    </View>
  )
}
