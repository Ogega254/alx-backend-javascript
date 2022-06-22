/* eslint-disable */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer, 0, 10);

  try{
    dataView.setInt8(position, value);
    return dataView;
  } catch (ex) {
    throw Error('Position outside range');
  }
};
