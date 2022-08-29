import { GET_ALL_SLIDE, GET_NEXT_IMAGE } from '../actions/slide.js';
import { imgFromDriveUrl } from '../components/shared/Helper';

const INITIAL_STATE = {
  isLoaded: false,
  sheets: [],
  title: '',
  description: '',
  nextImage: '',
};

export default function slide(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_SLIDE: {
      return {
        ...state,
        isLoaded: true,
        sheets: action.payload.sheets,
        title: action.payload.sheets[0].tieu_de,
        description: action.payload.sheets[0].mo_ta,
        nextImage: action.payload.nextImage,
        nextImage: imgFromDriveUrl(action.payload.sheets[0].hinh_anh),
      };
    }

    case GET_NEXT_IMAGE: {
      let nextIndex = action.payload.nextImage;
      return {
        ...state,
        nextImage: imgFromDriveUrl(state.sheets[nextIndex].hinh_anh),
      };
    }
    default:
      return state;
  }
}
