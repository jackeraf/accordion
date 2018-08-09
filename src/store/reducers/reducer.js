import {
  CLICKED_SECTION_NUMBER,
  TOGGLE_SELECTED_SECTION,
  SECTIONS_TO_SHOW,
} from '../actions/action';

const initialState = {
  sections: [],
  numberOfSections: 4,
  curentClickedSectionNumber: null,
  toggleSelectedSection: false,
};

const AccordionReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CLICKED_SECTION_NUMBER:
      return { ...state, curentClickedSectionNumber: payload };
    case TOGGLE_SELECTED_SECTION:
      return { ...state, toggleSelectedSection: payload };
    case SECTIONS_TO_SHOW:
      return { ...state, sections: [...payload] };
    default:
      return state;
  }
};
export default AccordionReducer;
