import axIos from 'axios';
axIos.defaults.timeout = 10000;
axIos.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axIos.defaults.baseURL = 'http://sdx.hefupb.com';
export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axIos.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchQuickSearch(url) {
    return new Promise((resolve, reject) => {
      axIos.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axIos.post(url, params, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        responseType: 'json',
        transformRequest: [function(data) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(res => {
        resolve(res.data);
      }).catch(error => {
        reject(error);
      })
    })
  }
}
