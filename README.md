# 📊 Transaction Summary

Este proyecto implementa una función en **JavaScript** que procesa una lista de transacciones financieras y devuelve un resumen con:

* ✅ Balance total (ingresos - gastos).
* ✅ Número total de transacciones.
* ✅ Promedio de ingresos y gastos.
* ✅ Transacciones que superan un monto específico.

Además, se realizaron **pruebas automáticas BDD con Cucumber** para validar el correcto funcionamiento.

---

## 📂 Estructura del proyecto

```
transaction_summary/
├── src/
│   └── financialSummary.js          # Lógica principal
├── features/
│   ├── financial-summary.feature    # Escenarios de prueba (Gherkin)
│   ├── step_definitions/
│   │   └── financial-steps.js       # Definición de pasos (Cucumber + Chai)
├── cucumber.json                    # Configuración de Cucumber
├── package.json                     # Configuración de Node.js
```

---

## ⚙️ Instalación

1. Clonar el repositorio o copiar los archivos a tu PC.
2. Abrir la carpeta del proyecto en la terminal:

```bash
cd transaction_summary
```

3. Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución de la función manualmente

Puedes probar la función directamente en Node.js.

Ejemplo en `src/test.js` (opcional, si querés agregarlo):

```javascript
const { financialSummary } = require("./financialSummary");

const transactions = [
  { id: 1, description: "Salary", amount: 5000, type: "income" },
  { id: 2, description: "Rent", amount: 1500, type: "expense" },
  { id: 3, description: "Freelance", amount: 2000, type: "income" },
  { id: 4, description: "Groceries", amount: 300, type: "expense" }
];

console.log(financialSummary(transactions, 1000));
```

Ejecutar con:

```bash
node src/test.js
```

---

## 🧪 Ejecución de pruebas BDD

El proyecto incluye **Cucumber + Chai** para validar la lógica.

1. Ejecutar todos los escenarios:

```bash
npm test
```

2. Generar un reporte HTML con los resultados:

```bash
npm run test:html
```

Esto crea el archivo `cucumber-report.html`, que se puede abrir en el navegador.

---

## ✅ Resultados esperados

Al correr `npm test` deberías ver:

```
Feature: Resumen Financiero

  Scenario: Calcular balance con transacciones mixtas
    ✓ Given tengo las siguientes transacciones:
    ✓ When proceso el resumen financiero con umbral 1000
    ✓ Then el balance debe ser 5200
    ✓ And el total de transacciones debe ser 4
    ✓ And el promedio de ingresos debe ser 3500
    ✓ And el promedio de gastos debe ser 900
    ✓ And debo tener 3 transacciones grandes

  Scenario: Manejar array vacío
    ✓ Given no tengo transacciones
    ✓ When proceso el resumen financiero
    ✓ Then el balance debe ser 0
    ✓ And el total de transacciones debe ser 0
    ✓ And el promedio de ingresos debe ser 0
    ✓ And el promedio de gastos debe ser 0
    ✓ And no debo tener transacciones grandes

  Scenario: Error con entrada inválida
    ✓ Given tengo una entrada inválida
    ✓ When intento procesar el resumen financiero
    ✓ Then debe lanzar un error

3 scenarios (3 passed)
21 steps (21 passed)
```

---

## 📌 Tecnologías usadas

* **Node.js**
* **JavaScript (ES6)**
* **Cucumber.js** (BDD)
* **Chai** (assertions)

---

