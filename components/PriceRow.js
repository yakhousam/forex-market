import React from 'react'

const PriceRow = ({currency, price}) => {
  return (
    <div className='price-row'>
      <div className='currency'>{currency}</div>
      <div className='price'>{price}</div>
      <style jsx>{`
        .price-row{
          display: flex;
          border: thin solid black;
        }
        .currency, .price{
          flex: 1;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default PriceRow
