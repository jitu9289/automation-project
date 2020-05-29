let fs=require('fs');
let cd=require('chromedriver');
let swd= require('selenium-webdriver');
let bldr= new swd.Builder();
let driver=bldr.forBrowser('chrome').build();

let cfile=process.argv[2];
let dataentered=process.argv[3];



(async function(){
    try{
        await driver.manage().setTimeouts({
            implicit: 10000,
            pageload:10000
        });
    let contents=await fs.promises.readFile(cfile, 'utf-8');
    let obj=JSON.parse(contents);
    let usr=obj.user;
    let pwd=obj.pwd;
    let url=obj.url;

    await driver.get(url);
    await driver.sleep(500);

    await driver.manage().window().maximize();
    
    let usrelement= await driver.findElement(swd.By.name('username'));
   
    let pwdelement= await driver.findElement(swd.By.name('password'));
    
    await usrelement.sendKeys(usr);
    await pwdelement.sendKeys(pwd);
    let btnlogin= await driver.findElement(swd.By.xpath("//*[text()='Log In']"));

    await btnlogin.click();

    
    await driver.sleep(1000);
    
    await driver.wait(swd.until.elementLocated(swd.By.css('.HoLwm')));
    let ignore =await driver.findElement(swd.By.css('.HoLwm'));
    
    await ignore.click();
     

    
    
    
    let elementclick= await driver.findElement(swd.By.css('.LWmhU'));
    await elementclick.click();
 
    let enterelement= await driver.findElement(swd.By.css('.XTCLo'));   

    await enterelement.sendKeys(dataentered);
    await driver.sleep(2000);





    let searchelement= await driver.findElements(swd.By.css('.yCE8d'));  

    
    await searchelement[0].click();

    await driver.sleep(1000);
    
    


    await driver.executeScript("javascript:window.scrollBy(0,200)");

    let firstpost = await driver.findElements(swd.By.css('.v1Nh3'));

    await firstpost[0].click();


//+++++++++++++++++++++++++================================================================





    while(true){

    let postlike=await driver.findElement(swd.By.css('.fr66n'));   

    await postlike.click();

    
    
    await driver.findElement(swd.By.xpath("//*[text()='Next']")).click();

    await driver.sleep(1000);

 }


     

    }
    catch(err){
     await driver.quit();
  }

})();
                