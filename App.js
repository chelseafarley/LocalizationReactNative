// expo add expo-localization i18n-js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { en, es, ja } from './localizations';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default function App() {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, es, ja };
  i18n.locale = locale;

  return (
    <View style={styles.container}>
      { locale !== "en" ? <Button title="Switch to English" onPress={() => setLocale("en")} /> : undefined }
      { locale !== "es" ? <Button title="Switch to Spanish" onPress={() => setLocale("es")} /> : undefined }
      { locale !== "ja" ? <Button title="Switch to Japanese" onPress={() => setLocale("ja")} /> : undefined }
      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
