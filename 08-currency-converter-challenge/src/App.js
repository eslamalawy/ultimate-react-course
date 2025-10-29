import { useEffect, useState } from "react";
export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }
      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="AUD">Australian Dollar</option>
        <option value="ZAR">South African Rand</option>
        <option value="THB">Thai Baht</option>
        <option value="SGD">Singapore Dollar</option>
        <option value="SEK">Swedish Krona</option>
        <option value="RON">Romanian Leu</option>
        <option value="PLN">Polish Z┼éoty</option>
        <option value="PHP">Philippine Peso</option>
        <option value="NZD">New Zealand Dollar</option>
        <option value="NOK">Norwegian Krone</option>
        <option value="MYR">Malaysian Ringgit</option>
        <option value="MXN">Mexican Peso</option>
        <option value="KRW">South Korean Won</option>
        <option value="JPY">Japanese Yen</option>
        <option value="ISK">Icelandic Krna</option>
        <option value="ILS">Israeli New Sheqel</option>
        <option value="IDR">Indonesian Rupiah</option>
        <option value="HUF">Hungarian Forint</option>
        <option value="BGN">Bulgarian Lev</option>
        <option value="BRL">Brazilian Real</option>
        <option value="CHF">Swiss Franc</option>
        <option value="CNY">Chinese Renminbi Yuan</option>
        <option value="CZK">Czech Koruna</option>
        <option value="DKK">Danish Krone</option>
        <option value="GBP">British Pound</option>
        <option value="HKD">Hong Kong Dollar</option>
        <option value="USD">United States Dollar</option>
        <option value="TRY">Turkish Lira</option>
        <option value="EUR">Euro</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="INR">Indian Rupee</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
      <option value="AUD">Australian Dollar</option>
        <option value="ZAR">South African Rand</option>
        <option value="THB">Thai Baht</option>
        <option value="SGD">Singapore Dollar</option>
        <option value="SEK">Swedish Krona</option>
        <option value="RON">Romanian Leu</option>
        <option value="PLN">Polish Z┼éoty</option>
        <option value="PHP">Philippine Peso</option>
        <option value="NZD">New Zealand Dollar</option>
        <option value="NOK">Norwegian Krone</option>
        <option value="MYR">Malaysian Ringgit</option>
        <option value="MXN">Mexican Peso</option>
        <option value="KRW">South Korean Won</option>
        <option value="JPY">Japanese Yen</option>
        <option value="ISK">Icelandic Krna</option>
        <option value="ILS">Israeli New Sheqel</option>
        <option value="IDR">Indonesian Rupiah</option>
        <option value="HUF">Hungarian Forint</option>
        <option value="BGN">Bulgarian Lev</option>
        <option value="BRL">Brazilian Real</option>
        <option value="CHF">Swiss Franc</option>
        <option value="CNY">Chinese Renminbi Yuan</option>
        <option value="CZK">Czech Koruna</option>
        <option value="DKK">Danish Krone</option>
        <option value="GBP">British Pound</option>
        <option value="HKD">Hong Kong Dollar</option>
        <option value="USD">United States Dollar</option>
        <option value="TRY">Turkish Lira</option>
        <option value="EUR">Euro</option>
        <option value="CAD">Canadian Dollar</option>
        <option value="INR">Indian Rupee</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}
