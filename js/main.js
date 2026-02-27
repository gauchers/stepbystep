import { parseSentences, renderFullText, renderTokenized } from './latin.js';
import { analyzeSentence } from './frenchAnalysis.js';

let sentences = [];

function depositText() {
    const input = document.getElementById('raw-latin-input');
    const text = input.value.trim();
    if (!text) return;

    sentences = parseSentences(text);

    renderFullText(sentences);
    renderTokenized(sentences);
}

function resetAll() {
    document.getElementById('full-latin-display').innerHTML = '';
    document.getElementById('tokenized-display').innerHTML = '';
}

function clearTranslation() {
    document.getElementById('translation-area').value = '';
    document.getElementById('french-analysis-result').style.display = 'none';
}

/* ✅ Attachement propre des événements */

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('deposit-btn')
        .addEventListener('click', depositText);

    document.getElementById('reset-btn')
        .addEventListener('click', resetAll);

    document.getElementById('analyze-btn')
        .addEventListener('click', analyzeSentence);

    document.getElementById('clear-btn')
        .addEventListener('click', clearTranslation);

});
