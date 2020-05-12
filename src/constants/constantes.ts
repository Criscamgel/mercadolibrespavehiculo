
export const constantes = {
    REGEX_ID: '\/MCO-(.*?)(-|$)',
    idInformacion: ['Marca', 'Modelo', 'Versión', 'Año', 'Cilindrada', 'Kilómetros'],
    cuotas: [48, 60, 72, 84],
    tasa: 0.01,
    tipoDocumento: [
        {value: null, name: 'Tipo de identificación'},
        {value: 1, name: 'Cédula de Ciudadanía'},
        {value: 2, name: 'Cédula de Extranjería'},
        {value: 3, name: 'NIT'}
    ],
    ocupaciones: [
        {value: null, name: 'Tipo de ocupación'},
        {value: 1, name: 'Pensionado'}, /* 15 */
        {value: 11, name: 'Empleado'}, /* 16 */
        {value: 2, name: 'Independiente'} /* 3 */
    ],
    /* Regex */
    patternLetter: "^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$",
    patternNumber: "[0-9]+$",
    patternCel: "^3+[0-9]{0,10}$",
    patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",

    valorMinIngreso: 1200000,

    /* Credenciales */
    username: "TuCarro",
    password: "tuC@rr02019",
    /* Imagenes */
    logoCliente: './assets/logouno.png',
    logoBanco: './assets/logodos.png',
    logoBancoRojo: './assets/logotres.png'
 };