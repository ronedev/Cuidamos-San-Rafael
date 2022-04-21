//Funcion para hacer logout en la aplicación
export const logout = (app) => {
    app.auth().signOut()
        .then(() => window.location= '/')
        .catch((err) => console.error(`Ha ocurrido un problema al intentar cerrar sesion: ${err}`))
}

//Funcion para generar el login con google y guardar los datos del usuario en la base de datos una vez ingresó
export const login = (users, app, firebase) => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(google_provider)
        .then(async (res) => {
            let id = res.user.uid
            let data = {
                id: id,
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL,
                phone: res.user.phoneNumber
            }
            if (!users.includes(id)) {
                await app.firestore().collection('usuarios').doc(id).set(data)
            }
        })
        .catch(err => console.error(`Ha ocurrido un error al ingresar: ${err}`))
}