import React, { useId } from 'react'
import Select from 'react-select'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()

  const currencyList = currencyOptions.map((currency) => ({
    value: currency,
    label: currency.toUpperCase(),
  }))

  return (
    <div className={`bg-white p-4 rounded-xl text-sm flex gap-4 shadow-sm ${className}`}>
      
      {/* LEFT */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 mb-2 inline-block font-medium"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-lg"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <p className="text-gray-500 mb-2 font-medium">Currency Type</p>

        <Select
          options={currencyList}
          value={currencyList.find(
            (item) => item.value === selectCurrency
          )}
          onChange={(selectedOption) =>
            onCurrencyChange && onCurrencyChange(selectedOption.value)
          }
          isDisabled={currencyDisable}
          isSearchable
          maxMenuHeight={200}
        />
      </div>
    </div>
  )
}

export default InputBox