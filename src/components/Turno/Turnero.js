import React, { Fragment } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Alert from '@mui/material/Alert';
import { app } from '../../config';

const Turnero = ({ especialidades, especialistas, auth, turnos }) => {

    const [especialidadElegida, setEspecialidadElegida] = useState(null)
    const [especialistaElegido, setEspecialistaElegido] = useState(null)

    const [selectedDate, handleDateChange] = useState(new Date())
    const [erroresDate, setErroresDate] = useState([])

    const [turnoAprobado, setTurnoAprobado] = useState(false)

    const pedirTurno = async (e) => {
        e.preventDefault()
        setErroresDate([])
        //Se valida que el dia ingresado no sea ni Sabado (0) ni Domingo (1)
        if (selectedDate.getUTCDay() !== 1 && selectedDate.getUTCDay() !== 0) {
            //Se valida que la hora ingresada este dentro del horario de atención
            if ((selectedDate.getHours() >= 9 && selectedDate.getHours() <= 12) || (selectedDate.getHours() >= 17 && selectedDate.getHours() <= 20)) {
                let turnosEspecialista = turnos.filter(turno => turno.doctorId === especialistaElegido)
                turnosEspecialista.every(turno => {
                    //Se valida que la fecha y hora ingresada este disponible
                    if (selectedDate.toLocaleDateString() === turno.date && selectedDate.toLocaleTimeString() === turno.time) {
                        //Se filtra el especialista para obtener su nombre mediante su id
                        let especialista = especialistas.filter(doctor => doctor.id === especialistaElegido)

                        setErroresDate(erroresDate => [...erroresDate, `El doctor ${especialista[0].name} ya tiene un turno para esta fecha y hora, por favor intentelo de nuevo`])
                        return false
                    }else{
                        if (auth) {
                            if (erroresDate.length === 0) {
                                app.firestore().collection(`especialistas/${especialistaElegido}/turnos`).doc().set({
                                    doctorId: especialistaElegido,
                                    patient: auth.displayName,
                                    patientId: auth.uid,
                                    date: selectedDate.toLocaleDateString(),
                                    time: selectedDate.toLocaleTimeString()
                                })
                                setTurnoAprobado(true)
                            }
                        } else {
                            setErroresDate(erroresDate => [...erroresDate, 'Debe ingresar a su cuenta para pedir un turno'])
                        }
                    }
                })
            } else {
                setErroresDate(erroresDate => [...erroresDate, 'Seleccione un horario de atencion de 9 a 12 ó de 17 a 20'])
            }
        } else {
            setErroresDate(erroresDate => [...erroresDate, 'Los especialistas no estan disponibles ni Sabados, ni Domingos'])
        }
    }

    return (
        <form className='formContainer'>
            <section className='sectionFormTurnero'>
                <h3>¿Que especialista estas buscando?</h3>
                <p>En base a sus dolencias o molestias seleccione el especialista que corresponda</p>
                <Autocomplete
                    disablePortal
                    options={especialidades}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Especialidad.." onChange={(e) => setEspecialidadElegida(e.target.value)} />}
                    onInputChange={(e) => setEspecialidadElegida(e.target.textContent)}
                />
                <span className='line'></span>
                {
                    especialidades.includes(especialidadElegida) ?
                        <>
                            <section className='sectionFormTurnero especialistaSection'>
                                <h3>Seleccione el especialista que desea</h3>
                                <p>Contamos con un extenso numero de especialistas altamente capacitados</p>
                                <div className='especialistasCardContainer'>
                                    {especialistas.map(especialista => {
                                        if (especialista.speciality === especialidadElegida) {
                                            return (
                                                <div className={especialistaElegido === especialista.id ? 'especialistaCard seleccionado' : 'especialistaCard'} onClick={() => setEspecialistaElegido(especialista.id)}>
                                                    <img src={especialista.img} alt="especialistaImage" />
                                                    <h2>Dr. {especialista.name}</h2>
                                                    <span className='subtitle'>{especialista.speciality}</span>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </section>
                            <span className='line'></span>
                        </>
                        :
                        <>
                            {/* No se ejecuta nada */}
                        </>
                }
                {(especialistaElegido !== null && especialidades.includes(especialidadElegida)) ?
                    <>
                        <section className='sectionFormTurnero'>
                            <h3>Seleccione la fecha y hora de su turno</h3>
                            <p>Tener en cuenta el horario: Lunes a Viernes de 9 a 12 y por la tarde de 17 a 21hrs.</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker value={selectedDate} disablePast onChange={handleDateChange} id='inputTime' />
                                <TimePicker value={selectedDate} disablePast onChange={handleDateChange} id='inputTime' />
                                <DateTimePicker value={selectedDate} disablePast onChange={handleDateChange} id='inputTime' />
                            </MuiPickersUtilsProvider>
                            <button className='btn1' onClick={(e) => pedirTurno(e)}>Pedir Turno</button>
                        </section>
                        {console.log(erroresDate.length)}
                        {erroresDate.length >= 1 ?
                            <>
                                {erroresDate.map(error => {
                                    return (
                                        <>
                                            <Alert severity='error' onClick={()=> setErroresDate([])}>{error}</Alert>
                                        </>
                                    )
                                })}
                            </>
                            :
                            <>
                                {/* no se ejecuta nada */}
                            </>}
                        {turnoAprobado ? <Alert severity='success' onClick={() => setTurnoAprobado(false)}>Se ha aprobado su solicitud de turno, en breve recibirá confirmación a su email</Alert> : ''}
                        <span className='line'></span>
                    </>
                    :
                    <>
                        {/* No se ejecuta nada */}
                    </>
                }
            </section>
        </form>
    )
}

export default Turnero