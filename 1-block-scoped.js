export default function taskBlock(trueOrFalse) {
  // Using let and const instead of var for better scoping
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Removing var to avoid variable redeclaration in the same scope
    task = true;
    task2 = false;
  }

  return [task, task2];
}

