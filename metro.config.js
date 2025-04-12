// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// const config = {
//   // Your existing Metro configuration options
// };

module.exports = wrapWithReanimatedMetroConfig(getDefaultConfig(__dirname));
