import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../../src/negocio/formatadores/moeda";

describe("negocio/formatadores/moeda", () => {
    
    describe("formataBrasileirParaDecimal", () => {


        it("deve retornar 8.59 quando o valor for '8,59", () => {
            const resultado = formataBrasileiroParaDecimal("8,59");

            expect(resultado).toBe(8.59)
            console.log(resultado)
        });
    });

    describe("formataDecimalParaReal", () => {

        it("deve retornar R$ 8,59 quando o valor for 8.59", () => {
            const resultado = formataDecimalParaReal("8.59")

            expect(resultado).toMatch(/R\$\s8,59/);
        });
    });
});

// toBeFalsy()/toBeTruthy(): compara valores falsos/verdadeiros 
// em um contexto booleano. No caso de falsy, não apenas false 
// será validado, mas valores como null, 0, '', undefined e NaN também. 
// O restante dos valores é considerado truthy;