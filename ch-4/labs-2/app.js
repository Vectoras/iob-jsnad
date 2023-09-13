debugger;

function f(n = 99) {
  debugger;
  if (n === 0) throw Error();
  debugger;
  f(n - 1);
}
debugger;
f();
