'use strict';

const path = require('path');
const fs = require('fs');
const axios = require('axios')
const Controller = require('egg').Controller;

class ServicesController extends Controller {
  async index() {
    this.ctx.body = 'hi, mangosteen';
  }

  async download() {
    const { addr } = this.ctx.query
    console.log(addr)

    const dest = path.resolve(this.app.config.static.dir, './justfortest')
    const file = fs.createWriteStream(dest)

    file.on('finish', function () {
      file.close(() => console.log('download is done'));  // close() is async, call cb after close completes.
    });

    let i = 0
    // use stream
    let response = await axios({
      method: 'GET',
      url: addr,
      responseType: 'stream'
    })
    
    let fileType = '.' + response.headers['content-type'].split('/')[1]
    let fileSize = response.headers['content-length']

    console.log(fileType)
    console.log(fileSize)
    response.data.pipe(file)
    
    await new Promise((resolve, reject) => {
      response.data.on('end', () => {
        this.ctx.body = 'nice, download is done';
        resolve()
      })
      response.data.on('error', () => {
        this.ctx.body = 'opps, here is an error';
        reject()
      })
    })
    
    // a
    //   .then(response => {
    //     if (i++ === 1) console.log(response)

    //     // pipe the result stream into a file on disc
    //     response.data.pipe(file)
        
    //   })

  

    // request.get({ url: addr })
    //   .on('response', function (res) {
    //     const file = fs.createWriteStream(path.resolve(this.app.config.static.dir, './justfortest') + res.headers['content-type'].split('/')[1])
    //     res.pipe(file);
    //   }).on('error', (e) => {
    //     fs.unlink(dest)
    //     console.error(e);
    //   });

  }
}

module.exports = ServicesController;
