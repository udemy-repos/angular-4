import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f')
  shoppingListForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      });
  }

  onAddItem(form: NgForm) {
    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const newIng = new Ingredient(ingName, ingAmount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIndex, newIng);
    } else {
      this.shoppingListService.addIngredient(newIng);
    }

    this.editMode = false;
    form.reset();
  }

  onDelete(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedIndex);
      this.onClear(form);
    }
  }

  onClear(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
