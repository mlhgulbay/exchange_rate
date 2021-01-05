///Elementleri seçme
const amountElement = document.querySelector("#amount")
const firstSelect = document.querySelector("#firstCurrency")
const secondSelect = document.querySelector("#secondCurrency")
const currency = new Currency ("USD","TRY")
const ui =new UI (firstSelect,secondSelect)

eventListener();
function eventListener(){
        amountElement.addEventListener("input",exchangeCurrency)
        //firstSelect.addEventListener("")
        //firstSelect e eventi addEventListener ile atayamıyoruz çünkü başka browserlarda hata oluşturma
        //ihtimali var bu yüzden onchange ile atama yapacağız
        firstSelect.onchange = function(){

                currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)//tüm optionları aldık v ebu option lar bize 
                // array tarzı obje döndürecek ve biz o objenin içinden biz belli bir index seçeceğiz
            
                ui.changeFirst();
        }
        secondSelect.onchange = function(){

            currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)

            ui.changeSecond()
        }
}
function exchangeCurrency(){
    currency.changeAmount(amountElement.value);//her event oluştuğunda miktarı güncellemeliyiz
    // console.log("Event Oluştu")
    currency.exchange()//fetch kullanarak json objemizi almaya çalışacak
    .then(result =>{
        ui.displayResult(result)
    } )
    .catch (err => Error(err))
}
//son olarak span in içeriğini değiştirmek için;
//firstSelect te onchange eventi olduğu zaman biz onu çağırmaya çalışacağız
//UI sınıfına ait bir ui objemizi oluşturduk
//first select e onchange olduğu zaman changeFirst fonksiyonumuz çalışacak

