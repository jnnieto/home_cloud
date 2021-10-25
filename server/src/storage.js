const storage = process.env.CLOUD_STORAGE;

if (!storage) {
    console.error(
        'Ruta del archivo no definido',
        'Asigne un valor a la variable de entorno CLOUD_STORAGE'
    );
    process.exit(1);
}

module.exports = storage;