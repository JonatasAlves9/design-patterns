// Interface para definir o comportamento dos documentos
interface DocumentInterface {
  open(): void;
  save(): void;
}

// Classe abstrata que atua como Creator (criador)
abstract class DocumentCreator {
  abstract createDocument(): DocumentInterface;

  // Método que usa o Factory Method para criar um documento
  public newDocument(): void {
    const document = this.createDocument();
    document.open();
    document.save();
  }

  // Outros métodos que podem ser implementados
  public removeDocument(): void {
    console.log("Removendo documento...");
  }
}

// Implementação concreta de um tipo específico de documento: Documento de Texto
class TextDocument implements DocumentInterface {
  open(): void {
    console.log("Abrindo documento de texto...");
  }

  save(): void {
    console.log("Salvando documento de texto...");
  }
}

// Implementação concreta de um tipo específico de documento: Planilha
class SpreadsheetDocument implements DocumentInterface {
  open(): void {
    console.log("Abrindo planilha...");
  }

  save(): void {
    console.log("Salvando planilha...");
  }
}

// Implementação concreta do Factory Method para criar documentos de texto
class TextDocumentCreator extends DocumentCreator {
  createDocument(): DocumentInterface {
    return new TextDocument();
  }
}

// Implementação concreta do Factory Method para criar planilhas
class SpreadsheetDocumentCreator extends DocumentCreator {
  createDocument(): DocumentInterface {
    return new SpreadsheetDocument();
  }
}

// Exemplo de uso
const textDocumentCreator = new TextDocumentCreator();
textDocumentCreator.newDocument(); // Saída esperada: Abrindo documento de texto... Salvando documento de texto...

const spreadsheetDocumentCreator = new SpreadsheetDocumentCreator();
spreadsheetDocumentCreator.newDocument(); // Saída esperada: Abrindo planilha... Salvando planilha...
spreadsheetDocumentCreator.removeDocument(); // Saída esperada: Removendo documento...
