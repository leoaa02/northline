import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || 'iloiwqlg';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || '2025-02-19';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
    apiVersion,
  },
});
