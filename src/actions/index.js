export const push = (navigation) => ({
  type: 'PUSH_STEP',
  navigation,
});

export const pop = (navigation) => ({
  type: 'POP_STEP',
  navigation,
});

export const dummyDispatch = (navigation) => ({
  type: 'DUMMY_DISPATCH',
  navigation,
});
