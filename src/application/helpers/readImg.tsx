export function readImgSrc(path: string, src: string) {
  // media/uploads/summernote/2019
  // 5c74d428e01bb.jpg
  const host = 'https://fastcommerz.com';
  const url = host + '/' + path + '/' + src;
  return url;
}