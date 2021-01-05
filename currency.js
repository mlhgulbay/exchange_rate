class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url ="https://api.exchangeratesapi.io/latest?base="
        this.amount = null;

    }
    exchange(){
//resolve ve reject kullanıldığı zaman bir promise geri döndürülmeli
        return new Promise((resolve,reject)=>{
            fetch(this.url +this.firstCurrency)//bu kod bize verimizi response objesi olarak verecek ve bizde 
            //bu response objemizin içinden json ımızı almaya çalışacağız
            .then(response => response.json())//response içindeki json fonk. kullanarak bunu dönüyoruz
            .then(data => {
                const parity = data.rates[this.secondCurrency]
                const amount2 = Number(this.amount)
                let total = parity * amount2;//bulduğumuz sonucu rateapp.js te kullanmak için bizim bir tane promise kullanmamız gerekiyor
    
                resolve(total);
    
                // console.log(total);
            })
                //console.log(data))
                //data geldiği için onu yazdırıyoruz
            .catch(err => reject(err))
        })

    }
    //amount u değiştirdiğimiz ve event i tekrar tetiklediğimiz zaman base =USD olarak kalıyor
    //change eventi oluştuğunda first currency  ve second currency nin değişmesi gerekiyor
    //aynı zmanda amount unda değişmesi gerekiyor
    changeAmount(amount){
        this.amount = amount;//null olarak verilen amount u gönderilen amount ile güncelliyoruz

    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
    //örneğin bir usd nin kaç try olduğunu bulmak için rates in içindeki try ye gitmeliyiz


}
