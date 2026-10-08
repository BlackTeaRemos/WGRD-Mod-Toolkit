import type { ImageMetadata } from 'astro';

export interface InterfaceCaptureProps {
  image: ImageMetadata;
  alt: string;
  caption: string;
  version?: string;
}
