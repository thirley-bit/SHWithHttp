import { getPhotosList } from '../services/PhotosServices';

const model = {
    namespace:'Photos',
    state:{
        photosArr:[], //相册列表
    },
    effects:{
        *getPhotosList({ payload },{ call, put }){
            const response = yield call(getPhotosList, payload)
            if(response.code == 1){
                let data = response.data.map(item => {
                    let image = item.photo_url
                    let value = item.photo_name
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
        }
    },
    reducers:{
        changePhotosList(state, { payload }){
            return {
                ...state,
                photosArr:payload
            }
        }
    }
};
export default model