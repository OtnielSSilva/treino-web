export interface IProduct {
  produto_id: number;
  nome: string;
  descicao: string;
  preco: number;
  categoria_id?: string;
  estoque?: number;
  ativo?: boolean;
  imagem?: string;
  quantity?: number;
}
