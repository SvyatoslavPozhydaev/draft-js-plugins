// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      // add your custom loaders.
    ],
  },
  resolve: {
    alias: {
      'draft-js-plugins-editor': path.join(__dirname, '..', 'draft-js-plugins-editor', 'src'),
      'draft-js-hashtag-plugin': path.join(__dirname, '..', 'draft-js-hashtag-plugin', 'src'),
      'draft-js-linkify-plugin': path.join(__dirname, '..', 'draft-js-linkify-plugin', 'src'),
      'draft-js-anchor-plugin': path.join(__dirname, '..', 'draft-js-anchor-plugin', 'src'),
      'draft-js-mention-plugin': path.join(__dirname, '..', 'draft-js-mention-plugin', 'src'),
      'draft-js-sticker-plugin': path.join(__dirname, '..', 'draft-js-sticker-plugin', 'src'),
      'draft-js-undo-plugin': path.join(__dirname, '..', 'draft-js-undo-plugin', 'src'),
      'draft-js-emoji-plugin': path.join(__dirname, '..', 'draft-js-emoji-plugin', 'src'),
      'draft-js-counter-plugin': path.join(__dirname, '..', 'draft-js-counter-plugin', 'src'),
      'draft-js-drag-n-drop-plugin': path.join(__dirname, '..', 'draft-js-drag-n-drop-plugin', 'src'),
      'draft-js-drag-n-drop-upload-plugin': path.join(__dirname, '..', 'draft-js-drag-n-drop-upload-plugin', 'src'),
      'draft-js-inline-toolbar-plugin': path.join(__dirname, '..', 'draft-js-inline-toolbar-plugin', 'src'),
      'draft-js-static-toolbar-plugin': path.join(__dirname, '..', 'draft-js-static-toolbar-plugin', 'src'),
      'draft-js-side-toolbar-plugin': path.join(__dirname, '..', 'draft-js-side-toolbar-plugin', 'src'),
      'draft-js-focus-plugin': path.join(__dirname, '..', 'draft-js-focus-plugin', 'src'),
      'draft-js-alignment-plugin': path.join(__dirname, '..', 'draft-js-alignment-plugin', 'src'),
      'draft-js-image-plugin': path.join(__dirname, '..', 'draft-js-image-plugin', 'src'),
      'draft-js-resizeable-plugin': path.join(__dirname, '..', 'draft-js-resizeable-plugin', 'src'),
      'draft-js-buttons': path.join(__dirname, '..', 'draft-js-buttons', 'src'),
      'draft-js-video-plugin': path.join(__dirname, '..', 'draft-js-video-plugin', 'src'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },

  }
};
