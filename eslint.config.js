import antfu from '@antfu/eslint-config'

export default antfu()
  .append({
    rules: {
      'pnpm/json-enforce-catalog': 'off',
      'pnpm/yaml-enforce-settings': 'off',
    },
  })
