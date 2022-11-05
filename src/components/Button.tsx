import { View, Text, StyleSheet, Pressable } from "react-native";

export const Button = () => {
  return (
    <Pressable style={styles.container}>
      {/* Icon */}
      <Text>Flash</Text>
      <Text>Button</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
})