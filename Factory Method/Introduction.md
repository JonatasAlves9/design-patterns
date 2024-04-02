# Introduction

## Factory Method

Também conhecido como: Método fábrica, Construtor virtual

**Descrição:** O padrão de projeto Método de Fábrica é um *padrão Criacional* que oferece uma interface para a criação de objetos dentro de uma superclasse, permitindo que subclasses modifiquem o tipo de objetos a serem criados.


### Problema

Você está desenvolvendo um sistema de gerenciamento de documentos para uma empresa e precisa lidar com diferentes tipos de documentos, como planilhas, apresentações e documentos de texto. Cada tipo de documento requer uma inicialização específica com diferentes atributos e configurações. Além disso, você está trabalhando em um ambiente onde novos tipos de documentos podem ser adicionados no futuro.

### Como o padrão Factory Method pode ajudar

Ao implementar o padrão Factory Method, você pode criar uma classe base abstrata para representar a criação de documentos. As subclasses concretas dessa classe base podem ser responsáveis por criar instâncias de documentos específicos, como planilhas, apresentações e documentos de texto. Isso permite que você centralize a lógica de criação de objetos em um único local e facilmente estenda o sistema para lidar com novos tipos de documentos no futuro. Além disso, o padrão Factory Method proporciona flexibilidade, pois permite que você personalize a criação de objetos em subclasses, adaptando-se às necessidades específicas de cada tipo de documento.

## Estrutura

![Descrição da imagem](estrutura.png)

## Pseudocódigo

![Descrição da imagem](pseudocodigo.png)