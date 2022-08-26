import { GET_ALL_SLIDE, GET_NEXT_IMAGE } from '../actions/slide.js';

const INITIAL_STATE = {
  isLoaded: false,
  sheets: [],
  title: '',
  description: '',
  nextImage: 0,
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
      };
    }
    case GET_NEXT_IMAGE: {
      return {
        ...state,
        nextImage: action.payload.nextImage,
      };
    }
    default:
      return state;
  }
}
