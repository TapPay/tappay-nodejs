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
    partner_key: your_api_key,
    env: 'sandbox' or 'production'
})

const payment_info = {
    prime: 'your_prime',
    merchant_id: 'your_merchant_id',
    amount: 1,
    currency: "TWD",
    details: "An apple and a pen.",
    cardholder: {
        phone_number: "+886923456789",
        name: "王小明",
        email: "LittleMing@Wang.com"
    }
}

// Callback Style
TapPay.payByPrime(payment_info, (error, response) => {
    console.log(error, response.body)
})

// Promise Style
TapPay.payByPrime(payment_info).then((response) => {
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
    partner_key: your_api_key,
    env: 'sandbox' or 'production'
})

// Callback Style
TapPay.refund({
    rec_trade_id: 'your_rec_trade_id'
}, (err, response) => {
    console.log(err, response.body)
})

// Promise Style
TapPay.refund({
    rec_trade_id: 'your_rec_trade_id'
}).then((response) => {
    console.log(response.body)
}).catch((error) => {
    console.log(error)
})
```
