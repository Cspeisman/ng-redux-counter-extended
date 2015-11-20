export default function someString(state = '', {value,  type}) {
  if (type === 'SOME_STRING') return value;
  return state;
}
