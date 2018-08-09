export const CLICKED_SECTION_NUMBER = 'CLICKED_SECTION_NUMBER';
export const TOGGLE_SELECTED_SECTION = 'TOGGLE_SELECTED_SECTION';
export const SECTIONS_TO_SHOW = 'SECTIONS_TO_SHOW';

export const clickedSectionNumber = payload => ({
  type: CLICKED_SECTION_NUMBER,
  payload,
});

export const toggleSelectedSection = payload => ({
  type: TOGGLE_SELECTED_SECTION,
  payload,
});

export const sectionsToShow = payload => ({
  type: SECTIONS_TO_SHOW,
  payload,
});
