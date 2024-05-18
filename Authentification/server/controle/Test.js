const {spawn} = require('child_process');

const test =  async(req,res) => {

  const py = spawn("python", ['server/scripts_python/test.py']);

  const result = await new Promise((resolve,reject) => {
    let output;

    py.stdout.on("data", (data) => {
      output = data.toString();
      console.log(output)
    });

    py.stderr.on("data", (data) => {
      console.error(`[python] Error occured :${data}`);
      reject(`Error occured in backendInit.py`);
    });
 
    py.on("exit", (code) => {
      console.log(`child process exited with code ${code}`);
      resolve(output);
    });
  });
  res.json(result);  
}

module.exports = test;
