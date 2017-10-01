import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 2),
        new Ingredient('Tomatos', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ings: Ingredient[]) {
       this.ingredients.push(...ings);
       this.ingredientsChanged.next(this.getIngredients());
    }

    updateIngredient(index: number, newIng: Ingredient) {
        this.ingredients[index] = newIng;
        this.ingredientsChanged.next(this.getIngredients());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.getIngredients());
    }
}
