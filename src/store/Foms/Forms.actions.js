
export function alterForms(value, formIndex, pageIndex, questionIndex) {
  return {
    type: 'ALTER_FORMS',
    payload: {
      value: value,
      indexes: [
        formIndex, pageIndex, questionIndex
      ]
    }
  }
}

export function updateCompletedFormsNumber(formIndex, value) {
  return {
    type: 'UPDATE_COMPLETED_FORMS_NUMBER',
    payload: {
      formIndex: formIndex,
      value: value
    }
  }
}
