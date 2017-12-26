let base_url = 'http://h5.yxxy.tv';
let cookie_domain = 'h5.yxxy.tv';

if (process.env.NODE_ENV=='development') {
  base_url = 'http://shangxueyuan.app/h5/web/?r=';
  cookie_domain = 'shangxueyuan.app';
}

export default {
  base_url,
  img_url: 'http://pic.yxxy.tv',
  cookie_domain,
}