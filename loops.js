function forLoop(arr) {
for (let i=0; i<25; i++) {
  if(arr[i] === 1) {
  console.log(`I am 1 strange loop.`);
  }
  else {
    console.log(`I am ${arr[i]} strange loops.`)
    }
  }
  return arr;
}