import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#1e1f1e",
  },

  bgImg: {
    ...StyleSheet.absoluteFillObject // Seta o position como absoluto já pegando toda a extensão da tela.
  },

  gradient: {
    ...StyleSheet.absoluteFillObject // Seta o position como absoluto já pegando toda a extensão da tela.
  },

  blur: {
   flex: 1
  },

  button: {
    marginTop: 72,
    marginRight: 32,
    justifyContent: 'flex-end'
  },

  contentContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    marginBottom: -50,
  },

  textSheet: {
    color: '#000',
    fontSize: 18,
    alignItems: 'flex-start',
    margin: 24,
  },

  options: {
    fontSize: 24,
    color: "#FFF",
    alignSelf: 'flex-end',
  }

});
