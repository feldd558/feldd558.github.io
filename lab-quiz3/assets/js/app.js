var color = '#0870FB';
var wallet = 5000
var converted_wallet = 0
var conversion_rate = [1.13, 0.0090, 1.45];
//Euros = 1.13;
//Yen = 0.0090;
//GBP = 1.45

function print_text(text) {
  $('.wallet').html(text);
}

function convert_currency(ammount, conversion_rate) {
  alert(' Your wallet consists of ' + ammount + ' and will be converted to ' + conversion_rate + ' type ');
  alert(' Your converted wallet is now ' + converted_wallet);
  {
    converted_wallet = converted_wallet * conversion_rate;
    alert('Currency has been converted');
    display_converted_wallet();
  }
 }


function display_converted_wallet() {
  $('.value').html(converted_wallet);
}

$('.convert_currency').click(function() {
  var currency_value = $(this).data('value');
  var currency_type = $(this).data('type');
  convert_currency(currency_value, currency_type);
});

convert_currency();