export interface IProduct {
  produto_id: number;
  nome: string;
  descricao: string;
  preco: string;
  categoria_id?: string;
  estoque?: number;
  unidade: string;
  ativo?: boolean;
}
