const START_EDIT = 'editModalController/START_EDIT' as const;
const END_EDIT = 'editModalController/END_EDIT' as const;

export const startEdit = () => ({ type: START_EDIT });
export const endEdit = () => ({ type: END_EDIT });

type EditModalControllerAction = ReturnType<typeof startEdit> | ReturnType<typeof endEdit>;

export const initialState: boolean = false;

const editModalController = (state: boolean = initialState, action: EditModalControllerAction) => {
  switch (action.type) {
    case START_EDIT:
      return true;
    case END_EDIT:
      return false;
    default:
      return false;
  }
};
export default editModalController;
