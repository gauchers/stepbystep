import nlp from 'https://cdn.jsdelivr.net/npm/compromise@14.15.0/+esm';

export function analyzeSentence() {

    const text = document.getElementById('translation-area').value;
    const resultDiv = document.getElementById('french-analysis-result');

    if (!text.trim()) {
        resultDiv.style.display = 'none';
        return;
    }

    const doc = nlp(text);

    const verbs = doc.verbs().out('array');
    const nouns = doc.nouns().out('array');

    let html = `<strong>Analyse (Compromise)</strong><br>`;

    if (verbs.length) html += `<strong>Verbes :</strong> ${verbs.join(', ')}<br>`;
    if (nouns.length) html += `<strong>Noms :</strong> ${nouns.join(', ')}<br>`;

    if (!verbs.length && !nouns.length)
        html += `<em>Aucune donnée détectée.</em>`;

    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}
