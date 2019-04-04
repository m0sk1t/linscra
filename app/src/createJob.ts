const createJob = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Job done'); }, 3000);
  });
};

export default createJob;
