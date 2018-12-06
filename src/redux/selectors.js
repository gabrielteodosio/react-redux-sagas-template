import { createSelector } from 'reselect';

const selectDemo = (state) => console.log(state, '-=-==-=-=-=- bla');

const makeSelectDemo = () => createSelector(
  [
    selectDemo,
  ],
  (innerState) => innerState != undefined ? innerState.toJS() : null
);

export default makeSelectDemo;
export {
  selectDemo
};
