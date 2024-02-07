//task1
function print(line) {
  let st = " ";
  let st2 = "*";
  let idx = line - 1;
  let idx2 = 1;
  for (let i = 0; i < line; i++) {
    process.stdout.write(st.repeat(idx));
    process.stdout.write(st2.repeat(idx2));
    idx--;
    idx2++;
    console.log();
  }
}
print(10);


//task2

while (true) {
  let num1 = Math.floor(Math.random() * 99) + 1;
  let num2 = Math.floor(Math.random() * (100 - num1)) + 1;
  let num3 = 100 - num1 - num2;
  if (num1 + num2 + num3 == 100) {
    console.log(num1, num2, num3);
    break;
  }
}
