import cluster from "cluster";
import web from "./web";
 


const cCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    // Create a worker for each CPU
    for (let i = 0; i < cCPUs; i++) {
        cluster.fork();
    }
    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online.');
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died.');
    });

    


} else {
   web()
}