import {
    getInsertAlbum,
    getInsertAlbumImage,
    getAlbumList,
    getAlbumImageList,






  getPhotosList,
  getPhotoDetail,
} from "../services/PhotosServices";

const model = {
  namespace: "Photos",
  state: {
    albumList: [], //相册列表
    albumImageList: {}, //相册图片列表

    photoDetail: [], //相册详情中的数据展示列表
  },
  effects: {
    *getInsertAlbum({ payload }, { call }) {
        const response = yield call(getInsertAlbum, payload);
        return response;
    },
    *getInsertAlbumImage({ payload }, { call }) {
        const response = yield call(getInsertAlbumImage, payload);
        return response;
    },
    *getAlbumList({ payload }, { call, put }) {
        const response = yield call(getAlbumList, payload);
        console.log(response,'response');
        if (response.status == 200) {
            let resData = response.data.map(item=>{
                let value = item.albumName
                let image = item.coverImage
                return {
                    ...item,
                    value,
                    image
                }
              })
          yield put({
            type: "changeAlbumList",
            payload: resData,
          });
        }
        return response;
    },
    *getAlbumImageList({ payload }, { call, put }) {
        const response = yield call(getAlbumImageList, payload);
        if (response.status == 200) {
          yield put({
            type: "changeAlbumImageList",
            payload: response.data,
          });
        }
        return response;
    },




    *getPhotosList({ payload }, { call, put }) {
      const response = yield call(getPhotosList, payload);
      console.log(response);
      
      if (response.code == 1) {
        let data = response.data.map((item) => {
          let image = item.url;
          let value = item.name;
          return {
            ...item,
            image,
            value,
          };
        });
        yield put({
          type: "changePhotosList",
          payload: data,
        });
      }
      return response;
    },
    *getPhotoCover({ payload }, { call, put }) {
      const response = yield call(getPhotosList, payload);
      if (response.code == 1) {
        yield put({
          type: "changePhotoCover",
          payload: response.data.filter((item) => item.photo_id == payload)[0],
        });
      }
      return response;
    },
    *getPhotoDetail({ payload }, { call, put }) {
      const response = yield call(getPhotoDetail, payload);
      if (response.code == 1) {
        yield put({
          type: "changePhotoDetail",
          payload: response.data,
        });
      }
      return response;
    },
  },
  reducers: {
    changeAlbumList(state, { payload }) {
      return {
        ...state,
        albumList: payload,
      };
    },
    changeAlbumImageList(state, { payload }) {
        return {
          ...state,
          albumImageList: payload,
        };
    },



    changePhotoCover(state, { payload }) {
      return {
        ...state,
        photoCover: payload,
      };
    },
    changePhotoDetail(state, { payload }) {
      return {
        ...state,
        photoDetail: payload,
      };
    },
  },
};
export default model;
