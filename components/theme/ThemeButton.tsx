import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import ThemeText from './ThemeText';


type ButtonColor = "green" | "red";
type ButtonSize = "tall" | "short" | "square" 

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  color?: ButtonColor;
  shape?: ButtonSize;
}

const ThemeButton = ({ children, color = 'green', shape = 'short', onPress }: Props) => {
  const colorStyles = {
    green: styles.greenBackground,
    red: styles.redBackground,
  };
  const shapeStyles = {
    tall: styles.tallButton,
    short: styles.shortButton,
    square: styles.squareButton,
  };
  return (
    <TouchableHighlight style={[colorStyles[color], shapeStyles[shape]]} onPress={ onPress }>
      {children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBackground: {
    backgroundColor: '#f7e7c5',
  },
  redBackground: {
    backgroundColor: 'red',
  },
  tallButton: {
    width: '80%',
    height: '20%',
  },
  shortButton: {
    width: '80%',
    height: '10%',
  },
  squareButton: {
    width: '20%',
    height: '20%',
  },
});

export default ThemeButton;