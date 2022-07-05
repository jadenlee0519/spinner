// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

const spinnerArr = ['\r|'    , '\r/    ', '\r-    ', '\r\    '];

let timer = 0;

spinnerArr.forEach((element) => {
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200;
});