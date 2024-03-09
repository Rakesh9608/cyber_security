async function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptionKey = document.getElementById('encryptionKey').value;

    const response = await fetch('/encrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: inputText,
            key: encryptionKey,
        }),
    });

    const result = await response.json();
    document.getElementById('outputText').value = result.result;
}

async function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptionKey = document.getElementById('encryptionKey').value;

    const response = await fetch('/decrypt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: inputText,
            key: encryptionKey,
        }),
    });

    const result = await response.json();
    document.getElementById('outputText').value = result.result;
}
