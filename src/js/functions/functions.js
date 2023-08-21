export function digitConvert(array) {
  const arrayOfDigits = Array.from(String(array), Number);
  setArrayDigits(arrayOfDigits);
  console.log(arrayDigits);
  return arrayOfDigits;
}
