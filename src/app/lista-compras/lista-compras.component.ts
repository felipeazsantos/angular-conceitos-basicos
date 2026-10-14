import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Item = {
  id: number;
  nome: string;
};

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  id: number = 0;
  nome: string = '';
  items: Item[] = [];

  addItem() {
    console.log(this.nome);

    if (!this.nome.trim()) {
      return;
    }

    const item: Item = {
      id: ++this.id,
      nome: this.nome,
    };

    this.items.push(item);

    this.nome = '';
  }
}
