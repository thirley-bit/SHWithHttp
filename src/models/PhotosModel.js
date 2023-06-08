import { getPhotosList, getPhotoDetail } from '../services/PhotosServices';

const model = {
    namespace:'Photos',
    state:{
        photosArr:[], //相册列表
        photoCover:{}, //相册顶部（封面图，标题）
        photoDetail:[], //相册详情中的数据展示列表
    },
    effects:{
        *getPhotosList({ payload },{ call, put }){
            const response = yield call(getPhotosList, payload)
            console.log(response)
            if(response.code == 1){
                let data = response.data.map(item => {
                    let image = item.url
                    let value = item.name
                    return {
                        ...item,
                        image,
                        value
                    }
                })
                yield put({
                    type:'changePhotosList',
                    payload:data
                })
            }
            return response
        },
        *getPhotoCover({ payload },{ call, put }){
            const response = yield call(getPhotosList, payload)
            if(response.code == 1){
                yield put({
                    type:'changePhotoCover',
                    payload:response.data.filter(item => item.photo_id == payload)[0]
                })
            }
            return response
        },
        *getPhotoDetail({ payload },{ call, put }){
            const response = yield call(getPhotoDetail, payload)
            if(response.code == 1){
                yield put({
                    type:'changePhotoDetail',
                    payload:response.data
                })
            }
            return response
        }
    },
    reducers:{
        changePhotosList(state, { payload }){
            return {
                ...state,
                photosArr:payload
            }
        },
        changePhotoCover(state, { payload }){
            return {
                ...state,
                photoCover:payload
            }
        },
        changePhotoDetail(state, {payload}){
            return {
                ...state,
                photoDetail:payload
            }
        }
    }
};
export default model