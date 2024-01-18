import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj= new registerPage ()

describe (' Test Automation ', ()=>{

    it (' register flow ',()=>{

         registerObj.openURL ()
         registerObj.enterfirstName (registerData.Fname)
         registerObj.enterlastName (registerData.Lname)
         registerObj.enterEmail (registerData.mail)
         registerObj.enterTelephone (registerData.telephone)
         registerObj.enterpassword (registerData.password)
         registerObj.selectCheckbox ()
         registerObj.clickOncontinue ()




    })
})