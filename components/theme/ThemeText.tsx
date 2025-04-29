import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type TextType = "title" | "subtitle" | "body" | "caption";

interface Props {
    children: React.ReactNode;
    type?: TextType;
    style?: TextStyle | TextStyle[];
}

const ThemeText = ({ children, type = 'body', style }: Props) => {
    const [fontsLoaded] = useFonts({
        'ThemeFont-Regular': require('@/assets/fonts/LibreBaskerville-Regular.ttf'),
        'ThemeFont-Bold': require('@/assets/fonts/LibreBaskerville-Bold.ttf'),
        'ThemeFont-Italic': require('@/assets/fonts/LibreBaskerville-Italic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const textStyles = {
        title: styles.titleText,
        subtitle: styles.subtitleText,
        body: styles.bodyText,
        caption: styles.captionText,
    };

    return (
        <Text style={[textStyles[type], style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'ThemeFont-Bold',
        color: '#497941',
    },
    subtitleText: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'ThemeFont-Regular',
        color: 'white',
    },
    bodyText: {
        fontSize: 16,
        fontFamily: 'ThemeFont-Regular',
        color: 'white',
    },
    captionText: {
        fontSize: 15,
        fontFamily: 'ThemeFont-Italic',
        color: 'white',
    },
});

export default ThemeText;
