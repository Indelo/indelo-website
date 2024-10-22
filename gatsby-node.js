/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    resolve: {
      alias: {
        '../../theme.config$': path.join(
          __dirname,
          'src/semantic-ui/theme.config',
        ),
      },
    },
  });
};
