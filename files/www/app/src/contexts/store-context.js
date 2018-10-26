import React from 'react';

export default React.createContext({
    store: [
        { id: 1, name: "Book", basicTax: false, imported: false, price: 12.49 },
        { id: 2, name: "Music CD", basicTax: true, imported: false, price: 14.99 },
        { id: 3, name: "Chocolate bar", basicTax: false, imported: false, price: 0.85 },
        
        { id: 4, name: "Imported box of chocolates", basicTax: false, imported: true, price: 10.00 },
        { id: 5, name: "Imported bottle of perfume", basicTax: true, imported: true, price: 47.50 },
        
        { id: 6, name: "Imported bottle of perfume", basicTax: true, imported: true, price: 27.99 },
        { id: 7, name: "Bottle of perfume", basicTax: true, imported: false, price: 18.99 },
        { id: 8, name: "Packet of headache pills", basicTax: false, imported: false, price: 9.75 },
        { id: 9, name: "Box of imported chocolates", basicTax: false, imported: true, price: 11.25 }
    ],
    fillBasket: (input) => {
        switch (input) {
            case 1: 
				return [
					{ id: 1, quantity: 2 },
					{ id: 2, quantity: 1 },
					{ id: 3, quantity: 1 }
				];
			case 2: 
				return [
					{ id: 4, quantity: 1 },
					{ id: 5, quantity: 1 }
				];
            case 3: 
                return [
                    { id: 6, quantity: 1 },
					{ id: 7, quantity: 1 },
					{ id: 8, quantity: 1 },
					{ id: 9, quantity: 3 }
                ];
            default: 
                return [];
		}
    }
});