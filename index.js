const {Browser, Builder, By} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;

    try{
        const chromeOptions = new Chrome.Options();
        //chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        //1 En el campo Textarea agregue el siguiente texto: anita lava la tina.
        await delay(2000);
        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys('anita lava la tina');

        //2. En el campo Dropdown (select) seleccione la opción Three.
        await delay(2000);
        const selectElement = await driver.findElement(By.css('select[name="my-select"]'));
        await selectElement.click();

        await delay(2000);
        const optionThree = await driver.findElement(By.css('option[value="3"]'));
        await optionThree.click();

        await delay(2000);
        await selectElement.click();

        //3. En el campo Color picker seleccione el color con la siguiente configuración: R: 32 G: 167 B: 34
        await delay(2000);
        const colorInputElement = await driver.findElement(By.css('input[type="color"][name="my-colors"]'));
        await colorInputElement.click();
        await delay(2000);
        await colorInputElement.sendKeys("#20A722");

        //4. En el campo Datepicker seleccione la fecha:  16 de agosto de 1970.
        await delay(2000);
        const dateInputElement = await driver.findElement(By.css('input[name="my-date"]'));
        await dateInputElement.click();
        await delay(2000);
        await dateInputElement.sendKeys("08/16/1970");
        await dateInputElement.click();

        //5. Chequee el campo Default checkbox.
        await delay(2000);
        const checkboxElement = await driver.findElement(By.id('my-check-2'));
        await checkboxElement.click();

        //6. Presione el botón submit.
        await delay(2000);
        const submit = await driver.findElement(By.css('button[type="submit"]'));
        await submit.click();

        //7. Capture el titulo Form submitted y muestrelo en consola.
        await delay(2000);
        const titleTextResult = await driver.findElement(By.css('h1[class="display-6"]'));
        const titleText = await titleTextResult.getText();
        console.log("");
        console.log(titleText);
        
        //8. Capture el mensaje Received y muestrelo en consola.
        await delay(2000);
        const textMessageResult = await driver.findElement(By.id('message'));
        const textMessage = await textMessageResult.getText();
        console.log(textMessage);
        console.log("");

    }catch (error){

    } finally{
        if(driver !== null){
            // await driver.quit();
        }
    }
}

start()