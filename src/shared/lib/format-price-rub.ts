export const formatPriceRub = (price: number | string | null | undefined) => {
   if (price === null || price === undefined) {
      return ''
   }

   const priceAsString = `${price}`.replace(',', '.')
   const priceAsNumber = parseFloat(priceAsString)

   if (isNaN(priceAsNumber)) {
      return ''
   }

   return priceAsNumber.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: priceAsNumber % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
   })
}
