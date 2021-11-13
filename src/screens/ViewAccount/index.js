import React from "react"
import { Text, Box, useColorModeValue, useTheme } from "native-base"
import SafeAreaView from "../../components/SafeAreaView"

export default function ViewAccount({ route }) {
  const { colors } = useTheme()
  const purple = useColorModeValue(colors.purple[500], colors.purple[900])
  console.log(route)
  return (
    <SafeAreaView>
      <Box alignItems="stretch" p="8" marginX={"auto"} maxW={"xl"} width={"full"}>
        {route.params && (
          <Box bgColor={"white"} p={5} borderRadius={20} mt={5}>
            <Text fontSize={"md"} style={{ color: purple }} bold>
              Dados da conta
            </Text>
            {Object.entries(route.params).map(prop => (
              <Text key={prop[0]} marginY={0.5}>
                {prop[0].charAt(0).toUpperCase() + prop[0].slice(1) + ": " + prop[1]}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    </SafeAreaView>
  )
}
