import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Item = {
  id: number;
  nome: string;
  comprado: boolean;
};

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  id: number = 0;
  nome: string = '';
  items: Item[] = [];

  addItem() {
    if (!this.nome.trim()) {
      return;
    }

    const item: Item = {
      id: ++this.id,
      nome: this.nome,
      comprado: false,
    };

    this.items.push(item);

    this.nome = '';
  }

  riscarItem(item: Item) {
    item.comprado = !item.comprado;
  }

  limparLista() {
    this.items = [];
  }
}
