import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.ca',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
  nsext: '.tns',
  webext: '',
  shared: true,
} as NativeScriptConfig
