export const toNameIdMap = <Name extends string>(items: { name: string; id: string }[]) =>
   items.reduce(
      (acc, item) => {
         const name = item.name as Name

         acc[name] = item.id

         return acc
      },
      {} as Record<Name, string>
   )
