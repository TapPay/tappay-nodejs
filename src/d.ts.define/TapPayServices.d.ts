declare module 'TapPayServices' {
    // local inteface
    interface TradeRecords {
        /**
         * Record identifier.
         */
        rec_trade_id: string;
        /**
         * Authorization code from the bank.
         */
        auth_code: string;
        /**
         * Identifier of the merchant involved in this trade.
         */
        merchant_id: string;
        /**
         * Name of the merchant involved in this trade.
         */
        merchant_name: string;
        /**
         * Name of the website / application involved in this trade.
         */
        app_name: string;
        /**
         * Time of the record in milliseconds.
         */
        time: number;
        /**
         * Price of the record.
         * It will change if the transaction was refunded.
         */
        amount: number;
        /**
         * Refunded price of the record.
         */
        refund_amount: number;
        /**
         * Status of the record.
         */
        record_status: number;
        /**
         * A self-defined unique identifier for the bank.
         */
        bank_transaction_id: string;
        /**
         * Time when the transaction payment will be captured.
         */
        cap_millis: number;
        /**
         * Original price of the record.
         */
        original_amount: number;
        /**
         * Time when the bank begins processing the transaction.
         */
        bank_transaction_start_millis: number;
        /**
         * Time when the bank finishes processing the transaction.
         */
        bank_transaction_end_millis: number;
        /**
         * Whether this record is captured or not.
         */
        is_captured: boolean;
        /**
         * Response code from the bank.
         */
        bank_result_code: string;
        /**
         * Error message from the bank.
         */
        bank_result_msg: string;
        /**
         * First six digits of the card and last four digits of the card
         */
        partial_card_number: string;
        /**
         * List of product/service purchased in the transaction.
         */
        details: string;
        /**
         * Information of the owner of the card
         */
        cardholder: {
            phone_number: string;
            name: string;
            email: string;
            zip_code: string;
            address: string;
            national_id: string;
        };
    }
    interface TradeHistory {
        amount: number;
        actions: number;
        mills: number;
        success: boolean;
    }

    // export interface
    export interface PayByPrimeRequest {
        /**
         * The one time token returned from getPrime.
         * You can use this prime for test in sandbox environment.
         * prime : test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9
         */
        prime: string;
        /**
         * Involved merchant’s identifier as defined on Portal.
         */
        merchant_id: string;
        /**
         * Transaction price.
         */
        amount: number;
        /**
         * The letter abbreviation for currency, following ISO 4217.
         */
        currency ? : string;
        /**
         * A self-defined identifier for each transaction, for TapPay to identify transaction.
         */
        order_number ? : string;
        /**
         * Transaction identifier for the bank.
         * You may customize one here if you wish, but it must be unique.
         */
        bank_transaction_id ? : string;
        /**
         * Details of the transaction.
         * You should include as much information as possible.
         * It will help our fraud detector in distinguishing real and fake transaction.
         */
        details: string;
        /**
         * Information of the cardholder
         * Optional parameters should have the matching key as well,
         * with empty string as the value. e.g. zip_code: “”, address: “”, national_id: “”
         */
        cardholder: {
            phone_number: string;
            name: string;
            email: string;
            zip_code: string;
            address: string;
            national_id: string;
        };
        /**
         * Number of intervals of payments for a particular transaction.
         * Default set this value as 0. ( Not available in Apple Pay and Android Pay )
         */
        instalment ? : number;
        /**
         * The number of days between the time bank authorizes the payment and the time bank actually captures the payment.
         * Default is 0.
         * If you wish to capture the payment yourself, use -1 as the value to disable automatic capture.
         */
        delay_capture_in_days ? : number;
        /**
         * To save the card number or not. Not Available to Apple Pay or Android Pay.
         */
        remember: boolean;
    }
    export interface PayByPrimeResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Unique identifier for this transaction generated by our server.
         */
        rec_trade_id: string;
        /**
         * Transaction identifier for the bank.
         * You may customize one here if you wish, but it must be unique.
         */
        bank_transaction_id: string;
        /**
         * Bank authorization code.
         */
        auth_code: string;
        /**
         * Contains the card key and token. Only returned if the “remember” parameter in payByPrime API is set to true
         */
        card_secret ? : {
            card_key: string;
            card_token: string;
        };
        /**
         * Transaction price.
         */
        amount: number;
        /**
         * Card information.
         */
        card_info: {
            /**
             * First six digits of the card
             */
            bin_code: string;
            /**
             * Last four digits of the card
             */
            last_four: string;
            /**
             * Card issuer
             */
            issuer: string;
            /**
             * Card usage
             * 0 = credit card
             * 1 = debit card
             * 2 = prepaid card
             */
            funding: number;
            /**
             * Card type
             * 1 = VISA
             * 2 = MasterCard
             * 3 = JCB
             * 4 = Union Pay
             * 5 = AMEX
             */
            type: number;
            /**
             * Card level
             */
            level: string;
            /**
             * Country of card issuer
             */
            country: string;
            /**
             * Country code of card issuer
             */
            country_code: string;
            /**
             * Card expired date, Format : YYYYMM,
             */
            expiry_date: string;
        };
        /**
         * A self-defined identifier for each transaction, for TapPay to identify transaction.
         */
        order_number: string;
        /**
         * Acquiring banks or payment processors.
         */
        acquirer: string;
        /**
         * Time of transaction.
         */
        transaction_time_millis: number;
        /**
         * Time when the bank handles the transaction.
         */
        bank_transaction_time: {
            start_time_millis: number;
            end_time_millis: number;
        };
        /**
         * Response code from the bank.
         */
        bank_result_code: string;
        /**
         * Error message from the bank.
         */
        bank_result_msg: string;
    }
    export interface PayByTokenRequest {
        /**
         * Card authorization key.
         */
        card_key: string;
        card_token: string;
        /**
         * Involved merchant’s identifier as defined on Portal.
         */
        merchant_id: string;
        /**
         * Transaction price.
         */
        amount: number;
        /**
         * The letter abbreviation for currency, following ISO 4217.
         */
        currency: string;
        /**
         * A self-defined identifier for each transaction, for TapPay to identify transaction.
         */
        order_number ? : string;
        /**
         * Transaction identifier for the bank.
         * You may customize one here if you wish, but it must be unique.
         */
        bank_transaction_id ? : string;
        /**
         * Details of the transaction.
         * You should include as much information as possible.
         * It will help our fraud detector in distinguishing real and fake transaction.
         */
        details: string;
        /**
         * Number of intervals of payments for a particular transaction.
         * Default set this value as 0. ( Not available in Apple Pay and Android Pay )
         */
        instalment ? : number;
        /**
         * The number of days between the time bank authorizes the payment and the time bank actually captures the payment.
         * Default is 0.
         * If you wish to capture the payment yourself, use -1 as the value to disable automatic capture.
         */
        delay_capture_in_days ? : number;
        /*
          Fraud detect identifier,
          You will only need this parameter if you want to use fraud detect.
        */
        fraud_id ? : string;
        /*
          The 3 digits found on the back of most cards.
          You will only need this parameter if you need the bank to verify this number.
        */
        card_ccv ? : string;
    }
    export interface PayByTokenResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Unique identifier for this transaction generated by our server.
         */
        rec_trade_id: string;
        /**
         * Transaction identifier for the bank.
         * You may customize one here if you wish, but it must be unique.
         */
        bank_transaction_id: string;
        /**
         * Bank authorization code.
         */
        auth_code: string;
        /**
         * Card information.
         */
        card_info: {
            /**
             * First six digits of the card
             */
            bin_code: string;
            /**
             * Last four digits of the card
             */
            last_four: string;
            /**
             * Card issuer
             */
            issuer: string;
            /**
             * Card usage
             * 0 = credit card
             * 1 = debit card
             * 2 = prepaid card
             */
            funding: number;
            /**
             * Card type
             * 1 = VISA
             * 2 = MasterCard
             * 3 = JCB
             * 4 = Union Pay
             * 5 = AMEX
             */
            type: number;
            /**
             * Card level
             */
            level: string;
            /**
             * Country of card issuer
             */
            country: string;
            /**
             * Country code of card issuer
             */
            country_code: string;
            /**
             * Card expired date, Format : YYYYMM,
             */
            expiry_date: string;
        };
        /**
         * A self-defined identifier for each transaction, for TapPay to identify transaction.
         */
        order_number: string;
        /**
         * Acquiring banks or payment processors.
         */
        acquirer: string;
        /**
         * Time of transaction.
         */
        transaction_time_millis: number;
        /**
         * Time when the bank handles the transaction.
         */
        bank_transaction_time: {
            start_time_millis: number;
            end_time_millis: number;
        };
        /**
         * Response code from the bank.
         */
        bank_result_code: string;
        /**
         * Error message from the bank.
         */
        bank_result_msg: string;
    }
    export interface RefundRequest {
        /**
         * Identifier for the transaction being refunded.
         */
        rec_trade_id: string;
        /**
         * Only required for partial refund.
         */
        amount ? : number;
    }
    export interface RefundResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Amount being refunded.
         */
        refund_amount: number;
        /**
         * Whether the transaction has been captured or not.
         */
        is_captured: boolean;
        /**
         * Response code from the bank.
         */
        bank_result_code: string;
        /**
         * Error message from the bank.
         */
        bank_result_msg: string;
    }
    export interface GetRecordsRequest {
        /**
         * Number of records on each page, up to 200. default to 50
         */
        records_per_page ? : number;
        /**
         * The returned page. default to 0
         */
        page ? : number;
        /**
         * Restrictions on the trade records.
         * The following filters are possible:
         * time, amount, cardholder, merchant_id, record_status, rec_trade_id, order_number, bank_transaction_id
         */
        filters ? : {
            time ? : {
                start_time ? : number,
                end_time ? : number
            },
            amount ? : {
                upper_limit ? : number,
                lower_limit ? : number
            },
            cardholder ? : {
                phone_number ? : string,
                name ? : string,
                email ? : string
            },
            merchant_id ? : string[],
            record_status ? : number,
            rec_trade_id ? : string,
            order_number ? : string,
            bank_transaction_id ? : string
        };
        /**
         * Criteria for ordering
         */
        order_by ? : {
            /**
             * "time" default (Order by time) or "amount"(Order by amount)
             */
            attribute ? : "time" | "anount",
            /**
             * default: true
             */
            is_descending ? : boolean
        };
    }
    export interface GetRecordsResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Number of records on each page, up to 200.
         */
        records_per_page: number;
        /**
         * The returned page.
         */
        page: number;
        /**
         * Total number of pages.
         */
        total_page_count: number;
        /**
         * Total number of transactions.
         */
        number_of_transactions: number;
        /**
         * Trade records.
         */
        trade_records: TradeRecords[];
    }
    export interface GetRecordHistoryRequest {
        /**
         * Identifier for the transaction being captured.
         */
        rec_trade_id: string;
    }
    export interface GetRecordHistoryResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Identifier for the transaction being captured.
         */
        rec_trade_id: string;
        /**
         * Trade History
         */
        trade_history: TradeHistory[];
    }
    export interface CapTodayRequest {
        /**
         * Identifier for the transaction being captured.
         */
        rec_trade_id: string;
    }
    export interface CapTodayResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Time when the transaction payment will be captured.
         */
        cap_millis: number;
    }
    export interface BindCardRequest {
        /**
         * The one time token returned from createToken.
         */
        prime: string;
        /**
         * Involved merchant’s identifier as defined on Portal.
         */
        merchant_id: string;
        /**
         * The letter abbreviation for currency, following ISO 4217.
         */
        currency: string;
        /**
         * Cardhodler Information
         */
        cardholder: {
            /**
             * Cellphone number, E. 164 format with the ’+’ sign(“+886923456789”)
             */
            phone_number: string;
            /**
             * Name
             */
            name: string;
            /**
             * E-mail address
             */
            email: string;
            /**
             * Zip code number
             */
            zip_code: string;
            /**
             * Billing address
             */
            address: string;
            /**
             * National ID
             */
            national_id: string;
        }
    }
    export interface BindCardResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
        /**
         * Contains the card key and token. Only returned if the “remember” parameter in payByPrime API is set to true
         */
        card_secret ? : {
            card_key: string;
            card_token: string;
        };
        card_info: {
            /**
             * First six digits of the card
             */
            bin_code: string;
            /**
             * Last four digits of the card
             */
            last_four: string;
            /**
             * Card issuer
             */
            issuer: string;
            /**
             * Card usage
             * 0 = credit card
             * 1 = debit card
             * 2 = prepaid card
             */
            funding: number;
            /**
             * Card type
             * 1 = VISA
             * 2 = MasterCard
             * 3 = JCB
             * 4 = Union Pay
             * 5 = AMEX
             */
            type: number;
            /**
             * Card level
             */
            level: string;
            /**
             * Country of card issuer
             */
            country: string;
            /**
             * Country code of card issuer
             */
            country_code: string;
            /**
             * Card expired date, Format : YYYYMM,
             */
            expiry_date: string;
        };
        /**
         * Time of transaction.
         */
        mills: number;
        /**
         * Time when the bank handles the transaction.
         */
        bank_transaction_time: {
            start_time_millis: number;
            end_time_millis: number;
        };
        /**
         * Response code from the bank.
         */
        bank_result_code: string;
        /**
         * Error message from the bank.
         */
        bank_result_msg: string;
    }
    export interface RemoveCardRequest {
        /**
         * A security key used to encrypt the card token.
         */
        card_key: string;
        /**
         * A permanent token that represents the customer’s card.
         */
        card_token: string;
    }
    export interface RemoveCardResponse {
        /**
         * Response code. 0 indicates success.
         */
        status: number;
        /**
         * Error message.
         */
        msg: string;
    }
}