import axios from 'axios';
import env from '../config/env';

let util = {};

/**
 * 生成网页的标题
 * @param {Object} to 即将要进入的目标路由对象
 */
util.title = function (to) {
  let title                 = to.matched ? to.matched[0].name + ' - 永安运用' : '永安运用';
      window.document.title = title;
};

const ajaxUrl =
  env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
      'https://www.url.com' :
      'https://debug.url.com';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

export default util;
