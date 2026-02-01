import pxtorem from 'postcss-pxtorem';
import postcssPxToEm from 'postcss-plugin-pxtoem';

export default {
  plugins: [
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*', '!margin*', '!padding*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
    }),
    postcssPxToEm({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['line-height', 'letter-spacing', 'margin*', 'padding*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
    }),
  ],
};
