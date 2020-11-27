# Jesse Hutton Cascade Fintech Technical Assessment
Here is my breif attempt to complete the technical assessment
I limited myself to the 2 hour recommended time limit and followed the instructions the best I could with the information provided

## Assumptions made based on reading the data
The data provided could've used some context so I had to make some assumptions based on what I was given
- All "not settled" transactions were in the Transactions list with a boolean under Billed. All other information was the same between Not Settled and Settled
- Available Balance was the balance prior to unbilled items and was assumed up to date after current completed transactions
- Only one account was being displayed at a time so no filtering or sorting based off account number was necessary
- MerchantId is an internal notation and not readable by the end user
- Transaction date was more important than Business date to the end user (even though they were the same)
- reversed order as most recent transactions are usually listed at the top on live displays (in my experience) and data appreared to be in decending order by date
- no currency information was given so dollars was the assumed currency
- used MomentJS to format the date as Vue doesn't have standard date formatting, used the dependency as writing my own filter would've taken longer

## Output

### Starting Balance: $408.08
### Ending Balance: $258.18
#### Account Number: 123456789

|   STATUS  |          DATE          |  AMOUNT |      VENDOR      |       DESCRIPTION      |  TYPE |
|:---------:|:----------------------:|:-------:|:----------------:|:----------------------:|:-----:|
| Completed | 08/28/2020 06:43:12 am |  $8.08  | Quickly Gas Stop | Other: POS Transaction | Debit |
|  Pending  | 08/28/2020 03:50:01 am | $129.74 |    Wally World   | Other: POS Transaction | Debit |
|  Pending  | 08/28/2020 03:36:33 am |  $12.08 |     Good Buy     | Other: POS Transaction | Debit |