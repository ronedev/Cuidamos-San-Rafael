import { app } from "./config";
import Firebase from 'firebase/compat/app'

//Funcion para hacer logout en la aplicación
export const logout = () => {
    app.auth().signOut()
        .then(() => window.location = '/')
        .catch((err) => console.error(`Ha ocurrido un problema al intentar cerrar sesion: ${err}`))
}

//Funcion para generar el login con google y guardar los datos del usuario en la base de datos una vez ingresó
export const login = (users) => {
    const google_provider = new Firebase.auth.GoogleAuthProvider();
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

//Funcion para obtener los usuarios que se han logueado con anterioridad
export const getUsers = async () => {
    let res = []
    await app.firestore().collection('usuarios').get()
        .then(querysnapshot => querysnapshot.forEach(doc => {
            res.push(doc.data())
        }))
    return res
}

//Funcion para obtener los especialistas cargados en la base de datos
export const getEspecialistas = async () => {
    let res = []
    await app.firestore().collection('especialistas').get()
        .then(querysnapshot => querysnapshot.forEach(doc => {
            res.push(doc.data())
        }))
    return res
}

//Funcion para obtener las especialidades disponibles en la base de datos
export const getEspecialidades = async () => {
    let res = []
    await app.firestore().collection('especialidades').get()
        .then(querysnapshot => querysnapshot.forEach(doc => {
            res.push(doc.id)
        }))
    return res
}
//Funcion para obtener todos los turnos de los especialistas
export const getTurnos = (especialistas) =>{
    let res = []
    especialistas.forEach(async (especialista) =>{
        await app.firestore().collection(`especialistas/${especialista.id}/turnos`).get()
            .then(querysnapshot => querysnapshot.forEach(doc => res.push(doc.data())))
    })
    return res
}