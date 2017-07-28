# Support Node Versions
Node 4 or later is required
```
npm install tappay-nodejs
```

# Demo Website
Please put the app_id, app_key, environment, partner_key, merchant_id into process.env.js before running the demo website.
```
npm install
cd demo
node app.js
```

# How to use

### Direct Pay - Pay By Prime
```javascript
const TapPay = require('tappay-nodejs')

// You just need to initilize the config once.
TapPay.initialize({
    api_key: your_api_key,
    environment: 'sandbox' or 'production'
})

const payment_info = {
    prime: 'your_prime',
    merchantid: 'your_merchant_id',
    amount: 1,
    currency: "TWD",
    details: "An apple and a pen.",
    cardholder: {
        phonenumber: "+886923456789",
        name: "王小明",
        email: "LittleMing@Wang.com",
        zip: "100",
        addr: "台北市天龍區芝麻街1號1樓",
        nationalid: "A123456789"
    },
    instalment: 0,
    remember: false
}

// Callback Style
TapPay.DirectPay.payByPrime(payment_info, (error, response) => {
    console.log(error, response.body)
})

// Promise Style
TapPay.DirectPay.payByPrime(payment_info).then((response) => {
    console.log(response.body)
}).catch((error) => {
    console.log(error)
})

```

### Refund
```javascript
const TapPay = require('tappay-nodejs')

// You just need to initilize the config once.
TapPay.initialize({
    api_key: your_api_key,
    environment: 'sandbox' or 'production'
})

// Callback Style
TapPay.refund({
    rectradeid: 'your_rectradeid'
}, (err, response) => {
    console.log(err, response.body)
})

// Promise Style
TapPay.refund({
    rectradeid: 'your_rectradeid'
}).then((response) => {
    console.log(response.body)
}).catch((error) => {
    console.log(error)
})
```
