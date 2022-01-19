import '../component/cocktail-list.js';
import '../component/cari-bar.js';
import CocktailSource from '../data/cocktail-source.js';

const main = () => {
    const cariElement = document.querySelector("cari-bar");
    const cocktailListElement = document.querySelector("cocktail-list");

    const onButtonCariClicked = async () => {
        try{
            const result = await CocktailSource.cariCocktail(cariElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        cocktailListElement.cocktails = results;
    };

    const fallbackResult = message => {
        cocktailListElement.renderError(message);
    };

    cariElement.clickEvent = onButtonCariClicked;
};

export default main;