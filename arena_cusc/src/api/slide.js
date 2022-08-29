import axiosClient from './axiosClient';
var sheetName = 'slide';

const slide = {
  getAll: () => {
    const url = '/' + sheetName;
    return axiosClient.get(url);
  },
};

export default slide;
