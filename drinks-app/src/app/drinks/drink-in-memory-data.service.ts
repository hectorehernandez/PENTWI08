import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

export class DrinkInMemoryDataService implements InMemoryDbService {
    createDb(reqInfo): {} | Observable<{}> | Promise<{}> {
        const categories = [
            { 'strCategory': 'Ordinary Drink' },
            { 'strCategory': 'Cocktail' },
            { 'strCategory': 'Milk / Float / Shake' },
            { 'strCategory': 'Other/Unknown' },
            { 'strCategory': 'Cocoa' },
            { 'strCategory': 'Shot' },
            { 'strCategory': 'Coffee / Tea' },
            { 'strCategory': 'Homemade Liqueur' },
            { 'strCategory': 'Punch / Party Drink' },
            { 'strCategory': 'Beer' },
            { 'strCategory': 'Soft Drink / Soda' }
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
