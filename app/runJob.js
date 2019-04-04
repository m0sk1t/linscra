const runJob = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Job done') }, 10000);
});

module.exports = runJob;
