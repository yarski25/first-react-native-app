module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          components: './src/components',
          screens: './src/screens',
          assets: './src/assets',
        },
      },
    ],
  ],
};
