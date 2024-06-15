export const updateSubject = (subject) => ({
  type: 'UPDATE_SUBJECT',
  payload: subject
});

export const updateSubject2 = (subject2) => ({
  type: 'UPDATE_SUBJECT2',
  payload: subject2
});

export const updatePreviewText = (previewText) => ({
  type: 'UPDATE_PREVIEW_TEXT',
  payload: previewText
});


export const updateSubjectLine = (id, value) => ({
  type: 'UPDATE_SUBJECT_LINE',
  payload: { id, value },
});


export const addEmailSubject = (data) => ({
  type: 'ADD_EMAIL_SUBJECT',
  payload: data,
});

