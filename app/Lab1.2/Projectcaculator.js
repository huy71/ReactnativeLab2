import { StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

const Caculator = () => {
  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);
  const bgColorFunction = (darkMode) ? "#4E4E4E" : "#ededed";
  const bgColorNumber = (darkMode) ? "#393946" : "#fff";
  const bgColorResult = (darkMode) ? "#2E2F38" : "#f5f5f5";
  const bgColorThemeButton = (darkMode) ? "#5E5E5E" : "#e5e5e5";
  const textColorHistory = (darkMode) ? "#85878B" : "#7c7c7c";
  const colorIcon = (darkMode) ? "white" : "black";

  // Buttons
  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."]
  ];

  const buttonsRight = ["/", "*", "-", "+", "="];

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const calculator = () => {
    let lastChar = currentNumber[currentNumber.length - 1];
    if (["/", "*", "-", "+"].includes(lastChar)) {
      setCurrentNumber(currentNumber);
      return;
    }
    let result = eval(currentNumber).toString();
    setCurrentNumber(result);
  };

  const handleInput = (buttonPress) => {
    switch (buttonPress) {
      case "+":
      case "-":
      case "*":
      case "/":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case "C":
        Vibration.vibrate(35);
        setCurrentNumber("");
        setLastNumber("");
        break;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        break;
      default:
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  return (
    <View style={mystyles.container}>
      <View style={{...mystyles.containerResult, backgroundColor: bgColorResult}}>
        <TouchableOpacity 
          style={{...mystyles.themeButton, backgroundColor: bgColorThemeButton}}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo name={darkMode ? "light-up" : "moon"} size={40} style={{color: colorIcon}} />
        </TouchableOpacity>
        <Text style={{...mystyles.historyText, color: textColorHistory}}>{lastNumber}</Text>
        <Text style={mystyles.resultText}>{currentNumber}</Text>
      </View>

      <View style={mystyles.containerButton}>
      <View style={{...mystyles.containerButtonLeft, backgroundColor: bgColorNumber}}>
          {buttonsLeft.map((row, index) => (
            <View key={index} style={mystyles.containerRow}>
              {row.map((item) => (
                <TouchableOpacity key={item} style={mystyles.button} onPress={() => handleInput(item)}>
                  <Text style={mystyles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={mystyles.containerButtonRight}>
          {buttonsRight.map((item) => (
            <TouchableOpacity key={item} style={{...mystyles.button}} onPress={() => handleInput(item)}>
              <Text style={{...mystyles.buttonText, color: "#fff"}}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const mystyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  containerButtonLeft: {
    flex: 3
  },
  containerButtonRight: {
    flex: 1,
    backgroundColor: "#00b9d6"
  },
  containerButton: {
    flex: 2,
    flexDirection: "row"
  },
  themeButton: {
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 999,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  historyText: {
    fontSize: 20,
    marginRight: 18
  },
  resultText: {
    color: "#00b9d6",
    fontSize: 35,
    marginRight: 15
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  containerRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Caculator;
