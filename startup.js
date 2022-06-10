//Load env
const dotenv = require('dotenv');
dotenv.config();

// Get dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const util = require("util");

//Init express
const app = express();

const child_process = require('child_process');

// Parsers for POST data
app.use(bodyParser.json({
    limit: '500mb'
}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '500mb'
}));

const router = express.Router();
const {spawn} = require("child_process");

const process = [];

router.get('/node', async (req, res) => {
    const nodeSpawn = () => spawn("node", ["server.js"]);
    return startChild(nodeSpawn, 'Listening on port 8080').then((time) => {
        res.status(200).json({time: `${time}s`});
    });
})

router.get('/spring', async (req, res) => {
    const springSpawn = () => spawn("java", ["-jar", "../spring-boot-api/target/Recrutement-0.0.1-SNAPSHOT.jar"]);
    return startChild(springSpawn, 'Started RecrutementApplication in').then((time) => {
        res.status(200).json({time: `${time}s`});
    });
})

router.get('/dotnet', async (req, res) => {
    const springSpawn = () => spawn("dotnet", ["run", "--no-build", "--project", "../csharp-api/csharp-api"]);
    return startChild(springSpawn, 'Now listening on: http://localhost:8080').then((time) => {
        res.status(200).json({time: `${time}s`});
    });
})

router.get('/cpp', async (req, res) => {
    const springSpawn = () => spawn("", [""]);
    return startChild(springSpawn, 'Now listening on: http://localhost:8080').then((time) => {
        res.status(200).json({time: `${time}s`});
    });
})

router.get('/clear', async (req, res) => {
    process.forEach((child) => {
        child.stdin.pause();
        child.kill();
    });
    console.log("all child killed");
    res.status(200).json("done");
})

const startChild = (spawnFnc, endMessage) => {
    const startTime = Date.now();
    return new Promise((resolve) => {
        const child = spawnFnc();
        process.push(child);
        child.stdout.on("data", data => {
            console.log(`${data}`)
            if (data.toString().indexOf(endMessage) !== -1) {
                resolve((Date.now() - startTime) / 1000);
            }
        });
        child.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });
        child.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });
        child.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
    })
}


// Set our API routes
app.use('/', router);

/**
 * Get port from environment and store in Express.
 */
const port = '8082';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
