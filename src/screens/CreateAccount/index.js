import React, { useState, useRef } from "react"
import {
  Input,
  VStack,
  Icon,
  Box,
  FormControl,
  Button,
  Slider,
  useColorModeValue,
  useTheme,
  Select,
  CheckIcon,
} from "native-base"
import { Ionicons } from "@expo/vector-icons"
import SafeAreaView from "../../components/SafeAreaView"
import { Switch } from "react-native"

export default function CreateAccount({ navigation }) {
  const { colors } = useTheme()
  const violet = useColorModeValue(colors.violet[500], colors.violet[900])
  const [bankAccount, setBankAccount] = useState({
    nome: "",
    idade: "",
    sexo: "",
    limite: 500,
    brasileiro: false,
  })

  // Input refs
  const nome = useRef()
  const idade = useRef()

  function handleCreateAcc() {
    console.log(bankAccount)
    navigation.push("Conta criada com sucesso", bankAccount)
  }

  return (
    <SafeAreaView>
      <Box alignItems="stretch" p="8" marginX={"auto"} maxW={"xl"} width={"full"}>
        <VStack alignItems="stretch" space="5">
          <FormControl>
            <FormControl.Label mb="3">Nome</FormControl.Label>
            <Input
              ref={nome}
              placeholder="Nome"
              ariaLabel={"Nome"}
              value={bankAccount.nome}
              onChangeText={text => setBankAccount({ ...bankAccount, nome: text })}
              borderRadius={10}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label mb="3">Idade</FormControl.Label>
            <Input
              ref={idade}
              placeholder="Idade"
              ariaLabel={"Idade"}
              value={bankAccount.idade}
              type={"number"}
              maxLength={2}
              onChangeText={text =>
                setBankAccount({ ...bankAccount, idade: text.replace(/[^0-9]/g, "") })
              }
              borderRadius={10}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label mb="3">Sexo</FormControl.Label>
            <Select
              selectedValue={bankAccount.sexo}
              minWidth="200"
              accessibilityLabel="Selecione seu sexo"
              placeholder="Selecione seu sexo"
              _selectedItem={{
                bg: "purple.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={value => setBankAccount({ ...bankAccount, sexo: value })}>
              <Select.Item label="Hombre" value="M" />
              <Select.Item label="Moça" value="F" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label mb="3">Limite</FormControl.Label>
            <Slider
              colorScheme={"purple"}
              defaultValue={500}
              minValue={0}
              maxValue={1000}
              accessibilityLabel="Limite da conta"
              step={10}
              onChange={value => setBankAccount({ ...bankAccount, limite: value })}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </FormControl>
          <FormControl>
            <FormControl.Label mb="3">Brasileiro</FormControl.Label>

            <Switch
              trackColor={{ false: "#767577", true: violet }}
              thumbColor={bankAccount.brasileiro ? violet : "#f4f3f4"}
              onValueChange={value => {
                setBankAccount({ ...bankAccount, brasileiro: value })
              }}
              value={bankAccount.brasileiro}
            />
          </FormControl>
        </VStack>
        <Button
          ariaLabel={"Criar conta"}
          borderRadius={10}
          colorScheme="violet"
          mt="5"
          rightIcon={<Icon as={Ionicons} name="add" size="sm" />}
          onPress={handleCreateAcc}>
          Criar conta
        </Button>
      </Box>
    </SafeAreaView>
  )
}
