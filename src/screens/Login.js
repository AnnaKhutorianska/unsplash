// import React from 'react';
// import {
//   Alert,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';

// import { Controller, useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { SizedBox } from "../components/SizedBox";
import { icons } from "../constants";
import { SCREENS } from "../constants/screens";

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#023e8a",
      borderRadius: 8,
      height: 48,
      justifyContent: "center",
    },
    buttonTitle: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
    },
    input: {
      alignItems: "center",
      backgroundColor: "#d9d9d9",
      borderRadius: 8,
      flexDirection: "row",
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: "#023e8a",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundImage: `url(${icons.bgnLogin})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: "#023e8a",
      fontSize: 17,
      fontWeight: "400",
      lineHeight: 22,
    },
    textButton: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
    },
    textInput: {
      color: "#000",
      flex: 1,
    },
    title: {
      color: "#023e8a",
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 34,
    },
  });
}

// export const Login = () => {
//   const emailInput = React.useRef(null);
//   const passwordInput = React.useRef(null);
//   const {...methods} = useForm();
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (data) => console.log({data});

//   const styles = useStyles();

//   return (
//     <FormProvider {...methods}>

//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.root}>
//         <SafeAreaView style={styles.safeAreaView}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={styles.content}
//           >
//             <Text style={styles.title}>Welcome back!</Text>

//             <SizedBox height={8} />

//             <Text style={styles.subtitle}>Sign in to your account</Text>

//             <SizedBox height={32} />

//             <Pressable onPress={() => emailInput.current?.focus()}>
//               <View style={styles.form}>
//                 <Text style={styles.label}>Email</Text>

//                 <TextInput
//                     name="email"
//           label="Email"
//           placeholder="jon.doe@email.com"
//           keyboardType="email-address"
//                     rules={{ required: 'Email is required!' }}
//                 />

//               </View>
//             </Pressable>

//             <SizedBox height={16} />

//             <Pressable onPress={() => passwordInput.current?.focus()}>
//               <View style={styles.form}>
//                 <Text style={styles.label}>Password</Text>

//                 <TextInput
//           name="password"
//           label="Password"
//           secureTextEntry
//                     rules={{ required: 'Password is required!' }}
//         />

//               </View>
//             </Pressable>

//             <SizedBox height={16} />

//             <SizedBox height={16} />

//             <TouchableOpacity onPress={methods.handleSubmit(onSubmit)}>
//               <View style={styles.button}>
//                 <Text style={styles.buttonTitle}>Continue</Text>
//               </View>
//             </TouchableOpacity>
//           </KeyboardAvoidingView>
//         </SafeAreaView>
//       </View>
//     </TouchableWithoutFeedback>
//     </FormProvider>
//   );
// };

import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '1',
    password: '1'
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const styles = useStyles();

  const onSubmit = (data) => {
    if(data.password === credentials.password && data.email === credentials.email) navigation.navigate(SCREENS.Menu);
    // if(data.password !== credentials.password) return setError('password', 'Invalid password')
    // if(data.email !== credentials.email) return setError('email', 'Invalid email')
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView style={styles.content}>
          <Text style={styles.title}>Welcome back!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <SizedBox height={32} />
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <SizedBox height={8} />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Please enter email"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <Text>This is required.</Text>}
          </View>
          <SizedBox height={20} />
          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>
            <SizedBox height={8} />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Please enter password"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && <Text>This is required.</Text>}
          </View>
          <SizedBox height={20} />
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Continue</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
