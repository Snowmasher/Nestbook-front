import { User } from "./user";

export class Notificacion {

  id!: number;
  id_from!: number;
  id_to!: number;
  tipo = '';
  contenido = new User() || '';
  aceptada = '';
  created_at = '';
  updated_at = '';
  deleted_at = '';

  constructor(

  ) { }

}
