import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4200/api/graphql',
  documents: 'apps/realtymyway/graphql/**/*.graphql',
  generates: {
    'apps/realtymyway/graphql/generated.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
