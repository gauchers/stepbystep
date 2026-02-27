import { parseSentences, renderFullText, renderTokenized } from './latin.js';
import { analyzeSentence } from './frenchAnalysis.js';

window.depositText = depositText;
window.resetAll = resetAll;
window.analyzeSentence = analyzeSentence;
window.clearTranslation = clearTranslation;

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
