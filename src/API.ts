import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {addProfessorToTurma, Alternativa, Aluno, AlunoAtividade, Atividade, AtividadeTurma, Batalha, BatalhaResposta, Disciplina, Escola, Login, Questao, QuestaoAtividade, ResponseUsuarioEscolaPerfil, RespostaAtividade, Turma, Auth, UsuarioEscolaPerfil, Usuario} from './Class'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConectEscola {
    private apiURL = 'http://localhost:5268/api/Escola';

    constructor(private http: HttpClient) { }

    GETid(endpoint: number): Observable<Escola> {
        return this.http.get<Escola>(`${this.apiURL}/${endpoint}`);
    };

    GETall(headers: HttpHeaders): Observable<Escola[]> {
        return this.http.get<Escola[]>(`${this.apiURL}`, {headers});
    }

    CREATE(body: Escola) {
        return this.http.post<Escola>(`${this.apiURL}`, body, { observe: 'response' })
    };

};


@Injectable({
    providedIn: 'root',
})
export class ConectUsuario {
    private apiURL = 'http://localhost:5268/api/Usuario';

    constructor(private http: HttpClient) { }

    GETid(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiURL}/${id}`);
    }

    GETallByEscolaId(escolaId: number): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiURL}/escola/${escolaId}`);
    }

    GETallByEscolaIdAndPerfilId(escolaId: number, perfilId: number, headers: HttpHeaders): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.apiURL}/escola/${escolaId}/perfil/${perfilId}`, {headers});
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAddProfessorToTurma {
    private apiURL = 'http://localhost:5268/api/AlocacaoProfessor';

    constructor(private http: HttpClient) { }

    GETprofessorId(endpoint: number): Observable<addProfessorToTurma> {
        return this.http.get<addProfessorToTurma>(`${this.apiURL}/${endpoint}`);
    };

    GETturmaId(endpoint: number): Observable<addProfessorToTurma> {
        return this.http.get<addProfessorToTurma>(`${this.apiURL}/${endpoint}`);
    };


    CREATE(body: addProfessorToTurma) {
        return this.http.post<addProfessorToTurma>(`${this.apiURL}`, body, { observe: 'response' })
    };

    DELETE(endpoint: number){
        return this.http.delete<any>(`${this.apiURL}/${endpoint}`);
    };

};


@Injectable({
    providedIn: 'root',
  })
export class ConectAlternativa {
    private apiURL = 'http://localhost:5268/api/Alternativa';

    constructor(private http: HttpClient) { }

    // Cadastra uma nova alternativa
    CREATE(body: Alternativa) {
        return this.http.post<Alternativa>(`${this.apiURL}`, body, { observe: 'response' });
    }

    // Busca alternativa por ID
    GETid(id: number): Observable<Alternativa> {
        return this.http.get<Alternativa>(`${this.apiURL}/${id}`);
    }

    // Deleta alternativa por ID
    DELETE(id: number): Observable<any> {
        return this.http.delete(`${this.apiURL}/${id}`, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAluno {
    private apiURL = 'http://localhost:5268/api/Aluno';

    constructor(private http: HttpClient) { }

    // Busca aluno por ID
    GETid(id: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${this.apiURL}/${id}`);
    }

    // Busca turma do aluno por ID
    GETturmaByAluno(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/${id}/turma`);
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAlunoAtividade {
    private apiURL = 'http://localhost:5268/api/AtividadeAluno'; // Ajuste conforme o nome real do controller

    constructor(private http: HttpClient) { }

    // Início da atividade pelo aluno
    START(body: AlunoAtividade) {
        return this.http.post<any>(`${this.apiURL}/start`, body, { observe: 'response' });
    }

    // Finalização da atividade pelo aluno
    END(body: AlunoAtividade) {
        return this.http.post<any>(`${this.apiURL}/end`, body, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAtividade {
    private apiURL = 'http://localhost:5268/api/Atividade';

    constructor(private http: HttpClient) {}

    // Cadastra uma nova atividade
    CREATE(body: Atividade) {
        return this.http.post<Atividade>(`${this.apiURL}`, body, { observe: 'response' });
    }

    // Busca atividade por ID
    GETid(id: number): Observable<Atividade> {
        return this.http.get<Atividade>(`${this.apiURL}/${id}`);
    }

    // Lista atividades por aluno
    GETbyAlunoId(alunoId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/aluno/${alunoId}`);
    }

    // Lista atividades por professor
    GETbyProfessorId(professorId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/professor/${professorId}`);
    }

    // Lista atividades por turma
    GETbyTurmaId(turmaId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/turma/${turmaId}`);
    }

    // Lista atividades disponíveis por aluno
    GETavailableByAlunoId(alunoId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/available/aluno/${alunoId}`);
    }

    // Lista atividades disponíveis por professor
    GETavailableByProfessorId(professorId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/available/professor/${professorId}`);
    }

    // Lista atividades disponíveis por turma
    GETavailableByTurmaId(turmaId: number): Observable<Atividade[]> {
        return this.http.get<Atividade[]>(`${this.apiURL}/available/turma/${turmaId}`);
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAtividadeQuestao {
    private apiURL = 'http://localhost:5268/api/AtividadeQuestao';

    constructor(private http: HttpClient) {}

    // Adiciona uma questão à atividade
    ADD(body: QuestaoAtividade) {
        return this.http.post<any>(`${this.apiURL}/add`, body, { observe: 'response' });
    }

    // Deleta uma questão da atividade
    DELETE(id: number) {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
    }

    // Busca questão por ID
    GETid(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/${id}`);
    }

    // Busca questões relacionadas a uma atividade
    GETbyAtividadeId(atividadeId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiURL}/atividade/${atividadeId}`);
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAtividadeResposta {
    private apiURL = 'http://localhost:5268/api/AtividadeResposta';

    constructor(private http: HttpClient) {}

    // Envia resposta do aluno para a questão de uma atividade
    ANSWER(body: RespostaAtividade) {
        return this.http.post<any>(`${this.apiURL}/answer`, body, { observe: 'response' });
    }

    // Busca respostas de um aluno para uma atividade específica
    GETbyAlunoIdAndAtividadeId(atividadeId: number, alunoId: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/atividade/${atividadeId}/aluno/${alunoId}`);
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAtividadeTurma {
    private apiURL = 'http://localhost:5268/api/AtividadeTurma';

    constructor(private http: HttpClient) {}

    // Atribui uma atividade a uma turma
    ASSIGN(body: AtividadeTurma) {
        return this.http.post<any>(`${this.apiURL}/assign`, body, { observe: 'response' });
    }

    // Remove uma atividade de uma turma
    UNASSIGN(id: number) {
        return this.http.post<any>(`${this.apiURL}/unassign/${id}`, null, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
  })
export class ConectAuth {
    private apiURL = 'http://localhost:5268/api/Auth';

    constructor(private http: HttpClient) {}

    // Registro de usuário
    REGISTER(body: Auth) {
        return this.http.post<Auth>(`${this.apiURL}`, body, { observe: 'response' });
    }

    // Login de usuário
    LOGIN(body: Login ) {
        return this.http.post<any>(`${this.apiURL}/login`, body, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
})
export class BatalhaService {
    private apiURL = 'http://localhost:5268/api/batalha';

    constructor(private http: HttpClient) {}

    // Registrar batalha
    registerBatalha(body: Batalha): Observable<any> {
      return this.http.post<any>(`${this.apiURL}`, body);
    }

    // Obter batalha por id
    getBatalhaById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }

    // Iniciar batalha
    startBatalha(body: any): Observable<any> {
      return this.http.put<any>(`${this.apiURL}/start/`, body);
    }

    // Finalizar batalha
    endBatalha(body: any): Observable<any> {
      return this.http.put<any>(`${this.apiURL}/end/`, body);
    }

    // Adicionar aluno à batalha
    addAlunoToBatalha(body: any): Observable<any> {
      return this.http.put<any>(`${this.apiURL}/add-aluno/`, body);
    }
}


@Injectable({
    providedIn: 'root',
})
export class ConectBatalha {
    private apiURL = 'http://localhost:5268/api/BatalhaResposta';

    constructor(private http: HttpClient) { }

    ANSWER(body: BatalhaResposta) {
        return this.http.post<BatalhaResposta>(`${this.apiURL}/Answer`, body, { observe: 'response' });
    };
}


@Injectable({
    providedIn: 'root',
})
export class ConectDisciplina {
    private apiURL = 'http://localhost:5268/api/Disciplina';

    constructor(private http: HttpClient) { }

    GETid(endpoint: number): Observable<Disciplina> {
        return this.http.get<Disciplina>(`${this.apiURL}/${endpoint}`);
    };

    GETall(): Observable<Disciplina[]> {
        return this.http.get<Disciplina[]>(`${this.apiURL}`);
    }

    CREATE(body: Disciplina) {
        return this.http.post<Disciplina>(`${this.apiURL}`, body, { observe: 'response' });
    };
}


@Injectable({
    providedIn: 'root',
})
export class ConectQuestao {
    private apiURL = 'http://localhost:5268/api/Questao';

    constructor(private http: HttpClient) { }

    // Criar uma nova questão
    CREATE(body: Questao) {
        return this.http.post<Questao>(`${this.apiURL}`, body, { observe: 'response' });
    }

    // Obter uma questão pelo ID
    GETid(id: number): Observable<Questao> {
        return this.http.get<Questao>(`${this.apiURL}/${id}`);
    }

    // Obter todas as questões por disciplina
    GETAllByDisciplinaId(disciplinaId: number): Observable<Questao[]> {
        return this.http.get<Questao[]>(`${this.apiURL}/disciplina/${disciplinaId}`);
    }

    // Obter todas as questões por disciplina e nível
    GETAllByDisciplinaIdAndNivel(disciplinaId: number, nivel: number): Observable<Questao[]> {
        return this.http.get<Questao[]>(`${this.apiURL}/disciplina/${disciplinaId}/nivel/${nivel}`);
    }

    // Obter todas as questões por professor
    GETAllByProfessorId(professorId: number): Observable<Questao[]> {
        return this.http.get<Questao[]>(`${this.apiURL}/professor/${professorId}`);
    }

    // Atualizar uma questão
    UPDATE(id: number, body: Questao) {
        return this.http.put(`${this.apiURL}/${id}`, body, { observe: 'response' });
    }

    // Excluir uma questão
    DELETE(id: number) {
        return this.http.delete(`${this.apiURL}/${id}`, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
})
export class ConectTurma {
    private apiURL = 'http://localhost:5268/api/Turma';

    constructor(private http: HttpClient) { }

    // Criar uma nova turma
    CREATE(body: Turma) {
        return this.http.post<Turma>(`${this.apiURL}`, body, { observe: 'response' });
    }

    // Obter uma turma pelo ID
    GETid(id: number): Observable<Turma> {
        return this.http.get<Turma>(`${this.apiURL}/${id}`);
    }

    // Obter todas as turmas
    GETAll(): Observable<Turma[]> {
        return this.http.get<Turma[]>(`${this.apiURL}`);
    }

    // Adicionar aluno à turma
    ADDAlunoToTurma(body: { alunoId: number, turmaId: number }) {
        return this.http.post(`${this.apiURL}/add-aluno`, body, { observe: 'response' });
    }

    // Remover aluno da turma
    REMOVEAlunoFromTurma(body: { alunoId: number, turmaId: number }) {
        return this.http.post(`${this.apiURL}/remove-aluno`, body, { observe: 'response' });
    }
}


@Injectable({
    providedIn: 'root',
})
export class ConectUsuarioEscolaPerfil {
    private apiURL = 'http://localhost:5268/api/UsuarioEscolaPerfil';

    constructor(private http: HttpClient) { }

    // Atribuir usuário à escola com um perfil
    ASSIGN(body: UsuarioEscolaPerfil) {
        return this.http.post(`${this.apiURL}/assign`, body, { observe: 'response' });
    }

    // Remover a atribuição de usuário à escola com um perfil
    UNASSIGN(body: UsuarioEscolaPerfil) {
        return this.http.post(`${this.apiURL}/unassign`, body, { observe: 'response' });
    }


    // Obter todos os perfis vinculados a um usuário pelo ID
    GETAllByUsuarioId(usuarioId: number, headers: HttpHeaders): Observable<ResponseUsuarioEscolaPerfil[]> {
        return this.http.get<ResponseUsuarioEscolaPerfil[]>(`${this.apiURL}/usuario/${usuarioId}`,{headers});
    }


    ACTIVATE(body: UsuarioEscolaPerfil, headers: HttpHeaders): Observable<any> {
        return this.http.post<any>(`${this.apiURL}/activate`, body, { observe: 'response', headers });
    };


    DISABLE(body: UsuarioEscolaPerfil, headers: HttpHeaders): Observable<any> {
        return this.http.post<any>(`${this.apiURL}/disable`, body, { observe: 'response', headers });
    };

    GETAtivoByUsuarioId(usuarioId: number): Observable<ResponseUsuarioEscolaPerfil[]> {
        return this.http.get<ResponseUsuarioEscolaPerfil[]>(`${this.apiURL}/usuario/${usuarioId}/ativo`);
    }


}

