const TapPay = require('../index.js')

module.exports = {
    pay: (req, res) => {
        let data = {
            "merchant_id": process.env.MERCHANT_ID,
            "amount": 48,
            "currency": "TWD",
            "details": "An apple and a pen.",
            "cardholder": {
                "phone_number": "+886923456789",
                "name": "王小明",
                "email": "LittleMing@Wang.com"
            }
        }
        data['prime'] = req.body.prime

        TapPay.payByPrime(data).then(function (result) {
            console.log(result);
            return res.json({
                status: 0,
                rec_trade_id: result.rec_trade_id
            })
        }).catch(function (error) {
            console.error(error)
            return res.json({
                status: 1
            })
        })
    },
    refund: (req, res) => {
        TapPay.refund({
            rec_trade_id: req.body.rec_trade_id
        }).then(function(result) {
            console.log(result);
            return res.json({
                status: result.status,
            })
        }).catch(function(error) {
            console.error(error)
            return res.json({
                status: 1
            })
        })
        
    }
}