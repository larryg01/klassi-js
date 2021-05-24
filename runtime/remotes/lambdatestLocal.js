/**
 klassi-js
 Copyright © 2016 - Larry Goddard

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
const wdio = require('webdriverio');
const lambdaTunnel = require('@lambdatest/node-tunnel');

// eslint-disable-next-line new-cap
const tunnelInstance = new lambdaTunnel();
wdio.tunnelInstance = tunnelInstance;
const { dataconfig } = global;

const tunnelArguments = {
  user: process.env.LAMBDATEST_USERNAME || dataconfig.ltlocal.userName || ltsecrets.userName,
  key: process.env.LAMBDATEST_ACCESS_KEY || dataconfig.ltlocal.accessKey || ltsecrets.accessKey,
  infoAPIPort: 8000,
  tunnelName: 'lttunnel',
};

(async () => {
  try {
    await tunnelInstance.start(tunnelArguments);
    console.log('Tunnel is Running Successfully 5');
    const tunnelRunningStatus = tunnelInstance.isRunning();
    console.log(`Tunnel is Running ? ${tunnelRunningStatus}`);
    const tunnelName = await tunnelInstance.getTunnelName();
    console.log(`Tunnel Name : ${tunnelName}`);
  } catch (error) {
    console.log(error);
  }
})();
