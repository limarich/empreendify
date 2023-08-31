
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
