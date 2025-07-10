export const convertS3ToImageKit = (s3Url: string): string => {
  return s3Url.replace('https://av-blog.s3.ap-south-1.amazonaws.com/', '/');
};
