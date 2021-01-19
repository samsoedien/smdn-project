module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    "@storybook/preset-create-react-app"
  ]
}