const TapPay = require('../index.js')

module.exports = {
    pay: (req, res) => {
        let data = {
            "merchantid": process.env.MERCHANT_ID,
            "amount": 48,
            "currency": "TWD",
            "details": "An apple and a pen.",
            "cardholder": {
                "phonenumber": "+886923456789",
                "name": "王小明",
                "email": "LittleMing@Wang.com",
                "zip": "100",
                "addr": "台北市天龍區芝麻街1號1樓",
                "nationalid": "A123456789"
            },
            "instalment": 0,
            "remember": false
        }
        data['prime'] = req.body.prime

        TapPay.DirectPay.payByPrime(data).then(function (response) {
            return res.json({
                status: 0,
                rectradeid: response.body.rectradeid
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
            rectradeid: req.body.rectradeid
        }).then(function(response) {
            return res.json({
                status: response.body.status,
            })
        }).catch(function(error) {
            console.error(error)
            return res.json({
                status: 1
            })
        })
        
    }
}