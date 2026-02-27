export function parseSentences(text) {
    const chunks = text.split(/(?<=[.?!])\s*/);

    return chunks.map(chunk => {
        const parts = chunk.split(/(\s+|[,;:.?!])/).filter(Boolean);

        return parts
            .filter(p => !/^\s+$/.test(p))
            .map(p => ({
                text: p,
                isPunct: /^[,;:.?!]$/.test(p),
                grammaticalCase: ''
            }));
    });
}

export function renderFullText(sentences) {
    const el = document.getElementById('full-latin-display');
    el.innerHTML = '';

    sentences.forEach(sentence => {
        sentence.forEach(tok => {
            const span = document.createElement('span');
            span.textContent = tok.text + ' ';
            el.appendChild(span);
        });
    });
}

export function renderTokenized(sentences) {
    const el = document.getElementById('tokenized-display');
    el.innerHTML = '';

    sentences.forEach(sentence => {
        sentence.forEach(tok => {
            if (!tok.isPunct) {
                const span = document.createElement('span');
                span.className = 'latin-word';
                span.textContent = tok.text;

                span.addEventListener('click', () => {
                    toggleCase(span);
                });

                el.appendChild(span);
            }
        });
    });
}

function toggleCase(el) {
    if (el.classList.contains('color-nominatif')) {
        el.className = 'latin-word color-accusatif';
    } else if (el.classList.contains('color-accusatif')) {
        el.className = 'latin-word color-verbe';
    } else if (el.classList.contains('color-verbe')) {
        el.className = 'latin-word';
    } else {
        el.className = 'latin-word color-nominatif';
    }
}
