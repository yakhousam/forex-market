import React from 'react'

const PriceRow = ({name, price, logo_url, ...rest}) => {
  console.log('logo =', logo_url)
  console.log(rest)
  return (
    <div className='price-row'>
      <img src={logo_url} />
      <div className='name'>{name}</div>
      <div className='price'>{price}</div>
      <style jsx>{`
        .price-row{
          display: flex;
          border: thin solid black;
          align-items: center;
          padding: 5px;
        }
        .price{
          flex: 1;
          text-align: right;
        }
        .name{
          flex: 1;
          
        }
        img{
          height: 40px;
          width: 40px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  )
}

export default PriceRow
