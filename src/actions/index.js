export const pushStep = (navigation) => ({
  type: 'PUSH_STEP',
  navigation,
});

export const popStep = (navigation) => ({
  type: 'POP_STEP',
  navigation,
});

export const dummyDispatch = (navigation) => ({
  type: 'DUMMY_DISPATCH',
  navigation,
});
