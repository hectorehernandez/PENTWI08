import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const categories = [
            { 'id': 1, 'strCategory': 'Ordinary Drink' },
            { 'id': 2, 'strCategory': 'Cocktail' },
            { 'id': 3, 'strCategory': 'Milk / Float / Shake' },
            { 'id': 4, 'strCategory': 'Other/Unknown' },
            { 'id': 5, 'strCategory': 'Cocoa' },
            { 'id': 6, 'strCategory': 'Shot' },
            { 'id': 7, 'strCategory': 'Coffee / Tea' },
            { 'id': 8, 'strCategory': 'Homemade Liqueur' },
            { 'id': 9, 'strCategory': 'Punch / Party Drink' },
            { 'id': 10, 'strCategory': 'Beer' },
            { 'id': 11, 'strCategory': 'Soft Drink / Soda' }
        ];
        const drinks = [
            {
                'strCategory': 'Cocktail',
                'strDrink': '57 Chevy with a White License Plate',
                'strDrinkThumb': 'www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg',
                'idDrink': '14029'
            },
            {
                'strCategory': 'Cocktail',
                'strDrink': '155 Belmont',
                'strDrinkThumb': 'www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg',
                'idDrink': '15346'
            },
            {
                'strCategory': 'Cocktail',
                'strDrink': '9 1/2 Weeks',
                'strDrinkThumb': 'www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg',
                'idDrink': '16108'
            },
            {
                'strCategory': 'Cocktail',
                'strDrink': 'A Gilligan\'s Island',
                'strDrinkThumb': 'www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg',
                'idDrink': '16943'
            }];

        return {categories, drinks};
    }
}
