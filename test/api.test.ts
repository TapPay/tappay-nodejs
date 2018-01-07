import TapPay from '../src/index'
import {
    should
} from 'chai';
const partner_key: string = "partner_6ID1DoDlaPrfHw6HBZsULfTYtDmWs0q0ZZGKMBpp4YICWBxgK97eK3RM";
const env: string = "sandbox" // or production
const MERCHANT_ID: string = "GlobalTesting_CTBC";
const TEST_PRIME: string = "test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9";

should()
TapPay.initialize({
    partner_key,
    env
})

let card_key: string;
let card_token: string;
let card_key_2: string;
let card_token_2: string;
let rec_trade_id: string;
let rec_trade_id_2: string;

describe('Test all APIs', () => {
    describe('Test Promise Style', () => {
        it('pay by prime promise', (done) => {
            TapPay.payByPrime({
                prime: TEST_PRIME,
                merchant_id: MERCHANT_ID,
                amount: 1,
                details: "test",
                cardholder: {
                    phone_number: "+886987654321",
                    email: "test@gmail.com",
                    name: "test",
                    zip_code: "100",
                    address: "台北市天龍區芝麻街1號1樓",
                    national_id: "A123456789"
                },
                remember: true
            }).then((result) => {
                result.status.should.be.equal(0)
                rec_trade_id = result.rec_trade_id;
                card_key = result.card_secret.card_key;
                card_token = result.card_secret.card_token;
                done()
            })
        });
        it('pay by token promise', (done) => {
            TapPay.payByToken({
                merchant_id: MERCHANT_ID,
                card_key,
                card_token,
                amount: 1,
                currency: "TWD",
                details: "test"
            }).then((result) => {
                result.status.should.equal(0)
                done()
            })
        });
        it('cap today promise', (done) => {
            TapPay.capToday({
                rec_trade_id
            }).then((result) => {
                result.status.should.equal(0)
                done()
            })
        });
        it('refund promise', (done) => {
            TapPay.refund({
                rec_trade_id: rec_trade_id
            }).then((result) => {
                result.status.should.equal(0)
                done()
            })
        });
        it('get records promise', (done) => {
            TapPay.getRecords({
                filters: {
                    rec_trade_id
                }
            }).then((result) => {
                result.status.should.equal(2)
                result.trade_records.length.should.equal(1)
                done()
            })
        });
        it('get record history promise', (done) => {
            TapPay.getRecordHistory({
                rec_trade_id
            }).then((result) => {
                result.status.should.equal(0)
                done()
            })
        })
        it('bind card promise', (done) => {
            TapPay.bindCard({
                prime: TEST_PRIME,
                merchant_id: MERCHANT_ID,
                currency: 'TWD',
                cardholder: {
                    phone_number: "+886987654321",
                    email: "test@gmail.com",
                    name: "test",
                    zip_code: "100",
                    address: "台北市天龍區芝麻街1號1樓",
                    national_id: "A123456789"
                }
            }).then((result) => {
                result.status.should.equal(0)
                card_key = result.card_secret.card_key
                card_token = result.card_secret.card_token
                done()
            })
        });
        it('remove card promise', (done) => {
            TapPay.removeCard({
                card_key,
                card_token
            }).then((result) => {
                result.status.should.equal(0)
                done()
            })
        });
    })

    describe('Test Callback Style', () => {
        it('pay by prime callback', (done) => {
            TapPay.payByPrime({
                prime: TEST_PRIME,
                merchant_id: MERCHANT_ID,
                amount: 1,
                details: "test",
                cardholder: {
                    phone_number: "+886987654321",
                    email: "test@gmail.com",
                    name: "test",
                    zip_code: "100",
                    address: "台北市天龍區芝麻街1號1樓",
                    national_id: "A123456789"
                },
                remember: true
            }, (error, result) => {
                result.status.should.be.equal(0)
                card_key_2 = result.card_secret.card_key
                card_token_2 = result.card_secret.card_token
                rec_trade_id_2 = result.rec_trade_id
                done()
            })
        });


        it('pay by token callback', (done) => {
            TapPay.payByToken({
                merchant_id: MERCHANT_ID,
                card_key: card_key_2,
                card_token: card_token_2,
                amount: 1,
                currency: "TWD",
                details: "test"
            }, (error, result) => {
                result.status.should.equal(0)
                done()
            })
        });



        it('cap today callback', (done) => {
            TapPay.capToday({
                rec_trade_id: rec_trade_id_2
            }, (error, result) => {
                result.status.should.equal(0)
                done()
            })
        });



        it('refund callback', (done) => {
            TapPay.refund({
                rec_trade_id: rec_trade_id_2
            }, (error, result) => {
                result.status.should.equal(0)
                done()
            })
        });


        it('get records callback', (done) => {
            TapPay.getRecords({
                filters: {
                    rec_trade_id: rec_trade_id_2
                }
            }, (error, result) => {
                result.status.should.equal(2)
                result.trade_records.length.should.equal(1)
                done()
            })
        });

        it('get record history callback', (done) => {
            TapPay.getRecordHistory({
                rec_trade_id: rec_trade_id_2
            }, (error, result) => {
                result.status.should.equal(0)
                done()
            })
        })


        it('bind card callback', (done) => {
            TapPay.bindCard({
                prime: TEST_PRIME,
                merchant_id: MERCHANT_ID,
                currency: 'TWD',
                cardholder: {
                    phone_number: "+886987654321",
                    email: "test@gmail.com",
                    name: "test",
                    zip_code: "100",
                    address: "台北市天龍區芝麻街1號1樓",
                    national_id: "A123456789"
                }
            }).then((result) => {
                result.status.should.equal(0)
                card_key_2 = result.card_secret.card_key
                card_token_2 = result.card_secret.card_token
                done()
            })
        });



        it('remove card callback', (done) => {
            TapPay.removeCard({
                card_key: card_key_2,
                card_token: card_token_2,
            }, (error, result) => {
                result.status.should.equal(0)
                done()
            })
        });
    })
});