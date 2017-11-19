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

First, you need to require the module and initialize the environment.

```javascript
const TapPay = require('tappay-nodejs')

// You just need to initilize the config once.
TapPay.initialize({
    partner_key: your_api_key,
    env: 'sandbox' or 'production'
})
```

### Direct Pay - Pay By Prime
```javascript
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
    },
    remember: true
}

// Callback Style
TapPay.payByPrime(payment_info, (error, result) => {
    console.log(error, result)
})

// Promise Style
TapPay.payByPrime(payment_info).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

```

### Direct Pay - Pay By Token
```javascript
const payment_info = {
    card_key: 'your_card_key_after_pay_by_prime_with_remember_true',
    card_token: 'your_card_token_after_pay_by_prime_with_remember_true',
    merchant_id: 'your_merchant_id',
    amount: 1,
    currency: "TWD",
    details: "An apple and a pen."
}

// Callback Style
TapPay.payByToken(payment_info, (error, result) => {
    console.log(error, result)
})

// Promise Style
TapPay.payByToken(payment_info).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

```

### Refund
```javascript
// Callback Style
TapPay.refund({
    rec_trade_id: 'your_rec_trade_id'
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.refund({
    rec_trade_id: 'your_rec_trade_id'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```


### Get Records
```javascript
// Callback Style
TapPay.getRecords({
    rec_trade_id: 'your_rec_trade_id'
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.getRecords({
    rec_trade_id: 'your_rec_trade_id'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```


### Get Record History
```javascript
// Callback Style
TapPay.getRecordHistory({
    rec_trade_id: 'your_rec_trade_id'
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.getRecordHistory({
    rec_trade_id: 'your_rec_trade_id'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```

### Cap Today
```javascript
// Callback Style
TapPay.capToday({
    rec_trade_id: 'your_rec_trade_id'
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.capToday({
    rec_trade_id: 'your_rec_trade_id'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```
### Bind Card
```javascript
// Callback Style
TapPay.bindCard({
    prime: "your_prime",
    merchant_id: "merchantA",
    currency: "TWD",
    cardholder: {
        phone_number: "+886923456789",
        name: "Jane Doe",
        email: "Jane@Doe.com",
        zip_code: "12345",
        address: "123 1st Avenue, City, Country",
        national_id: "A123456789"
    }
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.bindCard({
    prime: "your_prime",
    merchant_id: "merchantA",
    currency: "TWD",
    cardholder: {
        phone_number: "+886923456789",
        name: "Jane Doe",
        email: "Jane@Doe.com",
        zip_code: "12345",
        address: "123 1st Avenue, City, Country",
        national_id: "A123456789"
    }
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```
### Remove Card
```javascript
// Callback Style
TapPay.removeCard({
    card_key: "your_card_key",
    card_token: "your_card_token"
}, (err, result) => {
    console.log(err, result)
})

// Promise Style
TapPay.removeCard({
    card_key: "your_card_key",
    card_token: "your_card_token"
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```