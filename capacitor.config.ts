import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.witcher.questwise',
  appName: 'Witcher Quest Wise',
  webDir: 'dist',
  android: {
    allowMixedContent: false
  }
};

export default config;
