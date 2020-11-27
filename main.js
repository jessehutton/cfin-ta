

const store = new Vuex.Store({
    state: {
        "Statement": {
            "Transactions": [{
                "OriginalTraceAuditNo": null,
                "AccountNumber": "123456789",
                "TransactionTypeId": "Debit",
                "TransactionDate": "2020-08-28T03:36:33",
                "BusinessDate": "2020-08-28T03:36:33",
                "AvailableBalance": 400.00,
                "Amount": 12.08,
                "Description": "Other: POS Transaction",
                "Billed": false,
                "MerchantName": "Good Buy",
                "MerchantId": "GbLV-01"
            },
        {
                "OriginalTraceAuditNo": null,
                "AccountNumber": "123456789",
                "TransactionTypeId": "Debit",
                "TransactionDate": "2020-08-28T03:50:01",
                "BusinessDate": "2020-08-28T03:50:01",
                "AvailableBalance": 400.00,
                "Amount": 129.74,
                "Description": "Other: POS Transaction",
                "Billed": false,
                "MerchantName": "Wally World",
                "MerchantId": "WWV-000-1220"
            },
        {
                "OriginalTraceAuditNo": null,
                "AccountNumber": "123456789",
                "TransactionTypeId": "Debit",
                "TransactionDate": "2020-08-28T06:43:12",
                "BusinessDate": "2020-08-28T06:43:12",
                "AvailableBalance": 400.00,
                "Amount": 8.08,
                "Description": "Other: POS Transaction",
                "Billed": true,
                "MerchantName": "Quickly Gas Stop",
                "MerchantId": "QGS-01"
            }],
            "NotSettled": [{
                "OriginalTraceAuditNo": null,
                "AccountNumber": "123456789",
                "TransactionTypeId": "Debit",
                "TransactionDate": "2020-08-28T03:36:33",
                "BusinessDate": "2020-08-28T03:36:33",
                "AvailableBalance": 400.00,
                "Amount": 12.08,
                "Description": "Other: POS Transaction",
                "MerchantName": "Good Buy",
                "MerchantId": "GbLV-01"
            },
        {
                "OriginalTraceAuditNo": null,
                "AccountNumber": "123456789",
                "TransactionTypeId": "Debit",
                "TransactionDate": "2020-08-28T03:50:01",
                "BusinessDate": "2020-08-28T03:50:01",
                "AvailableBalance": 400.00,
                "Amount": 129.74,
                "Description": "Other: POS Transaction",
                "MerchantName": "Wally World",
                "MerchantId": "WWV-000-1220"
            }]
        }
    },
    getters: {
        
    }
})

new Vue({
    el: '#transactions',
    store,
    computed: {
        startingBalance: function() {
            let startBalance = this.$store.state.Statement.Transactions[0].AvailableBalance ? this.$store.state.Statement.Transactions[0].AvailableBalance : 'NaN';
            this.$store.state.Statement.Transactions.forEach((transaction) =>
                {if (transaction.Billed){startBalance = startBalance + transaction.Amount;}}
            );
            return startBalance;
        },
        
        endingBalance: function() {
            let endingBalance = this.$store.state.Statement.Transactions[0].AvailableBalance ? this.$store.state.Statement.Transactions[0].AvailableBalance : 'NaN';
            this.$store.state.Statement.Transactions.forEach((transaction) =>
                {if (!transaction.Billed){endingBalance = endingBalance - transaction.Amount;}}
            );
            return endingBalance;
        },        
    },
    filters: {
        formatDate: function(value){
            return moment(String(value)).format('MM/DD/YYYY hh:mm:ss a')
        }
    }
})
