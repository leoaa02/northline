'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || 'iloiwqlg';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production';

export default defineConfig({
  name: 'default',
  title: 'Northline Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema,
});
