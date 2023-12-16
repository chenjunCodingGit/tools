class SuperTask {
  constructor(parallelCount = 2) {
    this.parallelCount = parallelCount; // Concurrent quantity
    this.runningCount = 0; // The number of running tasks
    this.tasks = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      })
      this._run();
    })
  }

  // Run tasks in the tasks queue sequentially
  _run() {
    while(this.runningCount < this.parallelCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task().then(resolve, reject).finally(() => {
        this.runningCount--;
        this._run();
      })
    }
  }
}

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

const superTask = new SuperTask();
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`The task ${name} done.`)
    })
}


addTask(10000, 1);
addTask(5000, 2);
addTask(3000, 3);
addTask(4000, 4);
addTask(5000, 5);