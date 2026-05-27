import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div className="w-full h-screen flex bg-gray-100">

      {/* LEFT SIDE IMAGE */}
<div className="w-1/2 h-full">
  <img
    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80"
    alt="Tea cup"
    className="w-full h-full object-cover"
  />
</div>
      {/* RIGHT SIDE CONVERTER */}
      <div className="w-1/2 h-full flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="w-full max-w-md border border-gray-300 rounded-2xl p-6 shadow-xl bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            {/* From */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap */}
            <div className="relative w-full h-6">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Swap
              </button>
            </div>

            {/* To */}
            <div className="w-full mt-4 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App