import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

function readEnv(
  name: 'NEXT_PUBLIC_SANITY_PROJECT_ID' | 'NEXT_PUBLIC_SANITY_DATASET' | 'NEXT_PUBLIC_SANITY_API_VERSION',
) {
  return process.env[name]?.trim() || '';
}

const projectId = readEnv('NEXT_PUBLIC_SANITY_PROJECT_ID');
const dataset = readEnv('NEXT_PUBLIC_SANITY_DATASET');
const apiVersion = readEnv('NEXT_PUBLIC_SANITY_API_VERSION');

const isSanityConfigured = Boolean(projectId && dataset && apiVersion);

let singletonClient: ReturnType<typeof createClient> | undefined;

function getSanityClient() {
  if (!isSanityConfigured) {
    return null;
  }

  if (!singletonClient) {
    singletonClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
    });
  }

  return singletonClient;
}

export const sanityClient = getSanityClient();

export const urlFor = (source: unknown) => {
  if (!projectId || !dataset) {
    return null;
  }

  return imageUrlBuilder({ projectId, dataset }).image(source as never);
};

export { isSanityConfigured };
