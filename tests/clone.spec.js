const {test, expect} = require('@playwright/test')
//const {LoginPage} = require('../tests/pages/login.page')


// const { LoginPage } =  require('../tests/pages/login.page')
//const { LoginPage }= require('../tests/pages/login.page') //Poject Object Model framework

// expect 
//object creation
//call functions

test('open my screen',async({browser})=> { 
const context = await browser.newContext()
const page = await context.newPage()
//const loginPage = new LoginPage(page) // let objectName = new ClassName()
//await loginPage.loginUser()
//await loginPage.dashboard()
})

test('zopen new browser',async({ page })=> {
   
 await page.goto("https://www.youtube.com/")
 //await page.pause()

  console.log(await page.title())
  await expect(page.toHaveTitle("YouTube"))

  
   })
