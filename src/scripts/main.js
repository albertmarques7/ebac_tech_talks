AOS.init();
const dataEvento = new Date("Dec 25, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60 * 24;
    const minutoEmMs = 1000 * 60 ;

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs)
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'evento expirado';
    }
}, 1000);