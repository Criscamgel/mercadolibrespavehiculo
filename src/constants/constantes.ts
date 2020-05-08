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
    ]
 };