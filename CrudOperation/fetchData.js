const axios = require('axios');

const supabaseUrl = 'https://heujsvqgldqiomkcakrl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldWpzdnFnbGRxaW9ta2Nha3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NjAxNTcsImV4cCI6MjAyNTIzNjE1N30.qwCRrWNvX6o_EgbXTGMmQNezLe_ZbqueS_fpIe562V4'; // Replace with your Supabase API key

const tableName = 'alchemy_database'; // Replace with your table name


async function fetchData(req, res) {
  try {
    const response = await axios.get(`${supabaseUrl}/rest/v1/${tableName}`, {
      headers: {
        'apikey': supabaseKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = response.data;
// console.log(data)
    const { maxOccurrence, maxToValue, maxValue, maxDateOccure, maxDateValue, maxValueTxnHash } = data.reduce(
      (result, item) => {
        const maxTransactionsAddress = item.to;
        const value = item.value;
        const maxTransactionsDate = item.Date;
        const hash = item.hash;

        result.occurrenceCount[maxTransactionsAddress] = (result.occurrenceCount[maxTransactionsAddress] || 0) + 1;
        if (result.occurrenceCount[maxTransactionsAddress] > result.maxOccurrence) {
          result.maxOccurrence = result.occurrenceCount[maxTransactionsAddress];
          result.maxToValue = maxTransactionsAddress;
        }

        result.occurrenceDateCount[maxTransactionsDate] = (result.occurrenceDateCount[maxTransactionsDate] || 0) + 1;
        if (result.occurrenceDateCount[maxTransactionsDate] > result.maxDateOccure) {
          result.maxDateOccure = result.occurrenceDateCount[maxTransactionsDate];
          result.maxDateValue = maxTransactionsDate;
        }

        if (value > result.maxValue) {
          result.maxValue = value;
          result.maxValueTxnHash = hash;
        }
        return result;
      },
      { occurrenceCount: {}, occurrenceDateCount: {}, maxOccurrence: 0, maxToValue: null,  maxValue: 0,  maxDateOccure:0 , maxDateValue:null, maxValueTxnHash:null, }
    );

    const responseData=   {
      "max_value_txn_hash": maxValueTxnHash,
      "max_txns_with_address": maxToValue,
      "date_max_txns": maxDateValue,
      }
    res.send(responseData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
// fetchData()
module.exports = fetchData;
