// @flow

const dictionary = {
  es: {
    CONCURSO: 'El Concurso',
    CONCURSO_TXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed maximus nunc. Maecenas laoreet augue vitae tellus aliquet, quis ullamcorper ante sodales. Ut ac semper ligula. Sed vel sapien tincidunt nibh vulputate hendrerit. Ut eu libero tellus. Quisque arcu turpis, vestibulum ut sem vel, rhoncus scelerisque felis. Nullam eget efficitur augue. Aenean maximus ac tortor sit amet pulvinar. Vivamus pretium eget enim at pulvinar. Integer at dui arcu. Suspendisse viverra, turpis vitae mattis sollicitudin, nulla tellus bibendum arcu, eget consectetur felis tellus nec neque. Nullam in congue nunc.',
    CONCURSO_EDICION: 'Cuándo es la próxima edición?',
    CONCURSO_EDICION_TXT: 'Nullam volutpat, mi a imperdiet dignissim, justo diam tristique dolor, consequat faucibus dui erat non lorem. Phasellus eu elit arcu. Quisque nibh odio, maximus vel metus et, gravida euismod magna. Curabitur sapien ante, vestibulum quis pulvinar et, consectetur vel turpis. Vestibulum maximus ex augue, non fringilla risus tempus vel. Donec non mauris a nunc posuere mattis at vitae odio. Aenean nulla enim, suscipit in maximus bibendum, feugiat quis magna. Morbi sed ligula tincidunt, pharetra magna vel, mollis odio. Curabitur efficitur ex a leo iaculis, sit amet ultrices sem vehicula. Sed vitae odio sed massa pellentesque interdum pharetra a ante. Nam ex elit, mollis eu elementum vel, facilisis at odio. Fusce accumsan nibh odio, nec laoreet quam ullamcorper sed. Vivamus sapien urna, feugiat in iaculis in, varius ac sapien. Fusce nec sagittis nulla.',
    CONCURSO_ORGANIZA: 'Quén lo organiza?',
    CONCURSO_ORGANIZA_TXT: 'Integer fermentum auctor massa eget commodo. Duis vehicula turpis vel mollis elementum. Proin vel mollis sem, ut convallis augue. Nam tempus mauris at felis convallis suscipit. Suspendisse potenti. Vestibulum auctor egestas mi quis vulputate. Etiam interdum, odio vel fermentum mollis, velit nibh fermentum purus, id finibus turpis mauris id nunc. Maecenas tincidunt tristique consectetur. Curabitur lacus ipsum, elementum et malesuada faucibus, auctor eget est.',
    CONCURSO_PARTICIPAR: 'Quién puede participar?',
    CONCURSO_PARTICIPAR_TXT: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce non elit vitae dolor consequat molestie. Sed blandit dui ac iaculis molestie. Pellentesque elementum posuere massa in luctus. Phasellus faucibus velit vitae ligula efficitur, at placerat est tempor. Etiam venenatis ante nisl, id auctor sapien congue non. Integer augue tortor, accumsan ac ipsum eget, eleifend pharetra magna. Sed varius purus vitae sagittis elementum. Cras quis eros congue, commodo dolor at, condimentum dui. Phasellus facilisis commodo mi sed porttitor.',
    CONCURSO_PATROCINA: 'Quién nos patrocina?',
    CONCURSO_PATROCINA_TXT: 'Praesent non pretium leo. Duis luctus sem a libero elementum, sit amet elementum est dictum. Nam nec risus est. Vivamus vehicula, ex vel consequat tincidunt, elit sapien malesuada magna, ut rutrum odio tortor non justo. Ut nec neque vel lorem rhoncus placerat. Donec maximus urna ut augue feugiat dapibus. In ultrices velit in sapien laoreet, vel pulvinar risus sodales. Vestibulum pulvinar, ex a consectetur condimentum, magna eros cursus dolor, vel porta arcu erat a tortor. Duis non velit in lectus pellentesque cursus et non arcu',
    DESCRIPTION: 'Concurso de lectura en español.',
    FORM_COURSE: 'Curso',
    FORM_SCHOOL_NAME: 'Nombre de la escuela',
    HEADER_MAIN: 'Leo, leo... qué lees?',
    NAME: 'Leo, leo',
    NAV_BASES: 'Bases del concurso',
    NAV_CERTIFICADOS: 'Certificados',
    NAV_COLEGIOS: 'Colegios inscritos',
    NAV_CONCURSO: 'Concurso',
    NAV_GALERIA: 'Galeria',
    NAV_CRITERIOS: 'Criterios de lectores',
    NAV_INFO: 'Información para profesores',
    NAV_INSCRIPCION: 'Inscripción',
    NAV_TEXTOS: 'Textos de lectura',
    NOTFOUND: 'No se ha encontrado la página.',
  },
}

const getDictionary = (lang = 'es') => dictionary[lang]

export default getDictionary
