import type { MenuCategory } from '@/lib/types'

export const menuData: MenuCategory[] = [
  {
    id: 'koude-broodjes',
    title: 'Koude Broodjes',
    subtitle: 'Elke dag verse broodjes van bakkerij Westerbos',
    items: [
      { name: 'Filet American', price: 4.75, description: 'Filet American van slagerij Woorts' },
      { name: 'Filet American speciaal', price: 5.49, description: 'met uitjes & ei optie met saus' },
      { name: 'Tonijnsalade', price: 5.75, description: 'huisgemaakte tonijnsalade met kappertjes, bleekselderij, rode ui & ei' },
      { name: 'Zalm', price: 5.75, description: 'met roomkaas, ijsbergsla, rode ui & pijnboompitten' },
      { name: 'Ossenworst', price: 4.99, description: 'worst van slagerij Woorts' },
      { name: 'Pastrami Speciaal', price: 6.49, description: 'met rucola, truffelmayonaise & pijnboompitten' },
      { name: 'Gekookte Ei', price: 5.49, description: 'vers gekookt ei van de locale boer optie met saus' },
      { name: 'Ham', price: 4.99 },
      { name: 'Gezond', price: 5.49, description: 'met ham, kaas, sla, tomaat, komkommer & ei optie met saus brie, honing, ijsbergsla, zongedroogde tomaat & pijnboompitten' },
      { name: 'Brie', price: 4.99 },
      { name: 'Jonge kaas', price: 4.25 },
      { name: 'Oude kaas', price: 4.49 },
    ],
  },
  {
    id: 'warme-broodjes',
    title: 'Warme Broodjes',
    items: [
      { name: 'Ambachtelijke bal gehakt', price: 6.49, description: 'verse bal van slagerij Heemskerk met saus' },
      { name: 'Grillworst', price: 5.25, description: 'worst van slagerij Kaddour optie met saus andalusie, katjang of samurai' },
      { name: 'Warme kip', price: 6.49, description: 'van slagerij Adina met saus' },
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    subtitle: 'Heerlijke verse bonen koffie uit ons La Marzocco apparaat',
    items: [
      { name: 'Koffie Crème', price: 2.75 },
      { name: 'Cappuccino', price: 3.25 },
      { name: 'Flat White', price: 3.25 },
      { name: 'Espresso', price: 2.75 },
      { name: 'Dubbele espresso', price: 3.75 },
      { name: 'Latte macchiato', price: 3.75 },
      { name: 'Koffie verkeerd', price: 3.75 },
      { name: 'Warme Chocomel', price: 2.50 },
    ],
  },
  {
    id: 'extra-koffie',
    title: 'Extra toevoeging bij gewone koffie',
    items: [
      { name: 'Slagroom', price: 0.50 },
      { name: 'Caramel siroop', price: 0.50 },
      { name: 'Vanille siroop', price: 0.50 },
      { name: 'Cookie Dough siroop', price: 0.50 },
      { name: 'Hazelnoot siroop', price: 0.50 },
    ],
  },
  {
    id: 'eigen-oven',
    title: 'Elke dag vers uit eigen oven',
    items: [
      { name: 'Kaas saucijzenbroodje', price: 2.75 },
      { name: 'Saucijzenbroodje', price: 2.75 },
      { name: 'Chocolade Croissant', price: 1.75 },
      { name: 'Croissant', price: 1.25 },
      { name: 'Gevulde koek', price: 1.75 },
    ],
  },
]
