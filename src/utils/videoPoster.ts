export const getCloudinaryPoster = (videoUrl: string): string | undefined => {
  if (!videoUrl.includes('res.cloudinary.com') || !videoUrl.includes('/video/upload/')) {
    return undefined;
  }

  return videoUrl
    .replace('/video/upload/', '/video/upload/so_1,q_auto,f_jpg/')
    .replace(/\.(mp4|mov|webm)(\?.*)?$/i, '.jpg$2');
};
