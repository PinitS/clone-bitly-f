import { createSelector } from 'reselect';

const checkReduxSeletor = (state: { checkRedux: any }) => state.checkRedux;
// checkRedux นี่มันคืออยู่ใน reducer บรรทัดที่ 8 && 17
// selectCheckRedux บรรทัดที่ 4 เอาไปเรียกใช้
export const selectCheckRedux = createSelector(
  // [checkReduxSeletor] มันคือ ชื่อ บรรทัดที่ 3
  [checkReduxSeletor],
  ({ checkData }) => checkData
  // checkData นี่มันคืออยู่ใน reducer เป็น initialState กรณีทืี่มี หลาย key ก็ select ทีละอัน ก็คือ 6-11 ยกชุด แล้วเปลี่ยน จาก checkdata เป็น key อื่น
);