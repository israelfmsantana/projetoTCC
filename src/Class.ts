export class Escola {
    id: number;
    nome: string;
    sigla: string;
    inep: string;
    telefone: string;
    tipoUnidadeId: number;
    usuarioIdentifier: string;
}

export class Usuario {
    id: number;
    nome: string;
    dataNascimento: string;
    email: string;
    dataUltimoLogin: Date;
    dataCadastro: Date;
    ativo: boolean;

}


export class addProfessorToTurma {
    professorId: number;
    turmaId: number;
    disciplinaId: number;
}


export class Alternativa {
    texto: string;
    ordem: number;
    questaoId: number;
}


export class Aluno {
    id: number;
}


export class AlunoAtividade {
    alunoId: number;
    atividadeId: number;
}


export class Atividade {
    titulo: string;
    descricao: string;
    valor: number;
    tempoLimiteSegundos: number;
    professorId: number;
}


export class QuestaoAtividade {
    questaoId: number;
    atividadeId: number;
}


export class RespostaAtividade {
    alunoId: number;
    atividadeId: number;
    questaoId: number;
    alternativaEscolhaId: number;
}


export class AtividadeTurma {
    dataAtribuicao: Date;
    dataEntrega: Date;
    atividadeId: number;
    turmaId: number;
    disciplinaId: number;
}


export class Auth {
    nome: string;
    dataNascimento: string;
    email: string;
    senha: string;
    isAluno: boolean;
}
export class Login {
    email: string;
    senha: string;
}


export class Batalha {
    tempoLimiteSegundos: number;
}


export class BatalhaResposta {
    alunoId: number;
    batalhaId: number;
    questaoId: number;
    alternativaEscolhaId: number;
}


export class Disciplina {
    descricao: string;
    sigla: string;
}


export class Questao {
    enunciado: string;
    resposta: string;
    nivelEscola: number;
    disciplinaId: number;
    usuarioCriacaoId: number;
}


export class Turma {
    descricao: string;
    turno: number;
    nivelEscolar: number;
    ano: number;
    cursoId: number;
    periodoLetivoId: number;
    escolaId: number;
}


export class UsuarioEscolaPerfil {
    usuarioId: number;
    escolaId: number;
    perfilId: number;
}


export class Perfil {
    id: number;
    nome: string;
}

export class ResponseUsuarioEscolaPerfil {
    usuario: Auth;
    escola: Escola;
    perfil: Perfil;
    ativo: boolean;
}

