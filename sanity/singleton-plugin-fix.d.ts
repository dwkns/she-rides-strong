import 'sanity-plugin-singleton-tools'

// Temporary fix for the missing type definition
// See https://github.com/plsrd/sanity-plugin-singleton-tools/issues/10
declare module 'sanity-plugin-singleton-tools' {
  export interface SingletonPluginOptions {
    singleton?: boolean
  }
}