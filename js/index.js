const fromInput = window.document.getElementById("from-input");
const toInput = window.document.getElementById("to-input");
const fromSelect = window.document.getElementById("from-select");
const toSelect = window.document.getElementById("to-select");
const multipliers = {
    Nanosegundo: 1,
    Microssegundo: 1e+3,
    Milissegundo: 1e+6,
    Segundo: 1e+9,
    Minuto: 6e+10,
    Hora: 3.6e+12,
    Dia: 8.64e+13,
    Semana: 6.048e+14,
    Mês: 2.628e+15,
    'Ano-calendário': 3.1536e+16,
    Década: 3.1536e+17,
    Século: 3.1536e+18,
};

function convert() {
    toInput.value = (fromInput.value * multipliers[fromSelect.value]) / multipliers[toSelect.value];
}