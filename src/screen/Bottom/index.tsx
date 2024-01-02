import { useRef, useMemo, useState } from "react";

import { BlurView } from "expo-blur";
import BottomSheet from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient"
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import { styles } from "./styles";


export function Bottom() {
  const [isOpen, setIsOpen] = useState(false)

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['30%'], []);


  function toggleSheet() {
    setIsOpen((prevSate) => !prevSate)
  }


  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("../../assets/bg-01.jpg")}
        style={styles.bgImg}
        resizeMode="cover"
      >
        {/* Só quero que o blur apareça quando o bottomSheet estiver aberto */}
        {isOpen &&
          <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.blur}>

            <BlurView
              intensity={3}
              style={styles.blur}
            />
          </Animated.View>
        }

        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.3)"]}
          style={styles.gradient}
          locations={[0.3, 0.6, 0.7]}

        />

      </ImageBackground>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={toggleSheet}>
        <Ionicons name={"options"} style={styles.options} />
      </TouchableOpacity>

      {isOpen &&
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={toggleSheet}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.textSheet}>
              Opções
            </Text>
          </View>

        </BottomSheet>}

    </View>
  )
}
