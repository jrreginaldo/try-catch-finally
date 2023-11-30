try {
    // Inserir 2 números

    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
  
    // Converte os valores para números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
  
    // Verifica se as conversões foram bem-sucedidas
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Por favor, insira números válidos.");
    }
  
    // Operação matemática (somar)
    const resultado = numero1 + numero2;
  
    // Resultado
    alert(`O resultado da SOMA é: ${resultado}`);
  } catch (error) {
    // Captura e trata a exceção
    alert(`Ocorreu um erro: ${error.message}`);
  } finally {
    // Executa este bloco de código independentemente de ocorrer uma exceção ou não
    alert("Operação concluída.");
  }
  