// const {Builder, By, Key, until} = require('selenium-webdriver');
// // const proxy = require('selenium-webdriver/proxy');

// (async function() {
//     let driver;
//     try {
//       driver = await new Builder()
//           .forBrowser('chrome')
//           .usingServer('http://localhost:4444/wd/hub')
//         //   .setChromeOptions(
//             //   new Options().setMobileEmulation({deviceName: 'Nexus 5X'}))
//           .build();
//       await driver.get('http://www.google.com/ncr');
//       await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//       await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//     } finally {
//       await driver && driver.quit();
//     }
//   })().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));

// var driver = new Builder()
//     .forBrowser('chrome')
//     .usingServer('http://localhost:4444/wd/hub')
//     .build();

// driver.get('http://www.google.com/ncr')
//     .then(_ =>
//         driver.findElement(By.name('q')).sendKeys('NBA', Key.RETURN))
//     .then(_ => driver.wait(until.titleIs('NBA - Google Search'), 1000))
//     .then(_ => driver.quit());

// *****************************************************************

// const {Builder, By, Key, until} = require('selenium-webdriver');
// // const { Proxy, ProxyKind } = require('selenium-webdriver/proxy');
// const chrome = require('selenium-webdriver/chrome');
// // const proxy = require('selenium-webdriver/proxy');
// // let capabilities = new Capabilities();
// // capabilities.setProxy(proxy.socks('appdetex:casthello@200.58.105.117:13129'));
// let option = new chrome.Options();
// // option.addArguments('--proxy-auth=appdetex:casthello');
// option.addArguments('--proxy-server=http://200.58.105.117:13129');
// // console.log('option', option);
    
// var driver = new Builder()
//     .forBrowser('chrome')
//     .usingServer('http://localhost:4444/wd/hub')
//     // .setProxy(proxy.socks('appdetex:casthello@200.58.105.117:13129'))
//     .setChromeOptions(option)
//     .build();
    
// driver.get('http://appdetex:casthello@whatismyipaddress.com/')
//     // .then(_ =>
//     //     driver.findElement(By.name('q')).sendKeys('NBA', Key.RETURN))
//     .then(_ => driver.wait(until.titleIs('What Is My IP Address - Online Privacy and Safety Experts'), 5000))
//     .then(_ => driver.quit());


// **********************************************************************+++

// const {Builder, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// // let option = new chrome.Options();
// // option.addArguments('--proxy-server=http://200.58.105.117:13129');
    
// var driver = new Builder()
//     .forBrowser('chrome')
//     .usingServer('http://localhost:4444/wd/hub')
//     // .setProxy(proxy.socks('appdetex:casthello@200.58.105.117:13129'))
//     // .setChromeOptions(option)
//     .build();

// driver.get('https://www.facebook.com/')
//     .then(_ => {
//         driver.manage().addCookie('sb', 'hvZ_XJZNRq1V2Ukgvx98Mhlg')
//         driver.manage().addCookie('c_user', '100034705411820')
//         driver.manage().addCookie('xs', '15%3A2jKJ9EbuJwoexA%3A2%3A1552061871%3A-1%3A-1')
//         driver.manage().addCookie('fr', '34Ib2cvYkzogDZ5V7.AWVB2XwfQ4ySGRQtWV86Rh9jAvc.Bcf-QF.uZ.AAA.0.0.BcgpWv.AWXrMMJL')
//         driver.manage().addCookie('pl', 'n')
//     });
// // driver.manage().addCookie('sb', 'hvZ_XJZNRq1V2Ukgvx98Mhlg')
// // driver.manage().addCookie('c_user', '100034705411820')
// // driver.manage().addCookie('xs', '15%3A2jKJ9EbuJwoexA%3A2%3A1552061871%3A-1%3A-1')
// // driver.manage().addCookie('fr', '34Ib2cvYkzogDZ5V7.AWVB2XwfQ4ySGRQtWV86Rh9jAvc.Bcf-QF.uZ.AAA.0.0.BcgpWv.AWXrMMJL')
// // driver.manage().addCookie('pl', 'n')
// driver.get('https://www.facebook.com/')
//     .then(_ => driver.wait(until.titleIs('Facebook'), 5000))
//     .then(_ => driver.quit());

// // driver.manage().getCookie('c_user').then(function (cookie) {
// //     console.log(cookie);
// // });

// driver.quit();
    
// driver.get('https://www.facebook.com/')
//     .then(_ => driver.manage().addCookie('sb', 'hvZ_XJZNRq1V2Ukgvx98Mhlg'))
//     .then(_ => driver.manage().addCookie('c_user', '100034705411820'))
//     .then(_ => driver.manage().addCookie('xs', '15%3A2jKJ9EbuJwoexA%3A2%3A1552061871%3A-1%3A-1'))
//     .then(_ => driver.manage().addCookie('fr', '34Ib2cvYkzogDZ5V7.AWVB2XwfQ4ySGRQtWV86Rh9jAvc.Bcf-QF.uZ.AAA.0.0.BcgpWv.AWXrMMJL'))
//     .then(_ => driver.manage().addCookie('pl', 'n'))
//     .then(_ => driver.get('https://www.facebook.com/'))
//     .then(_ => driver.wait(until.titleIs('Facebook'), 5000))
//     .then(_ => driver.quit());


const {Builder, By, Key, until} = require('selenium-webdriver');
// const proxy = require('selenium-webdriver/proxy');

(async function() {
    let driver;
    try {
      driver = await new Builder()
          .forBrowser('firefox')
          .usingServer('http://localhost:4444/wd/hub')
        //   .setChromeOptions(
            //   new Options().setMobileEmulation({deviceName: 'Nexus 5X'}))
          .build();
      await driver.get('https://www.facebook.com/');
    //   await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.manage().addCookie({name: 'sb', value: 'hvZ_XJZNRq1V2Ukgvx98Mhlg'});
      await driver.manage().addCookie({name: 'c_user', value: '100034705411820'});
      await driver.manage().addCookie({name: 'xs', value: '15%3A2jKJ9EbuJwoexA%3A2%3A1552061871%3A-1%3A-1'});
      await driver.manage().addCookie({name: 'fr', value: '34Ib2cvYkzogDZ5V7.AWX6Lgsp98DLiFj-k8kCQVf_3ps.Bcf-QF.uZ.AAA.0.0.Bch8lL.AWW85miW'});
      await driver.manage().addCookie({name: 'pl', value: 'n'});
      await driver.get('https://www.facebook.com/KeibronGamer/videos/2614805118561594');

      // await driver.manage().setTimeouts( { implicit: 10000 } )
      // await driver.sleep(10000);
      // const btnVideo = await driver.findElement(By.id('u_1_n'));
      // const video = await driver.findElement(By.id('u_1_9'));
      // console.log('btnVideo', JSON.stringify(btnVideo));
      // btnVideo.click();
      // await driver.executeScript("document.getElementById('u_1_n').click();");
      // driver.executeScript("arguments[0].click();", divVideo);
      // await driver.executeScript("arguments[0].play()", video);
      await driver.wait(until.titleIs('A Facebook'), 1000000);
    } catch (err) {
      console.log('error--', err);
    } finally {
      await driver && driver.quit();
    }
  })().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));