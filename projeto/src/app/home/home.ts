import { CommonModule } from '@angular/common';
// Permitir que a gente vincule o input e as variaveis/ for / if
import { Component } from '@angular/core';
// Permitir que o angular gerencie o formulario  vinculo de botão com metodos
import { FormsModule } from '@angular/forms';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// Atributo => Variavel de uma classe
public nome = '';
// Criando uma lista de atividades
public lista = [
  {id: 1, nome:"Dormir"},
  {id: 2, nome:"Tomar remédio"}
];
public editando: number | null = null;


cancelar(): void {
  this.nome = '';
}

}
