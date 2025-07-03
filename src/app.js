
import React from "react";
import Button from "./components/button/button";

const App = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Exemplo de Botões Reutilizáveis</h2>

      <Button 
        text="Botão Primário" 
        styleType="primary"
        onClick={() => alert("Clicou no Primário")}
      />

      <br /><br />

      <Button 
        text="Botão Secundário" 
        styleType="secondary"
        onClick={() => alert("Clicou no Secundário")}
      />

      <br /><br />

      <Button 
        text="Botão Perigoso" 
        styleType="danger"
        onClick={() => alert("Clicou no Danger")}
      />

      <br /><br />

      <Button 
        text="Botão Desativado"
        styleType="primary"
        disabled={true}
      />
    </div>
  );
};

export default App;
