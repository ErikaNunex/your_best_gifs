interface RenditionInterface {
  url: string;
  width: string;
  height: string;
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
  frames?: string;
}

export interface ImagesInterface {
  fixed_height: RenditionInterface;
  fixed_height_still: RenditionInterface;
  fixed_height_downsampled: RenditionInterface;
  fixed_width: RenditionInterface;
  fixed_width_still: RenditionInterface;
  fixed_width_downsampled: RenditionInterface;
  fixed_height_small: RenditionInterface;
  fixed_height_small_still: RenditionInterface;
  fixed_width_small: RenditionInterface;
  fixed_width_small_still: RenditionInterface;
  downsized: RenditionInterface;
  downsized_still: RenditionInterface;
  downsized_large: RenditionInterface;
  downsized_medium: RenditionInterface;
  downsized_small: RenditionInterface;
  original: RenditionInterface;
  original_still: RenditionInterface;
  looping: { mp4: string };
  preview: { mp4: string };
  preview_gif: RenditionInterface;
}
