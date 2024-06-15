const initialState = {
  subject: '',
  subject2 : '',
  previewText: '',
  subjectLines: [
    { id: 1, value: '' },
    { id: 2, value: '' },
  ],
  emailSubjects: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SUBJECT':
      return {
        ...state,
        subject: action.payload
      };
    case 'UPDATE_SUBJECT2':
      return {
        ...state,
        subject2: action.payload
      };
    case 'UPDATE_PREVIEW_TEXT':
      return {
        ...state,
        previewText: action.payload
      };
    case 'UPDATE_SUBJECT_LINE':
      const { id, value } = action.payload;
      return {
        ...state,
        subjectLines: state.subjectLines.map(line =>
          line.id === id ? { ...line, value } : line
        ),
      };
    case 'ADD_EMAIL_SUBJECT':
      return {
        ...state,
        emailSubjects: [...state.emailSubjects, { id: Date.now(), data: action.payload }],
      };
  
    default:
      return state;
  }
};

export default rootReducer;