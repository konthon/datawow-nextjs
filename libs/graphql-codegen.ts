import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3001/graphql',
  documents: [
    'GraphQL/**/*.gql',
    'GraphQL/**/*.graphql',
    '!GraphQL/_generated.ts',
  ],
  generates: {
    'GraphQL/_generated.ts': {
      plugins: [
        { add: { content: '/* eslint-disable */' } },
        { add: { content: '/* prettier-ignore */' } },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        documentMode: 'documentNode',
        declarationKind: 'interface',
      },
    },
  },
}

export default config
