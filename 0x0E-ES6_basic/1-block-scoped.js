export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
    let  task = !task2;
    }
  
    return [task, task2];
  }