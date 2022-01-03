(async() => {
    const{value: perfil} = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Que perfil buscas?',
        icon: 'none',
        confirmButtonText: 'Selecciona un perfil',
        footer: 'Por favor selecciona una opcion',
        padding: '1rem',
        background: '#c5e0e6',
        timer: 7000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-start',
        stopKeydownPropagation: false,
        input: 'select',
        inputPlaceholder: 'Perfil',
        inputOptions:{
            Backend: 'Back End',
            Frontend: 'Front End',
            Hardware: 'Hardware management',
        },
        confirmButtonColor: '#e9665c',
        buttonsStyling: true,
        imageUrl: './imagenes/favicon-32x32.png'
    });
    if (perfil){
        Swal.fire({
            title: `Optimizaremos el perfil para ${perfil}`
        });
    }

})()




